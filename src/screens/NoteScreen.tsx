import { useContext, useEffect, useState } from "react";
import { Dimensions, Pressable, StyleSheet, TextInput, View } from "react-native";
import { AppContext, IData } from "../utils/context";
import Icon from "react-native-vector-icons/AntDesign";
import { generateRandomColor } from "../utils/colors";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { RoutesEnum } from "../utils/constant";

const NoteScreen = ({ route, navigation }: { route?: any; navigation: any }) => {
    const { params } = route;
    const { data, updateContext } = useContext(AppContext);
    const [noteData, setNoteData] = useState<IData>({
        id: Date.now().toString(),
        heading: "",
        subText: "",
        backGroundColor: generateRandomColor(),
        isFav: false,
    });

    const handleFavClick = () => {
        setNoteData({
            ...noteData,
            isFav: !noteData.isFav,
        });
    };

    const getNote = async () => {
        const note: IData = data.filter(item => item.id === params?.id)?.[0];
        if (!note) {
            return;
        }
        setNoteData({
            id: note.id,
            heading: note.heading,
            subText: note.subText,
            isFav: note.isFav,
            backGroundColor: note.backGroundColor,
        });
    };

    useEffect(() => {
        if (!params?.id) {
            return;
        }
        getNote();
    }, []);

    const backgroundStyle = {
        backgroundColor: noteData.backGroundColor,
    };

    const handleHeadingUpdate = (val: string) => {
        setNoteData({
            ...noteData,
            heading: val,
        });
    };

    const handleSubTextUpdate = (val: string) => {
        setNoteData({
            ...noteData,
            subText: val,
        });
    };

    const cleanUp = () => {
        setNoteData({
            id: Date.now().toString(),
            subText: "",
            heading: "",
            isFav: false,
            backGroundColor: generateRandomColor(),
        });
    };

    const handleBackPress = () => {
        navigation.navigate(RoutesEnum.HOME_SCREEN);
        cleanUp();
    };
    const handleSave = async () => {
        if (noteData.heading === "" && noteData.subText === "") {
            handleBackPress();
            return;
        }
        let newNotesData: IData[];
        if (params?.id) {
            const otherNotes: IData[] = data.filter(item => item.id !== params?.id);
            newNotesData = [...otherNotes, noteData];
        } else {
            newNotesData = [...data, noteData];
        }
        updateContext({ data: newNotesData });
        await AsyncStorage.setItem("notesData", JSON.stringify(newNotesData));
        handleBackPress();
    };

    const handleDelete = async () => {
        if (noteData.heading === "" && noteData.subText === "") {
            handleBackPress();
            return;
        }
        let newNotesData: IData[];
        const otherNotes: IData[] = data.filter(item => item.id !== params?.id);
        newNotesData = [...otherNotes];
        updateContext({ data: newNotesData });
        await AsyncStorage.setItem("notesData", JSON.stringify(newNotesData));
        handleBackPress();
    };

    return (
        <View style={[backgroundStyle, styles.container]}>
            <Header
                handleSave={handleSave}
                isFav={noteData.isFav}
                handleFavClick={handleFavClick}
                handleBackPress={handleBackPress}
                handleDelete={handleDelete}
            />
            <TextInput
                onChangeText={handleHeadingUpdate}
                value={noteData.heading}
                maxLength={60}
                cursorColor={"black"}
                placeholder="Title"
                multiline={true}
                style={styles.heading}
            />
            <TextInput
                onChangeText={handleSubTextUpdate}
                value={noteData.subText}
                cursorColor={"black"}
                placeholder="Let's note it down"
                multiline={true}
                style={styles.subText}
            />
        </View>
    );
};
export default NoteScreen;

const Header = ({
    handleBackPress,
    handleSave,
    isFav,
    handleFavClick,
    handleDelete,
}: {
    handleBackPress: () => void;
    handleFavClick: () => void;
    handleSave: () => void;
    handleDelete: () => void;
    isFav?: boolean;
}) => {
    return (
        <View style={styles.headerContainer}>
            <Pressable onPress={handleBackPress} style={styles.headerBack}>
                <Icon name="left" size={20} color="white" />
            </Pressable>
            <View style={styles.headerRight}>
                <Pressable onPress={handleSave} style={[styles.save, styles.circle]}>
                    <Icon name={"check"} size={20} color={"white"} />
                </Pressable>
                <Pressable onPress={handleFavClick} style={[styles.circle, styles.save]}>
                    {isFav ? (
                        <Icon name={"heart"} size={20} color={"#db4f1c"} />
                    ) : (
                        <Icon name={"hearto"} size={20} color={"white"} />
                    )}
                </Pressable>
                <Pressable onPress={handleDelete} style={[styles.circle]}>
                    <Icon name={"delete"} size={20} color={"white"} />
                </Pressable>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
    },
    headerContainer: {
        flexDirection: "row",
        paddingVertical: 20,
        // paddingHorizontal: 10,
        width: Dimensions.get("window").width,
        alignItems: "center",
        justifyContent: "space-between",
    },
    headerBack: {
        marginLeft: 10,
        backgroundColor: "#0000002c",
        justifyContent: "center",
        alignItems: "center",
        height: 50,
        width: 50,
        borderRadius: 25,
    },
    heading: {
        paddingHorizontal: 30,
        fontSize: 30,
        fontFamily: "Lufga-Bold",
        color: "black",
        maxWidth: Dimensions.get("window").width - 70,
    },
    subText: {
        fontFamily: "Lufga-SemiBold",
        fontSize: 20,
        paddingLeft: 50,
        color: "black",
    },
    circle: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#1b1b1b49",
        height: 50,
        width: 50,
        borderRadius: 25,
    },
    headerRight: {
        paddingLeft: 5,
        paddingRight: 10,
        paddingVertical: 5,
        borderTopLeftRadius: 25,
        borderBottomLeftRadius: 25,
        backgroundColor: "#0000002c",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    save: {
        marginRight: 5,
    },
});

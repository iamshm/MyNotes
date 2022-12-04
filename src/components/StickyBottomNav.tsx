import React, { useContext } from "react";
import { Dimensions, Pressable, StyleSheet, View } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { AppContext } from "../utils/context";
import { RoutesEnum } from "../utils/constant";

const StickyBottomNav = ({ navigation }: { navigation: any }) => {
    const { isDarkMode } = useContext(AppContext);
    const backgroundStyle = {
        backgroundColor: isDarkMode ? "#bcbcbc77" : "#0000002c",
    };

    const handleAddPress = () => {
        navigation.navigate(RoutesEnum.NOTE_SCREEN);
    };

    return (
        <View style={[backgroundStyle, styles.container]}>
            <Pressable onPress={handleAddPress} style={[styles.add, styles.button]}>
                <Icon name="plus" size={35} color={"white"} />
            </Pressable>
            {/* <Pressable onPress={handleDrawPress} style={[styles.draw, styles.button]}>
                <MaterialCommunityIcons name="draw" size={40} color={"black"} />
            </Pressable> */}
        </View>
    );
};
export default StickyBottomNav;

const styles = StyleSheet.create({
    container: {
        borderRadius: 45,
        flexDirection: "row",
        position: "absolute",
        bottom: Dimensions.get("window").width / 10,
    },
    button: {
        height: 80,
        width: 80,
        borderRadius: 40,
        justifyContent: "center",
        alignItems: "center",
        margin: 3,
    },
    add: {
        backgroundColor: "black",
    },
    addText: {
        color: "white",
    },
    draw: {
        backgroundColor: "#8a8a8ac5",
    },
    drawText: {
        color: "white",
    },
});

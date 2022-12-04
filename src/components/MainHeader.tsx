import { useContext, useEffect, useRef, useState } from "react";
import { StyleSheet, Text, View, Dimensions, Animated, Pressable } from "react-native";
import { colors } from "../utils/colors";
import Ionicons from "react-native-vector-icons/Ionicons";
import { AppContext } from "../utils/context";
import AsyncStorage from "@react-native-async-storage/async-storage";

const MainHeader = () => {
    const { isDarkMode, updateContext } = useContext(AppContext);
    const [expanded, setExpanded] = useState(false);
    const animationWidth = useRef(new Animated.Value(0)).current;

    const textStyle = {
        color: isDarkMode ? colors.white : colors.black,
    };

    const collapseView = () => {
        Animated.timing(animationWidth, {
            duration: 500,
            toValue: 60,
            useNativeDriver: false,
        }).start();
    };

    const expandView = () => {
        Animated.timing(animationWidth, {
            duration: 200,
            toValue: -120,
            useNativeDriver: false,
        }).start();
    };

    const toggleCollapsed = () => {
        setExpanded(!expanded);
    };

    useEffect(() => {
        if (expanded) {
            collapseView();
        } else {
            expandView();
        }
    }, [expanded]);

    const handleColorSchemeChange = async () => {
        await AsyncStorage.setItem("mode", JSON.stringify(!isDarkMode));
        updateContext({ isDarkMode: !isDarkMode });
    };

    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <Text style={[textStyle, styles.headerText]}>My </Text>
                <Text style={[textStyle, styles.headerText2]}>Notes</Text>
            </View>
            <View style={styles.expandButton}>
                <Animated.View style={[{ maxWidth: animationWidth }]}>
                    <Pressable onPress={handleColorSchemeChange} style={[styles.circle, styles.colorMode]}>
                        {isDarkMode ? (
                            <Ionicons name="sunny-sharp" color={"yellow"} size={30} />
                        ) : (
                            <Ionicons name="moon" color={"black"} size={30} />
                        )}
                    </Pressable>
                </Animated.View>
                <Pressable style={[styles.circle]} onPress={toggleCollapsed}>
                    <View>
                        <View style={styles.dot} />
                        <View style={styles.dot} />
                    </View>
                    <View>
                        <View style={styles.dot} />
                        <View style={styles.dot} />
                    </View>
                </Pressable>
            </View>
        </View>
    );
};
export default MainHeader;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        width: Dimensions.get("window").width,
        padding: 20,
        justifyContent: "flex-end",
    },
    headerText: {
        fontSize: 60,
        fontFamily: "Lufga-Regular",
    },
    headerText2: {
        fontSize: 55,
        fontFamily: "Lufga-Regular",
    },
    title: {
        flex: 1,
    },
    circle: {
        backgroundColor: "#1a1a1a",
        height: 60,
        width: 60,
        borderRadius: 30,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    dot: {
        backgroundColor: "white",
        height: 4,
        width: 4,
        borderRadius: 2,
        margin: 3,
    },
    expandButton: {
        overflow: "hidden",
        flexDirection: "row",
    },
    colorMode: {
        backgroundColor: "transparent",
    },
});

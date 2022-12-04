import React, { useContext, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { AppContext } from "../utils/context";
import { colors } from "../utils/colors";
import { RoutesEnum } from "../utils/constant";

const SplashScreen = ({ navigation }: { navigation: any }) => {
    const { isDarkMode } = useContext(AppContext);

    const backgroundStyle = {
        backgroundColor: isDarkMode ? colors.black : colors.white,
    };
    const textStyle = {
        color: isDarkMode ? colors.white : colors.black,
    };

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate(RoutesEnum.HOME_SCREEN);
        }, 2000);
    }, []);

    return (
        <View style={[backgroundStyle, styles.container]}>
            <Text style={[textStyle, styles.text1]}>My</Text>
            <Text style={[textStyle, styles.text2]}>Notes</Text>
        </View>
    );
};

export default SplashScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

    text1: {
        fontSize: 70,
        fontFamily: "Lufga-Bold",
        opacity: 0.9,
    },
    text2: {
        marginTop: -20,
        fontSize: 100,
        fontFamily: "Lufga-Bold",
    },
});

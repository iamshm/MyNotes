import React, { useContext, useEffect } from "react";
import { StyleSheet, Text, useColorScheme, View } from "react-native";
import { AppContext } from "../utils/context";
import { colors } from "../utils/colors";
import { RoutesEnum } from "../utils/constant";

const SplashScreen = ({ navigation }: { navigation: any }) => {
    const { loading } = useContext(AppContext);
    const isDarkMode = useColorScheme() === "dark";
    const backgroundStyle = {
        backgroundColor: isDarkMode ? colors.black : colors.white,
    };
    const textStyle = {
        color: isDarkMode ? colors.white : colors.black,
    };

    useEffect(() => {
        setTimeout(() => {
            return;
        }, 5000);
        if (!loading) {
            navigation.navigate(RoutesEnum.HOME_SCREEN);
        }
    }, [loading]);

    return (
        <View style={[backgroundStyle, styles.container]}>
            <Text style={[textStyle]}>My</Text>
            <Text style={[textStyle]}>Notes</Text>
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
});

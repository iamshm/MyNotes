import { StyleSheet, Text, View, Dimensions, useColorScheme } from "react-native";
import { colors } from "../utils/colors";

const MainHeader = () => {
    const isDarkMode = useColorScheme() === "dark";
    const textStyle = {
        color: isDarkMode ? colors.white : colors.black,
    };
    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <Text style={[textStyle, styles.headerText]}>My </Text>
                <Text style={[textStyle, styles.headerText2]}>Notes</Text>
            </View>
            <View>
                <View style={styles.circle}>
                    <View>
                        <View style={styles.dot} />
                        <View style={styles.dot} />
                    </View>
                    <View>
                        <View style={styles.dot} />
                        <View style={styles.dot} />
                    </View>
                </View>
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
});

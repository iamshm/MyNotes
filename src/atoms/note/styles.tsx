import { Dimensions, StyleSheet } from "react-native";

export const noteStyles = StyleSheet.create({
    lineContainer: {
        marginTop: -10,
        justifyContent: "center",
        alignItems: "center",
        opacity: 0.7,
        marginBottom: 10,
    },
    note: {
        marginVertical: 5,
        marginHorizontal: 2,
        borderRadius: 50,
    },
    tallNote: {
        paddingVertical: 25,
        paddingHorizontal: 10,
        height: 300,
        width: Dimensions.get("window").width / 2 - 9,
    },
    wideNote: {
        padding: 15,
        height: 150,
        width: Dimensions.get("window").width - 18,
    },
    leftNote: {
        borderTopLeftRadius: 0,
    },
    rightNote: {
        borderBottomRightRadius: 0,
    },
    line1: {
        height: 2,
        width: 30,
        backgroundColor: "black",
        marginBottom: 2,
    },
    line2: {
        height: 2,
        width: 15,
        backgroundColor: "black",
    },
    textContainer: {
        flex: 1,
        paddingVertical: 10,
        overflow: "hidden",
    },
    text: {
        color: "black",
        fontSize: 30,
        fontFamily: "Lufga-SemiBold",
        fontWeight: "400",
        width: "60%",
    },
    subText: {
        paddingTop: 5,
        textAlign: "left",
        color: "black",
        paddingLeft: 5,
        fontSize: 15,
        fontFamily: "Lufga-SemiBold",
        fontWeight: "400",
        paddingBottom: 20,
    },
    textView: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    circle: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#0000001a",
        height: 40,
        width: 40,
        borderRadius: 20,
    },
    favIcon: {
        color: "black",
    },
});

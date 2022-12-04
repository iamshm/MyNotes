import { StyleSheet, View } from "react-native";
import { colors } from "../utils/colors";
import MainHeader from "../components/MainHeader";
import NotesList from "../components/NotesList";
import StickyBottomNav from "../components/StickyBottomNav";
import { useContext } from "react";
import { AppContext } from "../utils/context";

const HomeScreen = ({ navigation }: { navigation: any }) => {
    const { isDarkMode } = useContext(AppContext);
    const backgroundStyle = {
        backgroundColor: isDarkMode ? colors.black : colors.white,
    };

    return (
        <View style={[backgroundStyle, styles.container]}>
            <MainHeader />
            <NotesList />
            <StickyBottomNav navigation={navigation} />
        </View>
    );
};
export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

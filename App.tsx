import React, { useEffect, useState } from "react";
import { colors } from "./src/utils/colors";
import { SafeAreaView, StatusBar, StyleSheet, useColorScheme } from "react-native";
import { AppContext, IContextType, InitialAppData } from "./src/utils/context";
import NavigationWrapper from "./src/Navigation";
import AsyncStorage from "@react-native-async-storage/async-storage";

const App = () => {
    const [contextState, setContextState] = useState<IContextType>(InitialAppData);
    const [isLoading, setIsLoading] = useState(false);
    const handleContextUpdate = (obj: Record<any, any>) => {
        setContextState({ ...contextState, ...obj });
    };
    const isDarkMode = useColorScheme() === "dark";
    const backgroundStyle = {
        backgroundColor: isDarkMode ? colors.black : colors.white,
    };

    const getData = async () => {
        try {
            const notesDataJson = await AsyncStorage.getItem("notesData");
            const nameFromStorage = await AsyncStorage.getItem("name");
            const colorSchemeJson = await AsyncStorage.getItem("mode");
            const notes = JSON.parse(notesDataJson || "[]");
            const colorScheme = JSON.parse(colorSchemeJson || JSON.stringify(isDarkMode));
            handleContextUpdate({ name: nameFromStorage, data: notes, isDarkMode: colorScheme });
        } catch (e) {
            console.log("error", e);
            // error reading value
        }
    };
    useEffect(() => {
        setIsLoading(true);
        getData();
        setIsLoading(false);
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar
                barStyle={isDarkMode ? "light-content" : "dark-content"}
                backgroundColor={backgroundStyle.backgroundColor}
            />
            <AppContext.Provider
                value={{
                    isDarkMode: contextState.isDarkMode,
                    name: contextState.name,
                    data: contextState.data,
                    updateContext: handleContextUpdate,
                    loading: isLoading,
                }}>
                <NavigationWrapper />
            </AppContext.Provider>
        </SafeAreaView>
    );
};

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

import React from "react";
import HomeScreen from "../src/screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NoteScreen from "../src/screens/NoteScreen";
import SplashScreen from "../src/screens/SplashScreen";
import { RoutesEnum } from "./utils/constant";
const Stack = createNativeStackNavigator();

const NavigationWrapper = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={RoutesEnum.HOME_SCREEN}>
                <Stack.Screen
                    options={{
                        headerShown: false,
                    }}
                    name={RoutesEnum.SPLASH_SCREEN}
                    component={SplashScreen}
                />
                <Stack.Screen
                    options={{
                        headerShown: false,
                    }}
                    name={RoutesEnum.HOME_SCREEN}
                    component={HomeScreen}
                />
                <Stack.Screen
                    options={{
                        headerShown: false,
                    }}
                    name={RoutesEnum.NOTE_SCREEN}>
                    {props => <NoteScreen {...props} />}
                </Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default NavigationWrapper;

import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  NavigationContainer,
  Theme,
  ThemeProvider,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Platform } from "react-native";
import { NAV_THEME } from "./config";
import { useColorScheme } from "./hooks";
import { Text } from "./components/ui/text";

import "../global.css";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { ToggleTheme } from "./components/ToggleTheme";
import { cn } from "./utils";
import { useColorScheme as useNativewindColorScheme } from "nativewind";

const LIGHT_THEME: Theme = {
  dark: false,
  colors: NAV_THEME.light,
};

const DARK_THEME: Theme = {
  dark: true,
  colors: NAV_THEME.dark,
};

export const App = () => {
  const { colorScheme, setColorScheme, isDarkColorScheme } = useColorScheme();
  const [isColorSchemeLoaded, setIsColorSchemeLoaded] = React.useState(false);

  useEffect(() => {
    (async () => {
      const theme = await AsyncStorage.getItem("theme");
      if (Platform.OS === "web") {
        // Adds the background color to the html element to prevent white background on overscroll.
        document.documentElement.classList.add("bg-background");
      }
      if (!theme) {
        AsyncStorage.setItem("theme", colorScheme);
        setIsColorSchemeLoaded(true);
        return;
      }
      const colorTheme = theme === "dark" ? "dark" : "light";
      if (colorTheme !== colorScheme) {
        setColorScheme(colorTheme);

        setIsColorSchemeLoaded(true);
        return;
      }
      setIsColorSchemeLoaded(true);
    })().finally(() => {});
  }, []);

  if (!isColorSchemeLoaded) {
    return <></>;
  }

  function HomeScreen() {
    return (
      <View className={cn("flex-1 justify-center items-center")}>
        <Text className="color-red-600">Home Screen</Text>
      </View>
    );
  }

  const Stack = createNativeStackNavigator();

  function RootStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerRight: () => <ToggleTheme /> }}
          name="Home"
          component={HomeScreen}
        />
      </Stack.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <ThemeProvider value={isDarkColorScheme ? DARK_THEME : LIGHT_THEME}>
        <StatusBar style={isDarkColorScheme ? "light" : "dark"} />
        <RootStack />
      </ThemeProvider>
    </NavigationContainer>
  );
};

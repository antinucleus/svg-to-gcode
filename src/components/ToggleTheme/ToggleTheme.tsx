import AsyncStorage from "@react-native-async-storage/async-storage";
import { Pressable, View } from "react-native";
import { MoonStar, Sun } from "../Icons";
import { cn, setAndroidNavigationBar } from "@/utils";
import { useColorScheme } from "@/hooks";
import { useEffect } from "react";

export const ToggleTheme = () => {
  const { isDarkColorScheme, setColorScheme } = useColorScheme();

  const setTeheme = async () => {
    const newTheme = isDarkColorScheme ? "light" : "dark";
    setColorScheme(newTheme);
    setAndroidNavigationBar(newTheme);
    AsyncStorage.setItem("theme", newTheme);
  };

  return (
    <Pressable
      onPress={setTeheme}
      className="web:ring-offset-background web:transition-colors web:focus-visible:outline-none web:focus-visible:ring-2 web:focus-visible:ring-ring web:focus-visible:ring-offset-2"
    >
      {({ pressed }) => (
        <View
          className={cn(
            "flex-1 aspect-square pt-0.5 justify-center items-start web:px-5",
            pressed && "opacity-70"
          )}
        >
          {isDarkColorScheme ? (
            <MoonStar
              className="text-foreground"
              size={23}
              strokeWidth={1.25}
            />
          ) : (
            <Sun className="text-foreground" size={24} strokeWidth={1.25} />
          )}
        </View>
      )}
    </Pressable>
  );
};

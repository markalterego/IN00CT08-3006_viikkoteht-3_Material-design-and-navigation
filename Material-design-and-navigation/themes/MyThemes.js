import { MD3DarkTheme, MD3LightTheme } from "react-native-paper";
import { Colors } from "../constants/colors.js";

const customDarkTheme = { 
    ...MD3DarkTheme, 
    roundness: 4, // rounds e.g. buttons
    colors: Colors.dark
}
const customLightTheme = { 
    ...MD3LightTheme, 
    roundness: 4,
    colors: Colors.light
} 

export {
    customDarkTheme,
    customLightTheme
}

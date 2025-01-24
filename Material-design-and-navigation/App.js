import React from 'react';
import { useColorScheme } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import MyAppbar from './components/MyAppbar';
import { customDarkTheme, customLightTheme } from './themes/MyThemes';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import SecondScreen from './screens/SecondScreen';

const Stack = createStackNavigator();

export default function App() {
    const colorScheme = useColorScheme(); // get phone's current colorscheme
    const theme = 
        colorScheme === 'dark' // if colorScheme is
            ? customDarkTheme // true
            : customLightTheme; // false

    return (
        <PaperProvider theme={theme}>
            <NavigationContainer theme={theme}>
                <Stack.Navigator initialRouteName='Home' screenOptions={{header: (navigation, back) => <MyAppbar {...navigation} {...back} />}} >
                    <Stack.Screen name='Home' component={HomeScreen} />
                    <Stack.Screen name='Second' component={SecondScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </PaperProvider>
    );
};


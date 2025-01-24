import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-paper";

export default function HomeScreen() {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Hello! This is officially the HomeScreen function screen thingy BTW!!!</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        marginBottom: 48,
        textAlign: 'center'
    }
});
  
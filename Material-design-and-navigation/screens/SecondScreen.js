import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-paper";

export default function SecondScreen() {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Believe it or not this is the SecondScreen!</Text>
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
  
  
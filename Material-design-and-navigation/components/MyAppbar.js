import React from "react";
import { Appbar } from "react-native-paper";

export default function MyAppbar({ navigation, back }) {
    // arrow-right || arrow-left

    return(
        <Appbar.Header>
            {back && (
                <Appbar.Action icon="arrow-left" onPress={() => navigation.goBack()} />
            )}
            <Appbar.Content title="MD Nav Demo" />
            {!back && (
                <Appbar.Action icon="arrow-right" onPress={() => navigation.navigate('Second')} />
            )}
        </Appbar.Header>
    )
}
import React from "react";
import { Appbar } from "react-native-paper";

export default function MyAppbar({ navigation, back }) {
    
    /*
        Headerin ulkonäkö määräytyy back propertyn tilan perusteella. 

        Back property on alustettu aina silloin, kun nykyiseltä sivulta voi palata edelliselle
        sivulle. Muussa tapauksessa back property on aina undefined.

        Navigation propertyä käytetään sivulta toisella navigointiin
    */

    return(
        <Appbar.Header>
            {(back !== undefined) && (
                <Appbar.Action icon="arrow-left" onPress={() => navigation.goBack()} /> // nuolta painamalla palataan edelliselle näytölle
            )}
            <Appbar.Content title="MD Nav Demo" />
            {(back === undefined) && ( 
                <Appbar.Action icon="arrow-right" onPress={() => navigation.navigate('Second')} /> // nuolta painamalla siirrytään toiselle näytölle
            )}
        </Appbar.Header>
    )
}
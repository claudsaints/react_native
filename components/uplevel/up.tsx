import React from "react";
import { useState } from "react";
import {View,Text, Pressable} from 'react-native';
import { useFonts } from 'expo-font';
import { TextInput } from "react-native-gesture-handler";

export default function Up(){
    let one = 0;
    const [staticNumber,returnNumber] = useState(0);
    const soma = ()=> {
        returnNumber(staticNumber + 1)
    }

    return(
        <Pressable 
            style={{
                margin: 5,
                width: '50%',
                backgroundColor: 'green',
                borderRadius: 10,
                marginTop: 10 
                
            }}
            onPress={soma}
           
        >
            <Text 
                style={{
                    color: 'white',
                    textAlign: 'center'
                }}
            >
                {staticNumber}
            </Text>
        </Pressable>
    )
}
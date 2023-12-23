import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

import ButtonSwitch from "../components/switch";

export default function Input() {
    return (
        <View style={styles.Container}>
            <TextInput style={styles.inputBox}
                placeholder="xxxx xxx xxxxx: "
            />
            <ButtonSwitch />
        </View>
    )
}
const styles = StyleSheet.create({
    Container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 12
    },
    inputBox: {
        borderWidth: 1,
        borderRadius: 12,
        padding: 8,
        paddingLeft: 16,
        width: 250,
        marginLeft: 44
    }

})
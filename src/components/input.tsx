import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

export default function Input() {
    return (
        <View style={styles.Container}>
            <TextInput style={styles.inputBox}
                placeholder="Insira uma palavra: "
            />
        </View>
    )
}
const styles = StyleSheet.create({
    Container: {
        justifyContent: 'center',
    },
    inputBox: {
        borderWidth: 1,
        borderRadius: 14,
        padding: 8
    }

})
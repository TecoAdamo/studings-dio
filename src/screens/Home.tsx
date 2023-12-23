import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Input from "../components/input";

export default function Home() {
    return (
        <View style={styles.Container}>
            <Text style={styles.textCenter}>Hello World</Text>
            <Input />
        </View>
    )
}
const styles = StyleSheet.create({
    Container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textCenter: {
        textAlign: 'center',
    }
})
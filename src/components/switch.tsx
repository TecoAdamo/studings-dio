import React from "react";
import { View, Switch, StyleSheet, Image } from "react-native";

import { useState } from "react";

export default function ButtonSwitch() {


    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);


    return (
        <View style={styles.container}>

            <Switch style={styles.SwithBtn}
                trackColor={{ false: '#767577', true: '#81b0ff' }}
                thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}

            />
            <View style={styles.imageContainer}>
                <Image
                    source={require('../../assets/deadpoolzinho.png')}
                    style={{
                        display: isEnabled ? 'flex' : 'none',
                        width: 40,
                        height: 40,
                    }}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    SwithBtn: {

    },
    imageContainer: {
        position: 'absolute',
        top: 50,
        right: 20,
    }
});
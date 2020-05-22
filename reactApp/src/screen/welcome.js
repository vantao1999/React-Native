/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';
import { Navigation } from 'react-native-navigation';
const DisplayWelcome = ({ componentId }) => {
    return (
        <View style={Styles.container}>
            <Button
                title="Welcome"
                onPress={() => {
                    Navigation.push(componentId, {
                        component: {
                            name: 'Home',
                        },
                    });
                }}
            />
        </View>

    );
};
export default DisplayWelcome;
const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fceffc',
        alignItems: 'center',
        justifyContent: 'center',
    },
});


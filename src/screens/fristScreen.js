import React from 'react';
import { View, Text, Button, Alert } from 'react-native';

const FirstScreen = () => {
    const openAlert = () => {
        Alert.alert("Alert Title", "You clicked the button!");
        console.log("Button Pressed"); // Untuk debugging
    };

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ margin: 16 }}>
                Hello <Text style={{ color: 'red' }}>World</Text>!
            </Text>
            <Button title="This is button"  />
        </View>
    );
};

export default FirstScreen;

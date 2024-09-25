import React from 'react';
import { View, Text } from 'react-native';

const SecondScreen = () => {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}> 
            <View>
                <Text style={{backgroundColor:'lavender', color:'black'}}>
                    Mobile Legends
                </Text>
            </View>
            <View>
                <Text style={{backgroundColor:'cornflowerblue', color:'black'}}>
                    PUBG
                </Text>
            </View>
        </View>
    )
};

export default SecondScreen;
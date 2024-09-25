import React from 'react';
import { SafeAreaProvider }  from 'react-native-safe-area-context';
import FirstScreen from './src/screens/fristScreen';
import SecondScreen from './src/screens/secondScreen';

const App = () => {
    return (
        <SafeAreaProvider>
              
              <SecondScreen/>

        </SafeAreaProvider> 
    )
}

export default App;;
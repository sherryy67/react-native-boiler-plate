import React, {useEffect} from 'react';
import {LogBox} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from 'react-native-splash-screen';
import {Category, Signin} from './src/screens';
import {allTexts} from './src/common';
import ContextProvider from './src/utils/context-api/ContextProvider';
// Ignore log notification by message:
LogBox.ignoreAllLogs();
LogBox.ignoreLogs(['Warning: ...']);

function App() {
  const {
    screenNames: {home, category,signin},
  } = allTexts;
  const Stack = createStackNavigator();

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1500);
  }, []);

  return (
    <ContextProvider>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name={signin}
              component={Signin}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name={category}
              component={Category}
              options={{
                headerShown: false,
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </ContextProvider>
  );
}

export default App;

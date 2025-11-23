import ContextProvider from './src/utils/context-api/ContextProvider';
import React from 'react';
import {LogBox} from 'react-native';
import {allTexts} from './src/common';
import {Category, Home} from './src/screens';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// Ignore log notification by message:
LogBox.ignoreAllLogs();
LogBox.ignoreLogs(['Warning: ...']);

const App = () => {
  const {
    screenNames: {home, category},
  } = allTexts;
  const Stack = createStackNavigator();
  return (
    <ContextProvider>
      <SafeAreaProvider>/Users/mac/Documents/mac-backup/react-native/boiler-plate-react-native/package.json
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name={home}
              component={Home}
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
};

export default App;

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Dashboard} from './Screens';

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
    return (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen options={{
              headerShown: false

            }} name="Dashboard" component={Dashboard} />
          </Stack.Navigator>
        </NavigationContainer>
      )
};

export default RootNavigation;
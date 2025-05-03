import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BiometricSetup from '../screens/BiometricSetup/BiometricSetup';
import Details from '../screens/Details/Details';

export type RootStackParamList = {
  BiometricSetup: undefined;
  Details: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="BiometricSetup"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="BiometricSetup" component={BiometricSetup} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

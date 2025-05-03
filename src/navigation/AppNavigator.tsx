import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BiometricSetup from '../screens/BiometricSetup/BiometricSetup';
import Markets from '../screens/Markets/Markets';

export type RootStackParamList = {
  BiometricSetup: undefined;
  Markets: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Markets"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="BiometricSetup" component={BiometricSetup} />
        <Stack.Screen name="Markets" component={Markets} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

import React, {useEffect} from 'react';

import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './Screens/home';

const App = () => {
  const Stack = createStackNavigator();

  const AuthStack = () => (
    <Stack.Navigator headerMode={null}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );

  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
};

export default App;

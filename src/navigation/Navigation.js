import React from 'react';
import LoginScreen from '../screens/login/Login';
import MainContainer from './main/Main';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const MainStack = createNativeStackNavigator();

const AppContainer = () => {
  const isLogin = true;
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {isLogin
        ? [
            <MainStack.Screen
              key="Main"
              name="Main"
              component={MainContainer}
            />,
          ]
        : [
            <MainStack.Screen
              key="Login"
              name="Login"
              component={LoginScreen}
            />,
          ]}
    </MainStack.Navigator>
  );
};

export default AppContainer;

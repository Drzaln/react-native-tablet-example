import React from 'react';
import {createSidebarNavigator} from '../sidebar/Sidebar';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../../screens/home/Home';
import PaymentScreen from '../../screens/payment/Payment';

const SidebarStack = createSidebarNavigator();

const HomeStack = createNativeStackNavigator();
const PaymentStack = createNativeStackNavigator();

function HomeTabContainer() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <HomeStack.Screen name="Home" component={HomeScreen} />
    </HomeStack.Navigator>
  );
}

function PaymentTabContainer() {
  return (
    <PaymentStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <PaymentStack.Screen name="Payment" component={PaymentScreen} />
    </PaymentStack.Navigator>
  );
}

const MainContainer = () => {
  return (
    <SidebarStack.Navigator>
      <SidebarStack.Screen
        name="HomeTab"
        component={HomeTabContainer}
        options={{
          // icon: images.PACKAGE_SUBMISSION,
          title: 'Home',
        }}
      />
      <SidebarStack.Screen
        name="PaymentTab"
        component={PaymentTabContainer}
        options={{
          // icon: images.PACKAGE_SUBMISSION,
          title: 'Payment',
        }}
      />
    </SidebarStack.Navigator>
  );
};

export default MainContainer;

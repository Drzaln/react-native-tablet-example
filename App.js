import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {NavigationService} from './src/utils/utils';
import AppContainer from './src/navigation/Navigation';

const App = () => {
  return (
    <NavigationContainer ref={NavigationService.navigationRef}>
      <AppContainer />
    </NavigationContainer>
  );
};

export default App;

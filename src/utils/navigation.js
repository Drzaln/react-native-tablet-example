import {createNavigationContainerRef} from '@react-navigation/native';

const navigationRef = createNavigationContainerRef();

function navigate(name, params) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}

export default {
  navigationRef,
  navigate,
};

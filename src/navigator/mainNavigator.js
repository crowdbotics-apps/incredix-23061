import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps179781Navigator from '../features/Maps179781/navigator';
import Settings179759Navigator from '../features/Settings179759/navigator';
import Settings179744Navigator from '../features/Settings179744/navigator';
import NotificationList179743Navigator from '../features/NotificationList179743/navigator';
import Maps179742Navigator from '../features/Maps179742/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps179781: { screen: Maps179781Navigator },
Settings179759: { screen: Settings179759Navigator },
Settings179744: { screen: Settings179744Navigator },
NotificationList179743: { screen: NotificationList179743Navigator },
Maps179742: { screen: Maps179742Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;

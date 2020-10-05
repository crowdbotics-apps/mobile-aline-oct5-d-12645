import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen211740Navigator from '../features/BlankScreen211740/navigator';
import BlankScreen111697Navigator from '../features/BlankScreen111697/navigator';
import BlankScreen011689Navigator from '../features/BlankScreen011689/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen211740: { screen: BlankScreen211740Navigator },
BlankScreen111697: { screen: BlankScreen111697Navigator },
BlankScreen011689: { screen: BlankScreen011689Navigator },

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

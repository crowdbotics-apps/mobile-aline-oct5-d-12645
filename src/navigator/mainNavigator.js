import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen111884Navigator from '../features/BlankScreen111884/navigator';
import BlankScreen211882Navigator from '../features/BlankScreen211882/navigator';
import BlankScreen811880Navigator from '../features/BlankScreen811880/navigator';
import BlankScreen611878Navigator from '../features/BlankScreen611878/navigator';
import BlankScreen511877Navigator from '../features/BlankScreen511877/navigator';
import BlankScreen411874Navigator from '../features/BlankScreen411874/navigator';
import BlankScreen311788Navigator from '../features/BlankScreen311788/navigator';
import BlankScreen211740Navigator from '../features/BlankScreen211740/navigator';
import BlankScreen111697Navigator from '../features/BlankScreen111697/navigator';
import BlankScreen011689Navigator from '../features/BlankScreen011689/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen111884: { screen: BlankScreen111884Navigator },
BlankScreen211882: { screen: BlankScreen211882Navigator },
BlankScreen811880: { screen: BlankScreen811880Navigator },
BlankScreen611878: { screen: BlankScreen611878Navigator },
BlankScreen511877: { screen: BlankScreen511877Navigator },
BlankScreen411874: { screen: BlankScreen411874Navigator },
BlankScreen311788: { screen: BlankScreen311788Navigator },
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

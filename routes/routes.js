import { createStackNavigator, } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/home.js';
import CardioScreen from '../screens/cardioscreen.js';

const screens = {
    homeScreen: {
        screen: Home
    },
    cardioScreen: {
        screen: CardioScreen
    } 
}

const HomeStack = createStackNavigator(screens);
export default createAppContainer(HomeStack);
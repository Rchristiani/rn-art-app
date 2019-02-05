import Home from './components/Home';
import Search from './components/Search';
import {createStackNavigator, createAppContainer} from 'react-navigation';


const AppNavigation = createStackNavigator({
  Home: {
    screen: Home
  },
  Search: {
    screen: Search
  }
});

export default createAppContainer(AppNavigation)
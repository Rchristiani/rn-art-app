import Home from './screens/Home';
import SearchResults from './screens/SearchResults';
import {createStackNavigator, createAppContainer} from 'react-navigation';


const AppNavigation = createStackNavigator({
  Home: {
    screen: Home
  },
  Search: {
    screen: SearchResults
  }
});

export default createAppContainer(AppNavigation)
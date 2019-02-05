import React from 'react';
import {View,Text} from 'react-native';
import {NavigationScreenProps} from 'react-navigation';

interface Props {}

type ComposedProps = Props & NavigationScreenProps

interface ArtObject {
  id: string;
  title: string;
  webImage: {
    url: string;
  };
}

interface State {
  searchResults: ArtObject[]
}

const API_URL = 'https://www.rijksmuseum.nl/api/en/collection';
const API_KEY = 'pUaGTYo5';

class Search extends React.Component<ComposedProps,State> {
  state = {
    searchResults: []
  }
  componentDidMount() {
    const search = this.props.navigation.getParam('search');
    fetch(`${API_URL}?q=${search}&key=${API_KEY}&format=json`)
      .then(res => res.json())
      .then(({artObjects:searchResults}) => this.setState({searchResults}));
  }
  render() {
    const search = this.props.navigation.getParam('search');
    const {searchResults} = this.state;
    return (
      <View>
        <Text>Search: {search}</Text>
        {searchResults.map((art: ArtObject) => {
          return (
            <Text key={art.id}>{art.title}</Text>
          )
        })}
      </View>
    )
  }
}

export default Search;
import React from 'react';
import {View,Text,StyleSheet,ScrollView} from 'react-native';
import {NavigationScreenProps} from 'react-navigation';
import {ArtObject} from '../utilities/types';
import SingleArt from './SingleArt';

interface Props {}

type ComposedProps = Props & NavigationScreenProps

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
        <Text style={styles.searchTitle}>Search Results for: {search}</Text>
        <ScrollView>
          {searchResults
            .filter((art: ArtObject) => art.hasImage)
            .map((art: ArtObject) => <SingleArt key={art.id} {...art}/>)}
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  searchTitle: {
    padding: 10,
    fontSize: 15,
    fontWeight: 'bold'
  }
});

export default Search;


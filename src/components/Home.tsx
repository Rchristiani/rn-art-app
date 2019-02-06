import * as React from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
import {NavigationScreenProps} from 'react-navigation';

interface State {
  search: string;
}

interface Props {}

type ComposedProps = Props & NavigationScreenProps;

class Home extends React.Component<ComposedProps,State> {
  state = {
    search: ''
  }
  constructor(props: ComposedProps) {
    super(props);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.search = this.search.bind(this);
  }
  handleTextChange(search: string) {
    this.setState({search})
  }
  search() {
    const {search} = this.state;
    this.props.navigation.navigate('Search',{search})
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.appTitle}>🖼 Art Search 🖌</Text>
        <TextInput 
          style={styles.search}
          value={this.state.search}
          onChangeText={this.handleTextChange}
        />
        <Button 
          title="Search"
          onPress={this.search}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEEEE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  appTitle: {
    fontSize: 35,
    textTransform: 'uppercase',
    marginBottom: 25
  },
  search: {
    fontSize: 30,
    borderStyle: 'solid',
    borderWidth: 1,
    width: '80%',
    textAlign: 'center',
    borderRadius: 10,
    marginBottom: 25,
    padding: 10
  }
});

export default Home;
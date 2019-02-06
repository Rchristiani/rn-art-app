import React from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';
import {ArtObject} from '../utilities/types';

const SingleArt = (props: ArtObject) => {
  const {title, webImage: {url},principalOrFirstMaker} = props;
  return (
    <View style={styles.container}>
      <Image 
        source={{uri: url}}
        style={{
          height:150,
          width:150,
        }}
      />
      <View style={styles.textContainer}>
        <Text>{title}</Text>
        <Text>{principalOrFirstMaker}</Text>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#CFD8DC",
    margin: 10,
    padding: 15,
    flexDirection: 'row'
  },
  textContainer: {
    marginLeft: 15
  }
})

export default SingleArt;
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
        <Text style={styles.title}>{title}</Text>
        <Text>{principalOrFirstMaker}</Text>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FAFAFA",
    margin: 10,
    padding: 15,
    flexDirection: 'row',
    borderRadius: 5
  },
  textContainer: {
    marginLeft: 15,
    flexDirection: 'column',
    flex: 1
  },
  title: {
    fontWeight: 'bold',
    flexShrink: 1,
    marginBottom: 10
  }
})

export default SingleArt;
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ListItem = (props) => {
  return(
    <View style={styles.listItem}>
      <Image resizeMode='cover' style={styles.dreamImage} source={props.dreamImage} />
      <Text>{props.dream}</Text>  
    </View>
  )
};

const styles = StyleSheet.create({
  listItem: {
    width: "100%",
    padding: 5,
    margin: 3,
    backgroundColor: "#eee",
    flexDirection: 'row',
    alignItems: 'center'
  },
  dreamImage: {
    marginRight: 8,
    height: 5,
    width: 5
  }
});

export default ListItem;
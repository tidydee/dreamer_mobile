import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ListItem = (props) => {
  return(
    <View style={styles.listItem}>
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
  placeImage: {
    marginRight: 8,
    height: 100,
    width: 100
  }
});

export default ListItem;
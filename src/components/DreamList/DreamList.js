import React from 'react'; 
import {View,FlatList, Text, StyleSheet, Dimensions} from 'react-native';

import ListItem from '../ListItem/ListItem';
import dreamImage from '../../../src/assets/dreamPLaceHolder.jpg';

const DreamList = (props) => {  
  _listEmptyComponent = () => {
    return(
      props.error !== null && (
        <Text style={styles.error}>{props.error}</Text> //If Error, Prints Error to Screen.
      )    
    )
  }

  return (
    <FlatList
      contentContainerStyle={styles.cardContainer}
      data={props.data}
      ListEmptyComponent={this._listEmptyComponent}
      keyExtractor={(item, key) => key.toString()}
      renderItem={(info) => (
        <ListItem
          dreamImage={dreamImage}
          dream={info.item.title}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    // flex: 1,
    overflow: 'hidden',
    backgroundColor: '#fff',
    alignItems: 'center',
    width: Dimensions.get('window').width,
    borderWidth: 0,
  },
  error: {
    color: 'red',
    fontSize: 30,
    fontWeight: 'bold'
  }
});

export default DreamList;
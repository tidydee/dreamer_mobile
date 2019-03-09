import React from 'react'; 
import {FlatList, Text, StyleSheet} from 'react-native';

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
      style={styles.dataContainer}
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
  viewContainer: {
    // flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  dataContainer: {
    // flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center'
  },
  dreamsText: {
    color: '#000',
    fontSize: 15,
    width: '60%'
  }, 
  error: {
    color: 'red',
    fontSize: 30,
    fontWeight: 'bold'
  }
});

export default DreamList;
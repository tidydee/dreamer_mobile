import React from 'react'; 
import {View, FlatList, Text, StyleSheet, Dimensions} from 'react-native';
import { colors, dimensions } from '../../Styles/Styles';

import ListItem from '../ListItem/ListItem';

const DreamList = (props) => {  
  _listEmptyComponent = () => {
    return(
      props.error !== null && (
        <Text style={styles.error}>{props.error}</Text> //If Error, Prints Error to Screen.
      )    
    )
  }

  return (
    <View>
      <FlatList
        contentContainerStyle={styles.cardContainer}
        data={props.data}
        ListEmptyComponent={this._listEmptyComponent}
        keyExtractor={(item, key) => key.toString()}
        renderItem={info => (
          <ListItem
            dreamImage={props.image}
            itemTitle={info.item.title}
            itemTheme={info.item.theme}
            itemIntro={info.item.dream}
            itemDate={info.item.date}
            onItemPressed={() => props.onItemSelected(info.item._id)}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    // flex: 1,
    overflow: 'hidden',
    // backgroundColor: 'colors.BACKGROUND',
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
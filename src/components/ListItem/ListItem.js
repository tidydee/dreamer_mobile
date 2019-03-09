import React from 'react';
import { View, Text, Image, StyleSheet} from 'react-native';

const ListItem = (props) => {
  return(
    <View style={styles.listItem}>
      <Image resizeMode='cover' style={styles.dreamImage} source={props.dreamImage} />
      <Text 
        style={styles.dreamText}
        numberOfLines={1}
        >
        {props.dream}
      </Text>  
    </View>
  )
};

const styles = StyleSheet.create({
  listItem: {
    padding: 5,
    margin: 3,
    backgroundColor: "#eee",
    flexDirection: 'row',
    alignItems: 'center'
  },
  dreamImage: {
    marginRight: 8,
    height: 50,
    width: 50
  },
  dreamText: {
    color: '#000',
    fontSize: 15,
    width: '80%',
    // width: 0,
    // flexGrow: 1,    
    // flexWrap: 'wrap',
    // flexDirection: 'row'
  }, 
});

export default ListItem;
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { colors, dimensions } from '../../Styles/Styles';
import Moment from 'moment';

const ListItem = (props) => {
  return(
    <TouchableOpacity onPress={props.onItemPressed}>
      <View style={styles.listItem}>
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', }}>
          <View>
            <Image resizeMode='cover' style={styles.itemImage} source={props.dreamIcon} />
          </View>
          <View style={{ flexDirection: 'column', width: '55%'}}>
            <Text 
              style={styles.itemTitle}
              numberOfLines={1}
              >
              {props.itemTitle}
            </Text>
            <Text style={styles.itemTheme}>{props.itemTheme}</Text>
            <Text style={styles.itemIntro} numberOfLines={1}>{props.itemIntro}</Text>
          </View>
          <View style={{  }}>
            <Text style={styles.itemDate}>{Moment(props.itemDate).format('ll')}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    height: dimensions.CARD_HEIGHT,
    width: dimensions.CARD_WIDTH,
    padding: 5,
    margin: 3,
    backgroundColor: colors.CARD,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.CARD
  },
  itemImage: {
    height: 50,
    width: 50
  },
  itemTitle: {
    color: colors.CARD_TITLE,
    fontSize: 17,
    width: "80%",
    paddingTop: 0,
    top: 0
  },
  itemTheme: {
    color: colors.CARD_THEME,
    fontSize: 14,
    width: "80%"
  },
  itemIntro: {
    color: colors.CARD_INTRO,
    fontSize: 12,
    marginTop: 10,
    // width: '20%',
  },
  itemDate: {
    color: colors.CARD_DATE,
    fontSize: 12,
    top: 0
  }
});

export default ListItem;
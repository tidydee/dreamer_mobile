import React, { Component } from 'react';
import { Modal, View, Image, Text, TouchableOpacity, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { Header } from 'react-navigation';
import Moment from 'moment';
import { connect } from 'react-redux';
import Icon from "@expo/vector-icons/Ionicons";
import { colors, getHeaderHeight } from "../../Styles/Styles";

import DreamEdit from '../DreamEdit/DreamEdit';
import { isEditing, deleteDream, selectDream, deselectDream } from '../../store/actions/index';

class DreamDetail extends Component {
  onDreamEdit = id => {
    console.log("ID");
    console.log(id);
    this.props.onEditing(id);
  };

  render() {
    const {
      onModalClose,
      isEditing,
      dreamIcon,
      selectedDream,
      dreamUpdate,
      onItemSaved,
      onItemDeleted
    } = this.props;
    return (
      <Modal onRequestClose={onModalClose} animationType="slide">
        <View style={styles.topBarContainer}>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "flex-end"
            }}
          >
            <TouchableOpacity
              onPress={this.props.onDeselectDream}
              hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
            >
              <Icon
                name="md-close"
                style={{
                  paddingLeft: 10,
                  paddingBottom: "3%",
                  color: colors.APP_HEADER_ICON
                }}
                size={30}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                onItemDeleted(selectedDream ? selectedDream._id : null)
              }
              hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
            >
              <Icon
                name="md-trash"
                style={{
                  paddingBottom: "3.5%",
                  color: colors.APP_HEADER_ICON
                }}
                size={26}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                this.onDreamEdit(selectedDream ? selectedDream._id : null)
              }
              hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
            >
              <Icon
                name="md-create"
                style={{
                  paddingRight: 10,
                  paddingBottom: "3.5%",
                  color: colors.APP_HEADER_ICON
                }}
                size={26}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            {/* TODO: Add dream theme icons/images to MongoDB and load via ref ID. Then load into RN via URL-Image, see "Udemy034 UsingNetworkImages" */}
            {/* <Image style={styles.modalImage} source={image} /> */}
            {isEditing ? (
              <Modal onRequestClose={onModalClose} animationType="slide">
                <DreamEdit
                  // dream={selectedDreamState}
                  onItemEditData={dreamUpdate}
                  onItemSaved={onItemSaved}
                  onModalClose={onModalClose}
                  dreamIcon={dreamIcon}
                />
              </Modal>
            ) : (
              <View style={styles.modalContainer}>
                <ScrollView style={styles.scrollViewContainer}>
                  <View style={styles.titleBarContainer}>
                    <View>
                      <Image
                        resizeMode="cover"
                        style={styles.titleBarImage}
                        source={dreamIcon}
                      />
                    </View>
                    <View>
                      <Text style={styles.itemTitle}>
                        {selectedDream.title}
                      </Text>
                      <Text style={styles.itemTheme}>
                        {selectedDream.theme}
                      </Text>
                    </View>
                    <View>
                      <Text style={styles.itemDate}>
                        {Moment(selectedDream.date).format("ll")}
                      </Text>
                      <Text style={styles.itemDate}>
                        {Moment(selectedDream.date).format("LT")}
                      </Text>
                    </View>
                  </View>
                  {/* --------------------------------------- */}
                  <View style={styles.infoContainer}>
                    {/* <Text style={styles.modalText}>
                      _ID: {selectedDream._id}
                    </Text> */}
                    <View style={styles.itemInfoArea}>
                      <Text style={styles.itemInfoHeading}>
                        WHERE WAS I
                      </Text>
                      <Text style={styles.itemInfoText}>
                        {selectedDream.whereWasI}
                      </Text>
                    </View>
                    <View style={styles.itemInfoArea}>
                      <Text style={styles.itemInfoHeading}>
                        FOCUS - MAIN PLAYER IN DREAM
                      </Text>
                      <Text style={styles.itemInfoText}>
                        {selectedDream.focus}
                      </Text>
                    </View>
                    <View style={styles.itemInfoArea}>
                      <Text style={styles.itemInfoHeading}>
                        SUB_FOCUS(ES)
                      </Text>
                      <Text style={styles.itemInfoText}>
                        {selectedDream.subFocus}
                      </Text>
                    </View>
                    <View style={styles.itemInfoArea}>
                      <Text style={styles.itemInfoHeading}>COLOR</Text>
                      <Text style={styles.itemInfoText}>
                        {selectedDream.color ? "Yes" : "No"}
                      </Text>
                    </View>
                    <View style={styles.itemInfoArea}>
                      <Text style={styles.itemInfoHeading}>
                        BLACK & WHITE
                      </Text>
                      <Text style={styles.itemInfoText}>
                        {selectedDream.blackAndWhite ? "Yes" : "No"}
                      </Text>
                    </View>
                    <View style={styles.itemInfoArea}>
                      <Text style={styles.itemInfoHeading}>MUTED</Text>
                      <Text style={styles.itemInfoText}>
                        {selectedDream.muted ? "Yes" : "No"}
                      </Text>
                    </View>
                    <View style={styles.itemInfoArea}>
                      <Text style={styles.itemInfoHeading}>
                        RECURRING DREAM
                      </Text>
                      <Text style={styles.itemInfoText}>
                        {selectedDream.recurringDream ? "Yes" : "No"}
                      </Text>
                    </View>
                    <View style={styles.itemInfoArea}>
                      <Text style={styles.itemInfoHeading}>CATEGORY</Text>
                      <Text style={styles.itemInfoText}>
                        {selectedDream.category}
                      </Text>
                    </View>
                    <View style={styles.itemInfoArea}>
                      <Text style={styles.itemInfoHeading}>CONTEXT</Text>
                      <Text style={styles.itemInfoText}>
                        {selectedDream.context}
                      </Text>
                    </View>
                    <View style={styles.itemInfoArea}>
                      <Text style={styles.itemInfoHeading}>DREAM</Text>
                      <Text style={styles.itemInfoText}>
                        {selectedDream.dream}
                      </Text>
                    </View>
                    <View style={styles.itemInfoArea}>
                      <Text style={styles.itemInfoHeading}>
                        INTERPRETATION
                      </Text>
                      <Text style={styles.itemInfoText}>
                        {selectedDream.interpretation}
                      </Text>
                    </View>
                    <View style={styles.lastItemInfoArea}>
                      <Text style={styles.itemInfoHeading}>
                        MY RESPONSE
                      </Text>
                      <Text style={styles.itemInfoText}>
                        {selectedDream.myResponse}
                      </Text>
                    </View>
                    {/* <View style={styles.itemInfoArea}>
                      <Text style={styles.itemInfoHeading}>USER_ID</Text>
                      <Text style={styles.itemInfoText}>
                        {selectedDream.userId}
                      </Text>
                    </View> */}
                  </View>
                </ScrollView>
              </View>
            )}
          </View>
        </View>
      </Modal>
    );
  }
}

const { height, width } = Dimensions.get('screen');

const styles = StyleSheet.create({
  topBarContainer: {
    height: getHeaderHeight(),
    backgroundColor: colors.SECONDARY,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  modalBackground: {
    backgroundColor: colors.BACKGROUND,
    padding: 20
  },
  modalContainer: {
    height: height,
    backgroundColor: colors.ITEM,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.ITEM
  },
  scrollViewContainer: {
    height: 200,
    paddingBottom: 500
  },
  titleBarContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 85,
    paddingLeft: 15,
    paddingRight: 15,
    borderBottomWidth: 1,
    borderBottomColor: colors.ITEM_BOTTOM_BORDER
  },
  infoContainer: {
    marginLeft: 20,
    marginRight: 20
  },
  titleBarImage: {
    height: 50,
    width: 50
  },
  itemTitle: {
    color: colors.ITEM_MAIN_TITLE,
    fontSize: 17
  },
  itemTheme: {
    color: colors.ITEM_MAIN_THEME_TEXT,
    fontSize: 14
  },
  itemDate: {
    color: colors.ITEM_MAIN_DATE_TIME,
    fontSize: 12
  },
  itemInfoArea: {
    minHeight: 100,
    borderBottomWidth: 1,
    borderBottomColor: colors.ITEM_BOTTOM_BORDER
  },
  lastItemInfoArea: {
    minHeight: 100,
    paddingBottom: 150
  },
  itemInfoHeading: {
    marginTop: 20,
    fontSize: 12,
    color: colors.ITEM_HEADING
  },
  itemInfoText: {
    marginTop: 15,
    paddingBottom: 35,
    fontSize: 17,
    color: colors.ITEM_TEXT
  },
});

const mapStateToProps = state => {
  return {
    selectedDream: state.dreams.selectedDream,
    isEditing: state.dreams.isEditing,
    
    dreamInEdit: state.dreams.dreamInEdit
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onEditing: (id) => dispatch(isEditing(id)),
    onDeleteDream: (id) => dispatch(deleteDream(id)),
    onSelectDream: (key) => dispatch(selectDream(key)),
    onDeselectDream: () => dispatch(deselectDream())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DreamDetail);
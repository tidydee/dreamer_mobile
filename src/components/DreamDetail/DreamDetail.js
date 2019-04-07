import React, { Component } from 'react';
import { Modal, View, Image, Text, Button, TouchableOpacity, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import Icon from "@expo/vector-icons/Ionicons";

import DreamEdit from '../DreamEdit/DreamEdit';
import { isEditing, deleteDream, selectDream, deselectDream } from '../../store/actions/index';

class DreamDetail extends Component {
  onDreamEdit = (id) => {
    console.log("ID");
    console.log(id);
    this.props.onEditing(id)
  }

  render() {
    const { onModalClose, isEditing, image, selectedDream, dreamUpdate, onItemSaved, onItemDeleted } = this.props;
    return (
      <Modal onRequestClose={onModalClose} animationType="slide">
        <View style={styles.modalContainer}>
          {/* TODO: Add dream theme icons/images to MongoDB and load via ref ID. Then load into RN via URL-Image, see "Udemy034 UsingNetworkImages" */}
          <View style={styles.topBarContainer}>
            <TouchableOpacity
              onPress={this.props.onDeselectDream}
              hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
              style={{ marginTop: 10, margin: 5 }}
            >
              <Icon
                name="md-close"
                style={{ paddingRight: 10, color: "#8e8e93" }}
                size={30}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                onItemDeleted(selectedDream ? selectedDream._id : null)
              }
              hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
              style={{ marginTop: 10, margin: 5 }}
            >
              <Icon
                name="md-trash"
                style={{ paddingRight: 10, color: "#fc3d39" }}
                size={26}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                this.onDreamEdit(selectedDream ? selectedDream._id : null)
              }
              hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
              style={{ marginTop: 10, margin: 5 }}
            >
              <Icon
                name="md-create"
                style={{ paddingRight: 10, color: "#147efb" }}
                size={26}
              />
            </TouchableOpacity>
          </View>
          <Image style={styles.modalImage} source={image} />
          {isEditing ? (
            <Modal onRequestClose={onModalClose} animationType="slide">
              <DreamEdit
                // dream={selectedDreamState}
                onItemEditData={dreamUpdate}
                onItemSaved={onItemSaved}
                onModalClose={onModalClose}
              />
            </Modal>
          ) : (
            <View style={styles.modalContainer}>
              <ScrollView style={styles.scrollViewContainer}>
                <Text style={styles.modalText}>
                  _ID: {selectedDream._id}
                </Text>
                <Text style={styles.modalText}>
                    DATE: {selectedDream.date}
                </Text>
                <Text style={styles.modalText}>
                  TITLE: {selectedDream.title}
                </Text>
                <Text style={styles.modalText}>
                  THEME: {selectedDream.theme}
                </Text>
                <Text style={styles.modalText}>
                  WHERE WAS I: {selectedDream.whereWasI}
                </Text>
                <Text style={styles.modalText}>
                  FOCUS: {selectedDream.focus}
                </Text>
                <Text style={styles.modalText}>
                  SUB_FOCUS: {selectedDream.subFocus}
                </Text>
                <Text style={styles.modalText}>
                  COLOR: {selectedDream.color ? "Yes" : "No"}
                </Text>
                <Text style={styles.modalText}>
                  BLACK & WHITE:{" "}
                  {selectedDream.blackAndWhite ? "Yes" : "No"}
                </Text>
                <Text style={styles.modalText}>
                  MUTED: {selectedDream.muted ? "Yes" : "No"}
                </Text>
                <Text style={styles.modalText}>
                  RECURRING DREAM:{" "}
                  {selectedDream.recurringDream ? "Yes" : "No"}
                </Text>
                <Text style={styles.modalText}>
                  CATEGORY: {selectedDream.category}
                </Text>
                <Text style={styles.modalText}>
                  CONTEXT: {selectedDream.context}
                </Text>
                <Text style={styles.modalText}>
                  DREAM: {selectedDream.dream}
                </Text>
                <Text style={styles.modalText}>
                  INTERPRETATION: {selectedDream.interpretation}
                </Text>
                <Text style={styles.modalText}>
                  MY RESPONSE: {selectedDream.myResponse}
                </Text>
                <Text style={styles.modalText}>
                  USER_ID: {selectedDream.userId}
                </Text>
              </ScrollView>
              {/* <View style={styles.buttonLayout}>
                <TouchableOpacity
                  style={{ height: 100, marginTop: 10, margin: 5 }}
                  onPress={() =>
                    this.onDreamEdit(
                      selectedDream ? selectedDream._id : null
                    )
                  }
                >
                  <Text style={{ color: "blue", fontSize: 18 }}>Edit</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={{ height: 100, marginTop: 10, margin: 5 }}
                  onPress={() =>
                    onItemDeleted(selectedDream ? selectedDream._id : null)
                  }
                >
                  <Text style={{ color: "red", fontSize: 18 }}>Delete</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={{ height: 100, marginTop: 10, margin: 5 }}
                  onPress={onModalClose}
                >
                  <Text style={{ color: "grey", fontSize: 18 }}>Close</Text>
                </TouchableOpacity>
              </View> */}
            </View>
          )}
        </View>
      </Modal>
    );
  }
}

// const { height, width } = Dimensions.get('window');
const { height, width } = Dimensions.get('screen');

const styles = StyleSheet.create({
  modalContainer: {
    margin: 20,
    height: height
    // flex: 1,
    // flexDirection: 'column',
    // justifyContent: 'space-between',
    // alignItems: 'stretch',
  },
  topBarContainer: {
    marginTop: 20,
    marginBottom: 15,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  scrollViewContainer: {
    height: 200,
    paddingBottom: 500
    // height: height * 0.75
  },
  modalText: {
    padding: 3,
    fontWeight: "bold",
    // textAlign: 'center',
    fontSize: 15
  },
  modalImage: {
    width: "100%",
    height: 200
  },
  buttonLayout: {
    // flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "yellow",
    height: height * 0.5
  },
  button: {
    height: 100
  }
});

const mapStateToProps = state => {
  return {
    // selectedDreamState: state.dreams.selectedDreamState,
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
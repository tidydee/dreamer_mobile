import React, { Component } from 'react';
import { Modal, View, Image, Text, Button,ScrollView, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import { isEditing, deleteDream, selectDream, deselectDream } from '../../store/actions/index';

import DreamEdit from '../DreamEdit/DreamEdit';


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
          <Image style={styles.modalImage} source={image} />
          {isEditing ?
            <Modal onRequestClose={onModalClose} animationType="slide">
              <Text>MADE IT!!!</Text>
              <Text>MADE IT!!!</Text>
              <DreamEdit 
                // dream={selectedDreamState}
                onItemEditData={dreamUpdate} 
                onItemSaved={onItemSaved}
                onModalClose={onModalClose}
              />
            </Modal>
            : <View>
              <ScrollView style={styles.scrollViewContainer}>
                <Text style={styles.modalText}>_ID: {selectedDream._id}</Text>
                <Text style={styles.modalText}>DATE: {selectedDream.date}</Text>
                <Text style={styles.modalText}>TITLE: {selectedDream.title}</Text>
                <Text style={styles.modalText}>THEME: {selectedDream.theme}</Text>
                <Text style={styles.modalText}>WHERE WAS I: {selectedDream.whereWasI}</Text>
                <Text style={styles.modalText}>FOCUS: {selectedDream.focus}</Text>
                <Text style={styles.modalText}>SUB_FOCUS: {selectedDream.subFocus}</Text>
                <Text style={styles.modalText}>COLOR: {selectedDream.color ? "Yes" : "No"}</Text>
                <Text style={styles.modalText}>BLACK & WHITE: {selectedDream.blackAndWhite ? "Yes" : "No"}</Text>
                <Text style={styles.modalText}>MUTED: {selectedDream.muted ? "Yes" : "No"}</Text>
                <Text style={styles.modalText}>RECURRING DREAM: {selectedDream.recurringDream ? "Yes" : "No"}</Text>
                <Text style={styles.modalText}>CATEGORY: {selectedDream.category}</Text>
                <Text style={styles.modalText}>CONTEXT: {selectedDream.context}</Text>
                <Text style={styles.modalText}>DREAM: {selectedDream.dream}</Text>
                <Text style={styles.modalText}>INTERPRETATION: {selectedDream.interpretation}</Text>
                <Text style={styles.modalText}>MY RESPONSE: {selectedDream.myResponse}</Text>
                <Text style={styles.modalText}>USER_ID: {selectedDream.userId}</Text>
              </ScrollView>
              <View style={styles.buttonLayout}>
                <Button title='Edit' color='blue' onPress={() => this.onDreamEdit(selectedDream ? selectedDream._id : null)} />
                <Button title='Print State' color='blue' onPress={() => console.log(this.props.selectedDream)} />
                <Button title='Delete' color='red' onPress={() => onItemDeleted(selectedDream ? selectedDream._id : null)} />
                <Button title='Close' color='grey' onPress={onModalClose} />
              </View>
            </View>
          }
        </View>
      </Modal>
    )
  }
}

const styles = StyleSheet.create({
  modalContainer: {
    margin: 20,
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    // flexDirection: 'column'
  },
  scrollViewContainer: {
    height: 100
  },
  modalText: {
    padding: 3,
    fontWeight: 'bold',
    // textAlign: 'center',
    fontSize: 15
  },
  modalImage: {
    width: "100%",
    height: 200
  },
  buttonLayout: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    height: "25%",
    marginBottom: 5
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
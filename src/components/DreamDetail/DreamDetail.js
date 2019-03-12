import React from 'react';
import { Modal, View, Image, Text, Button, ScrollView, StyleSheet } from 'react-native';

saveHandler = () => {
  console.log("Save Handler");
}

deleteHandler = () => {
  console.log("Delete Handler");
}

closeHandler = () => {
  console.log("Close Handler");
}

const DreamDetail = (props) => (

  // <Modal visible={props.selectedDream !== null}>
  <Modal onRequestClose={props.onModalClose} visible={props.selectedDream !== null } animationType="slide">
      <View style={styles.modalContainer}>
        {/* TODO: Add dream theme icons/images to MongoDB and load via ref ID. Then load into RN via URL-Image, see "Udemy034 UsingNetworkImages" */}
        <Image style={styles.modalImage} source={props.image} />
    <ScrollView style={styles.scrollViewContainer}>
        <Text style={styles.modalText}>_ID: {props.selectedDream ? props.selectedDream._id : null}</Text>
        <Text style={styles.modalText}>DATE: {props.selectedDream ? props.selectedDream.date : null}</Text>
        <Text style={styles.modalText}>TITLE: {props.selectedDream ? props.selectedDream.title : null}</Text>
        <Text style={styles.modalText}>THEME: {props.selectedDream ? props.selectedDream.theme : null}</Text>
        <Text style={styles.modalText}>WHERE WAS I: {props.selectedDream ? props.selectedDream.whereWasI : null}</Text>
        <Text style={styles.modalText}>FOCUS: {props.selectedDream ? props.selectedDream.focus : null}</Text>
        <Text style={styles.modalText}>SUB_FOCUS: {props.selectedDream ? props.selectedDream.subFocus : null}</Text>
        <Text style={styles.modalText}>COLOR: {props.selectedDream ? props.selectedDream.color : null}</Text>
        <Text style={styles.modalText}>BLACK & WHITE: {props.selectedDream ? props.selectedDream.blackAndWhite : null}</Text>
        <Text style={styles.modalText}>MUTED: {props.selectedDream ? props.selectedDream.muted : null}</Text>
        <Text style={styles.modalText}>RECURRING DREAM: {props.selectedDream ? props.selectedDream.recurringDream : null}</Text>
        <Text style={styles.modalText}>CATEGORY: {props.selectedDream ? props.selectedDream.category : null}</Text>
        <Text style={styles.modalText}>CONTEXT: {props.selectedDream ? props.selectedDream.context : null}</Text>
        <Text style={styles.modalText}>DREAM: {props.selectedDream ? props.selectedDream.dream : null}</Text>
        <Text style={styles.modalText}>INTERPRETATION: {props.selectedDream ? props.selectedDream.interpretation : null}</Text>
        <Text style={styles.modalText}>MY RESPONSE: {props.selectedDream ? props.selectedDream.myResponse : null}</Text>
        <Text style={styles.modalText}>USER_ID: {props.selectedDream ? props.selectedDream.userId : null}</Text>
    </ScrollView>
        <View style={styles.buttonLayout}>
          <Button title='Save' onPress={this.saveHandler} />
          <Button title='Delete' color='red' onPress={() => props.onItemDeleted(props.selectedDream ? props.selectedDream._id : null )} />
          <Button title='Close' color='grey' onPress={props.onModalClose} />
        </View>
      </View>
  </Modal>

)

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

export default DreamDetail;
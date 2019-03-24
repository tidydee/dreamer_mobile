import React, { Component } from 'react';
import { View, Image, Modal, StyleSheet } from 'react-native';

import DreamInput from '../DreamInput/DreamInput';

const DreamCreate = ({ isAdding, image, onModalClose, onItemSaved }) => {
  return (
    <Modal onRequestClose={onModalClose} animationType="slide">
      <View style={styles.modalContainer}>
        {/* TODO: Add dream theme icons/images to MongoDB and load via ref ID. Then load into RN via URL-Image, see "Udemy034 UsingNetworkImages" */}
        <Image style={styles.modalImage} source={image} />
        {isAdding ? 
          <DreamInput
            onItemSaved={onItemSaved}
            onModalClose={onModalClose}
          />
        : null}
      </View>
    </Modal>
  )
};

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

export default DreamCreate;
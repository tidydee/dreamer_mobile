import React from 'react';
import { View, Modal, StyleSheet } from 'react-native';

import DreamInput from '../DreamInput/DreamInput';

const DreamCreate = ({ isAdding, image, onModalClose, onItemSaved }) => {
  return (
    <Modal onRequestClose={onModalClose} animationType="slide">
      <View style={styles.modalContainer}>
        {isAdding ? (
          <DreamInput onItemSaved={onItemSaved} onModalClose={onModalClose} image={image} />
        ) : null}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    // margin: 20,
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    // flexDirection: 'column'
  },
});

export default DreamCreate;
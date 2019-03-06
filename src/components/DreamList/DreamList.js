import React from 'react'; 
import {ScrollView, Text, StyleSheet} from 'react-native';

const DreamList = (props) => {
  return (
    <ScrollView contentContainerStyle={styles.dataContainer}>
      {props.error !== null && (
        <Text style={styles.error}>{props.error}</Text> //If Error, Prints Error to Screen.
      )}

      {props.data && props.data.length > 0 && (
        props.data.map(dream => (
          <Text key={dream._id} style={styles.dreamsText}>
            {dream.title}
          </Text>
        ))
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  dataContainer: {
    // flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  dreamsText: {
    color: '#000',
    fontSize: 15,
    width: '80%'
  },
  error: {
    color: 'red',
    fontSize: 30,
    fontWeight: 'bold'
  }
});

export default DreamList;
import React, { Component } from 'react';
import { View, Text, ScrollView, TextInput, Button, Switch, StyleSheet } from 'react-native'

import ObjectID from 'bson-objectid';


class DreamInput extends Component {
  state = {
    dream: {
      _id: ObjectID().toString(),
      date: Date.now(),
      title: '',
      theme: '',
      whereWasI: '',
      focus: '',
      subFocus: '',
      color: true,
      blackAndWhite: false,
      muted: false,
      recurringDream: false,
      category: '',
      context: '',
      dream: '',
      interpretation: '',
      myResponse: ''
    }
  };

// dateChangeHandler = () => { //TODO: Handle Date input with a DatePicker
//   this.setState({
  //     dream: {
    //       ...this.state.dream,
    //       date: Date.now()
    //     }
    //   });
    // };
  titleChangeHandler = (title) => {
    this.setState({
        dream: {
          ...this.state.dream,
          title: title
        }
    });
  };
  themeChangeHandler = (theme) => {
    this.setState({
      dream: {
        ...this.state.dream,
        theme: theme
      }
    });
  };
  whereWasIChangeHandler = (whereWasI) => {
    this.setState({
      dream: {
        ...this.state.dream,
        whereWasI: whereWasI
      }
    });
  };
  focusChangeHandler = (focus) => {
    this.setState({
      dream: {
        ...this.state.dream,
        focus: focus
      }
    });
  };
  subFocusChangeHandler = (subFocus) => {
    this.setState({
      dream: {
        ...this.state.dream,
        subFocus: subFocus
      }
    });
  };
  colorChangeHandler = (color) => {
    this.setState({
      dream: {
        ...this.state.dream,
        color: color
      }
    });
  };
  blackAndWhiteChangeHandler = (blackAndWhite) => {
    this.setState({
      dream: {
        ...this.state.dream,
        blackAndWhite: blackAndWhite
      }
    });
  };
  mutedChangeHandler = (muted) => {
    this.setState({
      dream: {
        ...this.state.dream,
        muted: muted
      }
    });
  };
  recurringDreamChangeHandler = (recurringDream) => {
    this.setState({
      dream: {
        ...this.state.dream,
        recurringDream: recurringDream
      }
    });
  };
  categoryChangeHandler = (category) => {
    this.setState({
      dream: {
        ...this.state.dream,
        category: category
      }
    });
  };
  contextChangeHandler = (context) => {
    this.setState({
      dream: {
        ...this.state.dream,
        context: context
      }
    });
  };
  dreamChangeHandler = (dream) => {
    this.setState({
      dream: {
        ...this.state.dream,
        dream: dream
      }
    });
  };
  interpretationChangeHandler = (interpretation) => {
    this.setState({
      dream: {
        ...this.state.dream,
        interpretation: interpretation
      }
    });
  };
  myResponseChangeHandler = (myResponse) => {
    this.setState({
      dream: {
        ...this.state.dream,
        myResponse: myResponse
      }
    });
  };

  // dreamChangeHandler = (dream) => {
  //   this.setState({
  //     dream: {
  //       ...this.state.dream,
  //       [key]: value
  //     }
  //   });
  // };
  
  onItemSavedHandler = () => {
    console.log(this.state.dream);
    this.props.onItemSaved(this.state.dream);
  };

  render() {
    return (
      <View style={styles.modalContainer}>
        <ScrollView style={styles.scrollViewContainer}>
          <Text style={styles.modalText}>ID: {this.state.dream._id}</Text>
          <Text style={styles.modalText}>DATE: {this.state.dream.date}</Text>
          <TextInput
            placeholder={"TITLE"}
            value={this.state.dream.title}
            onChangeText={this.titleChangeHandler}
            style={styles.modalText}
          />
          <TextInput
            placeholder={"THEME"}
            value={this.state.dream.theme}
            onChangeText={this.themeChangeHandler}
            style={styles.modalText}
          />
          <TextInput
            placeholder={"WHERE WAS I"}
            value={this.state.dream.whereWasI}
            onChangeText={this.whereWasIChangeHandler}
            style={styles.modalText}
          />
          <TextInput
            placeholder={"FOCUS(ES)"}
            value={this.state.dream.focus}
            onChangeText={this.focusChangeHandler}
            style={styles.modalText}
          />
          <TextInput
            placeholder={"SUB-FOCUS(ES)"}
            value={this.state.dream.subFocus}
            onChangeText={this.subFocusChangeHandler}
            style={styles.modalText}
          />
          <Text>COLOR</Text>
          <Switch 
            value={this.state.dream.color}
            onValueChange={this.colorChangeHandler}
            style={styles.modalText}
          />
          <Text>BLACK & WHITE</Text>
          <Switch 
            value={this.state.dream.blackAndWhite}
            onValueChange={this.blackAndWhiteChangeHandler}
            style={styles.modalText}
          />
          <Text>MUTED</Text>
          <Switch 
            value={this.state.dream.muted}
            onValueChange={this.mutedChangeHandler}
            style={styles.modalText}
          />
          <Text>RECURRING DREAM</Text>
          <Switch 
            value={this.state.dream.recurringDream}
            onValueChange={this.recurringDreamChangeHandler}
            style={styles.modalText}
          />
          <TextInput
            placeholder={"CATEGORY"}
            value={this.state.dream.category}
            onChangeText={this.categoryChangeHandler}
            style={styles.modalText}
          />
          <TextInput
            placeholder={"CONTEXT"}
            value={this.state.dream.context}
            onChangeText={this.contextChangeHandler}
            style={styles.modalText}
          />
          <TextInput
            placeholder={"DREAM"}
            value={this.state.dream.dream}
            onChangeText={this.dreamChangeHandler}
            style={styles.modalText}
          />
          <TextInput
            placeholder={"INTERPRETATION"}
            value={this.state.dream.interpretation}
            onChangeText={this.interpretationChangeHandler}
            style={styles.modalText}
          />
          <TextInput
            placeholder={"MY RESPONSE"}
            value={this.state.dream.myResponse}
            onChangeText={this.myResponseChangeHandler}
            style={styles.modalText}
          />
          {/* <Text style={styles.modalText}>USER_ID: </Text> //TODO: NEED TO HANDLE FUTURE AUTH FOR JWT LOGIN */}
        </ScrollView>
        <View style={styles.buttonLayout}>
          <Button title='Save' onPress={this.onItemSavedHandler} />
          <Button title='Close' color='grey' onPress={this.props.onModalClose} />
        </View>
      </View>  
    )
  };
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
    height: 150
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

export default DreamInput;
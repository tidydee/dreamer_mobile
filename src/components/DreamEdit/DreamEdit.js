import React, { Component } from 'react';
import { View, Text, ScrollView, TextInput, Button, Picker, StyleSheet } from 'react-native'
import { connect } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';

// import ObjectID from 'bson-objectid';
import { updateDream, deselectDreamEdit } from '../../store/actions/index';

class DreamEdit extends Component {
  state = {
    selectedDream: {
      _id: this.props.selectedDream._id,
      date: this.props.selectedDream.date,
      title: this.props.selectedDream.title,
      theme: this.props.selectedDream.theme,
      whereWasI: this.props.selectedDream.whereWasI,
      focus: this.props.selectedDream.focus,
      subFocus: this.props.selectedDream.subFocus,
      color: this.props.selectedDream.color,
      blackAndWhite: this.props.selectedDream.blackAndWhite,
      muted: this.props.selectedDream.muted,
      recurringDream: this.props.selectedDream.recurringDream,
      category: this.props.selectedDream.category,
      context: this.props.selectedDream.context,
      dream: this.props.selectedDream.dream,
      interpretation: this.props.selectedDream.interpretation,
      myResponse: this.props.selectedDream.myResponse
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
      selectedDream: {
        ...this.state.selectedDream,
        title: title
      }
    });
  };
  themeChangeHandler = (theme) => {
    this.setState({
      selectedDream: {
        ...this.state.selectedDream,
        theme: theme
      }
    });
  };
  whereWasIChangeHandler = (whereWasI) => {
    this.setState({
      selectedDream: {
        ...this.state.selectedDream,
        whereWasI: whereWasI
      }
    });
  };
  focusChangeHandler = (focus) => {
    this.setState({
      selectedDream: {
        ...this.state.selectedDream,
        focus: focus
      }
    });
  };
  subFocusChangeHandler = (subFocus) => {
    this.setState({
      selectedDream: {
        ...this.state.selectedDream,
        subFocus: subFocus
      }
    });
  };
  colorChangeHandler = (color) => {
    this.setState({
      selectedDream: {
        ...this.state.selectedDream,
        color: color
      }
    });
  };
  blackAndWhiteChangeHandler = (blackAndWhite) => {
    this.setState({
      selectedDream: {
        ...this.state.selectedDream,
        blackAndWhite: blackAndWhite
      }
    });
  };
  mutedChangeHandler = (muted) => {
    this.setState({
      selectedDream: {
        ...this.state.selectedDream,
        muted: muted
      }
    });
  };
  recurringDreamChangeHandler = (recurringDream) => {
    this.setState({
      selectedDream: {
        ...this.state.selectedDream,
        recurringDream: recurringDream
      }
    });
  };
  categoryChangeHandler = (category) => {
    this.setState({
      selectedDream: {
        ...this.state.selectedDream,
        category: category
      }
    });
  };
  contextChangeHandler = (context) => {
    this.setState({
      selectedDream: {
        ...this.state.selectedDream,
        context: context
      }
    });
  };
  dreamChangeHandler = (dream) => {
    this.setState({
      selectedDream: {
        ...this.state.selectedDream,
        dream: dream
      }
    });
  };
  interpretationChangeHandler = (interpretation) => {
    this.setState({
      selectedDream: {
        ...this.state.selectedDream,
        interpretation: interpretation
      }
    });
  };
  myResponseChangeHandler = (myResponse) => {
    this.setState({
      selectedDream: {
        ...this.state.selectedDream,
        myResponse: myResponse
      }
    });
  };

  onItemUpdateHandler = () => {
    console.log(this.state.selectedDream);
    // this.props.onItemSaved(this.state.dream);
    this.props.onItemUpdate(this.state.selectedDream)
  };

  render() {
    return (
      <View style={styles.modalContainer}>
        <ScrollView style={styles.scrollViewContainer}>
          <Text style={styles.modalText}>ID: {this.state.selectedDream._id}</Text>
          <Text style={styles.modalText}>DATE: {this.state.selectedDream.date}</Text>
          <TextInput
            placeholder={"TITLE"}
            value={this.state.selectedDream.title}
            onChangeText={this.titleChangeHandler}
            style={styles.modalText}
          />
          <TextInput
            placeholder={"THEME"}
            value={this.state.selectedDream.theme}
            onChangeText={this.themeChangeHandler}
            style={styles.modalText}
          />
          <TextInput
            placeholder={"WHERE WAS I"}
            value={this.state.selectedDream.whereWasI}
            onChangeText={this.whereWasIChangeHandler}
            style={styles.modalText}
          />
          <TextInput
            placeholder={"FOCUS(ES)"}
            value={this.state.selectedDream.focus}
            onChangeText={this.focusChangeHandler}
            style={styles.modalText}
          />
          <TextInput
            placeholder={"SUB-FOCUS(ES)"}
            value={this.state.selectedDream.subFocus}
            onChangeText={this.subFocusChangeHandler}
            style={styles.modalText}
          />
          <TextInput
            placeholder={"COLOR"}
            value={this.state.selectedDream.color.toString()}
            onChangeText={this.colorChangeHandler}
            style={styles.modalText}
          />
          <TextInput
            placeholder={"BLACK & WHITE"}
            value={this.state.selectedDream.blackAndWhite.toString()}
            onChangeText={this.blackAndWhiteChangeHandler}
            style={styles.modalText}
          />
          <TextInput
            placeholder={"MUTED"}
            value={this.state.selectedDream.muted.toString()}
            onChangeText={this.mutedChangeHandler}
            style={styles.modalText}
          />
          <TextInput
            placeholder={"RECURRING DREAM"}
            value={this.state.selectedDream.recurringDream.toString()}
            onChangeText={this.recurringDreamChangeHandler}
            style={styles.modalText}
          />
          <TextInput
            placeholder={"CATEGORY"}
            value={this.state.selectedDream.category}
            onChangeText={this.categoryChangeHandler}
            style={styles.modalText}
          />
          <TextInput
            placeholder={"CONTEXT"}
            value={this.state.selectedDream.context}
            onChangeText={this.contextChangeHandler}
            style={styles.modalText}
          />
          <TextInput
            placeholder={"DREAM"}
            value={this.state.selectedDream.dream}
            onChangeText={this.dreamChangeHandler}
            style={styles.modalText}
          />
          <TextInput
            placeholder={"INTERPRETATION"}
            value={this.state.selectedDream.interpretation}
            onChangeText={this.interpretationChangeHandler}
            style={styles.modalText}
          />
          <TextInput
            placeholder={"MY RESPONSE"}
            value={this.state.selectedDream.myResponse}
            onChangeText={this.myResponseChangeHandler}
            style={styles.modalText}
          />
          {/* <Text style={styles.modalText}>USER_ID: </Text> //TODO: NEED TO HANDLE FUTURE AUTH FOR JWT LOGIN */}
        </ScrollView>
        <View style={styles.buttonLayout}>
          {/* <Button title='Save' onPress={this.onItemUpdateHandler} /> */}
          {/* <Ionicons name="md-checkmark-circle" size={32} color="green" onPress={this.onItemUpdateHandler}/> */}
          {/* <Ionicons name="md-checkcircleo" size={32} color="green" onPress={this.onItemUpdateHandler}/> */}
          <Ionicons name="ios-checkmark-circle-outline" size={50} color="green" onPress={this.onItemUpdateHandler}/>

          {/* <Button title='Close' color='grey' onPress={this.props.onModalClose} /> */}
          <Button title='Close' color='grey' onPress={this.props.onDeselectDream} />
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

const mapStateToProps = state => {
  return {
    // selectedDreamState: state.dreams.selectedDreamState,
    selectedDream: state.dreams.selectedDream,
    isEditing: state.dreams.isEditing,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onItemUpdate: (updatedDream) => dispatch(updateDream(updatedDream)),
    onDeselectDream: () => dispatch(deselectDreamEdit())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DreamEdit);
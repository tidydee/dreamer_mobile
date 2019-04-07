import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  Switch,
  TouchableOpacity,
  Button,
  StyleSheet,
  Dimensions
} from "react-native";
import { connect } from 'react-redux';
import Icon from "@expo/vector-icons/Ionicons"; //TODO: replace with react-native-vector-icons library
import DatePicker from "react-native-datepicker";

import { updateDream, deselectDreamEdit } from '../../store/actions/index';

const { height, width } = Dimensions.get("window");

const currentDate = new Date();
const timeStamp = currentDate.getTime();

class DreamEdit extends Component {
  state = {
    datePicker: this.props.selectedDream.date,
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

  onDateChangeHandler = date => {
    const dateAsString = date;
    const newDateString = new Date(dateAsString.replace(/-/g, "/"));
    console.log(newDateString.getTime());
    const newTimestamp = newDateString.getTime();
    this.setState({
      ...this.state.datePicker,
      datePicker: date
    });
    this.setState({
      selectedDream: {
        ...this.state.selectedDream,
        date: newTimestamp
      }
    });
  };
  titleChangeHandler = title => {
    this.setState({
      selectedDream: {
        ...this.state.selectedDream,
        title: title
      }
    });
  };
  themeChangeHandler = theme => {
    this.setState({
      selectedDream: {
        ...this.state.selectedDream,
        theme: theme
      }
    });
  };
  whereWasIChangeHandler = whereWasI => {
    this.setState({
      selectedDream: {
        ...this.state.selectedDream,
        whereWasI: whereWasI
      }
    });
  };
  focusChangeHandler = focus => {
    this.setState({
      selectedDream: {
        ...this.state.selectedDream,
        focus: focus
      }
    });
  };
  subFocusChangeHandler = subFocus => {
    this.setState({
      selectedDream: {
        ...this.state.selectedDream,
        subFocus: subFocus
      }
    });
  };
  colorChangeHandler = color => {
    this.setState({
      selectedDream: {
        ...this.state.selectedDream,
        color: color
      }
    });
  };
  blackAndWhiteChangeHandler = blackAndWhite => {
    this.setState({
      selectedDream: {
        ...this.state.selectedDream,
        blackAndWhite: blackAndWhite
      }
    });
  };
  mutedChangeHandler = muted => {
    this.setState({
      selectedDream: {
        ...this.state.selectedDream,
        muted: muted
      }
    });
  };
  recurringDreamChangeHandler = recurringDream => {
    this.setState({
      selectedDream: {
        ...this.state.selectedDream,
        recurringDream: recurringDream
      }
    });
  };
  categoryChangeHandler = category => {
    this.setState({
      selectedDream: {
        ...this.state.selectedDream,
        category: category
      }
    });
  };
  contextChangeHandler = context => {
    this.setState({
      selectedDream: {
        ...this.state.selectedDream,
        context: context
      }
    });
  };
  dreamChangeHandler = dream => {
    this.setState({
      selectedDream: {
        ...this.state.selectedDream,
        dream: dream
      }
    });
  };
  interpretationChangeHandler = interpretation => {
    this.setState({
      selectedDream: {
        ...this.state.selectedDream,
        interpretation: interpretation
      }
    });
  };
  myResponseChangeHandler = myResponse => {
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
    this.props.onItemUpdate(this.state.selectedDream);
  };

  render() {
    return (
      <View style={styles.modalContainer}>
        <View style={styles.topBarContainer}>
          {/* <Button title='Close' color='grey' onPress={this.props.onModalClose} />
          <Button title='Save' onPress={this.onItemSavedHandler} /> */}
          <TouchableOpacity
            onPress={this.props.onDeselectDream}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
            style={{ marginTop: 10, margin: 5 }}
          >
            <Icon
              style={{ paddingRight: 10, color: "#8e8e93" }}
              name="md-close"
              size={30}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.onItemUpdateHandler}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
            style={{ marginTop: 10, margin: 5 }}
          >
            <Icon
              style={{ paddingRight: 10, color: "#147efb" }}
              name="md-checkmark"
              size={30}
            />
          </TouchableOpacity>
        </View>
        <ScrollView contentContainerStyle={styles.scrollViewContainer}>
          <Text style={styles.modalText}>
            ID: {this.state.selectedDream._id}
          </Text>
          <Text style={styles.modalText}>
            DATE: {this.state.selectedDream.date}
          </Text>
          <DatePicker
            style={{ width: 300, paddingBottom: 10 }}
            date={this.state.datePicker}
            mode="datetime"
            placeholder="select date"
            format="YYYY-MM-DD, h:mm a"
            // format="MMMM YYYY, h:mm a"
            // format="LLLL"
            minDate="2016-05-01"
            maxDate={currentDate}
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            iconComponent={
              <Icon
                style={{
                  color: "grey",
                  position: "absolute",
                  left: 5,
                  top: 4,
                  marginLeft: 0
                }}
                name="md-calendar"
                size={30}
              />
            }
            customStyles={{
              dateInput: {
                marginLeft: 50,
                marginRight: 36,
                borderWidth: 0,
                borderBottomWidth: 1,
                borderBottomColor: "blue"
              }
            }}
            //   // ... You can check the source to find the other keys.
            onDateChange={this.onDateChangeHandler}
          />
          <Text>TITLE</Text>
          <TextInput
            placeholder={"TITLE"}
            value={this.state.selectedDream.title}
            onChangeText={this.titleChangeHandler}
            style={styles.modalText}
          />
          <Text>THEME</Text>
          <TextInput
            placeholder={"THEME"}
            value={this.state.selectedDream.theme}
            onChangeText={this.themeChangeHandler}
            style={styles.modalText}
          />
          <Text>WHERE WAS I</Text>
          <TextInput
            placeholder={"WHERE WAS I"}
            value={this.state.selectedDream.whereWasI}
            onChangeText={this.whereWasIChangeHandler}
            style={styles.modalText}
          />
          <Text>FOCUS(ES)</Text>
          <TextInput
            placeholder={"FOCUS(ES)"}
            value={this.state.selectedDream.focus}
            onChangeText={this.focusChangeHandler}
            style={styles.modalText}
          />
          <Text>SUB-FOCUS(ES)</Text>
          <TextInput
            placeholder={"SUB-FOCUS(ES)"}
            value={this.state.selectedDream.subFocus}
            onChangeText={this.subFocusChangeHandler}
            style={styles.modalText}
          />
          <View>
            <Text>COLOR</Text>
            <Switch
              value={this.state.selectedDream.color}
              onValueChange={this.colorChangeHandler}
              style={styles.modalText}
            />
          </View>
          <View>
            <Text>BLACK & WHITE</Text>
            <Switch
              value={this.state.selectedDream.blackAndWhite}
              onValueChange={this.blackAndWhiteChangeHandler}
              style={styles.modalText}
            />
          </View>
          <View>
            <Text>MUTED</Text>
            <Switch
              value={this.state.selectedDream.muted}
              onValueChange={this.mutedChangeHandler}
              style={styles.modalText}
            />
          </View>
          <View>
            <Text>RECURRING DREAM</Text>
            <Switch
              value={this.state.selectedDream.recurringDream}
              onValueChange={this.recurringDreamChangeHandler}
              style={styles.modalText}
            />
          </View>
          <Text>CATEGORY</Text>
          <TextInput
            placeholder={"CATEGORY"}
            value={this.state.selectedDream.category}
            onChangeText={this.categoryChangeHandler}
            style={styles.modalText}
          />
          <Text>CONTEXT</Text>
          <TextInput
            placeholder={"CONTEXT"}
            value={this.state.selectedDream.context}
            onChangeText={this.contextChangeHandler}
            style={styles.modalText}
          />
          <Text>DREAM</Text>
          <TextInput
            placeholder={"DREAM"}
            value={this.state.selectedDream.dream}
            onChangeText={this.dreamChangeHandler}
            style={styles.modalText}
          />
          <Text>INTERPRETATION</Text>
          <TextInput
            placeholder={"INTERPRETATION"}
            value={this.state.selectedDream.interpretation}
            onChangeText={this.interpretationChangeHandler}
            style={styles.modalText}
          />
          <Text>MY RESPONSE</Text>
          <TextInput
            placeholder={"MY RESPONSE"}
            value={this.state.selectedDream.myResponse}
            onChangeText={this.myResponseChangeHandler}
            style={styles.modalText}
          />
          {/* <Text style={styles.modalText}>USER_ID: </Text> //TODO: NEED TO HANDLE FUTURE AUTH FOR JWT LOGIN */}
        </ScrollView>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  modalContainer: {
    margin: 20,
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    // flexDirection: 'column'
  },
  topBarContainer: {
    marginTop: 20,
    marginBottom: 15,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  scrollViewContainer: {
    paddingBottom: 500
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
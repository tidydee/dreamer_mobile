import React, { Component } from 'react';
import {
  View,
  SafeAreaView,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Button,
  Switch,
  StyleSheet,
  Dimensions
} from "react-native";
import Icon from "@expo/vector-icons/Ionicons"; //TODO: replace with react-native-vector-icons library
import CalendarPicker from "react-native-calendar-picker";
import DatePicker from "react-native-datepicker";
import ObjectID from 'bson-objectid';

const { height, width } = Dimensions.get("window");

//Calculating Current Date & TimeStamp. TimeStamp to be stored in DB.
const currentDate = new Date();
const timeStamp = currentDate.getTime();


class DreamInput extends Component {
  state = {
    datePicker: currentDate,
    dream: {
      _id: ObjectID().toString(),
      date: timeStamp,
      // selectedStartDate: null,
      title: "",
      theme: "",
      whereWasI: "",
      focus: "",
      subFocus: "",
      color: true,
      blackAndWhite: false,
      muted: false,
      recurringDream: false,
      category: "",
      context: "",
      dream: "",
      interpretation: "",
      myResponse: ""
    }
  };
  
  onDateChangeHandler = date => {
    const dateAsString = date;
    const newDateString =  new Date(dateAsString.replace(/-/g, '/'))
    console.log(newDateString.getTime())
    const newTimestamp = newDateString.getTime()
    
    this.setState({
      ...this.state.datePicker,
      datePicker: date
    });
    this.setState({
      dream: {
        ...this.state.dream,
        date: newTimestamp
      }
    });
  };

  titleChangeHandler = title => {
    this.setState({
      dream: {
        ...this.state.dream,
        title: title
      }
    });
  };
  themeChangeHandler = theme => {
    this.setState({
      dream: {
        ...this.state.dream,
        theme: theme
      }
    });
  };
  whereWasIChangeHandler = whereWasI => {
    this.setState({
      dream: {
        ...this.state.dream,
        whereWasI: whereWasI
      }
    });
  };
  focusChangeHandler = focus => {
    this.setState({
      dream: {
        ...this.state.dream,
        focus: focus
      }
    });
  };
  subFocusChangeHandler = subFocus => {
    this.setState({
      dream: {
        ...this.state.dream,
        subFocus: subFocus
      }
    });
  };
  colorChangeHandler = color => {
    this.setState({
      dream: {
        ...this.state.dream,
        color: color
      }
    });
  };
  blackAndWhiteChangeHandler = blackAndWhite => {
    this.setState({
      dream: {
        ...this.state.dream,
        blackAndWhite: blackAndWhite
      }
    });
  };
  mutedChangeHandler = muted => {
    this.setState({
      dream: {
        ...this.state.dream,
        muted: muted
      }
    });
  };
  recurringDreamChangeHandler = recurringDream => {
    this.setState({
      dream: {
        ...this.state.dream,
        recurringDream: recurringDream
      }
    });
  };
  categoryChangeHandler = category => {
    this.setState({
      dream: {
        ...this.state.dream,
        category: category
      }
    });
  };
  contextChangeHandler = context => {
    this.setState({
      dream: {
        ...this.state.dream,
        context: context
      }
    });
  };
  dreamChangeHandler = dream => {
    this.setState({
      dream: {
        ...this.state.dream,
        dream: dream
      }
    });
  };
  interpretationChangeHandler = interpretation => {
    this.setState({
      dream: {
        ...this.state.dream,
        interpretation: interpretation
      }
    });
  };
  myResponseChangeHandler = myResponse => {
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
    // const { selectedStartDate } = this.state.dream;
    // const startDate = selectedStartDate ? selectedStartDate.toString() : "";
    return (
      <View style={styles.modalContainer}>
        <View style={styles.topBarContainer}>
          {/* <Button title='Close' color='grey' onPress={this.props.onModalClose} />
          <Button title='Save' onPress={this.onItemSavedHandler} /> */}
          <TouchableOpacity
            onPress={this.props.onModalClose}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
            style={{ height: 100, marginTop: 10, margin: 5 }}
          >
            <Icon
              style={{ paddingRight: 10, color: "#8e8e93" }}
              name="md-close"
              size={30}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.onItemSavedHandler}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
            style={{ height: 100, marginTop: 10, margin: 5 }}
          >
            <Icon
              style={{ paddingRight: 10, color: "#147efb" }}
              name="md-checkmark"
              size={30}
            />
          </TouchableOpacity>
        </View>
        <ScrollView contentContainerStyle={styles.scrollViewContainer}>
          <Text style={styles.modalText}>ID: {this.state.dream._id}</Text>
          {/* <View style={styles.container}>
            <CalendarPicker
              onDateChange={this.onDateChange}
              width={width - 50}
            />
          </View>
          <Text style={styles.modalText}>CAL_DATE: {startDate}</Text> */}

          <Text style={styles.modalText}>
            DATE: {this.state.dream.date}
          </Text>
          <DatePicker
            style={{ width: 320, paddingBottom: 10 }}
            date={this.state.datePicker}
            mode="datetime"
            placeholder="select date"
            format="LLLL"
            // format="MMMM YYYY, h:mm a"
            // format="LLLL"
            minDate="2016-05-01"
            maxDate={this.state.datePicker}
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
            value={this.state.dream.title}
            onChangeText={this.titleChangeHandler}
            style={styles.modalText}
          />
          <Text>THEME</Text>
          <TextInput
            placeholder={"THEME"}
            value={this.state.dream.theme}
            onChangeText={this.themeChangeHandler}
            style={styles.modalText}
          />
          <Text>WHERE WAS I</Text>
          <TextInput
            placeholder={"WHERE WAS I"}
            value={this.state.dream.whereWasI}
            onChangeText={this.whereWasIChangeHandler}
            style={styles.modalText}
          />
          <Text>FOCUS(ES)</Text>
          <TextInput
            placeholder={"FOCUS(ES)"}
            value={this.state.dream.focus}
            onChangeText={this.focusChangeHandler}
            style={styles.modalText}
          />
          <Text>SUB-FOCUS(ES)</Text>
          <TextInput
            placeholder={"SUB-FOCUS(ES)"}
            value={this.state.dream.subFocus}
            onChangeText={this.subFocusChangeHandler}
            style={styles.modalText}
          />
          <View>
            <Text>COLOR</Text>
            <Switch
              value={this.state.dream.color}
              onValueChange={this.colorChangeHandler}
              style={styles.modalText}
            />
          </View>
          <View>
            <Text>BLACK & WHITE</Text>
            <Switch
              style={styles.modalText}
              value={this.state.dream.blackAndWhite}
              onValueChange={this.blackAndWhiteChangeHandler}
            />
          </View>
          <View>
            <Text>MUTED</Text>
            <Switch
              value={this.state.dream.muted}
              onValueChange={this.mutedChangeHandler}
              style={styles.modalText}
            />
          </View>
          <View>
            <Text>RECURRING DREAM</Text>
            <Switch
              value={this.state.dream.recurringDream}
              onValueChange={this.recurringDreamChangeHandler}
              style={styles.modalText}
            />
          </View>
          <Text>CATEGORY</Text>
          <TextInput
            placeholder={"CATEGORY"}
            value={this.state.dream.category}
            onChangeText={this.categoryChangeHandler}
            style={styles.modalText}
          />
          <Text>CONTEXT</Text>
          <TextInput
            placeholder={"CONTEXT"}
            value={this.state.dream.context}
            onChangeText={this.contextChangeHandler}
            style={styles.modalText}
          />
          <Text>DREAM</Text>
          <TextInput
            placeholder={"DREAM"}
            value={this.state.dream.dream}
            onChangeText={this.dreamChangeHandler}
            style={styles.modalText}
          />
          <Text>INTERPRETATION</Text>
          <TextInput
            placeholder={"INTERPRETATION"}
            value={this.state.dream.interpretation}
            onChangeText={this.interpretationChangeHandler}
            style={styles.modalText}
          />
          <Text>MY RESPONSE</Text>
          <TextInput
            placeholder={"MY RESPONSE"}
            value={this.state.dream.myResponse}
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
    margin: 5
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
  container: {
    backgroundColor: "#FFFFFF"
  },
  modalText: {
    padding: 3,
    marginBottom: 10,
    fontWeight: "bold",
    fontSize: 15
  },
  modalImage: {
    width: "100%",
    height: 200
  },
});

export default DreamInput;
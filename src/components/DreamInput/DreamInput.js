import React, { Component } from 'react';
import {
  View,
  SafeAreaView,
  Text,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Button,
  Switch,
  KeyboardAvoidingView,
  StyleSheet,
  Dimensions,
  Platform
} from "react-native";
import Icon from "@expo/vector-icons/Ionicons"; //TODO: replace with react-native-vector-icons library
import CalendarPicker from "react-native-calendar-picker";
import DatePicker from "react-native-datepicker";
import ObjectID from 'bson-objectid';
import { colors, getHeaderHeight } from "../../Styles/Styles";

const { height, width } = Dimensions.get("screen");

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
    return (
      <View>
        <View style={styles.topBarContainer}>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "flex-end"
            }}
          >
            <TouchableOpacity
              onPress={this.props.onModalClose}
              hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
            >
              <Icon
                name="md-close"
                style={{
                  paddingLeft: 10,
                  paddingBottom: "3%",
                  color: colors.APP_HEADER_ICON
                }}
                size={30}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={this.onItemSavedHandler}
              hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
            >
              <Icon
                name="md-checkmark"
                style={{
                  paddingRight: 10,
                  paddingBottom: "3.5%",
                  color: colors.APP_HEADER_ICON
                }}
                size={30}
              />
            </TouchableOpacity>
          </View>
        </View>
        {/* ------------------------------------------------ */}
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            {/* <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "position" : null}
                keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
                enabled
              > */}
            <View style={styles.createIconContainer}>
              <Image
                resizeMode="cover"
                style={styles.createIcon}
                source={this.props.image}
              />
            </View>
            <ScrollView
              style={styles.scrollViewContainer}
              contentContainerStyle={styles.scrollViewContainer2}
            >
              {/* <View style={styles.titleBarContainer}>

                </View> */}
              {/* <Text style={styles.modalText}>
                  ID: {this.state.dream._id}
                </Text> */}

              {/* <Text style={styles.modalText}>
                  DATE: {this.state.dream.date}
                </Text> */}

              <View style={styles.infoContainer}>
                <View style={styles.itemDateArea}>
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
                          color: colors.ITEM_HEADING,
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
                      dateText: {
                        color: colors.ITEM_TEXT
                      },
                      dateInput: {
                        // height: 50,
                        marginLeft: 50,
                        marginRight: 36,
                        borderWidth: 0,
                        borderBottomWidth: 1,
                        borderBottomColor: colors.ITEM_MAIN_DATE_TIME
                      }
                    }}
                    //... You can check the source to find the other keys.
                    onDateChange={this.onDateChangeHandler}
                  />
                </View>
                <View style={styles.itemInfoArea}>
                  <Text style={styles.itemInfoHeading}>TITLE</Text>
                  <TextInput
                    placeholder={"TITLE"}
                    value={this.state.dream.title}
                    onChangeText={this.titleChangeHandler}
                    style={styles.itemInfoText}
                    placeholderTextColor={colors.ITEM_BOTTOM_BORDER}
                  />
                </View>
                <View style={styles.itemInfoArea}>
                  <Text style={styles.itemInfoHeading}>THEME</Text>
                  <TextInput
                    placeholder={"THEME"}
                    value={this.state.dream.theme}
                    onChangeText={this.themeChangeHandler}
                    style={styles.itemInfoText}
                    placeholderTextColor={colors.ITEM_BOTTOM_BORDER}
                  />
                </View>
                <View style={styles.itemInfoArea}>
                  <Text style={styles.itemInfoHeading}>WHERE WAS I</Text>
                  <TextInput
                    placeholder={"WHERE WAS I"}
                    value={this.state.dream.whereWasI}
                    onChangeText={this.whereWasIChangeHandler}
                    style={styles.itemInfoText}
                    placeholderTextColor={colors.ITEM_BOTTOM_BORDER}
                  />
                </View>
                <View style={styles.itemInfoArea}>
                  <Text style={styles.itemInfoHeading}>
                    FOCUS - MAIN PLAYER IN DREAM
                  </Text>
                  <TextInput
                    placeholder={"FOCUS - MAIN PLAYER IN DREAM"}
                    value={this.state.dream.focus}
                    onChangeText={this.focusChangeHandler}
                    style={styles.itemInfoText}
                    placeholderTextColor={colors.ITEM_BOTTOM_BORDER}
                  />
                </View>
                <View style={styles.itemInfoArea}>
                  <Text style={styles.itemInfoHeading}>SUB-FOCUS(ES)</Text>
                  <TextInput
                    placeholder={"SUB-FOCUS(ES)"}
                    value={this.state.dream.subFocus}
                    onChangeText={this.subFocusChangeHandler}
                    style={styles.itemInfoText}
                    placeholderTextColor={colors.ITEM_BOTTOM_BORDER}
                  />
                </View>
                <View style={styles.itemInfoArea}>
                  <Text style={styles.itemInfoHeading}>COLOR</Text>
                  <Switch
                    value={this.state.dream.color}
                    onValueChange={this.colorChangeHandler}
                    style={styles.itemInfoSwitch}
                  />
                </View>
                <View style={styles.itemInfoArea}>
                  <Text style={styles.itemInfoHeading}>BLACK & WHITE</Text>
                  <Switch
                    value={this.state.dream.blackAndWhite}
                    onValueChange={this.blackAndWhiteChangeHandler}
                    style={styles.itemInfoSwitch}
                  />
                </View>
                <View style={styles.itemInfoArea}>
                  <Text style={styles.itemInfoHeading}>MUTED</Text>
                  <Switch
                    value={this.state.dream.muted}
                    onValueChange={this.mutedChangeHandler}
                    style={styles.itemInfoSwitch}
                  />
                </View>
                <View style={styles.itemInfoArea}>
                  <Text style={styles.itemInfoHeading}>
                    RECURRING DREAM
                  </Text>
                  <Switch
                    value={this.state.dream.recurringDream}
                    onValueChange={this.recurringDreamChangeHandler}
                    style={styles.itemInfoSwitch}
                  />
                </View>
                <View style={styles.itemInfoArea}>
                  <Text style={styles.itemInfoHeading}>CATEGORY</Text>
                  <TextInput
                    placeholder={"CATEGORY"}
                    value={this.state.dream.category}
                    onChangeText={this.categoryChangeHandler}
                    style={styles.itemInfoText}
                    placeholderTextColor={colors.ITEM_BOTTOM_BORDER}
                  />
                </View>
                <View style={styles.itemInfoArea}>
                  <Text style={styles.itemInfoHeading}>CONTEXT</Text>
                  <TextInput
                    placeholder={"CONTEXT"}
                    value={this.state.dream.context}
                    onChangeText={this.contextChangeHandler}
                    style={styles.itemInfoText}
                    placeholderTextColor={colors.ITEM_BOTTOM_BORDER}
                  />
                </View>
                <View style={styles.itemInfoArea}>
                  <Text style={styles.itemInfoHeading}>DREAM</Text>
                  <TextInput
                    placeholder={"DREAM"}
                    value={this.state.dream.dream}
                    onChangeText={this.dreamChangeHandler}
                    style={styles.itemInfoText}
                    placeholderTextColor={colors.ITEM_BOTTOM_BORDER}
                  />
                </View>
                <View style={styles.itemInfoArea}>
                  <Text style={styles.itemInfoHeading}>INTERPRETATION</Text>
                  <TextInput
                    placeholder={"INTERPRETATION"}
                    value={this.state.dream.interpretation}
                    onChangeText={this.interpretationChangeHandler}
                    style={styles.itemInfoText}
                    placeholderTextColor={colors.ITEM_BOTTOM_BORDER}
                  />
                </View>
                <View style={styles.itemInfoArea}>
                  <Text style={styles.itemInfoHeading}>MY RESPONSE</Text>
                  <TextInput
                    placeholder={"MY RESPONSE"}
                    value={this.state.dream.myResponse}
                    onChangeText={this.myResponseChangeHandler}
                    style={styles.itemInfoText}
                    placeholderTextColor={colors.ITEM_BOTTOM_BORDER}
                  />
                </View>
              </View>
              {/* <Text style={styles.modalText}>USER_ID: </Text> //TODO: NEED TO HANDLE FUTURE AUTH FOR JWT LOGIN */}
            </ScrollView>
            {/* </KeyboardAvoidingView> */}
          </View>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  topBarContainer: {
    height: getHeaderHeight(),
    backgroundColor: colors.SECONDARY,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  modalBackground: {
    backgroundColor: colors.BACKGROUND,
    padding: 20
  },
  modalContainer: {
    height: height,
    backgroundColor: colors.ITEM,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.ITEM
  },
  scrollViewContainer: {
    height: 200,
    paddingBottom: 500
  },
  scrollViewContainer2: {
    paddingBottom: 500
  },
  createIconContainer: {
    alignItems: "center"
  },
  createIcon: {
    height: 60,
    width: 60,
    marginTop: -30
  },
  infoContainer: {
    marginLeft: 20,
    marginRight: 20
  },
  itemDateArea: {
    minHeight: 80,
    marginTop: 25,
    alignItems: "flex-start",
    borderBottomWidth: 1,
    borderBottomColor: colors.ITEM_BOTTOM_BORDER
  },
  itemInfoArea: {
    minHeight: 100,
    alignItems: "flex-start",
    borderBottomWidth: 1,
    borderBottomColor: colors.ITEM_BOTTOM_BORDER
  },
  lastItemInfoArea: {
    minHeight: 100,
    paddingBottom: 100
  },
  itemInfoHeading: {
    marginTop: 20,
    fontSize: 12,
    color: colors.ITEM_HEADING
  },
  itemInfoText: {
    minHeight: 100,
    minWidth: "100%",
    marginTop: -25,
    // paddingBottom: 30,
    fontSize: 17,
    color: colors.ITEM_TEXT
  },
  itemInfoSwitch: {
    marginTop: Platform.OS === "ios" ? 15 : null,
    paddingBottom: 35,
    fontSize: 17,
    color: colors.ITEM_TEXT
  },
});

export default DreamInput;
import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
  Switch,
  TouchableOpacity,
  Button,
  StyleSheet,
  Dimensions,
  Platform
} from "react-native";
import { connect } from 'react-redux';
import Icon from "@expo/vector-icons/Ionicons"; //TODO: replace with react-native-vector-icons library
import DatePicker from "react-native-datepicker";
import { colors, getHeaderHeight } from "../../Styles/Styles";

import { updateDream, deselectDreamEdit } from '../../store/actions/index';

const { height, width } = Dimensions.get("window");

const currentDate = new Date();
const timeStamp = currentDate.getTime();

class DreamEdit extends Component {
  state = {
    datePicker: new Date(this.props.selectedDream.date),
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
              onPress={this.props.onDeselectDream}
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
              onPress={this.onItemUpdateHandler}
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

        {/* ----------------------- */}
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <View style={styles.createIconContainer}>
              <Image
                resizeMode="cover"
                style={styles.createIcon}
                source={this.props.dreamIcon}
              />
            </View>
            <ScrollView
              style={styles.scrollViewContainer}
              contentContainerStyle={styles.scrollViewContainer2}
            >
              {/* <Text style={styles.modalText}>
                ID: {this.state.selectedDream._id}
              </Text>
              <Text style={styles.modalText}>
                DATE: {this.state.selectedDream.date}
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
                    //   // ... You can check the source to find the other keys.
                    onDateChange={this.onDateChangeHandler}
                  />
                </View>
                <View style={styles.itemInfoArea}>
                  <Text style={styles.itemInfoHeading}>TITLE</Text>
                  <TextInput
                    placeholder={"TITLE"}
                    value={this.state.selectedDream.title}
                    onChangeText={this.titleChangeHandler}
                    style={styles.itemInfoText}
                    placeholderTextColor={colors.ITEM_BOTTOM_BORDER}
                  />
                </View>
                <View style={styles.itemInfoArea}>
                  <Text style={styles.itemInfoHeading}>THEME</Text>
                  <TextInput
                    placeholder={"THEME"}
                    value={this.state.selectedDream.theme}
                    onChangeText={this.themeChangeHandler}
                    style={styles.itemInfoText}
                    placeholderTextColor={colors.ITEM_BOTTOM_BORDER}
                  />
                </View>
                <View style={styles.itemInfoArea}>
                  <Text style={styles.itemInfoHeading}>WHERE WAS I</Text>
                  <TextInput
                    placeholder={"WHERE WAS I"}
                    value={this.state.selectedDream.whereWasI}
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
                    value={this.state.selectedDream.focus}
                    onChangeText={this.focusChangeHandler}
                    style={styles.itemInfoText}
                    placeholderTextColor={colors.ITEM_BOTTOM_BORDER}
                  />
                </View>
                <View style={styles.itemInfoArea}>
                  <Text style={styles.itemInfoHeading}>SUB-FOCUS(ES)</Text>
                  <TextInput
                    placeholder={"SUB-FOCUS(ES)"}
                    value={this.state.selectedDream.subFocus}
                    onChangeText={this.subFocusChangeHandler}
                    style={styles.itemInfoText}
                    placeholderTextColor={colors.ITEM_BOTTOM_BORDER}
                  />
                </View>
                <View style={styles.itemInfoArea}>
                  <Text style={styles.itemInfoHeading}>COLOR</Text>
                  <Switch
                    value={this.state.selectedDream.color}
                    onValueChange={this.colorChangeHandler}
                    style={styles.itemInfoSwitch}
                  />
                </View>
                <View style={styles.itemInfoArea}>
                  <Text style={styles.itemInfoHeading}>BLACK & WHITE</Text>
                  <Switch
                    value={this.state.selectedDream.blackAndWhite}
                    onValueChange={this.blackAndWhiteChangeHandler}
                    style={styles.itemInfoSwitch}
                  />
                </View>
                <View style={styles.itemInfoArea}>
                  <Text style={styles.itemInfoHeading}>MUTED</Text>
                  <Switch
                    value={this.state.selectedDream.muted}
                    onValueChange={this.mutedChangeHandler}
                    style={styles.itemInfoSwitch}
                  />
                </View>
                <View style={styles.itemInfoArea}>
                  <Text style={styles.itemInfoHeading}>
                    RECURRING DREAM
                  </Text>
                  <Switch
                    value={this.state.selectedDream.recurringDream}
                    onValueChange={this.recurringDreamChangeHandler}
                    style={styles.itemInfoSwitch}
                  />
                </View>
                <View style={styles.itemInfoArea}>
                  <Text style={styles.itemInfoHeading}>CATEGORY</Text>
                  <TextInput
                    placeholder={"CATEGORY"}
                    value={this.state.selectedDream.category}
                    onChangeText={this.categoryChangeHandler}
                    style={styles.itemInfoText}
                    placeholderTextColor={colors.ITEM_BOTTOM_BORDER}
                  />
                </View>
                <View style={styles.itemInfoArea}>
                  <Text style={styles.itemInfoHeading}>CONTEXT</Text>
                  <TextInput
                    placeholder={"CONTEXT"}
                    value={this.state.selectedDream.context}
                    onChangeText={this.contextChangeHandler}
                    style={styles.itemInfoText}
                    placeholderTextColor={colors.ITEM_BOTTOM_BORDER}
                  />
                </View>
                <View style={styles.itemInfoArea}>
                  <Text style={styles.itemInfoHeading}>DREAM</Text>
                  <TextInput
                    placeholder={"DREAM"}
                    value={this.state.selectedDream.dream}
                    onChangeText={this.dreamChangeHandler}
                    style={styles.itemInfoText}
                    placeholderTextColor={colors.ITEM_BOTTOM_BORDER}
                  />
                </View>
                <View style={styles.itemInfoArea}>
                  <Text style={styles.itemInfoHeading}>INTERPRETATION</Text>
                  <TextInput
                    placeholder={"INTERPRETATION"}
                    value={this.state.selectedDream.interpretation}
                    onChangeText={this.interpretationChangeHandler}
                    style={styles.itemInfoText}
                    placeholderTextColor={colors.ITEM_BOTTOM_BORDER}
                  />
                </View>
                <View style={styles.itemInfoArea}>
                  <Text style={styles.itemInfoHeading}>MY RESPONSE</Text>
                  <TextInput
                    placeholder={"MY RESPONSE"}
                    value={this.state.selectedDream.myResponse}
                    onChangeText={this.myResponseChangeHandler}
                    style={styles.itemInfoText}
                    placeholderTextColor={colors.ITEM_BOTTOM_BORDER}
                  />
                </View>
              </View>
              {/* <Text style={styles.modalText}>USER_ID: </Text> //TODO: NEED TO HANDLE FUTURE AUTH FOR JWT LOGIN */}
            </ScrollView>
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
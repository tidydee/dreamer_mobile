import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Provider, connect } from 'react-redux';
import Icon from "@expo/vector-icons/Ionicons"; //TODO: replace with react-native-vector-icons librarys
import { colors } from '../../Styles/Styles'

import DreamList from "../../components/DreamList/DreamList";
import DreamDetail from '../../components/DreamDetail/DreamDetail';
import DreamCreate from '../../components/DreamCreate/DreamCreate';
import dreamImage from "../../assets/dreamPlaceHolder.jpg";
import dreamIcon from "../../assets/dreamCardTypeIcon.png"
import HeaderAddButton from '../../components/HeaderAddButton/HeaderAddButton';

import { isEditing, isAdding, addDream, getDreams, deleteDream, selectDream, deselectDream } from '../../store/actions/index';

import configureStore from "../../store/configureStore";
const store = configureStore();

class Entries extends Component {
  static navigationOptions = ({ navigation}) =>  {
    const { params } = navigation.state;
    return {
      headerStyle: {
        backgroundColor: colors.HEADER_TAB_BAR
      },
      headerTitleStyle: {
        color: colors.APP_HEADER_TITLE,
      },
      title: "Entries",
      headerLeft: null,
      headerRight: (
        <HeaderAddButton />
      )
    };
  };

  getData = () => {
    this.props.onGetDreams();
  };

  error = err => {
    this.setState({ loaded: true, error: err.message });
  };

  dreamSelectedHandler = key => {
    console.log("DREAM_ID: " + key);
    // console.log("SELECTED_DREAM: " + this.state.selectedDream(key))

    this.props.onSelectDream(key);
  };

  modalClosedHandler = () => {
    this.props.onDeselectDream();
  };

  dreamDeletedHandler = id => {
    console.log("id");
    console.log(id);
    this.props.onDeleteDream(id); // initiating Callback on setState to make sure DELETE req to API server is called at end of ASYNC setState call to view.
  };

  onItemSavedHandler = dream => {
    this.props.onAddDream(dream);
    console.log("++++++++++++++++ dreamPayload ++++++++++++++++");
    console.log(dream);
    this.props.onDeselectDream();
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.welcomeContainer}>
          {!this.props.loaded && <Text>LOADING...</Text>}

          {this.props.selectedDream ? (
            <DreamDetail
              isEditing={this.props.isEditing}
              // selectedDream={this.props.selectedDream}
              onModalClose={this.modalClosedHandler}
              onItemDeleted={this.dreamDeletedHandler}
              dreamIcon={this.props.image}
            />
          ) : null}

          {this.props.isAdding ? (
            <DreamCreate
              onItemSaved={this.onItemSavedHandler}
              isAdding={this.props.isAdding} //passes isAdding to DreamDetail component.
              onModalClose={this.modalClosedHandler}
              onItemDeleted={this.dreamDeletedHandler}
              image={this.props.image} //TODO: Integrate into Create View.
            />
          ) : null}

          {/* <Button
            style={styles.button}
            title="GET ALL DREAMS"
            onPress={this.getData}
          /> */}
          {/* <Button
            style={styles.button}
            title="ADD DREAM"
            onPress={this.props.onIsAdding}
          /> */}
          <View style={{ flex: 1 }}>
            <DreamList
              error={this.props.error}
              data={this.props.data}
              image={this.props.image}
              onItemSelected={this.dreamSelectedHandler}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.BACKGROUND,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50
  },
  welcomeContainer: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  button: {
    color: 'blue',
  }
});

const mapStateToProps = state => {
  return {
    data: state.dreams.data,
    image: state.dreams.image,
    loaded: state.dreams.loaded,
    error: state.dreams.error,
    selectedDream: state.dreams.selectedDream,
    isAdding: state.dreams.isAdding,
    isEditing: state.dreams.isEditing
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onEditing: (id) => dispatch(isEditing(id)),
    onIsAdding: () => dispatch(isAdding()),
    onAddDream: (body) => dispatch(addDream(body)),
    onGetDreams: () => dispatch(getDreams()),
    onDeleteDream: (id) => dispatch(deleteDream(id)),
    onSelectDream: (key) => dispatch(selectDream(key)),
    onDeselectDream: () => dispatch(deselectDream())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Entries);
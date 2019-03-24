import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Provider, connect } from 'react-redux';

import DreamList from './src/components/DreamList/DreamList';
import DreamDetail from './src/components/DreamDetail/DreamDetail';
import DreamCreate from './src/components/DreamCreate/DreamCreate';
import dreamImage from './src/assets/dreamPlaceHolder.jpg';

import configureStore from './src/store/configureStore';
import { isEditing, isAdding, addDream, getDreams, deleteDream, selectDream, deselectDream } from './src/store/actions/index';

import ObjectID from 'bson-objectid';

const store = configureStore();

class App extends Component {

  getData = () => {
    this.props.onGetDreams();
  }

  error = (err) => {
    this.setState({ loaded: true, error: err.message });
  }
  
  dreamSelectedHandler = (key) => {
    console.log("DREAM_ID: " + key)
    // console.log("SELECTED_DREAM: " + this.state.selectedDream(key))

    this.props.onSelectDream(key)
  }

  modalClosedHandler = () =>{
    this.props.onDeselectDream();
  }

  dreamDeletedHandler = (id) => {
    console.log("id");
    console.log(id);
    this.props.onDeleteDream(id) // initiating Callback on setState to make sure DELETE req to API server is called at end of ASYNC setState call to view.
  }
  
  dreamAddedHandler = () => {
    console.log("ADD DREAM HANDLER!!!")
    let body = {
      "_id": ObjectID().toString(),
      "title": "111111Second2 Semi-Real Dream Submit",
      "theme": "2Theme is real!",
      "whereWasI": "3First Person",
      "focus": "2Me",
      "subFocus": "2So many things...",
      "color": "true",
      "blackAndWhite": "false",
      "muted": "false",
      "recurringDream": "true",
      "category": "2Moving up to high places",
      "context": "2Flying to higher and faster",
      "dream": "2This can be a long sentance, but for the sake of time, I'll stop here",
      "interpretation": "2Since this is not a real dream, there is no real interpretation.",
      "myResponse": "2To keep codinng this app on all fronts at a steady pase."
    };
       
    // this.props.onIsAdding();

    this.props.onAddDream(body);
    // console.log("ObjectID()");
    // console.log(ObjectID());
  }

  addingDream() {
    console.log("ADDING DREAM TRIGGERED!")
  }

  onItemSavedHandler = (dream) => {
    const body = {
      "_id": dream._id,
      "date": dream.date,
      "title": dream.title,
      "theme": dream.theme,
      "whereWasI": dream.whereWasI,
      "focus": dream.focus,
      "subFocus": dream.subFocus,
      // "color": dream.color,
      "color": true,
      // "blackAndWhite": dream.blackAndWhite,
      "blackAndWhite": false,
      // "muted": dream.muted,
      "muted": false,
      // "recurringDream": dream.recurringDream,
      "recurringDream": false,
      "category": dream.category,
      "context": dream.context,
      "dream": dream.dream,
      "interpretation": dream.interpretation,
      "myResponse":dream.myResponse 
    };
    this.props.onAddDream(body);
    console.log("++++++++++++++++ dreamPayload ++++++++++++++++");
    console.log(body);
    this.props.onDeselectDream();
  }

  componentDidMount() {
    // this.getData();
  }
  
  render() {
    return (

        <View style={styles.mainContainer}>
          <View style={styles.welcomeContainer}>
            {!this.props.loaded && (
              <Text>LOADING...</Text>
            )}
            
            {this.props.selectedDream ?
              <DreamDetail
                isEditing={this.props.isEditing}
                // selectedDream={this.props.selectedDream}
                onModalClose={this.modalClosedHandler}
                onItemDeleted={this.dreamDeletedHandler}
                image={dreamImage} //TODO: this is TEMP only. TO be handled with loading Image via ID over NETWORK. 
              />
            : null}

            {this.props.isAdding ?
              <DreamCreate
                onItemSaved={this.onItemSavedHandler}
                isAdding={this.props.isAdding} //passes isAdding to DreamDetail component.
                onModalClose={this.modalClosedHandler}
                onItemDeleted={this.dreamDeletedHandler}
                image={dreamImage} //TODO: this is TEMP only. TO be handled with loading Image via ID over NETWORK. 
              />
            : null}

            <Text style={styles.welcomeContainerText}>Welcome to Dreamer!</Text>
            <Button
              style={styles.button}
              title="GET ALL DREAMS"
              onPress={this.getData}
            />
            <Button 
              style={styles.button}
              title="ADD DREAM"
              onPress={this.props.onIsAdding}
              // onPress={this.dreamAddedHandler}
            />
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100
  },
  welcomeContainer: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  welcomeContainerText: {
    color: '#000',
    fontSize: 30,
    fontWeight: 'bold'

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

// export default connect(mapStateToProps, mapDispatchToProps)(App);

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

export default Root = () => {
  return (
    <Provider store={store}>
      <ConnectedApp />
    </Provider>
  )
}
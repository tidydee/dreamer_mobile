import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Provider, connect } from 'react-redux';

import DreamList from './src/components/DreamList/DreamList';
import DreamDetail from './src/components/DreamDetail/DreamDetail';
import dreamImage from './src/assets/dreamPlaceHolder.jpg';

import configureStore from './src/store/configureStore';
import { getDreams, deleteDream, selectDream, deselectDream } from './src/store/actions/index';

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
      // () => {
        // this.setState({ loaded: false, error: null });
        // let url = this.baseURL + `/dream?id=${id}`;
        // let h = new Headers();
        // h.append('Authorization', 'Bearer DummyJWT-To-BeReplaced');

        // let req = new Request(url, {
        //   headers: h,
        //   method: 'DELETE'
        // });

        // fetch(req)
        //   .then(response => response.json())
        //   // .then(this.showData)
        //   .catch(this.error)
        // console.log(`Dream ID: ${id} deleted successfully from server.`)
      // };
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
            
            <DreamDetail 
              selectedDream={this.props.selectedDream}
              onModalClose={this.modalClosedHandler}
              onItemDeleted={this.dreamDeletedHandler}
              image={dreamImage} //TODO: this is TEMP only. TO be handled with loading Image via ID over NETWORK. 
            />

            <Text style={styles.welcomeContainerText}>Welcome to Dreamer!</Text>
            <Button
              style={styles.button}
              title="GET ALL DREAMS"
              onPress={this.getData}
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
    selectedDream: state.dreams.selectedDream
  };
};

const mapDispatchToProps = dispatch => {
  return {
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
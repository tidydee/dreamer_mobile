import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { connect } from "react-redux";
import Icon from "@expo/vector-icons/Ionicons"; //TODO: replace with react-native-vector-icons librarys

import { isAdding } from '../../store/actions/index';

class HeaderAddButton extends Component {
  onHeaderAddHandler = () => {
    console.log("HERE")
    this.props.onIsAdding;
  }

  render() {
    return (
      <TouchableOpacity
        onPress={this.props.onIsAdding}
        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        style={{ height: 100, marginTop: 10, margin: 5 }}
      >
        <Icon
          style={{ paddingTop: 30, paddingRight: 10, color: "#147efb" }}
          name="md-add"
          size={30}
        />
      </TouchableOpacity>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onIsAdding: () => dispatch(isAdding())
  };
};

export default connect(null, mapDispatchToProps)(HeaderAddButton);
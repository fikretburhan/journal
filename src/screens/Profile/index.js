import {Text, View} from 'react-native';
import React, {Component} from 'react';
import ProfileComponent from '../../components/ProfileComponent/index';

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {},
    };
  }
  onSaveButtonPress = () => {
    const {
      firstname,
      lastname,
      email,
      department,
      gradyear,
      job,
      companyname,
      country,
      city,
    } = this.state.form;
  };
  onChangeText = ({type, value}) => {
    this.setState(prevState => ({
      ...prevState,
      form: {...prevState.form, [type]: value},
    }));
  };
  render() {
    return (
      <ProfileComponent
        onSaveButtonPress={this.onSaveButtonPress}
        onChangeText={this.onChangeText}
      />
    );
  }
}

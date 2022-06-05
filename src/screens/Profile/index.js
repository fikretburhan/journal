import {Text, View} from 'react-native';
import React, {Component} from 'react';
import ProfileComponent from '../../components/ProfileComponent/index';
import strings from '../../../strings';
export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {},
      phoneNum: null,
      error: {},
    };
  }
  onSaveButtonPress = () => {
    const {
      firstname,
      lastname,
      email,
      phone,
      department,
      gradyear,
      job,
      company,
      country,
      city,
    } = this.state.form;

    if (firstname == undefined) {
      this.setState(prevState => ({
        ...prevState,
        error: {...prevState.error, ['firstname']: strings.thisFieldIsRequired},
      }));
    }
    if (lastname == undefined) {
      this.setState(prevState => ({
        ...prevState,
        error: {...prevState.error, ['lastname']: strings.thisFieldIsRequired},
      }));
    }
    if (email == undefined) {
      this.setState(prevState => ({
        ...prevState,
        error: {...prevState.error, ['email']: strings.thisFieldIsRequired},
      }));
    } else {
      let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (!email.match(regexEmail)) {
        this.setState(prevState => ({
          ...prevState,
          error: {...prevState.error, ['email']: strings.emailFormatIncorrect},
        }));
      }
    }
    if (phone == undefined) {
      this.setState(prevState => ({
        ...prevState,
        error: {...prevState.error, ['phone']: strings.thisFieldIsRequired},
      }));
    }
    if (department == undefined) {
      this.setState(prevState => ({
        ...prevState,
        error: {
          ...prevState.error,
          ['department']: strings.thisFieldIsRequired,
        },
      }));
    }
    if (job == undefined) {
      this.setState(prevState => ({
        ...prevState,
        error: {
          ...prevState.error,
          ['job']: strings.thisFieldIsRequired,
        },
      }));
    }
    if (gradyear == undefined) {
      this.setState(prevState => ({
        ...prevState,
        error: {
          ...prevState.error,
          ['gradyear']: strings.thisFieldIsRequired,
        },
      }));
    }
    if (company == undefined) {
      this.setState(prevState => ({
        ...prevState,
        error: {
          ...prevState.error,
          ['company']: strings.thisFieldIsRequired,
        },
      }));
    }
    if (city == undefined) {
      this.setState(prevState => ({
        ...prevState,
        error: {
          ...prevState.error,
          ['city']: strings.thisFieldIsRequired,
        },
      }));
    }
    if (country == undefined) {
      this.setState(prevState => ({
        ...prevState,
        error: {
          ...prevState.error,
          ['company']: strings.thisFieldIsRequired,
        },
      }));
    }
  };
  onChangeText = ({type, value}) => {
    if (type === 'phone') {
      var cleaned = ('' + value).replace(/\D/g, '');
      var match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);
      if (match) {
        var intlCode = match[1] ? '+1 ' : '',
          number = [
            intlCode,
            '(',
            match[2],
            ') ',
            match[3],
            '-',
            match[4],
          ].join('');

        this.setState({
          phoneNum: number,
        });

        return;
      }

      this.setState({
        phoneNum: value,
      });
    }
    this.setState(prevState => ({
      ...prevState,
      form: {...prevState.form, [type]: value},
      error: {...prevState.error, [type]: null},
    }));
  };
  render() {
    return (
      <ProfileComponent
        onSaveButtonPress={this.onSaveButtonPress}
        onChangeText={this.onChangeText}
        phoneNum={this.state.phoneNum}
        error={this.state.error}
      />
    );
  }
}

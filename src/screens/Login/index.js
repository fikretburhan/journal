import {Text, View} from 'react-native';
import React, {Component} from 'react';
import LoginComponent from '../../components/LoginComponent';
import loginUser from '../../context/actions/auth/loginUser';
import {JournalContext} from '../../context/Provider';

class Login extends Component {
  static contextType = JournalContext;
  constructor(props) {
    super(props);

    this.state = {
      form: {},
      error: {},
      secureTextEntry: true,
    };
  }
  onTextChange = ({type, value}) => {
    this.setState(prevState => ({
      ...prevState,
      form: {...prevState.form, [type]: value},
    }));
    if (value.trim().length > 0) {
      let tempErrorList = Object.keys(this.state.error)
        .filter(key => key !== type)
        .reduce((obj, key) => {
          obj[key] = this.state.error[key];
          return obj;
        }, {});
      this.setState(prevState => ({
        ...prevState,
        error: tempErrorList,
      }));
    }
  };
  onSubmit = () => {
    const {userName, password} = this.state.form;
    const {authDispatch} = this.context;
    if (userName === undefined || userName.trim().length === 0) {
      this.setState(prevState => ({
        ...prevState,
        error: {...prevState.error, ['userName']: 'Kullanıcı adı gerekli'},
      }));
    }
    if (password === undefined || password.trim().length === 0) {
      this.setState(prevState => ({
        ...prevState,
        error: {...prevState.error, ['password']: 'Parola alanı gerekli'},
      }));
    }
    if (
      Object.values(this.state.form).length === 2 &&
      Object.values(this.state.error).every(item => !item) &&
      Object.values(this.state.form).every(item => item.trim().length > 0)
    ) {
      loginUser(this.state.form)(authDispatch);
    }
  };
  showSecureText = value => {
    this.setState({secureTextEntry: value});
  };
  render() {
    const {
      authState: {language},
    } = this.context;
    return (
      <LoginComponent
        onTextChange={this.onTextChange}
        onSubmit={this.onSubmit}
        secureTextEntry={this.state.secureTextEntry}
        error={this.state.error}
        showSecureText={this.showSecureText}
      />
    );
  }
}

export default Login;

import {Text, View} from 'react-native';
import React, {Component} from 'react';
import ProfileComponent from '../../components/ProfileComponent/index';
import strings from '../../utils/strings';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {},
      phoneNum: null,
      error: {},
      loading: false,
      modalVisible: false,
    };
  }
  setModalVisible = modalVisible => {
    this.setState({modalVisible: modalVisible});
  };
  async componentDidMount() {
    try {
      await AsyncStorage.getItem('profile').then(value => {
        let parsedForm = JSON.parse(value);
        if (parsedForm) this.setState({form: parsedForm});
      });
    } catch (err) {
      console.log('err', err);
    }
  }
  onSaveButtonPress = async () => {
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
    if (firstname == undefined || firstname.trim().length == 0) {
      await this.setState(prevState => ({
        ...prevState,
        error: {...prevState.error, ['firstname']: strings.thisFieldIsRequired},
      }));
    }
    if (lastname == undefined || lastname.trim().length == 0) {
      this.setState(prevState => ({
        ...prevState,
        error: {...prevState.error, ['lastname']: strings.thisFieldIsRequired},
      }));
    }
    if (email == undefined || email.trim().length == 0) {
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
    if (phone == undefined || phone.trim().length == 0) {
      this.setState(prevState => ({
        ...prevState,
        error: {...prevState.error, ['phone']: strings.thisFieldIsRequired},
      }));
    }
    if (department == undefined || department.trim().length == 0) {
      this.setState(prevState => ({
        ...prevState,
        error: {
          ...prevState.error,
          ['department']: strings.thisFieldIsRequired,
        },
      }));
    }
    if (job == undefined || job.trim().length == 0) {
      this.setState(prevState => ({
        ...prevState,
        error: {
          ...prevState.error,
          ['job']: strings.thisFieldIsRequired,
        },
      }));
    }
    if (gradyear == undefined || gradyear.trim().length == 0) {
      this.setState(prevState => ({
        ...prevState,
        error: {
          ...prevState.error,
          ['gradyear']: strings.thisFieldIsRequired,
        },
      }));
    }
    if (company == undefined || company.trim().length == 0) {
      this.setState(prevState => ({
        ...prevState,
        error: {
          ...prevState.error,
          ['company']: strings.thisFieldIsRequired,
        },
      }));
    }
    if (city == undefined || city.trim().length == 0) {
      this.setState(prevState => ({
        ...prevState,
        error: {
          ...prevState.error,
          ['city']: strings.thisFieldIsRequired,
        },
      }));
    }
    if (country == undefined || country.trim().length == 0) {
      this.setState(prevState => ({
        ...prevState,
        error: {
          ...prevState.error,
          ['company']: strings.thisFieldIsRequired,
        },
      }));
    }

    if (
      Object.values(this.state.form).length &&
      Object.values(this.state.form).every(item => item.trim().length > 0) &&
      Object.values(this.state.error).every(item => !item)
    ) {
      this.setState({loading: true});
      await AsyncStorage.setItem('profile', JSON.stringify(this.state.form))
        .then(result => {
          this.setState({loading: false, modalVisible: true});
        })
        .catch(err => {
          this.setState({loading: false});
        });
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
        this.setState(prevState => ({
          ...prevState,
          form: {...prevState.form, [type]: value},
          error: {...prevState.error, [type]: null},
          phoneNum: number,
        }));

        return;
      } else {
        this.setState(prevState => ({
          phoneNum: value,
          form: {...prevState.form, ['phone']: ''},
          // error: {
          //   ...prevState.error,
          //   ['phone']: 'Lütfen geçerli bir telefon numarası yazınız',
          // },
        }));
      }
    } else {
      this.setState(prevState => ({
        ...prevState,
        form: {...prevState.form, [type]: value},
      }));
      if (value.trim().length > 0) {
        this.setState(prevState => ({
          ...prevState,
          error: {...prevState.error, [type]: null},
        }));
      }
    }
  };
  render() {
    const {phoneNum, error, form, loading, modalVisible} = this.state;
    return (
      <ProfileComponent
        onSaveButtonPress={this.onSaveButtonPress}
        onChangeText={this.onChangeText}
        phoneNum={phoneNum}
        error={error}
        form={form}
        loading={loading}
        setModalVisible={this.setModalVisible}
        modalVisible={modalVisible}
      />
    );
  }
}

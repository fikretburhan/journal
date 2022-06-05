import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {Component} from 'react';
import Input from '../Input';
import JIcon from '../common/JIcon/index';
import styles from '../Input/styles';
import JButton from '../common/JButton';
import colors from '../../assets/themes/colors';
import strings from '../../../strings';
export default class ProfileComponent extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}
  render() {
    const {
      form: {
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
      },
      error: {
        firstname: firstname_error,
        lastname: lastname_error,
        email: email_error,
        phone: phone_error,
        department: department_error,
        gradyear: gradyear_error,
        job: job_error,
        company: company_error,
        country: country_error,
        city: city_error,
      },
      onSaveButtonPress,
      onChangeText,
    } = this.props;
    return (
      <ScrollView style={{backgroundColor: 'white'}}>
        <View style={styles.personIconView}>
          <JIcon
            name="person"
            type="Ionicons"
            size={100}
            style={styles.personIcon}
          />
        </View>
        <Input
          label={strings.firstName}
          placeholder={strings.enterFirstName}
          onChangeText={value =>
            onChangeText({type: 'firstname', value: value})
          }
          error={firstname_error}
          value={firstname}
        />
        <Input
          label={strings.lastName}
          placeholder={strings.enterLastName}
          onChangeText={value => onChangeText({type: 'lastname', value: value})}
          error={lastname_error}
          value={lastname}
        />
        <Input
          label={strings.email}
          placeholder={strings.enterEmailAddress}
          onChangeText={value => onChangeText({type: 'email', value: value})}
          error={email_error}
          value={email}
        />
        <Input
          label={strings.phone}
          placeholder={strings.enterPhone}
          onChangeText={value => onChangeText({type: 'phone', value: value})}
          textContentType="telephoneNumber"
          dataDetectorTypes="phoneNumber"
          keyboardType="phone-pad"
          maxLength={14}
          value={this.props.phoneNum ? this.props.phoneNum : phone}
          error={phone_error}
        />
        <Input
          label={strings.department}
          placeholder={strings.enterDepartment}
          onChangeText={value =>
            onChangeText({type: 'department', value: value})
          }
          error={department_error}
          value={department}
        />
        <Input
          label={strings.gradDate}
          placeholder={strings.entergradDate}
          keyboardType="numeric"
          maxLength={4}
          onChangeText={value => onChangeText({type: 'gradyear', value: value})}
          error={gradyear_error}
          value={gradyear}
        />
        <Input
          label={strings.job}
          placeholder={strings.enterJob}
          onChangeText={value => onChangeText({type: 'job', value: value})}
          error={job_error}
          value={job}
        />
        <Input
          label={strings.company}
          placeholder={strings.enterCompany}
          onChangeText={value => onChangeText({type: 'company', value: value})}
          error={company_error}
          value={company}
        />
        <Input
          label={strings.country}
          placeholder={strings.enterCountry}
          onChangeText={value => onChangeText({type: 'country', value: value})}
          error={country_error}
          value={country}
        />
        <Input
          label={strings.city}
          placeholder={strings.enterCity}
          onChangeText={value => onChangeText({type: 'city', value: value})}
          error={city_error}
          value={city}
        />
        <View>
          <JButton
            onPress={onSaveButtonPress}
            title={strings.save}
            style={{
              backgroundColor: colors.darkBlue,
              margin: 20,
              height: 40,
              borderRadius: 5,
            }}
          />
        </View>
      </ScrollView>
    );
  }
}

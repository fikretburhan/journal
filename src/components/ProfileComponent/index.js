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
            this.props.onChangeText({type: 'firstname', value: value})
          }
          error={this.props.error.firstname}
        />
        <Input
          label={strings.lastName}
          placeholder={strings.enterLastName}
          onChangeText={value =>
            this.props.onChangeText({type: 'lastname', value: value})
          }
          error={this.props.error.lastname}
        />
        <Input
          label={strings.email}
          placeholder={strings.enterEmailAddress}
          onChangeText={value =>
            this.props.onChangeText({type: 'email', value: value})
          }
          error={this.props.error.email}
        />
        <Input
          label={strings.phone}
          placeholder={strings.enterPhone}
          onChangeText={value =>
            this.props.onChangeText({type: 'phone', value: value})
          }
          textContentType="telephoneNumber"
          dataDetectorTypes="phoneNumber"
          keyboardType="phone-pad"
          maxLength={14}
          value={this.props.phoneNum}
          error={this.props.error.phone}
        />
        <Input
          label={strings.department}
          placeholder={strings.enterDepartment}
          onChangeText={value =>
            this.props.onChangeText({type: 'department', value: value})
          }
          error={this.props.error.department}
        />
        <Input
          label={strings.gradDate}
          placeholder={strings.entergradDate}
          keyboardType="numeric"
          maxLength={4}
          onChangeText={value =>
            this.props.onChangeText({type: 'gradyear', value: value})
          }
          error={this.props.error.gradyear}
        />
        <Input
          label={strings.job}
          placeholder={strings.enterJob}
          onChangeText={value =>
            this.props.onChangeText({type: 'job', value: value})
          }
          error={this.props.error.job}
        />
        <Input
          label={strings.company}
          placeholder={strings.enterCompany}
          onChangeText={value =>
            this.props.onChangeText({type: 'companyname', value: value})
          }
          error={this.props.error.companyname}
        />
        <Input
          label={strings.country}
          placeholder={strings.enterCountry}
          onChangeText={value =>
            this.props.onChangeText({type: 'countryname', value: value})
          }
          error={this.props.error.countryname}
        />
        <Input
          label={strings.city}
          placeholder={strings.enterCity}
          onChangeText={value =>
            this.props.onChangeText({type: 'cityname', value: value})
          }
          error={this.props.error.cityname}
        />
        <View>
          <JButton
            onPress={this.props.onSaveButtonPress}
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

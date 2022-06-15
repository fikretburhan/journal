import {
  FlatList,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  KeyboardAvoidingView,
  Keyboard,
} from 'react-native';
import React, {Component} from 'react';
import Input from '../common/Input';
import JIcon from '../common/JIcon/index';
import styles from './styles';
import JButton from '../common/JButton';
import colors from '../../assets/themes/colors';
import strings from '../../utils/strings';
import RBSheet from 'react-native-raw-bottom-sheet';
import CountrySelect from '../common/CountrySelectComponent';
import NotificationModal from '../common/NotificationModel/index';
const WIN_HEIGHT = Dimensions.get('screen').height;

export default class ProfileComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.RBSheet = React.createRef();
  }
  componentDidMount() {}
  onCountrySelect = country => {
    this.RBSheet.close();
    this.props.onChangeText({type: 'country', value: country});
  };
  getCountryTextPlaceholderStyle = () => {
    let textColor = this.props.form.country ? colors.black : colors.gray;
    return {color: textColor, fontFamily: 'Montserrat'};
  };
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
      loading,
    } = this.props;
    const countryTextPlaceholderStyle = this.getCountryTextPlaceholderStyle();
    return (
      <>
        <ScrollView
          style={{backgroundColor: 'white'}}
          keyboardShouldPersistTaps={'handled'}>
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
            onChangeText={value =>
              onChangeText({type: 'lastname', value: value})
            }
            error={lastname_error}
            value={this.props.form && this.props.form.lastname}
          />
          <Input
            label={strings.email}
            placeholder={strings.enterEmailAddress}
            onChangeText={value => onChangeText({type: 'email', value: value})}
            error={email_error}
            value={this.props.form && this.props.form.email}
          />
          <Input
            label={strings.phone}
            placeholder={strings.enterPhone}
            onChangeText={value => onChangeText({type: 'phone', value: value})}
            textContentType="telephoneNumber"
            dataDetectorTypes="phoneNumber"
            keyboardType="phone-pad"
            maxLength={14}
            value={
              this.props.phoneNum
                ? this.props.phoneNum
                : this.props.form && this.props.form.phone
            }
            error={phone_error}
          />
          <Input
            label={strings.department}
            placeholder={strings.enterDepartment}
            onChangeText={value =>
              onChangeText({type: 'department', value: value})
            }
            error={department_error}
            value={this.props.form && this.props.form.department}
          />
          <Input
            label={strings.gradDate}
            placeholder={strings.entergradDate}
            keyboardType="numeric"
            maxLength={4}
            onChangeText={value =>
              onChangeText({type: 'gradyear', value: value})
            }
            error={gradyear_error}
            value={this.props.form && this.props.form.gradyear}
          />
          <Input
            label={strings.job}
            placeholder={strings.enterJob}
            onChangeText={value => onChangeText({type: 'job', value: value})}
            error={job_error}
            value={this.props.form && this.props.form.job}
          />
          <Input
            label={strings.company}
            placeholder={strings.enterCompany}
            onChangeText={value =>
              onChangeText({type: 'company', value: value})
            }
            error={company_error}
            value={this.props.form && this.props.form.company}
          />
          <View>
            <Text style={styles.countryLabel}>{strings.country}</Text>
            <TouchableOpacity
              onPress={() => this.RBSheet.open()}
              style={styles.countryView}>
              <Text style={[styles.countryText, countryTextPlaceholderStyle]}>
                {Object.values(this.props.form).length
                  ? this.props.form.country
                  : 'Ülke Seçiniz'}
              </Text>
              <JIcon
                type="AntDesign"
                name="caretdown"
                size={15}
                color={colors.darkBlue}
                style={styles.icon}
              />
            </TouchableOpacity>
            {country_error && (
              <Text style={styles.countryError}>{country_error}</Text>
            )}
          </View>
          <Input
            label={strings.city}
            placeholder={strings.enterCity}
            onChangeText={value => onChangeText({type: 'city', value: value})}
            error={city_error}
            value={this.props.form && this.props.form.city}
          />
          <View>
            <JButton
              onPress={onSaveButtonPress}
              title={
                Object.values(this.props.form).length
                  ? strings.update
                  : strings.save
              }
              style={{
                backgroundColor: colors.darkBlue,
                margin: 20,
                height: 40,
                borderRadius: 5,
              }}
              primary
              loading={loading}
              disabled={loading}
            />
          </View>
          <RBSheet
            ref={ref => {
              this.RBSheet = ref;
            }}
            height={WIN_HEIGHT}
            openDuration={350}
            customStyles={{
              container: {
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
              },
            }}>
            <CountrySelect onCountrySelect={this.onCountrySelect} />
          </RBSheet>
        </ScrollView>
        <NotificationModal
          {...this.props}
          description={strings.registerSuccess}
        />
      </>
    );
  }
}

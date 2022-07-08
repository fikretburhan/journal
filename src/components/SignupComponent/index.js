import {Text, View, TouchableOpacity, Pressable} from 'react-native';
import React, {Component} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../assets/themes/colors';
import styles from './styles';
import strings from '../../utils/strings';
import JButton from '../common/JButton';
import Input from '../common/Input';
import {navigate} from '../../navigations/RootNavigator';
import JIcon from '../common/JIcon';

class SignupComponent extends Component {
  render() {
    const {onTextChange, onSubmit, secureTextEntry, error, showSecureText} =
      this.props;
    return (
      <LinearGradient
        colors={[colors.linearDark, colors.white, colors.linearDark]}
        style={styles.container}>
        <View style={styles.titleView}>
          <Text style={styles.title}>{strings.userLogin}</Text>
        </View>
        <Input
          label={strings.username}
          icon={
            <JIcon
              type="AntDesign"
              name="user"
              size={20}
              color={colors.lightBlue}
            />
          }
          iconPosition="left"
          onChangeText={value => onTextChange({type: 'userName', value: value})}
          error={error.userName}
        />
        <Input
          label={strings.password}
          icon={
            <JIcon
              type="AntDesign"
              name="lock"
              size={20}
              color={colors.lightBlue}
            />
          }
          rightIcon={
            <TouchableOpacity
              style={styles.secureTextButton}
              onPress={() => showSecureText(!secureTextEntry)}>
              <JIcon
                type="AntDesign"
                name="eye"
                size={20}
                color={colors.lightBlue}
              />
            </TouchableOpacity>
          }
          iconPosition="left"
          onChangeText={value => onTextChange({type: 'password', value: value})}
          secureTextEntry={secureTextEntry}
          error={error.password}
        />
        <JButton
          title={strings.login}
          primary
          style={{margin: 20, height: 40, borderRadius: 5}}
          onPress={onSubmit}
        />
        <View style={styles.alreadyHaveAccountButtonView}>
          <Pressable onPress={() => navigate('Login')}>
            <Text style={styles.alreadyHaveAccountButtonText}>
              {strings.alreadyHaveAnAccount}
            </Text>
          </Pressable>
        </View>
      </LinearGradient>
    );
  }
}

export default SignupComponent;

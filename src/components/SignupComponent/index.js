import {
  Text,
  View,
  TouchableOpacity,
  Pressable,
  Dimensions,
} from 'react-native';
import React, {Component} from 'react';
import colors from '../../assets/themes/colors';
import styles from './styles';
import strings from '../../utils/strings';
import JButton from '../common/JButton';
import Input from '../common/Input';
import {navigate} from '../../navigations/RootNavigator';
import JIcon from '../common/JIcon';
import LinearGradient from 'react-native-linear-gradient';

const SignupComponent = ({
  onTextChange,
  onSubmit,
  secureTextEntry,
  error,
  showSecureText,
}) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[colors.white, colors.blue]}
        style={styles.topWrapper}
      />
      <View style={styles.middleWrapper}>
        <View style={styles.titleView}>
          <Text style={styles.title}>{strings.register}</Text>
        </View>
        <Input
          //label={strings.username}
          icon={
            <JIcon
              type="AntDesign"
              name="user"
              size={20}
              color={colors.lightBlue}
            />
          }
          placeholder={strings.username}
          iconPosition="left"
          onChangeText={value => onTextChange({type: 'userName', value: value})}
          error={error.userName}
        />
        <Input
          //label={strings.password}
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
          placeholder={strings.password}
          iconPosition="left"
          onChangeText={value => onTextChange({type: 'password', value: value})}
          secureTextEntry={secureTextEntry}
          error={error.password}
        />
        <JButton
          title={strings.signup}
          style={{
            margin: 20,
            height: 40,
            borderRadius: 10,
            backgroundColor: colors.blue,
          }}
          onPress={onSubmit}
        />
        <View style={styles.alreadyHaveAccountButtonView}>
          <Pressable onPress={() => navigate('Login')}>
            <Text style={styles.alreadyHaveAccountButtonText}>
              {strings.alreadyHaveAnAccount}
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default SignupComponent;

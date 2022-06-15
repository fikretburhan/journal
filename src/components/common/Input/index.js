import {Text, View, SafeAreaView, TextInput} from 'react-native';
import React, {Component} from 'react';
import styles from './styles';
import JIcon from '../JIcon';
import colors from '../../../assets/themes/colors';

export default class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focused: false,
    };
  }
  getIconPosition = () => {
    if (this.props.icon && this.props.iconPosition) {
      if (this.props.iconPosition == 'left') {
        return 'row';
      } else if ((this.props.iconPosition = 'right')) {
        return 'row-reverse';
      }
    }
  };
  getBorderColor = () => {
    if (this.props.error) {
      return colors.danger;
    } else {
      if (this.state.focused) {
        return colors.darkBlue;
      } else {
        return colors.lightBlue;
      }
    }
  };
  render() {
    const {label, onChangeText, value, error} = this.props;
    return (
      <SafeAreaView>
        {label && <Text style={styles.label}>{label}</Text>}
        <View
          style={[
            styles.inputView,
            {
              flexDirection: this.getIconPosition(),
              borderColor: this.getBorderColor(),
            },
          ]}>
          {this.props.icon && this.props.icon}
          <TextInput
            style={[styles.input, this.props.style]}
            onChangeText={onChangeText}
            value={value}
            onFocus={() => this.setState({focused: true})}
            onBlur={() => this.setState({focused: false})}
            {...this.props}
          />
          {this.props.rightIcon && this.props.rightIcon}
        </View>
        {error && <Text style={[styles.error, this.props.style]}>{error}</Text>}
      </SafeAreaView>
    );
  }
}

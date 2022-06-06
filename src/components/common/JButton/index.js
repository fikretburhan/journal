import {
  Text,
  TouchableOpacity,
  View,
  TouchableHighlight,
  ActivityIndicator,
} from 'react-native';
import React, {Component} from 'react';
import styles from './styles';
import colors from '../../../assets/themes/colors';

export default class JButton extends Component {
  getBgColor = () => {
    if (this.props.disabled) return colors.gray;
    else if (this.props.primary) return colors.primary;
    else if (this.props.danger) return colors.danger;
    else if (this.props.success) return colors.success;
  };
  render() {
    const {onPress, disabled, title, style, loading} = this.props;
    return (
      <TouchableOpacity
        onPress={onPress}
        disabled={disabled}
        style={[
          styles.buttonView,
          style,
          {backgroundColor: this.getBgColor()},
        ]}>
        {loading ? (
          <ActivityIndicator color={colors.white} />
        ) : (
          <Text style={styles.title}>{title}</Text>
        )}
      </TouchableOpacity>
    );
  }
}

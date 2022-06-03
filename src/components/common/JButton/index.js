import {Text, TouchableOpacity, View, TouchableHighlight} from 'react-native';
import React, {Component} from 'react';
import styles from './styles';

export default class JButton extends Component {
  render() {
    return (
      <TouchableOpacity
        onPress={this.props.onPress}
        style={[styles.buttonView, this.props.style]}>
        <Text style={styles.title}>{this.props.title}</Text>
      </TouchableOpacity>
    );
  }
}

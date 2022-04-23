import {Text, View, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import styles from './styles';
import JIcon from '../common/JIcon';
import colors from '../../assets/themes/colors';

export default class DrawerIconComponent extends Component {
  render() {
    return (
      <View>
        <TouchableOpacity
          onPress={this.props.onPress}
          style={styles.drawerIcon}>
          <JIcon
            type="Ionicons"
            name="person-circle-outline"
            size={35}
            color={colors.white}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

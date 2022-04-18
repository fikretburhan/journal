import {Text, View, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import JIcon from '../../common/JIcon';
import styles from './styles';
import colors from '../../../assets/themes/colors';

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
            color={colors.darkBlue}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

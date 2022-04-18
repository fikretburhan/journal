import {Text, View, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import {navigate} from '../../navigations/RootNavigator';
import styles from './styles';
import JIcon from '../common/JIcon';
import colors from '../../assets/themes/colors';
import DrawerIcon from './DrawerIconComponent';
import DrawerModal from '../common/DrawerModal';

export default class HomeComponent extends Component {
  render() {
    return (
      <>
        <View>
          <View style={styles.navBar}>
            <DrawerIcon onPress={this.props.setModalVisible} />
          </View>
        </View>
        <DrawerModal
          animationType="fade"
          transparent={true}
          title="test"
          modalVisible={this.props.modalVisible}
          setModalVisible={this.props.setModalVisible}
        />
      </>
    );
  }
}

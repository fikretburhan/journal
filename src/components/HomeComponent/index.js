import {Text, View, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import {navigate} from '../../navigations/RootNavigator';
import styles from './styles';
import JIcon from '../common/JIcon';
import colors from '../../assets/themes/colors';
import DrawerModal from '../common/DrawerModal';
import LatestArticles from '../LatestArticlesComponent';
import DrawerIconComponent from '../DrawerIconComponent';

export default class HomeComponent extends Component {
  render() {
    return (
      <>
        <View>
          <View style={styles.navBar}>
            <DrawerIconComponent onPress={this.props.setModalVisible} />
          </View>
        </View>
        <View style={styles.listContainer}>
          <LatestArticles />
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

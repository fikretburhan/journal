import {Text, View, TouchableOpacity, ScrollView} from 'react-native';
import React, {Component} from 'react';
import {navigate} from '../../navigations/RootNavigator';
import styles from './styles';
import JIcon from '../common/JIcon';
import colors from '../../assets/themes/colors';
import DrawerModal from '../common/DrawerModal';
import LatestArticles from '../LatestArticlesComponent';
import DrawerIconComponent from '../../components/DrawerIconComponent';
import LatestNewsComponent from '../LatestNewsComponent';
import JournalList from '../JournalListComponent';
import LinearGradient from 'react-native-linear-gradient';
export default class HomeComponent extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <View>
          <View style={styles.navBar}>
            <DrawerIconComponent onPress={this.props.setModalVisible} />
          </View>
        </View>
        <LinearGradient
          colors={[colors.white, colors.linearDark]}
          style={styles.listContainer}>
          <JournalList />
        </LinearGradient>
        <LinearGradient
          colors={[colors.white, colors.linearDark]}
          style={styles.listContainer}>
          <LatestArticles />
        </LinearGradient>
        <LinearGradient
          colors={[colors.white, colors.linearDark]}
          style={styles.listContainer}>
          <LatestNewsComponent />
        </LinearGradient>
        <DrawerModal
          animationType="fade"
          transparent={true}
          title=""
          modalVisible={this.props.modalVisible}
          setModalVisible={this.props.setModalVisible}
        />
      </ScrollView>
    );
  }
}

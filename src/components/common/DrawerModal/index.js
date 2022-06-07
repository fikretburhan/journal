import {Text, View, Modal, TouchableOpacity, ScrollView} from 'react-native';
import React, {Component} from 'react';
import styles from './styles';
import JIcon from '../JIcon';
import colors from '../../../assets/themes/colors';
import {navigate} from '../../../navigations/RootNavigator';
export default class DrawerModal extends Component {
  render() {
    const DrawerList = [
      {
        index: 0,
        title: 'Fikret Burhan Yılmaz',
        icon: (
          <JIcon
            type="MaterialIcons"
            name="logout"
            size={20}
            color={colors.black}
          />
        ),
        onPress: () => {},
      },
      {
        index: 2,
        title: 'Profil',
        icon: null,
        onPress: () => navigate('Profile'),
      },
      {
        index: 3,
        title: 'Ayarlar',
        icon: null,
        onPress: () => {
          navigate('Settings');
          this.props.setModalVisible();
        },
      },
    ];
    return (
      <Modal {...this.props} visible={this.props.modalVisible}>
        <>
          <TouchableOpacity
            onPress={this.props.setModalVisible}
            style={styles.wrapper}>
            <View style={styles.modalView}>
              {DrawerList.map((item, index) => {
                return (
                  <View key={item.index}>
                    <TouchableOpacity
                      style={styles.modalItem}
                      onPress={item.onPress}>
                      <Text
                        style={{
                          color: colors.black,
                          fontFamily: 'Roboto-Bold',
                        }}>
                        {item.title}
                      </Text>
                      {item.icon}
                    </TouchableOpacity>
                    <View style={styles.divider} />
                  </View>
                );
              })}
            </View>
          </TouchableOpacity>
        </>
      </Modal>
    );
  }
}

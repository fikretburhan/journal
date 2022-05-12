import {Text, View, Modal, TouchableOpacity, ScrollView} from 'react-native';
import React, {Component} from 'react';
import styles from './styles';
import {Divider} from '@rneui/themed';
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
      {index: 1, title: 'Profil', icon: null, onPress: () => {}},
      {
        index: 2,
        title: 'Ayarlar',
        icon: null,
        onPress: () => {
          navigate('Settings');
        },
      },
      {
        index: 3,
        title: 'Abonelikler',
        icon: null,
        onPress: () => navigate('Subscriptions'),
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
                    <Divider style={styles.divider} color={colors.darkBlue} />
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

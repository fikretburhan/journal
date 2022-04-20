import {Text, View, Modal, TouchableOpacity, ScrollView} from 'react-native';
import React, {Component} from 'react';
import styles from './styles';
import {Divider} from '@rneui/themed';
import JIcon from '../JIcon';
import colors from '../../../assets/themes/colors';
export default class DrawerModal extends Component {
  render() {
    const DrawerList = [
      {
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
      {title: 'Profil', icon: null, onPress: () => {}},
      {title: 'Ayarlar', icon: null, onPress: () => {}},
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
                  <>
                    <TouchableOpacity style={styles.modalItem} key={item.title}>
                      <Text
                        style={{
                          color: colors.black,
                          fontFamily: 'Pasifico',
                        }}>
                        {item.title}
                      </Text>
                      {item.icon}
                    </TouchableOpacity>
                    <Divider style={styles.divider} color={colors.darkBlue} />
                  </>
                );
              })}
            </View>
          </TouchableOpacity>
        </>
      </Modal>
    );
  }
}

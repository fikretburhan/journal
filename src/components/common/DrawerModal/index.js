import {Text, View, Modal, TouchableOpacity, ScrollView} from 'react-native';
import React, {Component} from 'react';
import styles from './styles';
import {Divider} from '@rneui/themed';
import JIcon from '../JIcon';
import colors from '../../../assets/themes/colors';
export default class DrawerModal extends Component {
  render() {
    return (
      <Modal {...this.props} visible={this.props.modalVisible}>
        <>
          <TouchableOpacity
            onPress={this.props.setModalVisible}
            style={styles.wrapper}>
            <View style={styles.modalView}>
              <TouchableOpacity style={styles.modalItem}>
                <Text style={{color: colors.black, fontFamily: 'calibri'}}>
                  Fikret Burhan Yılmaz
                </Text>
                <JIcon
                  type="MaterialIcons"
                  name="logout"
                  size={20}
                  color={colors.black}
                />
              </TouchableOpacity>
              <Divider />
            </View>
          </TouchableOpacity>
        </>
      </Modal>
    );
  }
}

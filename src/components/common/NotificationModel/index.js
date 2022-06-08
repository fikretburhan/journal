import {Text, View, Modal, Pressable} from 'react-native';
import React, {Component} from 'react';
import styles from './styles';
import strings from '../../../../strings';

export default class NotificationModal extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    const {modalVisible, description, title} = this.props;
    return (
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            this.props.setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>{description}</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => this.props.setModalVisible(false)}>
                <Text style={styles.textStyle}>{strings.close}</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

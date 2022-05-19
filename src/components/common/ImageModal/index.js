import {Text, View, Modal, TouchableOpacity, Image} from 'react-native';
import React, {Component} from 'react';
import styles from './styles';

export default class ImageModal extends Component {
  render() {
    return (
      <Modal {...this.props} visible={this.props.visible}>
        <TouchableOpacity
          style={styles.wrapper}
          onPress={this.props.setModalVisible}>
          <Image source={this.props.imageSource} style={styles.image} />
        </TouchableOpacity>
      </Modal>
    );
  }
}

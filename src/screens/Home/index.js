import {Text, View, Button, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import HomeComponent from '../../components/HomeComponent';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
    };
  }
  setModalVisible = () => {
    this.setState(prevState => ({
      ...prevState,
      modalVisible: !prevState.modalVisible,
    }));
  };
  componentDidMount() {
    this.setModalVisibleEvent = this.props.navigation.addListener(
      'focus',
      () => {
        this.setState({modalVisible: false});
      },
    );
  }
  componentWillUnmount() {
    this.setModalVisibleEvent();
  }
  render() {
    return (
      <HomeComponent
        setModalVisible={this.setModalVisible}
        modalVisible={this.state.modalVisible}
      />
    );
  }
}

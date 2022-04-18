import {Text, View, Button} from 'react-native';
import React, {Component} from 'react';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      red: 0,
      green: 0,
      blue: 0,
    };
  }
  componentDidMount() {
    console.log(this.props.route);
  }
  increaseCount = () => {
    this.setState(prevState => ({
      ...prevState,
      count: prevState.count + 1,
      red: Math.floor(Math.random() * 255),
      blue: Math.floor(Math.random() * 255),
      green: Math.floor(Math.random() * 255),
    }));
  };
  decreaseCount = () => {
    if (this.state.count > 0) {
      this.setState(prevState => ({
        ...prevState,
        count: prevState.count - 1,
        red: Math.floor(Math.random() * 255),
        blue: Math.floor(Math.random() * 255),
        green: Math.floor(Math.random() * 255),
      }));
    }
  };
  resetCount = () => {
    this.setState({count: 0});
  };
  render() {
    return (
      <View>
        <Text
          style={{
            fontSize: 200,
            alignSelf: 'center',
            color: `rgb(${this.state.red},${this.state.blue},${this.state.green})`,
          }}>
          {this.state.count}
        </Text>
        <Button title="artır" onPress={this.increaseCount} />
        <View style={{height: 20}} />
        <Button title="azalt" onPress={this.decreaseCount} />
        <View style={{height: 20}} />
        <Button title="sıfırla" onPress={this.resetCount} />
      </View>
    );
  }
}

import {Text, View} from 'react-native';
import React, {Component} from 'react';
import JournalDetailComponent from '../../components/JournalDetailComponent';

export default class JournalDetail extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}
  render() {
    return <JournalDetailComponent {...this.props} />;
  }
}

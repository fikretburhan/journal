import {Text, View} from 'react-native';
import React, {Component} from 'react';
import JournalDetailComponent from '../../components/JournalDetailComponent';
class JournalDetail extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}
  render() {
    return <JournalDetailComponent {...this.props} />;
  }
}

export default JournalDetail;

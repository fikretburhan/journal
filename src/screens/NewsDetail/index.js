import {Text, View} from 'react-native';
import React, {Component} from 'react';
import NewsDetailComponent from '../../components/NewsDetailComponent';

export default class NewsDetail extends Component {
  render() {
    return <NewsDetailComponent {...this.props} />;
  }
}

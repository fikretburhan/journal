import {Text, View} from 'react-native';
import React, {Component} from 'react';
import ArtcileDetailComponent from '../../components/ArticleDetailComponent';

export default class ArticleDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <ArtcileDetailComponent {...this.props} />;
  }
}

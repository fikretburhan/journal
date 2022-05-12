import {Image, Text, View} from 'react-native';
import React, {Component} from 'react';
import Pdf from 'react-native-pdf';
import styles from './styles';
//import {dergi13} from '../../dummyData/journalBase64';
export default class JournalDetailComponent extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}
  render() {
    const {fileName} = this.props.route.params.journal;
    const source = {
      uri: `bundle-assets://path/to/${fileName}.pdf`,
      cache: true,
    };
    // const source2 = {
    //   uri: `data:application/pdf;base64,${dergi13}`,
    //   cache: true,
    // };
    return (
      <View style={styles.container}>
        <Pdf
          ref={pdf => {
            this.pdf = pdf;
          }}
          style={styles.pdf}
          source={source}
        />
      </View>
    );
  }
}

import {Text, View, ScrollView, Image, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import styles from './styles';
import JIcon from '../common/JIcon';
import colors from '../../assets/themes/colors';
import moment from 'moment';
export default class ArtcileDetailComponent extends Component {
  componentDidMount() {}
  render() {
    const {
      article: {title, detail, date},
      imgSource,
    } = this.props.route.params;
    return (
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <JIcon
              type="Ionicons"
              name="chevron-back-sharp"
              size={30}
              color={colors.darkBlue}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.titleContainer}>
          <Image source={imgSource} style={styles.image} />
          <View style={styles.titleView}>
            <Text style={styles.titleText}>{title}</Text>
            <Text style={{fontSize: 10, alignSelf: 'center'}}>
              {moment(date).format('DD.MM.yy')}
            </Text>
          </View>
        </View>
        <View style={styles.articleView}>
          <Text style={styles.articleText}>{detail}</Text>
        </View>
      </ScrollView>
    );
  }
}

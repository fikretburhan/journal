import {ScrollView, Text, View, TouchableOpacity, Image} from 'react-native';
import React, {Component} from 'react';
import JIcon from '../common/JIcon';
import moment from 'moment';
import colors from '../../assets/themes/colors';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import ImageModal from '../common/ImageModal';
export default class NewsDetailComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
    };
  }

  setModalVisible = () => {
    this.setState(prevState => ({
      ...prevState,
      modalVisible: !this.state.modalVisible,
    }));
  };
  render() {
    const {
      news: {title, detail, date},
      imgSource,
    } = this.props.route.params;
    return (
      <>
        <LinearGradient colors={['#FFFFFF', '#E8ECF7']} style={{flex: 1}}>
          <ScrollView style={{borderColor: 'black', borderWidth: 0}}>
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
              <TouchableOpacity onPress={this.setModalVisible}>
                <Image source={imgSource} style={styles.image} />
                <View style={{position: 'absolute', right: 10, top: 10}}>
                  <JIcon
                    name="eye"
                    type="Ionicons"
                    size={30}
                    color={colors.danger}
                  />
                </View>
              </TouchableOpacity>
              <View style={styles.titleView}>
                <Text style={styles.titleText}>{title}</Text>
                <Text style={styles.date}>
                  {moment(date).format('DD.MM.yy')}
                </Text>
              </View>
            </View>
            <View style={styles.newsView}>
              <Text style={styles.newsText}>{detail}</Text>
            </View>
          </ScrollView>
        </LinearGradient>
        <ImageModal
          animationType="fade"
          transparent={true}
          imageSource={imgSource}
          visible={this.state.modalVisible}
          setModalVisible={this.setModalVisible}
        />
      </>
    );
  }
}

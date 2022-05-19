import {FlatList, Text, View, TouchableOpacity, Image} from 'react-native';
import React, {Component} from 'react';
import data from '../../dummyData/latestNews';
import styles from './styles';
import moment from 'moment';
import {navigate} from '../../navigations/RootNavigator';
import JIcon from '../common/JIcon';
import colors from '../../assets/themes/colors';

export default class LatestNewsComponent extends Component {
  getImageSource = name => {
    switch (name) {
      case 'mayfest':
        return require('../../assets/images/newsImages/mayfest.jpg');
      case 'gradsummit':
        return require('../../assets/images/newsImages/gradsummit.jpg');
      case 'award':
        return require('../../assets/images/newsImages/award.jpg');
      case 'award2':
        return require('../../assets/images/newsImages/award2.jpg');
      case 'project_competition':
        return require('../../assets/images/newsImages/project_competition.jpg');
    }
  };
  render() {
    return (
      <View>
        <View style={styles.titleView}>
          <Text style={styles.listTitle}>Güncel Haberler</Text>
          <View style={{marginRight: 10}}>
            <JIcon
              type="MaterialIcons"
              name="code"
              size={20}
              color={colors.gray}
            />
          </View>
        </View>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={data}
          keyExtractor={k => k.id}
          renderItem={({item}) => {
            const imgSource = this.getImageSource(item.image);
            return (
              <TouchableOpacity
                style={styles.singleItem}
                onPress={() =>
                  navigate('NewsDetail', {
                    news: item,
                    imgSource: imgSource,
                  })
                }>
                <Text style={styles.itemTitle}>{item.title}</Text>
                <View style={styles.imageBox}>
                  {item.image ? (
                    <Image source={imgSource} style={styles.image} />
                  ) : (
                    <View style={styles.image} />
                  )}
                </View>

                <Text style={styles.shortDesc}>
                  {item.shortDesc.length > 50
                    ? `${item.shortDesc.slice(0, 50)}...`
                    : item.shortDesc}
                </Text>
                <View style={styles.dateBox}>
                  <Text style={styles.date}>
                    {moment(item.date).format('DD-MM-yyyy')}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    );
  }
}

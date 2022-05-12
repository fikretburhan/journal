import {FlatList, Text, View, TouchableOpacity, Image} from 'react-native';
import React, {Component} from 'react';
import data from '../../dummyData/latestNews';
import styles from './styles';
import moment from 'moment';

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
        <Text style={styles.listTitle}>Güncel Haberler</Text>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={data}
          keyExtractor={k => k.id}
          renderItem={({item}) => {
            const imgSource = this.getImageSource(item.image);
            return (
              <TouchableOpacity style={styles.singleItem}>
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

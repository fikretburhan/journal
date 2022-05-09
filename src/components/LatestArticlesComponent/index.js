import {FlatList, Text, View, TouchableOpacity, Image} from 'react-native';
import React, {Component} from 'react';
import data from '../../dummyData/latestArticles';
import styles from './styles';
import moment from 'moment';

export default class LatestArticlesComponent extends Component {
  getImageSource = name => {
    switch (name) {
      case 'ai':
        return require('../../assets/images/articleImages/ai.png');
      case 'electriccar':
        return require('../../assets/images/articleImages/electriccar.png');
      case 'hyperloop':
        return require('../../assets/images/articleImages/hyperloop.png');
      case 'coronavirus':
        return require('../../assets/images/articleImages/coronavirus.png');
    }
  };
  render() {
    return (
      <View>
        <Text style={styles.listTitle}>Güncel Makaleler</Text>
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
                  {item.shortDesc.length > 70
                    ? `${item.shortDesc.slice(0, 70)}...`
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

import {Text, View, TouchableOpacity, Image, FlatList} from 'react-native';
import React, {Component} from 'react';
import styles from './styles';
import data from '../../dummyData/journalList';
import {navigate} from '../../navigations/RootNavigator';
export default class JournalList extends Component {
  getImageSource = name => {
    switch (name) {
      case 'kapak13':
        return require('../../assets/images/journalImages/kapak13.jpg');
      case 'kapak14':
        return require('../../assets/images/journalImages/kapak14.jpg');
      case 'kapak31':
        return require('../../assets/images/journalImages/kapak31.jpg');
      case 'kapak32':
        return require('../../assets/images/journalImages/kapak32.jpg');
      case 'kapak36':
        return require('../../assets/images/journalImages/kapak36.jpg');
    }
  };
  render() {
    return (
      <View>
        <FlatList
          keyExtractor={data => data.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={data}
          renderItem={({item}) => {
            const imageSource = this.getImageSource(item.imageSource);
            return (
              <TouchableOpacity
                style={styles.singleImageBox}
                onPress={() =>
                  navigate('JournalDetail', {name: item.name, journal: item})
                }>
                <Image style={styles.journalImage} source={imageSource} />
              </TouchableOpacity>
            );
          }}
        />
      </View>
    );
  }
}

import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import React, {Component} from 'react';
import countryList from '../../../constants/countryList';
import styles from './styles';

export default class CountrySelect extends Component {
  render() {
    countryList.sort((a, b) => (a > b ? 1 : -1));
    return (
      <ScrollView>
        {countryList.map(country => {
          return (
            <View key={country}>
              <TouchableOpacity
                onPress={() => this.props.onCountrySelect(country)}
                style={styles.container}>
                <Text style={styles.itemText}>{country}</Text>
              </TouchableOpacity>
              <View style={styles.divider} />
            </View>
          );
        })}
      </ScrollView>
    );
  }
}

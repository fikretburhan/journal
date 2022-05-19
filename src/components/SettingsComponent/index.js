import {ScrollView, Text, View, Switch} from 'react-native';
import React, {Component} from 'react';
import styles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import colors from '../../assets/themes/colors';

export default class SettingsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      AutoDownload: true,
      DownloadWithMobileData: false,
      RememberEmptySpace: true,
      GetNotificationPermission: true,
    };
  }
  toggleSwitch = async stateType => {
    await AsyncStorage.setItem(
      stateType,
      JSON.stringify(!this.state[stateType]),
    );
    this.setState(prevState => ({
      ...prevState,
      [stateType]: !prevState[stateType],
    }));
  };
  async componentDidMount() {
    try {
      await AsyncStorage.getItem('AutoDownload').then(value => {
        this.setState({AutoDownload: JSON.parse(value)});
      });
      await AsyncStorage.getItem('DownloadWithMobileData').then(value => {
        this.setState({DownloadWithMobileData: JSON.parse(value)});
      });
      await AsyncStorage.getItem('RememberEmptySpace').then(value => {
        this.setState({RememberEmptySpace: JSON.parse(value)});
      });
      await AsyncStorage.getItem('GetNotificationPermission').then(value => {
        this.setState({GetNotificationPermission: JSON.parse(value)});
      });
    } catch (err) {
      console.log(err);
    }
  }
  render() {
    const {settingsOptions} = this.props;
    return (
      <ScrollView style={styles.settingsContainer}>
        {settingsOptions.map(setting => {
          return (
            <View key={setting.id}>
              <View style={styles.settingItemView}>
                <Text style={styles.settingText}>{setting.title}</Text>
                <Switch
                  trackColor={{false: colors.danger, true: '#81b0ff'}}
                  thumbColor={colors.white}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={() => this.toggleSwitch(setting.name)}
                  value={this.state[setting.name]}
                  style={{transform: [{scaleX: 1.2}, {scaleY: 1.2}]}}
                />
              </View>
              <View
                style={{
                  height: 0.5,
                  backgroundColor: colors.gray,
                  marginHorizontal: 10,
                }}
              />
            </View>
          );
        })}
      </ScrollView>
    );
  }
}

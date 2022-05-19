import {Text, View} from 'react-native';
import React, {Component} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SettingsComponent from '../../components/SettingsComponent';
export default class Settings extends Component {
  settingsOptions = [
    {
      id: 1,
      name: 'AutoDownload',
      title: 'Otomatik indirme',
      onPress: () => {},
    },
    {
      id: 2,
      name: 'DownloadWithMobileData',
      title: 'Mobil Data ile indir',
      onPress: () => {},
    },
    {
      id: 3,
      name: 'RememberEmptySpace',
      title: 'Cihazda yer açmayı hatırlat',
      onPress: () => {},
    },
    {
      id: 4,
      name: 'GetNotificationPermission',
      title: 'Bildirim almaya izin ver',
      onPress: () => {},
    },
  ];
  render() {
    return (
      <SettingsComponent
        {...this.props}
        settingsOptions={this.settingsOptions}
      />
    );
  }
}

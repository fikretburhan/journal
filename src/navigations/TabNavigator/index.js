import React, {useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../../screens/Home';
import Settings from '../../screens/Settings';
import Subscriptions from '../../screens/Subscriptions';
import {navigate} from '../RootNavigator';
import styles from './styles';
import JIcon from '../../components/JIcon';
import colors from '../../assets/themes/colors';
export default function TabNavigator() {
  const [tabIndex, setTabIndex] = useState(0);
  const Tab = createBottomTabNavigator();
  const TabItems = [
    {
      index: 0,
      name: 'Home',
      title: 'Ana Sayfa',
      onPress: e => {
        setTabIndex(e);
        navigate('Home');
      },
      icon: (
        <JIcon
          type="Ionicons"
          name="home"
          size={20}
          color={tabIndex == 0 ? colors.darkBlue : colors.lightBlue}
        />
      ),
    },
    {
      index: 1,
      name: 'Subscriptions',
      title: 'Abonelikler',
      onPress: e => {
        setTabIndex(e);
        navigate('Subscriptions');
      },
      icon: (
        <JIcon
          type="Ionicons"
          name="newspaper"
          size={20}
          color={tabIndex == 1 ? colors.darkBlue : colors.lightBlue}
        />
      ),
    },
    {
      index: 2,
      name: 'Settings',
      title: 'Ayarlar',
      onPress: e => {
        setTabIndex(e);
        navigate('Settings');
      },
      icon: (
        <JIcon
          type="Ionicons"
          name="settings"
          size={20}
          color={tabIndex == 2 ? colors.darkBlue : colors.lightBlue}
        />
      ),
    },
  ];
  const TabMenu = () => {
    return (
      <View style={styles.tabWrapper}>
        {TabItems.map((item, index) => {
          return (
            <TouchableOpacity
              onPress={() => item.onPress(index)}
              style={styles.tabItem}
              key={index}>
              {item.icon}
              <Text
                style={
                  ({...styles.tabItemText},
                  {
                    color:
                      tabIndex == index ? colors.darkBlue : colors.lightBlue,
                  })
                }>
                {item.title}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };
  return (
    <Tab.Navigator tabBar={props => <TabMenu {...props} />}>
      <Tab.Screen name="Home" component={Home} options={{headerShown: false}} />
      <Tab.Screen
        name="Subscriptions"
        component={Subscriptions}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
}

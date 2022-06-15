import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createStackNavigator} from '@react-navigation/stack';
import {View, Text, TouchableOpacity} from 'react-native';
import JournalDetail from '../../screens/JournalDetail';
import Subscriptions from '../../screens/Subscriptions';
import ArticleDetail from '../../screens/ArticleDetail';
import NewsDetail from '../../screens/NewsDetail';
import Settings from '../../screens/Settings';
import Profile from '../../screens/Profile';
import Home from '../../screens/Home';
import colors from '../../assets/themes/colors';
import JIcon from '../../components/common/JIcon';
import {navigate} from '../RootNavigator';
import TabNavigator from '../TabNavigator';

export default function HomeNavigator({navigation, route}) {
  const HomeStack = createNativeStackNavigator();
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Tab"
        component={TabNavigator}
        options={{headerBackTitleVisible: false, headerShown: false}}
      />
      <HomeStack.Screen
        name="JournalDetail"
        component={JournalDetail}
        options={({route, navigation}) => ({
          title: route.params.name,
          headerStyle: {backgroundColor: colors.darkBlue},
          headerTitleStyle: {color: colors.white},
          headerTitleAlign: 'center',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <JIcon
                type="Ionicons"
                name="chevron-back-sharp"
                size={30}
                color={colors.white}
                style={{marginRight: 40}}
              />
            </TouchableOpacity>
          ),
        })}
      />
      <HomeStack.Screen
        name="ArticleDetail"
        component={ArticleDetail}
        options={{headerBackTitleVisible: false, headerShown: false}}
      />
      <HomeStack.Screen
        name="NewsDetail"
        component={NewsDetail}
        options={{headerBackTitleVisible: false, headerShown: false}}
      />
      <HomeStack.Screen
        name="Settings"
        component={Settings}
        options={({navigation}) => ({
          title: 'Ayarlar',
          headerStyle: {backgroundColor: colors.darkBlue},
          headerTitleStyle: {color: colors.white},
          headerTitleAlign: 'center',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <JIcon
                type="Ionicons"
                name="chevron-back-sharp"
                size={30}
                color={colors.white}
                style={{marginRight: 40}}
              />
            </TouchableOpacity>
          ),
        })}
      />
      <HomeStack.Screen
        name="Profile"
        component={Profile}
        options={({navigation}) => ({
          title: 'Profil',
          headerStyle: {backgroundColor: colors.darkBlue},
          headerTitleStyle: {color: colors.white},
          headerTitleAlign: 'center',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <JIcon
                type="Ionicons"
                name="chevron-back-sharp"
                size={30}
                color={colors.white}
                style={{marginRight: 40}}
              />
            </TouchableOpacity>
          ),
        })}
      />
    </HomeStack.Navigator>
  );
}

import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View, Text, TouchableOpacity} from 'react-native';
import JournalDetail from '../../screens/JournalDetail';
import Home from '../../screens/Home';
import colors from '../../assets/themes/colors';
import JIcon from '../../components/common/JIcon';
import {navigate} from '../RootNavigator';
export default function HomeNavigator({navigation}) {
  const HomeStack = createNativeStackNavigator();
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{headerBackTitleVisible: false, headerShown: false}}
      />
      <HomeStack.Screen
        name="JournalDetail"
        component={JournalDetail}
        options={({route}) => ({
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
    </HomeStack.Navigator>
  );
}

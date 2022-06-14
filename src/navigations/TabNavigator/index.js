import React, {useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Settings from '../../screens/Settings';
import Subscriptions from '../../screens/Subscriptions';
import Archive from '../../screens/Archive';
import {navigate} from '../RootNavigator';
import styles from './styles';
import JIcon from '../../components/common/JIcon';
import colors from '../../assets/themes/colors';
import Profile from '../../screens/Profile';
import Home from '../../screens/Home';
import ArticleDetail from '../../screens/ArticleDetail';
import NewsDetail from '../../screens/NewsDetail';
export default function TabNavigator() {
  const [tabIndex, setTabIndex] = useState(0);
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          let iconColor;
          let archiveIconColor;
          if (route.name === 'Home') {
            iconName = 'home';
            iconColor = focused ? colors.darkBlue : colors.lightBlue;
          } else if (route.name === 'Archive') {
            iconName = 'archive';
            iconColor = focused ? colors.darkBlue : colors.lightBlue;
          }
          return (
            <JIcon
              type="Ionicons"
              name={iconName}
              size={25}
              color={iconColor}
            />
          );
        },
        tabBarActiveTintColor: colors.darkBlue,
        tabBarInactiveTintColor: colors.lightBlue,
        headerShown: false,
        tabBarStyle: {borderRadius: 30},
        tabBarLabelStyle: {fontSize: 12},
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Archive" component={Archive} />
    </Tab.Navigator>
  );
}
//   const TabItems = [
//     {
//       index: 0,
//       name: 'Home',
//       title: 'Ana Sayfa',
//       onPress: e => {
//         setTabIndex(e);
//         navigate('Home');
//       },
//       icon: (
//         <JIcon
//           type="Ionicons"
//           name="home"
//           size={20}
//           color={tabIndex == 0 ? colors.darkBlue : colors.lightBlue}
//         />
//       ),
//     },
//     {
//       index: 1,
//       name: 'Archive',
//       title: 'Arşivim',
//       onPress: e => {
//         setTabIndex(e);
//         navigate('Archive');
//       },
//       icon: (
//         <JIcon
//           type="Ionicons"
//           name="archive"
//           size={20}
//           color={tabIndex == 1 ? colors.darkBlue : colors.lightBlue}
//         />
//       ),
//     },
//   ];
//   const TabMenu = () => {
//     return (
//       <View style={styles.tabWrapper}>
//         {TabItems.map((item, index) => {
//           return (
//             <TouchableOpacity
//               onPress={() => item.onPress(index)}
//               style={styles.tabItem}
//               key={index}>
//               {item.icon}
//               <Text
//                 style={
//                   ({...styles.tabItemText},
//                   {
//                     color:
//                       tabIndex == index ? colors.darkBlue : colors.lightBlue,
//                   })
//                 }>
//                 {item.title}
//               </Text>
//             </TouchableOpacity>
//           );
//         })}
//       </View>
//     );
//   };
//   return (
//     <Tab.Navigator tabBar={props => <TabMenu {...props} />}>
//       <Tab.Screen name="Home" component={Home} options={{headerShown: false}} />
//       <Tab.Screen
//         name="Archive"
//         component={Archive}
//         options={{headerShown: false}}
//       />
//     </Tab.Navigator>
//   );
// }

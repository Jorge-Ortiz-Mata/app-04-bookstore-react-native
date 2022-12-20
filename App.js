import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// ---- Screens -----
import Welcome from './src/screens/Welcome';
import Books from './src/screens/Books';
import CreateBookScreen from './src/screens/CreateBookScreen';
import BookScreen from './src/screens/BookScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import FavoriteScreen from './src/screens/FavoriteScreen';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function TabNavigation(){
  return(
    <Tab.Navigator initialRouteName="Books"
      screenOptions={
        {
          "tabBarContentContainerStyle": {
            "alignItems": 'center',
            "justifyContent": 'center',
          },
          "headerShown": false,
          "tabBarActiveTintColor": "#fff",
          "tabBarLabelStyle": {
            "fontSize": 14,
            "fontWeight": "bold",
            "marginBottom": 5
          },
          "tabBarItemStyle": {
            "backgroundColor": "#2C3639"
          },
          "tabBarStyle": [
            {
              "display": "flex",
              "justifyContent": "center",
              "alignItems": "center",
              "borderWidth": 3,
              "height": 70
            },
            null
          ]
        }
      }
    >
      <Tab.Screen name="Books" component={Books} options={{tabBarIcon: ({color, size}) => (
         <MaterialCommunityIcons name="bookshelf" size={size} color={color} />
      )}} />
      <Tab.Screen name="CreateBookScreen" component={CreateBookScreen} options={{tabBarIcon: ({color, size}) => (
        <Entypo name="plus" size={size} color={color} />
      )}}
      />
    </Tab.Navigator>
  )
}

function DrawerNavigation(){
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: true,
        drawerStyle:{backgroundColor: '#2C3639'},
        headerStyle: {backgroundColor: '#2C3639'},
        headerTintColor: '#FFFF',
        headerTitleStyle: {fontWeight: 'bold'},
        drawerActiveTintColor: '#2C3639',
        drawerActiveBackgroundColor: '#F2DEBA',
        drawerInactiveTintColor: '#F2DEBA',
        drawerPosition: 'left',
        drawerType: 'front'
    }}>
      <Drawer.Screen name="Tab" component={TabNavigation} options={{title: 'Bookstore'}} />
      <Drawer.Screen name="FavoriteScreen" component={FavoriteScreen} />
      <Drawer.Screen name="ProfileScreen" component={ProfileScreen} options={{title: 'My profile'}} />
    </Drawer.Navigator>
  )
}

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Welcome'>
        <Stack.Screen name="Welcome" component={Welcome} screenOptions={{headerStyle:  styles.header}} />
        <Stack.Screen name="Drawer" component={DrawerNavigation} options={{headerShown: false}} />
        <Stack.Screen name="BookScreen" component={BookScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#2C3639',
  }
})

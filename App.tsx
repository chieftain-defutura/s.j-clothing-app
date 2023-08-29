import React from 'react'
import { Dimensions } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Post from './src/pages/BottomTabNavigationBar/Post'
import MidLevel from './src/pages/BottomTabNavigationBar/MidLevel'
import Premium from './src/pages/BottomTabNavigationBar/Premium'
import Account from './src/pages/BottomTabNavigationBar/Account'
import HomeIcon from './src/assets/icons/HomeIcon'
import AccountIcon from './src/assets/icons/AccountIcon'
import PremiumIcon from './src/assets/icons/PremiumIcon'
import MidLevelIcon from './src/assets/icons/MidLevelIcon'
import { COLORS } from './src/styles/theme'
import { Text, View, StyleSheet, Image } from 'react-native'
import BottomBar from './src/assets/icons/BottomBar'

const Stack = createNativeStackNavigator()

const Tab = createBottomTabNavigator()

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarIconStyle: { backgroundColor: 'white', alignContent: 'center' },
        tabBarBackground: () => (
          <View
            style={{
              position: 'absolute',
              bottom: -20,
              left: -80,
            }}
          >
            <BottomBar width={windowWidth} height={90} />
          </View>
        ),
        tabBarStyle: {
          backgroundColor: 'orange',
          display: 'flex',
          justifyContent: 'space-between',
        },
      }}
      initialRouteName='Home'
    >
      <Tab.Screen
        name='Post'
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ focused, color }) =>
            focused ? (
              <View style={{ backgroundColor: 'white', borderRadius: 50 }}>
                <HomeIcon color={color} width={40} height={40} />
              </View>
            ) : (
              <HomeIcon color={color} width={40} height={40} />
            ),
        }}
        component={Post}
      />
      <Tab.Screen
        name='MidLevel'
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ focused, color }) =>
            focused ? (
              <View style={{ backgroundColor: 'white', borderRadius: 50 }}>
                <MidLevelIcon color={color} width={40} height={40} />
              </View>
            ) : (
              <MidLevelIcon color={color} width={40} height={40} />
            ),
        }}
        component={MidLevel}
      />
      <Tab.Screen
        name='Premium'
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ focused, color }) =>
            focused ? (
              <View style={{ backgroundColor: 'white', borderRadius: 50 }}>
                <PremiumIcon color={color} width={40} height={40} />
              </View>
            ) : (
              <PremiumIcon color={color} width={40} height={40} />
            ),
        }}
        component={Premium}
      />
      <Tab.Screen
        name='Account'
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ focused, color }) =>
            focused ? (
              <View style={{ backgroundColor: 'white', borderRadius: 50 }}>
                <AccountIcon color={color} width={40} height={40} />
              </View>
            ) : (
              <AccountIcon color={color} width={40} height={40} />
            ),
        }}
        component={Account}
      />
    </Tab.Navigator>
  )
}

function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Stack' options={{ headerShown: true }} component={TabNavigator} />
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  tabstyle: {},
})

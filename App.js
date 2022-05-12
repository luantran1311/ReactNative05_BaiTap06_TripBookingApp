import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'

import { DestinationDetail, Onboarding } from './screens/'
import Tabs from './navigation/tabs'
import { COLORS, icons, SIZES } from './constants'

const theme = {
  ...DefaultTheme,
  color: {
    ...DefaultTheme.colors,
    border: 'transparent'
  }
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator initialRouteName={'Onboarding'} >
        <Stack.Screen name="Onboarding" component={Onboarding} options={{title: null,
        headerStyle: {
          backgroundColor: COLORS.white
        },
        headerLeft: null,
        headerRight: () => (
          <TouchableOpacity style={{marginRight: SIZES.padding}} onPress={() => console.log('Pressed')}>
            <Image source={icons.barMenu} resizeMode='contain' style={{
              width: 25,
              height: 25
            }} />
          </TouchableOpacity>
        )
        }} />

        <Stack.Screen name="DestinationDetail" component={DestinationDetail} options={{headerShown: false}} 
        />

        <Stack.Screen name="Home" component={Tabs}
        options={{title: null, headerStyle: {
          backgroundColor: COLORS.white
        }, 
        headerLeft: ({onPress}) => (
          <TouchableOpacity style={{marginLeft: SIZES.padding}}
            onPress={onPress}
          >
            <Image source={icons.back} resizeMode='contain' style={{width: 25, height: 25}} />
          </TouchableOpacity>
        ),
        headerRight: () => (
          <TouchableOpacity style={{marginRight: SIZES.padding}} onPress={() => console.log("Menu")}>
            <Image source={icons.menu} resizeMode='contain' style={{width: 25, height: 25}} />
          </TouchableOpacity>
        )
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
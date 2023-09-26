import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Menu from './screens/Menu'
import Order from './screens/Order'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Dapur from './screens/Dapur'
import Kasir from './screens/Kasir'
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons'; 

export type RootStack = {
  Menu: undefined,
  Order: undefined,
  Dapur: undefined,
  Kasir: undefined
}

const Stack = createBottomTabNavigator<RootStack>()

const RootNavigator = () => {
  return (
    <NavigationContainer independent={true} >
      <Stack.Navigator  initialRouteName="Menu"
        screenOptions={{ headerShown: false, tabBarActiveTintColor:'blue', tabBarInactiveTintColor:'grey' }} >
        <Stack.Screen  options={{
          tabBarIcon: ({color, size}) => ( <AntDesign name='home' color={color} size={20} />)
        }} name='Menu' component={Menu}/>
        <Stack.Screen options={{
          tabBarIcon: ({color, size}) => ( <AntDesign name='book' color={color} size={20} />)
        }} name='Order' component={Order}/>
        <Stack.Screen options={{
          tabBarIcon: ({color, size}) => ( <MaterialIcons name='kitchen' color={color} size={20} />)
        }} name='Dapur' component={Dapur}/>
        <Stack.Screen options={{
          tabBarIcon: ({color, size}) => ( <FontAwesome5 name='cash-register' color={color} size={20} />)
        }} name='Kasir' component={Kasir}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RootNavigator
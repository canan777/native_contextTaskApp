import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import UserListScreen from '../screens/UserListScreen'
import UserDetailsScreen from '../screens/UserDetailsScreen'
import TaskScreen from '../screens/TaskScreen'


const Stack = createStackNavigator ()

export default function Routes() {
  return (
    <Stack.Navigator>
        <Stack.Screen name='UserList' component={UserListScreen}/>
        <Stack.Screen name='UserDetails' component={UserDetailsScreen}/>
        <Stack.Screen name='Tasks' component={TaskScreen}/>
      </Stack.Navigator>
  )
}
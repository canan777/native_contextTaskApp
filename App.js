import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Routes from './src/navigation/Routes'
import { UserProvider } from './src/context/UserContext'
import { TaskProvider } from './src/context/TaskContext'


export default function App() {
  return (
  <UserProvider>
    <TaskProvider>
    <NavigationContainer>
      <Routes/>
    </NavigationContainer>
    </TaskProvider>
  </UserProvider>
  )
}
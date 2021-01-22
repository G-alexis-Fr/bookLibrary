import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from '../screens/HomeScreen'
import AboutScreen from '../screens/AboutScreen'
import DashboardScreen from '../screens/DashboardScreen'

const Drawer = createDrawerNavigator()

const DrawerNav = ({ route, books, setBooks, onDelete }) => {
  // const { books, setBooks, onDelete } = route?.params
  return (
    <Drawer.Navigator initialRouteName='Home'>
      {/* <Drawer.Screen
        name='Home'
        component={HomeScreen}
        initialParams={{ books, setBooks, onDelete }}
      /> */}
      <Drawer.Screen name='Home'>
        {(props) => (
          <HomeScreen
            {...props}
            books={books}
            setBooks={setBooks}
            onDelete={onDelete}
          />
        )}
      </Drawer.Screen>
      <Drawer.Screen name='About' component={AboutScreen} />
      <Drawer.Screen name='Dashboard'>
        {(props) => <DashboardScreen {...props} books={books} />}
      </Drawer.Screen>
    </Drawer.Navigator>
  )
}

export default DrawerNav

import React, { useState, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import DrawerNav from './DrawerNav'
import DetailsScreen from '../screens/DetailsScreen'
import API from '../API/API'
import axios from 'axios'

//1. Create context (creatContext())
//2. Create a provider component, pass values to children
//3. Wrap root component inside Context Provider Component

const Stack = createStackNavigator()

const MainStack = () => {
  useEffect(() => {
    API().then((res) => {
      setBooks(res.data.slice(0, 50))
    })
  }, [])

  const BookList = [
    // { id: 1, title: 'book 1', description: 'descript 1', author: 'author 1' },
    // { id: 2, title: 'book 2', description: 'descript 2', author: 'author 2' },
    // { id: 3, title: 'book 3', description: 'descript 3', author: 'author 3' },
    // { id: 4, title: 'book 4', description: 'descript 4', author: 'author 4' },
  ]

  const [books, setBooks] = useState(BookList)
  const onDelete = (isbn) => {
    setBooks(books.filter((book) => book.isbn !== isbn))
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name='Home'
          component={DrawerNav}
          options={{ headerShown: false }}
          initialParams={{ books, setBooks }}
        /> */}

        <Stack.Screen name='Home'>
          {(props) => (
            <DrawerNav
              {...props}
              books={books}
              setBooks={setBooks}
              onDelete={onDelete}
            />
          )}
        </Stack.Screen>

        <Stack.Screen name='Details' component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainStack

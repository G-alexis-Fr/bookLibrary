import { StatusBar } from 'expo-status-bar'
// import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import BookProvider from './context/BookContext'
import MainStack from './navigations/MainStack'
import React, { creatContext, useState } from 'react'

export const BookContext = createContext()

export default function App() {
  const [book, setBook] = useState({ name: 'One book', isbn: '32453' })

  return (
    <BookContext.Provider value={book}>
      <MainStack />
    </BookContext.Provider>
  )
}

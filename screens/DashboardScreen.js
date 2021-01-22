import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const DashBoardScreen = ({ books, route }) => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30 }}>DashBoard Information</Text>

      <View style={styles.book}>
        <Text style={{ fontSize: 15 }}>
          There is {books.length} book(s) in your library
        </Text>
      </View>
    </View>
  )
}

export default DashBoardScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 40,
  },
  book: {
    marginTop: 20,
  },
})

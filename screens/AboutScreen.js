import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Library V1</Text>
      <Text>Welcome to the library apps</Text>
      <Text>Copyright Alexis</Text>
    </View>
  )
}

export default AboutScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

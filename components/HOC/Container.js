import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Container = ({ children }) => {
  const testPress = () => console.log('testing working')

  return <View style={styles.container}>{children({ testPress })}</View>
}

export default Container

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'coral',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'black',
  },
})

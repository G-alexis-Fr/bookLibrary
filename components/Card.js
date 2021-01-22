import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Container from './HOC/Container'

const Card = ({ item, onPress, onDelete, icon }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.titleContainer}>
        {icon && (
          <AntDesign style={styles.icon} name='book' size={24} color='black' />
        )}

        <Text style={styles.title} onPress={onPress} numberOfLines={3}>
          {item.title}
        </Text>
      </TouchableOpacity>

      <AntDesign
        style={styles.iconTrash}
        name='delete'
        size={24}
        color='black'
        onPress={onDelete}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#95a5a6',
    justifyContent: 'space-between',
    borderRadius: 5,
    padding: 10,
    margin: 10,
  },
  icon: {
    marginRight: 10,
  },
  titleContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 16,
    width: 200,
  },
  iconTrash: {
    textAlign: 'right',
  },
})

export default Card

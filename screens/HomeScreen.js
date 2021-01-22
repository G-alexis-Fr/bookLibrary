import React, { useState, useContext } from 'react'
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Modal,
  Button,
  TouchableOpacity,
  StatusBar,
} from 'react-native'
import Card from '../components/Card'
import { Ionicons } from '@expo/vector-icons'
import AddBookForm from '../components/AddBookForm'
import { BookContext } from '../context/BookContext'

const HomeScreen = ({ navigation, route, books, setBooks, onDelete }) => {
  const [modalVisible, setModalVisible] = useState(false)

  const ToggleModal = () => {
    setModalVisible(!modalVisible)
  }

  return (
    <View style={styles.container}>
      <StatusBar hidden={modalVisible} />
      <Modal animationType='fade' transparent={false} visible={modalVisible}>
        <TouchableOpacity
          style={{
            width: 30,
            borderRadius: 5,
            margin: 10,
            position: 'absolute',
            right: 5,
            top: 5,
          }}
          onPress={() => setModalVisible(!modalVisible)}
        >
          <Text style={styles.button}>X</Text>
        </TouchableOpacity>
        <View>
          <AddBookForm
            books={books}
            setBooks={setBooks}
            ToggleModal={ToggleModal}
          />
        </View>
      </Modal>

      <Ionicons
        style={styles.icon}
        name='add-circle-outline'
        size={55}
        color='black'
        onPress={() => setModalVisible(!modalVisible)}
      />

      <FlatList
        data={books}
        renderItem={({ item }) => (
          <Card
            item={item}
            onPress={() => navigation.navigate('Details', { item })}
            onDelete={() => onDelete(item.isbn)}
            icon={true}
          />
        )}
        keyExtractor={(item) => item.isbn}
      />
    </View>
  )
}
export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  icon: {
    textAlign: 'center',
  },
  button: {
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
  },
})

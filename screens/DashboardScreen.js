import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BookContext } from '../context/BookContext';

const DashBoardScreen = ({ books, route }) => {
  const { book } = useContext(BookContext);
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30 }}>DashBoard Information</Text>
      <Text>The book name is {book.name}</Text>
      <View style={styles.book}>
        <Text style={{ fontSize: 15 }}>
          There is {books.length} book(s) in your library
        </Text>
      </View>
    </View>
  );
};

export default DashBoardScreen;

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
});

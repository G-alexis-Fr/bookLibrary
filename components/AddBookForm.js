import React from 'react'
import {
  StyleSheet,
  Button,
  TextInput,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native'
import { Formik } from 'formik'
import * as yup from 'yup'

let Schema = yup.object().shape({
  title: yup.string().required('Title is Required'),
  shortDescription: yup.string().required('Description is Required'),
  authors: yup.string().min(2).required('author is required'),
})

const AddBookForm = ({ books, setBooks, ToggleModal }) => (
  <Formik
    validationSchema={Schema}
    initialValues={{ title: '', shortDescription: '', authors: '' }}
    onSubmit={(values) => {
      values.isbn = Math.floor(Math.random() * 10000)
      setBooks([values, ...books])
      ToggleModal()
    }}
  >
    {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
      <ScrollView style={styles.container}>
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            // alignItems: 'center',
            paddingLeft: 60,
          }}
        >
          <TextInput
            style={styles.input}
            multiline
            name='title'
            placeholder='Title Here'
            onChangeText={handleChange('title')}
            onBlur={handleBlur('title')}
            value={values.title}
          />
          {errors.title && (
            <Text style={styles.errorMessage}>{errors.title}</Text>
          )}
          <TextInput
            style={styles.input}
            multiline
            name='shortDescription'
            placeholder='Description Here'
            onChangeText={handleChange('shortDescription')}
            onBlur={handleBlur('shortDescription')}
            value={values.shortDescription}
          />
          {errors.shortDescription && (
            <Text style={styles.errorMessage}>{errors.shortDescription}</Text>
          )}
          <TextInput
            style={styles.input}
            name='authors'
            placeholder='Author Here'
            onChangeText={handleChange('authors')}
            onBlur={handleBlur('authors')}
            value={values.authors}
          />
          {errors.authors && (
            <Text style={styles.errorMessage}>{errors.authors}</Text>
          )}
        </View>
        <View>
          <TouchableOpacity
            style={{
              backgroundColor: '#3498db',
              width: '80%',
              borderRadius: 5,
              margin: 10,
              alignSelf: 'center',
              height: 50,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => handleSubmit()}
          >
            <Text style={styles.submit}>Submit</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    )}
  </Formik>
)

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
  },
  input: {
    width: '80%',
    height: 50,
    borderWidth: 1,
    borderRadius: 5,
    fontSize: 20,
    paddingLeft: 5,
    marginBottom: 20,
  },
  submit: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  errorMessage: {
    marginVertical: 5,
    color: 'red',
    fontSize: 16,
  },
})

export default AddBookForm

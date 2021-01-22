import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'

const DetailsScreen = ({ route }) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <View style={styles.title}>
        <AntDesign name='book' size={30} color='black' style={{ flex: 0.1 }} />
        <Text style={{ fontSize: 24, flex: 0.9 }}>
          {route.params?.item?.title}
        </Text>
      </View>

      <View style={styles.image}>
        <Image
          style={styles.imageWeb}
          source={{ uri: `${route.params?.item?.thumbnailUrl}` }}
        />
      </View>

      {route.params?.item?.longDescription && (
        <View style={styles.description}>
          <Text style={{ fontWeight: 'bold', fontSize: 16, marginBottom: 5 }}>
            Description
          </Text>
          <Text
            style={{
              width: 300,
              lineHeight: 20,
            }}
          >
            {route.params?.item?.longDescription}
          </Text>
        </View>
      )}

      <View style={styles.author}>
        <Ionicons
          name='person'
          size={30}
          color='grey'
          style={{ marginRight: 5 }}
        />
        <Text style={{ fontSize: 16 }}>{route.params?.item?.authors}</Text>
      </View>
    </ScrollView>
  )
}

export default DetailsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'row', //good
    borderRadius: 15,
    backgroundColor: '#bdc3c7',
    width: '90%',
    marginTop: 10,
  },
  description: {
    flexDirection: 'column',
    alignSelf: 'center',
    width: '90%',
  },
  author: {
    flexDirection: 'row',
    marginVertical: 20,
    alignItems: 'center',
    alignSelf: 'center',
    width: '90%',
  },
  image: {
    width: '90%',
    alignSelf: 'center',
    marginVertical: 10,
  },
  imageWeb: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
  },
})

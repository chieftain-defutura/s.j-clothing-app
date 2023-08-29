import * as React from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import { COLORS } from '../styles/theme'

interface componentNameProps {}

const PostCard = (props: componentNameProps) => {
  return (
    <View style={styles.postCard}>
      <View style={styles.imageContent}>
        <Image style={styles.tShirtImg} source={require('../assets/images/t-shirt.png')} />
      </View>
      <View>
        <Text style={styles.text}>uyhuyui</Text>
      </View>
    </View>
  )
}

export default PostCard

const styles = StyleSheet.create({
  text: {
    color: COLORS.textClr,
    fontSize: 16,
  },

  imageContent: {
    backgroundColor: '#FFBBE9',
    margin: 16,
    width: 328,
    height: 360,
    borderRadius: 20,
  },
  tShirtImg: {
    // display: "flex",
    // alignItems: "center",
    // justifyContent: "center",
    width: 300,
    height: 300,
    flexShrink: 0,
    marginVertical: 30,
    marginHorizontal: 14,
  },
  postCard: {
    backgroundColor: 'yellow',
  },
})

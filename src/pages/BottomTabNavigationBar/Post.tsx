import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import { COLORS } from '../../styles/theme'
import Setting from '../../assets/icons/Settings'
import Search from '../../assets/icons/Search'
import PostCard from '../../components/PostCard'

const Post = () => {
  return (
    <ScrollView style={styles.postWrapper}>
      <View style={styles.postHead}>
        <View>
          <Text style={styles.text}>Most viewed</Text>
        </View>
        <View style={styles.postIcons}>
          <Setting />
          <Search />
        </View>
      </View>

      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
    </ScrollView>
  )
}

export default Post

const styles = StyleSheet.create({
  postWrapper: {
    backgroundColor: 'red',
    padding: 16,
  },
  postHead: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    color: COLORS.textClr,
    fontSize: 16,
  },
  postIcons: {
    display: 'flex',
    flexDirection: 'row',
    gap: 24,
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

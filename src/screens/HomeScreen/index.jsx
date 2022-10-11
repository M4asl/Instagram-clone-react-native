import React from 'react'
import { SafeAreaView, View } from 'react-native'
import Post from '../../components/Post'
import Stories from '../../components/Stories'

const HomeScreen = () => {
  return (
      <SafeAreaView>
        <Stories/>
        <Post/>
      </SafeAreaView>
  )
}

export default HomeScreen
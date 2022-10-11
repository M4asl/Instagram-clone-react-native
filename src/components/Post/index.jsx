import React from 'react';
import { View } from 'react-native';

import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

import stories from '../../assets/data/stories';

const Post = () => (
  <View>
    <Header imageUri={stories[0].stories[0].imageUri} name={stories[0].user.name} />
    <Body imageUri={stories[0].stories[1].imageUri} />
    <Footer
      likesCount={1}
      caption={'CAPTION'}
      postedAt={'12-12-2020'}
    />
  </View>
)

export default Post;
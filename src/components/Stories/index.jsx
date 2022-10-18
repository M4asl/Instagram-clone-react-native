import React from 'react';
import { FlatList, View } from 'react-native';
import stories from '../../assets/data/stories';
import Story from '../Story';

const Stories = () => {
  return (
    <FlatList
      data={stories}
      keyExtractor={({ user: { id } }) => id}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => <Story story={item} />}
    />
  );
};

export default Stories;

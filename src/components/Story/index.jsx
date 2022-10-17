import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import ProfilePicture from '../ProfilePicture';

const Story = (props) => {
  const navigation = useNavigation();

  const {
    story: {
      user: { id, name, imageUri },
    },
  } = props;

  const onPress = () => {
    navigation.navigate('Story', { userId: id });
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <View>
        <ProfilePicture uri={imageUri} />
        <Text>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Story;

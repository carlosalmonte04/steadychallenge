import React from 'react';
import { View, Text } from 'react-native';

export const Barista = ({ activeItem = { name: 'Nothing', timeLeft: 0 } }) => (
  <View>
    <Text>Working on: {activeItem.name}</Text>
    <Text>Will be ready in: {activeItem && activeItem.timeLeft}</Text>
  </View>
);
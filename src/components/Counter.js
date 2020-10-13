import React from 'react';
import { View, Text } from 'react-native';

export const Counter = ({ itemsReady = [], tickets }) => (
  <View>
    <Text>Ready for pickup: {itemsReady[0]?.name}</Text>
    <Text>Next up: {itemsReady.slice(1).map(itemReady => itemReady.name)}</Text>
  </View>
);
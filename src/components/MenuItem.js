import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

export const MenuItem = ({ id, name, onPress }) => {
  return (
    <View>
      <TouchableOpacity style={styles.container} onPress={() => onPress(id)}>
        <Text style={styles.name}>{name}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  name: {
    fontSize: 20,
    paddingVertical: 20
  }
})
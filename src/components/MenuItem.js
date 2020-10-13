import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

export const MenuItem = ({ id, name, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => onPress(id)}>
      <Text style={styles.name}>{name}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginRight: 12,
    marginTop: 12,
    borderRadius: 100,
    backgroundColor: '#D5D8E5',
    padding: 8,
    paddingHorizontal: 10,
    width: null
  },
  name: {
    flexDirection: 'row',
    fontSize: 14,
    letterSpacing: 0.4
  }
})
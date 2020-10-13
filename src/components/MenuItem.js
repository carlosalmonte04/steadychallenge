import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

export const MenuItem = ({ id, name, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => onPress(id)}>
      <View style={styles.innerContainer}>
        <Text style={styles.name}>{name}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginRight: 12,
    marginTop: 12,
  },
  innerContainer: {
    backgroundColor: '#D5D8E5',
    padding: 8,
    paddingHorizontal: 10,
    borderRadius: 100,
  },
  name: {
    flexDirection: 'row',
    fontSize: 14,
    letterSpacing: 0.4
  }
})
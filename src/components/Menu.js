import React from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import { MenuItem } from './MenuItem';
import { Colors } from '../assets/';

const { width } = Dimensions.get('window');

export const Menu = ({ menuItemsArr, onMenuItemPress }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select item from menu:</Text>
      {menuItemsArr.map(menuItem => (
        <MenuItem key={menuItem.name} id={menuItem.name} name={menuItem.name} onPress={onMenuItemPress}/>)
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width,
    height: '30%',
    maxHeight: 400,
  },
  title: {
    fontSize: 28
  }
});

import React from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import { MenuItem } from './MenuItem';
import { Colors } from '../assets/';

const { width } = Dimensions.get('window');

export const Menu = ({ menuItemsArr, onMenuItemPress }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select item from menu</Text>
      <View style={styles.items}>
        {menuItemsArr.map(menuItem => (
          <MenuItem key={menuItem.name} id={menuItem.name} name={menuItem.name} onPress={onMenuItemPress}/>)
        )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: width * 0.8,
    alignSelf: 'center',
    height: '30%',
  },
  items: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  title: {
    color: '#131416',
    fontSize: 20,
    letterSpacing: 0.4,
    fontWeight: 'bold'
  }
});

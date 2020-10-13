import React from 'react';
import { ScrollView, View, Text, StyleSheet, Dimensions } from 'react-native';
import { MenuItem } from './MenuItem';

const { width, height } = Dimensions.get('window');

export const Queue = ({ name, queue = [], emptyState }) => (
  <View style={styles.container}>
    <Text style={styles.title}>{name}</Text>
    {!queue.length && (
      <Text
        style={[styles.message, styles.emptyState]}
      >
        {emptyState}
      </Text>
    )}
    <View style={styles.activeContainer}>
      {!!queue.length && (
        <View style={styles.activeMessage}>
          <Text style={styles.message}>
            Next up: 
          </Text>
              <MenuItem
              id={queue.reverse()[0].name}
              name={queue.reverse()[0].name}
              onPress={() => {}}
            />
            <Text style={styles.message}>
            Ready in: {queue[0].timeLeft / 1000}
          </Text>
        </View>
      )}
      </View>
    <ScrollView
      style={styles.box}
      contentContainerStyle={styles.box}
      stickyHeaderIndices={[0]}
    >
      {queue.length > 1 && <Text style={styles.message}>Coming up: </Text>}
      {queue.length > 1 && (
          queue.slice(1).map(
            (menuItem, index) => (
              <MenuItem
                key={menuItem.name + index}
                id={menuItem.name}
                name={menuItem.name}
                onPress={() => {}}
              />
            )
          )

      )}
    </ScrollView>
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 12,
    width: width * 0.4,
    justifyContent: 'flex-start',
    flex: 1,
    height: 500,
  },
  activeContainer: {
  },
  activeMessage: {
    justifyContent: 'space-around'
  },
  title: {
    color: '#131416',
    fontSize: 20,
    letterSpacing: 0.4,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    paddingTop: 0
  },
  message: {
    marginTop: 12
  },
  emptyState: {

  },
  box: {
    padding: 12,
    paddingLeft: 0,
    height: 294,
    overflow: 'hidden',
    paddingTop: 12
  }
})
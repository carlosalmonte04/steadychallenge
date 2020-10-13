import React from 'react';
import { FlatList, View, Text, StyleSheet, Dimensions } from 'react-native';
import { MenuItem } from './MenuItem';

const { width, height } = Dimensions.get('window');

export const Queue = ({ name, queue = [], emptyState, accessoryMessage }) => {
  const renderActive = () => (
    <View style={styles.activeMessage}>
      <Text style={styles.message}>
        {accessoryMessage} 
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
  );

  const renderEmpty = () => <Text style={styles.message}>{emptyState}</Text>

  const renderItem = ({ item, index }) => (
    <MenuItem
      key={item.name + index}
      id={item.name}
      name={item.name}
      onPress={() => {}}
    />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>
        {!queue.length && renderEmpty()}
      <View style={styles.activeContainer}>
        {!!queue.length && renderActive()}
      </View>
      <FlatList
        showsVerticalScrollIndicator ={false}
        showsHorizontalScrollIndicator={false}
        ListHeaderComponent={(queue.length && <Text>Coming up</Text>)}
        data={queue.slice(1)}
        renderItem={renderItem}
        style={styles.box}
        keyExtractor={(item, index) => item.name + index}
      />
    </View>
  );
}

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
  box: {
    padding: 12,
    paddingLeft: 0,
    height: 294,
    overflow: 'hidden',
    paddingTop: 12
  }
})
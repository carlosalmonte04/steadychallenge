import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';
import { Menu, Barista, Counter } from '../components';

const { width, height } = Dimensions.get('window');


const menuItems = {
  'Cafe Au Lait': {
    time: 4000,
    name: 'Cafe Au Lait'
  },
  Cappuccino: {
    time: 10000,
    name: 'Cappuccino'
  },
  Expresso: {
    time: 15000,
    name: 'Expresso'
  }
};

const menuItemsArr = Object.keys(menuItems).map(
  menuItem => menuItems[menuItem]
)

export class CoffeShop extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      tickets: [],
      timeActive: 0,
      itemsReady: [],
    };

    this.onStartCounter();
  }

  onStartCounter = () => {
    this.interval = setInterval(
      () => {
      const { timeActive } = this.state;
      this.setState({ timeActive: timeActive + 1});
      this.processTickets();
    }, 1000)
  }

  onActiveItemReady = () => {
    const { tickets, itemsReady } = this.state;
    const [itemReady] = tickets;
    this.setState({
      tickets: tickets.slice(1),
      itemsReady: [...itemsReady, itemReady],
    });
  }

  processTickets = () => {
    const { tickets, itemsReady } = this.state;
    const [activeItem] = tickets;
    if (activeItem) {
      if (activeItem.timeLeft === 0) this.onActiveItemReady();
      else activeItem.timeLeft = activeItem.timeLeft - 1000
    }
  }

  onStopCounter = () => {
    const { timeActive } = this.state;
    clearInterval(this.interval);
  }

  onMenuItemPress = (itemId) => {
    const { tickets } = this.state;
    const itemPressed = menuItems[itemId]
    itemPressed.timeLeft = itemPressed.time
    this.setState({
      tickets: [
        ...tickets,
        { ...menuItems[itemId] },
      ],
    });
  };

  render() {
    const { tickets, itemsReady } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.shopActions}>
          <TouchableOpacity style={styles.open} onPress={this.onStartCounter}>
            <Text>Open</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.close} onPress={this.onStopCounter}>
            <Text>Stop</Text>
          </TouchableOpacity>
        </View>
        <Barista activeItem={tickets[0]} />
        <Counter itemsReady={itemsReady} tickets={tickets} />
        <Menu menuItemsArr={menuItemsArr} onMenuItemPress={this.onMenuItemPress} />
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width,
    justifyContent: 'space-around'
  },
  shopActions: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  open: {
    borderColor: 'green',
    borderWidth: 2,
    borderRadius: 3,
    padding: 5
  },
  close: {
    borderColor: 'red',
    borderWidth: 2,
    borderRadius: 3,
    padding: 5
  },
})
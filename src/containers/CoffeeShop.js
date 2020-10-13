import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';
import { Menu, Queue, Counter } from '../components';

const { width, height } = Dimensions.get('window');


const menuItems = {
  'Cafe Au Lait': {
    time: 2000,
    name: 'Cafe Au Lait'
  },
  Cappuccino: {
    time: 3000,
    name: 'Cappuccino'
  },
  Expresso: {
    time: 1000,
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

    this.startCounter();
  }

  startCounter = () => {
    this.interval = setInterval(
      () => {
      const { timeActive } = this.state;
      this.setState({ timeActive: timeActive + 1});
      this.progress();
    }, 1000)
  }

  onBaristaTicketFinished = () => {
    const { tickets, itemsReady } = this.state;
    const [itemReady] = tickets;
    itemReady.timeLeft = 3000;
    this.setState({
      tickets: tickets.slice(1),
      itemsReady: [...itemsReady, { ...itemReady }],
    });
  }

  onCounterItemPickedUp = () => {
    const { tickets, itemsReady } = this.state;
    this.setState({
      itemsReady: itemsReady.slice(1),
    });
  }

  progress = () => {
    const { tickets, itemsReady } = this.state;
    const [activeBaristaTicket] = tickets;
    const [activeCounterItem] = itemsReady;

    if (tickets[0]) {
      if (tickets[0].timeLeft === 0) this.onBaristaTicketFinished();
      else tickets[0].timeLeft = tickets[0].timeLeft - 1000
    }

    if (itemsReady[0]) {
      if (itemsReady[0].timeLeft === 0) this.onCounterItemPickedUp();
      else itemsReady[0].timeLeft = itemsReady[0].timeLeft - 1000
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
        <Text style={styles.title}>Coffee Shop</Text>
        <View style={styles.insideShop}>
          <Queue
            name='Barista'
            emptyState={'Please add an item to the menu'}
            queue={tickets}
          />
          <Queue
            name='Counter'
            emptyState={'Items ready for pickup will show here'}
            queue={itemsReady}
          />
        </View>
        <Menu menuItemsArr={menuItemsArr} onMenuItemPress={this.onMenuItemPress} />
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 24,
    backgroundColor: '#E7E5F3',
    height,
    width,
    justifyContent: 'space-around'
  },
  title: {
    fontWeight: 'bold',
    color: '#131416',
    letterSpacing: 0.8,
    marginTop: 24,
    fontSize: 32,
    alignSelf: 'center'
  },
  insideShop: {
    flexDirection: 'row',
    alignItems: 'center',
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
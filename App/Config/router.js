import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";
import Icon from 'react-native-vector-icons/Ionicons';
import Home from "../Screens/Home";

const Tabs = createBottomTabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarTitle: "Home",
      tabBarIcon: ({ focused }) => <Icon name="ios-home" color={focused ? "#fff"  : "gray"} size={22} />
    },
  },
  Explore: {
    screen: Home,
    navigationOptions: {
      tabBarIcon: ({ focused }) => <Icon name="ios-compass" color={focused ? "#fff"  : "gray"} size={22} />
    },
  },
  Subscriptions: {
    screen: Home,
    navigationOptions: {
      header: null,
      tabBarIcon: ({ focused }) => <Icon name="ios-albums" color={focused ? "#fff"  : "gray"} size={22} />
    }
  },
  Inbox: {
    screen: Home,
    navigationOptions: {
      tabBarIcon: ({ focused }) => <Icon name="ios-mail" color={focused ? "#fff"  : "gray"} size={22} />
    }
  },
  Library: {
    screen: Home,
    navigationOptions: {
      tabBarIcon: ({ focused }) => <Icon name="ios-folder" color={focused ? "#fff"  : "gray"} size={22} />
    }
  },

},
  {
    initialRouteName: 'Home',
    tabBarPosition: 'bottom',
    swipeEnabled: true,
    lazyLoad: true,
    animationEnabled: true,
    tabBarOptions : {
      style : {
        backgroundColor : "#333333",
        height : 50,
        paddingTop : 3,
        paddingBottom : 3,
        borderTopWidth : 1.5,
        borderTopColor : "#474747"
      },
      activeTintColor: "#fff",
      inactiveTintColor: "gray",
    }
  }
);


const MainScreenNavigator = createStackNavigator({
  Tab: {
    screen: Tabs,
    navigationOptions: {
      title: "BOOK STORE",
      headerLeft: <Icon style={{ paddingLeft: 22 }} name="ios-book" size={30} color="#fff" />,
      headerStyle: {
        backgroundColor: "#2b2b39",
      },
      headerTitleStyle: { color: "#fff" },
      header: null
    }
  }
});

export default createAppContainer(MainScreenNavigator);
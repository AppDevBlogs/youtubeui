import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  FlatList,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
class VideoData extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.disableYellowBox = true;
    return (
      <View style={styles.container}>
        <ImageBackground style={styles.imageStyle} source={this.props.item.img}>
          <View style={styles.timeContainer}>
            <Text style={{fontSize: 11, color: '#fff'}}>12:43</Text>
          </View>
        </ImageBackground>
        <View style={styles.bottomContainer}>
          <Image
            style={styles.creatorIcon}
            source={require('../Assets/p1.jpg')}
          />
          <View style={styles.bottomDataContainer}>
            <Text style={styles.textStyle} numberOfLines={2}>
              {this.props.item.title}
            </Text>
            <Text style={styles.creatorData}>
              AppDevBlog . {this.props.item.views} views . 2 hours ago
            </Text>
          </View>
          <TouchableOpacity style={styles.more}>
            <Icon name="md-more" color="#999999" size={24} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

class Videos extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let datasource = [
      {
        img: require('../Assets/p1.jpg'),
        title: 'Youtube UI using React-native | AppDevBlog',
        views: '21k',
      },
      {
        img: require('../Assets/p2.jpg'),
        title: 'Youtube UI using React-native | AppDevBlog',
        views: '22k',
      },
      {
        img: require('../Assets/p1.jpg'),
        title: 'Youtube UI using React-native | AppDevBlog',
        views: '23k',
      },
      {
        img: require('../Assets/p2.jpg'),
        title: 'Youtube UI using React-native | AppDevBlog',
        views: '24k',
      },
      {
        img: require('../Assets/p1.jpg'),
        title: 'Youtube UI using React-native | AppDevBlog',
        views: '25k',
      },
      {
        img: require('../Assets/p2.jpg'),
        title: 'Youtube UI using React-native | AppDevBlog',
        views: '26k',
      },
      {
        img: require('../Assets/p2.jpg'),
        title: 'Youtube UI using React-native | AppDevBlog',
        views: '24k',
      },
      {
        img: require('../Assets/p1.jpg'),
        title: 'Youtube UI using React-native | AppDevBlog',
        views: '25k',
      },
      {
        img: require('../Assets/p2.jpg'),
        title: 'Youtube UI using React-native | AppDevBlog',
        views: '26k',
      },
      {
        img: require('../Assets/p2.jpg'),
        title: 'Youtube UI using React-native | AppDevBlog',
        views: '24k',
      },
      {
        img: require('../Assets/p1.jpg'),
        title: 'Youtube UI using React-native | AppDevBlog',
        views: '25k',
      },
      {
        img: require('../Assets/p2.jpg'),
        title: 'Youtube UI using React-native | AppDevBlog',
        views: '26k',
      },
    ];
    return (
      <View style={{flex: 1}}>
        <FlatList
          data={datasource}
          renderItem={({item, index}) => {
            return <VideoData item={item} />;
          }}
        />
      </View>
    );
  }
}

export default Videos;
const styles = StyleSheet.create({
  container: {
    height: 310,
    width: '100%',
    backgroundColor: '#333333',
  },
  imageStyle: {
    height: 220,
    width: '100%',
  },
  bottomContainer: {
    flexDirection: 'row',
    padding: 10,
    paddingRight: 7,
  },
  creatorIcon: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  bottomDataContainer: {
    paddingLeft: 10,
    width: '84%',
  },
  textStyle: {
    fontSize: 16,
    color: '#fff',
  },
  creatorData: {
    color: '#999999',
  },
  timeContainer: {
    position: 'absolute',
    width: 30,
    height: 15,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'flex-end',
    bottom: 10,
    right: 10,
  },
  more: {
    backgroundColor: '#333333',
    width: 20,
    height: 30,
    alignItems: 'center',
    alignContent: 'center',
  },
});

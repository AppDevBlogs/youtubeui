
import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Image
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
class Header extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        console.disableYellowBox = true;
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.headerLeft}>
                        <Image
                            style={styles.imageStyle}
                            source={require('../Assets/logo.jpg')}
                        />
                        <Text style={styles.heading}>YouTube</Text>
                    </View>
                    <View style={styles.headerRight}>
                        <View>
                        <Icon name="ios-videocam" size={25} color="#fff"/>
                        </View>
                        <View>
                        <Icon name="ios-search" size={25} color="#fff"/>
                        </View>
                        <View style={styles.profileContainer}>
                        <Icon name="ios-person" size={22} color="#333333"/>
                        </View>
                    </View>
                </View>
            </View>

        )
    }
}

export default Header;
const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 50,
        backgroundColor: "#333333",
        borderBottomWidth : 1.5,
        borderBottomColor : "#474747"
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10
    },
    imageStyle: {
        width: 37,
        height: 22,
        borderRadius: 10,
        marginRight : 5
    },
    heading: {
        color: "#fff",
        fontSize : 22,
        fontWeight : "bold"
    },
    headerLeft: {
        flexDirection: "row",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center"
    },
    headerRight: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "center",
        alignItems: "center",
        width : "35%"
    },
    profileContainer : {
        width : 25,
        height : 25,
        borderRadius : 12.5,
        backgroundColor : "#fff",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center"

    }
})
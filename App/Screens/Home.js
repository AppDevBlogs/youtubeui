import React,{Component} from "react";
import {
    View,
} from "react-native";
import Header from "../Components/Header";
import Videos from "../Components/Videos";

export default class Home extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <View style={{backgroundColor : "#333333",flex:1}}>
                <Header/>
                <Videos/>
            </View>
        )
    }
    
}

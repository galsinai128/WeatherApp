

import React, { Component } from 'react'
import { View, StyleSheet, Dimensions, ActivityIndicator, Text } from 'react-native';
import getWeather from '../Api'
import DailyList from './DailyList'
import Main from './Main'
import {fToC} from '../Utils'
import GetLocation from 'react-native-get-location'

class Weather extends Component {

  componentDidMount(){
    this.setState({isLoading : true});
    GetLocation.getCurrentPosition({enableHighAccuracy: true})
      .then(location => {
        getWeather(location.latitude,location.longitude)
          .then(res => {
            this.setState({
              timezone : res.data.timezone,
              summary : res.data.currently.summary,
              daily: res.data.daily,
              temperature: res.data.currently.temperature,
              icon: res.data.currently.icon,
              isLoading : false,
              noData: false,
              errorToShow: null
            })
          })
          .catch(e => {
            this.setState({isLoading : false, noData: true, errorToShow: e});
            console.log(e)
          })
      })
      .catch(e => {
        this.setState({isLoading : false, noData: true, errorToShow: e});
        console.log(e)    
      })
  }

  state = {
    timezone : '',
    summary : '',
    daily: null,
    temperature: null,
    detailsToDisplay: null,
    isLoading: false,
    noData: true,
    errorToShow: null
  }
  
  setItemToDisplay = index => {
    this.state.detailsToDisplay === index ? 
      this.setState({detailsToDisplay : null}) : 
      this.setState({detailsToDisplay : index}) 
  }

  render() {
    let celsius = fToC(this.state.temperature);
    return this.state.noData ? 
      (
        <View>
          <Text>No Data To Display ):</Text>
          {this.state.errorToShow ? (<Text>{"Error: " + e}</Text>) : null}
        </View>
      ) 
      : 
      (
        <View style={styles.container}>
          {this.state.isLoading ? <ActivityIndicator size="large" color="#0000ff" /> : null}
          <Main
            timezone = {this.state.timezone}
            summary = {this.state.summary}
            celsius = {celsius}
            icon = {this.state.icon}
          />
          <DailyList
            dailyList = {this.state.daily}
            detailsToDisplay={this.state.detailsToDisplay}
            setItemToDisplay={this.setItemToDisplay}
          ></DailyList>
        </View>
      );
  }
}

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    height: height*0.95,
    backgroundColor: 'azure'
  },

});

export default Weather;



import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';

import {getIcon} from '../Utils'



export default function Main(props) {
  let {timezone, summary, celsius , icon} = props;
  let iconUrl = icon ? getIcon(icon) : null;

  return (
    <View style={styles.container}>
      <Image
          style={{width: 130, height: 130}}
          source = {iconUrl ? iconUrl : require('../assets/cloud_cloudy.png')}
      ></Image>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{timezone}</Text>
        <Text style={styles.subTitle}>{summary}</Text>
        <Text style={styles.description}>{celsius}</Text>
      </View>

    </View>

    );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  textContainer:{
    marginLeft: 15
  },
  title: {
    fontSize: 30
  },
  subTitle: {
    fontSize: 25
  },
  description: {
    fontSize: 40
  }
});

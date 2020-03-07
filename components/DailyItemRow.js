

import React from 'react'
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';


export default function DailyItemRow(props) {

  let {iconUrl , date , today , setItemToDisplay, summary} = props;
  
    return (
      <TouchableOpacity
        onPress={()=>setItemToDisplay(props.index)}
      >
        <View style={styles.container}>
          <Image
              style={{width: 50, height: 50}}
              source = {iconUrl ? iconUrl : require('../assets/cloud_cloudy.png')}
          ></Image>
          <View style={styles.textContainer}>
            <Text style={styles.title}>{today + ' · ' + date}</Text>
            <Text style={styles.subTitle}>{summary}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
  container: {
    height: 70,
    borderColor: 'black',
    padding: 15,
    borderBottomWidth: 1,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  textContainer: {
    marginLeft: 15
  },
  title: {
    fontSize: 18
  },
})


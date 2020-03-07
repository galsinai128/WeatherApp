

import React from 'react'
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';


export default function DailyItemDetails(props) {

  let {iconUrl , date , today , temperatureMax, temperatureMin, summary, setItemToDisplay} = props;
  
    return (
      <TouchableOpacity
        onPress={()=>setItemToDisplay(props.index)}
      >
        <View style={styles.detailsContainer}>
          <View style={styles.detailsTitleContainer}>
            <Text style={styles.detailsTitleText}>{temperatureMin + " - " + temperatureMax}</Text>
            <Image    
                style={{width: 100, height: 100}}
                source = {iconUrl ? iconUrl : require('../assets/cloud_cloudy.png')}
            ></Image>
          </View>
            <View style={styles.detailsTextContainer}>
              <Text style={styles.detailSubTitle}>{summary}</Text>
              <Text style={styles.detailsTitle}>{today + ' · ' + date}</Text>
            </View>
        </View>
      </TouchableOpacity>

    );
}

const styles = StyleSheet.create({
  detailsContainer: {
    height: 250,
    borderBottomWidth: 1,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15
  },
  detailsTitleContainer: {
    alignItems: 'center',
    width: '90%'
  },
  detailsTitleText: {
    fontSize: 35
  },
  detailSubTitle: {
    fontSize: 25
  },
  detailsTitle: {
    fontSize: 20
  },
  detailsTextContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  }
})


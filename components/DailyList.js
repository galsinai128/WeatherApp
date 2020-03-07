

import React from 'react'
import { FlatList } from 'react-native';
import DailyItem from './DailyItem'


export default function DailyList(props) {
    return (
      <FlatList
        data={props.dailyList ? props.dailyList.data : null}
        renderItem={({ item, index }) => 
          <DailyItem 
            item={item}
            index={index}
            detailsToDisplay={props.detailsToDisplay}
            setItemToDisplay={props.setItemToDisplay}
          ></DailyItem>}
        keyExtractor={(item,index) => index}
      />
    );
}



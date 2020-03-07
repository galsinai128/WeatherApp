import React from 'react'

import DailyItemDetails from './DailyItemDetails'
import DailyItemRow from './DailyItemRow'

import {getDay, getIcon, getDate , getMonth, fToC} from '../Utils'

export default function DailyItem(props) {
  
  let today = getDay(props.item.time);
  let iconUrl = getIcon(props.item.icon);
  let date = getDate(props.item.time) + '/' + getMonth(props.item.time);
  let temperatureMin = fToC(props.item.temperatureMin)
  let temperatureMax = fToC(props.item.temperatureMax)
  
  return props.detailsToDisplay !== props.index ? 
    (<DailyItemRow
      setItemToDisplay = {props.setItemToDisplay}
      iconUrl = {iconUrl}
      today = {today}
      date = {date}
      summary = {props.item.summary}
      index= {props.index}
    />) 
    :
    (<DailyItemDetails
        iconUrl = {iconUrl}
        today = {today}
        date = {date}
        temperatureMin = {temperatureMin}
        temperatureMax = {temperatureMax}
        summary = {props.item.summary}
        index= {props.index}
        setItemToDisplay = {props.setItemToDisplay}
      />)
}

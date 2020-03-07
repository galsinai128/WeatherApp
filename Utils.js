
//farenhiet to celsius
function fToC(fahrenheit) {
  var fTemp = fahrenheit;
  var fToCel = (fTemp - 32) * 5 / 9;
  var message = fToCel.toFixed(1) + '\xB0C';
    return message
}

function getDay(timestamp) {
    var date = new Date (timestamp*1000);
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    return weekday[date.getDay()];
  }

  function getMonth(timestamp) {
    var date = new Date (timestamp*1000);
    return date.getMonth();
  }

  function getDate(timestamp) {
    var date = new Date (timestamp*1000);
    return date.getDate();
  }

  //map icons
  function getIcon(icon){
      icon = icon.replace('-','_')
      var iconsMap = {
        clear_day : require('./assets/sun_sunny_hot.png'),
        clear_night : require('./assets/night_crescent_cloud_half_moon.png'),
        rain : require('./assets/heavy_rain_cloud.png'),
        snow : require('./assets/cloud_snow.png'),
        sleet : require('./assets/cloud_snow.png'),
        wind : require('./assets/cloud_cloudy.png'),
        fog : require('./assets/cloud_cloudy.png'),
        cloudy : require('./assets/cloud_cloudy.png'),
        partly_cloudy_day : require('./assets/cloud_cloudy.png'),
        partly_cloudy_night : require('./assets/night_crescent_cloud_half_moon.png'),
      }
      return iconsMap[icon];
  }

  module.exports= {
      getDay,
      fToC,
      getIcon,
      getMonth,
      getDate
  }
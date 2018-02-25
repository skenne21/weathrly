
const chicagoData = {

  "response": {
  "version":"0.1",
  "termsofService":"http://www.wunderground.com/weather/api/d/terms.html",
  "features": {
  "forecast10day": 1
  ,
  "hourly": 1
  ,
  "conditions": 1
  }
    }
  , "current_observation": {
        "image": {
        "url":"http://icons.wxug.com/graphics/wu2/logo_130x80.png",
        "title":"Weather Underground",
        "link":"http://www.wunderground.com"
        },
        "display_location": {
        "full":"Chicago, IL",
        "city":"Chicago",
        "state":"IL",
        "state_name":"Illinois",
        "country":"US",
        "country_iso3166":"US",
        "zip":"60290",
        "magic":"1",
        "wmo":"99999",
        "latitude":"41.95999908",
        "longitude":"-87.87999725",
        "elevation":"198.4"
        },
        "observation_location": {
        "full":"George Street, Franklin Park, Illinois",
        "city":"George Street, Franklin Park",
        "state":"Illinois",
        "country":"US",
        "country_iso3166":"US",
        "latitude":"41.935368",
        "longitude":"-87.880905",
        "elevation":"656 ft"
        },
        "estimated": {
        },
        "station_id":"KILFRANK2",
        "observation_time":"Last Updated on February 24, 6:45 PM CST",
        "observation_time_rfc822":"Sat, 24 Feb 2018 18:45:52 -0600",
        "observation_epoch":"1519519552",
        "local_time_rfc822":"Sat, 24 Feb 2018 18:52:40 -0600",
        "local_epoch":"1519519960",
        "local_tz_short":"CST",
        "local_tz_long":"America/Chicago",
        "local_tz_offset":"-0600",
        "weather":"Overcast",
        "temperature_string":"41.2 F (5.1 C)",
        "temp_f":41.2,
        "temp_c":5.1,
        "relative_humidity":"86%",
        "wind_string":"From the ESE at 3.7 MPH Gusting to 9.9 MPH",
        "wind_dir":"ESE",
        "wind_degrees":114,
        "wind_mph":3.7,
        "wind_gust_mph":"9.9",
        "wind_kph":6.0,
        "wind_gust_kph":"15.9",
        "pressure_mb":"1008",
        "pressure_in":"29.78",
        "pressure_trend":"-",
        "dewpoint_string":"37 F (3 C)",
        "dewpoint_f":37,
        "dewpoint_c":3,
        "heat_index_string":"NA",
        "heat_index_f":"NA",
        "heat_index_c":"NA",
        "windchill_string":"39 F (4 C)",
        "windchill_f":"39",
        "windchill_c":"4",
        "feelslike_string":"39 F (4 C)",
        "feelslike_f":"39",
        "feelslike_c":"4",
        "visibility_mi":"5.0",
        "visibility_km":"8.0",
        "solarradiation":"--",
        "UV":"0","precip_1hr_string":"-999.00 in ( 0 mm)",
        "precip_1hr_in":"-999.00",
        "precip_1hr_metric":" 0",
        "precip_today_string":"0.00 in (0 mm)",
        "precip_today_in":"0.00",
        "precip_today_metric":"0",
        "icon":"cloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_cloudy.gif",
        "forecast_url":"http://www.wunderground.com/US/IL/Chicago.html",
        "history_url":"http://www.wunderground.com/weatherstation/WXDailyHistory.asp?ID=KILFRANK2",
        "ob_url":"http://www.wunderground.com/cgi-bin/findweather/getForecast?query=41.935368,-87.880905",
        "nowcast":""
    }
        ,
    "forecast":{
        "txt_forecast": {
        "date":"6:02 PM CST",
        "forecastday": [
        {
        "period":0,
        "icon":"rain",
        "icon_url":"http://icons.wxug.com/i/c/k/rain.gif",
        "title":"Saturday",
        "fcttext":"Windy with periods of rain. Lows overnight in the low 30s.",
        "fcttext_metric":"Windy with periods of rain. Low -1C.",
        "pop":"70"
        }
        ,
        {
        "period":1,
        "icon":"nt_rain",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_rain.gif",
        "title":"Saturday Night",
        "fcttext":"A steady rain this evening. Windy with showers continuing overnight. Low around 30F. SSE winds shifting to WSW at 20 to 30 mph. Chance of rain 70%. Winds could occasionally gust over 40 mph.",
        "fcttext_metric":"A steady rain this evening. Windy with showers continuing overnight. Low -1C. SSE winds shifting to WSW at 30 to 50 km/h. Chance of rain 70%. Winds could occasionally gust over 65 km/h.",
        "pop":"70"
        }
        ,
        {
        "period":2,
        "icon":"partlycloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
        "title":"Sunday",
        "fcttext":"Mostly sunny skies. High 44F. Winds WSW at 20 to 30 mph.",
        "fcttext_metric":"Mostly sunny skies. High 7C. Winds WSW at 30 to 50 km/h.",
        "pop":"0"
        }
        ,
        {
        "period":3,
        "icon":"nt_clear",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
        "title":"Sunday Night",
        "fcttext":"Mostly clear skies. Low 28F. Winds WSW at 10 to 15 mph.",
        "fcttext_metric":"Mostly clear skies. Low -2C. Winds WSW at 15 to 25 km/h.",
        "pop":"10"
        }
        ,
        {
        "period":4,
        "icon":"clear",
        "icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
        "title":"Monday",
        "fcttext":"A mainly sunny sky. High 52F. Winds SW at 10 to 15 mph.",
        "fcttext_metric":"A mainly sunny sky. High 11C. Winds SW at 15 to 25 km/h.",
        "pop":"10"
        }
        ,
        {
        "period":5,
        "icon":"nt_clear",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
        "title":"Monday Night",
        "fcttext":"Clear skies. Low 37F. Winds SSW at 5 to 10 mph.",
        "fcttext_metric":"Clear skies. Low 3C. Winds SSW at 10 to 15 km/h.",
        "pop":"10"
        }
        ,
        {
        "period":6,
        "icon":"clear",
        "icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
        "title":"Tuesday",
        "fcttext":"Except for a few afternoon clouds, mainly sunny. High near 60F. Winds SSW at 10 to 20 mph.",
        "fcttext_metric":"Sunny, along with a few afternoon clouds. High around 15C. Winds SSW at 15 to 30 km/h.",
        "pop":"10"
        }
        ,
        {
        "period":7,
        "icon":"nt_partlycloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
        "title":"Tuesday Night",
        "fcttext":"Partly cloudy skies during the evening will give way to cloudy skies overnight. Low 43F. Winds SSW at 10 to 15 mph.",
        "fcttext_metric":"Partly cloudy in the evening with more clouds for later at night. Low 6C. Winds SSW at 10 to 15 km/h.",
        "pop":"20"
        }
        ,
        {
        "period":8,
        "icon":"partlycloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
        "title":"Wednesday",
        "fcttext":"Cloudy early with partial sunshine expected late. High 56F. Winds SW at 5 to 10 mph.",
        "fcttext_metric":"Cloudy skies early will become partly cloudy later in the day. High 13C. Winds SW at 10 to 15 km/h.",
        "pop":"20"
        }
        ,
        {
        "period":9,
        "icon":"nt_rain",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_rain.gif",
        "title":"Wednesday Night",
        "fcttext":"Cloudy with periods of rain. Low 44F. Winds E at 10 to 15 mph. Chance of rain 90%. Rainfall near a half an inch.",
        "fcttext_metric":"Periods of rain. Low 7C. Winds E at 15 to 25 km/h. Chance of rain 90%. Rainfall near 12mm.",
        "pop":"90"
        }
        ,
        {
        "period":10,
        "icon":"rain",
        "icon_url":"http://icons.wxug.com/i/c/k/rain.gif",
        "title":"Thursday",
        "fcttext":"Periods of rain. High 49F. Winds NNE at 15 to 25 mph. Chance of rain 90%. Rainfall near a half an inch.",
        "fcttext_metric":"Rain likely. High 9C. Winds NNE at 25 to 40 km/h. Chance of rain 90%. Rainfall around 12mm.",
        "pop":"90"
        }
        ,
        {
        "period":11,
        "icon":"nt_snow",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_snow.gif",
        "title":"Thursday Night",
        "fcttext":"Mostly cloudy. Windy with occasional rain showers, mixed with snow, in the evening. A snow shower or two late. Low 34F. Winds NNW at 20 to 30 mph. Chance of precip 60%.",
        "fcttext_metric":"Mostly cloudy. Windy with occasional rain showers, mixed with snow, in the evening. A snow shower or two late. Low 1C. Winds NNW at 30 to 50 km/h. Chance of precip 60%.",
        "pop":"60"
        }
        ,
        {
        "period":12,
        "icon":"partlycloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
        "title":"Friday",
        "fcttext":"Partly cloudy skies. High 42F. Winds N at 15 to 25 mph.",
        "fcttext_metric":"Partly cloudy skies. High 6C. Winds N at 15 to 30 km/h.",
        "pop":"20"
        }
        ,
        {
        "period":13,
        "icon":"nt_partlycloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
        "title":"Friday Night",
        "fcttext":"Partly cloudy. Low 32F. Winds NNE at 10 to 15 mph.",
        "fcttext_metric":"Partly cloudy skies. Low near 0C. Winds NNE at 15 to 25 km/h.",
        "pop":"10"
        }
        ,
        {
        "period":14,
        "icon":"partlycloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
        "title":"Saturday",
        "fcttext":"Mostly cloudy skies early will become partly cloudy later in the day. High 43F. Winds NE at 10 to 15 mph.",
        "fcttext_metric":"Mostly cloudy skies early, then partly cloudy in the afternoon. High 6C. Winds NE at 15 to 25 km/h.",
        "pop":"10"
        }
        ,
        {
        "period":15,
        "icon":"nt_clear",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
        "title":"Saturday Night",
        "fcttext":"A mostly clear sky. Low 34F. Winds ENE at 10 to 15 mph.",
        "fcttext_metric":"A mostly clear sky. Low 1C. Winds ENE at 10 to 15 km/h.",
        "pop":"10"
        }
        ,
        {
        "period":16,
        "icon":"partlycloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
        "title":"Sunday",
        "fcttext":"Partly cloudy skies. High 44F. Winds ENE at 10 to 15 mph.",
        "fcttext_metric":"Partly cloudy skies. High 6C. Winds ENE at 15 to 25 km/h.",
        "pop":"10"
        }
        ,
        {
        "period":17,
        "icon":"nt_chancerain",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_chancerain.gif",
        "title":"Sunday Night",
        "fcttext":"Partly cloudy skies early followed by increasing clouds with showers developing later at night. Low 36F. Winds E at 10 to 15 mph. Chance of rain 40%.",
        "fcttext_metric":"Partly cloudy in the evening. Increasing clouds with periods of showers after midnight. Low 2C. Winds E at 15 to 25 km/h. Chance of rain 40%.",
        "pop":"40"
        }
        ,
        {
        "period":18,
        "icon":"partlycloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
        "title":"Monday",
        "fcttext":"Partly cloudy skies. High 44F. Winds E at 10 to 15 mph.",
        "fcttext_metric":"Intervals of clouds and sunshine. High 7C. Winds E at 15 to 25 km/h.",
        "pop":"20"
        }
        ,
        {
        "period":19,
        "icon":"nt_snow",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_snow.gif",
        "title":"Monday Night",
        "fcttext":"Rain and snow showers mixed after midnight. Low 34F. Winds ENE at 5 to 10 mph. Chance of precip 40%.",
        "fcttext_metric":"Mainly cloudy with a mixture of rain and snow showers developing late. Low 1C. Winds ENE at 10 to 15 km/h. Chance of precip 40%.",
        "pop":"40"
        }
        ]
        },
        "simpleforecast": {
        "forecastday": [
        {"date":{
    "epoch":"1519520400",
    "pretty":"7:00 PM CST on February 24, 2018",
    "day":24,
    "month":2,
    "year":2018,
    "yday":54,
    "hour":19,
    "min":"00",
    "sec":0,
    "isdst":"0",
    "monthname":"February",
    "monthname_short":"Feb",
    "weekday_short":"Sat",
    "weekday":"Saturday",
    "ampm":"PM",
    "tz_short":"CST",
    "tz_long":"America/Chicago"
},
        "period":1,
        "high": {
        "fahrenheit":"41",
        "celsius":"5"
        },
        "low": {
        "fahrenheit":"30",
        "celsius":"-1"
        },
        "conditions":"Rain",
        "icon":"rain",
        "icon_url":"http://icons.wxug.com/i/c/k/rain.gif",
        "skyicon":"",
        "pop":70,
        "qpf_allday": {
        "in": 0.19,
        "mm": 5
        },
        "qpf_day": {
        "in": null,
        "mm": null
        },
        "qpf_night": {
        "in": 0.19,
        "mm": 5
        },
        "snow_allday": {
        "in": 0.0,
        "cm": 0.0
        },
        "snow_day": {
        "in": null,
        "cm": null
        },
        "snow_night": {
        "in": 0.0,
        "cm": 0.0
        },
        "maxwind": {
        "mph": -999,
        "kph": 27,
        "dir": "-999",
        "degrees": 0
        },
        "avewind": {
        "mph": 10,
        "kph": 16,
        "dir": "ENE",
        "degrees": 0
        },
        "avehumidity": 93,
        "maxhumidity": 95,
        "minhumidity": 92
        }
        ,
        {"date":{
    "epoch":"1519606800",
    "pretty":"7:00 PM CST on February 25, 2018",
    "day":25,
    "month":2,
    "year":2018,
    "yday":55,
    "hour":19,
    "min":"00",
    "sec":0,
    "isdst":"0",
    "monthname":"February",
    "monthname_short":"Feb",
    "weekday_short":"Sun",
    "weekday":"Sunday",
    "ampm":"PM",
    "tz_short":"CST",
    "tz_long":"America/Chicago"
},
        "period":2,
        "high": {
        "fahrenheit":"44",
        "celsius":"7"
        },
        "low": {
        "fahrenheit":"28",
        "celsius":"-2"
        },
        "conditions":"Partly Cloudy",
        "icon":"partlycloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
        "skyicon":"",
        "pop":0,
        "qpf_allday": {
        "in": 0.00,
        "mm": 0
        },
        "qpf_day": {
        "in": 0.00,
        "mm": 0
        },
        "qpf_night": {
        "in": 0.00,
        "mm": 0
        },
        "snow_allday": {
        "in": 0.0,
        "cm": 0.0
        },
        "snow_day": {
        "in": 0.0,
        "cm": 0.0
        },
        "snow_night": {
        "in": 0.0,
        "cm": 0.0
        },
        "maxwind": {
        "mph": 30,
        "kph": 48,
        "dir": "WSW",
        "degrees": 248
        },
        "avewind": {
        "mph": 20,
        "kph": 32,
        "dir": "WSW",
        "degrees": 248
        },
        "avehumidity": 65,
        "maxhumidity": 99,
        "minhumidity": 45
        }
        ,
        {"date":{
    "epoch":"1519693200",
    "pretty":"7:00 PM CST on February 26, 2018",
    "day":26,
    "month":2,
    "year":2018,
    "yday":56,
    "hour":19,
    "min":"00",
    "sec":0,
    "isdst":"0",
    "monthname":"February",
    "monthname_short":"Feb",
    "weekday_short":"Mon",
    "weekday":"Monday",
    "ampm":"PM",
    "tz_short":"CST",
    "tz_long":"America/Chicago"
},
        "period":3,
        "high": {
        "fahrenheit":"52",
        "celsius":"11"
        },
        "low": {
        "fahrenheit":"37",
        "celsius":"3"
        },
        "conditions":"Clear",
        "icon":"clear",
        "icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
        "skyicon":"",
        "pop":10,
        "qpf_allday": {
        "in": 0.00,
        "mm": 0
        },
        "qpf_day": {
        "in": 0.00,
        "mm": 0
        },
        "qpf_night": {
        "in": 0.00,
        "mm": 0
        },
        "snow_allday": {
        "in": 0.0,
        "cm": 0.0
        },
        "snow_day": {
        "in": 0.0,
        "cm": 0.0
        },
        "snow_night": {
        "in": 0.0,
        "cm": 0.0
        },
        "maxwind": {
        "mph": 15,
        "kph": 24,
        "dir": "SW",
        "degrees": 223
        },
        "avewind": {
        "mph": 12,
        "kph": 19,
        "dir": "SW",
        "degrees": 223
        },
        "avehumidity": 59,
        "maxhumidity": 83,
        "minhumidity": 37
        }
        ,
        {"date":{
    "epoch":"1519779600",
    "pretty":"7:00 PM CST on February 27, 2018",
    "day":27,
    "month":2,
    "year":2018,
    "yday":57,
    "hour":19,
    "min":"00",
    "sec":0,
    "isdst":"0",
    "monthname":"February",
    "monthname_short":"Feb",
    "weekday_short":"Tue",
    "weekday":"Tuesday",
    "ampm":"PM",
    "tz_short":"CST",
    "tz_long":"America/Chicago"
},
        "period":4,
        "high": {
        "fahrenheit":"60",
        "celsius":"16"
        },
        "low": {
        "fahrenheit":"43",
        "celsius":"6"
        },
        "conditions":"Clear",
        "icon":"clear",
        "icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
        "skyicon":"",
        "pop":10,
        "qpf_allday": {
        "in": 0.00,
        "mm": 0
        },
        "qpf_day": {
        "in": 0.00,
        "mm": 0
        },
        "qpf_night": {
        "in": 0.00,
        "mm": 0
        },
        "snow_allday": {
        "in": 0.0,
        "cm": 0.0
        },
        "snow_day": {
        "in": 0.0,
        "cm": 0.0
        },
        "snow_night": {
        "in": 0.0,
        "cm": 0.0
        },
        "maxwind": {
        "mph": 20,
        "kph": 32,
        "dir": "SSW",
        "degrees": 204
        },
        "avewind": {
        "mph": 13,
        "kph": 21,
        "dir": "SSW",
        "degrees": 204
        },
        "avehumidity": 62,
        "maxhumidity": 76,
        "minhumidity": 46
        }
        ,
        {"date":{
    "epoch":"1519866000",
    "pretty":"7:00 PM CST on February 28, 2018",
    "day":28,
    "month":2,
    "year":2018,
    "yday":58,
    "hour":19,
    "min":"00",
    "sec":0,
    "isdst":"0",
    "monthname":"February",
    "monthname_short":"Feb",
    "weekday_short":"Wed",
    "weekday":"Wednesday",
    "ampm":"PM",
    "tz_short":"CST",
    "tz_long":"America/Chicago"
},
        "period":5,
        "high": {
        "fahrenheit":"56",
        "celsius":"13"
        },
        "low": {
        "fahrenheit":"44",
        "celsius":"7"
        },
        "conditions":"Partly Cloudy",
        "icon":"partlycloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
        "skyicon":"",
        "pop":20,
        "qpf_allday": {
        "in": 0.54,
        "mm": 14
        },
        "qpf_day": {
        "in": 0.00,
        "mm": 0
        },
        "qpf_night": {
        "in": 0.54,
        "mm": 14
        },
        "snow_allday": {
        "in": 0.0,
        "cm": 0.0
        },
        "snow_day": {
        "in": 0.0,
        "cm": 0.0
        },
        "snow_night": {
        "in": 0.0,
        "cm": 0.0
        },
        "maxwind": {
        "mph": 10,
        "kph": 16,
        "dir": "SW",
        "degrees": 217
        },
        "avewind": {
        "mph": 9,
        "kph": 14,
        "dir": "SW",
        "degrees": 217
        },
        "avehumidity": 70,
        "maxhumidity": 84,
        "minhumidity": 59
        }
        ,
        {"date":{
    "epoch":"1519952400",
    "pretty":"7:00 PM CST on March 01, 2018",
    "day":1,
    "month":3,
    "year":2018,
    "yday":59,
    "hour":19,
    "min":"00",
    "sec":0,
    "isdst":"0",
    "monthname":"March",
    "monthname_short":"Mar",
    "weekday_short":"Thu",
    "weekday":"Thursday",
    "ampm":"PM",
    "tz_short":"CST",
    "tz_long":"America/Chicago"
},
        "period":6,
        "high": {
        "fahrenheit":"49",
        "celsius":"9"
        },
        "low": {
        "fahrenheit":"34",
        "celsius":"1"
        },
        "conditions":"Rain",
        "icon":"rain",
        "icon_url":"http://icons.wxug.com/i/c/k/rain.gif",
        "skyicon":"",
        "pop":90,
        "qpf_allday": {
        "in": 0.73,
        "mm": 19
        },
        "qpf_day": {
        "in": 0.63,
        "mm": 16
        },
        "qpf_night": {
        "in": 0.10,
        "mm": 3
        },
        "snow_allday": {
        "in": 0.3,
        "cm": 0.8
        },
        "snow_day": {
        "in": 0.0,
        "cm": 0.0
        },
        "snow_night": {
        "in": 0.3,
        "cm": 0.8
        },
        "maxwind": {
        "mph": 25,
        "kph": 40,
        "dir": "NNE",
        "degrees": 32
        },
        "avewind": {
        "mph": 19,
        "kph": 31,
        "dir": "NNE",
        "degrees": 32
        },
        "avehumidity": 85,
        "maxhumidity": 97,
        "minhumidity": 77
        }
        ,
        {"date":{
    "epoch":"1520038800",
    "pretty":"7:00 PM CST on March 02, 2018",
    "day":2,
    "month":3,
    "year":2018,
    "yday":60,
    "hour":19,
    "min":"00",
    "sec":0,
    "isdst":"0",
    "monthname":"March",
    "monthname_short":"Mar",
    "weekday_short":"Fri",
    "weekday":"Friday",
    "ampm":"PM",
    "tz_short":"CST",
    "tz_long":"America/Chicago"
},
        "period":7,
        "high": {
        "fahrenheit":"42",
        "celsius":"6"
        },
        "low": {
        "fahrenheit":"32",
        "celsius":"0"
        },
        "conditions":"Partly Cloudy",
        "icon":"partlycloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
        "skyicon":"",
        "pop":20,
        "qpf_allday": {
        "in": 0.00,
        "mm": 0
        },
        "qpf_day": {
        "in": 0.00,
        "mm": 0
        },
        "qpf_night": {
        "in": 0.00,
        "mm": 0
        },
        "snow_allday": {
        "in": 0.0,
        "cm": 0.0
        },
        "snow_day": {
        "in": 0.0,
        "cm": 0.0
        },
        "snow_night": {
        "in": 0.0,
        "cm": 0.0
        },
        "maxwind": {
        "mph": 25,
        "kph": 40,
        "dir": "N",
        "degrees": 354
        },
        "avewind": {
        "mph": 17,
        "kph": 27,
        "dir": "N",
        "degrees": 354
        },
        "avehumidity": 74,
        "maxhumidity": 81,
        "minhumidity": 63
        }
        ,
        {"date":{
    "epoch":"1520125200",
    "pretty":"7:00 PM CST on March 03, 2018",
    "day":3,
    "month":3,
    "year":2018,
    "yday":61,
    "hour":19,
    "min":"00",
    "sec":0,
    "isdst":"0",
    "monthname":"March",
    "monthname_short":"Mar",
    "weekday_short":"Sat",
    "weekday":"Saturday",
    "ampm":"PM",
    "tz_short":"CST",
    "tz_long":"America/Chicago"
},
        "period":8,
        "high": {
        "fahrenheit":"43",
        "celsius":"6"
        },
        "low": {
        "fahrenheit":"34",
        "celsius":"1"
        },
        "conditions":"Partly Cloudy",
        "icon":"partlycloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
        "skyicon":"",
        "pop":10,
        "qpf_allday": {
        "in": 0.00,
        "mm": 0
        },
        "qpf_day": {
        "in": 0.00,
        "mm": 0
        },
        "qpf_night": {
        "in": 0.00,
        "mm": 0
        },
        "snow_allday": {
        "in": 0.0,
        "cm": 0.0
        },
        "snow_day": {
        "in": 0.0,
        "cm": 0.0
        },
        "snow_night": {
        "in": 0.0,
        "cm": 0.0
        },
        "maxwind": {
        "mph": 15,
        "kph": 24,
        "dir": "NE",
        "degrees": 42
        },
        "avewind": {
        "mph": 11,
        "kph": 18,
        "dir": "NE",
        "degrees": 42
        },
        "avehumidity": 76,
        "maxhumidity": 85,
        "minhumidity": 62
        }
        ,
        {"date":{
    "epoch":"1520211600",
    "pretty":"7:00 PM CST on March 04, 2018",
    "day":4,
    "month":3,
    "year":2018,
    "yday":62,
    "hour":19,
    "min":"00",
    "sec":0,
    "isdst":"0",
    "monthname":"March",
    "monthname_short":"Mar",
    "weekday_short":"Sun",
    "weekday":"Sunday",
    "ampm":"PM",
    "tz_short":"CST",
    "tz_long":"America/Chicago"
},
        "period":9,
        "high": {
        "fahrenheit":"44",
        "celsius":"7"
        },
        "low": {
        "fahrenheit":"36",
        "celsius":"2"
        },
        "conditions":"Partly Cloudy",
        "icon":"partlycloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
        "skyicon":"",
        "pop":10,
        "qpf_allday": {
        "in": 0.11,
        "mm": 3
        },
        "qpf_day": {
        "in": 0.00,
        "mm": 0
        },
        "qpf_night": {
        "in": 0.11,
        "mm": 3
        },
        "snow_allday": {
        "in": 0.0,
        "cm": 0.0
        },
        "snow_day": {
        "in": 0.0,
        "cm": 0.0
        },
        "snow_night": {
        "in": 0.0,
        "cm": 0.0
        },
        "maxwind": {
        "mph": 15,
        "kph": 24,
        "dir": "ENE",
        "degrees": 75
        },
        "avewind": {
        "mph": 12,
        "kph": 19,
        "dir": "ENE",
        "degrees": 75
        },
        "avehumidity": 77,
        "maxhumidity": 86,
        "minhumidity": 66
        }
        ,
        {"date":{
    "epoch":"1520298000",
    "pretty":"7:00 PM CST on March 05, 2018",
    "day":5,
    "month":3,
    "year":2018,
    "yday":63,
    "hour":19,
    "min":"00",
    "sec":0,
    "isdst":"0",
    "monthname":"March",
    "monthname_short":"Mar",
    "weekday_short":"Mon",
    "weekday":"Monday",
    "ampm":"PM",
    "tz_short":"CST",
    "tz_long":"America/Chicago"
},
        "period":10,
        "high": {
        "fahrenheit":"44",
        "celsius":"7"
        },
        "low": {
        "fahrenheit":"34",
        "celsius":"1"
        },
        "conditions":"Partly Cloudy",
        "icon":"partlycloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
        "skyicon":"",
        "pop":20,
        "qpf_allday": {
        "in": 0.03,
        "mm": 1
        },
        "qpf_day": {
        "in": 0.00,
        "mm": 0
        },
        "qpf_night": {
        "in": 0.03,
        "mm": 1
        },
        "snow_allday": {
        "in": 0.1,
        "cm": 0.3
        },
        "snow_day": {
        "in": 0.0,
        "cm": 0.0
        },
        "snow_night": {
        "in": 0.1,
        "cm": 0.3
        },
        "maxwind": {
        "mph": 15,
        "kph": 24,
        "dir": "E",
        "degrees": 89
        },
        "avewind": {
        "mph": 12,
        "kph": 19,
        "dir": "E",
        "degrees": 89
        },
        "avehumidity": 78,
        "maxhumidity": 92,
        "minhumidity": 69
        }
        ]
        }
    }
        ,
    "hourly_forecast": [
        {
        "FCTTIME": {
        "hour": "19","hour_padded": "19","min": "00","min_unpadded": "0","sec": "0","year": "2018","mon": "2","mon_padded": "02","mon_abbrev": "Feb","mday": "24","mday_padded": "24","yday": "54","isdst": "0","epoch": "1519520400","pretty": "7:00 PM CST on February 24, 2018","civil": "7:00 PM","month_name": "February","month_name_abbrev": "Feb","weekday_name": "Saturday","weekday_name_night": "Saturday Night","weekday_name_abbrev": "Sat","weekday_name_unlang": "Saturday","weekday_name_night_unlang": "Saturday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "42", "metric": "6"},
        "dewpoint": {"english": "40", "metric": "4"},
        "condition": "Overcast",
        "icon": "cloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_cloudy.gif",
        "fctcode": "4",
        "sky": "100",
        "wspd": {"english": "17", "metric": "27"},
        "wdir": {"dir": "ESE", "degrees": "120"},
        "wx": "Cloudy",
        "uvi": "0",
        "humidity": "92",
        "windchill": {"english": "35", "metric": "2"},
        "heatindex": {"english": "-9999", "metric": "-9999"},
        "feelslike": {"english": "35", "metric": "2"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "8",
        "mslp": {"english": "29.71", "metric": "1006"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "20","hour_padded": "20","min": "00","min_unpadded": "0","sec": "0","year": "2018","mon": "2","mon_padded": "02","mon_abbrev": "Feb","mday": "24","mday_padded": "24","yday": "54","isdst": "0","epoch": "1519524000","pretty": "8:00 PM CST on February 24, 2018","civil": "8:00 PM","month_name": "February","month_name_abbrev": "Feb","weekday_name": "Saturday","weekday_name_night": "Saturday Night","weekday_name_abbrev": "Sat","weekday_name_unlang": "Saturday","weekday_name_night_unlang": "Saturday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "42", "metric": "6"},
        "dewpoint": {"english": "41", "metric": "5"},
        "condition": "Chance of Rain",
        "icon": "chancerain",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_chancerain.gif",
        "fctcode": "12",
        "sky": "100",
        "wspd": {"english": "17", "metric": "27"},
        "wdir": {"dir": "ESE", "degrees": "123"},
        "wx": "Showers",
        "uvi": "0",
        "humidity": "94",
        "windchill": {"english": "35", "metric": "2"},
        "heatindex": {"english": "-9999", "metric": "-9999"},
        "feelslike": {"english": "35", "metric": "2"},
        "qpf": {"english": "0.01", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "35",
        "mslp": {"english": "29.64", "metric": "1004"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "21","hour_padded": "21","min": "00","min_unpadded": "0","sec": "0","year": "2018","mon": "2","mon_padded": "02","mon_abbrev": "Feb","mday": "24","mday_padded": "24","yday": "54","isdst": "0","epoch": "1519527600","pretty": "9:00 PM CST on February 24, 2018","civil": "9:00 PM","month_name": "February","month_name_abbrev": "Feb","weekday_name": "Saturday","weekday_name_night": "Saturday Night","weekday_name_abbrev": "Sat","weekday_name_unlang": "Saturday","weekday_name_night_unlang": "Saturday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "44", "metric": "7"},
        "dewpoint": {"english": "42", "metric": "6"},
        "condition": "Overcast",
        "icon": "cloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_cloudy.gif",
        "fctcode": "4",
        "sky": "100",
        "wspd": {"english": "15", "metric": "24"},
        "wdir": {"dir": "SE", "degrees": "134"},
        "wx": "Cloudy",
        "uvi": "0",
        "humidity": "94",
        "windchill": {"english": "38", "metric": "3"},
        "heatindex": {"english": "-9999", "metric": "-9999"},
        "feelslike": {"english": "38", "metric": "3"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "21",
        "mslp": {"english": "29.58", "metric": "1002"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "22","hour_padded": "22","min": "00","min_unpadded": "0","sec": "0","year": "2018","mon": "2","mon_padded": "02","mon_abbrev": "Feb","mday": "24","mday_padded": "24","yday": "54","isdst": "0","epoch": "1519531200","pretty": "10:00 PM CST on February 24, 2018","civil": "10:00 PM","month_name": "February","month_name_abbrev": "Feb","weekday_name": "Saturday","weekday_name_night": "Saturday Night","weekday_name_abbrev": "Sat","weekday_name_unlang": "Saturday","weekday_name_night_unlang": "Saturday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "45", "metric": "7"},
        "dewpoint": {"english": "43", "metric": "6"},
        "condition": "Chance of Rain",
        "icon": "chancerain",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_chancerain.gif",
        "fctcode": "12",
        "sky": "100",
        "wspd": {"english": "15", "metric": "24"},
        "wdir": {"dir": "SSE", "degrees": "149"},
        "wx": "Few Showers",
        "uvi": "0",
        "humidity": "94",
        "windchill": {"english": "38", "metric": "3"},
        "heatindex": {"english": "-9999", "metric": "-9999"},
        "feelslike": {"english": "38", "metric": "3"},
        "qpf": {"english": "0.02", "metric": "1"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "32",
        "mslp": {"english": "29.52", "metric": "1000"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "23","hour_padded": "23","min": "00","min_unpadded": "0","sec": "0","year": "2018","mon": "2","mon_padded": "02","mon_abbrev": "Feb","mday": "24","mday_padded": "24","yday": "54","isdst": "0","epoch": "1519534800","pretty": "11:00 PM CST on February 24, 2018","civil": "11:00 PM","month_name": "February","month_name_abbrev": "Feb","weekday_name": "Saturday","weekday_name_night": "Saturday Night","weekday_name_abbrev": "Sat","weekday_name_unlang": "Saturday","weekday_name_night_unlang": "Saturday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "47", "metric": "8"},
        "dewpoint": {"english": "45", "metric": "7"},
        "condition": "Chance of Rain",
        "icon": "chancerain",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_chancerain.gif",
        "fctcode": "12",
        "sky": "100",
        "wspd": {"english": "14", "metric": "23"},
        "wdir": {"dir": "S", "degrees": "171"},
        "wx": "Showers",
        "uvi": "0",
        "humidity": "95",
        "windchill": {"english": "40", "metric": "5"},
        "heatindex": {"english": "-9999", "metric": "-9999"},
        "feelslike": {"english": "40", "metric": "5"},
        "qpf": {"english": "0.16", "metric": "4"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "66",
        "mslp": {"english": "29.46", "metric": "998"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "0","hour_padded": "00","min": "00","min_unpadded": "0","sec": "0","year": "2018","mon": "2","mon_padded": "02","mon_abbrev": "Feb","mday": "25","mday_padded": "25","yday": "55","isdst": "0","epoch": "1519538400","pretty": "12:00 AM CST on February 25, 2018","civil": "12:00 AM","month_name": "February","month_name_abbrev": "Feb","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "47", "metric": "8"},
        "dewpoint": {"english": "46", "metric": "8"},
        "condition": "Rain",
        "icon": "rain",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_rain.gif",
        "fctcode": "13",
        "sky": "100",
        "wspd": {"english": "14", "metric": "23"},
        "wdir": {"dir": "SSW", "degrees": "210"},
        "wx": "Rain",
        "uvi": "0",
        "humidity": "96",
        "windchill": {"english": "40", "metric": "5"},
        "heatindex": {"english": "-9999", "metric": "-9999"},
        "feelslike": {"english": "40", "metric": "5"},
        "qpf": {"english": "0.03", "metric": "1"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "73",
        "mslp": {"english": "29.44", "metric": "997"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "1","hour_padded": "01","min": "00","min_unpadded": "0","sec": "0","year": "2018","mon": "2","mon_padded": "02","mon_abbrev": "Feb","mday": "25","mday_padded": "25","yday": "55","isdst": "0","epoch": "1519542000","pretty": "1:00 AM CST on February 25, 2018","civil": "1:00 AM","month_name": "February","month_name_abbrev": "Feb","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "46", "metric": "8"},
        "dewpoint": {"english": "46", "metric": "8"},
        "condition": "Chance of Rain",
        "icon": "chancerain",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_chancerain.gif",
        "fctcode": "12",
        "sky": "98",
        "wspd": {"english": "20", "metric": "32"},
        "wdir": {"dir": "WSW", "degrees": "237"},
        "wx": "Showers/Wind",
        "uvi": "0",
        "humidity": "99",
        "windchill": {"english": "39", "metric": "4"},
        "heatindex": {"english": "-9999", "metric": "-9999"},
        "feelslike": {"english": "39", "metric": "4"},
        "qpf": {"english": "0.01", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "47",
        "mslp": {"english": "29.46", "metric": "998"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "2","hour_padded": "02","min": "00","min_unpadded": "0","sec": "0","year": "2018","mon": "2","mon_padded": "02","mon_abbrev": "Feb","mday": "25","mday_padded": "25","yday": "55","isdst": "0","epoch": "1519545600","pretty": "2:00 AM CST on February 25, 2018","civil": "2:00 AM","month_name": "February","month_name_abbrev": "Feb","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "40", "metric": "4"},
        "dewpoint": {"english": "37", "metric": "3"},
        "condition": "Partly Cloudy",
        "icon": "partlycloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
        "fctcode": "2",
        "sky": "96",
        "wspd": {"english": "22", "metric": "35"},
        "wdir": {"dir": "WSW", "degrees": "250"},
        "wx": "Cloudy/Wind",
        "uvi": "0",
        "humidity": "89",
        "windchill": {"english": "29", "metric": "-2"},
        "heatindex": {"english": "-9999", "metric": "-9999"},
        "feelslike": {"english": "29", "metric": "-2"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "7",
        "mslp": {"english": "29.54", "metric": "1000"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "3","hour_padded": "03","min": "00","min_unpadded": "0","sec": "0","year": "2018","mon": "2","mon_padded": "02","mon_abbrev": "Feb","mday": "25","mday_padded": "25","yday": "55","isdst": "0","epoch": "1519549200","pretty": "3:00 AM CST on February 25, 2018","civil": "3:00 AM","month_name": "February","month_name_abbrev": "Feb","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "36", "metric": "2"},
        "dewpoint": {"english": "31", "metric": "-1"},
        "condition": "Partly Cloudy",
        "icon": "partlycloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
        "fctcode": "2",
        "sky": "92",
        "wspd": {"english": "22", "metric": "35"},
        "wdir": {"dir": "WSW", "degrees": "255"},
        "wx": "Cloudy/Wind",
        "uvi": "0",
        "humidity": "83",
        "windchill": {"english": "24", "metric": "-4"},
        "heatindex": {"english": "-9999", "metric": "-9999"},
        "feelslike": {"english": "24", "metric": "-4"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "5",
        "mslp": {"english": "29.6", "metric": "1002"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "4","hour_padded": "04","min": "00","min_unpadded": "0","sec": "0","year": "2018","mon": "2","mon_padded": "02","mon_abbrev": "Feb","mday": "25","mday_padded": "25","yday": "55","isdst": "0","epoch": "1519552800","pretty": "4:00 AM CST on February 25, 2018","civil": "4:00 AM","month_name": "February","month_name_abbrev": "Feb","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "33", "metric": "1"},
        "dewpoint": {"english": "27", "metric": "-3"},
        "condition": "Partly Cloudy",
        "icon": "partlycloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
        "fctcode": "2",
        "sky": "69",
        "wspd": {"english": "22", "metric": "35"},
        "wdir": {"dir": "WSW", "degrees": "252"},
        "wx": "Mostly Cloudy/Wind",
        "uvi": "0",
        "humidity": "77",
        "windchill": {"english": "22", "metric": "-6"},
        "heatindex": {"english": "-9999", "metric": "-9999"},
        "feelslike": {"english": "22", "metric": "-6"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "4",
        "mslp": {"english": "29.66", "metric": "1004"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "5","hour_padded": "05","min": "00","min_unpadded": "0","sec": "0","year": "2018","mon": "2","mon_padded": "02","mon_abbrev": "Feb","mday": "25","mday_padded": "25","yday": "55","isdst": "0","epoch": "1519556400","pretty": "5:00 AM CST on February 25, 2018","civil": "5:00 AM","month_name": "February","month_name_abbrev": "Feb","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "32", "metric": "0"},
        "dewpoint": {"english": "25", "metric": "-4"},
        "condition": "Partly Cloudy",
        "icon": "partlycloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
        "fctcode": "2",
        "sky": "59",
        "wspd": {"english": "22", "metric": "35"},
        "wdir": {"dir": "WSW", "degrees": "251"},
        "wx": "Partly Cloudy/Wind",
        "uvi": "0",
        "humidity": "76",
        "windchill": {"english": "19", "metric": "-7"},
        "heatindex": {"english": "-9999", "metric": "-9999"},
        "feelslike": {"english": "19", "metric": "-7"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "3",
        "mslp": {"english": "29.71", "metric": "1006"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "6","hour_padded": "06","min": "00","min_unpadded": "0","sec": "0","year": "2018","mon": "2","mon_padded": "02","mon_abbrev": "Feb","mday": "25","mday_padded": "25","yday": "55","isdst": "0","epoch": "1519560000","pretty": "6:00 AM CST on February 25, 2018","civil": "6:00 AM","month_name": "February","month_name_abbrev": "Feb","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "31", "metric": "-1"},
        "dewpoint": {"english": "25", "metric": "-4"},
        "condition": "Partly Cloudy",
        "icon": "partlycloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
        "fctcode": "2",
        "sky": "56",
        "wspd": {"english": "21", "metric": "34"},
        "wdir": {"dir": "WSW", "degrees": "251"},
        "wx": "Partly Cloudy/Wind",
        "uvi": "0",
        "humidity": "76",
        "windchill": {"english": "17", "metric": "-8"},
        "heatindex": {"english": "-9999", "metric": "-9999"},
        "feelslike": {"english": "17", "metric": "-8"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "3",
        "mslp": {"english": "29.75", "metric": "1007"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "7","hour_padded": "07","min": "00","min_unpadded": "0","sec": "0","year": "2018","mon": "2","mon_padded": "02","mon_abbrev": "Feb","mday": "25","mday_padded": "25","yday": "55","isdst": "0","epoch": "1519563600","pretty": "7:00 AM CST on February 25, 2018","civil": "7:00 AM","month_name": "February","month_name_abbrev": "Feb","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "31", "metric": "-1"},
        "dewpoint": {"english": "24", "metric": "-4"},
        "condition": "Partly Cloudy",
        "icon": "partlycloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
        "fctcode": "2",
        "sky": "35",
        "wspd": {"english": "20", "metric": "32"},
        "wdir": {"dir": "WSW", "degrees": "251"},
        "wx": "Partly Cloudy/Wind",
        "uvi": "0",
        "humidity": "74",
        "windchill": {"english": "18", "metric": "-8"},
        "heatindex": {"english": "-9999", "metric": "-9999"},
        "feelslike": {"english": "18", "metric": "-8"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "3",
        "mslp": {"english": "29.79", "metric": "1009"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "8","hour_padded": "08","min": "00","min_unpadded": "0","sec": "0","year": "2018","mon": "2","mon_padded": "02","mon_abbrev": "Feb","mday": "25","mday_padded": "25","yday": "55","isdst": "0","epoch": "1519567200","pretty": "8:00 AM CST on February 25, 2018","civil": "8:00 AM","month_name": "February","month_name_abbrev": "Feb","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "32", "metric": "0"},
        "dewpoint": {"english": "24", "metric": "-4"},
        "condition": "Partly Cloudy",
        "icon": "partlycloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
        "fctcode": "2",
        "sky": "26",
        "wspd": {"english": "20", "metric": "32"},
        "wdir": {"dir": "WSW", "degrees": "250"},
        "wx": "Mostly Sunny/Wind",
        "uvi": "0",
        "humidity": "73",
        "windchill": {"english": "20", "metric": "-7"},
        "heatindex": {"english": "-9999", "metric": "-9999"},
        "feelslike": {"english": "20", "metric": "-7"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "3",
        "mslp": {"english": "29.82", "metric": "1010"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "9","hour_padded": "09","min": "00","min_unpadded": "0","sec": "0","year": "2018","mon": "2","mon_padded": "02","mon_abbrev": "Feb","mday": "25","mday_padded": "25","yday": "55","isdst": "0","epoch": "1519570800","pretty": "9:00 AM CST on February 25, 2018","civil": "9:00 AM","month_name": "February","month_name_abbrev": "Feb","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "34", "metric": "1"},
        "dewpoint": {"english": "24", "metric": "-4"},
        "condition": "Partly Cloudy",
        "icon": "partlycloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
        "fctcode": "2",
        "sky": "17",
        "wspd": {"english": "21", "metric": "34"},
        "wdir": {"dir": "WSW", "degrees": "251"},
        "wx": "Sunny/Wind",
        "uvi": "1",
        "humidity": "66",
        "windchill": {"english": "22", "metric": "-6"},
        "heatindex": {"english": "-9999", "metric": "-9999"},
        "feelslike": {"english": "22", "metric": "-6"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "2",
        "mslp": {"english": "29.85", "metric": "1011"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "10","hour_padded": "10","min": "00","min_unpadded": "0","sec": "0","year": "2018","mon": "2","mon_padded": "02","mon_abbrev": "Feb","mday": "25","mday_padded": "25","yday": "55","isdst": "0","epoch": "1519574400","pretty": "10:00 AM CST on February 25, 2018","civil": "10:00 AM","month_name": "February","month_name_abbrev": "Feb","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "36", "metric": "2"},
        "dewpoint": {"english": "24", "metric": "-4"},
        "condition": "Partly Cloudy",
        "icon": "partlycloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
        "fctcode": "2",
        "sky": "14",
        "wspd": {"english": "20", "metric": "32"},
        "wdir": {"dir": "WSW", "degrees": "250"},
        "wx": "Sunny/Wind",
        "uvi": "2",
        "humidity": "61",
        "windchill": {"english": "25", "metric": "-4"},
        "heatindex": {"english": "-9999", "metric": "-9999"},
        "feelslike": {"english": "25", "metric": "-4"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "1",
        "mslp": {"english": "29.88", "metric": "1012"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "11","hour_padded": "11","min": "00","min_unpadded": "0","sec": "0","year": "2018","mon": "2","mon_padded": "02","mon_abbrev": "Feb","mday": "25","mday_padded": "25","yday": "55","isdst": "0","epoch": "1519578000","pretty": "11:00 AM CST on February 25, 2018","civil": "11:00 AM","month_name": "February","month_name_abbrev": "Feb","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "38", "metric": "3"},
        "dewpoint": {"english": "24", "metric": "-4"},
        "condition": "Partly Cloudy",
        "icon": "partlycloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
        "fctcode": "2",
        "sky": "3",
        "wspd": {"english": "20", "metric": "32"},
        "wdir": {"dir": "WSW", "degrees": "249"},
        "wx": "Sunny/Wind",
        "uvi": "3",
        "humidity": "56",
        "windchill": {"english": "27", "metric": "-3"},
        "heatindex": {"english": "-9999", "metric": "-9999"},
        "feelslike": {"english": "27", "metric": "-3"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "0",
        "mslp": {"english": "29.9", "metric": "1013"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "12","hour_padded": "12","min": "00","min_unpadded": "0","sec": "0","year": "2018","mon": "2","mon_padded": "02","mon_abbrev": "Feb","mday": "25","mday_padded": "25","yday": "55","isdst": "0","epoch": "1519581600","pretty": "12:00 PM CST on February 25, 2018","civil": "12:00 PM","month_name": "February","month_name_abbrev": "Feb","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "40", "metric": "4"},
        "dewpoint": {"english": "23", "metric": "-5"},
        "condition": "Partly Cloudy",
        "icon": "partlycloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
        "fctcode": "2",
        "sky": "1",
        "wspd": {"english": "20", "metric": "32"},
        "wdir": {"dir": "WSW", "degrees": "244"},
        "wx": "Sunny/Wind",
        "uvi": "3",
        "humidity": "51",
        "windchill": {"english": "29", "metric": "-1"},
        "heatindex": {"english": "-9999", "metric": "-9999"},
        "feelslike": {"english": "29", "metric": "-1"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "0",
        "mslp": {"english": "29.91", "metric": "1013"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "13","hour_padded": "13","min": "00","min_unpadded": "0","sec": "0","year": "2018","mon": "2","mon_padded": "02","mon_abbrev": "Feb","mday": "25","mday_padded": "25","yday": "55","isdst": "0","epoch": "1519585200","pretty": "1:00 PM CST on February 25, 2018","civil": "1:00 PM","month_name": "February","month_name_abbrev": "Feb","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "42", "metric": "6"},
        "dewpoint": {"english": "23", "metric": "-5"},
        "condition": "Partly Cloudy",
        "icon": "partlycloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
        "fctcode": "2",
        "sky": "0",
        "wspd": {"english": "20", "metric": "32"},
        "wdir": {"dir": "WSW", "degrees": "247"},
        "wx": "Sunny/Wind",
        "uvi": "3",
        "humidity": "47",
        "windchill": {"english": "34", "metric": "1"},
        "heatindex": {"english": "-9999", "metric": "-9999"},
        "feelslike": {"english": "34", "metric": "1"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "0",
        "mslp": {"english": "29.93", "metric": "1014"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "14","hour_padded": "14","min": "00","min_unpadded": "0","sec": "0","year": "2018","mon": "2","mon_padded": "02","mon_abbrev": "Feb","mday": "25","mday_padded": "25","yday": "55","isdst": "0","epoch": "1519588800","pretty": "2:00 PM CST on February 25, 2018","civil": "2:00 PM","month_name": "February","month_name_abbrev": "Feb","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "42", "metric": "6"},
        "dewpoint": {"english": "23", "metric": "-5"},
        "condition": "Partly Cloudy",
        "icon": "partlycloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
        "fctcode": "2",
        "sky": "0",
        "wspd": {"english": "20", "metric": "32"},
        "wdir": {"dir": "WSW", "degrees": "250"},
        "wx": "Sunny/Wind",
        "uvi": "2",
        "humidity": "46",
        "windchill": {"english": "34", "metric": "1"},
        "heatindex": {"english": "-9999", "metric": "-9999"},
        "feelslike": {"english": "34", "metric": "1"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "0",
        "mslp": {"english": "29.94", "metric": "1014"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "15","hour_padded": "15","min": "00","min_unpadded": "0","sec": "0","year": "2018","mon": "2","mon_padded": "02","mon_abbrev": "Feb","mday": "25","mday_padded": "25","yday": "55","isdst": "0","epoch": "1519592400","pretty": "3:00 PM CST on February 25, 2018","civil": "3:00 PM","month_name": "February","month_name_abbrev": "Feb","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "43", "metric": "6"},
        "dewpoint": {"english": "23", "metric": "-5"},
        "condition": "Clear",
        "icon": "clear",
        "icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
        "fctcode": "1",
        "sky": "0",
        "wspd": {"english": "19", "metric": "31"},
        "wdir": {"dir": "WSW", "degrees": "248"},
        "wx": "Sunny",
        "uvi": "1",
        "humidity": "45",
        "windchill": {"english": "34", "metric": "1"},
        "heatindex": {"english": "-9999", "metric": "-9999"},
        "feelslike": {"english": "34", "metric": "1"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "0",
        "mslp": {"english": "29.95", "metric": "1014"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "16","hour_padded": "16","min": "00","min_unpadded": "0","sec": "0","year": "2018","mon": "2","mon_padded": "02","mon_abbrev": "Feb","mday": "25","mday_padded": "25","yday": "55","isdst": "0","epoch": "1519596000","pretty": "4:00 PM CST on February 25, 2018","civil": "4:00 PM","month_name": "February","month_name_abbrev": "Feb","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "43", "metric": "6"},
        "dewpoint": {"english": "23", "metric": "-5"},
        "condition": "Clear",
        "icon": "clear",
        "icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
        "fctcode": "1",
        "sky": "0",
        "wspd": {"english": "18", "metric": "29"},
        "wdir": {"dir": "WSW", "degrees": "249"},
        "wx": "Sunny",
        "uvi": "0",
        "humidity": "45",
        "windchill": {"english": "35", "metric": "1"},
        "heatindex": {"english": "-9999", "metric": "-9999"},
        "feelslike": {"english": "35", "metric": "1"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "0",
        "mslp": {"english": "29.97", "metric": "1015"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "17","hour_padded": "17","min": "00","min_unpadded": "0","sec": "0","year": "2018","mon": "2","mon_padded": "02","mon_abbrev": "Feb","mday": "25","mday_padded": "25","yday": "55","isdst": "0","epoch": "1519599600","pretty": "5:00 PM CST on February 25, 2018","civil": "5:00 PM","month_name": "February","month_name_abbrev": "Feb","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "42", "metric": "6"},
        "dewpoint": {"english": "24", "metric": "-4"},
        "condition": "Clear",
        "icon": "clear",
        "icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
        "fctcode": "1",
        "sky": "2",
        "wspd": {"english": "15", "metric": "24"},
        "wdir": {"dir": "WSW", "degrees": "246"},
        "wx": "Sunny",
        "uvi": "0",
        "humidity": "48",
        "windchill": {"english": "35", "metric": "2"},
        "heatindex": {"english": "-9999", "metric": "-9999"},
        "feelslike": {"english": "35", "metric": "2"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "0",
        "mslp": {"english": "29.99", "metric": "1016"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "18","hour_padded": "18","min": "00","min_unpadded": "0","sec": "0","year": "2018","mon": "2","mon_padded": "02","mon_abbrev": "Feb","mday": "25","mday_padded": "25","yday": "55","isdst": "0","epoch": "1519603200","pretty": "6:00 PM CST on February 25, 2018","civil": "6:00 PM","month_name": "February","month_name_abbrev": "Feb","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "40", "metric": "4"},
        "dewpoint": {"english": "24", "metric": "-4"},
        "condition": "Clear",
        "icon": "clear",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
        "fctcode": "1",
        "sky": "9",
        "wspd": {"english": "13", "metric": "21"},
        "wdir": {"dir": "WSW", "degrees": "242"},
        "wx": "Clear",
        "uvi": "0",
        "humidity": "52",
        "windchill": {"english": "31", "metric": "-0"},
        "heatindex": {"english": "-9999", "metric": "-9999"},
        "feelslike": {"english": "31", "metric": "-0"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "0",
        "mslp": {"english": "30.01", "metric": "1016"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "19","hour_padded": "19","min": "00","min_unpadded": "0","sec": "0","year": "2018","mon": "2","mon_padded": "02","mon_abbrev": "Feb","mday": "25","mday_padded": "25","yday": "55","isdst": "0","epoch": "1519606800","pretty": "7:00 PM CST on February 25, 2018","civil": "7:00 PM","month_name": "February","month_name_abbrev": "Feb","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "40", "metric": "4"},
        "dewpoint": {"english": "25", "metric": "-4"},
        "condition": "Clear",
        "icon": "clear",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
        "fctcode": "1",
        "sky": "8",
        "wspd": {"english": "12", "metric": "19"},
        "wdir": {"dir": "WSW", "degrees": "241"},
        "wx": "Clear",
        "uvi": "0",
        "humidity": "55",
        "windchill": {"english": "32", "metric": "-0"},
        "heatindex": {"english": "-9999", "metric": "-9999"},
        "feelslike": {"english": "32", "metric": "-0"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "0",
        "mslp": {"english": "30.04", "metric": "1017"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "20","hour_padded": "20","min": "00","min_unpadded": "0","sec": "0","year": "2018","mon": "2","mon_padded": "02","mon_abbrev": "Feb","mday": "25","mday_padded": "25","yday": "55","isdst": "0","epoch": "1519610400","pretty": "8:00 PM CST on February 25, 2018","civil": "8:00 PM","month_name": "February","month_name_abbrev": "Feb","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "39", "metric": "4"},
        "dewpoint": {"english": "25", "metric": "-4"},
        "condition": "Clear",
        "icon": "clear",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
        "fctcode": "1",
        "sky": "17",
        "wspd": {"english": "12", "metric": "19"},
        "wdir": {"dir": "WSW", "degrees": "239"},
        "wx": "Clear",
        "uvi": "0",
        "humidity": "58",
        "windchill": {"english": "32", "metric": "-0"},
        "heatindex": {"english": "-9999", "metric": "-9999"},
        "feelslike": {"english": "32", "metric": "-0"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "1",
        "mslp": {"english": "30.06", "metric": "1018"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "21","hour_padded": "21","min": "00","min_unpadded": "0","sec": "0","year": "2018","mon": "2","mon_padded": "02","mon_abbrev": "Feb","mday": "25","mday_padded": "25","yday": "55","isdst": "0","epoch": "1519614000","pretty": "9:00 PM CST on February 25, 2018","civil": "9:00 PM","month_name": "February","month_name_abbrev": "Feb","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "38", "metric": "3"},
        "dewpoint": {"english": "26", "metric": "-3"},
        "condition": "Clear",
        "icon": "clear",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
        "fctcode": "1",
        "sky": "22",
        "wspd": {"english": "11", "metric": "18"},
        "wdir": {"dir": "SW", "degrees": "232"},
        "wx": "Mostly Clear",
        "uvi": "0",
        "humidity": "61",
        "windchill": {"english": "30", "metric": "-1"},
        "heatindex": {"english": "-9999", "metric": "-9999"},
        "feelslike": {"english": "30", "metric": "-1"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "1",
        "mslp": {"english": "30.09", "metric": "1019"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "22","hour_padded": "22","min": "00","min_unpadded": "0","sec": "0","year": "2018","mon": "2","mon_padded": "02","mon_abbrev": "Feb","mday": "25","mday_padded": "25","yday": "55","isdst": "0","epoch": "1519617600","pretty": "10:00 PM CST on February 25, 2018","civil": "10:00 PM","month_name": "February","month_name_abbrev": "Feb","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "37", "metric": "3"},
        "dewpoint": {"english": "26", "metric": "-3"},
        "condition": "Clear",
        "icon": "clear",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
        "fctcode": "1",
        "sky": "21",
        "wspd": {"english": "11", "metric": "18"},
        "wdir": {"dir": "SW", "degrees": "232"},
        "wx": "Mostly Clear",
        "uvi": "0",
        "humidity": "63",
        "windchill": {"english": "30", "metric": "-1"},
        "heatindex": {"english": "-9999", "metric": "-9999"},
        "feelslike": {"english": "30", "metric": "-1"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "1",
        "mslp": {"english": "30.1", "metric": "1019"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "23","hour_padded": "23","min": "00","min_unpadded": "0","sec": "0","year": "2018","mon": "2","mon_padded": "02","mon_abbrev": "Feb","mday": "25","mday_padded": "25","yday": "55","isdst": "0","epoch": "1519621200","pretty": "11:00 PM CST on February 25, 2018","civil": "11:00 PM","month_name": "February","month_name_abbrev": "Feb","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "36", "metric": "2"},
        "dewpoint": {"english": "26", "metric": "-3"},
        "condition": "Clear",
        "icon": "clear",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
        "fctcode": "1",
        "sky": "20",
        "wspd": {"english": "10", "metric": "16"},
        "wdir": {"dir": "WSW", "degrees": "241"},
        "wx": "Mostly Clear",
        "uvi": "0",
        "humidity": "65",
        "windchill": {"english": "28", "metric": "-2"},
        "heatindex": {"english": "-9999", "metric": "-9999"},
        "feelslike": {"english": "28", "metric": "-2"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "2",
        "mslp": {"english": "30.12", "metric": "1020"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "0","hour_padded": "00","min": "00","min_unpadded": "0","sec": "0","year": "2018","mon": "2","mon_padded": "02","mon_abbrev": "Feb","mday": "26","mday_padded": "26","yday": "56","isdst": "0","epoch": "1519624800","pretty": "12:00 AM CST on February 26, 2018","civil": "12:00 AM","month_name": "February","month_name_abbrev": "Feb","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "35", "metric": "2"},
        "dewpoint": {"english": "26", "metric": "-3"},
        "condition": "Clear",
        "icon": "clear",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
        "fctcode": "1",
        "sky": "19",
        "wspd": {"english": "10", "metric": "16"},
        "wdir": {"dir": "WSW", "degrees": "251"},
        "wx": "Clear",
        "uvi": "0",
        "humidity": "69",
        "windchill": {"english": "28", "metric": "-2"},
        "heatindex": {"english": "-9999", "metric": "-9999"},
        "feelslike": {"english": "28", "metric": "-2"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "2",
        "mslp": {"english": "30.13", "metric": "1020"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "1","hour_padded": "01","min": "00","min_unpadded": "0","sec": "0","year": "2018","mon": "2","mon_padded": "02","mon_abbrev": "Feb","mday": "26","mday_padded": "26","yday": "56","isdst": "0","epoch": "1519628400","pretty": "1:00 AM CST on February 26, 2018","civil": "1:00 AM","month_name": "February","month_name_abbrev": "Feb","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "35", "metric": "2"},
        "dewpoint": {"english": "26", "metric": "-3"},
        "condition": "Clear",
        "icon": "clear",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
        "fctcode": "1",
        "sky": "4",
        "wspd": {"english": "9", "metric": "14"},
        "wdir": {"dir": "WSW", "degrees": "256"},
        "wx": "Clear",
        "uvi": "0",
        "humidity": "70",
        "windchill": {"english": "29", "metric": "-2"},
        "heatindex": {"english": "-9999", "metric": "-9999"},
        "feelslike": {"english": "29", "metric": "-2"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "3",
        "mslp": {"english": "30.14", "metric": "1021"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "2","hour_padded": "02","min": "00","min_unpadded": "0","sec": "0","year": "2018","mon": "2","mon_padded": "02","mon_abbrev": "Feb","mday": "26","mday_padded": "26","yday": "56","isdst": "0","epoch": "1519632000","pretty": "2:00 AM CST on February 26, 2018","civil": "2:00 AM","month_name": "February","month_name_abbrev": "Feb","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "33", "metric": "1"},
        "dewpoint": {"english": "25", "metric": "-4"},
        "condition": "Clear",
        "icon": "clear",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
        "fctcode": "1",
        "sky": "2",
        "wspd": {"english": "7", "metric": "11"},
        "wdir": {"dir": "WSW", "degrees": "255"},
        "wx": "Clear",
        "uvi": "0",
        "humidity": "72",
        "windchill": {"english": "28", "metric": "-2"},
        "heatindex": {"english": "-9999", "metric": "-9999"},
        "feelslike": {"english": "28", "metric": "-2"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "3",
        "mslp": {"english": "30.14", "metric": "1021"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "3","hour_padded": "03","min": "00","min_unpadded": "0","sec": "0","year": "2018","mon": "2","mon_padded": "02","mon_abbrev": "Feb","mday": "26","mday_padded": "26","yday": "56","isdst": "0","epoch": "1519635600","pretty": "3:00 AM CST on February 26, 2018","civil": "3:00 AM","month_name": "February","month_name_abbrev": "Feb","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "32", "metric": "0"},
        "dewpoint": {"english": "25", "metric": "-4"},
        "condition": "Clear",
        "icon": "clear",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
        "fctcode": "1",
        "sky": "1",
        "wspd": {"english": "6", "metric": "10"},
        "wdir": {"dir": "WSW", "degrees": "250"},
        "wx": "Clear",
        "uvi": "0",
        "humidity": "74",
        "windchill": {"english": "26", "metric": "-3"},
        "heatindex": {"english": "-9999", "metric": "-9999"},
        "feelslike": {"english": "26", "metric": "-3"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "4",
        "mslp": {"english": "30.15", "metric": "1021"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "4","hour_padded": "04","min": "00","min_unpadded": "0","sec": "0","year": "2018","mon": "2","mon_padded": "02","mon_abbrev": "Feb","mday": "26","mday_padded": "26","yday": "56","isdst": "0","epoch": "1519639200","pretty": "4:00 AM CST on February 26, 2018","civil": "4:00 AM","month_name": "February","month_name_abbrev": "Feb","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "31", "metric": "-1"},
        "dewpoint": {"english": "24", "metric": "-4"},
        "condition": "Clear",
        "icon": "clear",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
        "fctcode": "1",
        "sky": "1",
        "wspd": {"english": "5", "metric": "8"},
        "wdir": {"dir": "WSW", "degrees": "250"},
        "wx": "Clear",
        "uvi": "0",
        "humidity": "77",
        "windchill": {"english": "25", "metric": "-4"},
        "heatindex": {"english": "-9999", "metric": "-9999"},
        "feelslike": {"english": "25", "metric": "-4"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "4",
        "mslp": {"english": "30.16", "metric": "1021"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "5","hour_padded": "05","min": "00","min_unpadded": "0","sec": "0","year": "2018","mon": "2","mon_padded": "02","mon_abbrev": "Feb","mday": "26","mday_padded": "26","yday": "56","isdst": "0","epoch": "1519642800","pretty": "5:00 AM CST on February 26, 2018","civil": "5:00 AM","month_name": "February","month_name_abbrev": "Feb","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "29", "metric": "-2"},
        "dewpoint": {"english": "24", "metric": "-4"},
        "condition": "Clear",
        "icon": "clear",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
        "fctcode": "1",
        "sky": "1",
        "wspd": {"english": "6", "metric": "10"},
        "wdir": {"dir": "WSW", "degrees": "249"},
        "wx": "Clear",
        "uvi": "0",
        "humidity": "81",
        "windchill": {"english": "22", "metric": "-6"},
        "heatindex": {"english": "-9999", "metric": "-9999"},
        "feelslike": {"english": "22", "metric": "-6"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "5",
        "mslp": {"english": "30.17", "metric": "1022"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "6","hour_padded": "06","min": "00","min_unpadded": "0","sec": "0","year": "2018","mon": "2","mon_padded": "02","mon_abbrev": "Feb","mday": "26","mday_padded": "26","yday": "56","isdst": "0","epoch": "1519646400","pretty": "6:00 AM CST on February 26, 2018","civil": "6:00 AM","month_name": "February","month_name_abbrev": "Feb","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "29", "metric": "-2"},
        "dewpoint": {"english": "24", "metric": "-4"},
        "condition": "Clear",
        "icon": "clear",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
        "fctcode": "1",
        "sky": "1",
        "wspd": {"english": "6", "metric": "10"},
        "wdir": {"dir": "WSW", "degrees": "254"},
        "wx": "Clear",
        "uvi": "0",
        "humidity": "83",
        "windchill": {"english": "22", "metric": "-6"},
        "heatindex": {"english": "-9999", "metric": "-9999"},
        "feelslike": {"english": "22", "metric": "-6"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "5",
        "mslp": {"english": "30.19", "metric": "1022"}
        }
    ]
}

export default chicagoData;
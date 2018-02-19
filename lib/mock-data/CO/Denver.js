
const denverData = {
  "response": {
  "version":"0.1",
  "termsofService":"http://www.wunderground.com/weather/api/d/terms.html",
  "features": {
  "forecast": 1
  ,
  "conditions": 1
  ,
  "forecast10day": 1
  ,
  "hourly": 1
  }
    }
  , "current_observation": {
        "image": {
        "url":"http://icons.wxug.com/graphics/wu2/logo_130x80.png",
        "title":"Weather Underground",
        "link":"http://www.wunderground.com"
        },
        "display_location": {
        "full":"Denver, CO",
        "city":"Denver",
        "state":"CO",
        "state_name":"Colorado",
        "country":"US",
        "country_iso3166":"US",
        "zip":"80201",
        "magic":"1",
        "wmo":"99999",
        "latitude":"39.74000168",
        "longitude":"-104.98000336",
        "elevation":"1598.1"
        },
        "observation_location": {
        "full":"Capitol Hill, Denver, Colorado",
        "city":"Capitol Hill, Denver",
        "state":"Colorado",
        "country":"US",
        "country_iso3166":"US",
        "latitude":"39.734711",
        "longitude":"-104.977921",
        "elevation":"5331 ft"
        },
        "estimated": {
        },
        "station_id":"KCODENVE218",
        "observation_time":"Last Updated on February 18, 4:57 PM MST",
        "observation_time_rfc822":"Sun, 18 Feb 2018 16:57:51 -0700",
        "observation_epoch":"1518998271",
        "local_time_rfc822":"Sun, 18 Feb 2018 16:57:59 -0700",
        "local_epoch":"1518998279",
        "local_tz_short":"MST",
        "local_tz_long":"America/Denver",
        "local_tz_offset":"-0700",
        "weather":"Clear",
        "temperature_string":"66.6 F (19.2 C)",
        "temp_f":66.6,
        "temp_c":19.2,
        "relative_humidity":"19%",
        "wind_string":"From the South at 2.0 MPH Gusting to 4.9 MPH",
        "wind_dir":"South",
        "wind_degrees":186,
        "wind_mph":2.0,
        "wind_gust_mph":"4.9",
        "wind_kph":3.2,
        "wind_gust_kph":"7.9",
        "pressure_mb":"991",
        "pressure_in":"29.27",
        "pressure_trend":"+",
        "dewpoint_string":"23 F (-5 C)",
        "dewpoint_f":23,
        "dewpoint_c":-5,
        "heat_index_string":"NA",
        "heat_index_f":"NA",
        "heat_index_c":"NA",
        "windchill_string":"NA",
        "windchill_f":"NA",
        "windchill_c":"NA",
        "feelslike_string":"66.6 F (19.2 C)",
        "feelslike_f":"66.6",
        "feelslike_c":"19.2",
        "visibility_mi":"10.0",
        "visibility_km":"16.1",
        "solarradiation":"28",
        "UV":"0.0","precip_1hr_string":"0.00 in ( 0 mm)",
        "precip_1hr_in":"0.00",
        "precip_1hr_metric":" 0",
        "precip_today_string":"0.00 in (0 mm)",
        "precip_today_in":"0.00",
        "precip_today_metric":"0",
        "icon":"clear",
        "icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
        "forecast_url":"http://www.wunderground.com/US/CO/Denver.html",
        "history_url":"http://www.wunderground.com/weatherstation/WXDailyHistory.asp?ID=KCODENVE218",
        "ob_url":"http://www.wunderground.com/cgi-bin/findweather/getForecast?query=39.734711,-104.977921",
        "nowcast":""
    }
        ,
    "forecast":{
        "txt_forecast": {
        "date":"3:29 PM MST",
        "forecastday": [
        {
        "period":0,
        "icon":"clear",
        "icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
        "title":"Sunday",
        "fcttext":"Mainly clear. Lows overnight in the low 20s.",
        "fcttext_metric":"Mostly clear. Low -5C.",
        "pop":"20"
        }
        ,
        {
        "period":1,
        "icon":"nt_clear",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
        "title":"Sunday Night",
        "fcttext":"Clear to partly cloudy. Low 22F. S winds shifting to NNE at 10 to 15 mph.",
        "fcttext_metric":"A few passing clouds. Low near -5C. S winds shifting to NNE at 15 to 25 km/h.",
        "pop":"20"
        }
        ,
        {
        "period":2,
        "icon":"snow",
        "icon_url":"http://icons.wxug.com/i/c/k/snow.gif",
        "title":"Monday",
        "fcttext":"Cloudy with snow showers developing during the afternoon. Much colder. High around 30F. Winds NNE at 10 to 20 mph. Chance of snow 40%.",
        "fcttext_metric":"Cloudy skies with afternoon snow showers. Much colder. High -1C. Winds NNE at 15 to 30 km/h. Chance of snow 40%.",
        "pop":"40"
        }
        ,
        {
        "period":3,
        "icon":"nt_snow",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_snow.gif",
        "title":"Monday Night",
        "fcttext":"Snow in the evening will transition to snow showers overnight. Low 7F. Winds NNE at 10 to 15 mph. Chance of snow 70%. 1 to 3 inches of snow expected.",
        "fcttext_metric":"Snow in the evening will give way to lingering snow showers overnight. Low -14C. Winds NNE at 15 to 25 km/h. Chance of snow 70%. 3-7cm of snow expected.",
        "pop":"70"
        }
        ,
        {
        "period":4,
        "icon":"cloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/cloudy.gif",
        "title":"Tuesday",
        "fcttext":"Cloudy. A few flurries or snow showers possible. High near 20F. Winds NE at 5 to 10 mph.",
        "fcttext_metric":"Cloudy skies. A few flurries or snow showers possible. High -7C. Winds NE at 10 to 15 km/h.",
        "pop":"20"
        }
        ,
        {
        "period":5,
        "icon":"nt_chancesnow",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_chancesnow.gif",
        "title":"Tuesday Night",
        "fcttext":"Scattered snow flurries and snow showers before midnight. Becoming partly cloudy later. Low 6F. Winds N at 5 to 10 mph. Chance of snow 30%.",
        "fcttext_metric":"On and off snow showers early. Breaks in the overcast later. Low -14C. Winds N at 10 to 15 km/h. Chance of snow 30%.",
        "pop":"30"
        }
        ,
        {
        "period":6,
        "icon":"clear",
        "icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
        "title":"Wednesday",
        "fcttext":"Sunshine. High 28F. Winds N at 5 to 10 mph.",
        "fcttext_metric":"Sunshine. High -2C. Winds N at 10 to 15 km/h.",
        "pop":"10"
        }
        ,
        {
        "period":7,
        "icon":"nt_partlycloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
        "title":"Wednesday Night",
        "fcttext":"Some clouds early will give way to generally clear conditions overnight. Low 13F. Winds light and variable.",
        "fcttext_metric":"Partly cloudy skies. Low -11C. Winds light and variable.",
        "pop":"0"
        }
        ,
        {
        "period":8,
        "icon":"clear",
        "icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
        "title":"Thursday",
        "fcttext":"Sunny along with a few clouds. High around 35F. Winds NNE at 10 to 15 mph.",
        "fcttext_metric":"Sunny along with a few clouds. High 2C. Winds NNE at 10 to 15 km/h.",
        "pop":"0"
        }
        ,
        {
        "period":9,
        "icon":"nt_partlycloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
        "title":"Thursday Night",
        "fcttext":"Some clouds early will give way to generally clear conditions overnight. Low 17F. Winds light and variable.",
        "fcttext_metric":"Some clouds early will give way to generally clear conditions overnight. Low -8C. Winds light and variable.",
        "pop":"0"
        }
        ,
        {
        "period":10,
        "icon":"clear",
        "icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
        "title":"Friday",
        "fcttext":"Except for a few afternoon clouds, mainly sunny. High 39F. Winds NNE at 10 to 15 mph.",
        "fcttext_metric":"Sunshine in the morning followed by cloudy skies during the afternoon. High 4C. Winds NNE at 10 to 15 km/h.",
        "pop":"20"
        }
        ,
        {
        "period":11,
        "icon":"nt_partlycloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
        "title":"Friday Night",
        "fcttext":"A few clouds from time to time. Low around 20F. Winds W at 5 to 10 mph.",
        "fcttext_metric":"A few clouds from time to time. Low -7C. Winds W at 10 to 15 km/h.",
        "pop":"20"
        }
        ,
        {
        "period":12,
        "icon":"partlycloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
        "title":"Saturday",
        "fcttext":"Partly cloudy. High around 45F. Winds WNW at 5 to 10 mph.",
        "fcttext_metric":"Intervals of clouds and sunshine. High 7C. Winds WNW at 10 to 15 km/h.",
        "pop":"10"
        }
        ,
        {
        "period":13,
        "icon":"nt_partlycloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
        "title":"Saturday Night",
        "fcttext":"Partly cloudy. Low around 25F. Winds WSW at 5 to 10 mph.",
        "fcttext_metric":"A few clouds. Low -4C. Winds WSW at 10 to 15 km/h.",
        "pop":"10"
        }
        ,
        {
        "period":14,
        "icon":"partlycloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
        "title":"Sunday",
        "fcttext":"Partly cloudy skies. High 43F. Winds WNW at 10 to 15 mph.",
        "fcttext_metric":"Partly cloudy. High 6C. Winds WNW at 15 to 25 km/h.",
        "pop":"0"
        }
        ,
        {
        "period":15,
        "icon":"nt_partlycloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
        "title":"Sunday Night",
        "fcttext":"Partly cloudy skies. Low 23F. Winds SW at 5 to 10 mph.",
        "fcttext_metric":"Some clouds early will give way to generally clear conditions overnight. Low near -5C. Winds WSW at 10 to 15 km/h.",
        "pop":"10"
        }
        ,
        {
        "period":16,
        "icon":"clear",
        "icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
        "title":"Monday",
        "fcttext":"Mostly sunny skies. High 48F. Winds W at 5 to 10 mph.",
        "fcttext_metric":"Plentiful sunshine. High 9C. Winds W at 10 to 15 km/h.",
        "pop":"0"
        }
        ,
        {
        "period":17,
        "icon":"nt_clear",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
        "title":"Monday Night",
        "fcttext":"Clear skies. Low 27F. Winds WSW at 5 to 10 mph.",
        "fcttext_metric":"A mostly clear sky. Low -3C. Winds WSW at 10 to 15 km/h.",
        "pop":"0"
        }
        ,
        {
        "period":18,
        "icon":"clear",
        "icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
        "title":"Tuesday",
        "fcttext":"Sunny. High 52F. Winds W at 5 to 10 mph.",
        "fcttext_metric":"A mainly sunny sky. High 11C. Winds WNW at 10 to 15 km/h.",
        "pop":"0"
        }
        ,
        {
        "period":19,
        "icon":"nt_clear",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
        "title":"Tuesday Night",
        "fcttext":"Mostly clear skies. Low 28F. Winds W at 5 to 10 mph.",
        "fcttext_metric":"Mostly clear skies. Low -2C. Winds W at 10 to 15 km/h.",
        "pop":"10"
        }
        ]
        },
        "simpleforecast": {
        "forecastday": [
        {"date":{
    "epoch":"1519005600",
    "pretty":"7:00 PM MST on February 18, 2018",
    "day":18,
    "month":2,
    "year":2018,
    "yday":48,
    "hour":19,
    "min":"00",
    "sec":0,
    "isdst":"0",
    "monthname":"February",
    "monthname_short":"Feb",
    "weekday_short":"Sun",
    "weekday":"Sunday",
    "ampm":"PM",
    "tz_short":"MST",
    "tz_long":"America/Denver"
},
        "period":1,
        "high": {
        "fahrenheit":"67",
        "celsius":"19"
        },
        "low": {
        "fahrenheit":"22",
        "celsius":"-6"
        },
        "conditions":"Clear",
        "icon":"clear",
        "icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
        "skyicon":"",
        "pop":20,
        "qpf_allday": {
        "in": 0.00,
        "mm": 0
        },
        "qpf_day": {
        "in": null,
        "mm": null
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
        "in": null,
        "cm": null
        },
        "snow_night": {
        "in": 0.0,
        "cm": 0.0
        },
        "maxwind": {
        "mph": 22,
        "kph": 35,
        "dir": "WSW",
        "degrees": 0
        },
        "avewind": {
        "mph": 12,
        "kph": 19,
        "dir": "SW",
        "degrees": 0
        },
        "avehumidity": 24,
        "maxhumidity": 44,
        "minhumidity": 10
        }
        ,
        {"date":{
    "epoch":"1519092000",
    "pretty":"7:00 PM MST on February 19, 2018",
    "day":19,
    "month":2,
    "year":2018,
    "yday":49,
    "hour":19,
    "min":"00",
    "sec":0,
    "isdst":"0",
    "monthname":"February",
    "monthname_short":"Feb",
    "weekday_short":"Mon",
    "weekday":"Monday",
    "ampm":"PM",
    "tz_short":"MST",
    "tz_long":"America/Denver"
},
        "period":2,
        "high": {
        "fahrenheit":"30",
        "celsius":"-1"
        },
        "low": {
        "fahrenheit":"7",
        "celsius":"-14"
        },
        "conditions":"Snow Showers",
        "icon":"snow",
        "icon_url":"http://icons.wxug.com/i/c/k/snow.gif",
        "skyicon":"",
        "pop":40,
        "qpf_allday": {
        "in": 0.13,
        "mm": 3
        },
        "qpf_day": {
        "in": 0.03,
        "mm": 1
        },
        "qpf_night": {
        "in": 0.10,
        "mm": 3
        },
        "snow_allday": {
        "in": 1.7,
        "cm": 4.3
        },
        "snow_day": {
        "in": 0.3,
        "cm": 0.8
        },
        "snow_night": {
        "in": 1.4,
        "cm": 3.6
        },
        "maxwind": {
        "mph": 20,
        "kph": 32,
        "dir": "NNE",
        "degrees": 16
        },
        "avewind": {
        "mph": 15,
        "kph": 24,
        "dir": "NNE",
        "degrees": 16
        },
        "avehumidity": 72,
        "maxhumidity": 84,
        "minhumidity": 46
        }
        ,
        {"date":{
    "epoch":"1519178400",
    "pretty":"7:00 PM MST on February 20, 2018",
    "day":20,
    "month":2,
    "year":2018,
    "yday":50,
    "hour":19,
    "min":"00",
    "sec":0,
    "isdst":"0",
    "monthname":"February",
    "monthname_short":"Feb",
    "weekday_short":"Tue",
    "weekday":"Tuesday",
    "ampm":"PM",
    "tz_short":"MST",
    "tz_long":"America/Denver"
},
        "period":3,
        "high": {
        "fahrenheit":"20",
        "celsius":"-7"
        },
        "low": {
        "fahrenheit":"6",
        "celsius":"-14"
        },
        "conditions":"Overcast",
        "icon":"cloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/cloudy.gif",
        "skyicon":"",
        "pop":20,
        "qpf_allday": {
        "in": 0.02,
        "mm": 1
        },
        "qpf_day": {
        "in": 0.00,
        "mm": 0
        },
        "qpf_night": {
        "in": 0.02,
        "mm": 1
        },
        "snow_allday": {
        "in": 0.4,
        "cm": 1.0
        },
        "snow_day": {
        "in": 0.0,
        "cm": 0.0
        },
        "snow_night": {
        "in": 0.2,
        "cm": 0.5
        },
        "maxwind": {
        "mph": 10,
        "kph": 16,
        "dir": "NE",
        "degrees": 35
        },
        "avewind": {
        "mph": 9,
        "kph": 14,
        "dir": "NE",
        "degrees": 35
        },
        "avehumidity": 71,
        "maxhumidity": 87,
        "minhumidity": 56
        }
        ,
        {"date":{
    "epoch":"1519264800",
    "pretty":"7:00 PM MST on February 21, 2018",
    "day":21,
    "month":2,
    "year":2018,
    "yday":51,
    "hour":19,
    "min":"00",
    "sec":0,
    "isdst":"0",
    "monthname":"February",
    "monthname_short":"Feb",
    "weekday_short":"Wed",
    "weekday":"Wednesday",
    "ampm":"PM",
    "tz_short":"MST",
    "tz_long":"America/Denver"
},
        "period":4,
        "high": {
        "fahrenheit":"28",
        "celsius":"-2"
        },
        "low": {
        "fahrenheit":"13",
        "celsius":"-11"
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
        "mph": 10,
        "kph": 16,
        "dir": "N",
        "degrees": 0
        },
        "avewind": {
        "mph": 9,
        "kph": 14,
        "dir": "N",
        "degrees": 0
        },
        "avehumidity": 61,
        "maxhumidity": 72,
        "minhumidity": 46
        }
        ,
        {"date":{
    "epoch":"1519351200",
    "pretty":"7:00 PM MST on February 22, 2018",
    "day":22,
    "month":2,
    "year":2018,
    "yday":52,
    "hour":19,
    "min":"00",
    "sec":0,
    "isdst":"0",
    "monthname":"February",
    "monthname_short":"Feb",
    "weekday_short":"Thu",
    "weekday":"Thursday",
    "ampm":"PM",
    "tz_short":"MST",
    "tz_long":"America/Denver"
},
        "period":5,
        "high": {
        "fahrenheit":"35",
        "celsius":"2"
        },
        "low": {
        "fahrenheit":"17",
        "celsius":"-8"
        },
        "conditions":"Clear",
        "icon":"clear",
        "icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
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
        "mph": 15,
        "kph": 24,
        "dir": "NNE",
        "degrees": 22
        },
        "avewind": {
        "mph": 10,
        "kph": 16,
        "dir": "NNE",
        "degrees": 22
        },
        "avehumidity": 55,
        "maxhumidity": 65,
        "minhumidity": 39
        }
        ,
        {"date":{
    "epoch":"1519437600",
    "pretty":"7:00 PM MST on February 23, 2018",
    "day":23,
    "month":2,
    "year":2018,
    "yday":53,
    "hour":19,
    "min":"00",
    "sec":0,
    "isdst":"0",
    "monthname":"February",
    "monthname_short":"Feb",
    "weekday_short":"Fri",
    "weekday":"Friday",
    "ampm":"PM",
    "tz_short":"MST",
    "tz_long":"America/Denver"
},
        "period":6,
        "high": {
        "fahrenheit":"39",
        "celsius":"4"
        },
        "low": {
        "fahrenheit":"20",
        "celsius":"-7"
        },
        "conditions":"Clear",
        "icon":"clear",
        "icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
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
        "mph": 15,
        "kph": 24,
        "dir": "NNE",
        "degrees": 15
        },
        "avewind": {
        "mph": 10,
        "kph": 16,
        "dir": "NNE",
        "degrees": 15
        },
        "avehumidity": 56,
        "maxhumidity": 68,
        "minhumidity": 41
        }
        ,
        {"date":{
    "epoch":"1519524000",
    "pretty":"7:00 PM MST on February 24, 2018",
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
    "tz_short":"MST",
    "tz_long":"America/Denver"
},
        "period":7,
        "high": {
        "fahrenheit":"45",
        "celsius":"7"
        },
        "low": {
        "fahrenheit":"25",
        "celsius":"-4"
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
        "mph": 10,
        "kph": 16,
        "dir": "WNW",
        "degrees": 295
        },
        "avewind": {
        "mph": 9,
        "kph": 14,
        "dir": "WNW",
        "degrees": 295
        },
        "avehumidity": 48,
        "maxhumidity": 66,
        "minhumidity": 29
        }
        ,
        {"date":{
    "epoch":"1519610400",
    "pretty":"7:00 PM MST on February 25, 2018",
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
    "tz_short":"MST",
    "tz_long":"America/Denver"
},
        "period":8,
        "high": {
        "fahrenheit":"43",
        "celsius":"6"
        },
        "low": {
        "fahrenheit":"23",
        "celsius":"-5"
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
        "mph": 15,
        "kph": 24,
        "dir": "WNW",
        "degrees": 284
        },
        "avewind": {
        "mph": 10,
        "kph": 16,
        "dir": "WNW",
        "degrees": 284
        },
        "avehumidity": 41,
        "maxhumidity": 52,
        "minhumidity": 28
        }
        ,
        {"date":{
    "epoch":"1519696800",
    "pretty":"7:00 PM MST on February 26, 2018",
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
    "tz_short":"MST",
    "tz_long":"America/Denver"
},
        "period":9,
        "high": {
        "fahrenheit":"48",
        "celsius":"9"
        },
        "low": {
        "fahrenheit":"27",
        "celsius":"-3"
        },
        "conditions":"Clear",
        "icon":"clear",
        "icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
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
        "mph": 10,
        "kph": 16,
        "dir": "W",
        "degrees": 269
        },
        "avewind": {
        "mph": 9,
        "kph": 14,
        "dir": "W",
        "degrees": 269
        },
        "avehumidity": 39,
        "maxhumidity": 52,
        "minhumidity": 24
        }
        ,
        {"date":{
    "epoch":"1519783200",
    "pretty":"7:00 PM MST on February 27, 2018",
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
    "tz_short":"MST",
    "tz_long":"America/Denver"
},
        "period":10,
        "high": {
        "fahrenheit":"52",
        "celsius":"11"
        },
        "low": {
        "fahrenheit":"28",
        "celsius":"-2"
        },
        "conditions":"Clear",
        "icon":"clear",
        "icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
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
        "mph": 10,
        "kph": 16,
        "dir": "W",
        "degrees": 281
        },
        "avewind": {
        "mph": 9,
        "kph": 14,
        "dir": "W",
        "degrees": 281
        },
        "avehumidity": 42,
        "maxhumidity": 56,
        "minhumidity": 26
        }
        ]
        }
    }
        ,
    "hourly_forecast": [
        {
        "FCTTIME": {
        "hour": "17","hour_padded": "17","min": "00","min_unpadded": "0","sec": "0","year": "2018","mon": "2","mon_padded": "02","mon_abbrev": "Feb","mday": "18","mday_padded": "18","yday": "48","isdst": "0","epoch": "1518998400","pretty": "5:00 PM MST on February 18, 2018","civil": "5:00 PM","month_name": "February","month_name_abbrev": "Feb","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "62", "metric": "17"},
        "dewpoint": {"english": "10", "metric": "-12"},
        "condition": "Clear",
        "icon": "clear",
        "icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
        "fctcode": "1",
        "sky": "12",
        "wspd": {"english": "11", "metric": "18"},
        "wdir": {"dir": "S", "degrees": "189"},
        "wx": "Sunny",
        "uvi": "0",
        "humidity": "12",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "-9999", "metric": "-9999"},
        "feelslike": {"english": "62", "metric": "17"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "0",
        "mslp": {"english": "29.33", "metric": "993"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "18","hour_padded": "18","min": "00","min_unpadded": "0","sec": "0","year": "2018","mon": "2","mon_padded": "02","mon_abbrev": "Feb","mday": "18","mday_padded": "18","yday": "48","isdst": "0","epoch": "1519002000","pretty": "6:00 PM MST on February 18, 2018","civil": "6:00 PM","month_name": "February","month_name_abbrev": "Feb","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "58", "metric": "14"},
        "dewpoint": {"english": "12", "metric": "-11"},
        "condition": "Clear",
        "icon": "clear",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
        "fctcode": "1",
        "sky": "10",
        "wspd": {"english": "10", "metric": "16"},
        "wdir": {"dir": "S", "degrees": "179"},
        "wx": "Clear",
        "uvi": "0",
        "humidity": "16",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "-9999", "metric": "-9999"},
        "feelslike": {"english": "58", "metric": "14"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "0",
        "mslp": {"english": "29.35", "metric": "994"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "19","hour_padded": "19","min": "00","min_unpadded": "0","sec": "0","year": "2018","mon": "2","mon_padded": "02","mon_abbrev": "Feb","mday": "18","mday_padded": "18","yday": "48","isdst": "0","epoch": "1519005600","pretty": "7:00 PM MST on February 18, 2018","civil": "7:00 PM","month_name": "February","month_name_abbrev": "Feb","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "54", "metric": "12"},
        "dewpoint": {"english": "14", "metric": "-10"},
        "condition": "Clear",
        "icon": "clear",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
        "fctcode": "1",
        "sky": "9",
        "wspd": {"english": "11", "metric": "18"},
        "wdir": {"dir": "S", "degrees": "187"},
        "wx": "Clear",
        "uvi": "0",
        "humidity": "20",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "-9999", "metric": "-9999"},
        "feelslike": {"english": "54", "metric": "12"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "0",
        "mslp": {"english": "29.37", "metric": "995"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "20","hour_padded": "20","min": "00","min_unpadded": "0","sec": "0","year": "2018","mon": "2","mon_padded": "02","mon_abbrev": "Feb","mday": "18","mday_padded": "18","yday": "48","isdst": "0","epoch": "1519009200","pretty": "8:00 PM MST on February 18, 2018","civil": "8:00 PM","month_name": "February","month_name_abbrev": "Feb","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "48", "metric": "9"},
        "dewpoint": {"english": "17", "metric": "-8"},
        "condition": "Clear",
        "icon": "clear",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
        "fctcode": "1",
        "sky": "0",
        "wspd": {"english": "11", "metric": "18"},
        "wdir": {"dir": "S", "degrees": "190"},
        "wx": "Clear",
        "uvi": "0",
        "humidity": "28",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "-9999", "metric": "-9999"},
        "feelslike": {"english": "48", "metric": "9"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "0",
        "mslp": {"english": "29.38", "metric": "995"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "21","hour_padded": "21","min": "00","min_unpadded": "0","sec": "0","year": "2018","mon": "2","mon_padded": "02","mon_abbrev": "Feb","mday": "18","mday_padded": "18","yday": "48","isdst": "0","epoch": "1519012800","pretty": "9:00 PM MST on February 18, 2018","civil": "9:00 PM","month_name": "February","month_name_abbrev": "Feb","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "46", "metric": "8"},
        "dewpoint": {"english": "18", "metric": "-8"},
        "condition": "Clear",
        "icon": "clear",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
        "fctcode": "1",
        "sky": "0",
        "wspd": {"english": "9", "metric": "14"},
        "wdir": {"dir": "S", "degrees": "183"},
        "wx": "Clear",
        "uvi": "0",
        "humidity": "32",
        "windchill": {"english": "42", "metric": "6"},
        "heatindex": {"english": "-9999", "metric": "-9999"},
        "feelslike": {"english": "42", "metric": "6"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "0",
        "mslp": {"english": "29.42", "metric": "996"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "22","hour_padded": "22","min": "00","min_unpadded": "0","sec": "0","year": "2018","mon": "2","mon_padded": "02","mon_abbrev": "Feb","mday": "18","mday_padded": "18","yday": "48","isdst": "0","epoch": "1519016400","pretty": "10:00 PM MST on February 18, 2018","civil": "10:00 PM","month_name": "February","month_name_abbrev": "Feb","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "43", "metric": "6"},
        "dewpoint": {"english": "18", "metric": "-8"},
        "condition": "Clear",
        "icon": "clear",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
        "fctcode": "1",
        "sky": "1",
        "wspd": {"english": "10", "metric": "16"},
        "wdir": {"dir": "E", "degrees": "81"},
        "wx": "Clear",
        "uvi": "0",
        "humidity": "37",
        "windchill": {"english": "37", "metric": "3"},
        "heatindex": {"english": "-9999", "metric": "-9999"},
        "feelslike": {"english": "37", "metric": "3"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "0",
        "mslp": {"english": "29.46", "metric": "998"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "23","hour_padded": "23","min": "00","min_unpadded": "0","sec": "0","year": "2018","mon": "2","mon_padded": "02","mon_abbrev": "Feb","mday": "18","mday_padded": "18","yday": "48","isdst": "0","epoch": "1519020000","pretty": "11:00 PM MST on February 18, 2018","civil": "11:00 PM","month_name": "February","month_name_abbrev": "Feb","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "40", "metric": "4"},
        "dewpoint": {"english": "19", "metric": "-7"},
        "condition": "Clear",
        "icon": "clear",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
        "fctcode": "1",
        "sky": "5",
        "wspd": {"english": "12", "metric": "19"},
        "wdir": {"dir": "N", "degrees": "2"},
        "wx": "Clear",
        "uvi": "0",
        "humidity": "44",
        "windchill": {"english": "32", "metric": "-0"},
        "heatindex": {"english": "-9999", "metric": "-9999"},
        "feelslike": {"english": "32", "metric": "-0"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "2",
        "mslp": {"english": "29.51", "metric": "999"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "0","hour_padded": "00","min": "00","min_unpadded": "0","sec": "0","year": "2018","mon": "2","mon_padded": "02","mon_abbrev": "Feb","mday": "19","mday_padded": "19","yday": "49","isdst": "0","epoch": "1519023600","pretty": "12:00 AM MST on February 19, 2018","civil": "12:00 AM","month_name": "February","month_name_abbrev": "Feb","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "39", "metric": "4"},
        "dewpoint": {"english": "20", "metric": "-7"},
        "condition": "Clear",
        "icon": "clear",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
        "fctcode": "1",
        "sky": "17",
        "wspd": {"english": "11", "metric": "18"},
        "wdir": {"dir": "N", "degrees": "3"},
        "wx": "Clear",
        "uvi": "0",
        "humidity": "46",
        "windchill": {"english": "32", "metric": "0"},
        "heatindex": {"english": "-9999", "metric": "-9999"},
        "feelslike": {"english": "32", "metric": "0"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "2",
        "mslp": {"english": "29.55", "metric": "1001"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "1","hour_padded": "01","min": "00","min_unpadded": "0","sec": "0","year": "2018","mon": "2","mon_padded": "02","mon_abbrev": "Feb","mday": "19","mday_padded": "19","yday": "49","isdst": "0","epoch": "1519027200","pretty": "1:00 AM MST on February 19, 2018","civil": "1:00 AM","month_name": "February","month_name_abbrev": "Feb","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "38", "metric": "3"},
        "dewpoint": {"english": "21", "metric": "-6"},
        "condition": "Partly Cloudy",
        "icon": "partlycloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
        "fctcode": "2",
        "sky": "31",
        "wspd": {"english": "10", "metric": "16"},
        "wdir": {"dir": "N", "degrees": "353"},
        "wx": "Partly Cloudy",
        "uvi": "0",
        "humidity": "51",
        "windchill": {"english": "30", "metric": "-1"},
        "heatindex": {"english": "-9999", "metric": "-9999"},
        "feelslike": {"english": "30", "metric": "-1"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "3",
        "mslp": {"english": "29.57", "metric": "1001"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "2","hour_padded": "02","min": "00","min_unpadded": "0","sec": "0","year": "2018","mon": "2","mon_padded": "02","mon_abbrev": "Feb","mday": "19","mday_padded": "19","yday": "49","isdst": "0","epoch": "1519030800","pretty": "2:00 AM MST on February 19, 2018","civil": "2:00 AM","month_name": "February","month_name_abbrev": "Feb","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "34", "metric": "1"},
        "dewpoint": {"english": "22", "metric": "-6"},
        "condition": "Partly Cloudy",
        "icon": "partlycloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
        "fctcode": "2",
        "sky": "56",
        "wspd": {"english": "11", "metric": "18"},
        "wdir": {"dir": "N", "degrees": "358"},
        "wx": "Partly Cloudy",
        "uvi": "0",
        "humidity": "60",
        "windchill": {"english": "25", "metric": "-4"},
        "heatindex": {"english": "-9999", "metric": "-9999"},
        "feelslike": {"english": "25", "metric": "-4"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "20",
        "mslp": {"english": "29.59", "metric": "1002"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "3","hour_padded": "03","min": "00","min_unpadded": "0","sec": "0","year": "2018","mon": "2","mon_padded": "02","mon_abbrev": "Feb","mday": "19","mday_padded": "19","yday": "49","isdst": "0","epoch": "1519034400","pretty": "3:00 AM MST on February 19, 2018","civil": "3:00 AM","month_name": "February","month_name_abbrev": "Feb","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "31", "metric": "-1"},
        "dewpoint": {"english": "22", "metric": "-6"},
        "condition": "Mostly Cloudy",
        "icon": "mostlycloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_mostlycloudy.gif",
        "fctcode": "3",
        "sky": "64",
        "wspd": {"english": "10", "metric": "16"},
        "wdir": {"dir": "N", "degrees": "11"},
        "wx": "Mostly Cloudy",
        "uvi": "0",
        "humidity": "69",
        "windchill": {"english": "22", "metric": "-6"},
        "heatindex": {"english": "-9999", "metric": "-9999"},
        "feelslike": {"english": "22", "metric": "-6"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "24",
        "mslp": {"english": "29.6", "metric": "1002"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "4","hour_padded": "04","min": "00","min_unpadded": "0","sec": "0","year": "2018","mon": "2","mon_padded": "02","mon_abbrev": "Feb","mday": "19","mday_padded": "19","yday": "49","isdst": "0","epoch": "1519038000","pretty": "4:00 AM MST on February 19, 2018","civil": "4:00 AM","month_name": "February","month_name_abbrev": "Feb","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "29", "metric": "-2"},
        "dewpoint": {"english": "21", "metric": "-6"},
        "condition": "Mostly Cloudy",
        "icon": "mostlycloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_mostlycloudy.gif",
        "fctcode": "3",
        "sky": "69",
        "wspd": {"english": "10", "metric": "16"},
        "wdir": {"dir": "NNE", "degrees": "33"},
        "wx": "Mostly Cloudy",
        "uvi": "0",
        "humidity": "73",
        "windchill": {"english": "19", "metric": "-7"},
        "heatindex": {"english": "-9999", "metric": "-9999"},
        "feelslike": {"english": "19", "metric": "-7"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "24",
        "mslp": {"english": "29.61", "metric": "1003"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "5","hour_padded": "05","min": "00","min_unpadded": "0","sec": "0","year": "2018","mon": "2","mon_padded": "02","mon_abbrev": "Feb","mday": "19","mday_padded": "19","yday": "49","isdst": "0","epoch": "1519041600","pretty": "5:00 AM MST on February 19, 2018","civil": "5:00 AM","month_name": "February","month_name_abbrev": "Feb","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "27", "metric": "-3"},
        "dewpoint": {"english": "20", "metric": "-7"},
        "condition": "Mostly Cloudy",
        "icon": "mostlycloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_mostlycloudy.gif",
        "fctcode": "3",
        "sky": "71",
        "wspd": {"english": "9", "metric": "14"},
        "wdir": {"dir": "NE", "degrees": "48"},
        "wx": "Mostly Cloudy",
        "uvi": "0",
        "humidity": "74",
        "windchill": {"english": "18", "metric": "-8"},
        "heatindex": {"english": "-9999", "metric": "-9999"},
        "feelslike": {"english": "18", "metric": "-8"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "22",
        "mslp": {"english": "29.62", "metric": "1003"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "6","hour_padded": "06","min": "00","min_unpadded": "0","sec": "0","year": "2018","mon": "2","mon_padded": "02","mon_abbrev": "Feb","mday": "19","mday_padded": "19","yday": "49","isdst": "0","epoch": "1519045200","pretty": "6:00 AM MST on February 19, 2018","civil": "6:00 AM","month_name": "February","month_name_abbrev": "Feb","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "26", "metric": "-3"},
        "dewpoint": {"english": "19", "metric": "-7"},
        "condition": "Overcast",
        "icon": "cloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_cloudy.gif",
        "fctcode": "4",
        "sky": "89",
        "wspd": {"english": "9", "metric": "14"},
        "wdir": {"dir": "NE", "degrees": "40"},
        "wx": "Cloudy",
        "uvi": "0",
        "humidity": "77",
        "windchill": {"english": "18", "metric": "-8"},
        "heatindex": {"english": "-9999", "metric": "-9999"},
        "feelslike": {"english": "18", "metric": "-8"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "19",
        "mslp": {"english": "29.65", "metric": "1004"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "7","hour_padded": "07","min": "00","min_unpadded": "0","sec": "0","year": "2018","mon": "2","mon_padded": "02","mon_abbrev": "Feb","mday": "19","mday_padded": "19","yday": "49","isdst": "0","epoch": "1519048800","pretty": "7:00 AM MST on February 19, 2018","civil": "7:00 AM","month_name": "February","month_name_abbrev": "Feb","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "25", "metric": "-4"},
        "dewpoint": {"english": "18", "metric": "-8"},
        "condition": "Overcast",
        "icon": "cloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/cloudy.gif",
        "fctcode": "4",
        "sky": "89",
        "wspd": {"english": "10", "metric": "16"},
        "wdir": {"dir": "NNE", "degrees": "31"},
        "wx": "Cloudy",
        "uvi": "0",
        "humidity": "77",
        "windchill": {"english": "15", "metric": "-10"},
        "heatindex": {"english": "-9999", "metric": "-9999"},
        "feelslike": {"english": "15", "metric": "-10"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "13",
        "mslp": {"english": "29.66", "metric": "1004"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "8","hour_padded": "08","min": "00","min_unpadded": "0","sec": "0","year": "2018","mon": "2","mon_padded": "02","mon_abbrev": "Feb","mday": "19","mday_padded": "19","yday": "49","isdst": "0","epoch": "1519052400","pretty": "8:00 AM MST on February 19, 2018","civil": "8:00 AM","month_name": "February","month_name_abbrev": "Feb","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "23", "metric": "-5"},
        "dewpoint": {"english": "19", "metric": "-7"},
        "condition": "Overcast",
        "icon": "cloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/cloudy.gif",
        "fctcode": "4",
        "sky": "86",
        "wspd": {"english": "10", "metric": "16"},
        "wdir": {"dir": "NE", "degrees": "43"},
        "wx": "Cloudy",
        "uvi": "0",
        "humidity": "81",
        "windchill": {"english": "13", "metric": "-11"},
        "heatindex": {"english": "-9999", "metric": "-9999"},
        "feelslike": {"english": "13", "metric": "-11"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "11",
        "mslp": {"english": "29.67", "metric": "1005"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "9","hour_padded": "09","min": "00","min_unpadded": "0","sec": "0","year": "2018","mon": "2","mon_padded": "02","mon_abbrev": "Feb","mday": "19","mday_padded": "19","yday": "49","isdst": "0","epoch": "1519056000","pretty": "9:00 AM MST on February 19, 2018","civil": "9:00 AM","month_name": "February","month_name_abbrev": "Feb","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "23", "metric": "-5"},
        "dewpoint": {"english": "19", "metric": "-7"},
        "condition": "Overcast",
        "icon": "cloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/cloudy.gif",
        "fctcode": "4",
        "sky": "90",
        "wspd": {"english": "8", "metric": "13"},
        "wdir": {"dir": "ENE", "degrees": "62"},
        "wx": "Cloudy",
        "uvi": "0",
        "humidity": "83",
        "windchill": {"english": "14", "metric": "-10"},
        "heatindex": {"english": "-9999", "metric": "-9999"},
        "feelslike": {"english": "14", "metric": "-10"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "15",
        "mslp": {"english": "29.65", "metric": "1004"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "10","hour_padded": "10","min": "00","min_unpadded": "0","sec": "0","year": "2018","mon": "2","mon_padded": "02","mon_abbrev": "Feb","mday": "19","mday_padded": "19","yday": "49","isdst": "0","epoch": "1519059600","pretty": "10:00 AM MST on February 19, 2018","civil": "10:00 AM","month_name": "February","month_name_abbrev": "Feb","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "24", "metric": "-4"},
        "dewpoint": {"english": "19", "metric": "-7"},
        "condition": "Overcast",
        "icon": "cloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/cloudy.gif",
        "fctcode": "4",
        "sky": "89",
        "wspd": {"english": "8", "metric": "13"},
        "wdir": {"dir": "ENE", "degrees": "60"},
        "wx": "Cloudy",
        "uvi": "1",
        "humidity": "81",
        "windchill": {"english": "16", "metric": "-9"},
        "heatindex": {"english": "-9999", "metric": "-9999"},
        "feelslike": {"english": "16", "metric": "-9"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "15",
        "mslp": {"english": "29.62", "metric": "1003"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "11","hour_padded": "11","min": "00","min_unpadded": "0","sec": "0","year": "2018","mon": "2","mon_padded": "02","mon_abbrev": "Feb","mday": "19","mday_padded": "19","yday": "49","isdst": "0","epoch": "1519063200","pretty": "11:00 AM MST on February 19, 2018","civil": "11:00 AM","month_name": "February","month_name_abbrev": "Feb","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "25", "metric": "-4"},
        "dewpoint": {"english": "19", "metric": "-7"},
        "condition": "Overcast",
        "icon": "cloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/cloudy.gif",
        "fctcode": "4",
        "sky": "87",
        "wspd": {"english": "10", "metric": "16"},
        "wdir": {"dir": "NE", "degrees": "50"},
        "wx": "Cloudy",
        "uvi": "2",
        "humidity": "77",
        "windchill": {"english": "15", "metric": "-10"},
        "heatindex": {"english": "-9999", "metric": "-9999"},
        "feelslike": {"english": "15", "metric": "-10"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "15",
        "mslp": {"english": "29.58", "metric": "1002"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "12","hour_padded": "12","min": "00","min_unpadded": "0","sec": "0","year": "2018","mon": "2","mon_padded": "02","mon_abbrev": "Feb","mday": "19","mday_padded": "19","yday": "49","isdst": "0","epoch": "1519066800","pretty": "12:00 PM MST on February 19, 2018","civil": "12:00 PM","month_name": "February","month_name_abbrev": "Feb","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "26", "metric": "-3"},
        "dewpoint": {"english": "18", "metric": "-8"},
        "condition": "Overcast",
        "icon": "cloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/cloudy.gif",
        "fctcode": "4",
        "sky": "82",
        "wspd": {"english": "11", "metric": "18"},
        "wdir": {"dir": "NNE", "degrees": "28"},
        "wx": "Cloudy",
        "uvi": "2",
        "humidity": "71",
        "windchill": {"english": "17", "metric": "-9"},
        "heatindex": {"english": "-9999", "metric": "-9999"},
        "feelslike": {"english": "17", "metric": "-9"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "15",
        "mslp": {"english": "29.53", "metric": "1000"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "13","hour_padded": "13","min": "00","min_unpadded": "0","sec": "0","year": "2018","mon": "2","mon_padded": "02","mon_abbrev": "Feb","mday": "19","mday_padded": "19","yday": "49","isdst": "0","epoch": "1519070400","pretty": "1:00 PM MST on February 19, 2018","civil": "1:00 PM","month_name": "February","month_name_abbrev": "Feb","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "28", "metric": "-2"},
        "dewpoint": {"english": "18", "metric": "-8"},
        "condition": "Overcast",
        "icon": "cloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/cloudy.gif",
        "fctcode": "4",
        "sky": "85",
        "wspd": {"english": "12", "metric": "19"},
        "wdir": {"dir": "NNW", "degrees": "347"},
        "wx": "Cloudy",
        "uvi": "2",
        "humidity": "67",
        "windchill": {"english": "18", "metric": "-8"},
        "heatindex": {"english": "-9999", "metric": "-9999"},
        "feelslike": {"english": "18", "metric": "-8"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "15",
        "mslp": {"english": "29.46", "metric": "998"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "14","hour_padded": "14","min": "00","min_unpadded": "0","sec": "0","year": "2018","mon": "2","mon_padded": "02","mon_abbrev": "Feb","mday": "19","mday_padded": "19","yday": "49","isdst": "0","epoch": "1519074000","pretty": "2:00 PM MST on February 19, 2018","civil": "2:00 PM","month_name": "February","month_name_abbrev": "Feb","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "30", "metric": "-1"},
        "dewpoint": {"english": "19", "metric": "-7"},
        "condition": "Mostly Cloudy",
        "icon": "mostlycloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/mostlycloudy.gif",
        "fctcode": "3",
        "sky": "77",
        "wspd": {"english": "14", "metric": "23"},
        "wdir": {"dir": "NNW", "degrees": "341"},
        "wx": "Mostly Cloudy",
        "uvi": "2",
        "humidity": "62",
        "windchill": {"english": "20", "metric": "-7"},
        "heatindex": {"english": "-9999", "metric": "-9999"},
        "feelslike": {"english": "20", "metric": "-7"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "15",
        "mslp": {"english": "29.42", "metric": "996"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "15","hour_padded": "15","min": "00","min_unpadded": "0","sec": "0","year": "2018","mon": "2","mon_padded": "02","mon_abbrev": "Feb","mday": "19","mday_padded": "19","yday": "49","isdst": "0","epoch": "1519077600","pretty": "3:00 PM MST on February 19, 2018","civil": "3:00 PM","month_name": "February","month_name_abbrev": "Feb","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "30", "metric": "-1"},
        "dewpoint": {"english": "19", "metric": "-7"},
        "condition": "Overcast",
        "icon": "cloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/cloudy.gif",
        "fctcode": "4",
        "sky": "83",
        "wspd": {"english": "15", "metric": "24"},
        "wdir": {"dir": "NNW", "degrees": "341"},
        "wx": "Cloudy",
        "uvi": "1",
        "humidity": "63",
        "windchill": {"english": "19", "metric": "-7"},
        "heatindex": {"english": "-9999", "metric": "-9999"},
        "feelslike": {"english": "19", "metric": "-7"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "24",
        "mslp": {"english": "29.42", "metric": "996"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "16","hour_padded": "16","min": "00","min_unpadded": "0","sec": "0","year": "2018","mon": "2","mon_padded": "02","mon_abbrev": "Feb","mday": "19","mday_padded": "19","yday": "49","isdst": "0","epoch": "1519081200","pretty": "4:00 PM MST on February 19, 2018","civil": "4:00 PM","month_name": "February","month_name_abbrev": "Feb","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "27", "metric": "-3"},
        "dewpoint": {"english": "19", "metric": "-7"},
        "condition": "Snow Showers",
        "icon": "snow",
        "icon_url":"http://icons.wxug.com/i/c/k/snow.gif",
        "fctcode": "19",
        "sky": "80",
        "wspd": {"english": "15", "metric": "24"},
        "wdir": {"dir": "NNW", "degrees": "348"},
        "wx": "Few Snow Showers",
        "uvi": "0",
        "humidity": "71",
        "windchill": {"english": "15", "metric": "-10"},
        "heatindex": {"english": "-9999", "metric": "-9999"},
        "feelslike": {"english": "15", "metric": "-10"},
        "qpf": {"english": "0.01", "metric": "0"},
        "snow": {"english": "0.1", "metric": "3"},
        "pop": "33",
        "mslp": {"english": "29.45", "metric": "997"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "17","hour_padded": "17","min": "00","min_unpadded": "0","sec": "0","year": "2018","mon": "2","mon_padded": "02","mon_abbrev": "Feb","mday": "19","mday_padded": "19","yday": "49","isdst": "0","epoch": "1519084800","pretty": "5:00 PM MST on February 19, 2018","civil": "5:00 PM","month_name": "February","month_name_abbrev": "Feb","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "26", "metric": "-3"},
        "dewpoint": {"english": "19", "metric": "-7"},
        "condition": "Snow Showers",
        "icon": "snow",
        "icon_url":"http://icons.wxug.com/i/c/k/snow.gif",
        "fctcode": "19",
        "sky": "82",
        "wspd": {"english": "15", "metric": "24"},
        "wdir": {"dir": "N", "degrees": "357"},
        "wx": "Snow Showers",
        "uvi": "0",
        "humidity": "75",
        "windchill": {"english": "15", "metric": "-10"},
        "heatindex": {"english": "-9999", "metric": "-9999"},
        "feelslike": {"english": "15", "metric": "-10"},
        "qpf": {"english": "0.01", "metric": "0"},
        "snow": {"english": "0.1", "metric": "3"},
        "pop": "35",
        "mslp": {"english": "29.5", "metric": "999"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "18","hour_padded": "18","min": "00","min_unpadded": "0","sec": "0","year": "2018","mon": "2","mon_padded": "02","mon_abbrev": "Feb","mday": "19","mday_padded": "19","yday": "49","isdst": "0","epoch": "1519088400","pretty": "6:00 PM MST on February 19, 2018","civil": "6:00 PM","month_name": "February","month_name_abbrev": "Feb","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "23", "metric": "-5"},
        "dewpoint": {"english": "18", "metric": "-8"},
        "condition": "Snow Showers",
        "icon": "snow",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_snow.gif",
        "fctcode": "19",
        "sky": "90",
        "wspd": {"english": "14", "metric": "23"},
        "wdir": {"dir": "N", "degrees": "1"},
        "wx": "Snow Showers",
        "uvi": "0",
        "humidity": "81",
        "windchill": {"english": "11", "metric": "-12"},
        "heatindex": {"english": "-9999", "metric": "-9999"},
        "feelslike": {"english": "11", "metric": "-12"},
        "qpf": {"english": "0.01", "metric": "0"},
        "snow": {"english": "0.1", "metric": "3"},
        "pop": "39",
        "mslp": {"english": "29.56", "metric": "1001"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "19","hour_padded": "19","min": "00","min_unpadded": "0","sec": "0","year": "2018","mon": "2","mon_padded": "02","mon_abbrev": "Feb","mday": "19","mday_padded": "19","yday": "49","isdst": "0","epoch": "1519092000","pretty": "7:00 PM MST on February 19, 2018","civil": "7:00 PM","month_name": "February","month_name_abbrev": "Feb","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "23", "metric": "-5"},
        "dewpoint": {"english": "17", "metric": "-8"},
        "condition": "Snow Showers",
        "icon": "snow",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_snow.gif",
        "fctcode": "19",
        "sky": "96",
        "wspd": {"english": "13", "metric": "21"},
        "wdir": {"dir": "NNE", "degrees": "13"},
        "wx": "Snow Showers",
        "uvi": "0",
        "humidity": "78",
        "windchill": {"english": "11", "metric": "-12"},
        "heatindex": {"english": "-9999", "metric": "-9999"},
        "feelslike": {"english": "11", "metric": "-12"},
        "qpf": {"english": "0.01", "metric": "0"},
        "snow": {"english": "0.1", "metric": "3"},
        "pop": "48",
        "mslp": {"english": "29.61", "metric": "1003"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "20","hour_padded": "20","min": "00","min_unpadded": "0","sec": "0","year": "2018","mon": "2","mon_padded": "02","mon_abbrev": "Feb","mday": "19","mday_padded": "19","yday": "49","isdst": "0","epoch": "1519095600","pretty": "8:00 PM MST on February 19, 2018","civil": "8:00 PM","month_name": "February","month_name_abbrev": "Feb","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "21", "metric": "-6"},
        "dewpoint": {"english": "16", "metric": "-9"},
        "condition": "Snow",
        "icon": "snow",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_snow.gif",
        "fctcode": "21",
        "sky": "100",
        "wspd": {"english": "12", "metric": "19"},
        "wdir": {"dir": "NNE", "degrees": "17"},
        "wx": "Snow",
        "uvi": "0",
        "humidity": "80",
        "windchill": {"english": "9", "metric": "-13"},
        "heatindex": {"english": "-9999", "metric": "-9999"},
        "feelslike": {"english": "9", "metric": "-13"},
        "qpf": {"english": "0.02", "metric": "1"},
        "snow": {"english": "0.2", "metric": "5"},
        "pop": "67",
        "mslp": {"english": "29.67", "metric": "1005"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "21","hour_padded": "21","min": "00","min_unpadded": "0","sec": "0","year": "2018","mon": "2","mon_padded": "02","mon_abbrev": "Feb","mday": "19","mday_padded": "19","yday": "49","isdst": "0","epoch": "1519099200","pretty": "9:00 PM MST on February 19, 2018","civil": "9:00 PM","month_name": "February","month_name_abbrev": "Feb","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "21", "metric": "-6"},
        "dewpoint": {"english": "16", "metric": "-9"},
        "condition": "Snow",
        "icon": "snow",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_snow.gif",
        "fctcode": "21",
        "sky": "100",
        "wspd": {"english": "9", "metric": "14"},
        "wdir": {"dir": "NNE", "degrees": "19"},
        "wx": "Snow",
        "uvi": "0",
        "humidity": "83",
        "windchill": {"english": "11", "metric": "-12"},
        "heatindex": {"english": "-9999", "metric": "-9999"},
        "feelslike": {"english": "11", "metric": "-12"},
        "qpf": {"english": "0.02", "metric": "1"},
        "snow": {"english": "0.3", "metric": "8"},
        "pop": "61",
        "mslp": {"english": "29.71", "metric": "1006"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "22","hour_padded": "22","min": "00","min_unpadded": "0","sec": "0","year": "2018","mon": "2","mon_padded": "02","mon_abbrev": "Feb","mday": "19","mday_padded": "19","yday": "49","isdst": "0","epoch": "1519102800","pretty": "10:00 PM MST on February 19, 2018","civil": "10:00 PM","month_name": "February","month_name_abbrev": "Feb","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "19", "metric": "-7"},
        "dewpoint": {"english": "15", "metric": "-9"},
        "condition": "Snow Showers",
        "icon": "snow",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_snow.gif",
        "fctcode": "19",
        "sky": "97",
        "wspd": {"english": "9", "metric": "14"},
        "wdir": {"dir": "NNE", "degrees": "16"},
        "wx": "Snow Showers",
        "uvi": "0",
        "humidity": "84",
        "windchill": {"english": "9", "metric": "-13"},
        "heatindex": {"english": "-9999", "metric": "-9999"},
        "feelslike": {"english": "9", "metric": "-13"},
        "qpf": {"english": "0.02", "metric": "1"},
        "snow": {"english": "0.2", "metric": "5"},
        "pop": "53",
        "mslp": {"english": "29.76", "metric": "1008"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "23","hour_padded": "23","min": "00","min_unpadded": "0","sec": "0","year": "2018","mon": "2","mon_padded": "02","mon_abbrev": "Feb","mday": "19","mday_padded": "19","yday": "49","isdst": "0","epoch": "1519106400","pretty": "11:00 PM MST on February 19, 2018","civil": "11:00 PM","month_name": "February","month_name_abbrev": "Feb","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "18", "metric": "-8"},
        "dewpoint": {"english": "14", "metric": "-10"},
        "condition": "Snow Showers",
        "icon": "snow",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_snow.gif",
        "fctcode": "19",
        "sky": "95",
        "wspd": {"english": "8", "metric": "13"},
        "wdir": {"dir": "NNE", "degrees": "19"},
        "wx": "Snow Showers",
        "uvi": "0",
        "humidity": "84",
        "windchill": {"english": "7", "metric": "-14"},
        "heatindex": {"english": "-9999", "metric": "-9999"},
        "feelslike": {"english": "7", "metric": "-14"},
        "qpf": {"english": "0.01", "metric": "0"},
        "snow": {"english": "0.1", "metric": "3"},
        "pop": "50",
        "mslp": {"english": "29.8", "metric": "1009"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "0","hour_padded": "00","min": "00","min_unpadded": "0","sec": "0","year": "2018","mon": "2","mon_padded": "02","mon_abbrev": "Feb","mday": "20","mday_padded": "20","yday": "50","isdst": "0","epoch": "1519110000","pretty": "12:00 AM MST on February 20, 2018","civil": "12:00 AM","month_name": "February","month_name_abbrev": "Feb","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "17", "metric": "-8"},
        "dewpoint": {"english": "13", "metric": "-11"},
        "condition": "Snow Showers",
        "icon": "snow",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_snow.gif",
        "fctcode": "19",
        "sky": "97",
        "wspd": {"english": "10", "metric": "16"},
        "wdir": {"dir": "NNE", "degrees": "22"},
        "wx": "Snow Showers",
        "uvi": "0",
        "humidity": "85",
        "windchill": {"english": "6", "metric": "-15"},
        "heatindex": {"english": "-9999", "metric": "-9999"},
        "feelslike": {"english": "6", "metric": "-15"},
        "qpf": {"english": "0.01", "metric": "0"},
        "snow": {"english": "0.1", "metric": "3"},
        "pop": "47",
        "mslp": {"english": "29.84", "metric": "1011"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "1","hour_padded": "01","min": "00","min_unpadded": "0","sec": "0","year": "2018","mon": "2","mon_padded": "02","mon_abbrev": "Feb","mday": "20","mday_padded": "20","yday": "50","isdst": "0","epoch": "1519113600","pretty": "1:00 AM MST on February 20, 2018","civil": "1:00 AM","month_name": "February","month_name_abbrev": "Feb","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "16", "metric": "-9"},
        "dewpoint": {"english": "12", "metric": "-11"},
        "condition": "Snow Showers",
        "icon": "snow",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_snow.gif",
        "fctcode": "19",
        "sky": "97",
        "wspd": {"english": "11", "metric": "18"},
        "wdir": {"dir": "NNE", "degrees": "19"},
        "wx": "Snow Showers",
        "uvi": "0",
        "humidity": "84",
        "windchill": {"english": "3", "metric": "-16"},
        "heatindex": {"english": "-9999", "metric": "-9999"},
        "feelslike": {"english": "3", "metric": "-16"},
        "qpf": {"english": "0.01", "metric": "0"},
        "snow": {"english": "0.1", "metric": "3"},
        "pop": "44",
        "mslp": {"english": "29.88", "metric": "1012"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "2","hour_padded": "02","min": "00","min_unpadded": "0","sec": "0","year": "2018","mon": "2","mon_padded": "02","mon_abbrev": "Feb","mday": "20","mday_padded": "20","yday": "50","isdst": "0","epoch": "1519117200","pretty": "2:00 AM MST on February 20, 2018","civil": "2:00 AM","month_name": "February","month_name_abbrev": "Feb","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "15", "metric": "-9"},
        "dewpoint": {"english": "10", "metric": "-12"},
        "condition": "Snow Showers",
        "icon": "snow",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_snow.gif",
        "fctcode": "19",
        "sky": "94",
        "wspd": {"english": "12", "metric": "19"},
        "wdir": {"dir": "NNE", "degrees": "21"},
        "wx": "Snow Showers",
        "uvi": "0",
        "humidity": "80",
        "windchill": {"english": "2", "metric": "-16"},
        "heatindex": {"english": "-9999", "metric": "-9999"},
        "feelslike": {"english": "2", "metric": "-16"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.1", "metric": "3"},
        "pop": "39",
        "mslp": {"english": "29.91", "metric": "1013"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "3","hour_padded": "03","min": "00","min_unpadded": "0","sec": "0","year": "2018","mon": "2","mon_padded": "02","mon_abbrev": "Feb","mday": "20","mday_padded": "20","yday": "50","isdst": "0","epoch": "1519120800","pretty": "3:00 AM MST on February 20, 2018","civil": "3:00 AM","month_name": "February","month_name_abbrev": "Feb","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "13", "metric": "-11"},
        "dewpoint": {"english": "8", "metric": "-13"},
        "condition": "Overcast",
        "icon": "cloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_cloudy.gif",
        "fctcode": "4",
        "sky": "96",
        "wspd": {"english": "11", "metric": "18"},
        "wdir": {"dir": "NNE", "degrees": "21"},
        "wx": "Cloudy",
        "uvi": "0",
        "humidity": "79",
        "windchill": {"english": "-1", "metric": "-19"},
        "heatindex": {"english": "-9999", "metric": "-9999"},
        "feelslike": {"english": "-1", "metric": "-19"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "24",
        "mslp": {"english": "29.95", "metric": "1014"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "4","hour_padded": "04","min": "00","min_unpadded": "0","sec": "0","year": "2018","mon": "2","mon_padded": "02","mon_abbrev": "Feb","mday": "20","mday_padded": "20","yday": "50","isdst": "0","epoch": "1519124400","pretty": "4:00 AM MST on February 20, 2018","civil": "4:00 AM","month_name": "February","month_name_abbrev": "Feb","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "11", "metric": "-12"},
        "dewpoint": {"english": "7", "metric": "-14"},
        "condition": "Snow Showers",
        "icon": "snow",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_snow.gif",
        "fctcode": "19",
        "sky": "96",
        "wspd": {"english": "9", "metric": "14"},
        "wdir": {"dir": "NNE", "degrees": "25"},
        "wx": "Few Snow Showers",
        "uvi": "0",
        "humidity": "81",
        "windchill": {"english": "-2", "metric": "-19"},
        "heatindex": {"english": "-9999", "metric": "-9999"},
        "feelslike": {"english": "-2", "metric": "-19"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.1", "metric": "3"},
        "pop": "30",
        "mslp": {"english": "29.99", "metric": "1016"}
        },
    ],
}

export default denverData;
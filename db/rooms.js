// const seed = require('./seed.json')
const maxSensorTemp = 100
const minSensorTemp = -50
const maxSensorHum = 100
const minSensorHum = 0
const maxSensorDew = 40
const minSensorDew = -20
const humidityLimit = 70


function reformatData (data) {
  const newFormat = {}
  data.data.map(room => {
    newFormat[room.id] = {
      'name': defined(room, 'attributes', 'name'),
      'roomUse': defined(room, 'type'),
      'updated-at': defined(room, 'attributes', 'updated-at'),
      'grade': rating(room),
      'generalMsg': generalMessage(room),
      'alertMsg': elertMsg(room),
      'temperature': {
        'value': defined(room, 'readings', 'temperature', 'value'),
        'unit': defined(room, 'readings', 'temperature', 'unit'),
        'timestamp': defined(room, 'readings', 'temperature', 'timestamp'),
        'errorMsg': checkValue(room, 'readings', 'temperature', 'value', minSensorTemp, maxSensorTemp),
        'checklistMsg': tempChecklistMsg(room),
        'tooLow': valueTooLow(room, 'readings', 'temperature', 'value',
          defined(room, 'ratings', 'min_temperature')),
        'tooHigh': valueTooHigh(room, 'readings', 'temperature', 'value',
          defined(room, 'ratings', 'max_temperature'))
      },
      'humidity': {
        'value': defined(room, 'readings', 'humidity', 'value'),
        'unit': defined(room, 'readings', 'humidity', 'unit'),
        'timestamp': defined(room, 'readings', 'humidity', 'timestamp'),
        'errorMsg': checkValue(room, 'readings', 'humidity', 'value', minSensorHum, maxSensorHum),
        'checklistMsg': humidityChecklistMsg(room),
        'tooHigh': valueTooHigh(room, 'readings', 'humidity', 'value', humidityLimit)
      },
      'dewpoint': {
        'value': defined(room, 'readings', 'dewpoint', 'value'),
        'unit': defined(room, 'readings', 'dewpoint', 'unit'),
        'timestamp': defined(room, 'readings', 'dewpoint', 'timestamp'),
        'errorMsg': checkValue(room, 'readings', 'dewpoint', 'value', minSensorDew, maxSensorDew),
        'checklistMsg': dewPointChecklistMsg(room),
        'tooHigh': dewPointTooHigh(room, 'readings', 'dewpoint', 'value')
      }
    }
  })
  return newFormat
}

function defined (room, att1, att2, att3) {
  // checks is the object keys are valid and if it exists in the objects
  // return '' if it doesnt.
  if (att1 && att2 && att3) {
    if (room.hasOwnProperty(att1)) {
      if (room[att1].hasOwnProperty(att2)) {
        if (room[att1][att2].hasOwnProperty(att3)) {
          return room[att1][att2][att3]
        } else { return '' }
      } else { return '' }
    } else { return '' }
  } else if (att1 && att2) {
    if (room.hasOwnProperty(att1)) {
      if (room[att1].hasOwnProperty(att2)) {
        return room[att1][att2]
      } else { return '' }
    } else { return '' }
  } else if (att1) {
    if (room.hasOwnProperty(att1)) {
      return room[att1]
    } else { return '' }
  } else {
    return ''
  }
}

function checkValue (room, att1, att2, att3, lowerLimit, upperLimit) {
  // checks if a value is within the lower and upperLimit
  // return a message if its out of bounds and '' if not.
  const value = defined(room, att1, att2, att3)
  if (typeof value === 'string') {
    return ''
  } else {
    if (value >= lowerLimit && value <= upperLimit) {
      return ''
    } else {
      if (att2 === 'dewpoint') {
        return `There is something wrong with the wet bulb sensor in ${room.attributes.name}`
      }
      return `There is something wrong with the ${att2} sensor in ${room.attributes.name}`
    }
  }
}

function valueTooHigh (room, att1, att2, att3, limit) {
  // checks if a value exceeds the upper limit
  const value = defined(room, att1, att2, att3)
  if (typeof value === 'string') {
    return ''
  } else if (value >= limit) {
    return true
  } else return false
}

function valueTooLow (room, att1, att2, att3, limit) {
  // checks if a value exceeds the lower limit
  const value = defined(room, att1, att2, att3)
  if (typeof value === 'string') {
    return ''
  } else if (value <= limit) {
    return true
  } else return false
}

function rating (room) {
  let totalRating = 100
  const checkTemp = checkValue(room, 'readings', 'temperature', 'value', minSensorTemp, maxSensorTemp)
  const checkHum = checkValue(room, 'readings', 'humidity', 'value', minSensorHum, maxSensorHum)
  const checkDew = checkValue(room, 'readings', 'dewpoint', 'value', minSensorDew, maxSensorDew)
  const tempIsTooHigh = valueTooHigh(room, 'readings', 'temperature', 'value',
    defined(room, 'ratings', 'max_temperature'))
  const tempIsTooLow = valueTooLow(room, 'readings', 'temperature', 'value',
    defined(room, 'ratings', 'min_temperature'))
  const humidityIsTooHigh = valueTooHigh(room, 'readings', 'humidity', 'value', humidityLimit)
  const dewPointIsTooHigh = dewPointTooHigh(room, 'readings', 'dewpoint', 'value')
  // console.log('tempIsTooLow:', tempIsTooLow, 'tempIsTooHigh:', tempIsTooHigh,
    // 'dewPointIsTooHigh:', dewPointIsTooHigh, 'humidityIsTooHigh:', humidityIsTooHigh)
  if (!isEnoughToPerformRating(checkTemp, checkHum, checkDew)) {
    return ''
  } else {
    if (tempIsTooLow) {
      totalRating -= 15
    }
    if (tempIsTooHigh) {
      totalRating -= 15
    }
    if (dewPointIsTooHigh) {
      totalRating -= 40
    }
    if (humidityIsTooHigh) {
      totalRating -= 40
    }
  }
  return grade(totalRating)
}

function grade (totalRating) {
  // console.log(totalRating)
  if (totalRating > 95) {
    return 'A'
  } else if (totalRating >= 75) {
    return 'B'
  } else if (totalRating >= 50) {
    return 'C'
  } else if (totalRating >= 25) {
    return 'D'
  } else if (totalRating <= 25) {
    return 'F'
  }
}

function isEnoughToPerformRating (temp, hum, dew) {
  if (temp !== '' || hum !== '' || dew !== '') {
    return false
  } else return true
}

function dewPointTooHigh (room, att1, att2, att3) {
  const wetBulb = defined(room, att1, att2, att3)
  const dewpoint = dewPointCalc(room)
  // console.log('dewpoint:', dewpoint, 'wetBulb:', wetBulb)
  if (dewpoint < wetBulb || (dewpoint - 2) < wetBulb) {
    return true
  } else { return false }
}

function dewPointCalc (room) {
  const dryBulb = defined(room, 'readings', 'temperature', 'value')
  const humidity = defined(room, 'readings', 'humidity', 'value')
  const L = Math.log(humidity / 100)
  const M = 17.27 * dryBulb
  const N = 237.3 + dryBulb
  const B = (L + (M / N)) / 17.27
  const dewpoint = (237.3 * B) / (1 - B)
  return dewpoint
  // B = (ln(RH / 100) + ((17.27 * T) / (237.3 + T))) / 17.27
  // D = (237.3 * B) / (1 - B)
  // where:
  // T = Air Temperature (Dry Bulb) in Centigrade (C) degrees
  // RH = Relative Humidity in percent (%)
  // B = intermediate value (no units)
  // D = Dewpoint in Centigrade (C) degrees
}
function dewPointChecklistMsg (room) {
  const wetBulb = defined(room, 'readings', 'dewpoint', 'value')
  const dewpoint = dewPointCalc(room)
  const check = checkValue(room, 'readings', 'dewpoint', 'value', minSensorDew, maxSensorDew)
  if (check !== '') {
    return ''
  } else if (dewpoint < wetBulb) {
    return 'Temperature is too close to the dew point!'
  } else if ((dewpoint - 2) < wetBulb) {
    return 'Temperature near the dew point'
  } else { return 'Acceptable dew point' }
}
function humidityChecklistMsg (room) {
  const errorMsg = checkValue(room, 'readings', 'humidity', 'value', minSensorHum, maxSensorHum)
  const check = valueTooHigh(room, 'readings', 'humidity', 'value', humidityLimit)
  if (errorMsg !== '') {
    return ''
  } else if (check) {
    return 'Room humidity is too high'
  } else return 'Comfortable humidity'
}
function tempChecklistMsg (room) {
  const check = checkValue(room, 'readings', 'temperature', 'value', minSensorTemp, maxSensorTemp)
  const valueIsTooLow = valueTooLow(room, 'readings', 'temperature', 'value',
    defined(room, 'ratings', 'min_temperature'))
  const valueIsTooHigh = valueTooHigh(room, 'readings', 'temperature', 'value',
    defined(room, 'ratings', 'max_temperature'))
  const isChildsRoom = childsRoom(room, 'ratings', 'min_temperature')
  if (check !== '') {
    return ''
  } else if (valueIsTooLow && isChildsRoom) {
    return 'Way too cold for children sleeping'
  } else if (valueIsTooLow) {
    return 'Room is too cold'
  } else if (valueIsTooHigh) {
    return 'Temperature too high'
  } return 'Comfortable room temperature'
}

function childsRoom (room, att1, att2) {
  const value = defined(room, 'ratings', 'min_temperature')
  if (value === '') {
    return false
  } else if (value === 21) {
    return true
  } else return false
}

function generalMessage (room) {
  switch (rating(room)) {
    case 'A':
      return 'room is dry, warm and healthy'
    case 'B':
      return 'room is dry but temperature needs to improve'
    case 'C':
      return 'room temperature and humdidity needs to improve'
    case 'D':
      return 'risk of mold'
    default:
      return 'room is in poor condition, risk of mold'
  }
}

function elertMsg (room) {
  let concatMsg = ''
  const name = defined(room, 'attributes', 'name')
  const checkTemp = checkValue(room, 'readings', 'temperature', 'value', minSensorTemp, maxSensorTemp)
  const checkHum = checkValue(room, 'readings', 'humidity', 'value', minSensorHum, maxSensorHum)
  const checkDew = checkValue(room, 'readings', 'dewpoint', 'value', minSensorDew, maxSensorDew)
  const tempIsTooHigh = valueTooHigh(room, 'readings', 'temperature', 'value',
    defined(room, 'ratings', 'max_temperature'))
  const tempIsTooLow = valueTooLow(room, 'readings', 'temperature', 'value',
    defined(room, 'ratings', 'min_temperature'))
  const humidityIsTooHigh = valueTooHigh(room, 'readings', 'humidity', 'value', humidityLimit)
  const dewPointIsTooHigh = dewPointTooHigh(room, 'readings', 'dewpoint', 'value')

  if (checkTemp !== '') {
    concatMsg += `Temp sensor in ${name} is not working. `
  }
  if (checkHum !== '') {
    concatMsg += `Humidity sensor in ${name} is not working. `
  }
  if (checkDew !== '') {
    concatMsg += `Wet bulb sensor in ${name} is not working. `
  }
  if (tempIsTooLow) {
    concatMsg += `Temperature in ${name} is too low. `
  }
  if (tempIsTooHigh) {
    concatMsg += `Temperature in ${name} is too high. `
  }
  if (dewPointIsTooHigh) {
    concatMsg += `Dew point in ${name} is too high. `
  }
  if (humidityIsTooHigh) {
    concatMsg += `Humidity in ${name} is too high.`
  }
  if (concatMsg === '') {
    console.log('CONCAT MSG,', concatMsg)
    return ''
  } else return concatMsg
}

// number = 100
// return '?' unless enough_info_to_perform_rating?
// number -= 15 if too_cold?
// number -= 40 if below_dewpoint?
// rating_letter(number)

//   def rating_letter(number)
//   return 'A' if number > 95
//   return 'B' if number > 75
//   return 'C' if number > 50
//   return 'D' if number > 25
//   'F'
// end

// def enough_info_to_perform_rating?
//   room_type && current?('temperature') && room_type.min_temperature.present? && room_type.max_temperature.present?
// end


module.exports = {
  reformatData
}

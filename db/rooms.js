// const seed = require('./seed.json')

function reformatData (data) {
  const newFormat = {}
  data.data.map(room => {
    newFormat[room.id] = {
      'name': defined(room, 'attributes', 'name'),
      'roomUse': defined(room, 'type'),
      'updated-at': defined(room, 'attributes', 'updated-at'),
      'grade': '',
      'generalMsg': '',
      'alertMsg': '',
      'temperature': {
        'value': defined(room, 'readings', 'temperature', 'value'),
        'unit': defined(room, 'readings', 'temperature', 'unit'),
        'timestamp': defined(room, 'readings', 'temperature', 'timestamp'),
        'errorMsg': checkValue(room, 'readings', 'temperature', 'value', -50, 100),
        'checklistMsg': '',
        'tooLow': valueTooLow(room, 'readings', 'temperature', 'value',
          defined(room, 'ratings', 'min_temperature')),
        'tooHigh': valueTooHigh(room, 'readings', 'temperature', 'value',
          defined(room, 'ratings', 'max_temperature'))
      },
      'humidity': {
        'value': defined(room, 'readings', 'humidity', 'value'),
        'unit': defined(room, 'readings', 'humidity', 'unit'),
        'timestamp': defined(room, 'readings', 'humidity', 'timestamp'),
        'errorMsg': checkValue(room, 'readings', 'humidity', 'value', 0, 100),
        'checklistMsg': '',
        'tooHigh': valueTooHigh(room, 'readings', 'humidity', 'value', 70)
      },
      'dewpoint': {
        'value': defined(room, 'readings', 'dewpoint', 'value'),
        'unit': defined(room, 'readings', 'dewpoint', 'unit'),
        'timestamp': defined(room, 'readings', 'dewpoint', 'timestamp'),
        'errorMsg': checkValue(room, 'readings', 'dewpoint', 'value', -20, 40),
        'checklistMsg': '',
        'tooHigh': dewPointTooHigh(room, 'readings', 'dewpoint', 'value')
      }
    }
  })
  return newFormat
}

function defined (room, att1, att2, att3) {
  // checks is the object keys are valid and if it exists in the objects
  // return '' if it doesnt exist in the object.
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
  // console.log('upperlimit', upperLimit)
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
  const value = defined(room, att1, att2, att3)
  if (typeof value === 'string') {
    return ''
  } else if (value >= limit) {
    return true
  } else return false
}

function valueTooLow (room, att1, att2, att3, limit) {
  const value = defined(room, att1, att2, att3)
  if (typeof value === 'string') {
    return ''
  } else if (value <= limit) {
    return true
  } else return false
}

function ratings () {
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
}

function dewPointTooHigh (room, att1, att2, att3) {
  const dryBulb = defined(room, att1, 'temperature', att3)
  const wetBulb = defined(room, att1, att2, att3)
  const humidity = defined(room, att1, 'humidity', att3)

  const L = Math.log(humidity / 100)
  const M = 17.27 * dryBulb
  const N = 237.3 + dryBulb
  const B = (L + (M / N)) / 17.27
  const dewpoint = (237.3 * B) / (1 - B)

  // B = (ln(RH / 100) + ((17.27 * T) / (237.3 + T))) / 17.27
  // D = (237.3 * B) / (1 - B)
  // where:
  // T = Air Temperature (Dry Bulb) in Centigrade (C) degrees
  // RH = Relative Humidity in percent (%)
  // B = intermediate value (no units)
  // D = Dewpoint in Centigrade (C) degrees

  if (dewpoint < wetBulb || (dewpoint - 2) < wetBulb) {
    return true
  } else { return false }
}

// notification messages
// Comfortable temperature
// Comfortable humidity
// Acceptable dewpoint
// Temp is well above dewpoint
// Room appears healthy, warm, & dry
// Temperature too high
// Humidity too high
// Way too cold for children sleeping
// High relative humidity
// Risk for cold, damp, and mould


module.exports = {
  reformatData
}

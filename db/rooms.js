// const seed = require('./seed.json')

function checkHumidity (data) {
  // console.log(data)
  return data
}

function humudityOutOfBounds (data) {
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
        'errorMsg': checkValue(room, 'readings', 'temperature', 'value'),
        'checklistMsg': '',
        'tooLow': '',
        'tooHigh': ''
      },
      'humidity': {
        'value': defined(room, 'readings', 'humidity', 'value'),
        'unit': defined(room, 'readings', 'humidity', 'unit'),
        'timestamp': defined(room, 'readings', 'humidity', 'timestamp'),
        'errorMsg': checkValue(room, 'readings', 'humidity', 'value'),
        'checklistMsg': '',
        'tooHigh': valueTooHigh(room, 'readings', 'humidity', 'value', 70)
      },
      'dewpoint': {
        'value': defined(room, 'readings', 'dewpoint', 'value'),
        'unit': defined(room, 'readings', 'dewpoint', 'unit'),
        'timestamp': defined(room, 'readings', 'dewpoint', 'timestamp'),
        'errorMsg': '',
        'checklistMsg': '',
        'tooHigh': ''
      }
    }
  })
  return newFormat
}

function defined (room, att1, att2, att3) {
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

function checkValue (room, att1, att2, att3) {
  const value = defined(room, att1, att2, att3)
  if (typeof value === 'string') {
    return ''
  } else {
    if (value >= 0 && value <= 100) {
      return ''
    } else {
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



module.exports = {
  checkHumidity,
  humudityOutOfBounds
}

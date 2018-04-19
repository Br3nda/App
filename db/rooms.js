// const seed = require('./seed.json')

function checkHumidity (data) {
  console.log(data)
  return data
}

function humudityOutOfBounds (data) {
  const lowVals = data.data.filter(room => {
    return room.readings.humidity.value < 0
  })
  const highVals = data.data.filter(room => {
    return room.readings.humidity.value > 100
  })
  const result = lowVals.concat(highVals).map(room => {
    return {
      'id': room.id,
      'name': room.attributes.name,
      'sensorType': 'humidity',
      'errorMsg': 'The humidity sensor reading in ' + room.attributes.name + ' is malfunctioning'
    }
  })
  return result
}

module.exports = {
  checkHumidity,
  humudityOutOfBounds
}

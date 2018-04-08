import test from 'ava'
import rooms from '../../db/rooms'


test(`test 2: if any room humidity is to high,
  it returns a warning message`, t => {
  const testData = require('../../db/seed.json')

  const expected = [
    { 'id': '1',
      'name': `Sandra's desk`,
      'sensorType': 'humidity',
      'warningMsg': `The humidity in Sandra's desk is too high!!`
    },
    { 'id': '2',
      'name': `Janie's room`,
      'sensorType': 'humidity',
      'errorMsg': `The humidity in Janie's room is too high!!`
    }
  ]

  const value = rooms.checkHumidity(testData)
  // rooms.checkHumidity()
  t.deepEqual(value, expected, 'return an array of messages rooms humidities are too high')
})

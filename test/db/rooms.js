import test from 'ava'
import rooms from '../../db/rooms'

test(`test 1: if any room humidity is out of range,
  it returns a message to check the sensor in a room`, t => {
  const testData = {
    'data': [
      {
        'id': '1',
        'type': 'rooms',
        'attributes': {
          'name': `Sandra's desk`
        },
        'readings': {
          'humidity': {
            'value': -7122.0
          }
        }
      },
      {
        'id': '2',
        'type': 'rooms',
        'attributes': {
          'name': `Janie's room`
        },
        'readings': {
          'humidity': {
            'value': 101.0
          }
        }
      },
      {
        'id': '3',
        'type': 'rooms',
        'attributes': {
          'name': `Meghan's room`
        },
        'readings': {
          'humidity': {
            'value': 50.0
          }
        }
      }
    ]
  }

  const expected = [
    { 'id': '1',
      'name': `Sandra's desk`,
      'sensorType': 'humidity',
      'errorMsg': 'the sensor reading is malfunctioning'
    },
    { 'id': '2',
      'name': `Janie's room`,
      'sensorType': 'humidity',
      'errorMsg': 'the sensor reading is malfunctioning'
    }
  ]

  const value = rooms.humudityOutOfBounds(testData)
  // rooms.checkHumidity()
  t.deepEqual(value, expected, 'return an array of rooms with humidity errors')
})

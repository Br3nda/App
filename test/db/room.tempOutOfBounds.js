import test from 'ava'
import rooms from '../../db/rooms'

test.only(`test 3: if any room temperature is out of range,
  it returns a message to check the sensor in a room`, t => {
  const testData = {
    'data': [
      {
        'id': '1',
        'type': 'Office',
        'attributes': {
          'name': `Sandra's desk`
        },
        'ratings': {
          'min_temperature': 18.0,
          'max_temperature': 30.0
        },
        'readings': {
          'dewpoint': {
            'value': -22.0
          },
          'temperature': {
            'value': -100.0
          },
          'humidity': {
            'value': 20.0
          }
        }
      },
      {
        'id': '2',
        'type': 'Adult bedroom',
        'attributes': {
          'name': `Janie's room`
        },
        'ratings': {
          'min_temperature': 18.0,
          'max_temperature': 30.0
        },
        'readings': {
          'dewpoint': {
            'value': 45.0
          },
          'temperature': {
            'value': 101
          },
          'humidity': {
            'value': 50.0
          }
        }
      },
      {
        'id': '3',
        'type': 'Child bedroom',
        'attributes': {
          'name': `Zoe's room`
        },
        'ratings': {
          'min_temperature': 21.0,
          'max_temperature': 30.0
        },
        'readings': {
          'dewpoint': {
            'value': 18.0
          },
          'temperature': {
            'value': 22.0
          },
          'humidity': {
            'value': 50.0
          }
        }
      }
    ]
  }

  const expected = {
    '1': {
      'name': `Sandra's desk`,
      'roomUse': 'Office',
      'temperature': {
        'value': -100.0,
        'errorMsg': `There is something wrong with the temperature sensor in Sandra's desk`,
        'tooHigh': false,
        'tooLow': true
      }
    },
    '2': {
      'name': `Janie's room`,
      'roomUse': 'Adult bedroom',
      'temperature': {
        'value': 101,
        'errorMsg': `There is something wrong with the temperature sensor in Janie's room`,
        'tooHigh': true,
        'tooLow': false
      }
    },
    '3': {
      'name': `Zoe's room`,
      'roomUse': 'Child bedroom',
      'temperature': {
        'value': 22.0,
        'errorMsg': ``,
        'tooHigh': false,
        'tooLow': false
      }
    }
  }

  const value = rooms.reformatData(testData)
  // find the keys of the expected object
  const expectedKeys = Object.keys(expected)
  // map through the keys
  expectedKeys.map(id => {
    // find the keys of the 2nd nested objects
    const idKeys = Object.keys(expected[id])
    // map through these keys
    idKeys.map(key => {
      // if there is another object nested, map through that
      if (typeof expected[id][key] === 'object') {
        const readings = Object.keys(expected[id][key])
        readings.map(reading => {
          console.log(value[id][key][reading], ' = ', expected[id][key][reading])
          t.is(value[id][key][reading], expected[id][key][reading], 'returns ' + reading)
        })
        // else test the values
      } else {
        console.log(value[id][key], ' = ', expected[id][key])
        t.is(value[id][key], expected[id][key], 'returns ' + key)
      }
    })
  })
})

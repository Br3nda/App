import test from 'ava'
import rooms from '../../db/rooms'

test(`test 1: if any room humidity is out of range,
  it returns a message to check the sensor in a room`, t => {
  const testData = {
    'data': [
      {
        'id': '1',
        'type': 'Office',
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
        'type': 'Adult bedroom',
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
        'type': 'Child bedroom',
        'attributes': {
          'name': `Zoe's room`
        },
        'readings': {
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
      'humidity': {
        'value': -7122.0,
        'errorMsg': `There is something wrong with the humidity sensor in Sandra's desk`,
        'tooHigh': false
      }
    },
    '2': {
      'name': `Janie's room`,
      'roomUse': 'Adult bedroom',
      'humidity': {
        'value': 101.0,
        'errorMsg': `There is something wrong with the humidity sensor in Janie's room`,
        'tooHigh': true
      }
    },
    '3': {
      'name': `Zoe's room`,
      'roomUse': 'Child bedroom',
      'humidity': {
        'value': 50.0,
        'errorMsg': ``,
        'tooHigh': false
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
          // console.log(value[id][key][reading], ' = ', expected[id][key][reading])
          t.is(value[id][key][reading], expected[id][key][reading], 'returns ' + reading)
        })
        // else test the values
      } else {
        // console.log(value[id][key], ' = ', expected[id][key])
        t.is(value[id][key], expected[id][key], 'returns ' + key)
      }
    })
  })
})

import test from 'ava'
import rooms from '../../db/rooms'

test(`test 2: if any room dewpoint is out of range,
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
          'dewpoint': {
            'value': -22.0
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
          'dewpoint': {
            'value': 31.0
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
          'dewpoint': {
            'value': 12.0
          }
        }
      }
    ]
  }

  const expected = {
    '1': {
      'name': `Sandra's desk`,
      'roomUse': 'Office',
      'dewpoint': {
        'value': -22.0,
        'errorMsg': `There is something wrong with the dewpoint sensor in Sandra's desk`,
        'tooHigh': false
      }
    },
    '2': {
      'name': `Janie's room`,
      'roomUse': 'Adult bedroom',
      'dewpoint': {
        'value': 31.0,
        'errorMsg': `There is something wrong with the dewpoint sensor in Janie's room`,
        'tooHigh': true
      }
    },
    '3': {
      'name': `Zoe's room`,
      'roomUse': 'Child bedroom',
      'dewpoint': {
        'value': 12.0,
        'errorMsg': ``,
        'tooHigh': false
      }
    }
  }

  const value = rooms.humudityOutOfBounds(testData)
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

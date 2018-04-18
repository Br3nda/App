import test from 'ava'
import rooms from '../../db/rooms'

test(`test 2: if any room wetbulb temp is out of range,
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
          },
          'temperature': {
            'value': 23.5
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
        'readings': {
          'dewpoint': {
            'value': 45.0
          },
          'temperature': {
            'value': 40.0
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
        'readings': {
          'dewpoint': {
            'value': 22.0
          },
          'temperature': {
            'value': 40.0
          },
          'humidity': {
            'value': 50.0
          }
        }
      },
      {
        'id': '4',
        'type': 'Adult bedroom',
        'attributes': {
          'name': `Casper's Room`
        },
        'readings': {
          'dewpoint': {
            'value': 13.1
          },
          'temperature': {
            'value': 15.0
          },
          'humidity': {
            'value': 88.0
          }
        }
      },
      {
        'id': '5',
        'type': 'Child bedroom',
        'attributes': {
          'name': `Snoetshy's Room`
        },
        'readings': {
          'dewpoint': {
            'value': 10.7
          },
          'temperature': {
            'value': 16.0
          },
          'humidity': {
            'value': 70.0
          }
        }
      },
      {
        'id': '6',
        'type': 'Adult bedroom',
        'attributes': {
          'name': `Adrea's Room`
        },
        'readings': {
          'dewpoint': {
            'value': 11.0
          },
          'temperature': {
            'value': 19.0
          },
          'humidity': {
            'value': 60.0
          }
        }
      },
      {
        'id': '7',
        'type': 'Adult bedroom',
        'attributes': {
          'name': `Joann's Room`
        },
        'readings': {
          'dewpoint': {
            'value': 11.6
          },
          'temperature': {
            'value': 21.0
          },
          'humidity': {
            'value': 55.0
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
        'errorMsg': `There is something wrong with the wet bulb sensor in Sandra's desk`,
        'tooHigh': false,
        'checklistMsg': ''
      }
    },
    '2': {
      'name': `Janie's room`,
      'roomUse': 'Adult bedroom',
      'dewpoint': {
        'value': 45.0,
        'errorMsg': `There is something wrong with the wet bulb sensor in Janie's room`,
        'tooHigh': true,
        'checklistMsg': 'Temperature is too close to the dewPoint!'
      }
    },
    '3': {
      'name': `Zoe's room`,
      'roomUse': 'Child bedroom',
      'dewpoint': {
        'value': 22.0,
        'errorMsg': ``,
        'tooHigh': false,
        'checklistMsg': 'Acceptable dewpoint'
      }
    },
    '4': {
      'name': `Casper's Room`,
      'roomUse': 'Adult bedroom',
      'dewpoint': {
        'value': 13.1,
        'errorMsg': ``,
        'tooHigh': true,
        'checklistMsg': 'Temperature is too close to the dewPoint!'
      }
    },
    '5': {
      'name': `Snoetshy's Room`,
      'roomUse': 'Child bedroom',
      'dewpoint': {
        'value': 11.0,
        'errorMsg': ``,
        'tooHigh': true,
        'checklistMsg': 'Temperature near the dewPoint'
      }
    },
    '6': {
      'name': `Adrea's Room`,
      'roomUse': 'Adult bedroom',
      'dewpoint': {
        'value': 11.0,
        'errorMsg': ``,
        'tooHigh': true,
        'checklistMsg': 'Temperature near the dewPoint'
      }
    },
    '7': {
      'name': `Joann's Room`,
      'roomUse': 'Adult bedroom',
      'dewpoint': {
        'value': 11.6,
        'errorMsg': ``,
        'tooHigh': false,
        'checklistMsg': 'Acceptable dewpoint'
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

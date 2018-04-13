import test from 'ava'
import rooms from '../../db/rooms'

test(`test 2: if any room humidity is to high,
  it returns a warning message`, t => {
  const testData = require('../../db/seed.json')

  const expected = {
    '6': {
      'name': `Sandra's desk`,
      'roomUse': 'office',
      'updated-at': '2018-04-06T02:04:45.394Z',
      'grade': 'B',
      'generalMsg': ``,
      'alertMsg': ``,
      'temperature': {
        'value': 23.5,
        'unit': '°C',
        'timestamp': '2018-04-06 02:04:45 UTC',
        'errorMsg': '',
        'checklistMsg': '',
        'tooLow': true,
        'tooHigh': false
      },
      'humidity': {
        'value': 63.0,
        'unit': '%',
        'timestamp': '2018-04-06 02:04:45 UTC',
        'errorMsg': '',
        'checklistMsg': '',
        'tooHigh': true
      },
      'dewpoint': {
        'value': 12.5,
        'unit': '°C',
        'timestamp': '2018-04-06 02:04:45 UTC',
        'errorMsg': '',
        'checklistMsg': '',
        'tooHigh': false
      }
    }
  }

  const value = rooms.checkHumidity(testData)
  // rooms.checkHumidity()
  t.deepEqual(value, expected, 'return an array of messages rooms humidities are too high')
})

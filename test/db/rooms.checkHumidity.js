import test from 'ava'
import rooms from '../../db/rooms'

test(`test 2: if any room humidity is to high,
  it returns a warning message`, t => {
  const testData = require('../../db/seed.json')

  const expected = [
  ]

  const value = rooms.checkHumidity(testData)
  // rooms.checkHumidity()
  t.deepEqual(value, expected, 'return an array of messages rooms humidities are too high')
})

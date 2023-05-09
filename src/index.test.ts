import sleepWithLog from './index'
import { expect, test } from 'vitest'

test('should wait correctly', async () => {
  const TIME = 3000

  const start = Date.now()
  await sleepWithLog({ totalTime: TIME })
  const end = Date.now()
  const duration = end - start
  expect(duration).toBeGreaterThan(TIME)
})

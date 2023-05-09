import timeFormatter from './timeFormatter'
import overrideLastConsoleLine from './overrideLastConsoleLine'

const sleep = (miliseconds: number) => new Promise((resolve) => setTimeout(resolve, miliseconds))

const sleepWithLog = async ({
  totalTime = 3000,
  customMessage = 'Waiting for',
  stepTime = 500,
  finalBreakLine = true,
}) => {
  const FORMATTED_TIME = timeFormatter(totalTime)

  let remainingMiliseconds = totalTime
  let dots = ''

  while (remainingMiliseconds > 0) {
    const stepToWait = remainingMiliseconds < stepTime ? remainingMiliseconds : stepTime
    remainingMiliseconds -= stepTime

    dots.length < 3 ? (dots += '.') : (dots = '')
    const outputMessage = `${customMessage} ${FORMATTED_TIME}${dots.padEnd(4, ' ')}` + finalBreakLine ? '\n' : ''
    overrideLastConsoleLine(outputMessage)

    await sleep(stepToWait)
  }

  process.stdout.write('\n')
}

export default sleepWithLog

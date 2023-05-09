import overrideLastConsoleLine from './overrideLastConsoleLine'
import timeFormatter from './timeFormatter'

const sleep = (miliseconds: number) => new Promise((resolve) => setTimeout(resolve, miliseconds))

const sleepWithLog = async ({
  customMessage = 'Waiting for',
  finalBreakLine = true,
  stepTime = 500,
  totalTime = 3000,
}) => {
  const FORMATTED_TIME = timeFormatter(totalTime)
  const finalCharacter = finalBreakLine ? '\n' : ''
  let remainingMiliseconds = totalTime
  let dots = ''

  while (remainingMiliseconds > 0) {
    const stepToWait = remainingMiliseconds < stepTime ? remainingMiliseconds : stepTime
    remainingMiliseconds -= stepTime

    dots.length < 3 ? (dots += '.') : (dots = '')
    const outputMessage = `${customMessage} ${FORMATTED_TIME}${dots.padEnd(4, ' ')}${finalCharacter}`
    overrideLastConsoleLine(outputMessage)

    await sleep(stepToWait)
  }

  process.stdout.write('\n')
}

export default sleepWithLog

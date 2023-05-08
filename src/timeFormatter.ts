const DISPLAY_UNITS = {
  milliseconds: 'ms',
  seconds: 'sec',
  minutes: 'min',
  hours: 'h',
}

const padNumber = (num: number): string => {
  return num.toString().padStart(2, '0')
}

const timeFormatter = (time: number): string => {
  const parsedTime = new Date(time)

  if (time > 1000 * 60 * 60)
    return `${parsedTime.getHours()}:${padNumber(parsedTime.getMinutes())}:${padNumber(parsedTime.getSeconds())} ${
      DISPLAY_UNITS.hours
    }`
  else if (time > 1000 * 60)
    return `${parsedTime.getMinutes()}:${padNumber(parsedTime.getSeconds())} ${DISPLAY_UNITS.minutes}`
  else if (time > 1000) return `${parsedTime.getSeconds()}.${parsedTime.getMilliseconds()} ${DISPLAY_UNITS.seconds}`
  else return `${time.toFixed(2)} ${DISPLAY_UNITS.milliseconds}`
}

export default timeFormatter

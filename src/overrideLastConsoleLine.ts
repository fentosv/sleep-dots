const overrideLastConsoleLine = (text: string) => {
  const HIDE_CURSOR = '\u001B[?25l'
  process.stdout.write(text + HIDE_CURSOR + '\r')
}

export default overrideLastConsoleLine

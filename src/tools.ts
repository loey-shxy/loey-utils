export const sleep = (ms: number) => {
  return new Promise<void>((resolve) => setTimeout(resolve, ms))
}

export const sleepSync = (ms: number) => {
  const endTime = Date.now() + ms;
  while(1) {
    if (Date.now() > endTime) {
      return
    }
  }
}

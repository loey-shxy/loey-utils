/**
 * @description 实现一个运行池处理多个并发请求
 * @param urls 
 * @param maxConcurrentNum 
 * @returns 
 */
export function runningPool(urls: string[], maxConcurrentNum = 6) {
  const pool = new Set()
  const waitQueue: Function[] = []
  
  const request = url => {
    return new Promise((resolve, reject) => {
      const isFull = pool.size >= maxConcurrentNum
      const fn = function fn() {
        const request = fetch(url)
        request.finally(() => {
          pool.delete(fn)
          const next = waitQueue.shift()
          next && pool.add(next)
          setTimeout(() => next?.())
        })
        request.then(resolve)
        request.catch(reject)
        return request
      }

      if (isFull) {
        waitQueue.push(fn)
      } else {
        pool.add(fn)
        fn()
      }
    })
  }
  
  for (let [index, url] of urls.entries()) {
    request(url).then(res => {
      console.log(res)
    })
  }

}
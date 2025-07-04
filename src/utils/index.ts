function parseTime(timestamp: number){
    return new Date(timestamp).toLocaleString().split(' ')[1]
}

function getValue(arr: [], key: string, value: any, path = ''){
    if (!Array.isArray(arr)) return undefined
    let result = arr.find(o => o[key] === value)
    path.split('.').forEach(k => {
        result = k && result ? result[k] : result
    })
    return result
}

// 节流  短时间内的多次调用只生效第一次
function throttle(fn, time, ...args){
    let timer;
    return ()=>{
        if(!timer){
            fn(...args)
            timer = setTimeout(()=>{
                clearTimeout(timer)
                timer = null
            }, time)
        }
    } 
}

// 节流  短时间内的多次调用只生效第一次
function throttle(fn, time, ...args){
    let timer;
    return ()=>{
        if(!timer){
            fn(...args)
            timer = setTimeout(()=>{
                clearTimeout(timer)
                timer = null
            }, time)
        }
    } 
}

/**
 * 防抖函数
 * @param {Function} fn - 目标函数
 * @param {number} delay - 延迟时间(ms)
 * @param {boolean} immediate - 是否立即执行
 * @returns {Function} 防抖处理后的函数
 */
function debounce(fn, delay = 1000, immediate = false) {
    let timer = null
  
    return function (...args) {
      const context = this
  
      // 清除已有定时器
      if (timer) clearTimeout(timer)
  
      // 立即执行模式
      if (immediate) {
        const callNow = !timer
        timer = setTimeout(() => {
          timer = null
        }, delay)
        if (callNow) fn.apply(context, args)
      }
      // 延迟执行模式
      else {
        timer = setTimeout(() => {
          fn.apply(context, args)
        }, delay)
      }
    }
  }


export { 
    parseTime, 
    getValue,
    throttle,
    debounce
}
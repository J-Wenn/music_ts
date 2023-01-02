//根据不同的环境自动注入,使用判断
let BASE_URL = ''
const TIME_OUT = 8000

if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'http://codercba.com:9002'
} else if (process.env.NODE_ENV === 'development') {
  BASE_URL = 'http://codercba.com:9002'
} else {
  BASE_URL = 'http://wenn.tech'
}

export { BASE_URL, TIME_OUT }

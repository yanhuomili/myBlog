const mysqlConfig = {
  host:'localhost',
  port:'3306',
  database:'myblog',
  user:'root',
  password:'123456'
}

const redisConfig = {
  port:6379,
  host:'127.0.0.1'
}

module.exports= {
  mysqlConfig,
  redisConfig
}
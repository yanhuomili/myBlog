const session = require('express-session')
const redis = require('redis')
const {redisConfig} = require('./mysqlConfig')

const redisClient = redis.createClient(redisConfig.port,redisConfig.host)

redisClient.on('error',err=>{
  console.log(err)
})

const RedisStore = require('connect-redis')(session)

module.exports = {
  redisClient,
  RedisStore
}
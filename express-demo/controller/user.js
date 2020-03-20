const {queryHandler} = require('../mysql/db')

/* controller层面只做数据处理 */
const login = async function(username,password){
  let sql = `select * from user where username = '${username}'`
  let result = await queryHandler(sql)
  result = JSON.parse(JSON.stringify(result))
  return result
}

module.exports = {
  login
}
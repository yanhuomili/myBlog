const mysql = require('mysql')
const {mysqlConfig} = require('./mysqlConfig')
/* 创建连接 */
const db = mysql.createConnection(mysqlConfig)
db.connect(err=>{
  if(err){
    throw err
  }
})

/* 只做语句的执行以及数据的返回 */
const queryHandler = function(sql){
  return new Promise((resolve)=>{
    db.query(sql,(err,result)=>{
      if(err){
        console.log(err,'sql语句执行失败')
        resolve(false)
        return
      }
      resolve(result)
    })
  })
}

module.exports = {
  queryHandler
}
const mysql = require('mysql')
const {mysqlConfig} = require('./db_config')
/* 创建连接 */
const db = mysql.createConnection(mysqlConfig)
db.connect(err=>{
  if(err){
    throw err
  }
})

const queryHandler=function(sql){
  return new Promise((resolve,reject)=>{
    db.query(sql,(err,result)=>{
      if(err){
        console.log(err)
        reject()
        return
      }
      console.log(result,'查询数据')
      resolve(result)
    })
  })
}

module.exports = {
  queryHandler
}
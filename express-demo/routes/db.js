const mysql = require('mysql')
const {mysqlConfig} = require('./mysqlConfig')
/* 创建连接 */
const db = mysql.createConnection(mysqlConfig)
db.connect(err=>{
  if(err){
    throw err
  }
})

/* 增加 */
const createHandler=function(sql){
  return new Promise((resolve,reject)=>{
    db.query(sql,(err,result)=>{
      if(err){
        console.log(err)
        resolve(false)
        return
      }
      console.log(result,'数据插入成功')
      resolve(result)
    })
  })
}

/* 删除 */
const deleteHandler=function(sql){
  return new Promise((resolve,reject)=>{
    db.query(sql,(err,result)=>{
      if(err){
        console.log(err)
        resolve(false)
        return
      }
      console.log(result,'删除成功')
      resolve(result)
    })
  })
}

/* 修改 */
const updateHandler=function(sql){
  return new Promise((resolve,reject)=>{
    db.query(sql,(err,result)=>{
      if(err){
        console.log('更新失败')
        resolve(false)
        return
      }
      console.log(result,'更新成功')
      resolve(result)
    })
  })
}

/* 查询 */
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
  createHandler,
  deleteHandler,
  updateHandler,
  queryHandler
}
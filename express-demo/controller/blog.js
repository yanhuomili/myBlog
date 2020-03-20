const {queryHandler} = require('../mysql/db')

/* controller层面只做数据处理 */
const addArticle = async function(body){
  let sql = `insert into blogs values(${null},'${body.title}','${body.context}',${new Date().getTime()},'李浩华')`
  let result = await queryHandler(sql)
  return result
}
const getArticleList = async function(body){
  let sql = `select * from blogs`
  let result = await queryHandler(sql)
  return result
}

module.exports = {
  addArticle,
  getArticleList
}
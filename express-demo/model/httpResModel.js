class BaseModel {
  constructor(data, message){
    if(typeof data ==='string'){
      message = data
      data = null
    }
    this.data = data
    this.message = message
  }
}

class SuccessModel extends BaseModel {
  constructor(data, message = '请求成功'){
    super(data, message)
    this.code = 0
  }
}

class ErrorModel extends BaseModel {
  constructor(data, message = '请求失败'){
    super(data, message)
    this.code = -1
  }
}

module.exports = {
  SuccessModel,
  ErrorModel
}
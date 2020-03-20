# nodejs 连接数据库

1.安装 mysql 模块

2.配置 mysql 连接参数

3.封装 mysql 操作方法（增、删、改、查）

4.编写 api 5.测试接口进行增删改查

## mysql 增删改查命令踩坑：

1.我们执行增删改查 sql 语句的时候遇到需要操作 varchar 类型的字段时，都需要在包上单引或者双引号,如一下 sql 语句，因为 title 是 varchar 类型，所以它的值需要用引号包住，否则操作数据库会失败

> let sql = `update blogs set title = '更新标题${id}' where id = ${id}`

# 整体项目模型解析

1.www.js createServer 属于项目最底层的封装
2.app.js 是系统级别的设置
3.router 是路由管理层面，只管路由
4.controller 是逻辑层，只关系数据的处理

## 封装返回数据模型

## 封装 controller,业务代码放 controller 里面

## 登录实现,账户密码加密
1.登录完成后将用户信息放到redis中去，需要校验的时候就从req.session里面去取出来，如果登录过期了，session里面的数据就会被清除，用户需要重新登陆
1.安装express-session
2.session redis  将session存在redis内存中
3.登录验证中间件校验登录


## 防攻击处理 xxs

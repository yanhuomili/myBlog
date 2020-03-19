# nodejs 连接数据库

1.安装 mysql 模块

2.配置 mysql 连接参数

3.封装 mysql 操作方法（增、删、改、查）

4.编写 api 5.测试接口进行增删改查

## mysql 增删改查命令踩坑：

1.我们执行增删改查 sql 语句的时候遇到需要操作 varchar 类型的字段时，都需要在包上单引或者双引号,如一下 sql 语句，因为 title 是 varchar 类型，所以它的值需要用引号包住，否则操作数据库会失败

> let sql = `update blogs set title = '更新标题${id}' where id = ${id}`

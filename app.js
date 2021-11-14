let Koa = require('koa')
let app = new Koa()
let routes = require('./controller')
let bodyParser = require('koa-bodyparser')
let rest = require('./rest')

//注册路由
app.use(rest())
app.use(bodyParser())
app.use(routes)

app.listen(3000)
console.log('服务器正在运行')
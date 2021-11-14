const path = require('path')
const fs = require('fs')
const router = require('koa-router')()


const rpath = path.resolve('.')
//获取所有的controller.js
const files = fs.readdirSync(rpath+'/controllers/').filter(f=>f.endsWith('.js'))

//导出文件的对象，注册到路由中
files.forEach(file=>{
    let apis = require(rpath+'/controllers/'+file)
    for (let key in apis){
        //注册get请求
        if(key.startsWith('GET')){
            router.get(key.slice(4),apis[key])
        }
        //注册post请求
        if(key.startsWith('POST')){
            router.post(key.slice(5),apis[key])
        }
    }
})

module.exports = router.routes();
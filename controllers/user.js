const User = require('../services/user')
//添加用户
const addUser = async (ctx,next)=>{
    let userData = ctx.request.body
    console.log('拿到新建用户的数据',userData)
    ctx.rest({
        code:'200',
        msg:'get the user success!'
    })
    await next()
}
//通过微信UNIONID查询某个用户
const searchUserByWeChatID = async (ctx,next)=>{
    let {weChatID} = ctx.request.body
    // console.log(JSON.stringify(ctx.request.body))
    let data = await User.getUserByWeChatID(weChatID)
    // console.log(typeof(data),data)
    if(data.length != 0){
            ctx.rest({
            code:'200',
            msg:'get the phone success!',
            data
        })
    }else{
        ctx.rest({
            code:'-1',
            msg:"找不到该weChatID的用户，请根据这个ID新建一个用户"
        })
    }
    
    await next()
}
//通过ID查询某个用户
const searchUserByID = async (ctx,next)=>{
    let {id} = ctx.request.body
    console.log('查询的ID'+id)
    let data = await User.getUserByID(id)
    ctx.rest({
        code:'200',
        msg:'get the userID success!',
        data
    })
    await next()
}
//新建一个用户数据
const createUser = async (ctx,next)=>{
    let data = ctx.request.body
    let res = await User.createUser(data)
    ctx.rest({
        code:'200',
        res
    })
    await next()
}
//获取所有用户
const getUser = async (ctx,next)=>{
    ctx.rest({
        code:'200',
        data:await User.getUser()
    })
    await next()
}
module.exports = {
    'POST /api/addUser':addUser,
    'POST /api/searchUserByWeChatID':searchUserByWeChatID,
    'POST /api/searchUserByID':searchUserByID,
    'POST /api/createUser':createUser,
    'GET /api/getUser':getUser
}
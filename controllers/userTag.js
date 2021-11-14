const UserTag = require('../services/UserTag')

const addUserTag = async(ctx,next)=>{
    const {request,response} = ctx
    let data = request.body
    let res = await UserTag.addUserTag(data)
    ctx.rest({
        code:'200',
        data:res
    })
    await next()
}

const deleteUserTag = async(ctx,next)=>{
    let {id} = ctx.request.body
    let res = await UserTag.deleteUserTag(id)
    ctx.rest({
        code:'200',
        data:res
    })
    await next()
}

const getUserTag = async(ctx,next)=>{
    let {userID} = ctx.request.body
    let data = await UserTag.getUserTag(userID)
    ctx.rest({
        code:'200',
        data
    })
    await next()
}
module.exports = {
    'POST /api/addUserTag':addUserTag,
    'POST /api/deleteUserTag':deleteUserTag,
    'POST /api/getUserTag':getUserTag
}
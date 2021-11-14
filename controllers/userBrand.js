const UserBrand = require('../services/userBrand')

const addUserBrand = async(ctx,next)=>{
    const {request,response} = ctx
    let data = request.body
    let res = await UserBrand.addUserBrand(data)
    ctx.rest({
        code:'200',
        data:res
    })
    await next()
}

const deleteUserBrand = async(ctx,next)=>{
    let {id} = ctx.request.body
    let res = await UserBrand.deleteUserBrand(id)
    ctx.rest({
        code:'200',
        data:res
    })
    await next()
}

const getUserBrand = async(ctx,next)=>{
    let {userID} = ctx.request.body
    let data = await UserBrand.getUserBrand(userID)
    ctx.rest({
        code:'200',
        data
    })
    await next()
}
module.exports = {
    'POST /api/addUserBrand':addUserBrand,
    'POST /api/deleteUserBrand':deleteUserBrand,
    'POST /api/getUserBrand':getUserBrand
}
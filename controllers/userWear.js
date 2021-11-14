const UserWear = require('../services/userWear')

const addUserWear = async(ctx,next)=>{
    const data = ctx.request.body
    const res = await UserWear.addUserWear(data)
    ctx.rest({
        code:'200',
        data:res
    })
    await next()
}

const deleteUserWear = async(ctx,next)=>{
    const {id} = ctx.request.body
    const res = await UserWear.deleteUserWear(id)
    ctx.rest({
        code:'200',
        data:res
    })
    await next()
}

const updateUserWear = async(ctx,next)=>{
    const data = ctx.request.body
    const res = await UserWear.updateUserWear(data)
    ctx.rest({
        code:'200',
        data:res
    })
    await next()
}

const getUserWear = async(ctx,next)=>{
    const {userID} = ctx.request.body
    const res = await UserWear.getUserWear(userID)
    ctx.rest({
        code:'200',
        data:res
    })
    await next()
}

module.exports = {
    'POST /api/addUserWear':addUserWear,
    'POST /api/deleteUserWear':deleteUserWear,
    'POST /api/updateUserWear ':updateUserWear ,
    'POST /api/getUserWear':getUserWear,
}
const UserCategory = require('../services/userCategory')

//新增用户分类
const addUserCategory = async(ctx,next)=>{
    let data = ctx.request.body
    let res = await UserCategory.createUserCategory(data)
    ctx.rest({
        code:'200',
        res
    })
    await next()
}
//删除用户分类
const deletUserCategory = async(ctx,next)=>{
    let {id} = ctx.request.body
    let res = await UserCategory.deletUserCategory(id)
    ctx.rest({
        code:'200',
        res
    })
    await next()
}
//获取用户分类
const getUserCategory = async(ctx,next)=>{
    let {userID} = ctx.request.body
    let data = await UserCategory.getUserCategory(userID)
    ctx.rest({
        code:'200',
        data
    })
    await next()
}

module.exports = {
    'POST /api/addUserCategory':addUserCategory,
    'POST /api/deletUserCategory':deletUserCategory,
    'POST /api/getUserCategory':getUserCategory
}
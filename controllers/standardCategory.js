const StandardCategory = require('../services/standardCategory')

const addStandardCategory = async(ctx,next)=>{
    const data = ctx.request.body
    const res = await StandardCategory.addStandardCategory(data)
    ctx.rest({
        code:'200',
        data:res
    })
    await next()
}

const getStandardCategory = async(ctx,next)=>{
    const res = await StandardCategory.getStandardCategory()
    ctx.rest({
        code:'200',
        data:res
    })
    await next()
}

module.exports = {
    'POST /api/addStandardCategory':addStandardCategory,
    'GET /api/getStandardCategory':getStandardCategory
}
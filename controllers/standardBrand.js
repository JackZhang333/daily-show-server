const StandardBrand = require('../services/standardBrand')

const addStandardBrand = async(ctx,next)=>{
    const data = ctx.request.body
    const res = await StandardBrand.addStandardBrand(data)
    ctx.rest({
        code:'200',
        data:res
    })
    await next()
}

const getStandardBrand = async(ctx,next)=>{
    const res = await StandardBrand.getStandardBrand()
    ctx.rest({
        code:'200',
        data:res
    })
    await next()
}

module.exports = {
    'POST /api/addStandardBrand':addStandardBrand,
    'GET /api/getStandardBrand':getStandardBrand
}
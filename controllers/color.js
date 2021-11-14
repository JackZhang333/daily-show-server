const Color = require('../services/color')

const addColor = async(ctx,next)=>{
    const data = ctx.request.body
    const res = await Color.addColor(data)
    ctx.rest({
        code:'200',
        data:res
    })
    await next()
}

const getColor = async(ctx,next)=>{
    const res = await Color.getColor()
    ctx.rest({
        code:'200',
        data:res
    })
    await next()
}

module.exports = {
    'POST /api/addColor':addColor,
    'GET /api/getColor':getColor
}
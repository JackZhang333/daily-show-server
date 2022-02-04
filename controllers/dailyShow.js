const DailyShow = require('../services/dailyShow')

const addDailyShow = async(ctx,next)=>{
    const data = ctx.request.body
    const res = await DailyShow.addDailyShow(data)
    ctx.rest({
        code:'200',
        data:res
    })
    await next()
}

const getDailyShow = async(ctx,next)=>{
    const data = ctx.request.body
    const res = await DailyShow.getDailyShow(data)
    ctx.rest({
        code:'200',
        data:res
    })
    await next()
}
const getDailyShowByTime = async(ctx,next)=>{
    const data = ctx.request.body
    const res = await DailyShow.getDailyShowByTime(data)
    ctx.rest({
        code:'200',
        data:res
    })
    await next()
}
const updateDailyShow = async(ctx,next)=>{
    const data = ctx.request.body
    const res = await DailyShow.updateDailyShow(data)
    ctx.rest({
        code:'200',
        data:res
    })
    await next()
}

module.exports = {
    'POST /api/addDailyShow':addDailyShow,
    'POST /api/getDailyShow':getDailyShow,
    'POST /api/updateDailyShow':updateDailyShow,
    'POST /api/getDailyShowByTime':getDailyShowByTime
}
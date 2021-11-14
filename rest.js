module.exports = (prefix)=>{
    let rpath = prefix||'/api/'
    return async(ctx,next)=>{
        const {request,response} = ctx
        if (request.path.startsWith(rpath)){
            //使响应有向响应体写数据的能力
            ctx.rest = (data)=>{
                response.type ='application/json'
                response.body = data
            }
            await next()
        }else {
            await next()
        }
    }
}
const {DailyShow,DailyShowWear,UserWear} = require('../modelRelationShip')

//新增每一天的穿搭记录
module.exports.addDailyShow = async(data)=>{
    const {userID,showMood,weather,temperature,showPictureURL,wearIDs,recordedTime} = data
    const res = await DailyShow.create({userID,recordedTime,showMood:showMood||null,weather:weather||null,temperature:temperature||null,showPictureURL})
    const {id:dailyShowID} = res
    // console.log('穿搭的物品数组:'+wearIDs)
    //根据记录关联的物品，增加到关系表
    for(let userWearID of wearIDs){
        // console.log('穿搭的物品:'+wearID)
        await DailyShowWear.create({dailyShowID,userWearID})
    }
    return res
}

//查询用户的穿搭记录，有翻页功能
module.exports.getDailyShow = async ({userID,offSet,limit})=>{
   const res = await DailyShow.findAll({where:{userID},limit:limit||7,offSet:offSet||0,include:UserWear})
   //需要关联查询穿搭的物品，暂无实现
   return res
}
//通过userID和recordedTime查询用户记录
module.exports.getDailyShowByTime = async({userID,recordedTime})=>{
    const res = await DailyShow.findAll({
        where:{userID,recordedTime},include:UserWear
    })
    return res
}
//更改穿搭
module.exports.updateDailyShow = async(data)=>{
    const {id,...rest} = data
    //需要关联更新穿搭的物品，暂无实现
    return await DailyShow.update({...rest},{where:{id}})
}
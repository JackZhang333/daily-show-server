const {userWear:UserWear}  = require('./model')
const {userTag:UserTag}  = require('./model')

const {wearTag:WearTag} = require('./model')

const {dailyShow:DailyShow,dailyShowWear:DailyShowWear} = require('./model')

//用两个belongsto建立'用户物品-用户标签'n:n的关系

UserWear.belongsToMany(UserTag,{through:WearTag})
UserTag.belongsToMany(UserWear,{through:WearTag})

//用belongsto和hasMany建立'每日秀-物品'n:n的关系
DailyShow.belongsToMany(UserWear,{through:DailyShowWear})
UserWear.belongsToMany(DailyShow,{through:DailyShowWear})

module.exports = {UserWear,UserTag,WearTag,DailyShow,DailyShowWear}
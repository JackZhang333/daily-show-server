
const { UserTag, UserWear, WearTag } = require('../modelRelationShip')
//新增衣物
module.exports.addUserWear = async (data) => {
    const { userID, userCategoryID, wearPictureURL, colorID, userBrandID, season, tagIDs,categoryName,brandName } = data
    //新建物品表里的一条数据
    const res = await UserWear.create({ userID, userCategoryID, wearPictureURL, colorID: colorID || null, userBrandID: userBrandID || null, season,categoryName,brandName })
    //新建物品标签关系表多条数据
    if (tagIDs) {
        const userWearID = res.id
        for (let userTagID of tagIDs) {
            await WearTag.create({ userWearID, userTagID })
        }
    }
    return res
}

//删除衣物,软删除，隐藏不见
module.exports.deleteUserWear = async (id) => {
    let userWear = await UserWear.findOne({ where: { id } })
    userWear.isVisible = false
    return await userWear.save();
}
//查找用户所有衣物
module.exports.getUserWear = async (userID) => {
    //根据用户ID，可见性查找所有物品
    const wears = await UserWear.findAll(
        {
            attributes: ['userID', 'userCategoryID', 'wearPictureURL', 'id','colorID','season'],
            where: {
                userID, isVisible: true
            },
            //通过关系表联表查询
            include: UserTag
        }
    )
    // console.log(JSON.stringify(wears,null,4))
    // wears.forEach(v=>console.log("每一件物品的id:"+v.id))

    return wears
}
//修改用户的衣物
module.exports.updateUserWear = async (data) => {
    const wear = await UserWear.findOne({ where: { id: data.id } })
    for (let key in data) {
        value = data[key]
        wear[key] = value
    }
    return await wear.save()
}
const {userTag:UserTag} = require('../model')
//新增用户标签
module.exports.addUserTag = async(data) =>{
    return await UserTag.create(data)
}
//删除用户标签
module.exports.deleteUserTag = async(id)=>{
    return await UserTag.destroy({where:{id}})
}
//查找所有用户标签
module.exports.getUserTag = async(userID) =>{
    return await UserTag.findAll({
        where:{userID},
        order:[['createdAt','DESC']]
    })
}
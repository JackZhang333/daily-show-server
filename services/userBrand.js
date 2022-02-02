const {userBrand:UserBrand} = require('../model')
//新增用户品牌
module.exports.addUserBrand = async(data) =>{
    return await UserBrand.create(data)
}
//删除用户品牌
module.exports.deleteUserBrand = async(id)=>{
    return await UserBrand.destroy({where:{id}})
}
//查找所用用户品牌
module.exports.getUserBrand = async(userID) =>{
    return await UserBrand.findAll({where:{userID},order:[['createdAt','DESC']]})
}
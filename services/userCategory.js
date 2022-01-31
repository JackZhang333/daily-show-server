const {userCategory:UserCategory} = require('../model')

//新建用户分类
module.exports.createUserCategory = async(data)=>{
    return await UserCategory.create(data)
}
//更新用户分类
module.exports.updateUserCategory = async(data)=>{
    const {id} = data
    return await UserCategory.update(data,{
        where:{id}
    })
}
//删除用户分类
module.exports.deletUserCategory = async (id) =>{
    return await UserCategory.destroy({where:{id}})
}

//获取用户分类
module.exports.getUserCategory = async(userID)=>{
    return await UserCategory.findAll({
        where:{
            userID,
            order: [['createdAt', 'DESC']]
        }
    })
}
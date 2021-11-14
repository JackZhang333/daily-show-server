const {user:User} = require('../model')
const {userCategory:UserCategory} = require('../model')
const standardCategories = require('../standardCategory')
//通过用户ID查询用户信息
module.exports.getUserByID = async(id)=>{
    const data = await User.findAll({
        where:{
            id
        }
    })
    // console.log(data)
    return data
}

//新建一个用户
module.exports.createUser = async(data)=>{
    const res = await User.create(data)
    //在用户的分类表中放入标准分类
    for(let cate of standardCategories){
        let {name,pic} = cate
        await UserCategory.create({userID:res.id,categoryName:name,categoryPictureURL:pic})
    }
    return res
}
//获取所有的用户
module.exports.getUser = async()=>{
    return await User.findAll();
}
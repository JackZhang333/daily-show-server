const {user:User} = require('../model')
const {userCategory:UserCategory,userBrand:UserBrand,userTag:UserTag} = require('../model')

const standardCategories = require('../configs/standardCategory')
const standardBrands = require('../configs/standardBrands')
const standardTags = require('../configs/standardTags')

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
//通过用户微信的OPENID查询用户信息
module.exports.getUserByWeChatID = async(weChatID)=>{
    const data = await User.findAll({
        where:{
            weChatID
        }
    })
    // console.log("得到的weChatID"+weChatID,"返回的数据"+data)
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
    //在用户的品牌表写入初始化的标准品牌列表
    for(let brand of standardBrands){
        let {brandName,logoURL} = brand
        await UserBrand.create({userID:res.id,brandName,logoURL})
    }
    //在用户的标签表写入初始化的标准标签列表
    for (let tag of standardTags){
        let {tagName} = tag
        await UserTag.create({userID:res.id,tagName})
    }
    return res
}
//获取所有的用户
module.exports.getUser = async()=>{
    return await User.findAll();
}
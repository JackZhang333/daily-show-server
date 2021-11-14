const {standardCategory:StandardCategory} = require('../model')

module.exports.addStandardCategory = async(data)=>{
    return await StandardCategory.create(data)
}

module.exports.getStandardCategory = async()=>{
    return await StandardCategory.findAll()
}
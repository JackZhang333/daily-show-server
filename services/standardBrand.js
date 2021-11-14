const {standardBrand:StandardBrand} = require('../model')

module.exports.addStandardBrand = async(data)=>{
    return await StandardBrand.create(data)
}

module.exports.getStandardBrand = async()=>{
    return await StandardBrand.findAll()
}
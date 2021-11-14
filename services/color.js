const {color:Color} = require('../model')

module.exports.addColor = async(data)=>{
    return await Color.create(data)
}

module.exports.getColor = async()=>{
    return await Color.findAll()
}
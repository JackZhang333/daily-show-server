let Sequelize = require('sequelize')
let uuid = require('uuid')

function generateId(){
    return uuid.v4()
}

let {database,username,password,host} = require('./configs')

let seq = new Sequelize(database,username,password,{
    host,
    dialect:'mysql',
    pool:{
        max:5,
        min:0,
        idel:1000
    }
})

seq.authenticate().then(()=>console.log('数据库连接成功')).catch(e=>console.log(e))
// seq.close().then(()=>console.log('链接断开')).catch(e=>console.log(e))
let now = Date.now()
let defineModel = function(name,atts){

    let attributes = {}
    for (let key in atts){
        if(typeof atts[key] == 'object' && atts[key].type){
            attributes[key] = atts[key]
        }else {
            attributes[key] = {
                type:atts[key],
                allowNull:false
            }
        }
    }
    attributes.id = {
        type:Sequelize.STRING(50),
        primaryKey:true
    }
    attributes.createdAt = {
        type:Sequelize.BIGINT,
        allowNull:false
    }
    attributes.updateAt = {
        type:Sequelize.BIGINT,
        allowNull:false
    }
    attributes.version = {
        type:Sequelize.BIGINT
    }
    return seq.define(name,attributes,{
        timestamps:false,
        hooks:{
            beforeValidate:(obj)=>{
                if(obj.isNewRecord){
                    obj.id = generateId()
                    obj.createdAt = now
                    obj.updateAt = now
                    obj.version = 0
                    
                }else{
                    obj.updateAt = now
                    obj.version++
                }
            }
        }
    })
}

let sync = async function(){
    await seq.sync()
    console.log("数据库初始化完毕")
}
const TYPES = ['STRING', 'BIGINT', 'BOOLEAN','FLOAT','ENUM']
let types={}
for (let t of TYPES) {
    types[t] = Sequelize[t]
}
module.exports = {
    defineModel:defineModel,
    sync:sync,
    ...types
}
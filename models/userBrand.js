const db = require('../db')
module.exports = db.defineModel('userBrand',{
    userID:{
        type:db.STRING(50),
        references:{
            model:'users',
            key:'id'
        }
    },
    logoURL:{
        type:db.STRING(50),
        allowNull:true
    },
    brandName:db.STRING(20)
})
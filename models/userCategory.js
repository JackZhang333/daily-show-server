const db = require('../db')
module.exports = db.defineModel('userCategory',{
    userID:{
        type:db.STRING(50),
        //建立外键
        references:{
            model:'users',
            key:'id'
        }
    },
    isCommon:{
        type:db.BOOLEAN,
        defaultValue:true
    },
    categoryName:db.STRING(20),
    categoryPictureURL:{
        type:db.STRING(100),
        allowNull:true
    }
})
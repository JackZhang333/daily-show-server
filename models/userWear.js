const db = require('../db')
module.exports = db.defineModel('userWear',{
    userCategoryID:db.STRING(50),
    userID:{
        type:db.STRING(50),
        references:{
            model:'users',
            key:'id'
        },
        allowNull:false
    },
    wearPictureURL:db.STRING(50),
    colorID:{
        type:db.STRING(50),
        allowNull:true
    },
    userBrandID:{
        type:db.STRING(50),
        allowNull:true
    },
    season:{
        type:db.ENUM,
        values:['春','夏','秋','冬'],
        allowNull:false
    },
    isVisible:{
        type:db.BOOLEAN,
        defaultValue:true
    }
})
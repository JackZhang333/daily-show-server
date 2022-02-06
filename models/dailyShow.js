const db = require('../db')

module.exports = db.defineModel('dailyShow',{
    userID:{
        type:db.STRING(50),
        references:{
            model:'users',
            key:'id',
        }
    },
    recordedTime:{
        type:db.STRING(20),
    },
    showPictureURL:db.STRING(100),
    showMood:{
        type:db.STRING(250),
        allowNull:true
    },
    weather:{
        type:db.STRING(10),
        allowNull:true
    },
    temperature:{
        type:db.BIGINT(10),
        allowNull:true
    },
})
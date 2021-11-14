const db = require('../db')
module.exports = db.defineModel('user',{
    weChatID:{
        type:db.STRING(50),
        allowNull:false
    },
    phoneNumber:{
        type:db.STRING(20),
        allowNull:false
    },
    userName:{
        type:db.STRING(50),
        allowNull:false
    }
})
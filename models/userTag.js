const db = require('../db')
module.exports = db.defineModel('userTag',{
    tagName:db.STRING(20),
    userID:{
        type:db.STRING(50),
        allowNull:false,
        references:{
            model:'users',
            key:'id'
        }
    }
})
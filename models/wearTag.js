const db =require('../db')
module.exports = db.defineModel('wearTag',{
    userTagID:{
        type:db.STRING(50),
        allowNull:false,
        references:{
            model:'userTags',
            key:'id'
        }
    },
    userWearID:{
        type:db.STRING(50),
        allowNull:false,
        references:{
            model:'userWears',
            key:'id'
        }
    }
})
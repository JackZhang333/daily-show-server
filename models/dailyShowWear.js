const db = require('../db')

module.exports = db.defineModel('dailyShowWear',{
    userWearID:{
        type:db.STRING(50),
        references:{
            model:'userWears',
            key:'id'
        }
    },
    dailyShowID:{
        type:db.STRING(50),
        references:{
            model:'dailyShows',
            key:'id'
        }
    },
    maxContinuityDay:{
        type:db.BIGINT(10),
        defaultValue:1
    }
})
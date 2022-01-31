const db = require('../db')

module.exports = db.defineModel('standardCategory',{
    categoryName:db.STRING(10),
    categoryPictureURL:db.STRING(100)
})
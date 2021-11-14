const db = require('../db')

module.exports = db.defineModel('standardBrand',{
    brandName:db.STRING(10),
    logoURL:db.STRING(50)
})
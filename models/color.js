const db = require('../db')

module.exports = db.defineModel('color',{
    color:db.STRING(10),
    colorName:db.STRING(5)
})
const path = require('path')
const fs = require('fs')
const db = require('./db')
const fpath = path.resolve('.')+'/models'
const files = fs.readdirSync(fpath).filter(f=>f.endsWith('.js'))

for(let f of files){
    let key = f.slice(0,f.length - 3)
    let value = require('./models/'+f)
    module.exports[key] = value
}
module.exports.sync = db.sync
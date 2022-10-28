const fs = require('fs')
const path = require('path');
const {toUuid, toDashedUuid} = require('./utils/uuid');

(async () => {

    const data = JSON.parse(fs.readFileSync(path.join('db.json'),'utf-8'))
    
    const username = process.argv[2]
    const uuid = await toUuid(username)
    data[toDashedUuid(uuid.id)] = {
        lastName: uuid.name,
        idWithoutDashes: uuid.id
    }
    fs.writeFileSync(path.join('db.json'), JSON.stringify(data, null, 2))
})()

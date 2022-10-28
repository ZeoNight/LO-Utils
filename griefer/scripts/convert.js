// Igonre, to convert from https://github.com/InstallHappiness/LOGrieferList/blob/main/index.json
const fs = require('fs')
const path = require('path')
const fetch = require('node-fetch')
const { toUuid } = require('../utils/uuid')
const data = JSON.parse(fs.readFileSync(path.join('..', 'db.json'), 'utf-8'));
(async () => {
    const oldData = await (await fetch("https://raw.githubusercontent.com/InstallHappiness/LOGrieferList/main/index.json")).json()
    for (const uuid in oldData) {
        const userData = oldData[uuid]
        const idWithoutDashes = (await toUuid(oldData.lastKnownName)).id
        data[uuid] = {
            lastName: userData.lastKnownName,
            idWithoutDashes: idWithoutDashes
        }
    }
    fs.writeFileSync(path.join('..', 'db.json'), JSON.stringify(data, null, 2))
})()

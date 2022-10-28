const fetch = require('node-fetch')

function toDashedUuid(i) {
    return i.substr(0,8)+"-"+i.substr(8,4)+"-"+i.substr(12,4)+"-"+i.substr(16,4)+"-"+i.substr(20);
}
async function toUuid(username) {
    // https://api.mojang.com/users/profiles/minecraft/<username>
    return (await (await fetch(`https://api.mojang.com/users/profiles/minecraft/${username}`)).json())
} 


module.exports = { toDashedUuid, toUuid }
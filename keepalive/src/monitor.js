const ping = require('ping');

const switches = [
    { ip: "0.0.0.0", name: "Peigne H" }, //switch Zyxel test
];

const switchStatus = {};

const checkSwitchStatus = async () => {
    for (const sw of switches) {
        try {
            const res = await ping.promise.probe(sw.ip);
            switchStatus[sw.ip] = { name: sw.name, active: res.alive, timestamp: new Date().toISOString() };
        } catch (e) {
            console.error(`error while checking switch ${sw.name} (${sw.ip}): ${e.message}`);
            switchStatus[sw.ip] = { name: sw.name, active: false, timestamp: new Date().toISOString() };
        }
    }
};

checkSwitchStatus();
setInterval(checkSwitchStatus, 3000); // check every [3] seconds

module.exports = { switchStatus };
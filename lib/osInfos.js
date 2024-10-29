const os = require('os');

/**
 * 获取操作系统信息
 * @param {void}
 * @returns {Object}
 */
function getOSInfos() {
    const cpuItems = os.cpus();
    const cpuItem = cpuItems[0];
    const freememBytes = os.freemem();
    const totalmemBytes = os.totalmem();
    const archInfoStr = os.arch();

    return {
        nodejsVersion: process.version,
        osType: process.platform,
        cpuItems,
        cpuItem,
        freememBytes,
        totalmemBytes,
        archInfoStr
    }

}

module.exports = getOSInfos;
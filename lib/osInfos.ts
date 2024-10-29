
import {CpuInfo, cpus, freemem, totalmem, arch} from 'os';


export interface IOSInfos {
    nodejsVersion: string,
    osType: string,
    cpuItems: CpuInfo[],
    cpuItem: CpuInfo,
    freememBytes: number,
    totalmemBytes: number,
    archInfoStr: string
}

/**
 * 获取操作系统信息
 * @param {void}
 * @returns {Object}
 */
export function getOSInfos(): IOSInfos {
    const cpuItems = cpus();
    const cpuItem = cpuItems[0];
    const freememBytes = freemem();
    const totalmemBytes = totalmem();
    const archInfoStr = arch();

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

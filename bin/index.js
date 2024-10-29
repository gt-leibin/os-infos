#!/usr/bin/env node

const getOSInfos = require('../lib/osInfos');

const {
    nodejsVersion,
    osType,
    cpuItems,
    cpuItem,
    freememBytes,
    totalmemBytes,
    archInfoStr
} = getOSInfos();

console.log('---------系统信息--------');
console.log('nodejs版本:', nodejsVersion);
console.log('操作系统:', osType);
console.log('CPU核数:', cpuItems.length);
console.log('空闲内存容量:', Math.round(freememBytes / 1024 / 1024 / 1024) + 'G');
console.log('总内存容量:', Math.round(totalmemBytes / 1024 / 1024 / 1024) + 'G');
console.log('CPU型号:', cpuItem.model);
console.log('CPU架构', archInfoStr);
console.log('---------系统信息--------');

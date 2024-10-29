# os-infos

快速输出系统相关信息

安装
```
npm install os-infos
yarn add os-infos
pnpm install os-infos
```

 ## 使用
1. 🔥满足快速查看本机系统信息
```
npx os-infos

---------系统信息--------
nodejs版本: v20.18.0
操作系统: darwin
CPU核数: 4
空闲内存容量: 0G
总内存容量: 8G
CPU型号: Intel(R) Core(TM) i5-5257U CPU @ 2.70GHz
CPU架构 x64
---------系统信息--------
```

2. 在文件中引入
```
import {getOSInfos} from 'os-infos';
console.log(osInfo());

```
输出
```
{
  nodejsVersion: 'v20.18.0',
  osType: 'darwin',
  cpuLength: 4,
  cpuItem: {
    model: 'Intel(R) Core(TM) i5-5257U CPU @ 2.70GHz',
    speed: 2700,
    times: { user: 7728910, nice: 0, sys: 5057260, idle: 32797950, irq: 0 }
  },
  freememBytes: 105091072,
  totalmemBytes: 8589934592,
  archInfoStr: 'x64'
}
```



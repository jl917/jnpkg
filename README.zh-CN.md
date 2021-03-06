
<div align="right">
  Language:
  <a title="English" href="./README.md">ðºð¸</a>
  <a title="Chinese" href="./README.zh-CN.md">ð¨ð³</a>
  <a title="Korean" href="./README.ko-KR.md">ð°ð·</a>
</div>

<p aligin="center">
  <img src="https://raw.githubusercontent.com/jl917/jnpkg/master/JNPKG.png" alt="jnpkg" width="450"/>
</p>

[![semantic-release](https://img.shields.io/badge/semantic-release-e10079.svg?logo=semantic-release)](https://github.com/semantic-release/semantic-release)
[![Package Quality](https://packagequality.com/shield/jnpkg.svg)](https://packagequality.com/#?package=jnpkg)
![license](https://img.shields.io/npm/l/jnpkg)
![GitHub commit activity](https://img.shields.io/github/commit-activity/m/jl917/jnpkg)
![npmsio final](https://img.shields.io/npms-io/final-score/jnpkg)
![GitHub Release Date](https://img.shields.io/github/release-date/jl917/jnpkg)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=jl917_jnpkg&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=jl917_jnpkg)
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=jl917_jnpkg&metric=reliability_rating)](https://sonarcloud.io/summary/new_code?id=jl917_jnpkg)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=jl917_jnpkg&metric=coverage)](https://sonarcloud.io/summary/new_code?id=jl917_jnpkg)
![Snyk Vulnerabilities for npm package](https://img.shields.io/snyk/vulnerabilities/npm/jnpkg)
![GitHub Workflow Status](https://img.shields.io/github/workflow/status/jl917/jnpkg/Release?label=GitHub%20Action%20build)
![CircleCI](https://img.shields.io/circleci/build/gh/jl917/jnpkg?label=Circleci%20build)

è¿æ¯ä¸ä¸ª node æ¨¡åæåå·¥å·ï¼æ¯æ Typescript å Standard Javascript è¯­è¨ã



## ç®å½

- [èæ¯](#èæ¯)
- [å®è£](#å®è£)
- [ä½¿ç¨](#ä½¿ç¨)
- [ç»´æ¤è](#ç»´æ¤è)
- [è´¡ç®](#è´¡ç®)
- [è®¸å¯è¯](#è®¸å¯è¯)



## èæ¯

è¦å°å¤ä¸ªæ¨¡ååå¸å° NPMï¼æå¥½æä¸ä¸ªéç¨çæåå·¥å·ï¼å¯ä»¥èªå¨å¯¼åº CJS çæ¬åæ å ESM çæ¬ï¼ä»¥åç±»åæ¯æã



## å®è£

```sh
# local
npm install --save-dev jnpkg
# global
npm install -g jnpkg
```



## ä½¿ç¨

ä½¿ç¨ `jnpkg init` å½ä»¤çæ `package.json` æä»¶ã

è®¾ç½®mainåmoduleï¼åºåCJSåESMï¼æå©äºç¨æ·æåæ¶çä¼åã

watch æ¨¡å¼ä¼æ ¹æ®æºæä»¶çä¿®æ¹èªå¨æåå°ç®æ ã

```json
{
  "main": "lib/index.js",
  "module": "es/index.js",
  "scripts": {
    "watch": "jnpkg watch",
    "build": "jnpkg build"
  }
}
```

æä»¬å°æºæä»¶æ¾å¥å°æ ¹ç®å½çsrcæä»¶å¤¹ã(æ¯å¦ ./src/index.ts)ã

ç¶åè¿è¡ npm run build å°±ä¼å¨æ ¹ç®å½çæcjs(libç®å½)åesm(esç®å½)ã

æåæä»¬éè¿ npm publish å½ä»¤å°±å¯ä»¥æ­£å¸¸åå¸å°npmã

æèå¯ä»¥è®¾ç½® `semantic-release` èªå¨åå¸å°npmã

`jnpkg init` å½ä»¤èªå¨çæ `semantic-release` ç¸å³æä»¶ã

NPM Token å GITHUB Token å¯ä»¥åèä»¥ä¸ç½å

[https://github.com/settings/tokens](https://github.com/settings/tokens)

[https://www.npmjs.com/settings/{username}/tokens](https://www.npmjs.com/settings/{username}/tokens)



## è®¾ç½®
```js
// .jnpkgrc
{
  "lib": true, 
  "es": true,
  "browser": true,
  "pkgName": "pkg",
  "entry": "./src/index.ts",
  "binEntry": ["./src/index.bin.ts"], // only cli build mode
}
```



## ç»´æ¤è

JuLong - [jl917](https://github.com/jl917)



## è´¡ç®

æ¬¢è¿ä»»ä½äººæ¥åä¸æ¬é¡¹ç®çç»´æ¤ä»¥åå¼åï¼ä¹å¯ä»¥æäº¤Issueä»¥åPR's



## è®¸å¯è¯

[MIT](https://github.com/jl917/jnpkg/blob/master/LICENSE)

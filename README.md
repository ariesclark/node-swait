# Swait
**S**ynchronously **wait** for Promises to resolve.


[![GitHub last commit](https://img.shields.io/github/last-commit/rubybb/node-swait?style=for-the-badge)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/swait?style=for-the-badge)
![node-current](https://img.shields.io/node/v/swait?style=for-the-badge)
![Maintenance](https://img.shields.io/maintenance/yes/2020?style=for-the-badge)
![Keywords](https://img.shields.io/github/package-json/keywords/rubybb/node-swait?style=for-the-badge)
![GitHub search hit counter](https://img.shields.io/github/search/rubybb/node-swait/swait?style=for-the-badge)
![Discord](https://img.shields.io/discord/418093857394262020?style=for-the-badge)](https://discord.gg/https://discord.gg/w2EF4z)

##### Installation
```
npm install swait
```

##### Examples
```javascript
const swait = require("swait");

console.log("pre");
let promise = new Promise(resolve => {

	// wait one second, then resolve promise.
	setTimeout(() => {
		resolve("one second later");
	}, 1000);
});

console.log(swait(promise));
console.log("post");

// pre
// one second later
// post

```
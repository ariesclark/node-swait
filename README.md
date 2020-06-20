# Swait
**S**ynchronously **wait** for Promises to resolve.
![GitHub last commit](https://img.shields.io/github/last-commit/rubybb/node-swait?style=for-the-badge)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/swait?style=for-the-badge)
![node-current](https://img.shields.io/node/v/swait?style=for-the-badge)
![Maintenance](https://img.shields.io/maintenance/yes/2020?style=for-the-badge)
![Keywords](https://img.shields.io/github/package-json/keywords/rubybb/node-swait?style=for-the-badge)

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
# Swait
**S**ynchronously **wait** for Promises to resolve.

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
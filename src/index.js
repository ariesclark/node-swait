const swait = require("../bin/swait.node");
const wait = (promise) => {
	let output, done = false;
	
	const consume = () => {
		promise.then((result) => {
			output = result;
			done = true;
		});
	}

	while (!done) {
		swait.run(consume());
		process._tickCallback();
	}

	return output;
}

module.exports = wait;
// function that returns a ES6 Promise
function getUserNameAsynchonously(): Promise<string> {
	var promise = new Promise((resolve, reject) => {
		if (Math.round(Math.random() * 10) % 2 === 0) {
			window.setTimeout(() => {
				resolve('Tom Joad')
			}, 1000);
		} else {
			window.setTimeout(() => {
				reject();
			}, 1000);
		}
	});
	return promise;
}

console.log('Loading User:');

/* The old way of asynchronous promoise resolution */
getUserNameAsynchonously().then((username: string) => {
	console.log(username);
}).catch(() => {
	console.log('Failed to load user.');
});


/* The new way with async/await */
async function callAsync() {
	try {
		var username: string = await getUserNameAsynchonously();
		console.log(username);
	} catch (error) {
		console.log('Failed to load user.');
	}
}
callAsync();

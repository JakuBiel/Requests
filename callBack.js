// const btn = document.querySelector("button");

// // const moveX = (element, amount, delay, callback) => {
// // 		setTimeout(() => {
// // 		element.style.transform = `translateX(${currLeft + amount}px)`;
// // 		if (callback) callback();
// // 	}, delay);
// // };

// // moveX(btn, 100, 1000, () => {
// // 	moveX(btn, 100, 2000);
// // });

// const moveX = (element, amount, delay, onSuccess, onFailure) => {
// 	const bodyBoundary = document.body.clientWidth;
// 	const elRight = element.getBoundingClientRect().right;
// 	const currLeft = element.getBoundingClientRect().left;
// 	if (elRight + amount > bodyBoundary) {
// 		console.log("cant dance, to far");
// 		onFailure();
// 	} else {
// 		setTimeout(() => {
// 			element.style.transform = `translateX(${currLeft + amount}px)`;
// 			console.log("can dance, have space");
// 			onSuccess();
// 		}, delay);
// 	}
// };

// moveX(
// 	btn,
// 	200,
// 	1000,
// 	() => {
// 		//success

// 		moveX(btn, 700, 1000);
// 	},
// 	() => {
// 		//failure
// 	}
// );

// const willGetDog = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		const rand = Math.random();
// 		if (rand > 0.5) {
// 			reject();
// 		} else {
// 			resolve();
// 		}
// 	}, 5000);
// });

// willGetDog.then(() => {
// 	console.log("yes dog");
// });
// willGetDog.catch(() => {
// 	console.log("no dog");
// });

// const willGetDog = () => {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			const rand = Math.random();
// 			if (rand > 0.5) {
// 				reject();
// 			} else {
// 				resolve();
// 			}
// 		}, 5000);
// 	});
// };

// willGetDog()
// 	.then(() => {
// 		console.log("yes dog");
// 	})
// 	.catch(() => {
// 		console.log("no dog");
// 	});

// const fakeRequest = (url) => {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			const pages = {
// 				"/users": [
// 					{ id: 1, username: "Bilbo" },
// 					{ id: 5, username: "Gimli" },
// 				],
// 				"/about": "This is about page",
// 			};
// 			const data = pages[url];
// 			if (data) {
// 				resolve({ status: 200, data });
// 			} else {
// 				reject({ status: 404 });
// 			}
// 		}, 1000);
// 	});
// };

// fakeRequest("/users")
// 	.then((res) => {
// 		console.log("Status code", res.status);
// 		console.log("Data", res.data);
// 		console.log("works");
// 	})
// 	.catch((res) => {
// 		console.log(res.status);
// 		console.log("fail");
// 	});

// fakeRequest("/use")
// 	.then((res) => {
// 		console.log("Status code", res.status);
// 		console.log("Data", res.data);
// 		console.log("works");
// 	})
// 	.catch((res) => {
// 		console.log("Status code", res.status);
// 		console.log("fail");
// 	});

// fakeRequest("/users").then((res) => {
// 	console.log(res);
// 	const id = res.data[0].id;
// 	fakeRequest(`/users/${id}`).then((res) => {
// 		console.log(res);
// 		const topPostId = res.data.topPostId;
// 		fakeRequest(`/posts/${topPostId}`).then((res) => {
// 			console.log(res);
// 		});
// 	});
// });

// fakeRequest("/users")
// 	.then((res) => {
// 		console.log(res);
// 		const id = res.data[0].id;
// 		return fakeRequest(`/users/${id}`);
// 	})
// 	.then((res) => {
// 		console.log(res);
// 		const postId = res.data.topPostId;
// 		return fakeRequest(`/posts/${postId}`);
// 	})
// 	.then((res) => {
// 		console.log(res);
// 	})
// 	.catch((err) => {
// 		console.log("OH NO!", err);
// 	});

// ************************************************
// ATTEMPT 2 (deliberate error to illustrate CATCH)
// ************************************************
// fakeRequest('/users')
// 	.then((res) => {
// 		console.log(res);
// 		const id = res.data[0].id;
// 		return fakeRequest(`/useALSKDJrs/${id}`); //INVALID URL, CATCH WILL RUN!
// 	})
// 	.then((res) => {
// 		console.log(res);
// 		const postId = res.data.topPostId;
// 		return fakeRequest(`/posts/${postId}`);
// 	})
// 	.then((res) => {
// 		console.log(res);
// 	})
// 	.catch((err) => {
// 		console.log('OH NO!', err);
// 	});

//--------------

const btn = document.querySelector("button");

const moveX = (element, amount, delay) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const bodyBoundary = document.body.clientWidth;
			const elRight = element.getBoundingClientRect().right;
			const currLeft = element.getBoundingClientRect().left;
			if (elRight + amount > bodyBoundary) {
				// console.log("cant dance, to far");
				reject();
			} else {
				element.style.transform = `translateX(${currLeft + amount}px)`;
				// console.log("can dance, have space");
				resolve();
			}
		}, delay);
	});
};

// moveX(btn, 100, 1000).then(
// 	() => console.log("yes"),
// 	moveX(btn, 100, 1000).then(
// 		() => console.log("yes"),
// 		moveX(btn, 100, 1000).then(() => console.log("yes"))
// 	)
// );

// moveX(btn, 200, 1000)
// 	.then(() => {
// 		return moveX(btn, 200, 1000);
// 	})
// 	.then(() => {
// 		return moveX(btn, 200, 1000);
// 	})
// 	.then(() => {
// 		return moveX(btn, 200, 1000);
// 	})
// 	.then(() => {
// 		return moveX(btn, 200, 1000);
// 	})
// 	.then(() => {
// 		return moveX(btn, 200, 1000);
// 	})
// 	.catch(() => {
// 		btn.style.backgroundColor = "red";
// 		return moveX(btn, -500, 1000);
// 	});

moveX(btn, 100, 1000)
	.then(() => moveX(btn, 100, 1000))
	.then(() => moveX(btn, 200, 1000))
	.then(() => moveX(btn, 200, 1000))
	.then(() => moveX(btn, 200, 1000))
	.then(() => moveX(btn, 200, 1000))
	.catch(() => (btn.style.backgroundColor = "red"));

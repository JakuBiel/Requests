async function hello() {
	return "hello!";
}

// function add(x, y) {
// 	return x + y;
// }
async function add(x, y) {
	if (typeof x !== "number" || typeof y !== "number")
		throw "X and Y must be numbers";

	return x + y;
}

//
// function getPlanets() {
// 	return axios.get("https://swapi.dev/api/planets/");
// }
// getPlanets().then((res) => {
// 	console.log(res.data);
// });

// async function getPlanets() {
// 	const res = await axios.get("https://swapi.dev/api/planetss/");
// 	console.log(res.data);
// }
// getPlanets();

// getPlanets().catch((err) => {
// 	console.log("in catch");
// 	console.log(err);
// });

// async function getPlanets() {
// 	try {
// 		const res = await axios.get("https://swapi.dev/api/planets/");
// 		console.log(res.data);
// 	} catch (e) {
// 		console.log("in catch");
// 		console.log(e);
// 	}
// }

const btn = document.querySelector("button");

const moveX = (element, amount, delay) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const bodyBoundary = document.body.clientWidth;
			const elRight = element.getBoundingClientRect().right;
			const currLeft = element.getBoundingClientRect().left;
			if (elRight + amount > bodyBoundary) {
				reject();
			} else {
				element.style.transform = `translateX(${currLeft + amount}px)`;
				resolve();
			}
		}, delay);
	});
};

async function moveRight(el) {
	await moveX(el, 100, 1000);
	await moveX(el, 100, 1000);
	await moveX(el, 100, 1000);
	await moveX(el, 100, 1000);
	await moveX(el, 100, 1000);
	await moveX(el, 100, 1000);
	moveX(el, 100, 1000);
}
moveRight(btn).catch((err) => console.log("Done!", err));
moveRight(btn);

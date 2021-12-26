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

async function getPlanets() {
	const res = await axios.get("https://swapi.dev/api/planets/");
	console.log(res.data);
}
getPlanets();

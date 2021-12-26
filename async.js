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

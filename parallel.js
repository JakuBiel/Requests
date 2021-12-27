// sequence one after another
// async function get3Pokemon() {
// 	const poke1 = await axios.get("https://pokeapi.co/api/v2/pokemon/1");
// 	const poke2 = await axios.get("https://pokeapi.co/api/v2/pokemon/2");
// }

//parallel, get at one
// async function get3Pokemon() {
// 	const promise1 = axios.get("https://pokeapi.co/api/v2/pokemon/1");
// 	const promise2 = axios.get("https://pokeapi.co/api/v2/pokemon/2");
// 	const poke1 = await promise1; //p1 is a promise, poke1 is data if resolved
// 	const poke2 = await promise2;
// 	console.log(poke1.data.name + ", " + poke2.data.name);
// }
// get3Pokemon();

async function get3Pokemon() {
	const promise1 = axios.get("https://pokeapi.co/api/v2/pokemon/1");
	const promise2 = axios.get("https://pokeapi.co/api/v2/pokemon/2");
	const results = await Promise.all([promise1, promise2]);

	console.log(results);
	printPoke(results);
}
get3Pokemon();

function printPoke(data) {
	for (let poke of data) {
		console.log(poke.data.name);
	}
}

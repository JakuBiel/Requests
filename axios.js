// axios
// 	.get("https://swapi.dev/api/planets/")
// 	.then((res) => {
// 		console.log(res.data.results);
// 	})
// 	.catch((err) => {
// 		console.log(err);
// 	});

const nextPlanets = (url = "https://swapi.dev/api/planets/") => {
	return axios.get(url);
};

const printPlanets = ({ data }) => {
	console.log({ data });
	for (let planet of data.results) {
		console.log(planet.name);
	}
	// return nextPlanets(data.next);  and no additional .then(nextPlanets) already inside..is it ok?
	return Promise.resolve(data.next);
};

nextPlanets()
	.then(printPlanets)
	.then(nextPlanets)
	.then(printPlanets)
	.then(nextPlanets)
	.then(printPlanets)
	.then(nextPlanets)
	.then(printPlanets)
	.then(nextPlanets)
	.then(printPlanets)
	.then(nextPlanets)
	.then(printPlanets)
	.then(nextPlanets)
	.catch((err) => {
		console.log(err);
	});

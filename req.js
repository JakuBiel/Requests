// const firstReq = new XMLHttpRequest();
// firstReq.addEventListener("load", (res) => {
// 	console.log("FIRST works");
// 	const data = JSON.parse(firstReq.responseText);
// 	const filmURL = data.results[0].films[0];
// 	const filmReq = new XMLHttpRequest();
// 	filmReq.addEventListener("load", function () {
// 		console.log("SECOND works");
// 		const filmData = JSON.parse(filmReq.responseText);
// 		console.log(filmData);
// 	});
// 	filmReq.addEventListener("error", function (e) {
// 		console.log("error", e);
// 	});
// 	filmReq.open("GET", filmURL);
// 	filmReq.send();
// 	// for (let planet of data.results) {
// 	// 	console.log(planet.name);
// 	// }
// });
// firstReq.addEventListener("error", () => {
// 	console.log("error");
// });
// firstReq.open("GET", "https://swapi.dev/api/planets/");
// firstReq.send();
// console.log("request sent");

//FETCH
// fetch("https://swapi.dev/api/planets/")
// 	.then((response) => {
// 		if (!response.ok) throw new Error(`Status Code Error: ${response.status}`);

// 		response.json().then((data) => {
// 			for (let planet of data.results) {
// 				console.log(planet);
// 				// console.log(planet.name);
// 			}
// 		});
// 	})
// 	.catch((err) => {
// 		console.log("sth went wrong");
// 		console.log(err);
// 	});

// //fetch all planets
// fetch("https://swapi.dev/api/planets/")
// 	.then((response) => {
// 		if (!response.ok) throw new Error(`Status Code Error: ${response.status}`);
// 		//turn response to JS data
// 		return response.json();
// 	})
// 	//from returned JS list of planets make a const of first movie on first planet
// 	.then((data) => {
// 		const filmURL = data.results[0].films[0];
// 		//fetch that movie
// 		return fetch(filmURL);
// 	})
// 	//
// 	.then((response) => {
// 		if (!response.ok) throw new Error(`Status Code Error: ${response.status}`);
// 		//turn response of fetch to JS data
// 		return response.json();
// 	})
// 	//from returned JS data print title
// 	.then((data) => {
// 		console.log(data.title);
// 	})
// 	.catch((err) => {
// 		console.log("sth went wrong");
// 		console.log(err);
// 	});

const checkStatusAndParse = (response) => {
	if (!response.ok) throw new Error(`Status Code Error: ${response.status}`);

	return response.json();
};

const printPlanets = (data) => {
	console.log(data);
	for (let planet of data.results) {
		console.log(planet.name);
	}
	return Promise.resolve(data.next);
};

const fetchMore = (url) => {
	return fetch(url);
};

fetch("https://swapi.dev/api/planets/")
	.then(checkStatusAndParse)
	.then(printPlanets)

	.then(fetchMore)
	.then(checkStatusAndParse)
	.then(printPlanets)

	.then(fetchMore)
	.then(checkStatusAndParse)
	.then(printPlanets)

	.catch((err) => {
		console.log("sth went wrong");
		console.log(err);
	});

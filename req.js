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
fetch("https://swapi.dev/api/planets/")
	.then((response) => {
		response.json().then((data) => {
			for (let planet of data.results) {
				console.log(planet.name);
			}
		});
	})
	.catch((err) => {
		console.log("sth went wrong");
		console.log(err);
	});

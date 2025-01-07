import "./style.css";

const getPlanet = async (id: number) => {
	// skicka en url https://swapi.py4e.com/api/planets/1/
	// visa upp en del av svaret med console.log

	const response = await fetch(`https://swapi.py4e.com/api/planets/${id}/`);
	const data = await response.json();

	return data;
};

const planet = await getPlanet(1);

console.log(planet.name);

// öva = skriv en getPerson osv

import "./style.css";

// === Type upp koden!

type SWPerson = {
	name: string;
	height: string;
	mass: string;
	hair_color: string;
	skin_color: string;
	eye_color: string;
	birth_year: string;
	gender: string;
	homeworld: string;
	films: string[];
	species: string[];
	vehicles: string[];
	starships: string[];
	created: string;
	edited: string;
	url: string;
};

// === KONSOLL-koden

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


// === DOM-koden

const getPerson = async (): Promise<SWPerson[]> => {
	const response = await fetch(`https://swapi.py4e.com/api/people/`);
	const data = await response.json();

	return data.results as SWPerson[];
};

const persons: SWPerson[] = await getPerson();

//console.log(persons);

const ulPersons = document.getElementById("persons") as HTMLDivElement;

persons.forEach(async (person: SWPerson) => {
	const homeworld = person.homeworld; //homeworld: "https://swapi.py4e.com/api/planets/1/"
	const split: string[] = homeworld.split("/");
	const id: number = Number(split[split.length - 2]);

	const planet = await getPlanet(id);

	const p = document.createElement("p");

	p.innerHTML = `Name: ${person.name}, Eye color: ${person.eye_color}, Home planet: ${planet.name}`;
	ulPersons.appendChild(p);
});

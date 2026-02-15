// Je gaat even oefenen met het gebruiken van een arrow function en de for/of loop. 

// Maak een array genaamd 'marvels' en plaats hier 4 Marvel films in.

// Maak een arrow function genaamd 'addMarvel'
// In je functie voeg je een nieuwe Marvel film toe zonder dit zelf in de bovenstaande array toe te voegen
// Roep de functie op (het klopt dat je nog niets ziet)
// Loop met een for/of loop door de array en toon alle items in de array in je console

const marvels = ['Avengers: Endgame', 'Avengers: Infinity War', 'Spider-Man: No Way Home', 'The Avengers'];

const addMarvel = movie => {
    marvels.push(movie)
}

addMarvel('Black Panther');

for (const m of marvels) {
    console.log(m)
}
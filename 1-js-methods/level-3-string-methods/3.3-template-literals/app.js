// Opdracht 3.3: Template Literals
console.log('🚀 Opdracht 3.3: Template Literals');

const namen = ['Jan', 'Marie', 'Piet', 'Lisa'];
const leeftijden = [25, 30, 22, 28];
const steden = ['Amsterdam', 'Rotterdam', 'Utrecht', 'Den Haag'];

console.log('Namen:', namen);
console.log('Leeftijden:', leeftijden);
console.log('Steden:', steden);

// TODO: Maak beschrijvingen met template literals
// Tip: gebruik map() met index parameter: (naam, index) => 


/* jouw code hier - gebruik map() en template literals */
const beschrijvingen = namen.map((n, i) => {
    return `${n} (${leeftijden[i]} jaar) woont in ${steden[i]}`
})


console.log('Beschrijvingen:', beschrijvingen);
console.log('Verwacht: ["Jan (25 jaar) woont in Amsterdam.", ...]');


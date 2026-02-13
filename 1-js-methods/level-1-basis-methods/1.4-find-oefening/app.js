// Opdracht 1.4: Find Oefening
console.log('🚀 Opdracht 1.4: Find Oefening');

const getallen = [12, 45, 67, 23, 89, 34];
console.log('Getallen array:', getallen);

// TODO: Zoek het eerste getal groter dan 50
const gevondenGetal = getallen.find(g => g > 50)

console.log('Eerste getal > 50:', gevondenGetal);

// TODO: Zoek de index van het eerste getal groter dan 50
const gevondenIndex = getallen.findIndex(i => i > 50);

console.log('Index van eerste getal > 50:', gevondenIndex);
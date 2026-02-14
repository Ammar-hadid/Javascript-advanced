// Opdracht 2.4: Complexe Filtering
console.log('🚀 Opdracht 2.4: Complexe Filtering');

const getallen = [5, 12, 8, 23, 15, 3, 18, 25, 7, 30];
const woorden = ['appel', 'banaan', 'aardbei', 'peer', 'ananas', 'bosbes'];

console.log('Alle getallen:', getallen);
console.log('Alle woorden:', woorden);

// TODO: Filter getallen die groter zijn dan 10 EN kleiner dan 20
const middelsteGetallen = getallen.filter(g => g > 10 && g < 20)
console.log('Getallen tussen 10 en 20:', middelsteGetallen);

// TODO: Filter woorden die beginnen met 'a' EN langer zijn dan 5 letters
const langeAwoorden = woorden.filter(w => w.startsWith('a') && w.length > 5)
console.log('Lange woorden met a:', langeAwoorden);

// TODO: Filter even getallen die groter zijn dan 15
const groteEvenGetallen = getallen.filter(g => g % 2 === 0 && g > 15);
console.log('Grote even getallen:', groteEvenGetallen);


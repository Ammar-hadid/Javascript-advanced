// Opdracht 1.1: Filter Oefening
console.log('🚀 Opdracht 1.1: Filter Oefening');

const getallen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log('Originele array:', getallen);

// TODO: Filter de even getallen
const evenGetallen = getallen.filter(g => g % 2 === 0);

console.log('Even getallen:', evenGetallen);
console.log('Verwacht resultaat: [2, 4, 6, 8, 10]');
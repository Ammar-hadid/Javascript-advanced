// Opdracht 2.1: Filter en Map
console.log('🚀 Opdracht 2.1: Filter en Map');

const prijzen = [800, 25, 75, 300, 150, 45];
const productnamen = ['laptop', 'muis', 'toetsenbord', 'monitor', 'webcam', 'kabel'];

console.log('Alle prijzen:', prijzen);
console.log('Alle productnamen:', productnamen);

// TODO: Filter prijzen onder de €100
const goedkopePrijzen = prijzen.filter(p => p < 100);
console.log('Prijzen onder €100:', goedkopePrijzen);

// TODO: Filter productnamen die beginnen met 'm'
const productenMetM = productnamen.filter(pn => pn.startsWith('m'));
console.log('Producten die beginnen met m:', productenMetM);


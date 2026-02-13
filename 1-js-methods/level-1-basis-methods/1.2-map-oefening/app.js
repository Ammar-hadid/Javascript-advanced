// Opdracht 1.2: Map Oefening
console.log('🚀 Opdracht 1.2: Map Oefening');

const namen = ['sanne', 'johan', 'sjoerd'];
console.log('Originele namen:', namen);

// TODO: Zet alle namen om naar hoofdletter
const hoofdletterNamen = namen.map(n => n.charAt(0).toUpperCase() + n.slice(1));

console.log('Namen met hoofdletter:', hoofdletterNamen);
console.log('Verwacht resultaat: [\'Sanne\', \'Johan\', \'Sjoerd\']');
// Opdracht 1.3: Includes Oefening
console.log('🚀 Opdracht 1.3: Includes Oefening');

const kleuren = ['rood', 'blauw', 'groen', 'geel'];
console.log('Beschikbare kleuren:', kleuren);

const zoekKleur = prompt('Voer een kleur in:') || 'blauw';
console.log('Gezochte kleur:', zoekKleur);

// TODO: Check of de kleur in de array staat
const gevonden = kleuren.includes(zoekKleur);
  /* jouw code hier */

  console.log('Kleur gevonden:', gevonden);

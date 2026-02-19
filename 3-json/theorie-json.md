## JSON (JavaScript Object Notation)

### Wat is JSON?

JSON staat voor **J**ava**S**cript **O**bject **N**otation. Het is een format/sjabloon voor het opslaan en uitwisselen van data tussen verschillende systemen.

JSON wordt gebruikt wanneer data wordt verzonden van een server naar een webpagina. Dit zien we later terug bij API's.

### Verschil tussen JSON en JavaScript Objects

JSON lijkt heel erg op een JavaScript object, maar er zijn belangrijke verschillen:

| **JSON** | **JavaScript Object** |
|----------|----------------------|
| **Format** voor gegevensuitwisseling | **Datastructuur** in programmeertalen |
| Gebruikt voor **opslag en transport** | Gebruikt voor **structureren en manipuleren** |
| **Statisch** (een string representatie) | **Dynamisch** (kan aangepast worden) |
| **Taalonafhankelijk** | **Programmeertaal specifiek** |

**Praktisch gezegd:** Een JSON bestand is een array met meerdere objecten over een bepaald onderwerp.

## Loop door een array met objecten

Voordat we een JSON-bestand gaan maken, moet je eerst leren hoe je door een array met objecten loopt en deze toont in je console en op het scherm.

### Stap 1: Maak een array met objecten

```jsx
let cars = [
  {
    name: 'Fiat',
    model: '500',
    weight: '850kg',
    color: 'White',
  },
  {
    name: 'Volvo',
    model: 'S60',
    weight: '1200kg',
    color: 'Grey',
  },
  {
    name: 'BMW',
    model: 'X7',
    weight: '1350kg',
    color: 'Black',
  },
];
```

### Stap 2: Loop door de array

Omdat er nu meerdere objecten in een array zitten, kun je niet zomaar de naam van elk object oproepen. Hiervoor gebruiken we de `for...of` loop:

```jsx
for (let car of cars) {
  console.log(car.name); // Toont: Fiat, Volvo, BMW
}
```

**Wat gebeurt er:**
- Elk object komt tijdelijk in de variabele `car`
- Je kunt dan `car.name`, `car.model`, etc. gebruiken
- In je console zie je nu alle namen van de auto's

### Stap 3: Toon data op het scherm

**HTML:**
```html
<section class="cars"></section>
```

**JavaScript:**
```jsx
let output = document.querySelector('.cars');
let out = '';

for (let car of cars) {
  out += `
    <div>
      <h2>${car.name}</h2>
      <p>Model: ${car.model}</p>
      <p>Gewicht: ${car.weight}</p>
      <p>Kleur: ${car.color}</p>
    </div>
  `;
}

output.innerHTML = out;
```

**Belangrijke punten:**
- `out` is een lege string die we vullen in de loop
- `+=` voegt nieuwe content toe aan de bestaande string
- `output.innerHTML = out;` gebeurt **buiten** de loop (anders wordt het steeds overschreven)

## JSON-bestand maken

Nu je weet hoe je door een array met objecten moet loopen, gaan we aan de slag met JSON.

### Stap 1: Maak een JSON bestand

Maak een bestand genaamd **`cars.json`**. Het bestandstype **moet** `.json` zijn.

```json
[
  {
    "name": "Fiat",
    "model": "500",
    "weight": "850kg",
    "color": "White"
  },
  {
    "name": "Volvo",
    "model": "S60",
    "weight": "1200kg",
    "color": "Grey"
  },
  {
    "name": "BMW",
    "model": "X7",
    "weight": "1350kg",
    "color": "Black"
  }
]
```

**Belangrijke JSON regels:**
- Begin met `[` en eindig met `]` (het is een array)
- **Zowel properties als values moeten tussen dubbele aanhalingstekens** (`"name"`, niet `name`)
- Geen komma na het laatste object
- Geen comments toegestaan

## Data tonen uit een JSON-bestand

### Voorbereiding

Verwijder de array code uit je JavaScript en houd alleen dit over:

```jsx
let output = document.querySelector('.cars');
let out = '';
```

### De drie stappen van JSON inlezen

Het lezen van een JSON-bestand bestaat uit **drie stappen**:

1. **Het ophalen van de gegevens**
2. **Het omzetten naar JSON-format** (anders blijft het normale tekst)
3. **Door de data loopen** om het te tonen

### Stap 1: Data ophalen met fetch()

```jsx
fetch('./cars.json')
```

**Wat doet fetch():**
- Haalt het bestand op van de opgegeven locatie
- `./` betekent "in dezelfde map"
- Geeft een "promise" terug (meer daarover later)

### Stap 2: Omzetten naar JSON

```jsx
fetch('./cars.json')
  .then((response) => response.json())
```

**Wat gebeurt er:**
- `.then()` wacht tot fetch() klaar is
- `response` bevat de ruwe data
- `response.json()` zet het om naar een JavaScript array/object

### Stap 3: Door de data loopen

```jsx
fetch('./cars.json')
  .then((response) => response.json())
  .then((cars) => {
    for (let car of cars) {
      out += `
        <div>
          <h2>${car.name}</h2>
          <p>Model: ${car.model}</p>
          <p>Gewicht: ${car.weight}</p>
          <p>Kleur: ${car.color}</p>
        </div>
      `;
    }
    
    output.innerHTML = out;
  });
```

**Wat gebeurt er:**
- De tweede `.then()` krijgt de JSON data (hier `cars` genoemd)
- `cars` is nu een array met objecten (precies zoals in je JSON bestand)
- De `for...of` loop werkt hetzelfde als eerder
- `output.innerHTML = out;` staat binnen de `.then()` omdat het moet wachten tot de data geladen is

### Foutafhandeling toevoegen

Het is altijd verstandig om foutafhandeling toe te voegen:

```jsx
fetch('./cars.json')
  .then((response) => {
    if (!response.ok) {
      throw new Error('Bestand niet gevonden');
    }
    return response.json();
  })
  .then((cars) => {
    for (let car of cars) {
      out += `
        <div>
          <h2>${car.name}</h2>
          <p>Model: ${car.model}</p>
          <p>Gewicht: ${car.weight}</p>
          <p>Kleur: ${car.color}</p>
        </div>
      `;
    }
    output.innerHTML = out;
  })
  .catch((error) => {
    console.log('Er ging iets mis:', error);
    output.innerHTML = '<p>Data kon niet geladen worden.</p>';
  });
```

## Veelgemaakte fouten bij JSON

### 1. Verkeerde aanhalingstekens

```json
// ❌ Fout:
{
  name: "Fiat",
  'model': '500'
}

// ✅ Goed:
{ 
  "name": "Fiat",
  "model": "500"
}
```

### 2. Komma na laatste element

```json
// ❌ Fout:
[
  {"name": "Fiat"},
  {"name": "Volvo"},  // <- Deze komma moet weg
]

// ✅ Goed:
[
  {"name": "Fiat"},
  {"name": "Volvo"}
]
```

### 3. Bestand niet gevonden

```jsx
// Zorg dat het pad klopt:
fetch('./cars.json')      // ✅ Zelfde map
fetch('../data/cars.json') // ✅ Een map omhoog, dan data map
fetch('cars.json')         // ✅ Ook zelfde map (zonder ./)
```

## Tips voor werken met JSON

1. **Gebruik een JSON validator** online om je JSON te controleren
2. **Test altijd eerst** met `console.log()` om te zien wat je krijgt
3. **Gebruik dezelfde namen** in je JSON als in je JavaScript voor duidelijkheid
4. **Maak je JSON leesbaar** met proper indenting
5. **Start klein** met een paar objecten voordat je grote bestanden maakt

**That's it!** Nu kun je data opslaan in JSON bestanden en deze inladen in je JavaScript applicaties.
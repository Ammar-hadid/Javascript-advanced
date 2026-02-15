// Stap 1

// Maak een persoon object waar je allemaal eigenschappen van een persoon in kunt opslaan en tonen op het scherm.

// Het object moet de volgende properties bevatten:

//     Naam: de naam van de persoon (string)
//     Leeftijd: de leeftijd van de persoon (number)
//     Geboortedatum: de geboortedatum van de persoon (string)
//     Geslacht: het geslacht van de persoon (string)
//     In leven: geef aan of de persoon nog leeft (boolean)
//     Hobby’s: 4 hobby’s van de persoon (array)

// Toon elke property op het scherm door het in een p-tag te plaatsen. Hiervoor gebruik je de div-tag van de vorige opdracht.
// Stap 2:

// Het object moet ook de volgende methods bevatten:

//     Een method (functie) die de naam moet veranderen. De naam moet je via de parameters kunnen meegeven.
//     Een method (functie) die het ‘in leven’ property kan veranderen.
//     Een method (functie) die een extra hobby toevoegt aan de array. Een hobby moet je via de parameters kunnen meegeven.

// Toon de wijzigingen op het scherm.

// Gebruik geen arrow function in een object!


const person = {
    name: 'Cristiano Ronaldo',
    age: 41,
    birthDate: '5 February 1985',
    gender: 'male',
    isAlive: true,
    hobbies: ['Training', 'Spending time with family', 'Fashion', 'Luxury cars'],

    changeName: function(newName) {
        this.name = newName;
    },
    changeLifeStatus: function(lifeStatus) {
        this.isAlive = lifeStatus;
    },
    addHobby: function(newHobby) {
        this.hobbies.push(newHobby);
    }
};

const outputEl = document.querySelector('.output');


function getPersonHTML(personObj) {
    return `
        <p><strong>Name: </strong>${personObj.name}</p>
        <p><strong>Age: </strong>${personObj.age}</p>
        <p><strong>Birthdate: </strong>${personObj.birthDate}</p>
        <p><strong>Gender: </strong>${personObj.gender}</p>
        <p><strong>Alive: </strong>${personObj.isAlive}</p>
        <p><strong>Hobbies: </strong>${personObj.hobbies.join(' - ')}</p>
    `
}

function render(output) {
    const personHTML = getPersonHTML(person);

    output.innerHTML = personHTML;
}

render(outputEl)

function updatePersonData({name, isAlive, hobby}) {

    if (name !== undefined) {
        person.changeName(name);
    }

    if (isAlive !== undefined) {
        person.changeLifeStatus(isAlive);
    }

    if (hobby !== undefined) {
        person.addHobby(hobby);
    }

    render(outputEl);
}

updatePersonData({name: 'cr7', isAlive: false, hobby: 'Weightlifting'});
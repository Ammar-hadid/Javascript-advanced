// Maak een boek object waar je allemaal gegevens van een boek in kunt opslaan en tonen op het scherm.

// Het object moet de volgende properties bevatten:

//     Titel: de titel van het boek (string)
//     Auteur: de auteur van het boek (string)
//     Uitgeverij: de uitgeverij van het boek (string)
//     Jaar: het jaar van publicatie van het boek (number)
//     Verkocht: aantal verkochten exemplaren (number)
//     Prijs: prijs van het boek (string)

// Toon elke property op het scherm door het in een p-tag te plaatsen. Hiervoor maak je in je HTML een div-tag aan met de class 'output'.

// In de theorie staat uitgelegd hoe je dit moet doen.

// Let op: in de code conventions staat dat je de code in het Engels moet schrijven!›

const book = {
    title: 'The Final Empire',
    author: 'Brandon Sanderson',
    publisher: 'Tor Books',
    year: 2006,
    sold: 10000000,
    price: '€25'
}

const output = document.querySelector('.output');

output.innerHTML = `
    <p><strong>Title: </strong>${book.title}</p>
    <p><strong>Author: </strong>${book.author}</p>
    <p><strong>Publisher: </strong>${book.publisher}</p>
    <p><strong>Year: </strong>${book.year}</p>
    <p><strong>Sold: </strong>${book.sold}</p>
    <p><strong>Price: </strong>${book.price}</p>
`
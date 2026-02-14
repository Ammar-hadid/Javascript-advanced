// Opdracht 4.1: Simpele Opslag
console.log('🚀 Opdracht 4.1: Simpele Opslag');

function slaOpNaam() {
    console.log('slaOpNaam() aangeroepen');
    
    // TODO: Haal naam uit input veld
    const naam = document.getElementById('naam-input').value.trim();
    
    // TODO: Check of naam niet leeg is
    if (naam === '') {
        alert('Voer eerst een naam in!');
        return;
    };
    
    // TODO: Sla naam op in localStorage
    /* jouw code hier */
    localStorage.setItem('name', JSON.stringify(naam));
    
    // TODO: Toon welkomstbericht
    toonWelkom();
    
    // Maak input leeg
    document.getElementById('naam-input').value = '';
}

function toonWelkom() {
    // TODO: Haal naam op uit localStorage
    const opgeslagenNaam = JSON.parse(localStorage.getItem('name'));
    
    const welkomElement = document.getElementById('welkom-bericht');
    
    // TODO: Toon juiste bericht
    if (opgeslagenNaam) {
        welkomElement.textContent = `Welkom, ${opgeslagenNaam}`
    } else {
        welkomElement.textContent = 'Geen naam opgeslagen.';
    }
}

function wisNaam() {
    // TODO: Verwijder naam uit localStorage
    localStorage.removeItem('name')
    
    toonWelkom();
}

// TODO: Roep toonWelkom() aan bij pagina laden
toonWelkom();
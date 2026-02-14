// Opdracht 4.2: Todo Lijst
console.log('🚀 Opdracht 4.2: Todo Lijst');

let taken = []; // Array van strings (geen objecten!)

function voegTaakToe() {
    const input = document.getElementById('nieuwe-taak');
    const taakTekst = input.value.trim();
    
    if (taakTekst === '') {
        alert('Voer een taak in!');
        return;
    }
    
    // TODO: Voeg taak toe aan array (gewoon de string)
    taken.push(taakTekst);
    
    // TODO: Sla taken op in localStorage
    localStorage.setItem('list', JSON.stringify(taken))
    
    // Maak input leeg en update UI
    input.value = '';
    toonTaken();
}

function laadTaken() {
    // TODO: Haal taken op uit localStorage
    const opgeslagenTaken = JSON.parse(localStorage.getItem('list'))
    
    if (opgeslagenTaken) {
        // TODO: Parse JSON naar array
        taken = opgeslagenTaken;
    }
}

function toonTaken() {
    const container = document.getElementById('taken-lijst');
    
    // TODO: Update teller
    document.getElementById('aantal-taken').textContent = taken.length;
    
    if (taken.length === 0) {
        container.innerHTML = '<p>Geen taken toegevoegd.</p>';
        return;
    }
    
    // TODO: Genereer HTML voor alle taken
    const takenHTML = taken.map((taak, index) => `
        <div class="taak">
            ${taak}
            <button onclick="verwijderTaak(${index})">🗑️</button>
        </div>
    `).join('');
    
    container.innerHTML = takenHTML;
    

}

function verwijderTaak(index) {
    // TODO: Verwijder taak op specifieke index
    taken.splice(index, 1);
    
    // TODO: Sla taken op en update UI
    localStorage.setItem('list', JSON.stringify(taken))
    toonTaken();
}

function wisAlleTaken() {
    if (confirm('Weet je zeker dat je alle taken wilt wissen?')) {
        // TODO: Maak array leeg
        taken = [];
        
        // TODO: Verwijder uit localStorage
        localStorage.removeItem('list');
        
        toonTaken();
    }
}

// TODO: Initialisatie bij pagina laden
/* jouw code hier - gebruik addEventListener */;
document.addEventListener('DomContentLoaded', () => {
    laadTaken();
    toonTaken();
})
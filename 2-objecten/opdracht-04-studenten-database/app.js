import {students} from './students.js';

const studentsContainer = document.getElementById('studenten-lijst');

const buttonsContainer = document.querySelector('.control-group');

buttonsContainer.addEventListener('click', e => {

  if (e.target.closest('.toon-studenten')) {
    toonAlleStudenten(studentsContainer);
  }

  else if (e.target.closest('.toon-actieve-studenten')) {
    toonActieveStudenten(studentsContainer);
  }

  else if (e.target.closest('.toon-top-studenten')) {
    toonTopStudenten(studentsContainer);
  }
})


function toonAlleStudenten(container) {

  renderStudents(container, students);
}

function toonActieveStudenten(container) {

  const activeStudents = students.filter(s => s.actief);

  renderStudents(container, activeStudents);
}

function toonTopStudenten(container) {
  
  const topStudents = students.filter(s => s.cijfer >= 8.0);

  renderStudents(container, topStudents);
}

function renderStudents(container, arr) {
  container.innerHTML = arr.map(s => {

    const activeClass = s.actief ? 'actief' : 'inactief'

    return `<article class="${activeClass}">
                <strong>${s.naam}</strong> (${s.leeftijd} jaar)<br>
                📚 ${s.studie}<br>
                📊 Cijfer: ${s.cijfer} | Status: ${s.actief}
            </article>`
  }).join('');
}

toonAlleStudenten(studentsContainer);

const mainScreen = document.getElementById('birthday-reminder-sec');
const nothingFoundScreen = document.getElementById('nothing-found');

const screens = [mainScreen, nothingFoundScreen];

document.addEventListener('click', e => {
    
    if (e.target.closest('.clear-btn')) {
        const isconfirmed = confirm('Are you sure you want to clear all birthdays from the screen?');

        if (isconfirmed) {
            render([]);
            showScreen(nothingFoundScreen);
        }
    }
})

function getDaysLeft(dateString) {
    const today = new Date();
    const userBirthDate = new Date(dateString); 

    const currentYear = today.getFullYear(); 

    let birthday = new Date( 
        currentYear, 
        userBirthDate.getMonth(), 
        userBirthDate.getDate() 
    );


    if (birthday < today) { 
        birthday = new Date(
            currentYear + 1, 
            userBirthDate.getMonth(),
            userBirthDate.getDate()
        );
    }

    const timeLeftMs = birthday - today;

    return Math.ceil(timeLeftMs / (1000 * 60 * 60 * 24));
}


function getWrapperHTML(arr) {
    const featuredObj = getFeaturedObj(arr);

    return arr.filter(p => p !== featuredObj)
            .sort((a, b) => a.daysLeft - b.daysLeft)
            .map(p => {
            return `    
                    <div class="card">
                        <div class="text">
                            <p>${p.name}</p>
                            <ul>
                                <li>${p.birthDate}</li>
                                <li>${p.daysLeft} days left</li>
                            </ul>
                        </div>

                        <img src="${p.image}" alt="${p.name}">
                    </div>
                    `
            }).join('');
}

function getFeaturedHTML(arr) {
    const featuredObj = getFeaturedObj(arr);

    return `    <div class="img-block">
                  <h2>up next</h2>
                  <img src="${featuredObj.image}" alt="${featuredObj.name}">
                </div>

                <ul class="data-list">
                  <li>${featuredObj.name}</li>
                  <li>${featuredObj.birthDate}</li>
                  <li>${featuredObj.daysLeft} days left</li>
                </ul>
            `
}

function getFeaturedObj(arr) {

    const sortedList = [...arr].sort((a, b) => a.daysLeft - b.daysLeft);

    return sortedList[0];
}

function render(arr) {
    const cardWrapper = document.querySelector('.card-wrapper');
    const featuredCard = document.querySelector('.featured');
    const upcomingBirthdaysEl = document.querySelector('#upcoming-birthdays');

    if (!arr | arr.length === 0) {
        cardWrapper.innerHTML = '';
        featuredCard.innerHTML = '';
        upcomingBirthdaysEl.parentElement.innerHTML = '';
        return;
    }

    cardWrapper.innerHTML = getWrapperHTML(arr);
    featuredCard.innerHTML = getFeaturedHTML(arr);

    upcomingBirthdaysEl.textContent = arr.length
}

function showScreen(screen) {
    screens.forEach(s => s.classList.add('hidden'));

    screen.classList.remove('hidden')
}

function init() {
    fetch('./birthday.json')
    .then(r => r.json())
    .then(arr => {
        const updatedArr = arr.map(p => (
            {
                ...p,
                daysLeft: getDaysLeft(p.birthDate)
            }
        ))
        render(updatedArr);
    })
}

init();
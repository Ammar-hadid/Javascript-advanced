
function getFlagsHTML(countriesArr) {
    return [...countriesArr].sort( (a, b) => {
        return a.name.common.localeCompare(b.name.common);
    })
    .map(c => {
        return `
        <div class="card">

            <div class="img-wrapper">
                <img src="${c.flags.svg}" alt="${c.flags.alt || `${c.name.common} Flag`}">
            </div>

            <div class="content">
                <p>${c.name.common}</p>
                <p>${c.name.official}</p>
            </div>
        
        </div>
        `
    }).join('');
}

function renderCountries(countriesArr) {
    const wrapper = document.querySelector('.card-wrapper');
    if (!wrapper) return console.error('ERROR: .card-wrapper not found')
    wrapper.innerHTML = getFlagsHTML(countriesArr);
}

function init() {
    fetch('https://restcountries.com/v3.1/all?fields=name,flags')
    .then (r => {
        if (!r.ok) {
            throw new Error('ERROR: API unavailable');
        }

        return r.json();
    })
    .then (d => renderCountries(d))
    .catch(error => {
        console.error(`ERROR: ${error}`);
    })
}

init();


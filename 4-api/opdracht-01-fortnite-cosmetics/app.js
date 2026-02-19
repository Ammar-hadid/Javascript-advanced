function getWrapperHtml(itemsArr) {
    return itemsArr.map(i => {
        const image = i.images.icon ? i.images.icon : i.images.smallIcon

        return `
                <div class="card">
                    <img src="${image}">

                    <div class="overlay">
                        <p>${i.name}</p>

                        <ul>
                        <li>${i.type.displayValue}</li>
                        <li>${i.rarity.displayValue}</li>
                        </ul>
                    </div>
                </div>
        `
    }).join('');
}

function render(itemsArr) {
    const wrapper = document.querySelector('.card-wrapper');

    wrapper.innerHTML = getWrapperHtml(itemsArr)
}

function init() {
    fetch('https://fortnite-api.com/v2/cosmetics/new')
    .then(r => {
        if (!r.ok) {
            throw new Error('API is niet beschikbaar')
        }

        return r.json();
    })
    .then(d => {
        render(d.data.items.br)
    })
    .catch(error => {
        console.log(`ERROR: ${error}`)
    })
}

init();
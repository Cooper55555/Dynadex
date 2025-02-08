const cards = [
    { name: 'Bulbasaur', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/001.png', description: '' },
    { name: 'Ivysaur', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/002.png', description: '' },
    { name: 'Venusaur', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/003.png', description: '' },
    { name: 'Charmander', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/004.png', description: '' },
    { name: 'Charmeleon', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/005.png', description: '' },
    { name: 'Charizard', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/006.png', description: '' },
    { name: 'Squirtle', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/007.png', description: '' },
    { name: 'Wartortle', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/008.png', description: '' },
    { name: 'Blastoise', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/009.png', description: '' },
    { name: 'Machop', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/066.png', description: '' },
    { name: 'Machoke', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/067.png', description: '' },
    { name: 'Machamp', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/068.png', description: '' },
    { name: 'Gastly', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/092.png', description: '' },
    { name: 'Haunter', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/093.png', description: '' },
    { name: 'Gengar', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/094.png', description: '' },
    { name: 'Krabby', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/098.png', description: '' },
    { name: 'Kingler', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/099.png', description: '' },
    { name: 'Articuno', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/144.png', description: '' },
    { name: 'Zapdos', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/145.png', description: '' },
    { name: 'Moltres', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/146.png', description: '' },
    { name: 'Beldum', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/374.png', description: '' },
    { name: 'Metang', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/375.png', description: '' },
    { name: 'Metagross', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/376.png', description: '' },
    { name: 'Pidove', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/519.png', description: '' },
    { name: 'Tranquill', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/520.png', description: '' },
    { name: 'Unfezant', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/521.png', description: '' },
    { name: 'Drilbur', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/529.png', description: '' },
    { name: 'Excadrill', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/530.png', description: '' },
    { name: 'Darumaka', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/554.png', description: '' },
    { name: 'Darmanitan', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/555.png', description: '' },
    { name: 'Cryogonal', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/615.png', description: '' },
    { name: 'Grookey', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/810.png', description: '' },
    { name: 'Thwacky', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/811.png', description: '' },
    { name: 'Rillaboom', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/812.png', description: '' },
    { name: 'Scorbunny', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/813.png', description: '' },
    { name: 'Raboot', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/814.png', description: '' },
    { name: 'Cinderace', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/815.png', description: '' },
    { name: 'Sobble', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/816.png', description: '' },
    { name: 'Drizzile', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/817.png', description: '' },
    { name: 'Inteleon', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/818.png', description: '' },
    { name: 'Skwovet', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/819.png', description: '' },
    { name: 'Greedent', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/820.png', description: '' },
    { name: 'Wooloo', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/831.png', description: '' },
    { name: 'Dubwool', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/832.png', description: '' },
    { name: 'Low Key Form Toxtricity', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/849.png', description: '' },
    { name: 'Amped Form Toxtricity', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/849_f2.png', description: '' },
    { name: 'Falinks', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/870.png', description: '' },
];

function displayCards() {
    const cardGrid = document.getElementById('cardGrid');

    // Clear the card grid before displaying cards
    cardGrid.innerHTML = '';

    cards.forEach((card, index) => {
        // Retrieve count from localStorage, or set to 0
        let count = parseInt(localStorage.getItem(`count-${index}`)) || 0;
        const checkboxId = `checkbox-${index}`; // Unique checkbox ID
        const isChecked = JSON.parse(localStorage.getItem(checkboxId)) || (count > 0); // Load state from localStorage or determine based on count

        const cardElement = document.createElement('div');
        cardElement.className = 'card';

        const cardHTML = `
        <div class="progress-bar-container">
            <div class="checkboxes-important">
                <label class="switch" id="leverSwitch-${index}">
                    <input type="checkbox" id="${checkboxId}" class="checkboxclass" onclick="toggleAnimation('${checkboxId}')">
                    <span class="slider"></span>
                </label>
            </div>
            <div class="counter">
                <button id="decrement-${index}">-</button>
                <span id="count-${index}">0</span>
                <button id="increment-${index}">+</button>
            </div>
        </div>
        <img src="${card.image}" alt="${card.name}">
        <h2>${card.name}</h2>
        <p>${card.description}</p>
    `;

        cardElement.innerHTML += cardHTML;

        const checkbox = cardElement.querySelector(`#${checkboxId}`);

        cardElement.querySelector(`#increment-${index}`).addEventListener('click', () => {
            count++;
            cardElement.querySelector(`#count-${index}`).textContent = count;
            checkbox.checked = count > 0;
            saveCount(index, count);
        });

        cardElement.querySelector(`#decrement-${index}`).addEventListener('click', () => {
            if (count > 0) {
                count--;
                cardElement.querySelector(`#count-${index}`).textContent = count;
            }
            checkbox.checked = count > 0;
            saveCount(index, count);
        });

        checkbox.addEventListener('change', () => {
            count = checkbox.checked ? 1 : 0;
            cardElement.querySelector(`#count-${index}`).textContent = count;
            saveCount(index, count);
            localStorage.setItem(checkboxId, checkbox.checked);
        });

        cardGrid.appendChild(cardElement);
    });
}

function saveCount(index, count) {
    localStorage.setItem(`count-${index}`, count);
}

window.onload = () => {
    displayCards();
};

function toggleAnimation() {
    const switchInput = document.getElementById('leverSwitch');
    const slider = document.querySelector('.slider');

    slider.classList.add('animate');

    setTimeout(() => {
        slider.classList.remove('animate');
    }, 400);
}
const searchButton = document.getElementById('searchCountry').addEventListener('click', searchCountry);
const searchField = document.getElementById('search').addEventListener('keydown', (e) => {
    if (e.code === 'Enter') {
        searchCountry();
        document.getElementById('search').value = "";
    }
});

function removeChildren() {
    const removeFlag = document.getElementById('flagHolder');
    const removeHeader = document.getElementById('header');
    const removeDescription = document.getElementById('description');
    const removeCapitalCurrency = document.getElementById('capital-Currency');
    const removeLanguages = document.getElementById('languages');

    removeHeader.innerHTML = '';
    removeFlag.innerHTML = '';
    removeDescription.innerHTML = '';
    removeCapitalCurrency.innerHTML = '';
    removeLanguages.innerHTML = '';
}

function getUserInput() {
    let str = document.getElementById('search').value;
    return str;
}

async  function searchCountry() {
    try {
        const result = await axios.get('https://restcountries.eu/rest/v2/name/' + getUserInput());
        const nameCountry = result.data[0].name;
        const subRegion = result.data[0].subregion;
        const population = result.data[0].population;
        const capital = result.data[0].capital;
        document.getElementById('infoHolder').style.display = 'flex';

        // empty container first:
        removeChildren();
        // set flag img
        createFlag(result);
        // create H1
        innerTitle.textContent = result.data[0].name;
        // Create first line country description
        descriptionCountry.textContent = nameCountry + ' is situated in ' + subRegion + '. It has a population of ' + population + ' people.';
        // Create capital and currency line
        capitalCurrency.textContent = 'The capital is ' + capital + currencies(result) + '\'s';
        // Create languages line
        languagesSpoken.textContent = languages(result);
    }
    catch (e) {
        removeChildren();
        innerTitle.textContent = 'Too bad!'
        descriptionCountry.textContent = 'You made a typo or this country doesn\'t exist, please try again';
    }
}

// Get container
const container = document.getElementById('infoHolder');

// create container for flag
const flagHolder = document.createElement('div');
flagHolder.setAttribute('id', 'flagHolder');
container.appendChild(flagHolder);

// create container for text
const textContainer = document.createElement('div');
textContainer.setAttribute('id', 'textContainer');
container.appendChild(textContainer)

// country name in H1
const countryName = document.createElement('h1');
countryName.setAttribute('id', 'header');
textContainer.appendChild(countryName);

const innerTitle = document.getElementById('header');

// Country omschrijving
const countryDescription = document.createElement('p');
countryDescription.setAttribute('id', 'description');
textContainer.appendChild(countryDescription);

const descriptionCountry = document.getElementById('description');

// Country capital and currency
const capitalAndCurrency = document.createElement('p');
capitalAndCurrency.setAttribute('id', 'capital-Currency');
textContainer.appendChild(capitalAndCurrency);

const capitalCurrency = document.getElementById('capital-Currency');

// Spoken languages
const spokenLanguages = document.createElement('p');
spokenLanguages.setAttribute('id', 'languages');
textContainer.appendChild(spokenLanguages);

const languagesSpoken = document.getElementById('languages');

// FUNCTIONS

function createFlag(array) {
    const flag = document.createElement('img');
    flag.setAttribute('id', 'countryFlag');
    flag.setAttribute('src', array.data[0].flag);
    flagHolder.appendChild(flag);
}

function currencies(array) {
        const availableCurrencies = array.data[0].currencies.map((currency) => {
            return currency.name;
        })
        // Belangrijk! Zorg voor return geen console.log anders werkt de functie niet!
        return ' and you can pay with: ' + availableCurrencies.join(' and ');
}

function languages(array) {
        const spokenLanguages = array.data[0].languages.map((language) => {
            return language.name;
        })
        return 'They speak: ' + spokenLanguages.join(' and ').replace(' and', ', ');
}
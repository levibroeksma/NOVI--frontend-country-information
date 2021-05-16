// const axios = require('axios');

const searchButton = document.getElementById('searchCountry').addEventListener('click', searchCountry);

async  function searchCountry() {
    try {
        const result = await axios.get('https://restcountries.eu/rest/v2/name/belgium');

        const nameCountry = result.data[0].name;
        const subRegion = result.data[0].subregion;
        const population = result.data[0].population;
        const capital = result.data[0].capital;

        document.getElementById('infoHolder').style.display = 'flex';

        // set flag img
        await createFlag();
        // create H1
        innerTitle.textContent = result.data[0].name;
        // Create first line country description
        descriptionCountry.textContent = nameCountry + ' is situated in ' + subRegion + '. It has a population of ' + population + ' people.';
        // Create capital and currency line
        capitalCurrency.textContent = 'The capital is ' + capital + await currencies() + '\'s';
        // Create languages line
        languagesSpoken.textContent = await languages();


    } catch (e) {
        console.log('you still suck');
    }
}


// Get container

const container = document.getElementById('infoHolder');

// Create the img

async function createFlag() {
    const result = await axios.get('https://restcountries.eu/rest/v2/name/belgium');


    const flag = document.createElement('img');
    flag.setAttribute('id', 'countryFlag');
    flag.setAttribute('src', result.data[0].flag);
    flagHolder.appendChild(flag);
}

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
capitalAndCurrency.setAttribute('id', 'Capital-Currency');
textContainer.appendChild(capitalAndCurrency);

const capitalCurrency = document.getElementById('Capital-Currency');

// Spoken languages

const spokenLanguages = document.createElement('p');
spokenLanguages.setAttribute('id', 'languages');
textContainer.appendChild(spokenLanguages);

const languagesSpoken = document.getElementById('languages');


// async  function searchCountry() {
//     try {
//         const result = await axios.get('https://restcountries.eu/rest/v2/name/belgium');
//
//         const nameCountry = result.data[0].name;
//         const subRegion = result.data[0].subregion;
//         const population = result.data[0].population;
//         const capital = result.data[0].capital;
//
//         console.log(nameCountry + ' is situated in ' + subRegion + '. It has a population of ' + population + ' people.')
//         console.log('\n');
//
//         console.log('The capital is ' + capital + await currencies());
//
//
//     } catch (e) {
//         console.log('Someting went wong');
//     }
// }


async function currencies() {
    try {
        const result = await axios.get('https://restcountries.eu/rest/v2/name/belgium');
        const availableCurrencies = result.data[0].currencies.map((currency) => {
            return currency.name;
        })
        // Belangrijk! Zorg voor return geen console.log anders werkt de functie niet!
        return ' and you can pay with: ' + availableCurrencies.join(' and ');

    } catch (e) {
        return 'you suck';
    }
}

// const langButton = document.getElementById('langButton').addEventListener('click', languages);

async function languages() {
    try {
        const result = await axios.get('https://restcountries.eu/rest/v2/name/belgium');
        const spokenLanguages = result.data[0].languages.map((language) => {
            return language.name;
        })
        return 'They speak: ' + spokenLanguages.join(' and ').replace('and', ', ');
    }
    catch (e) {
        return 'you fail'
    }
}



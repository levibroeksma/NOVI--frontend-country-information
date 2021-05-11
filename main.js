// const axios = require('axios');

const searchButton = document.getElementById('searchCountry').addEventListener('click', searchCountry);

// async  function searchCountry() {
//     try {
//         const result = await axios.get('https://restcountries.eu/rest/v2/name/belgium');
//         innerTitle.textContent = result.data[0].name;
//     } catch (e) {
//         console.log('you still suck');
//     }
// }
//
// const container = document.getElementById('infoHolder');
// const countryName = document.createElement('h1');
// countryName.setAttribute('id', 'header');
// container.appendChild(countryName);
//
// const innerTitle = document.getElementById('header');

async  function searchCountry() {
    try {
        const result = await axios.get('https://restcountries.eu/rest/v2/name/belgium');

        const nameCountry = result.data[0].name;
        const subRegion = result.data[0].subregion;
        const population = result.data[0].population;
        const capital = result.data[0].capital;

        console.log(nameCountry + ' is situated in ' + subRegion + '. It has a population of ' + population + ' people.')
        console.log('\n');
        console.log('The capital is ' + capital);
        console.log('\n');

    } catch (e) {
        console.log('you still suck');
    }
}

const currencyButton = document.getElementById('currencyString').addEventListener('click', currencies);

async function currencies() {
    try {
        const result = await axios.get('https://restcountries.eu/rest/v2/name/belgium');
        const currency = result.data[0].currencies[0].name;
        console.log(' and you can pay with ' + currency + '\'s');
    } catch (e) {
        console.log('you suck');
    }
}

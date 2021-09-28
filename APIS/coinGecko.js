const CoinGecko = require('coingecko-api');

const CoinGeckoClient = new CoinGecko();

const coinGecko = {
    // Queries the price of a criptocurrency to the coingecko API
    criptoPrice: async(cripto) => {

        let criptoToLowerCase = cripto.toString().toLowerCase();

    // Queries the API
        let geckoJson = await CoinGeckoClient.simple.price({
            ids: criptoToLowerCase,
            vs_currencies: 'usd',
        });
    // Stores the data value recieved from the API 
        const priceValue = Object.values(geckoJson.data)[0];
        const priceUsd = priceValue.usd;

        return priceUsd;
    }
}

module.exports = coinGecko;
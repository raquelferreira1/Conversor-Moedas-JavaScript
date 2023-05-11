const button = document.getElementById('button-conversor')
const select = document.getElementById('currency-select')

$(document).ready(function () {
    let $inputReal = $("#input-real");
    $inputReal.mask('00.000.00', { reverse: true });
});

const convertValues = async () => {
    const inputReais = document.getElementById('input-real').value
    const realValueText = document.getElementById('real-value-text')
    const currencyValueText = document.getElementById('currency-value-text')

    const api = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(response => response.json())

    const dolar = api.USDBRL.high
    const euro = api.EURBRL.high
    const bitcoin = api.BTCBRL.high

    realValueText.innerHTML = currencyValueText.innerHTML = new Intl.NumberFormat('pt-BR',
        { style: 'currency', currency: 'BRL' }
    ).format(inputReais);

    if (select.value === 'US$ Dólar Americano') {
        currencyValueText.innerHTML = new Intl.NumberFormat('en-US',
            { style: 'currency', currency: 'USD' }
        ).format(inputReais / dolar)
    }

    if (select.value === '€ Euro') {
        currencyValueText.innerHTML = new Intl.NumberFormat('de-DE',
            { style: 'currency', currency: 'EUR' }
        ).format(inputReais / euro)
    }

    if (select.value === 'Bitcoin') {
        currencyValueText.innerHTML = new Intl.NumberFormat('en-US',
            { style: 'currency', currency: 'BTC' }
        ).format(inputReais / bitcoin * 1000)
    }
}

const changeCurrency = () => {
    const currencyName = document.getElementById('currency-name')
    const currencyImg = document.getElementById('currency-img')

    if (select.value === 'US$ Dólar Americano') {
        currencyName.innerHTML = 'Dólar'
        currencyImg.src = './assets/estados-unidos.png'
    }

    if (select.value === '€ Euro') {
        currencyName.innerHTML = 'Euro'
        currencyImg.src = './assets/euro.png'
    }

    if (select.value === 'Bitcoin') {
        currencyName.innerHTML = 'Bitcoin'
        currencyImg.src = './assets/bitcoin.png'
    }

    convertValues()
}

button.addEventListener('click', convertValues)
select.addEventListener('change', changeCurrency)
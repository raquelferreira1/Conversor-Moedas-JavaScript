const button = document.getElementById('button-conversor')
const select = document.getElementById('currency-select')

const dolar = 5.2

const convertValues = () => {
    const inputReais = document.getElementById('input-real').value
    const realValueText = document.getElementById('real-value-text')
    const currencyValueText = document.getElementById('currency-value-text')

    realValueText.innerHTML = currencyValueText.innerHTML = new Intl.NumberFormat('pt-BR',
        { style: 'currency', currency: 'BRL' }
    ).format(inputReais);

    currencyValueText.innerHTML = new Intl.NumberFormat('en-US',
        { style: 'currency', currency: 'USD' }
    ).format(inputReais / dolar);
}

const changeCurrency = () => {
    const currencyName = document.getElementById('currency-name')
    const currencyImg = document.getElementById('currency-img')
    
    if (select.value === 'US$ Dólar Americano'){
        currencyName.innerHTML = 'Dólar'
        currencyImg.src = './assets/estados-unidos.png'
    }

    if (select.value === '€ Euro'){
        currencyName.innerHTML = 'Euro'
        currencyImg.src = './assets/euro.png'
    }
}

button.addEventListener('click', convertValues)
select.addEventListener('change', changeCurrency)
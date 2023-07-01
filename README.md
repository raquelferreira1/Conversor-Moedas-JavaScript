# Conversor de Moedas :currency_exchange:

## 📝 Sobre

Conversor de Moedas em tempo real. Converte de Real para Dólar, Euro e Bitcoin.

## 🚀 Tecnologias Utilizadas

-   [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
-   [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
-   [JavaScript](https://developer.mozilla.org/en-US/docs/Web/javascript)

### 📌 Alguns Destaques

- Responsivo para computador / celular;
- HTML Semântico;
- Utiliza API Fetch

> Para ver o projeto on-line clique **[AQUI](https://raquelferreira1.github.io/Conversor-Moedas-JavaScript/)**

<img src="https://github.com/raquelferreira1/Conversor-Moedas/blob/master/assets/print-tela.png?raw=true">

## Atualização 13/05/2023

- Alteração no método mask para: $inputReal.mask('000.000.000.000.000.000,00', { reverse: true });
- Alteração no trecho "const inputReais = document.getElementById('input-real').value.replace(/[^\d]/g, '').slice(0, -2)" onde o código não estava aceitando valores maiores que 999,99
- Inclusão de um "if(!inputReais || inputReais < 1)" para retornar um alerta caso não seja adicionado um valor ou caso seja digitado o valor "0" (Zero)

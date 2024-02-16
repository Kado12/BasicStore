const h1 = document.querySelector('h1')
const numberOne = document.getElementById('numberOne')
const numberTwo = document.getElementById('numberTwo')
const btnResult = document.getElementById('result')
const pResult = document.getElementById('pResult')

btnResult.addEventListener('click', () => {
   plus = parseInt(numberOne.value) + parseInt(numberTwo.value)
   pResult.innerText = plus
})
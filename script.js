let QuantidadeCartas = prompt('Com quantas cartas você deseja jogar?')
QuantidadeCartas = Number(QuantidadeCartas)
while (isNaN(QuantidadeCartas) || QuantidadeCartas % 2 == 1 || 4 > QuantidadeCartas || QuantidadeCartas > 14){
    QuantidadeCartas = prompt('Número inválido, digite novamente a quantidade de cartas que você deseja jogar')
    QuantidadeCartas = Number(QuantidadeCartas)
}

function comparador() { 
	return Math.random() - 0.5; 
}
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}


for( let i=0 ; i < QuantidadeCartas ; i ++){
    const ParrotName = ['bobross','explody','fiesta', 'metal', 'revertit', 'triplets','unicorn']
    ParrotName.sort(comparador)

    const CardTemplate = `
    <div class="card">
        <img class="face front-face" src="./img/front.png">
        <img class="face back-face" src="./img/${ParrotName[getRandomIntInclusive(0, 6)]}parrot.gif">
    </div>
    `
    document.querySelector('.content').innerHTML += CardTemplate
}


const card = document.querySelectorAll('.card');
function flipCard() {
  this.classList.toggle('flip');
}
card.forEach(card => card.addEventListener('click', flipCard));
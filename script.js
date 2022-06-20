let Deck = []
const DeckPar2 = []
const ParrotName = ['bobross','explody','fiesta', 'metal', 'revertit', 'triplets','unicorn']

//validação do prompt
let QuantidadeCartas = prompt('Com quantas cartas você deseja jogar?')
QuantidadeCartas = Number(QuantidadeCartas)
while (isNaN(QuantidadeCartas) || QuantidadeCartas % 2 == 1 || 4 > QuantidadeCartas || QuantidadeCartas > 14){
    QuantidadeCartas = prompt('Número inválido, digite novamente a quantidade de cartas que você deseja jogar')
    QuantidadeCartas = Number(QuantidadeCartas)
}
// função número aleatório
function comparador() { 
	return Math.random() - 0.5; 
}

QuantidadeCartas = QuantidadeCartas/2
//construindo uma array com todas cartas em ordem aleatória
for( let i=0 ; i < QuantidadeCartas ; i ++){
    Deck.push(ParrotName[i])
}
for( let i=0 ; i < QuantidadeCartas ; i ++){
    DeckPar2.push(ParrotName[i])
}

Deck.push.apply(Deck, DeckPar2)
Deck.sort(comparador)

//colocando todas cartas no DOM
for( let i=0 ; i < QuantidadeCartas*2 ; i ++){
    const CardTemplate = `
    <div class="card">
        <img class="face front-face" src="./img/front.png">
        <img class="face back-face" src="./img/${Deck[i]}parrot.gif">
    </div>
    `
    document.querySelector('.content').innerHTML += CardTemplate
}

//função para a carta girar com um clique
const flipcard = document.querySelectorAll('.card');
function flipCard() {
  this.classList.toggle('flip');
}
flipcard.forEach(card => card.addEventListener('click', flipCard));

//
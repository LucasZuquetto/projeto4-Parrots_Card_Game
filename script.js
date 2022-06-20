let Deck = []
let DeckPar1 = []
let DeckPar2 = []
let contador = 0
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
    DeckPar1.push(ParrotName[i])
}
for( let i=0 ; i < QuantidadeCartas ; i ++){
    DeckPar2.push(ParrotName[i])
}
Deck.push.apply(Deck, DeckPar1)
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
const flipcard = document.querySelectorAll('.card')
function flipCardteste() {
    let verificador = document.querySelectorAll('.flipped')
    if(verificador.length <= 1 && this.classList.contains('flip') == false){
        this.classList.add('flip')
        this.classList.add('flipped')
        setTimeout(compararcartas, 2000)
    }
}
flipcard.forEach(card => card.addEventListener('click', flipCardteste))

//função para comparar as cartas e remover a classe flipped
function compararcartas(){
    let verificador = document.querySelectorAll('.flipped')
    let carta1
    if(verificador[0]){
    carta1 = verificador[0].querySelector('.back-face')
    carta1 = carta1.src
    }
    let carta2
    if(verificador[1]){
    carta2 = verificador[1].querySelector('.back-face')
    carta2 = carta2.src
    }
    if(verificador.length == 2){
        if(carta1 !== carta2){
            verificador[0] = verificador[0].classList.remove('flip')
            verificador[1] = verificador[1].classList.remove('flip')
            verificador[0] = verificador[0].classList.remove('flipped')
            verificador[1] = verificador[1].classList.remove('flipped')
            contador += 2
        }else{
            verificador[0] = verificador[0].classList.remove('flipped')
            verificador[1] = verificador[1].classList.remove('flipped')
            contador += 2
            FimDeJogo()
        }
    }

}
// função para verificar se todas as cartas estão viradas
function FimDeJogo(){
    let CartasFlip = document.querySelectorAll('.flip').length
    if(CartasFlip == QuantidadeCartas*2){
        alert(`Parabéns, você ganhou em ${contador} jogadas`)
    }
}

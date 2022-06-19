let QuantidadeCartas = prompt('Com quantas cartas você deseja jogar?')
QuantidadeCartas = Number(QuantidadeCartas)
while (isNaN(QuantidadeCartas) || QuantidadeCartas % 2 == 1 || 4 > QuantidadeCartas || QuantidadeCartas > 14){
    QuantidadeCartas = prompt('Número inválido, digite novamente a quantidade de cartas que você deseja jogar')
    QuantidadeCartas = Number(QuantidadeCartas)
}

function comparador() { 
	return Math.random() - 0.5; 
}
const ParrotName = ['bobross','explody','fiesta', 'metal', 'revertit', 'triplets','unicorn']
ParrotName.sort(comparador)

for( let i=0 ; i < QuantidadeCartas ; i += 2){
    const CardTemplate = `
    <div class="card">
        <img class="imgfront" src="./img/${ParrotName[i]}parrot.gif">
    </div>
    `
    document.querySelector('.content').innerHTML += CardTemplate + CardTemplate
    
}

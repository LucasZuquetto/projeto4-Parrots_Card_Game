let QuantidadeCartas = prompt('Com quantas cartas você deseja jogar?')
QuantidadeCartas = Number(QuantidadeCartas)
while (isNaN(QuantidadeCartas) || QuantidadeCartas % 2 == 1 || 4 > QuantidadeCartas || QuantidadeCartas > 14){
    QuantidadeCartas = prompt('Número inválido, digite novamente a quantidade de cartas que você deseja jogar')
    QuantidadeCartas = Number(QuantidadeCartas)
}
console.log(QuantidadeCartas)
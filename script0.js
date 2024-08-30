// Eu escolhi fazer o desafio em JavaScript porque é a linguagem que eu estou estudando no momento, então achei uma boa oportunidade para aplicar o que estou aprendendo.

let repetir = true

while (repetir) {
let vitoria = 0
let derrota = 0
let empate = 0

let rodadas = parseInt(prompt('O campeonato começou! \nQuer jogar uma melhor de 1, 3, 5 ou 7? (Digite apenas o número)'))
while (![1, 3, 5, 7].includes(rodadas)) {
    rodadas = parseInt(prompt('O campeonato começou! \nQuer jogar uma melhor de 1, 3, 5 ou 7? (Digite apenas o número)'))
}

let limite = Math.ceil(rodadas/2)

for (let i = 0; i < rodadas; i++) {

let vetor = ['pedra', 'papel', 'tesoura']
let sorteio = Math.floor(Math.random() * vetor.length)
let random = vetor[sorteio]
let user = prompt('Escolha pedra, papel ou tesoura').toLowerCase()

alert('Seu oponente escolheu: ' + random)

if (random === 'pedra' && user === 'papel') {
    alert('Você venceu!')
    vitoria++
} else if (random === 'papel' && user === 'tesoura') {
    alert('Você venceu!')
    vitoria++
} else if (random === 'tesoura' && user === 'pedra') {
    alert('Você venceu!')
    vitoria++
} else if (random === user) {
    alert('Houve um empate')
    empate++
} else {
    alert('Você perdeu!')
    derrota++
}

alert(`Placar: ${vitoria} vitórias, ${derrota} derrotas e ${empate} empates.`)

if (vitoria === limite || derrota === limite) {
    break
}
}

let partidas = vitoria + derrota + empate
let porcentagemV = partidas > 0 ? (vitoria / partidas * 100).toFixed(2) : 0
let porcentagemD = partidas > 0 ? (derrota / partidas * 100).toFixed(2) : 0
let porcentagemE = partidas > 0 ? (empate / partidas * 100).toFixed(2) : 0

alert(`O campeonato acabou! Suas estatísticas foram: \n
Percentual de vitórias: ${porcentagemV}% \nPercentual de derrotas: ${porcentagemD}% \nPercentual de empates: ${porcentagemE}%`)

repetir = confirm('Aceita uma revanche?')
}

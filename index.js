function saldoRankeada (vitorias, derrotas) {
    let resultado = vitorias - derrotas;
    return resultado
}

function verificarRankeada (saldo) {
    if (saldo <= 10) return "Ferro"

    if (saldo > 10 && saldo <= 20) return "Bronze"

    if (saldo > 20 && saldo <= 50) return "Prata"

    if (saldo > 50 && saldo <= 80) return "Ouro"

    if (saldo > 80 && saldo <= 90) return "Diamante"

    if (saldo > 90 && saldo <= 100) return "Lendario"

    if (saldo >= 101 ) return "Imortal "
} 

let guardaSaldo= saldoRankeada(100, 20)

let guardaRanking = verificarRankeada(guardaSaldo)

console.log(`O herói tem saldo de ${guardaSaldo} e está no nivel de ${guardaRanking}`)
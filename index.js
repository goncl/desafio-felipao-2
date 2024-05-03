let vitorias = 160
let derrotas = 6
let nivel = ""

let saldoVitorias = saldoDeVitorias(vitorias, derrotas)

nivel = saldoDeRankeadas(saldoDeVitorias)

console.log("O Herói tem saldo de " + saldoVitorias + " vitórias e está no nível de " + nivel)

function saldoDeVitorias (vit, der){
    return vit - der
}
function saldoDeRankeadas(saldo){
    let niv

    if(saldo <= 10){
        niv = "Ferro"
    }
        
    else if (saldo >= 11 && saldo <= 20){
        niv = "Bronze"
    }
    
    else if (saldo >= 21 && saldo <= 50){
        niv = "Prata" 
    }
    
    else if (saldo >= 51 && saldo <= 80){
        niv = "Ouro" 
    }
    
    else if(saldo >= 71 && saldo <= 90){
        niv = "Diamante" 
    }
    
    else if(saldo >= 91 && saldo <= 100){
        niv = "Lendário" 
    }
    
    else {
        niv = "Imortal" 
    }  

    return niv
}


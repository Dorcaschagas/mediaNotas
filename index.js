
const aprovacao = document.getElementById('aprovacao')

function media(){
    const prim = +document.getElementById('np1').value;
    const secun = +document.getElementById('np2').value;
    const terc = +document.getElementById('pim').value;
    const msg = document.getElementById('msg')

    let np1 = prim * 4
    let np2 = secun * 4
    let pim = terc * 2

    let soma = np1 + np2 + pim
    let media = parseFloat(soma) / 10

    if(media > 0){
        msg.innerHTML = `Média: ${media}`
        aprovacao.innerHTML = media >= 7? 'Aprovado!':'Reprovado! \n'
            
    } else {
        msg.innerHTML = ' ERRO! Digite um valor válido'
    }

    return exame(media)
}

function exame(valor){
    if(valor < 7){
        let restante = 10 - valor
        aprovacao.innerHTML += `Você precisa de:${restante.toFixed(2)} no exame, Bons estudos!`
    }
}

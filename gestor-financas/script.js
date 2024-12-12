window.onload = function recuperar(){ //recuperar dados  
    let atualcor = localStorage.getItem('atualcor')
    if(atualcor){
        atual.style.color = atualcor
    }

    let gastosSelect = document.getElementById('gastos');
    for (let i = 0; i < gastosSelect.options.length; i++) {
        let option = gastosSelect.options[i];
        if (option.value.startsWith('gasto')) {
            let listagastoText = localStorage.getItem(`${option.value}txt`);
            if (listagastoText) {
                option.text = listagastoText;
            }
        }
    }

}


//variáveis
let resultado = document.getElementById('resultado')
let salario = localStorage.getItem('salario') ? Number(localStorage.getItem('salario')) : 1500;
let atual = document.getElementById('atual')
atual.textContent = `Dinheiro atual R$${salario.toFixed(2)}`


//função colocar dinheiro
function colocar(){

     let valor = document.getElementById('valor').value
     valor = Number(valor)

     if (isNaN(valor) || valor <= 0){
        alert('Digite algum valor!')
        return
     }

     if (salario <= 0 || valor > salario){
        alert('Você não tem dinheiro suficiente!')
        return
     }

     salario -= valor
     localStorage.setItem('salario', salario)

     resultado.textContent = `Você gastou R$${valor.toFixed(2)} agora você tem R$${salario.toFixed(2)}`
     atual.textContent = `Dinheiro atual R$${salario.toFixed(2)}`

     if (salario <= 400){
        atual.style.color = 'red'
        localStorage.setItem('atualcor', atual.style.color)
     } else if (salario <= 800){
        atual.style.color = 'rgb(230, 186, 9)'
        localStorage.setItem('atualcor', atual.style.color)
     }

}


//resetar os dados
function resetar(){
    localStorage.clear()
    salario = 1500
    atual.textContent = `Dinheiro atual R$${salario.toFixed(2)}`
    atual.style.color = 'green'
    resultado.textContent = ''
    document.getElementById('gasto1').text = 'Gasto um (R$150,00) Clique e pague!'
    document.getElementById('gasto2').text = 'Gasto dois (R$150,00) Clique e pague!'
    document.getElementById('gasto3').text = 'Gasto três (R$50,00) Clique e pague!'
    document.getElementById('gasto4').text = 'Gasto quatro (R$600,00) Clique e pague!'
    document.getElementById('gasto5').text = 'Gasto cinco (R$50,00) Clique e pague!'
}


//função de gastos fixos
function gastofixo(valor, idgasto, descricao){

    let gastoPago = localStorage.getItem(`${idgasto}pago`) ? true : false

    if (gastoPago) {
        alert('Conta já paga!')
        return
    }

    if (salario < 0 || valor > salario){
        alert ('Você não tem dinheiro suficiente')
        return
    }

    salario -= valor
    localStorage.setItem('salario', salario)

    atual.textContent = `Dinheiro atual R$${salario.toFixed(2)}`

    if (salario <= 400){
        atual.style.color = 'red'
    } else if (salario <= 800){
        atual.style.color = 'rgb(230, 186, 9)'
    }
    localStorage.setItem('atualcor', atual.style.color)

    let listagasto = document.getElementById(idgasto)
    listagasto.text = (`${descricao} PAGO\u{1F973}`)
    localStorage.setItem(`${idgasto}txt`, listagasto.text)

    localStorage.setItem(`${idgasto}pago`, true)

}
window.onload = function recuperar(){
    let atualcor = localStorage.getItem('atualcor')
    if(atualcor){
        atual.style.color = atualcor
    }
    let gasto1txt = localStorage.getItem('gasto1txt')
    if(gasto1txt){
        document.getElementById('gasto1').text = gasto1txt
    }
    let gasto2txt = localStorage.getItem('gasto2txt')
    if(gasto2txt){
        document.getElementById('gasto2').text = gasto2txt
    }
    let gasto3txt = localStorage.getItem('gasto3txt')
    if(gasto3txt){
        document.getElementById('gasto3').text = gasto3txt
    }
    let gasto4txt = localStorage.getItem('gasto4txt')
    if(gasto4txt){
        document.getElementById('gasto4').text = gasto4txt
    }
    let gasto5txt = localStorage.getItem('gasto5txt') 
    if(gasto5txt){
        document.getElementById('gasto5').text = gasto5txt
    }
}

let resultado = document.getElementById('resultado')
let salario = localStorage.getItem('salario') ? Number(localStorage.getItem('salario')) : 1500;
let atual = document.getElementById('atual')
atual.innerHTML = `Dinheiro atual R$${salario.toFixed(2)}`

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

     resultado.innerHTML = `Você gastou R$${valor.toFixed(2)} agora você tem R$${salario.toFixed(2)}`
     atual.innerHTML = `Dinheiro atual R$${salario.toFixed(2)}`

     if (salario <= 400){
        atual.style.color = 'red'
        localStorage.setItem('atualcor', atual.style.color)
     } else if (salario <= 800){
        atual.style.color = 'rgb(230, 186, 9)'
        localStorage.setItem('atualcor', atual.style.color)
     }

}

function resetar(){
    localStorage.removeItem('salario')
    localStorage.removeItem('atualcor')
    localStorage.removeItem('gasto1txt')
    localStorage.removeItem('gasto2txt')
    localStorage.removeItem('gasto3txt')
    localStorage.removeItem('gasto4txt')
    localStorage.removeItem('gasto5txt')
    salario = 1500
    atual.innerHTML = `Dinheiro atual R$${salario.toFixed(2)}`
    atual.style.color = 'green'
    resultado.innerHTML = ''
    document.getElementById('gasto1').text = 'Gasto um (R$150,00) Clique e pague!'
    document.getElementById('gasto2').text = 'Gasto dois (R$150,00) Clique e pague!'
    document.getElementById('gasto3').text = 'Gasto três (R$50,00) Clique e pague!'
    document.getElementById('gasto4').text = 'Gasto quatro (R$600,00) Clique e pague!'
    document.getElementById('gasto5').text = 'Gasto cinco (R$50,00) Clique e pague!'
}

function gasto1(){

    let valorgasto1 = 150

    if (salario <= 0 || valorgasto1 > salario){
        alert('Você não tem dinheiro suficiente!')
        return
    }

    salario-= valorgasto1
    localStorage.setItem('salario', salario)
    atual.innerHTML = `Dinheiro atual R$${salario.toFixed(2)}`
    let flista = document.getElementById('gasto1')
    flista.text = `Gasto um (R$150,00) PAGO\u{1F973}`
    localStorage.setItem('gasto1txt', flista.text)
    if (salario <= 400){
        atual.style.color = 'red'
        localStorage.setItem('atualcor', atual.style.color)
     } else if (salario <= 800){
        atual.style.color = 'rgb(230, 186, 9)'
        localStorage.setItem('atualcor', atual.style.color)
     }
}

function gasto2(){

    let valorgasto2 = 150

    if (salario <= 0 || valorgasto2 > salario){
        alert('Você não tem dinheiro suficiente!')
        return
    }

    salario-= valorgasto2
    localStorage.setItem('salario', salario)
    atual.innerHTML = `Dinheiro atual R$${salario.toFixed(2)}`
    let llista = document.getElementById('gasto2')
    llista.text = `Gasto dois (R$150,00) PAGO\u{1F973}`
    localStorage.setItem('gasto2txt', llista.text)
    if (salario <= 400){
        atual.style.color = 'red'
        localStorage.setItem('atualcor', atual.style.color)
     } else if (salario <= 800){
        atual.style.color = 'rgb(230, 186, 9)'
        localStorage.setItem('atualcor', atual.style.color)
     }
}

function gasto3(){

    let valorgasto3 = 50

    if (salario <= 0 || valorgasto3 > salario){
        alert('Você não tem dinheiro suficiente!')
        return
    }

    salario-= valorgasto3
    localStorage.setItem('salario', salario)
    atual.innerHTML = `Dinheiro atual R$${salario.toFixed(2)}`
    let olista = document.getElementById('gasto3')
    olista.text = `Gasto três (R$50,00) PAGO\u{1F973}`
    localStorage.setItem('gasto3txt', olista.text)
    if (salario <= 400){
        atual.style.color = 'red'
        localStorage.setItem('atualcor', atual.style.color)
     } else if (salario <= 800){
        atual.style.color = 'rgb(230, 186, 9)'
        localStorage.setItem('atualcor', atual.style.color)
     }
}
function gasto4(){

    let valorgasto4 = 600

    if (salario <= 0 || valorgasto4 > salario){
        alert('Você não tem dinheiro suficiente!')
        return
    }

    salario -= valorgasto4
    localStorage.setItem('salario', salario)
    atual.innerHTML = `Dinheiro atual R$${salario.toFixed(2)}`
    let glista = document.getElementById('gasto4')
    glista.text = `Gasto quatro (R$600,00) PAGO\u{1F973}`
    localStorage.setItem('gasto4txt', glista.text)
    if (salario <= 400){
        atual.style.color = 'red'
        localStorage.setItem('atualcor', atual.style.color)
     } else if (salario <= 800){
        atual.style.color = 'rgb(230, 186, 9)'
        localStorage.setItem('atualcor', atual.style.color)
     }
}
function gasto5(){

    let valorgasto5 = 50

    if (salario <= 0 || valorgasto5 > salario){
        alert('Você não tem dinheiro suficiente!')
        return
    }

    salario -= valorgasto5
    localStorage.setItem('salario', salario)
    atual.innerHTML = `Dinheiro atual R$${salario.toFixed(2)}`
    let dlista = document.getElementById('gasto5')
    dlista.text = `Gasto cinco (R$50,00) PAGO\u{1F973}`
    localStorage.setItem('gasto5txt', dlista.text)
    if (salario <= 400){
        atual.style.color = 'red'
        localStorage.setItem('atualcor', atual.style.color)
     } else if (salario <= 800){
        atual.style.color = 'rgb(230, 186, 9)'
        localStorage.setItem('atualcor', atual.style.color)
     }
}
window.onload = function recuperar(){
    let atualcor = localStorage.getItem('atualcor')
    if(atualcor){
        atual.style.color = atualcor
    }
    let faculdadetxt = localStorage.getItem('faculdadetxt')
    if(faculdadetxt){
        document.getElementById('faculdade').text = faculdadetxt
    }
    let passagemtxt = localStorage.getItem('passagemtxt')
    if(passagemtxt){
        document.getElementById('passagem').text = passagemtxt
    }
    let oculostxt = localStorage.getItem('oculostxt')
    if(oculostxt){
        document.getElementById('oculos').text = oculostxt
    }
    let guardartxt = localStorage.getItem('guardartxt')
    if(guardartxt){
        document.getElementById('guardar').text = guardartxt
    }
    let donativotxt = localStorage.getItem('donativotxt') 
    if(donativotxt){
        document.getElementById('donativo').text = donativotxt
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
    localStorage.removeItem('faculdadetxt')
    localStorage.removeItem('passagemtxt')
    localStorage.removeItem('oculostxt')
    localStorage.removeItem('guardartxt')
    localStorage.removeItem('donativotxt')
    salario = 1500
    atual.innerHTML = `Dinheiro atual R$${salario.toFixed(2)}`
    atual.style.color = 'green'
    resultado.innerHTML = ''
    document.getElementById('faculdade').text = 'Faculdade (R$150,00) Clique e pague!'
    document.getElementById('passagem').text = 'Passagem libras (R$150,00) Clique e pague!'
    document.getElementById('oculos').text = 'Óculos (R$50,00) Clique e pague!'
    document.getElementById('guardar').text = 'Guardar (R$600,00) Clique e pague!'
    document.getElementById('donativo').text = 'Donativo (R$50,00) Clique e pague!'
}

function faculdade(){

    let valorfaculdade = 150

    if (salario <= 0 || valorfaculdade > salario){
        alert('Você não tem dinheiro suficiente!')
        return
    }

    salario-= valorfaculdade
    localStorage.setItem('salario', salario)
    atual.innerHTML = `Dinheiro atual R$${salario.toFixed(2)}`
    let flista = document.getElementById('faculdade')
    flista.text = `Faculdade (R$150,00) PAGO\u{1F973}`
    localStorage.setItem('faculdadetxt', flista.text)
    if (salario <= 400){
        atual.style.color = 'red'
        localStorage.setItem('atualcor', atual.style.color)
     } else if (salario <= 800){
        atual.style.color = 'rgb(230, 186, 9)'
        localStorage.setItem('atualcor', atual.style.color)
     }
}

function passagem(){

    let valorpassagem = 150

    if (salario <= 0 || valorpassagem > salario){
        alert('Você não tem dinheiro suficiente!')
        return
    }

    salario-= valorpassagem
    localStorage.setItem('salario', salario)
    atual.innerHTML = `Dinheiro atual R$${salario.toFixed(2)}`
    let llista = document.getElementById('passagem')
    llista.text = `Passagem libras (R$150,00) PAGO\u{1F973}`
    localStorage.setItem('passagemtxt', llista.text)
    if (salario <= 400){
        atual.style.color = 'red'
        localStorage.setItem('atualcor', atual.style.color)
     } else if (salario <= 800){
        atual.style.color = 'rgb(230, 186, 9)'
        localStorage.setItem('atualcor', atual.style.color)
     }
}

function oculos(){

    let valoroculos = 50

    if (salario <= 0 || valoroculos > salario){
        alert('Você não tem dinheiro suficiente!')
        return
    }

    salario-= valoroculos
    localStorage.setItem('salario', salario)
    atual.innerHTML = `Dinheiro atual R$${salario.toFixed(2)}`
    let olista = document.getElementById('oculos')
    olista.text = `Óculos (R$50,00) PAGO\u{1F973}`
    localStorage.setItem('oculostxt', olista.text)
    if (salario <= 400){
        atual.style.color = 'red'
        localStorage.setItem('atualcor', atual.style.color)
     } else if (salario <= 800){
        atual.style.color = 'rgb(230, 186, 9)'
        localStorage.setItem('atualcor', atual.style.color)
     }
}
function guardar(){

    let valorguardar = 600

    if (salario <= 0 || valorguardar > salario){
        alert('Você não tem dinheiro suficiente!')
        return
    }

    salario -= valorguardar
    localStorage.setItem('salario', salario)
    atual.innerHTML = `Dinheiro atual R$${salario.toFixed(2)}`
    let glista = document.getElementById('guardar')
    glista.text = `Guardar (R$600,00) PAGO\u{1F973}`
    localStorage.setItem('guardartxt', glista.text)
    if (salario <= 400){
        atual.style.color = 'red'
        localStorage.setItem('atualcor', atual.style.color)
     } else if (salario <= 800){
        atual.style.color = 'rgb(230, 186, 9)'
        localStorage.setItem('atualcor', atual.style.color)
     }
}
function donativo(){

    let valordonativo = 50

    if (salario <= 0 || valordonativo > salario){
        alert('Você não tem dinheiro suficiente!')
        return
    }

    salario -= valordonativo
    localStorage.setItem('salario', salario)
    atual.innerHTML = `Dinheiro atual R$${salario.toFixed(2)}`
    let dlista = document.getElementById('donativo')
    dlista.text = `Donativo (R$50,00) PAGO\u{1F973}`
    localStorage.setItem('donativotxt', dlista.text)
    if (salario <= 400){
        atual.style.color = 'red'
        localStorage.setItem('atualcor', atual.style.color)
     } else if (salario <= 800){
        atual.style.color = 'rgb(230, 186, 9)'
        localStorage.setItem('atualcor', atual.style.color)
     }
}
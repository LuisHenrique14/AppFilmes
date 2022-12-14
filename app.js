let spans = document.getElementsByTagName('span')

let filmes = []
let btn1 = document.querySelector('button.btn')
let btn2 = document.querySelector('button#btn1')

let inp = document.querySelector('input[name=produto]')

btn1.onclick = function(){    
    filmes.push(inp.value)
    console.log(filmes)
    spans[0].innerHTML = filmes
    lista = JSON.stringify(filmes)  
}

btn2.onclick = function(){    
    const numero = Math.floor((Math.random())* filmes.length)
    console.log(numero)
    spans[1].innerHTML = filmes[numero]
}
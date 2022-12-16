let btn42 = document.querySelector('button#btn42')
let btn43 = document.querySelector('button#btn43')

let spans = document.querySelector('span')

btn42.onclick = function(){
    listaReais = ["A Teoria de Tudo", "Sempre ao Seu Lado", "Dois Papas", "O Terminal ", "Sete Anos no Tibet", "Uma Mente Brilhante", "Prenda-me se For Capaz", 
    "Spotlight - Segredos Revelados", "Bohemian Rapsody", "Clube de Compras Dallas", "Intocáveis", "O Menino Que Descobriu o Vento", "O Impossível", "O Mordomo da Casa Branca", "A Dama de Ferro",
    "Homens de Honra", "3096 Dias", "O Aviador", "Mãos Talentosas: A História de Ben Carson"]
    
    for (let i = 0; i < listaReais.length; i++) {
        //console.log(listaAventura[i])
        let textElement = '';

        let pElement = document.createElement('p');
        
        pElement.setAttribute('class', 'classe-p');

        if(listaReais !== ""){
            textElement = document.createTextNode(listaReais[i]);
        }else{
            textElement = document.createTextNode("Algo Inesperado");
            alert('iiiiiih! Aconteceu algo inesperado! Tente novamente')
        }

        pElement.appendChild(textElement);

        let divElement = document.querySelector('#app');

        divElement.appendChild(pElement);
    }
}

btn43.onclick = function(){    
    const numero = Math.floor((Math.random())* listaReais.length)
    console.log(numero)
    spans.innerHTML = listaReais[numero]
}
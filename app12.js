let btn38 = document.querySelector('button#btn38')
let btn39 = document.querySelector('button#btn39')

let spans = document.querySelector('span')

btn38.onclick = function(){
    listaRomance = ["Para Todos os Garotos Que Já Amei", "Hitch - O Conselheiro Amoroso", "Como Eu Era Antes de Você", "Como Se Fosse a Primeira Vez", "Ghost: Do Outro Lado da Vida", "Diário de uma Paixão", "Titanic", "Uma Linda Mulher", "Nasce uma Estrela", "O Primeiro Amor"]
    
    for (let i = 0; i < listaRomance.length; i++) {
        //console.log(listaAventura[i])
        let textElement = '';

        let pElement = document.createElement('p');
        
        pElement.setAttribute('class', 'classe-p');

        if(listaRomance !== ""){
            textElement = document.createTextNode(listaRomance[i]);
        }else{
            textElement = document.createTextNode("Algo Inesperado");
            alert('iiiiiih! Aconteceu algo inesperado! Tente novamente')
        }

        pElement.appendChild(textElement);

        let divElement = document.querySelector('#app');

        divElement.appendChild(pElement);
    }
}

btn39.onclick = function(){    
    const numero = Math.floor((Math.random())* listaRomance.length)
    console.log(numero)
    spans.innerHTML = listaRomance[numero]
}
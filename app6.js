let btn26 = document.querySelector('button#btn26')
let btn27 = document.querySelector('button#btn27')

let spans = document.querySelector('span')

btn26.onclick = function(){
    listaDocumentario = ["O dilema das redes", "Nosso Planeta", "Neymar - o caos perfeito", "Eliza Matsunaga", "A 13º Emenda", "The last dance", "The redeem team"]
    
    for (let i = 0; i < listaDocumentario.length; i++) {
        //console.log(listaAventura[i])
        let textElement = '';

        let pElement = document.createElement('p');
        
        pElement.setAttribute('class', 'classe-p');

        if(listaDocumentario !== ""){
            textElement = document.createTextNode(listaDocumentario[i]);
        }else{
            textElement = document.createTextNode("Algo Inesperado");
            alert('iiiiiih! Aconteceu algo inesperado! Tente novamente')
        }

        pElement.appendChild(textElement);

        let divElement = document.querySelector('#app');

        divElement.appendChild(pElement);
    }
}

btn27.onclick = function(){    
    const numero = Math.floor((Math.random())* listaDocumentario.length)
    console.log(numero)
    spans.innerHTML = listaDocumentario[numero]
}
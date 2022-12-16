let btn36 = document.querySelector('button#btn36')
let btn37 = document.querySelector('button#btn37')

let spans = document.querySelector('span')

btn36.onclick = function(){
    listaNacional = ["Cidade de Deus", "O Auto da Compadecida", "Tropa de Elite", "A Menina que Matou os Pais", "E ai...Comeu?", "Alemão", "Se eu Fosse Você", "7 Prisoneiros"]
    
    for (let i = 0; i < listaNacional.length; i++) {
        //console.log(listaAventura[i])
        let textElement = '';

        let pElement = document.createElement('p');
        
        pElement.setAttribute('class', 'classe-p');

        if(listaNacional !== ""){
            textElement = document.createTextNode(listaNacional[i]);
        }else{
            textElement = document.createTextNode("Algo Inesperado");
            alert('iiiiiih! Aconteceu algo inesperado! Tente novamente')
        }

        pElement.appendChild(textElement);

        let divElement = document.querySelector('#app');

        divElement.appendChild(pElement);
    }
}

btn37.onclick = function(){    
    const numero = Math.floor((Math.random())* listaNacional.length)
    console.log(numero)
    spans.innerHTML = listaNacional[numero]
}
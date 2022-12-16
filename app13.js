let btn40 = document.querySelector('button#btn40')
let btn41 = document.querySelector('button#btn41')

let spans = document.querySelector('span')

btn40.onclick = function(){
    listaTerror = ["Invocação do Mal", "O Exorcista", "A Entidade", "A Orfã", "Os Estranhos", "Um Lugar Silencioso", "Atividade Paranormal", "O Silêncio dos Inocentes", "O Homem Invisível", "Sobrenatural", "Horror em Amityville"]
    
    for (let i = 0; i < listaTerror.length; i++) {
        //console.log(listaAventura[i])
        let textElement = '';

        let pElement = document.createElement('p');
        
        pElement.setAttribute('class', 'classe-p');

        if(listaTerror !== ""){
            textElement = document.createTextNode(listaTerror[i]);
        }else{
            textElement = document.createTextNode("Algo Inesperado");
            alert('iiiiiih! Aconteceu algo inesperado! Tente novamente')
        }

        pElement.appendChild(textElement);

        let divElement = document.querySelector('#app');

        divElement.appendChild(pElement);
    }
}

btn41.onclick = function(){    
    const numero = Math.floor((Math.random())* listaTerror.length)
    console.log(numero)
    spans.innerHTML = listaTerror[numero]
}
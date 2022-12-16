let btn24 = document.querySelector('button#btn24')
let btn25 = document.querySelector('button#btn25')

let spans = document.querySelector('span')

btn24.onclick = function(){
    listaDrama = ["A culpa é das estrelas", "Cisne Negro", "Um sonho de liberdade", "12 anos de escravidão", "A vida é bela", "O pianista"]
    
    for (let i = 0; i < listaDrama.length; i++) {
        //console.log(listaAventura[i])
        let textElement = '';

        let pElement = document.createElement('p');
        
        pElement.setAttribute('class', 'classe-p');

        if(listaDrama !== ""){
            textElement = document.createTextNode(listaDrama[i]);
        }else{
            textElement = document.createTextNode("Algo Inesperado");
            alert('iiiiiih! Aconteceu algo inesperado! Tente novamente')
        }

        pElement.appendChild(textElement);

        let divElement = document.querySelector('#app');

        divElement.appendChild(pElement);
    }
}

btn25.onclick = function(){    
    const numero = Math.floor((Math.random())* listaDrama.length)
    console.log(numero)
    spans.innerHTML = listaDrama[numero]
}
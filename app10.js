let btn34 = document.querySelector('button#btn34')
let btn35 = document.querySelector('button#btn35')

let spans = document.querySelector('span')

btn34.onclick = function(){
    listaHorror = ["Halloween Kills: O Terror Continua", "Jogos Mortais", "A Hora do Pesadelo", "Pânico", "Sexta-Feira 13", "Halloween - A Noite do Terror", "O Massacre da Serra Elétrica"]
    
    for (let i = 0; i < listaHorror.length; i++) {
        //console.log(listaAventura[i])
        let textElement = '';

        let pElement = document.createElement('p');
        
        pElement.setAttribute('class', 'classe-p');

        if(listaHorror !== ""){
            textElement = document.createTextNode(listaHorror[i]);
        }else{
            textElement = document.createTextNode("Algo Inesperado");
            alert('iiiiiih! Aconteceu algo inesperado! Tente novamente')
        }

        pElement.appendChild(textElement);

        let divElement = document.querySelector('#app');

        divElement.appendChild(pElement);
    }
}

btn35.onclick = function(){    
    const numero = Math.floor((Math.random())* listaHorror.length)
    console.log(numero)
    spans.innerHTML = listaHorror[numero]
}
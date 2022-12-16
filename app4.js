let btn22 = document.querySelector('button#btn22')
let btn23 = document.querySelector('button#btn23')

let spans = document.querySelector('span')

btn22.onclick = function(){
    listaComedia = ["Se beber não case", "Um parto de viagem", "Gente grande", "American Pie", "Esposa de mentirinha"]
    
    for (let i = 0; i < listaComedia.length; i++) {
        //console.log(listaAventura[i])
        let textElement = '';

        let pElement = document.createElement('p');
        
        pElement.setAttribute('class', 'classe-p');

        if(listaComedia !== ""){
            textElement = document.createTextNode(listaComedia[i]);
        }else{
            textElement = document.createTextNode("Algo Inesperado");
            alert('iiiiiih! Aconteceu algo inesperado! Tente novamente')
        }

        pElement.appendChild(textElement);

        let divElement = document.querySelector('#app');

        divElement.appendChild(pElement);
    }
}

btn23.onclick = function(){    
    const numero = Math.floor((Math.random())* listaComedia.length)
    console.log(numero)
    spans.innerHTML = listaComedia[numero]
}
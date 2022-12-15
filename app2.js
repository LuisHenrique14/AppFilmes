let btn18 = document.querySelector('button#btn18')
let btn19 = document.querySelector('button#btn19')
let spans = document.querySelector('span')

let listaAventura = []

btn19.onclick = function(){
    listaAventura = ["O homem do norte", "Batman", "Free Guy", "Jurassic World", "Indiana Jones"]
    
    for (let i = 0; i < listaAventura.length; i++) {
        //console.log(listaAventura[i])
        let textElement = '';

        let pElement = document.createElement('p');
        
        pElement.setAttribute('class', 'classe-p');

        if(listaAventura !== ""){
            textElement = document.createTextNode(listaAventura[i]);
        }else{
            textElement = document.createTextNode("Algo Inesperado");
            alert('iiiiiih! Aconteceu algo inesperado! Tente novamente')
        }

        pElement.appendChild(textElement);

        let divElement = document.querySelector('#app');

        divElement.appendChild(pElement);
    }
}

btn18.onclick = function(){    
    const numero = Math.floor((Math.random())* listaAventura.length)
    console.log(numero)
    spans.innerHTML = listaAventura[numero]
}
let btn20 = document.querySelector('button#btn20')
let btn21 = document.querySelector('button#btn21')
let spans = document.querySelector('span')

btn20.onclick = function(){
    listaAcao = ["Top Gun - Mavericks","Top Gun - Asas Indomáveis", "Bad Boy 3", "Velozes e Furiosos", "Rambo", "Alerta Vermelho", "Gladiador"]
    
    for (let i = 0; i < listaAcao.length; i++) {
        //console.log(listaAventura[i])
        let textElement = '';

        let pElement = document.createElement('p');
        
        pElement.setAttribute('class', 'classe-p');

        if(listaAcao !== ""){
            textElement = document.createTextNode(listaAcao[i]);
        }else{
            textElement = document.createTextNode("Algo Inesperado");
            alert('iiiiiih! Aconteceu algo inesperado! Tente novamente')
        }

        pElement.appendChild(textElement);

        let divElement = document.querySelector('#app');

        divElement.appendChild(pElement);
    }
}

btn21.onclick = function(){    
    const numero = Math.floor((Math.random())* listaAcao.length)
    console.log(numero)
    spans.innerHTML = listaAcao[numero]
}
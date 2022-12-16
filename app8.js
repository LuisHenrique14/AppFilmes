let btn30 = document.querySelector('button#btn30')
let btn31 = document.querySelector('button#btn31')

let spans = document.querySelector('span')

btn30.onclick = function(){
    listaFiccao = ["Matrix", "Interstellar", "A Origem", "Mad Max: Estrada da Fúria", "Minority Report - A Nova Lei", "A.I.: Inteligência Artificial", "Laranja Mecânica", "E.T.: O Extraterrestre", "O Exterminador do Futuro", "De Volta para o Futuro"]
    
    for (let i = 0; i < listaFiccao.length; i++) {
        //console.log(listaAventura[i])
        let textElement = '';

        let pElement = document.createElement('p');
        
        pElement.setAttribute('class', 'classe-p');

        if(listaFiccao !== ""){
            textElement = document.createTextNode(listaFiccao[i]);
        }else{
            textElement = document.createTextNode("Algo Inesperado");
            alert('iiiiiih! Aconteceu algo inesperado! Tente novamente')
        }

        pElement.appendChild(textElement);

        let divElement = document.querySelector('#app');

        divElement.appendChild(pElement);
    }
}

btn31.onclick = function(){    
    const numero = Math.floor((Math.random())* listaFiccao.length)
    console.log(numero)
    spans.innerHTML = listaFiccao[numero]
}
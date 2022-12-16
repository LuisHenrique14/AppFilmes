let btn28 = document.querySelector('button#btn28')
let btn29 = document.querySelector('button#btn29')

let spans = document.querySelector('span')

btn28.onclick = function(){
    listaFantasia = ["Trilogia - Senhor dos anéis", "Saga - Harry Potter", "As Crônicas de Nárnia", "O Mágico de Oz", "Doutor Estranho no Multiverso da Loucura", "Homem-Aranha: sem volta para casa", "Vingadores: Ultimato", "Batman: O cavaleiro das trevas "]
    
    for (let i = 0; i < listaFantasia.length; i++) {
        //console.log(listaAventura[i])
        let textElement = '';

        let pElement = document.createElement('p');
        
        pElement.setAttribute('class', 'classe-p');

        if(listaFantasia !== ""){
            textElement = document.createTextNode(listaFantasia[i]);
        }else{
            textElement = document.createTextNode("Algo Inesperado");
            alert('iiiiiih! Aconteceu algo inesperado! Tente novamente')
        }

        pElement.appendChild(textElement);

        let divElement = document.querySelector('#app');

        divElement.appendChild(pElement);
    }
}

btn29.onclick = function(){    
    const numero = Math.floor((Math.random())* listaFantasia.length)
    console.log(numero)
    spans.innerHTML = listaFantasia[numero]
}
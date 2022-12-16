let btn32 = document.querySelector('button#btn32')
let btn33 = document.querySelector('button#btn33')

let spans = document.querySelector('span')

btn32.onclick = function(){
    listaGuerra = ["Guerra ao Terror", "Sniper Americano", "Rambo", "Até o Ultimo Homem", "A Sombra de Stalin", "Munique - No Limite da Guerra", "300", "1917", "Dunkirk", "Bastardos Inglórios", "O Destino de Uma Nação", "O Jogo da Imitação", "Coração Valente", "O Resgate do Soldado Ryan", "Troia", "Pearl Harbor"]
    
    for (let i = 0; i < listaGuerra.length; i++) {
        //console.log(listaAventura[i])
        let textElement = '';

        let pElement = document.createElement('p');
        
        pElement.setAttribute('class', 'classe-p');

        if(listaGuerra !== ""){
            textElement = document.createTextNode(listaGuerra[i]);
        }else{
            textElement = document.createTextNode("Algo Inesperado");
            alert('iiiiiih! Aconteceu algo inesperado! Tente novamente')
        }

        pElement.appendChild(textElement);

        let divElement = document.querySelector('#app');

        divElement.appendChild(pElement);
    }
}

btn33.onclick = function(){    
    const numero = Math.floor((Math.random())* listaGuerra.length)
    console.log(numero)
    spans.innerHTML = listaGuerra[numero]
}
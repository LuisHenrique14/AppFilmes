let btn44 = document.querySelector('button#btn44')
let btn45 = document.querySelector('button#btn45')

let spans = document.querySelector('span')

btn44.onclick = function(){
    listaClassicos = ["O Poderoso Chefão", "Lobo de Wall Street", "Top Gun - Mavericks", "Scarface", "Seven - Os Sete Crimes Capitais", "Gênio Indomável", "Rocky, um Lutador", "Gladiador",
     "Taxi Driver", "Gran Torino", "O Resgate do Soldado Ryan", "Titanic", "Clube da Luta", "Tubarão", "O Silêncio dos Inocentes", "Forrest Gump: O Contador de Histórias", "A Lista de Schindler", 
     "Pulp Fiction - Tempo de Violência", "Um Sonho de Liberdade", "Náufrago"]
    
    for (let i = 0; i < listaClassicos.length; i++) {
        //console.log(listaAventura[i])
        let textElement = '';

        let pElement = document.createElement('p');
        
        pElement.setAttribute('class', 'classe-p');

        if(listaClassicos !== ""){
            textElement = document.createTextNode(listaClassicos[i]);
        }else{
            textElement = document.createTextNode("Algo Inesperado");
            alert('iiiiiih! Aconteceu algo inesperado! Tente novamente')
        }

        pElement.appendChild(textElement);

        let divElement = document.querySelector('#app');

        divElement.appendChild(pElement);
    }
}

btn45.onclick = function(){    
    const numero = Math.floor((Math.random())* listaClassicos.length)
    console.log(numero)
    spans.innerHTML = listaClassicos[numero]
}
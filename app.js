let btn = document.querySelector('button#btn')
let btn2 = document.querySelector('button#btn1')
let spans = document.querySelector('span')
let filmes = []

btn.onclick = function(){
    let textElement = '';

    let inputValue = document.querySelector('input').value;

    let pElement = document.createElement('h6');
    
    pElement.setAttribute('class', 'classe-p');

    if(inputValue !== ""){
        textElement = document.createTextNode(inputValue);
        filmes.push(inputValue);
    }else{
        textElement = document.createTextNode("Vaziooooo...");
        alert('iiiiiih! Para adicionar um filme você precisa escreve o nome do filme. Tente novamente')
    }

    pElement.appendChild(textElement);

    let divElement = document.querySelector('#app');

    divElement.appendChild(pElement);

    document.querySelector('input').value = "";    

}

btn2.onclick = function(){    
    const numero = Math.floor((Math.random())* filmes.length)
    console.log(numero)
    spans.innerHTML = filmes[numero]
}



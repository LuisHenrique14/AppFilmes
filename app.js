let btn1 = document.querySelector('button#btn1')
let btn2 = document.querySelector('button#btn2')

let spans = document.querySelector('span#resposta')
let filmes = []

btn1.onclick = function(){
    let textElement = '';

    let inputValue = document.querySelector('input[name="nome"]').value;

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
    
    div.innerHTML = ''

    let spanTitulo = document.createElement('li')
    let spanAno = document.createElement('li')
    let spanGenero = document.createElement('li')
    let spanDiretor = document.createElement('li')
    let spanAtores = document.createElement('li')
    let spanResumo = document.createElement('li')


    let txtTitulo = ''
    let txtAno = ''
    let txtGenero = ''
    let txtDiretor = ''
    let txtAtores = ''
    let txtResumo = ''
    

    let filme = document.querySelector('input[name="nome"]').value
    

    axios.get(`https://www.omdbapi.com/?t=${inputValue}&apikey=9d5444c3`)
        .then(function(response){
            if(response.data.logradouro !== null){
                txtTitulo = document.createTextNode('Título: '+ response.data.Title)
                txtAno = document.createTextNode('Ano: ' + response.data.Year)
                txtGenero = document.createTextNode('Genero: ' + response.data.Genre)
                txtDiretor = document.createTextNode('Diretor: ' + response.data.Director)
                txtAtores = document.createTextNode('Atores: ' + response.data.Actors)
                txtResumo = document.createTextNode('Sinopse: ' + response.data.Plot)
                let img = document.createElement('img')
                img.setAttribute('src', response.data.Poster)
                img.setAttribute('alt', response.data.Title)
                img.setAttribute('width', '200px')
                img.setAttribute('height', '300px')
                div.appendChild(img)
                
            }else{
                txtTitulo = document.createTextNode('O usuário não possui nome')
            }
            spanTitulo.appendChild(txtTitulo)
            spanAno.appendChild(txtAno)
            spanGenero.appendChild(txtGenero)
            spanDiretor.appendChild(txtDiretor)
            spanAtores.appendChild(txtAtores)
            spanResumo.appendChild(txtResumo)
            div.appendChild(spanTitulo)
            div.appendChild(spanAno)
            div.appendChild(spanGenero)
            div.appendChild(spanDiretor)
            div.appendChild(spanAtores)
            div.appendChild(spanResumo)

            filme.innerHTML = ''
        })

    axios.get(`http://img.omdbapi.com/?t=${filme}apikey=9d5444c3&`)

}

btn2.onclick = function(){ 
    console.log(filmes)   
    const numero = Math.floor((Math.random())* filmes.length)
    console.log(numero)
    spans.innerHTML = filmes[numero]
}

let btn3 = document.querySelector('#btn3')

let div = document.querySelector('#app1')


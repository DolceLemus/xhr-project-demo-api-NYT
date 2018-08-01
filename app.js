const form = document.getElementById('site-container');
const searchField = document.getElementById('search-keyword');
const responseContainer = document.getElementById('response-container');
let searchForText;


form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log("probando");
    responseContainer.innerHTML = "";
    searchForText = searchField.value;
    getNews();
})


function getNews(){
    const articleRequest = new XMLHttpRequest();
    articleRequest.open("GET",`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchForText}&api-key=55408e1b1f114329afd630bb16b7b904`);
    articleRequest.onload = addNews;
    articleRequest.oneerror = handleError;
    articleRequest.send();
}

function handleError(){
    console.log("Se ha presentado un error");
}

function addNews(){
    const data = JSON.parse(this.responseText);
    const article = data.response.docs[0];
    console.log(data);
    console.log(article);
    const title = article.headline.main;
    console.log(title);
    const snippet = article.snippet;

    let li = document.createElement('li');
    li.className = 'articleClass';
    li.innerText = snippet;

    responseContainer.appendChild(li);
}
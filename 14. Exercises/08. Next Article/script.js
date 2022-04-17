function getArticleGenerator(articles) {
    count = 0;

    function dysplay() {
        if (articles[count]) {
            let text = articles[count];
            let div = document.querySelector('#content');
            let article = document.createElement('article');
            article.textContent = text;
            div.appendChild(article);
            count++

        }
    }
    return dysplay;

}

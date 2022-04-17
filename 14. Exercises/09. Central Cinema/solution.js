function solve() {
    let buttonAddMovie = document.querySelector('#container button');
    buttonAddMovie.addEventListener('click', addMovie);

    function addMovie(e) {
        e.preventDefault()

        let inputElementsAddMovie = document.querySelectorAll('#container input');
        let nameAddMoovie = inputElementsAddMovie[0].value;
        let hallAddMovie = inputElementsAddMovie[1].value;
        let ticketPriseAddMovie = Number(inputElementsAddMovie[2].value);

        if (nameAddMoovie && hallAddMovie && ticketPriseAddMovie
            && typeof ticketPriseAddMovie === 'number') {

            let liMovies = document.createElement('li');

            let spanMovies = document.createElement('span');
            spanMovies.textContent = nameAddMoovie;

            let hallStrongMovies = document.createElement('strong');
            hallStrongMovies.textContent = `Hall: ${hallAddMovie}`;

            let divMovies = document.createElement('div');

            let priceStrongMovies = document.createElement('strong');
            priceStrongMovies.textContent = ticketPriseAddMovie.toFixed(2);

            let inputMovies = document.createElement('input');
            inputMovies.setAttribute('placeholder', 'Tickets Sold');

            let btnArchive = document.createElement('button');
            btnArchive.textContent = 'Archive';
            btnArchive.addEventListener('click', onArhive);

            let ul = document.querySelector('#movies ul');
            ul.appendChild(liMovies);
            liMovies.appendChild(spanMovies);
            liMovies.appendChild(hallStrongMovies);
            liMovies.appendChild(divMovies);
            divMovies.appendChild(priceStrongMovies);
            divMovies.appendChild(inputMovies);
            divMovies.appendChild(btnArchive);

            inputElementsAddMovie[0].value = '';
            inputElementsAddMovie[1].value = '';
            inputElementsAddMovie[2].value = '';

            function onArhive(e) {

                let inputPrice = Number(inputMovies.value);
                if (inputPrice && typeof inputPrice === 'number') {

                    let liArchive = document.createElement('li');

                    let spanArchive = document.createElement('span');
                    spanArchive.textContent = nameAddMoovie;

                    let strongArchive = document.createElement('strong');
                    let total = inputPrice * ticketPriseAddMovie;
                    strongArchive.textContent = `Total amount: ${total.toFixed(2)}`;

                    let btnDelete = document.createElement('button');
                    btnDelete.textContent = 'Delete';
                    btnDelete.addEventListener('click', removeLi);

                    let ulArchive = document.querySelector('#archive ul');
                    ulArchive.appendChild(liArchive);
                    liArchive.appendChild(spanArchive);
                    liArchive.appendChild(strongArchive);
                    liArchive.appendChild(btnDelete);

                    let liMovies = Array.from(document.querySelectorAll('#movies li'))
                    .forEach(li => li.remove())

                }
            }
            let clearBtn = document.querySelector('#archive button');
            clearBtn.addEventListener('click', removeUl);

            function removeLi(e) {
                e.target.parentElement.remove()
            }
            function removeUl(e) {
                let cleanArchive = document.querySelectorAll('#archive ul li');
                Array.from(cleanArchive).forEach(x => x.remove())
            }
        }
    }
}
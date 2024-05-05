const url = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=5';

function imagesList() {
    fetch(url)
        .then (response => response.json())
        .then (imageData => {
            const card = document.querySelector('[data-ul]');

            imageData.forEach( element => {
                const content = `
                <li class="card">
                    <img class="card__image" src="${element.url}" alt="imagen">
                    <h3 class="card__title">${element.title}</h3>
                </li>
                `;

                card.innerHTML = card.innerHTML + content;
            });
        })
        .catch (error => console.log(error));
}

imagesList();
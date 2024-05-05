const url = 'https://api.nasa.gov/planetary/apod?api_key=oyI6dMP2cDyOLb0Wf5evRS5884qRaSv8ZT9hI6hS&count=10';

async function imagesList() {
    try{
        const fetchImages = await fetch(url);
        const imageData = await fetchImages.json();

        const card = document.querySelector('[data-ul]');

        imageData.forEach( element => {
            const content = `
            <li class="card">
                <img class="card__image" src="${element.url}" alt="imagen">
                <h3 class="card__title">${element.title}</h3>
            </li>
            `;

            card.innerHTML += content;
        });
    }
    catch(error) {
        console.log(error);
    };
};

imagesList();

// function imagesList() {
//     fetch(url)
//         .then (response => response.json())
//         .then (imageData => {
//             const card = document.querySelector('[data-ul]');

//             imageData.forEach( element => {
//                 const content = `
//                 <li class="card">
//                     <img class="card__image" src="${element.url}" alt="imagen">
//                     <h3 class="card__title">${element.title}</h3>
//                 </li>
//                 `;

//                 card.innerHTML = card.innerHTML + content;
//             });
//         })
//         .catch (error => console.log(error));
// }

// imagesList();
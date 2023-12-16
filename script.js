const url = 'https://programming-memes-images.p.rapidapi.com/v1/memes';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '817f22dca9mshf83e13b922ca667p1e35aajsnac71c2d28bd1',
    'X-RapidAPI-Host': 'programming-memes-images.p.rapidapi.com'
  }
};

const memesContainer = document.querySelector('.memes-container');
const loadMoreButton = document.querySelector('.load-more');

let offset = 0;
const limit = 12;

async function fetchMemes() {
  try {
    const response = await fetch(`${url}?offset=${offset}&limit=${limit}`, options);
    const result = await response.json();
    displayMemes(result);
  } catch (error) {
    console.error(error);
  }
}

function displayMemes(memes) {
  memes.forEach(meme => {
    const memeElement = document.createElement('div');
    memeElement.classList.add('meme');

    const image = document.createElement('img');
    image.src = meme.image;
    image.alt = meme.title;

    memeElement.appendChild(image);
    memesContainer.appendChild(memeElement);
  });
}

function loadMore() {
  offset += limit;
  fetchMemes();
}

loadMoreButton.addEventListener('click', loadMore);

fetchMemes();



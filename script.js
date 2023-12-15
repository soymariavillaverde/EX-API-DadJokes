const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click', generateJoke)

async function generateJoke() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  }

  const endPoint = "https://icanhazdadjoke.com";
  let response = await fetch(endPoint , config);
  let data = await response.json();
  jokeEl.innerHTML = data.joke

}

generateJoke();

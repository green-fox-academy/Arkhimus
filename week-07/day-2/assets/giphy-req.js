window.onload = () => {
  const host = 'http://localhost:3030';
  const http = new XMLHttpRequest();
  const giphyParent = document.querySelector('#gifz');
  http.open('GET', `${host}/api/giphy/`, true);

  http.onload = () => {
    if (http.status === 200) {
      const recievedGifs = JSON.parse(http.response).data;
      console.log(recievedGifs);
      recievedGifs.forEach((elem) => {
        console.log(elem.url);
        //   const gifDiv = document.createElement('div');
        //   const eachGif = document.createElement('img');
        //   eachGif.innerText = elem.contains.join(', ');
        //   gifDiv.appendChild(url);
        //   giphyParent.appendChild(gifDiv);
        // });
      });
    }
    http.send();
    fetch(`${host}/api/giphy/`)
      .then((resp) => (resp.json()))
      .then(response => {
        console.log(response);
      });
  }
}

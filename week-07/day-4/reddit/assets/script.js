window.onload = () => {
  const host = 'http://localhost:4040';
  const http = new XMLHttpRequest();

  http.open('GET', `${host}`, true);

  http.onload = () => {
    if (http.status === 200) {
      const posted = JSON.parse(http.response);
      posted.forEach(post => {
        let newPost = document.createElement('div');
        let newPostTitle = document.createElement('p');
        newPostTitle.innerText = post.title;
        newPostTitle.classList.add('PostTitle');
        newRow.appendChild(newPost);
      });
    }
  }
  http.send();
}
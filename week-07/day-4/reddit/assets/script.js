window.onload = () => {
  const url = 'http://localhost:4040/';
  const postList = document.querySelector('.postList');
  const post = document.querySelector('.post');

  let allPosts = [];

  fetch(url + 'posts')
  .then((res) => (res.json()))
  .then(res => {
    res.forEach(element => {
      allPosts.push(element);
      let postDiv = document.createElement("div");
      let title = document.createElement("h3");
      let postUrl = document.createElement("a");
      let date = document.createElement("p");
      let score = document.createElement("p");
      let user = document.createElement("p");
      postDiv.classList.add('post');
      postList.appendChild(postDiv);
      postDiv.appendChild(title).innerText = element.title;
      postDiv.appendChild(postUrl).innerText = element.url;
      postDiv.appendChild(date).innerText = element.timestamp;
      postDiv.appendChild(score).innerText = element.score;
      postDiv.appendChild(user).innerText = element.user;

      

    });
  });
  
  

}
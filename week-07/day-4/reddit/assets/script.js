window.onload = () => {
  const url = 'http://localhost:4040/';
  const posts = document.querySelector('.postList')

  let allPosts = [];

  fetch(url + 'posts')
  .then((res) => (res.json()))
  .then(res => {
    allPosts = res;
  });
  
  





}
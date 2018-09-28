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
      
    });
  });
  
  





}
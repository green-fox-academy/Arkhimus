'use strict';

window.onload = () => {
  const subscribe = document.querySelector('.subscribe');
  const signup = document.querySelector('.signupbtn');

  const dog = document.querySelector('.dog');
  const cat = document.querySelector('.cat');
  const fish = document.querySelector('.fish');
  const yes = document.querySelector('.yes');
  const no = document.querySelector('.no');

  dog.addEventListener('change', () => {
    signup.disabled = false;
  });

  cat.addEventListener('change', () => {
    signup.disabled = false;
  });

  fish.addEventListener('change', () => {
    signup.disabled = false;
  });

  yes.addEventListener('change', () => {
    subscribe.disabled = false;
  });

  no.addEventListener('change', () => {
    subscribe.disabled = true;
  });
}
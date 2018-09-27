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
    subscribe.disabled = false;
  });

  cat.addEventListener('change', () => {
    subscribe.disabled = false;
  });

  fish.addEventListener('change', () => {
    subscribe.disabled = false;
  });

  yes.addEventListener('change', () => {
    signup.disabled = false;
  });

  no.addEventListener('change', () => {
    signup.disabled = true;
  });

  subscribe.addEventListener('click', () => {
    alert('Thank you, you\'ve successfully signed up for cat facts');
  });
}
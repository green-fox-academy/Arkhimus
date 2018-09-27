'use strict';

const petform = document.querySelector('subscribe');

let radios = document.forms["choosepet"].elements["pet"];
  for(radio in radios) {
    radio.onclick = function() {
        return radio.value;
    }
  if (radio.value === 'dog' || radio.value === 'cat') {
    petform.disabled = false;
  }
}

'use strict';

function getDogImage(number) {
  fetch('https://dog.ceo/api/breeds/image/random/'+number)
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson) {
  //replace the existing image with the new one
  console.log(responseJson);
  $('#js-list-images').empty();
  let imageUrls = responseJson.message;
  for (let i = 0; i < imageUrls.length; i++) {
    $('#js-list-images').append(
      `<li><img src="${responseJson.message[i]}" class="results-img"></li>`
    );
  }
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    getDogImage($('#js-number-input').val());
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});
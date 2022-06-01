(() => {
  $('#createBtn').on('click', () => {
    $('section').append('<div></div>');
  });

  //// Registration to an exisiting element on the page won't work on dynaminc elements
  // $('section > div').on('click', () => {
  //   alert('You Clicked on the div');
  // });

  $('section').on('click', 'div', () => {
    alert('You Clicked on the div');
  });
})();

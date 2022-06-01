(() => {
  $('#firstButton').on('click', () => {
    $('#firstButton').css('background-color', 'yellow');
  });

  $('button').on('click', (event) => {
    $(event.target).css('background-color', 'yellow');
  });
})();

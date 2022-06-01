(() => {
  $('section > div').on('mouseenter', (event) => {
    // $(event.target).css('background-color', 'blue').css('color', 'white');
    // $(event.target).css({ backgroundColor: 'blue', color: 'white' });
    $(event.target).css({ 'background-color': 'blue', color: 'white' });
  });

  $('section > div').on('mouseout', (event) => {
    $(event.target).css({ 'background-color': 'red', color: 'black' });
  });
})();

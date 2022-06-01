(() => {
  $('#addBtn').on('click', () => {
    const numOfDivs = $('section > div').length;
    $('section').append(`<div>${numOfDivs + 1}</div>`);
  });

  $('section').on('mouseenter', 'div', (event) => {
    // $(event.target).css('background-color', 'blue').css('color', 'white');
    // $(event.target).css({ backgroundColor: 'blue', color: 'white' });
    $(event.target).css({ 'background-color': 'blue', color: 'white' });
  });

  $('section').on('mouseout', 'div', (event) => {
    $(event.target).css({ 'background-color': 'red', color: 'black' });
  });
})();

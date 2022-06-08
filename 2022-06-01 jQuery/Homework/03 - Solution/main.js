$(() => {
  $('#menu > ul').hide();

  $('#menu > h3').on('mouseenter', (event) => {
    $(event.target).next().slideDown(500);
    $(event.target).next().siblings('ul').slideUp(500);

    // $(event.target).next().slideDown(500).siblings('ul').slideUp(500)
  });
});

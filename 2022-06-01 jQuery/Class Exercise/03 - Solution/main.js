$(() => {
  $('button').on('click', () => {
    $.ajax({
      url: 'https://api.chucknorris.io/jokes/random',
      success: (result) => $('div').html(`${result.value}<br/><img src="${result.icon_url}"/>`),
      error: (err) => alert(err.status),
    });
  });
});

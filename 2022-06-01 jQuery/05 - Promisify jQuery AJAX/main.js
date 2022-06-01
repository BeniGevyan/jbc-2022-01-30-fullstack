$(() => {
  function getDataAsyc(url) {
    return new Promise((resolve, reject) => {
      $.ajax({
        url, // url: url
        success: (result) => resolve(result),
        error: (err) => reject(err),
      });
    });
  }

  function displayTodoList(todoList) {
    for (const todo of todoList) {
      $('ul').append(`<li>${todo.title}</li>`);
    }
  }

  $('button').on('click', async () => {
    try {
      const result = await getDataAsyc('https://jsonplaceholder.typicode.com/todos');
      displayTodoList(result);
    } catch (err) {
      alert(err.status);
    }
  });
});

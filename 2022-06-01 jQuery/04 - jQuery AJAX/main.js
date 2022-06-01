$(() => {
  function displayTodoList(todoList) {
    for (const todo of todoList) {
      $('ul').append(`<li>${todo.title}</li>`);
    }
  }

  $('button').on('click', () => {
    $.ajax({
      url: 'https://jsonplaceholder.typicode.com/todos',
      success: (result) => displayTodoList(result),
      error: (err) => alert(err.status),
    });
  });
});

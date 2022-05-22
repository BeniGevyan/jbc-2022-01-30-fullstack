function getTodos() {
  const request = new XMLHttpRequest();

  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status === 200) {
        const todoList = JSON.parse(request.responseText);

        const todoUl = document.querySelector('#todosUl');

        todoUl.innerHTML = '';

        for (const t of todoList) {
          todoUl.innerHTML += `<li>${t.title}</li>`;
        }
      }
    }
  };

  request.open('GET', 'https://jsonplaceholder.typicode.com/todos');

  request.send();
}

function onWindowLoad() {
  const btn1 = document.querySelector('#btn1');
  btn1.onclick = getTodos;
}

window.onload = onWindowLoad;

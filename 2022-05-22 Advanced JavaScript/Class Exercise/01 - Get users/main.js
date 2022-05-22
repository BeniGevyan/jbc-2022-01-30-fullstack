function getUsers() {
  const request = new XMLHttpRequest();

  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status === 200) {
        const usersList = JSON.parse(request.responseText);

        const usersTable = document.querySelector('#usersTable');

        usersTable.innerHTML = `<tr>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
          <th>City</th>
        </tr>`;

        for (const u of usersList) {
          usersTable.innerHTML += `<tr>
            <td>${u.name}</td>
            <td>${u.username}</td>
            <td>${u.email}</td>
            <td>${u.address.city}</td>
          </tr>`;
        }
      }
    }
  };

  request.open('GET', 'https://jsonplaceholder.typicode.com/users');

  request.send();
}

function onWindowLoad() {
  const btn1 = document.querySelector('#btn1');
  btn1.onclick = getUsers;
}

window.onload = onWindowLoad;

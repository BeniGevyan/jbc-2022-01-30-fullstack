function displayUsers(usersList) {
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

async function showAllusers() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (response.status < 400) {
      const users = await response.json();
      displayUsers(users);
    } else {
      alert('Error from server');
    }
  } catch (err) {
    alert(err.message);
  }
}

function onWindowLoad() {
  const btn1 = document.querySelector('#btn1');
  btn1.onclick = showAllusers;
}

window.onload = onWindowLoad;

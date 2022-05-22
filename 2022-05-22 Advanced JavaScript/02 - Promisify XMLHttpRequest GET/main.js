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

// general ajax GET request
function getJsonAsync(url) {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.onreadystatechange = () => {
      if (request.readyState === 4) {
        if (request.status < 400) {
          const data = JSON.parse(request.responseText);
          resolve(data);
        } else {
          reject(new Error('Error code: ' + request.status));
        }
      }
    };

    request.open('GET', url);
    request.send();
  });
}

async function showAllusers() {
  try {
    const users = await getJsonAsync(
      'https://jsonplaceholder.typicode.com/users',
    );
    displayUsers(users);
  } catch (err) {
    alert(err.message);
  }
}

function onWindowLoad() {
  const btn1 = document.querySelector('#btn1');
  btn1.onclick = showAllusers;
}

window.onload = onWindowLoad;

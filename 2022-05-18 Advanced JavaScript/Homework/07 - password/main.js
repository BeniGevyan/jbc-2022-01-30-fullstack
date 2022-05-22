function generateStrongPasswordAsync() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const chars =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

      let password = '';

      for (let i = 1; i <= 6; i++) {
        const index = Math.floor(Math.random() * chars.length);
        password += chars[index];
      }

      console.log(password);

      let isUpper = false;
      for (let c of password) {
        if (chars.indexOf(c) <= 25) {
          isUpper = true;
          break;
        }
      }

      if (!isUpper) {
        return reject(new Error('Weak password, no upper case letter'));
      }

      let isLower = false;
      for (let c of password) {
        if (chars.indexOf(c) >= 26 && chars.indexOf(c) <= 51) {
          isLower = true;
          break;
        }
      }

      if (!isLower) {
        return reject(new Error('Weak password, no lower case letter'));
      }

      let isDigit = false;
      for (let c of password) {
        if (chars.indexOf(c) >= 52 && chars.indexOf(c) <= 62) {
          isDigit = true;
          break;
        }
      }

      if (!isDigit) {
        return reject(new Error('Weak password, no digit'));
      }

      resolve(password);
    }, 1000);
  });
}

async function displayRandomPassword() {
  try {
    const password = await generateStrongPasswordAsync();
    alert(password);
  } catch (err) {
    console.log('error: ' + err.message);
  }
}

function onWindowLoad() {
  const btn1 = document.querySelector('#btn1');
  btn1.onclick = displayRandomPassword;
}

window.onload = onWindowLoad;

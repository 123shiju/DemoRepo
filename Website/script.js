const register = document.getElementById("registerForm");
const login = document.getElementById("loginForm");

if (register) {
  register.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const mobile = document.getElementById("mob").value;
    const password = document.getElementById("password").value;

    const storedUser = JSON.parse(localStorage.getItem(email));
    if (storedUser) {
      alert(" User already exist.Please Login ...!!!");
    } else {
      localStorage.setItem(email, JSON.stringify({ email, password }));
      alert("Registration is  successfull ...!!!");
      window.location.href = "login.html";
    }
  });
}

if (login) {
  login.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const storedUser = JSON.parse(localStorage.getItem(email));

    if (storedUser && storedUser.password === password) {
      alert("Login successfull...!!!");
      window.location.href = "Home.html";
    } else {
      alert("Invalid Email and Password");
    }
  });
}

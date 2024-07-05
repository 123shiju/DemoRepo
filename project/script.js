const register = document.getElementById("register");
const login = document.getElementById("loginform");

console.log("loginform", login);

//register form

if (register) {
  register.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const mobNo = document.getElementById("mob").value;
    const password = document.getElementById("password").value;

    const storedUser = JSON.parse(localStorage.getItem(email));
    if (storedUser) {
      alert("User already exist .please Login!!!!");
    } else {
      localStorage.setItem(email, JSON.stringify(name, mobNo, password));
      alert("Registration successfull.....!!!");
      window.location.href = "login.html";
    }
  });
}

//login form
if (login) {
  login.addEventListener("submit", function (e) {
    console.log("haii from login page");
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const storedUser = JSON.parse(localStorage.getItem(email));

    if (storedUser && storedUser.password === password) {
      alert("Login is successfull ...!!!");
    } else {
      alert("Invalid email & password !!!");
    }

    // window.location.href = "home.html";
  });
}

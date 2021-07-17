const form = document.getElementById("form");
const username = document.getElementById("username");
const password = document.getElementById("password");
const email = document.getElementById("email");
const checkbox = document.getElementById("checkbox");
const usernameError = document.getElementById("usernameError");
const passwordError = document.getElementById("passwordError");
const emailError = document.getElementById("emailError");
const checkboxError = document.getElementById("checkboxError");

function validate() {
  let isValid = true;
  // username'in boş olup olmadığını kontrol eder
  if (username.value.trim() === "") {
    usernameError.innerText = "Kullanıcı adı boş bırakılamaz.";
    isValid = false;
  } else {
    usernameError.innerText = "";
  }

  if (password.value.trim() < 8) {
    passwordError.innerText = "Şifre en az 8 karakterden oluşmalıdır.";
    isValid = false;
  } else {
    passwordError.innerText = "";
  }
  if (email.value.trim() === "" || !email.value.includes("@")) {
    emailError.innerText = "Geçerli bir e-mail adresi girilmelidir.";
    isValid = false;
  } else {
    emailError.innerText = "";
  }
  if (!checkbox.checked) {
    checkboxError.innerText = "Bu alan boş bırakılamaz.";
    isValid = false;
  } else {
    checkboxError.innerText = "";
  }
  if (isValid) {
    alert("Form başarıyla gönderildi.");
  }
}

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  validate();
});

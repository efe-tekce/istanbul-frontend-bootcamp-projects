let adSoyad = "Efe Tekce";
let yas = "27";

const linkedinUrlDOM = document.getElementById("linkedinUrl");
const githubUrlDOM = document.getElementById("githubUrl");
const nameDOM = document.getElementById("nameSurname");
const ageDOM = document.getElementById("age");
const btnDOM = document.querySelector("button");

linkedinUrlDOM.setAttribute("href", "https://www.linkedin.com/in/efe-tekce/");
githubUrlDOM.setAttribute("href", "https://github.com/efe-tekce");

btnDOM.addEventListener("click", () => {
  nameDOM.innerText = adSoyad;
  ageDOM.innerText = yas;
});

import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { Icon } from "../component/icon";

const Login = ({ isLoggedIn, setIsLoggedIn }) => {
  const [loginFormInput, setLoginFormInput] = useState({
    username: "",
    password: "",
  });
  const [registeredUsers, setRegisteredUsers] = useState([]);

  // Component render edildiğinde useEffect çalışır.
  useEffect(() => {
    fetch("userData.json")
      .then((response) => response.json())
      .then((data) => {
        setRegisteredUsers(data);
      });
  }, []);

  // Form inputlarının değişmesini algılayarak state'e atar.
  const handleChangeLoginFormInput = (e) => {
    setLoginFormInput({
      ...loginFormInput,
      [e.target.name]: e.target.value,
    });
  };

  // Login butonuna tıkladığımızda kullanıcının kayıtlı olup olmadığına bakarak state'i günceller.
  const handleSubmitLoginForm = (e) => {
    e.preventDefault();

    // Some fonksiyonu verilen koşula uyan en az 1 eleman varsa true döndürür.
    const isRegisteredUser = registeredUsers.some(
      (usr) =>
        usr.username === loginFormInput.username &&
        usr.password === loginFormInput.password
    );
    console.log(isRegisteredUser);

    if (isRegisteredUser) {
      setIsLoggedIn(true);
      localStorage.setItem("isLoggedIn", JSON.stringify(true));
      localStorage.setItem(
        "user",
        JSON.stringify(
          registeredUsers.find(
            (usr) => usr.username === loginFormInput.username
          )
        )
      );
    } else {
      alert("Kullanıcı bulunamadı.");
    }
  };
  // Kullanıcı login olduysa Home'a yönlendirir.
  return isLoggedIn ? (
    <Redirect to='/' />
  ) : (
    <form className='login-form' action='' onSubmit={handleSubmitLoginForm}>
      <div className='login-icon-wrapper'>
        <Icon size={50} iconName='twitter' color='#1DA1F2' />
      </div>
      <div>
        <input
          value={loginFormInput.username}
          className='user-name-input'
          type='text'
          name='username'
          placeholder='username'
          onChange={handleChangeLoginFormInput}
        />
      </div>
      <div>
        <input
          value={loginFormInput.password}
          className='password-input'
          type='password'
          name='password'
          placeholder='password'
          onChange={handleChangeLoginFormInput}
        />
      </div>
      <button className='login-submit-button'>Login</button>
    </form>
  );
};

export default Login;

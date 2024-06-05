const user_cont = document.querySelector(".user-container");

const  regis_btn = document.querySelector(".registration-btn");

const login_btn = document.querySelector(".login-btn");

regis_btn.addEventListener('click',function(){
    user_cont.classList.add('login-section--display');
})

login_btn.addEventListener('click',function(){
    user_cont.classList.remove('login-section--display');
})
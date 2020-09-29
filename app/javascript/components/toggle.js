const btn = document.querySelector('.toggle_btn')
const nav = document.querySelector('.navbar-nav')

 btn.addEventListener('click', (event)=>{
  console.log(event);
  nav.classList.toggle('nav_open');
 });



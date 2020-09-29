let btn = document.querySelector('.toggle_btn')
let nav = document.querySelector('.navbar-nav')
let toggleClick = () => {
 btn.addEventListener('click', (event)=>{
  console.log(event)
  nav.classList.toggle('nav_open');
 });
}

export {toggleClick};

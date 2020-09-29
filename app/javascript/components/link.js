let female = document.querySelector('.fa-female')
let briefcase = document.querySelector('.fa-briefcase')
let cogs = document.querySelector('.fa-cogs')
let laptop = document.querySelector('.fa-laptop')

let femaleClick = () => {
 female.addEventListener('click', (event)=>{
  console.log(event)
  document.getElementById('profile-typed-text').scrollIntoView()
 });
}
export {femaleClick};

let briefClick = () => {
 briefcase.addEventListener('click', (event)=>{
  console.log(event)
  document.getElementById('experience-typed-text').scrollIntoView()
 });
}
export {briefClick};

let cogsClick = () => {
 cogs.addEventListener('click', (event)=>{
  console.log(event)
  document.getElementById('skill-typed-text').scrollIntoView()

 });
}
export {cogsClick};

let laptopClick = () => {
 laptop.addEventListener('click', (event)=>{
  console.log(event)
  document.getElementById('project-typed-text').scrollIntoView()
 });
}
export {laptopClick};

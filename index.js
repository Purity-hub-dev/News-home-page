
const openToggle = document.querySelector('.open-toggle');
const closeToggle = document.querySelector('.close-toggle');
const links = document.querySelector('.navigation');

openToggle.addEventListener('click', function (){
  console.log(links.classList.contains('.darken'))
  if (links.classList.contains('show-sidebar')){
    links.classList.remove('show-sidebar')
  }
  else{
    links.classList.add('show-sidebar')
  }
})

closeToggle.addEventListener('click', function(){
  links.classList.remove('show-sidebar')
})

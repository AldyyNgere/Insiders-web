// SIDEBAR FUNCTION 
function sidebar(){
  // elements 
  const sidebar = document.querySelector('.navbar-menu');
  const menu_btn = document.getElementById('menu-btn');
  const close_btn = document.getElementById('close-btn');
  
  // when menu btn clicked 
  menu_btn.addEventListener('click', () =>{
    sidebar.classList.add('sidebar');
    menu_btn.classList.add('sidebar');
    close_btn.classList.add('sidebar');
  })
  
  // when close btn clicked 
  close_btn.addEventListener('click', () =>{
    sidebar.classList.remove('sidebar');
    menu_btn.classList.remove('sidebar');
    close_btn.classList.remove('sidebar');
  })
}

// Apps 
sidebar();

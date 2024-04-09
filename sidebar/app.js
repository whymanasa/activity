const sidebarToggle=document.querySelector('.sidebar-toggle');
const closebtn=document.querySelector('.close-btn');
const sidebar=document.querySelector('.sidebar');

sidebarToggle.addEventListener('click',function(){
    sidebar.classList.toggle('show-sidebar')
});

closebtn.addEventListener('click',function(){
    sidebar.classList.remove('show-sidebar')
});
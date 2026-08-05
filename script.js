document.addEventListener('DOMContentLoaded',()=>{
 document.body.classList.remove('light-theme','theme-changing');
 const oldToggle=document.getElementById('themeToggle');
 if(oldToggle) oldToggle.remove();
 localStorage.removeItem('atelierTheme');
 document.body.classList.add('loaded');
});

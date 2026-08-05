document.addEventListener('DOMContentLoaded',()=>{
 document.body.classList.add('loaded');
 const toggle=document.getElementById('themeToggle');
 const saved=localStorage.getItem('atelierTheme');
 if(saved==='light') document.body.classList.add('light-theme');
 function updateThemeLabel(){
  if(!toggle) return;
  toggle.textContent=document.body.classList.contains('light-theme')?'🌙 Moon Gallery':'☀️ Sun Gallery';
 }
 updateThemeLabel();
 if(toggle){
  toggle.addEventListener('click',()=>{
   document.body.classList.toggle('light-theme');
   localStorage.setItem('atelierTheme',document.body.classList.contains('light-theme')?'light':'dark');
   updateThemeLabel();
  });
 }
 document.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>document.body.classList.add('leaving')));
});
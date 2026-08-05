document.addEventListener('DOMContentLoaded',()=>{
 const saved=localStorage.getItem('atelierTheme');
 if(saved==='light') document.body.classList.add('light-theme');
 document.body.classList.add('loaded');

 let toggle=document.getElementById('themeToggle');
 if(!toggle){
  toggle=document.createElement('button');
  toggle.id='themeToggle';
  toggle.className='theme-toggle';
  toggle.setAttribute('aria-label','Change gallery lighting');
  document.querySelector('nav')?.appendChild(toggle);
 }

 function updateThemeLabel(){
  toggle.textContent=document.body.classList.contains('light-theme')?'🌙 Moon Gallery':'☀️ Sun Gallery';
 }
 updateThemeLabel();

 toggle.addEventListener('click',()=>{
  document.body.classList.add('theme-changing');
  document.body.classList.toggle('light-theme');
  localStorage.setItem('atelierTheme',document.body.classList.contains('light-theme')?'light':'dark');
  updateThemeLabel();
  setTimeout(()=>document.body.classList.remove('theme-changing'),1000);
 });

 document.querySelectorAll('a').forEach(link=>{
  link.addEventListener('click',()=>{
   if(link.hostname===location.hostname && !link.href.includes('#')){
    document.body.classList.add('leaving');
   }
  });
 });
});

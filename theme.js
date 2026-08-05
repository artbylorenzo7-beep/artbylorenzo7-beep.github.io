document.addEventListener('DOMContentLoaded',()=>{
 const saved=localStorage.getItem('atelier-theme');
 if(saved==='light') document.body.classList.add('light-theme');
 const button=document.createElement('button');
 button.className='theme-toggle';
 button.setAttribute('aria-label','Toggle atelier theme');
 button.textContent=document.body.classList.contains('light-theme')?'Moon Gallery':'Sun Gallery';
 document.querySelector('nav')?.appendChild(button);
 button.addEventListener('click',()=>{
  document.body.classList.toggle('light-theme');
  const light=document.body.classList.contains('light-theme');
  localStorage.setItem('atelier-theme',light?'light':'dark');
  button.textContent=light?'Moon Gallery':'Sun Gallery';
 });
});
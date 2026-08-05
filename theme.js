(function(){
 const saved=localStorage.getItem('atelier-theme');
 if(saved==='light') document.documentElement.classList.add('light-theme');
 else document.documentElement.classList.add('dark-theme');

 document.addEventListener('DOMContentLoaded',()=>{
  const button=document.querySelector('.theme-toggle') || (()=>{
   const nav=document.querySelector('nav');
   if(!nav) return null;
   const b=document.createElement('button');
   b.className='theme-toggle';
   b.type='button';
   b.setAttribute('aria-label','Toggle atelier lighting');
   nav.appendChild(b);
   return b;
  })();

  const updateLabel=()=>{
   if(button) button.textContent=document.documentElement.classList.contains('light-theme')?'🌙 Moon Gallery':'☀️ Sun Gallery';
  };

  updateLabel();

  if(button){
   button.addEventListener('click',()=>{
    document.documentElement.classList.toggle('light-theme');
    document.documentElement.classList.toggle('dark-theme');
    localStorage.setItem('atelier-theme',document.documentElement.classList.contains('light-theme')?'light':'dark');
    updateLabel();
   });
  }
 });
})();
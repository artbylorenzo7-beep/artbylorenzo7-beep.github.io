document.addEventListener('DOMContentLoaded',()=>{
 document.body.classList.add('loaded');
 const lang=localStorage.getItem('basharLanguage')||'en';
 document.querySelectorAll('[data-i18n]').forEach(el=>{
  const key=el.dataset.i18n;
  if(translations[lang]&&translations[lang][key]) el.textContent=translations[lang][key];
 });
 document.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>document.body.classList.add('leaving')));
});
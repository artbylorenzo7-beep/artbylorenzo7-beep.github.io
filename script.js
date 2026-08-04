document.addEventListener('DOMContentLoaded',()=>{
 const lang=localStorage.getItem('basharLanguage')||'en';
 const dictionary=translations[lang]||translations.en;
 document.documentElement.lang=lang;
 document.documentElement.dir=lang==='ar'?'rtl':'ltr';
 document.body.classList.add('loaded');
 document.querySelectorAll('[data-i18n]').forEach(el=>{
  const key=el.dataset.i18n;
  if(dictionary[key]) el.textContent=dictionary[key];
 });
 document.querySelectorAll('.language').forEach(select=>select.value=lang);
 document.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>document.body.classList.add('leaving')));
});
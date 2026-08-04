function applyTranslations(){
 const lang=localStorage.getItem('basharLanguage')||'en';
 const t=translations[lang]||translations.en;
 document.documentElement.lang=lang;
 document.documentElement.dir=lang==='ar'?'rtl':'ltr';
 document.querySelectorAll('[data-i18n]').forEach(el=>{
  const key=el.dataset.i18n;
  if(t[key]) el.textContent=t[key];
 });
 const selector=document.getElementById('languageSelector');
 if(selector) selector.value=lang;
}
function changeLanguage(lang){
 localStorage.setItem('basharLanguage',lang);
 location.reload();
}
document.addEventListener('DOMContentLoaded',applyTranslations);
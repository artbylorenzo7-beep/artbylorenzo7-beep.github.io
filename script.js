document.addEventListener('DOMContentLoaded',()=>{
 document.body.classList.add('loaded');
 document.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>document.body.classList.add('leaving')));
});
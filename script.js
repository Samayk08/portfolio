// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('primaryNav');
navToggle?.addEventListener('click', () => nav.classList.toggle('open'));

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const id = a.getAttribute('href');
    if(id.length > 1){
      e.preventDefault();
      document.querySelector(id)?.scrollIntoView({behavior:'smooth', block:'start'});
      nav.classList.remove('open');
    }
  });
});

// Dynamic year
document.getElementById('year').textContent = new Date().getFullYear();

// Scroll-to-top button
const scrollTopBtn = document.getElementById('scrollTop');
window.addEventListener('scroll',()=>{
  if(window.scrollY > 500) scrollTopBtn.classList.add('show');
  else scrollTopBtn.classList.remove('show');
});

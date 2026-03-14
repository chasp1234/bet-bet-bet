document.querySelectorAll('.topnav a').forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const id = link.getAttribute('href');
    const target = id ? document.querySelector(id) : null;
    target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

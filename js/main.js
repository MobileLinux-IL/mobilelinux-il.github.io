// Highlight the current page in the nav. Distro sub-pages highlight "Distributions".
const path = location.pathname;
document.querySelectorAll('nav a[href]').forEach(a => {
  if (a.getAttribute('href') === path) a.classList.add('active');
});
if (path.includes('/distributions/')) {
  document.querySelector('nav a[href="/src/distributions/index.html"]')?.classList.add('active');
}

// PacersGlobal — shared interactions
(function () {
  // Sticky header shadow on scroll
  var header = document.querySelector('header.site');
  function onScroll() {
    if (!header) return;
    header.classList.toggle('scrolled', window.scrollY > 8);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile menu
  var burger = document.getElementById('burger');
  var mnav = document.getElementById('mnav');
  if (burger && mnav) {
    burger.addEventListener('click', function () {
      burger.classList.toggle('open');
      mnav.classList.toggle('open');
    });
    mnav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        burger.classList.remove('open');
        mnav.classList.remove('open');
      });
    });
  }

  // Active nav link based on current page
  var path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav a, .mnav a').forEach(function (a) {
    var href = a.getAttribute('href');
    if (href === path) a.classList.add('active');
  });

  // Scroll reveal
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.14 });
    reveals.forEach(function (r) { io.observe(r); });
  } else {
    reveals.forEach(function (r) { r.classList.add('in'); });
  }

  // Duplicate marquee content for seamless loop
  document.querySelectorAll('.marquee').forEach(function (m) {
    m.innerHTML += m.innerHTML;
  });

  // Contact form (demo only)
  var form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var note = document.getElementById('formNote');
      if (note) note.style.display = 'block';
      form.reset();
    });
  }
})();

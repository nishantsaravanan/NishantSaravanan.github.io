// Nishant Saravanan — portfolio
// Everything here is optional polish: the site works fully without JavaScript.

(function () {
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ---- Mobile menu ----
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');

  function setMenu(open) {
    toggle.setAttribute('aria-expanded', String(open));
    nav.setAttribute('data-open', String(open));
  }
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      setMenu(toggle.getAttribute('aria-expanded') !== 'true');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) setMenu(false);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        setMenu(false);
        toggle.focus();
      }
    });
  }

  // ---- Highlight the nav link for the section on screen ----
  var links = Array.prototype.slice.call(document.querySelectorAll('.site-nav a[href^="#"]'));
  if ('IntersectionObserver' in window && links.length) {
    var byId = {};
    links.forEach(function (a) { byId[a.getAttribute('href').slice(1)] = a; });
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        links.forEach(function (a) { a.removeAttribute('aria-current'); });
        var link = byId[entry.target.id];
        if (link) link.setAttribute('aria-current', 'true');
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    Object.keys(byId).forEach(function (id) {
      var section = document.getElementById(id);
      if (section) observer.observe(section);
    });
  }

  // ---- One-time "routing traces" animation on the hero schematic ----
  var sheet = document.querySelector('.sheet');
  var status = document.getElementById('route-status');
  if (sheet && status && !reduceMotion) {
    var traces = sheet.querySelectorAll('.trace');
    var step = 120;
    traces.forEach(function (t, i) { t.style.setProperty('--d', (i * step) + 'ms'); });
    sheet.classList.add('is-routing');
    var total = 900 + step * (traces.length - 1);
    var start = null;
    var tick = function (now) {
      if (start === null) start = now;
      var p = Math.min(1, (now - start) / total);
      status.textContent = p < 1
        ? 'Routing traces ' + Math.round(p * 100) + '%'
        : traces.length + ' nets routed';
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }

  // ---- Résumé preview: hide the embedded PDF where the browser can't display it ----
  var preview = document.getElementById('resume-preview');
  var note = document.getElementById('resume-note');
  if (preview && note && navigator.pdfViewerEnabled === false) {
    preview.hidden = true;
    note.hidden = false;
  }

  // ---- Footer year ----
  var year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());
})();

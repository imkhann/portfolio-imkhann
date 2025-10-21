/* Helpers */
function $(sel, root=document){ return root.querySelector(sel); }
function $all(sel, root=document){ return Array.from(root.querySelectorAll(sel)); }

/* Theme init: localStorage > prefers-color-scheme */
(function themeInit(){
  try {
    var saved = localStorage.getItem('theme'); // 'dark' | 'light' | null
    var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    var useDark = saved ? (saved === 'dark') : prefersDark;
    document.documentElement.classList.toggle('dark', useDark);
  } catch(e){}
})();

/* Theme toggle wiring */
(function themeToggle(){
  var desk = $('#theme-switch');
  var mob  = $('#theme-switch-mobile');

  function setTheme(isDark){
    document.documentElement.classList.toggle('dark', isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    if(desk) desk.setAttribute('aria-checked', String(isDark));
    if(mob)  mob.setAttribute('aria-checked',  String(isDark));
  }

  function currentDark(){
    return document.documentElement.classList.contains('dark');
  }

  function bind(btn){
    if(!btn) return;
    btn.addEventListener('click', function(){
      setTheme(!currentDark());
    });
    btn.addEventListener('keydown', function(e){
      if(e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setTheme(!currentDark()); }
    });
  }

  bind(desk); bind(mob);
})();

/* Header shadow on scroll */
(function(){
  var header = document.querySelector('header[data-site-header]');
  if(!header) return;
  function onScroll(){
    if (window.scrollY > 0) header.classList.add('navbar-fixed');
    else header.classList.remove('navbar-fixed');
  }
  onScroll();
  window.addEventListener('scroll', onScroll, {passive:true});
})();

/* Mobile drawer */
(function(){
  var burger = $('#hamburger');
  var shell  = $('#mobile-drawer');
  var backdrop = shell ? $('.drawer-backdrop', shell) : null;
  var panel    = shell ? $('.drawer-panel', shell) : null;

  if(!burger || !shell || !backdrop || !panel) return;

  function handleDocClick(e){
  if (!shell.classList.contains('open')) return;
  // jika klik bukan di panel dan bukan tombol hamburger → tutup
  if (panel && !panel.contains(e.target) && e.target !== burger) {
    close();
  }
}
  function open(){
    burger.setAttribute('aria-expanded','true');
    shell.classList.add('open');
    document.body.classList.add('mobile-nav-open');
    document.addEventListener('click', handleDocClick, true); // capture biar pasti dapat 
  }
  function close(){
    burger.setAttribute('aria-expanded','false');
    shell.classList.remove('open');
    document.body.classList.remove('mobile-nav-open');
    document.removeEventListener('click', handleDocClick, true);
  }

  // toggle
  burger.addEventListener('click', function(){
    if (burger.getAttribute('aria-expanded') === 'true') close(); else open();
  });

  // close on backdrop click
  backdrop.addEventListener('click', close);

  // close on link click
  $all('.mobile-link', panel).forEach(function(a){ a.addEventListener('click', close); });

  // close on Esc
  window.addEventListener('keydown', function(e){ if(e.key === 'Escape') close(); });

  // close when resizing to desktop
  window.addEventListener('resize', function(){
    if (window.innerWidth >= 1024 && shell.classList.contains('open')) close();
  });
})();

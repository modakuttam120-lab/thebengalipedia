/* shared.js — injects topbar, masthead, nav, ticker, footer, scroll-top into every page */
(function(){
  const TOPBAR = `
  <div class="topbar">
    <div class="container">
      <div class="topbar-left">
        <span id="tbDate"></span>
        <span style="opacity:.3">|</span>
        <span>☀️ কলকাতা: ৩২°সে</span>
        <span style="opacity:.3">|</span>
        <a href="index.html">হোম</a>
      </div>
      <div class="topbar-right">
        <div class="lang-switcher">
          <button class="lang-btn active">বাং</button>
          <button class="lang-btn">EN</button>
          <button class="lang-btn">हिं</button>
        </div>
        <a href="login.html">লগইন</a>
        <a href="register.html">নিবন্ধন</a>
        <a href="#" class="badge badge-red" style="font-size:10px">প্রিমিয়াম</a>
      </div>
    </div>
  </div>`;

  const MASTHEAD = `
  <header class="masthead">
    <div class="container">
      <a href="index.html" class="logo-block">
        <div class="logo-name">The Bengali<span>Pedia</span></div>
        <div class="logo-tagline">বিশ্বস্ত সংবাদ • গভীর বিশ্লেষণ • বৈশ্বিক দৃষ্টিভঙ্গি</div>
      </a>
      <div class="search-bar">
        <span style="color:var(--muted)">🔍</span>
        <input type="text" placeholder="সংবাদ খুঁজুন…" aria-label="অনুসন্ধান" onkeydown="if(event.key==='Enter')window.location='search.html?q='+this.value"/>
        <a href="search.html" style="font-family:var(--font-ui);font-size:11px;font-weight:700;color:var(--red);white-space:nowrap">AI খোঁজ</a>
      </div>
      <div class="masthead-actions">
        <a href="#" class="btn btn-outline btn-sm">🔔</a>
        <a href="login.html" class="btn btn-outline btn-sm">লগইন</a>
        <a href="register.html" class="btn btn-primary btn-sm">সাবস্ক্রাইব</a>
      </div>
    </div>
  </header>`;

  const NAV_ITEMS = [
    ['index.html','হোম'],['category.html','রাজনীতি'],['category.html','পশ্চিমবঙ্গ'],
    ['category.html','ভূরাজনীতি'],['category.html','আন্তর্জাতিক'],['category.html','অর্থনীতি'],
    ['category.html','প্রযুক্তি'],['category.html','প্রতিরক্ষা'],['video.html','ভিডিও'],
    ['factcheck.html','ফ্যাক্ট চেক'],['opinion.html','মতামত'],['search.html','🔍'],
  ];

  const path = window.location.pathname.split('/').pop()||'index.html';
  const navHTML = NAV_ITEMS.map(([href,label])=>{
    const active = path===href?'active':'';
    return `<a href="${href}" class="nav-item ${active}">${label}</a>`;
  }).join('');

  const NAV = `
  <nav class="nav" role="navigation">
    <div class="container">${navHTML}<a href="category.html" class="nav-item" style="margin-left:auto;opacity:.6">আরও ▾</a></div>
  </nav>`;

  const TICKER = `
  <div class="ticker">
    <div class="container" style="overflow:hidden;display:flex;align-items:center">
      <div class="ticker-label">🔴 ব্রেকিং</div>
      <div style="overflow:hidden;flex:1">
        <div class="ticker-track">
          <span class="ticker-item">সংসদে বিরোধী দলের তীব্র প্রতিবাদ</span>
          <span class="ticker-item">ভারত-চীন সীমান্তে নতুন উত্তেজনা</span>
          <span class="ticker-item">শেয়ার বাজারে ঊর্ধ্বমুখী, সেনসেক্স ৮২,৪৫০</span>
          <span class="ticker-item">পশ্চিমবঙ্গে পঞ্চায়েত নির্বাচনের তারিখ ঘোষণা</span>
          <span class="ticker-item">গগনযান মিশনের চূড়ান্ত পরীক্ষা সফল</span>
          <span class="ticker-item">সংসদে বিরোধী দলের তীব্র প্রতিবাদ</span>
          <span class="ticker-item">ভারত-চীন সীমান্তে নতুন উত্তেজনা</span>
          <span class="ticker-item">শেয়ার বাজারে ঊর্ধ্বমুখী, সেনসেক্স ৮২,৪৫০</span>
          <span class="ticker-item">পশ্চিমবঙ্গে পঞ্চায়েত নির্বাচনের তারিখ ঘোষণা</span>
          <span class="ticker-item">গগনযান মিশনের চূড়ান্ত পরীক্ষা সফল</span>
        </div>
      </div>
    </div>
  </div>`;

  const FOOTER = `
  <footer class="footer">
    <div class="container">
      <div class="footer-top">
        <div>
          <div class="logo-name" style="font-size:26px;color:#fff">The Bengali<span style="color:var(--red)">Pedia</span></div>
          <div style="font-family:var(--font-ui);font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:rgba(255,255,255,.35);margin-top:4px">বিশ্বস্ত সংবাদ • গভীর বিশ্লেষণ</div>
          <p style="font-size:13px;line-height:1.7;color:rgba(255,255,255,.5);margin:14px 0">বাংলা ভাষায় বিশ্বমানের সাংবাদিকতার প্রতিশ্রুতি নিয়ে আমরা এগিয়ে চলেছি।</p>
          <div class="footer-social">
            <a href="#" class="social-btn">📘</a><a href="#" class="social-btn">🐦</a>
            <a href="#" class="social-btn">📺</a><a href="#" class="social-btn">📸</a>
            <a href="#" class="social-btn">✈️</a>
          </div>
        </div>
        <div>
          <div class="footer-col-title">বিভাগ</div>
          <div class="footer-links">
            <a href="category.html">রাজনীতি</a><a href="category.html">পশ্চিমবঙ্গ</a>
            <a href="category.html">ভূরাজনীতি</a><a href="category.html">অর্থনীতি</a>
            <a href="category.html">প্রযুক্তি</a><a href="factcheck.html">ফ্যাক্ট চেক</a>
            <a href="video.html">ভিডিও</a>
          </div>
        </div>
        <div>
          <div class="footer-col-title">সংস্থা</div>
          <div class="footer-links">
            <a href="about.html">আমাদের সম্পর্কে</a><a href="about.html#editorial">সম্পাদকীয় নীতি</a>
            <a href="about.html#ethics">নৈতিকতা বিধিমালা</a><a href="contact.html">যোগাযোগ</a>
            <a href="about.html#careers">ক্যারিয়ার</a><a href="contact.html#advertise">বিজ্ঞাপন</a>
          </div>
        </div>
        <div>
          <div class="footer-col-title">পরিষেবা</div>
          <div class="footer-links">
            <a href="newsletter.html">নিউজলেটার</a><a href="video.html">পডকাস্ট</a>
            <a href="register.html">প্রিমিয়াম</a><a href="search.html">AI অনুসন্ধান</a>
            <a href="dashboard.html">ড্যাশবোর্ড</a>
          </div>
        </div>
        <div>
          <div class="footer-col-title">আইনি</div>
          <div class="footer-links">
            <a href="about.html#privacy">গোপনীয়তা নীতি</a><a href="about.html#terms">শর্তাবলী</a>
            <a href="about.html#cookie">কুকি নীতি</a><a href="about.html#dmca">DMCA</a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <div>© ২০২৬ The Bengali Pedia. সর্বস্বত্ব সংরক্ষিত। RNI: WBBEN/2024/84521</div>
        <div class="footer-bottom-links">
          <a href="about.html#privacy">গোপনীয়তা</a>
          <a href="about.html#terms">শর্তাবলী</a>
          <a href="sitemap.html">সাইটম্যাপ</a>
        </div>
      </div>
    </div>
  </footer>
  <a href="#" class="scroll-top" id="scrollTop">↑</a>`;

  // Inject into body
  const body = document.body;
  const main = body.innerHTML;
  body.innerHTML = TOPBAR + MASTHEAD + NAV + TICKER + main + FOOTER;

  // Date
  const d = new Date();
  const bn = ['রবিবার','সোমবার','মঙ্গলবার','বুধবার','বৃহস্পতিবার','শুক্রবার','শনিবার'];
  const bm = ['জানুয়ারি','ফেব্রুয়ারি','মার্চ','এপ্রিল','মে','জুন','জুলাই','আগস্ট','সেপ্টেম্বর','অক্টোবর','নভেম্বর','ডিসেম্বর'];
  const el = document.getElementById('tbDate');
  if(el) el.textContent = bn[d.getDay()]+', '+d.getDate()+' '+bm[d.getMonth()]+' '+d.getFullYear();

  // Lang switcher
  document.querySelectorAll('.lang-btn').forEach(btn=>{
    btn.addEventListener('click',function(){
      document.querySelectorAll('.lang-btn').forEach(b=>b.classList.remove('active'));
      this.classList.add('active');
    });
  });

  // Scroll top
  const st = document.getElementById('scrollTop');
  if(st){
    window.addEventListener('scroll',()=>{
      st.classList.toggle('visible',window.scrollY>400);
    });
    st.addEventListener('click',e=>{e.preventDefault();window.scrollTo({top:0,behavior:'smooth'})});
    // ================================
// GNEWS AUTO NEWS
// ================================

async function loadLatestNews() {
  try {

    const response = await fetch("/api/news");

    const data = await response.json();

    const articles = data.articles || [];

    if (!articles.length) return;

    // Hero
    const heroTitle = document.querySelector(".hero-main-title");
    const heroImg = document.querySelector(".hero-main-img img");

    if(heroTitle){
      heroTitle.textContent = articles[0].title;
    }

    if(heroImg){
      heroImg.src = articles[0].image || "https://picsum.photos/900/500";
    }

    // Breaking Ticker
    const ticker = document.querySelector(".ticker-track");

    if(ticker){

      ticker.innerHTML = "";

      articles.slice(0,10).forEach(news=>{

        ticker.innerHTML += `
          <span class="ticker-item">
            ${news.title}
          </span>
        `;

      });

    }

    // Latest Cards

    const cards = document.querySelectorAll(".card");

    cards.forEach((card,index)=>{

      if(!articles[index+1]) return;

      const a = articles[index+1];

      const img = card.querySelector("img");
      const title = card.querySelector(".card-title");

      if(img){
          img.src = a.image || "https://picsum.photos/400/250";
      }

      if(title){
          title.textContent = a.title;
      }

    });

  } catch(err){

      console.log(err);

  }

}

loadLatestNews();

// Refresh Every 15 Minutes

setInterval(loadLatestNews,900000);
  }
})();

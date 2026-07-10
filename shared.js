document.addEventListener("DOMContentLoaded", function() {
    const headerPlaceholder = document.getElementById("header-placeholder");
    
    if (headerPlaceholder) {
        headerPlaceholder.innerHTML = `
            <!-- TOP BAR -->
            <div class="topbar">
              <div class="container">
                <div class="topbar-left">
                  <span class="topbar-date">শুক্রবার, ১০ জুলাই ২০২৬</span>
                  <span>|</span>
                  <span class="topbar-weather">☀️ কলকাতা: ৩২°সে</span>
                  <span>|</span>
                  <a href="#">সংস্করণ ৪.২.১</a>
                </div>
                <div class="topbar-right">
                  <div class="lang-switcher">
                    <button class="lang-btn active">বাং</button>
                    <button class="lang-btn">EN</button>
                    <button class="lang-btn">हिं</button>
                  </div>
                  <a href="#">লগইন</a>
                  <a href="#">নিবন্ধন</a>
                  <a href="#" class="badge badge-red" style="font-size:10px">প্রিমিয়াম</a>
                </div>
              </div>
            </div>

            <!-- MASTHEAD -->
            <header class="masthead">
              <div class="container">
                <div class="logo-block">
                  <div class="logo-name">The Bengali<span>Pedia</span></div>
                  <div class="logo-tagline">বিশ্বস্ত সংবাদ • গভীর বিশ্লেষণ • বৈশ্বিক দৃষ্টিভঙ্গি</div>
                </div>
                <div class="masthead-right">
                  <div class="search-bar">
                    <span class="search-icon">🔍</span>
                    <input type="text" placeholder="সংবাদ, বিষয় বা লেখক খুঁজুন…" aria-label="অনুসন্ধান"/>
                    <button style="font-family:var(--font-ui);font-size:11px;font-weight:700;color:var(--red)">AI খোঁজ</button>
                  </div>
                  <div class="masthead-actions">
                    <a href="#" class="btn btn-outline">🔔 সতর্কতা</a>
                    <a href="#" class="btn btn-primary">সাবস্ক্রাইব</a>
                  </div>
                </div>
              </div>
            </header>
        `;
    }
});

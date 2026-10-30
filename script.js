/**
 * THIỆP CƯỚI ONLINE - LOGIC XỬ LÝ (SCRIPT.JS)
 * Đồng bộ toàn bộ dữ liệu từ file config.js
 */

document.addEventListener('DOMContentLoaded', () => {
  initDOMWithConfig();
  initCountdownTimer();
  initMusicPlayer();
  initEventsList();
  initGalleryAndLightbox();
  initGuestbook();
  initPetalsEffect();
});

// ========================================================
// 1. ĐỒNG BỘ DỮ LIỆU TỪ CONFIG.JS LÊN GIAO DIỆN
// ========================================================
function initDOMWithConfig() {
  const cfg = WEDDING_CONFIG;
  if (!cfg) return;

  // Tiêu đề & Tên Cô dâu Chú rể
  const coupleNameStr = `${cfg.groom.nickname} & ${cfg.bride.nickname}`;
  document.title = `Thiệp Cưới: ${coupleNameStr} | Wedding Invitation`;

  const envCoupleName = document.getElementById('env-couple-name');
  if (envCoupleName) envCoupleName.textContent = coupleNameStr;

  const heroGroom = document.getElementById('hero-groom-name');
  const heroBride = document.getElementById('hero-bride-name');
  if (heroGroom) heroGroom.textContent = cfg.groom.nickname;
  if (heroBride) heroBride.textContent = cfg.bride.nickname;

  const heroDateDisplay = document.getElementById('hero-date-display');
  if (heroDateDisplay) heroDateDisplay.textContent = cfg.weddingDateFormatted;

  const heroQuote = document.getElementById('hero-quote');
  if (heroQuote && cfg.quote) heroQuote.textContent = cfg.quote;

  // Chú Rể
  setElemText('groom-name', cfg.groom.name);
  setElemText('groom-desc', cfg.groom.description);
  setElemText('groom-father', cfg.groom.father);
  setElemText('groom-mother', cfg.groom.mother);
  setElemText('groom-address', cfg.groom.address);
  setElemText('groom-role', cfg.groom.role || 'Trưởng Nam');
  setElemText('groom-phone', cfg.groom.phone);
  setElemAttr('groom-avatar', 'src', cfg.groom.avatar);
  setElemAttr('groom-phone-link', 'href', `tel:${cfg.groom.phone.replace(/\s+/g, '')}`);

  // Cô Dâu
  setElemText('bride-name', cfg.bride.name);
  setElemText('bride-desc', cfg.bride.description);
  setElemText('bride-father', cfg.bride.father);
  setElemText('bride-mother', cfg.bride.mother);
  setElemText('bride-address', cfg.bride.address);
  setElemText('bride-role', cfg.bride.role || 'Út Nữ');
  setElemText('bride-phone', cfg.bride.phone);
  setElemAttr('bride-avatar', 'src', cfg.bride.avatar);
  setElemAttr('bride-phone-link', 'href', `tel:${cfg.bride.phone.replace(/\s+/g, '')}`);

  // Nhạc nền thông tin
  setElemText('music-title-display', cfg.music.title);
  const audioSource = document.getElementById('audio-source');
  if (audioSource) audioSource.src = cfg.music.audioUrl;
  const bgAudio = document.getElementById('bg-audio');
  if (bgAudio) bgAudio.load();

  // Lời cảm ơn cuối trang
  setElemText('footer-thank-you', cfg.thankYouMessage);
}

function setElemText(id, text) {
  const el = document.getElementById(id);
  if (el && text !== undefined) el.textContent = text;
}

function setElemAttr(id, attr, val) {
  const el = document.getElementById(id);
  if (el && val !== undefined) el.setAttribute(attr, val);
}

// ========================================================
// 2. ĐẾM NGƯỢC NGÀY CƯỚI (COUNTDOWN TIMER)
// ========================================================
function initCountdownTimer() {
  const targetDate = new Date(WEDDING_CONFIG.weddingDate).getTime();

  function update() {
    const now = new Date().getTime();
    const diff = targetDate - now;

    const daysEl = document.getElementById('timer-days');
    const hoursEl = document.getElementById('timer-hours');
    const minEl = document.getElementById('timer-minutes');
    const secEl = document.getElementById('timer-seconds');

    if (diff <= 0) {
      if (daysEl) daysEl.textContent = '00';
      if (hoursEl) hoursEl.textContent = '00';
      if (minEl) minEl.textContent = '00';
      if (secEl) secEl.textContent = '00';
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    if (daysEl) daysEl.textContent = String(days).padStart(2, '0');
    if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
    if (minEl) minEl.textContent = String(minutes).padStart(2, '0');
    if (secEl) secEl.textContent = String(seconds).padStart(2, '0');
  }

  update();
  setInterval(update, 1000);
}

// ========================================================
// 3. NHẠC NỀN & BÌ THƯ MỞ ĐẦU (BACKGROUND MUSIC)
// ========================================================
function initMusicPlayer() {
  const audio = document.getElementById('bg-audio');
  const btnToggle = document.getElementById('btn-toggle-music');
  const discIcon = document.getElementById('music-disc-icon');
  const pauseIcon = document.getElementById('music-pause-icon');
  const btnOpenEnvelope = document.getElementById('btn-open-envelope');
  const envelopeOverlay = document.getElementById('envelope-overlay');

  let isPlaying = false;

  function playAudio() {
    if (!audio) return;
    audio.play().then(() => {
      isPlaying = true;
      if (discIcon) discIcon.classList.add('playing');
      if (pauseIcon) pauseIcon.classList.add('hidden');
    }).catch(err => {
      console.log('Audio autoplay prevented:', err);
    });
  }

  function pauseAudio() {
    if (!audio) return;
    audio.pause();
    isPlaying = false;
    if (discIcon) discIcon.classList.remove('playing');
    if (pauseIcon) pauseIcon.classList.remove('hidden');
  }

  if (btnToggle) {
    btnToggle.addEventListener('click', () => {
      if (isPlaying) {
        pauseAudio();
      } else {
        playAudio();
      }
    });
  }

  // Mở thiệp cưới & tự động phát nhạc (do người dùng click trực tiếp)
  if (btnOpenEnvelope && envelopeOverlay) {
    btnOpenEnvelope.addEventListener('click', () => {
      envelopeOverlay.classList.add('hide');
      playAudio();

      // Hiệu ứng pháo giấy nhẹ chào mừng
      if (typeof confetti === 'function') {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.6 },
          colors: ['#d9777f', '#c5a059', '#fbeee8']
        });
      }
    });
  }
}

// ========================================================
// 4. HIỂN THỊ LỊCH TRÌNH SỰ KIỆN & GOOGLE CALENDAR
// ========================================================
function initEventsList() {
  const container = document.getElementById('events-container');
  if (!container || !WEDDING_CONFIG.events) return;

  container.innerHTML = '';

  WEDDING_CONFIG.events.forEach((evt) => {
    // Tạo link Google Calendar
    const cal = evt.calendarLink;
    let googleCalUrl = '#';
    if (cal) {
      googleCalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(cal.title)}&dates=${cal.start}/${cal.end}&details=${encodeURIComponent(cal.details)}&location=${encodeURIComponent(cal.location)}`;
    }

    const card = document.createElement('div');
    card.className = 'glass-card rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200/60 relative overflow-hidden flex flex-col justify-between hover:shadow-lg transition-all duration-300';
    card.innerHTML = `
      <div>
        <div class="flex items-center justify-between mb-4">
          <span class="px-3 py-1 rounded-full text-xs font-semibold tracking-wider bg-rosewood-light text-rosewood-dark">
            ${evt.tag}
          </span>
          <div class="flex items-center gap-1.5 text-stone-500 text-xs">
            <svg class="w-4 h-4 text-champagne" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <span class="font-bold text-stone-800 text-sm">${evt.time}</span>
          </div>
        </div>

        <h3 class="font-serif-title text-2xl font-bold text-stone-800 mb-1">${evt.title}</h3>
        <p class="text-sm font-semibold text-rosewood mb-0.5">${evt.date}</p>
        <p class="text-xs text-stone-400 italic mb-5">${evt.lunarDate}</p>

        <div class="space-y-2 border-t border-stone-200/70 pt-4 mb-6">
          <p class="text-sm font-medium text-stone-800 flex items-start gap-2">
            <svg class="w-4 h-4 text-rosewood shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
            </svg>
            <span>${evt.locationName}</span>
          </p>
          <p class="text-xs text-stone-500 leading-relaxed pl-6">
            ${evt.address}
          </p>
        </div>
      </div>

      <!-- Action buttons -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
        <a href="${evt.mapUrl}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-stone-900 text-white text-xs font-medium hover:bg-stone-800 transition-colors shadow-sm">
          <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
          </svg>
          <span>Xem Google Maps</span>
        </a>

        <a href="${googleCalUrl}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-stone-200 text-stone-700 text-xs font-medium hover:bg-stone-50 transition-colors">
          <svg class="w-4 h-4 text-champagne" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
          </svg>
          <span>Thêm vào Lịch</span>
        </a>
      </div>
    `;
    container.appendChild(card);
  });
}

// ========================================================
// 5. ALBUM ẢNH CƯỚI & LIGHTBOX (PHOTO GALLERY)
// ========================================================
let currentLightboxIndex = 0;

function initGalleryAndLightbox() {
  const grid = document.getElementById('gallery-grid');
  const modal = document.getElementById('lightbox-modal');
  const imgEl = document.getElementById('lightbox-img');
  const captionEl = document.getElementById('lightbox-caption');
  const counterEl = document.getElementById('lightbox-counter');
  const btnClose = document.getElementById('lightbox-close');
  const btnPrev = document.getElementById('lightbox-prev');
  const btnNext = document.getElementById('lightbox-next');

  const gallery = WEDDING_CONFIG.gallery || [];
  if (!grid || gallery.length === 0) return;

  grid.innerHTML = '';

  gallery.forEach((photo, idx) => {
    const item = document.createElement('div');
    item.className = 'group relative rounded-2xl overflow-hidden aspect-[4/5] cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300';
    
    // Tự động dùng fallbackUrl nếu ảnh nội bộ trong thư mục images chưa tồn tại
    item.innerHTML = `
      <img src="${photo.url}" alt="${photo.caption || 'Ảnh cưới'}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" onerror="if(this.src!=='${photo.fallbackUrl}'){this.src='${photo.fallbackUrl}';}">
      <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
        <p class="text-white text-xs sm:text-sm font-medium font-garamond italic">${photo.caption || ''}</p>
      </div>
    `;
    item.addEventListener('click', () => openLightbox(idx));
    grid.appendChild(item);
  });

  function openLightbox(index) {
    currentLightboxIndex = index;
    updateLightbox();
    if (modal) modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    if (modal) modal.classList.add('hidden');
    document.body.style.overflow = '';
  }

  function updateLightbox() {
    const item = gallery[currentLightboxIndex];
    if (!item) return;
    if (imgEl) {
      imgEl.onerror = () => {
        if (item.fallbackUrl && imgEl.src !== item.fallbackUrl) {
          imgEl.src = item.fallbackUrl;
        }
      };
      imgEl.src = item.url;
    }
    if (captionEl) captionEl.textContent = item.caption || '';
    if (counterEl) counterEl.textContent = `${currentLightboxIndex + 1} / ${gallery.length}`;
  }

  function prevPhoto() {
    currentLightboxIndex = (currentLightboxIndex - 1 + gallery.length) % gallery.length;
    updateLightbox();
  }

  function nextPhoto() {
    currentLightboxIndex = (currentLightboxIndex + 1) % gallery.length;
    updateLightbox();
  }

  if (btnClose) btnClose.addEventListener('click', closeLightbox);
  if (btnPrev) btnPrev.addEventListener('click', prevPhoto);
  if (btnNext) btnNext.addEventListener('click', nextPhoto);

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeLightbox();
    });
  }

  // Keyboard navigation
  window.addEventListener('keydown', (e) => {
    if (!modal || modal.classList.contains('hidden')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') prevPhoto();
    if (e.key === 'ArrowRight') nextPhoto();
  });
}

// Toast message helper
function showToast(msg) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 2600);
}

// ========================================================
// 6. SỔ LƯU BÚT & LỜI CHÚC (GUESTBOOK / RSVP)
// ========================================================
function initGuestbook() {
  const form = document.getElementById('form-wish');
  const wishesList = document.getElementById('wishes-list');

  const defaultWishes = [
    {
      name: "Trần Anh Tuấn",
      relation: "Bạn của Chú Rể Duy Nam",
      message: "Chúc mừng hạnh phúc Duy Nam & Mai Tâm! Chúc đôi bạn trẻ trăm năm tình viên mãn, bạc đầu nghĩa phu thê nha!",
      time: "Hôm qua lúc 18:24",
      attendance: "Sẽ tham dự"
    },
    {
      name: "Thanh Trúc",
      relation: "Bạn của Cô Dâu Mai Tâm",
      message: "Nhìn cô dâu chú rể đẹp đôi quá chừng. Chúc Tâm mãi mãi rạng rỡ và hạnh phúc bên anh Nam nhé!",
      time: "2 ngày trước",
      attendance: "Sẽ tham dự"
    }
  ];

  function getSavedWishes() {
    try {
      const saved = localStorage.getItem('wedding_wishes_data');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
    return defaultWishes;
  }

  function saveWishes(list) {
    try {
      localStorage.setItem('wedding_wishes_data', JSON.stringify(list));
    } catch (e) {
      console.error(e);
    }
  }

  function renderWishes() {
    if (!wishesList) return;
    const list = getSavedWishes();
    wishesList.innerHTML = '';

    list.forEach(w => {
      const card = document.createElement('div');
      card.className = 'glass-card rounded-2xl p-5 border border-stone-200/70 shadow-sm';
      card.innerHTML = `
        <div class="flex items-center justify-between mb-2">
          <div class="flex items-center gap-2">
            <span class="font-semibold text-stone-800 text-sm">${w.name}</span>
            <span class="text-[11px] px-2 py-0.5 rounded-full bg-rosewood-light text-rosewood-dark font-medium">${w.relation}</span>
          </div>
          <span class="text-[11px] text-stone-400">${w.time}</span>
        </div>
        <p class="text-sm text-stone-600 leading-relaxed font-garamond text-base mb-2">“${w.message}”</p>
        <div class="flex items-center gap-1.5 text-xs text-sage font-medium">
          <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
          <span>${w.attendance}</span>
        </div>
      `;
      wishesList.appendChild(card);
    });
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('guest-name').value.trim();
      const relation = document.getElementById('guest-relation').value;
      const message = document.getElementById('guest-message').value.trim();
      const attendance = document.querySelector('input[name="attendance"]:checked')?.value || 'Sẽ tham dự';

      if (!name || !message) return;

      const newWish = {
        name,
        relation,
        message,
        time: 'Vừa xong',
        attendance
      };

      const list = getSavedWishes();
      list.unshift(newWish);
      saveWishes(list);
      renderWishes();

      form.reset();
      showToast('Cảm ơn lời chúc ngọt ngào của bạn! ❤️');

      // Pháo hoa giấy ăn mừng
      if (typeof confetti === 'function') {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.7 }
        });
      }
    });
  }

  renderWishes();
}

// ========================================================
// 7. HIỆU ỨNG CÁNH HOA RƠI (FALLING SAKURA/ROSE PETALS)
// ========================================================
function initPetalsEffect() {
  const canvas = document.getElementById('petals-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const petalsCount = 28; // Giữ số lượng nhẹ để mượt mà trên mobile
  const petals = [];

  const petalColors = [
    'rgba(217, 119, 127, 0.45)', // Rose blush
    'rgba(244, 182, 193, 0.55)', // Light pink
    'rgba(255, 235, 238, 0.65)', // Soft white pink
    'rgba(212, 160, 168, 0.40)'  // Dusty rose
  ];

  for (let i = 0; i < petalsCount; i++) {
    petals.push({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 8 + 6,
      speedX: Math.random() * 1.5 - 0.75,
      speedY: Math.random() * 1.2 + 0.8,
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 2,
      color: petalColors[Math.floor(Math.random() * petalColors.length)]
    });
  }

  function drawPetal(p) {
    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.rotate((p.rotation * Math.PI) / 180);
    ctx.fillStyle = p.color;

    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.quadraticCurveTo(p.size / 2, -p.size, p.size, 0);
    ctx.quadraticCurveTo(p.size / 2, p.size, 0, 0);
    ctx.fill();
    ctx.restore();
  }

  function update() {
    ctx.clearRect(0, 0, width, height);

    for (let p of petals) {
      p.x += p.speedX;
      p.y += p.speedY;
      p.rotation += p.rotationSpeed;

      if (p.y > height + 20) {
        p.y = -20;
        p.x = Math.random() * width;
      }
      if (p.x > width + 20) p.x = -20;
      if (p.x < -20) p.x = width + 20;

      drawPetal(p);
    }

    requestAnimationFrame(update);
  }

  update();
}

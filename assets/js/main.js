
async function loadGallery() {
  const grid = document.getElementById('gallery-grid');
  if (!grid) return;

  const themeFilter = document.body.dataset.theme || null;

  try {
    const res = await fetch('/sigilsix_full_production/data/gallery.json');
    const items = await res.json();

    const filtered = themeFilter
      ? items.filter(i => i.theme === themeFilter)
      : items;

    grid.innerHTML = '';

    filtered.forEach(item => {
      const el = document.createElement('article');
      el.className = 'gallery-item';
      el.innerHTML = `
        <div class="gallery-image-wrap">
          <img src="/sigilsix_full_production/${item.src}" alt="${item.title}" data-title="${item.title}"/>
        </div>
        <div class="gallery-caption">
          <div class="gallery-title">${item.title}</div>
          <div class="gallery-tag">${item.theme.replace(/-/g, ' ')}</div>
        </div>
      `;
      el.addEventListener('click', () => openLightbox(item));
      grid.appendChild(el);
    });
  } catch (e) {
    console.error(e);
    grid.textContent = 'Unable to load gallery.';
  }
}

function openLightbox(item){
  const lb = document.createElement('div');
  lb.className = 'lightbox';

  lb.innerHTML = `
    <div class="lightbox-inner">
      <img src="/sigilsix_full_production/${item.src}" alt="${item.title}" />
      <button class="lightbox-close" aria-label="Close">×</button>
      <div class="lightbox-meta">${item.title}</div>
    </div>
  `;

  document.body.appendChild(lb);

  lb.querySelector('.lightbox-close').addEventListener('click', () => lb.remove());
  lb.addEventListener('click', (e) => { if (e.target === lb) lb.remove(); });
}

document.addEventListener('DOMContentLoaded', () => {
  const yearSpan = document.getElementById('year');
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();
  loadGallery();
});

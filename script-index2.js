// Mise à jour automatique de l'année dans le footer
document.getElementById('year').textContent = new Date().getFullYear();

// Variables principales

const placeSelect = document.getElementById('place');
const heroVideo = document.getElementById('heroVideo');
const heroTitle = document.getElementById('heroTitle');
const heroText = document.getElementById('heroText');
const telMain = '+241074167878';
const telOther = '+24165167878';
//VIEO
placeSelect.addEventListener('change', (e) => {
  if (e.target.value === 'baie') {
    heroVideo.src = "videos/baie.mp4";
    heroTitle.textContent = "Fouti FROUTIE — Bord de mer, luxe et fraîcheur";
    heroText.textContent = "Ambiance plage, brise marine et desserts fruités; service sur place, à emporter et livraison.";
  } else if (e.target.value === 'glass') {
    heroVideo.src = "videos/glass.mp4";
    heroTitle.textContent = "Fouti FROUTIE — Élégance de quartier, goût raffiné";
    heroText.textContent = "Cadre chic de quartier, créations gourmandes et service attentionné; sur place, emporter et livraison.";
  }
});

// Gestion du changement d’emplacement (Baie des Rois / Glass)
place.addEventListener('change', e => {
  if (e.target.value === 'baie') {
    heroImg.style.backgroundImage = "url('placeholder-baie.jpeg')";
    heroTitle.textContent = 'Fouti FROUTIE — Bord de mer, luxe et fraîcheur';
    heroText.textContent = 'Ambiance plage, brise marine et desserts fruités; service sur place, à emporter et livraison.';
    document.querySelectorAll('a[href^="tel:"]').forEach(a => {
      if (a.classList.contains('primary') || a.textContent.includes('Appeler')) {
        a.href = 'tel:' + telMain;
      }
    });
  } else {
    heroImg.style.backgroundImage = "url('placeholder-glass.mp4')";
    heroTitle.textContent = 'Fouti FROUTIE — Élégance de quartier, goût raffiné';
    heroText.textContent = 'Cadre chic de quartier, créations gourmandes et service attentionné; sur place, emporter et livraison.';
    document.querySelectorAll('a[href^="tel:"]').forEach(a => {
      if (a.classList.contains('primary') || a.textContent.includes('Appeler')) {
        a.href = 'tel:' + telMain;
      }
    });
  }
});
//VERSION PC MOBILE
const toggleBtn = document.getElementById('toggleDesktop');
const container = document.querySelector('.container');

let desktopActive = false;

toggleBtn.addEventListener('click', () => {
  desktopActive = !desktopActive;
  if (desktopActive) {
    container.classList.add('desktop-mode');
    toggleBtn.textContent = "📱"; // icône mobile
    toggleBtn.title = "Revenir en mode mobile";
  } else {
    container.classList.remove('desktop-mode');
    toggleBtn.textContent = "🖥️"; // icône ordinateur
    toggleBtn.title = "Basculer en mode ordinateur";
  }
});

// Contrôle du modal
function openModal(e, title, desc, img, price) {
  e.preventDefault();
  const modal = document.getElementById('modal');
  document.getElementById('modalImg').src = img;
  document.getElementById('modalImg').alt = title;
  document.getElementById('modalTitle').textContent = title;
  document.getElementById('modalDesc').textContent = desc;
  document.getElementById('modalPrice').textContent = price + ' XAF';
  document.getElementById('orderTel').href = 'tel:' + telMain;
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
}

function closeModal() {
  const modal = document.getElementById('modal');
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
}

// Fermer le modal en cliquant sur l’arrière-plan
document.getElementById('modal').addEventListener('click', function (e) {
  if (e.target === this) closeModal();
});

// Bouton "Voir le menu" => scroll fluide
document.getElementById('viewMenu').addEventListener('click', function (e) {
  e.preventDefault();
  document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
});

// Bouton "Commander" => appel direct
document.getElementById('orderBtn').addEventListener('click', function (e) {
  e.preventDefault();
  window.location.href = 'tel:' + telMain;
});

// Accessibilité clavier : ESC pour fermer le modal
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') closeModal();
});

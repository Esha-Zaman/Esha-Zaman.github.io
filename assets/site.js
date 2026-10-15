const toggle=document.querySelector('.nav-toggle'),nav=document.querySelector('.nav');if(toggle&&nav){toggle.addEventListener('click',()=>{const expanded=toggle.getAttribute('aria-expanded')==='true';toggle.setAttribute('aria-expanded',String(!expanded));nav.classList.toggle('open',!expanded);});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false')}));}
// Open only the curated images already included in the portfolio.
const photos = document.querySelectorAll('.evidence-photo img, .paw-photo img');
if (photos.length) {
  const dialog = document.createElement('dialog');
  dialog.className = 'photo-dialog';
  dialog.innerHTML = '<button type="button" aria-label="Close photograph">×</button><img alt=""><p></p>';
  document.body.append(dialog);
  const close = dialog.querySelector('button');
  close.addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', e => { if (e.target === dialog) dialog.close(); });
  photos.forEach(photo => {
    const button = document.createElement('button');
    button.type = 'button'; button.className = 'photo-open';
    button.setAttribute('aria-label', 'Enlarge: ' + photo.alt);
    photo.replaceWith(button); button.append(photo);
    button.addEventListener('click', () => {
      dialog.querySelector('img').src = photo.src;
      dialog.querySelector('img').alt = photo.alt;
      dialog.querySelector('p').textContent = photo.closest('figure')?.querySelector('figcaption')?.textContent || photo.alt;
      dialog.showModal();
    });
  });
}

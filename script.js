document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('img01');
  const captionText = document.getElementById('caption');
  const closeButton = document.querySelector('.close-button');

  const galleryImages = document.querySelectorAll(
    '.gallery-item img[data-info]'
  );

  // A página inicial não possui modal.
  // Se ele não existir, o script simplesmente encerra.
  if (!modal || !modalImg || !captionText) {
    return;
  }

  let imagemAnterior = null;

  function abrirModal(imagem) {
    imagemAnterior = imagem;

    modalImg.src = imagem.src;
    modalImg.alt = imagem.alt;

    captionText.textContent =
      imagem.dataset.info || imagem.alt;

    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');

    document.body.style.overflow = 'hidden';

    if (closeButton) {
      closeButton.focus();
    }
  }

  function fecharModal() {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');

    modalImg.src = '';
    modalImg.alt = '';

    captionText.textContent = '';

    document.body.style.overflow = '';

    if (imagemAnterior) {
      imagemAnterior.focus();
    }
  }

  galleryImages.forEach((imagem) => {
    imagem.setAttribute('tabindex', '0');
    imagem.setAttribute('role', 'button');

    imagem.addEventListener('click', () => {
      abrirModal(imagem);
    });

    imagem.addEventListener('keydown', (event) => {
      if (
        event.key === 'Enter' ||
        event.key === ' '
      ) {
        event.preventDefault();
        abrirModal(imagem);
      }
    });
  });

  if (closeButton) {
    closeButton.addEventListener(
      'click',
      fecharModal
    );
  }

  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      fecharModal();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (
      event.key === 'Escape' &&
      modal.classList.contains('active')
    ) {
      fecharModal();
    }
  });
});

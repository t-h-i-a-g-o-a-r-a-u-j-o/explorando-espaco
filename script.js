document.addEventListener('DOMContentLoaded', function() {
    let modal = document.getElementById("imageModal");
    let modalImg = document.getElementById("img01");
    let captionText = document.getElementById("caption");
    let closeButton = document.getElementsByClassName("close-button")[0];

    // Pega todas as imagens da galeria em todas as páginas
    let galleryImages = document.querySelectorAll("main .gallery-item img");

    galleryImages.forEach(function(img) {
        img.onclick = function(){
            modal.classList.add('active'); // Adiciona classe 'active' para animar o modal via CSS
            modalImg.src = this.src;
            captionText.innerHTML = this.getAttribute('data-info');
        }
    });

    if (closeButton) {
        closeButton.onclick = function() { 
            modal.classList.remove('active'); // Remove a classe 'active' para fechar
        }
    }

    modal.onclick = function(event) {
        if (event.target == modal) { 
            modal.classList.remove('active'); // Remove a classe 'active' para fechar
        }
    }
});document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("img01");
    const captionText = document.getElementById("caption");
    const closeButton = document.querySelector(".close-button"); // Usando querySelector para mais consistência
    const galleryImages = document.querySelectorAll("main .gallery-item img");

    // Função para abrir o modal
    function openModal(imgElement) {
        modal.classList.add('active');
        modalImg.src = imgElement.src;
        captionText.innerHTML = imgElement.getAttribute('data-info');
    }

    // Função para fechar o modal
    function closeModal() {
        modal.classList.remove('active');
    }

    // Adiciona o evento de clique a cada imagem da galeria
    galleryImages.forEach(img => {
        img.addEventListener('click', function() {
            openModal(this);
        });
    });

    // Adiciona eventos para fechar o modal
    if (closeButton) {
        closeButton.addEventListener('click', closeModal);
    }

    modal.addEventListener('click', function(event) {
        // Fecha se o clique for no fundo escuro (no próprio modal)
        if (event.target === modal) {
            closeModal();
        }
    });

    // MELHORIA: Adiciona evento para fechar com a tecla "Escape"
    document.addEventListener('keydown', function(event) {
        if (event.key === "Escape" && modal.classList.contains('active')) {
            closeModal();
        }
    });
});
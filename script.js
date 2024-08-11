document.addEventListener('DOMContentLoaded', function () {
    const textElement = document.querySelector('.animated-text');
    const words = ["FITNESS", "EXERCÍCIOS", "SAÚDE"];
    let index = 0;

    function changeWord() {
        textElement.textContent = words[index];
        index = (index + 1) % words.length;
    }

    setInterval(changeWord, 2000); // Muda a palavra a cada 2 segundos

    // Galeria de imagens
    let slideIndex = 0;
    const slides = document.querySelectorAll('.galeria-slide');

    function showSlides() {
        slides.forEach((slide, index) => {
            slide.style.display = index === slideIndex ? 'block' : 'none';
        });

        slideIndex = (slideIndex + 1) % slides.length;
    }

    setInterval(showSlides, 3000); 

    // Inicializar a galeria
    showSlides();
});
document.addEventListener('DOMContentLoaded', function () {
    const testemunhosContainer = document.querySelector('.testemunhos-container');
    const testemunhoItems = document.querySelectorAll('.testemunho-item');

    const containerWidth = testemunhosContainer.offsetWidth;
    const itemWidth = testemunhoItems[0].offsetWidth;
    const totalWidth = itemWidth * testemunhoItems.length;

    testemunhosContainer.style.width = `${totalWidth}px`;
    testemunhosContainer.style.display = 'flex';

    // Ajustar animação se necessário
    const animationDuration = 10; // Ajuste a duração da animação conforme necessário
    testemunhosContainer.style.animationDuration = `${animationDuration}s`;
});

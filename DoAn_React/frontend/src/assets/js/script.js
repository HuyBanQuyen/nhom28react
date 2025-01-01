document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('sidebar');
    const toggleBtn = document.getElementById('toggleBtn');
    const submenuToggles = document.querySelectorAll('.submenu-toggle');

    // Toggle sidebar
    toggleBtn.addEventListener('click', () => {
        sidebar.classList.toggle('collapsed');
        const icon = toggleBtn.querySelector('i');
        icon.classList.toggle('fa-angle-left');
        icon.classList.toggle('fa-angle-right');
    });

    // Toggle submenus
    submenuToggles.forEach(toggle => {
        toggle.addEventListener('click', (event) => {
            event.stopPropagation();
            const submenu = toggle.querySelector('.submenu');
            if (submenu) {
                submenu.classList.toggle('open');
            }

            const arrowIcon = toggle.querySelector('.arrow');
            if (arrowIcon) {
                arrowIcon.classList.toggle('fa-chevron-down');
                arrowIcon.classList.toggle('fa-chevron-up');
            }
        });
    });

    // Carousel logic
    const list = document.querySelector('.list');
    const items = document.querySelectorAll('.item');
    const dots = document.querySelectorAll('.dots li');
    let currentIndex = 0;

    function updateCarousel() {
        list.style.transform = `translateX(-${currentIndex * 100}%)`;
        dots.forEach(dot => dot.classList.remove('active'));
        dots[currentIndex].classList.add('active');
    }

    document.getElementById('next').addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % items.length; // Loop back to the first image
        updateCarousel();
    });

    document.getElementById('prev').addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + items.length) % items.length; // Loop to the last image
        updateCarousel();
    });

    // Optional: Automatic transition every 5 seconds
    setInterval(() => {
        currentIndex = (currentIndex + 1) % items.length;
        updateCarousel();
    }, 5000);
    
});
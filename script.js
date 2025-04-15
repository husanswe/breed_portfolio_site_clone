document.addEventListener('DOMContentLoaded', function () {
    // Grid elementini tanlash (portfolio-items)
    var grid = document.querySelector('.portfolio-items');

    // Isotope bilan gridni ishga tushirish
    imagesLoaded(grid, function () {
        var iso = new Isotope(grid, {
            itemSelector: '.portfolio-item',
            layoutMode: 'masonry',
            masonry: {
                columnWidth: '.portfolio-item',
                gutter: 10, // Elementlar orasidagi bo'shliq
            },
        });

        // Filtr tugmalarini tanlash
        var filterButtons = document.querySelectorAll('.portfolio-filters li');

        // Har bir tugmaga hodisa qo'shish
        filterButtons.forEach(function (button) {
            button.addEventListener('click', function () {
                // Aktiv sinfni o'chirish
                filterButtons.forEach(function (btn) {
                    btn.classList.remove('active');
                });
                // Bosilgan tugmaga aktiv sinf qo'shish
                this.classList.add('active');

                // Filtr qiymatini olish
                var filterValue = this.getAttribute('data-filter');
                // Filtrni qo'llash
                iso.arrange({
                    filter: filterValue,
                    transitionDuration: '0.4s', // Animatsiya davomiyligi
                });
            });
        });
    });
});
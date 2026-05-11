document.addEventListener("DOMContentLoaded", function() {
    // подсветка активной страницы в выпадающем меню
    var path = location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".menu-open button[data-href]").forEach(function(btn) {
        if (btn.getAttribute("data-href") === path) {
            btn.setAttribute("aria-current", "page");
        }
        btn.addEventListener("click", function() {
            window.location.href = btn.getAttribute("data-href");
        });
    });

    document.querySelector('.menu').addEventListener("click", function() {
        let menuOpen = document.querySelector('.menu-open');
        let buttons = document.querySelectorAll('.menu-open button');

        if (menuOpen.style.display === "none" || menuOpen.style.display === "") {
            menuOpen.style.display = "block";

            buttons.forEach(function(button, index) {
                button.style.display = "block"; // Сначала показываем кнопку
                button.style.opacity = 0; // Устанавливаем начальную прозрачность 0
                setTimeout(function() {
                    button.style.transition = "opacity 0.5s ease-in-out"; // Устанавливаем плавный переход
                    button.style.opacity = 1; // Устанавливаем конечную прозрачность 1
                }, (index + 1) * 200); // Увеличиваем задержку для каждой кнопки

                // Добавляем обработчики событий для изменения прозрачности при наведении
                button.addEventListener('mouseenter', function() {
                    button.style.opacity = 0.8;
                }, 50);

                button.addEventListener('mouseleave', function() {
                    button.style.opacity = 1;
                }, 50);
            });
        } else {
            buttons.forEach(function(button, index) {
                setTimeout(function() {
                    button.style.transition = "opacity 0.5s ease-in-out"; // Устанавливаем плавный переход
                    button.style.opacity = 0; // Устанавливаем конечную прозрачность 0
                }, (buttons.length - index - 1) * 200); // Задержка для скрытия в обратном порядке
            });

            setTimeout(function() {
                buttons.forEach(function(button) {
                    button.style.display = "none"; // Скрываем кнопки после завершения анимации
                });
                menuOpen.style.display = "none";
            }, buttons.length * 200 + 500); // Задержка + время анимации
        }
    });
});

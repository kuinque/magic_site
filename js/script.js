/* =====================================================
   ORANGE WAVE — общий скрипт
   - Открытие/закрытие меню-оверлея с анимацией
   - Tooltip для кнопки "?"
   - Подсветка активной страницы в меню
   - Тень навбара при скролле
   - Esc для закрытия меню
   ===================================================== */

(function () {
  "use strict";

  const body = document.body;
  const menuBtn = document.querySelector(".js-menu-toggle");
  const helpBtn = document.querySelector(".js-help-toggle");
  const helpTip = document.querySelector(".js-help-tip");
  const overlay = document.querySelector(".menu-overlay");
  const navbar = document.querySelector(".navbar");

  // ---------- Подсветка активной страницы ----------
  const currentPage =
    location.pathname.split("/").pop().toLowerCase() || "index.html";

  document.querySelectorAll(".menu-list__link").forEach((link) => {
    const href = link.getAttribute("href").toLowerCase();
    if (
      href === currentPage ||
      (currentPage === "" && href === "index.html") ||
      (currentPage === "index.html" && href === "index.html")
    ) {
      link.classList.add("is-active");
    }
  });

  // ---------- Открытие/закрытие меню ----------
  function openMenu() {
    body.classList.add("menu-open");
    body.style.overflow = "hidden";
    menuBtn.setAttribute("aria-expanded", "true");
  }

  function closeMenu() {
    body.classList.remove("menu-open");
    body.style.overflow = "";
    menuBtn.setAttribute("aria-expanded", "false");
  }

  function toggleMenu() {
    if (body.classList.contains("menu-open")) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  if (menuBtn) {
    menuBtn.addEventListener("click", toggleMenu);
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && body.classList.contains("menu-open")) {
      closeMenu();
    }
  });

  // Закрытие при клике на ссылку (для плавного перехода)
  document.querySelectorAll(".menu-list__link").forEach((link) => {
    link.addEventListener("click", () => {
      closeMenu();
    });
  });

  // ---------- Help tip "?" ----------
  let helpTimeout = null;
  if (helpBtn && helpTip) {
    helpBtn.addEventListener("click", () => {
      helpTip.classList.toggle("is-visible");
      clearTimeout(helpTimeout);
      if (helpTip.classList.contains("is-visible")) {
        helpTimeout = setTimeout(() => {
          helpTip.classList.remove("is-visible");
        }, 4500);
      }
    });

    document.addEventListener("click", (e) => {
      if (
        !helpTip.contains(e.target) &&
        e.target !== helpBtn &&
        helpTip.classList.contains("is-visible")
      ) {
        helpTip.classList.remove("is-visible");
      }
    });
  }

  // ---------- Тень навбара при скролле ----------
  if (navbar) {
    const updateScrolled = () => {
      if (window.scrollY > 12) {
        navbar.classList.add("is-scrolled");
      } else {
        navbar.classList.remove("is-scrolled");
      }
    };
    updateScrolled();
    window.addEventListener("scroll", updateScrolled, { passive: true });
  }
})();

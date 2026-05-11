/* =====================================================
   Подсветка активной страницы в горизонтальном навбаре
   + тень навбара при скролле
   ===================================================== */
(function () {
  "use strict";

  const currentPage =
    location.pathname.split("/").pop().toLowerCase() || "index.html";

  document.querySelectorAll(".nav__link").forEach((link) => {
    const href = (link.getAttribute("href") || "").toLowerCase();
    if (
      href === currentPage ||
      (currentPage === "" && href === "index.html")
    ) {
      link.classList.add("is-active");
    }
  });

  const navbar = document.querySelector(".navbar");
  if (navbar) {
    const updateScrolled = () => {
      navbar.classList.toggle("is-scrolled", window.scrollY > 12);
    };
    updateScrolled();
    window.addEventListener("scroll", updateScrolled, { passive: true });
  }
})();

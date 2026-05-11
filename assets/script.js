(function () {
  // ---- Подсветка активной ссылки на основе текущего URL ----
  const path = location.pathname.split("/").pop() || "index.html";
  const allLinks = document.querySelectorAll(
    ".nav__link, .mobile-menu__link"
  );
  allLinks.forEach((link) => {
    const href = (link.getAttribute("href") || "").split("/").pop();
    if (href === path) {
      if (link.classList.contains("nav__link")) {
        link.classList.add("nav__link--active");
      } else {
        link.classList.add("mobile-menu__link--active");
      }
      link.setAttribute("aria-current", "page");
    }
  });

  // ---- Логика мобильного меню ----
  const burger = document.querySelector(".nav__burger");
  const menu = document.querySelector(".mobile-menu");
  if (!burger || !menu) return;

  const links = menu.querySelectorAll(".mobile-menu__link");
  links.forEach((link, i) => link.style.setProperty("--i", i));

  const setOpen = (open) => {
    burger.setAttribute("aria-expanded", String(open));
    menu.setAttribute("data-open", String(open));
    document.body.classList.toggle("is-locked", open);
  };

  burger.addEventListener("click", () => {
    const isOpen = burger.getAttribute("aria-expanded") === "true";
    setOpen(!isOpen);
  });

  links.forEach((link) => {
    link.addEventListener("click", () => setOpen(false));
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && burger.getAttribute("aria-expanded") === "true") {
      setOpen(false);
      burger.focus();
    }
  });

  const mq = window.matchMedia("(min-width: 721px)");
  const onMq = (e) => {
    if (e.matches) setOpen(false);
  };
  if (mq.addEventListener) mq.addEventListener("change", onMq);
  else mq.addListener(onMq);
})();

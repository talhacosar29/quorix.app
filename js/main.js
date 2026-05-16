(function () {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav-links");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  const form = document.querySelector(".contact-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = form.querySelector('[name="name"]')?.value || "";
      const email = form.querySelector('[name="email"]')?.value || "";
      const message = form.querySelector('[name="message"]')?.value || "";
      const subject = encodeURIComponent("Quorix — Website contact");
      const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\n${message}`
      );
      const mailto = form.dataset.mailto || "contact@tycosoftware.com";
      window.location.href = `mailto:${mailto}?subject=${subject}&body=${body}`;
    });
  }
})();

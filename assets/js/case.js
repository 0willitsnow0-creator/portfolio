// Highlights the current section link in the sticky table of contents
// as the reader scrolls through a case study page.
document.addEventListener("DOMContentLoaded", () => {
  const links = Array.from(document.querySelectorAll(".case-toc a"));
  const sections = links
    .map(link => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  if (!links.length || !sections.length) return;

  const setActive = id => {
    links.forEach(link => {
      link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
    });
  };

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    },
    { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
  );

  sections.forEach(section => observer.observe(section));
});

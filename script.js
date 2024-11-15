document.addEventListener('DOMContentLoaded', () => {
  const accordions = document.querySelectorAll('.accordion');

  accordions.forEach(accordion => {
    const button = accordion.querySelector('.accordion-button');
    const panel = accordion.querySelector('.accordion-panel');

    button.addEventListener('click', () => {
      accordions.forEach(otherAccordion => {
        if (otherAccordion !== accordion && otherAccordion.classList.contains('open')) {
          otherAccordion.classList.remove('open');
          otherAccordion.querySelector('.accordion-panel').style.maxHeight = null;
        }
      });

      if (accordion.classList.contains('open')) {
        accordion.classList.remove('open');
        panel.style.maxHeight = null;
      } else {
        accordion.classList.add('open');
        panel.style.maxHeight = panel.scrollHeight + 'px';
      }
    });
  });
});

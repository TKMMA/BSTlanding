const tabButtons = document.querySelectorAll('.tab-button');
const tabPanels = document.querySelectorAll('.tab-panel');

tabButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const target = button.dataset.tab;

    tabButtons.forEach((btn) => btn.classList.remove('active'));
    button.classList.add('active');

    tabPanels.forEach((panel) => {
      panel.classList.toggle('hidden', panel.dataset.panel !== target);
    });
  });
});

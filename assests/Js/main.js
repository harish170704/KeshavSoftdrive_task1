document.addEventListener('DOMContentLoaded', function () {
  const y = new Date().getFullYear();
  ['year', 'year2', 'year3'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = y;
  });

  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      if (!form.checkValidity()) {
        form.classList.add('was-validated');
        return;
      }
    
      const modalEl = document.getElementById('successModal');
      const bsModal = new bootstrap.Modal(modalEl);
      bsModal.show();

    
      form.reset();
      form.classList.remove('was-validated');
      console.log('Contact form submission (demo): name, email, message logged in console.');
    }, false);
  }
});

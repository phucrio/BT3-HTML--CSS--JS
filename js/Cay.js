document.addEventListener('DOMContentLoaded', function() {
    const toggles = document.querySelectorAll('.toggle');
    
    toggles.forEach(toggle => {
      toggle.addEventListener('click', function() {
        this.parentNode.classList.toggle('open');
        this.textContent = this.parentNode.classList.contains('open') ? '-' : '+';
      });
    });
  });
  
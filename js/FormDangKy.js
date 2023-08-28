document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');
    const acceptBtn = document.getElementById('acceptBtn');
    const inputs = form.querySelectorAll('input[type="text"], input[type="password"]');
    
    inputs.forEach(input => {
      input.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
          const nextInput = input.nextElementSibling;
          if (nextInput) {
            nextInput.focus();
          }
        }
      });
    });
    
    const fullnameInput = document.getElementById('fullname');
    const emailInput = document.getElementById('email');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    
    fullnameInput.addEventListener('blur', function() {
      this.value = normalizeName(this.value);
    });
    
    emailInput.addEventListener('blur', function() {
      if (!isValidEmail(this.value)) {
        displayErrorMessage(this, 'Email không hợp lệ');
      } else {
        removeErrorMessage(this);
      }
    });
    
    confirmPasswordInput.addEventListener('blur', function() {
      const passwordInput = document.getElementById('password');
      if (this.value !== passwordInput.value) {
        displayErrorMessage(this, 'Mật khẩu gõ lại không đúng');
      } else {
        removeErrorMessage(this);
      }
    });
    
    acceptBtn.addEventListener('click', function() {
      const requiredInputs = form.querySelectorAll('.required');
      let isValid = true;
      
      requiredInputs.forEach(input => {
        if (input.value.trim() === '') {
          displayErrorMessage(input, 'Vui lòng nhập thông tin');
          isValid = false;
        }
      });
      
      if (!isValid) {
        return;
      }
      
      // Xử lý khi chấp nhận đăng ký thành viên
      alert('Chấp nhận đăng ký thành viên!');
      form.reset();
    });
    
    // function normalizeName(name) {
    //   return name.replace(/\s+/g, ' ').trim().replace(/(\w)(\w*)/g, (g0, g1, g2) => g1.toUpperCase() + g2.toLowerCase());
    // }
    
    function isValidEmail(email) {
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      return emailPattern.test(email);
    }
    
    function displayErrorMessage(input, message) {
      const errorMessage = document.createElement('span');
      errorMessage.className = 'error-message';
      errorMessage.textContent = message;
      input.parentNode.appendChild(errorMessage);
    }
    
    function removeErrorMessage(input) {
      const errorMessage = input.parentNode.querySelector('.error-message');
      if (errorMessage) {
        errorMessage.remove();
      }
    }
  });
  
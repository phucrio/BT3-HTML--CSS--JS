document.addEventListener('DOMContentLoaded', function() {
    const character = document.getElementById('character');
    const jumpButton = document.getElementById('jumpButton');
    const stopButton = document.getElementById('stopButton');
    
    const frames = [
      'frame1.png',
      'frame2.png',
      'frame3.png',
      'frame4.png',
    ];
    
    let currentFrameIndex = 0;
    let isJumping = false;
    let animationInterval;
  
    function startAnimation() {
      animationInterval = setInterval(() => {
        character.style.backgroundImage = `url('${frames[currentFrameIndex]}')`;
        currentFrameIndex = (currentFrameIndex + 1) % frames.length;
      }, 300); // Tốc độ chuyển đổi khung hình (300ms trong ví dụ)
    }
  
    function stopAnimation() {
      clearInterval(animationInterval);
      character.style.backgroundImage = `url('${frames[0]}')`;
    }
    
    jumpButton.addEventListener('click', function() {
      if (!isJumping) {
        startAnimation();
        isJumping = true;
      }
    });
    
    stopButton.addEventListener('click', function() {
      stopAnimation();
      isJumping = false;
    });
  });
  
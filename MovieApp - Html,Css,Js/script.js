
      window.addEventListener('scroll', function() {
        var welcomeText = document.querySelector('.welcome-text');
        var scrollPosition = window.scrollY;
        var windowHeight = window.innerHeight;
        var elementPosition = welcomeText.getBoundingClientRect().top;
      
        if (elementPosition - windowHeight <= -100) {
          welcomeText.classList.add('hidden');
        } else {
          welcomeText.classList.remove('hidden');
        }
      });
document.addEventListener('DOMContentLoaded', () => {
    const apologyText = document.getElementById('apologyText');
    const imageSlide = document.getElementById('imageSlide');
    const backgroundMusic = document.getElementById('backgroundMusic');
    const playButton = document.getElementById('playButton');
  
    playButton.addEventListener('click', () => {
      backgroundMusic.play().then(() => {
        playButton.style.display = 'none';
      }).catch(error => {
        console.error('Error playing audio:', error);
      });
    });
  
    const slides = [
      { src: "IMG1.jpg", text: "I want to apologize for all the things I've said without thinking." },
      { src: "IMG2.jpg", text: "I spoke badly to you and hurt you deeply, and I'm truly sorry." },
      { src: "IMG3.jpg", text: "I've caused you pain and even tortured you emotionally." },
      { src: "IMG4.jpg", text: "I separated you from your friends, which was wrong of me." },
      { src: "IMG5.jpg", text: "I doubted you and said awful things; I regret that deeply." },
      { src: "IMG6.jpg", text: "I've been rude and haven't given you the time and attention you deserve." },
      { src: "IMG7.jpg", text: "I yelled and shouted at you, which I never should have done." },
      { src: "IMG8.jpg", text: "I made you feel like I was comparing you to my ex, which I didn't mean to do." },
      { src: "IMG9.jpg", text: "I interfered with your job and life, causing you unnecessary stress." },
      { src: "IMG10.jpg", text: "I've continuously hurt you, and for that, I am truly sorry." },
      { src: "IMG11.jpg", text: "I made you feel like you were cheating just because you have male colleagues." },
      { src: "IMG12.jpg", text: "I'm ready to apologize to you and your friends, even beg if I have to." },
      { src: "IMG13.jpg", text: "I'm not doing this to make you feel guilty or to show you your place." },
      { src: "IMG14.jpg", text: "I'm sorry for all the torture and pain I've caused." },
      { src: "IMG15.jpg", text: "Please forgive me. I promise to change and make things right." },
    ];
  
    let currentSlide = 0;
  
    function showSlide(index) {
      if (index < slides.length) {
        imageSlide.src = slides[index].src;
        imageSlide.classList.add('pulse-border'); // Add animated border class
        apologyText.textContent = slides[index].text;
        setTimeout(() => imageSlide.classList.remove('pulse-border'), 1000); // Remove class after animation
        currentSlide++;
        setTimeout(() => showSlide(currentSlide), 5000); // Change slide every 5 seconds
      }
    }
  
    showSlide(currentSlide);
  });
  
var typed = new Typed(".text",{
    strings: ["Frontend Developer", "youtuber", "web developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})

// When the page is fully loaded, animate the progress bars based on the data-skill attribute
document.addEventListener('DOMContentLoaded', () => {
    const skills = document.querySelectorAll('.progress-bar');
    
    skills.forEach(skill => {
        const progress = skill.querySelector('.progress');
        const skillLevel = skill.getAttribute('data-skill');
        
        // Animate the progress bar to the specified level
        setTimeout(() => {
            progress.style.width = `${skillLevel}%`;
        }, 500);
    });
});

document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission
  
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
  
    // Validate inputs (you can add more advanced validation if needed)
    if (name && email && message) {
      alert(`Thank you, ${name}! Your message has been sent.`);
      // You can replace this with an actual API or backend service to send the form data.
      this.reset();
    } else {
      alert("Please fill out all fields.");
    }
  });
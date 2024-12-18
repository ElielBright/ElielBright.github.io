document.getElementById('dark-mode-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});
document.addEventListener("DOMContentLoaded", function() {
    const skills = [
        { name: "Teamwork", level: "80%" },
        { name: "HTML", level: "90%" },
        { name: "CSS", level: "85%" },
        { name: "JavaScript", level: "75%" },
        { name: "Python", level: "70%" },
        { name: "Problem-solving", level: "95%" },
        { name: "Responsive Web Design", level: "80%" },
        { name: "Front-end Development", level: "85%" }
    ];

    // Create skill bars and set initial styles
    skills.forEach(skill => {
        const skillElement = document.querySelector(`.skill[data-skill="${skill.name}"]`);
        if (skillElement) {
            const skillBar = document.createElement('div');
            skillBar.className = 'skill-bar';
            skillBar.style.setProperty('--skill-level', skill.level);
            skillElement.appendChild(skillBar);
        }
    });

    // Skill bar animation function
    const animateSkillBars = () => {
        document.querySelectorAll('.skill-bar').forEach(bar => {
            bar.classList.remove('animate');
            // Trigger reflow to restart animation
            void bar.offsetWidth;
            bar.classList.add('animate');
        });
    };

    // Animate skill bars on page load
    animateSkillBars();
});
document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            } else {
                entry.target.classList.remove('animate');
            }
        });
    });

    // Observe elements with the class 'skill' for animation
    document.querySelectorAll('.skill').forEach(skill => {
        observer.observe(skill);
    });
});
  // Back to Top Button functionality
  const backToTopButton = document.getElementById('backToTop');

  window.onscroll = function() {
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
          backToTopButton.style.display = "block";
      } else {
          backToTopButton.style.display = "none";
      }
  };

  backToTopButton.addEventListener('click', function() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
  });
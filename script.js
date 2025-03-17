document.addEventListener("DOMContentLoaded", function() {
    

    // Skills Animation
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

    skills.forEach(skill => {
        const skillElement = document.querySelector(`.skill[data-skill="${skill.name}"]`);
        if (skillElement) {
            const skillBar = document.createElement('div');
            skillBar.className = 'skill-bar';
            skillBar.style.setProperty('--skill-level', skill.level);
            skillElement.appendChild(skillBar);
        }
    });

    const animateSkillBars = () => {
        document.querySelectorAll('.skill-bar').forEach(bar => {
            bar.classList.add('animate');
        });
    };

    animateSkillBars();

    // Smooth Scroll Navigation
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.setAttribute('tabindex', '-1'); // Improves accessibility
                targetSection.focus();
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Intersection Observer for Skill Animation
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            entry.target.classList.toggle('animate', entry.isIntersecting);
        });
    });

    document.querySelectorAll('.skill').forEach(skill => observer.observe(skill));

    // Back to Top Button
    const backToTopButton = document.getElementById('backToTop');

    window.addEventListener('scroll', () => {
        backToTopButton.style.display = (window.scrollY > 100) ? "block" : "none";
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

// Create scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true });

renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('particle-container').appendChild(renderer.domElement);

// Particle Geometry
const particleGeometry = new THREE.BufferGeometry();
const particleCount = 3000;
const positions = new Float32Array(particleCount * 3);

for (let i = 0; i < particleCount * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 10;
}

particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

// Particle Material
const particleMaterial = new THREE.PointsMaterial({
    color: 0x00aaff,
    size: 0.02,
    transparent: true,
    opacity: 0.8,
    blending: THREE.AdditiveBlending
});

const particles = new THREE.Points(particleGeometry, particleMaterial);
scene.add(particles);

// Camera position
camera.position.z = 5;

// Mouse Interaction
const mouse = { x: 0, y: 0 };
window.addEventListener('mousemove', (event) => {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
});

// Animation Loop
const animate = () => {
    requestAnimationFrame(animate);

    // Particle Rotation
    particles.rotation.x += 0.001;
    particles.rotation.y += 0.001;

    // Mouse Attraction Effect
    particles.position.x += (mouse.x * 0.05 - particles.position.x) * 0.05;
    particles.position.y += (mouse.y * 0.05 - particles.position.y) * 0.05;

    // Color Shift Effect
    const time = Date.now() * 0.0005;
    particleMaterial.color.setHSL((time % 1), 0.8, 0.6);

    renderer.render(scene, camera);
};

animate();

// Handle screen resizing
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});




document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.getElementById('custom-toggle-btn');
    const navMenu = document.getElementById('navbarNav');

    if (toggleBtn && navMenu) {
        toggleBtn.addEventListener('click', function () {
            toggleBtn.classList.toggle('active');
            navMenu.classList.toggle('show');
        });
    } else {
        console.error('Toggle button or navigation menu not found.');
    }
});



document.getElementById('backToTop').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

window.onscroll = function() {
    const backToTop = document.getElementById('backToTop');
    if (window.scrollY > 300) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }
};

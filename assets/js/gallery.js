// DOM Elements
const modal = document.getElementById('project-modal');
const modalContent = modal.querySelector('.modal-content');
const closeModal = modal.querySelector('.close-modal');
let currentProject = null;
let currentSlide = 0;

// Open Project Modal
function openProjectModal(card) {
    const projectIndex = Array.from(card.parentElement.children).indexOf(card);
    const project = projects[projectIndex];
    currentProject = project;
    currentSlide = 0;

    // Set modal content
    modalContent.querySelector('.modal-header h2').textContent = project.title;
    
    // Set up gallery
    const galleryHTML = `
        <div class="gallery-container">
            ${project.images.map((img, index) => `
                <div class="gallery-slide ${index === 0 ? 'active' : ''}">
                    <img src="assets/images/projects/${img}" alt="${project.title} - Image ${index + 1}">
                </div>
            `).join('')}
            <div class="gallery-nav">
                <button class="prev-slide" onclick="changeSlide(-1)">
                    <i class="fas fa-chevron-left"></i>
                </button>
                <button class="next-slide" onclick="changeSlide(1)">
                    <i class="fas fa-chevron-right"></i>
                </button>
            </div>
            <div class="gallery-dots">
                ${project.images.map((_, index) => `
                    <div class="gallery-dot ${index === 0 ? 'active' : ''}" 
                         onclick="goToSlide(${index})"></div>
                `).join('')}
            </div>
        </div>
    `;

    // Set up project details
    const detailsHTML = `
        <div class="project-description">${project.description}</div>
        <div class="tech-stack">
            ${project.tech.map(tech => `
                <span class="tech-tag">${tech}</span>
            `).join('')}
        </div>
        <div class="project-links">
            <a href="${project.github}" target="_blank" class="github-link">
                <i class="fab fa-github"></i> View on GitHub
            </a>
        </div>
    `;

    modalContent.querySelector('.project-gallery').innerHTML = galleryHTML;
    modalContent.querySelector('.project-details').innerHTML = detailsHTML;

    // Show modal with animation
    modal.classList.add('active');
    modalContent.classList.add('modal-animation');
    document.body.style.overflow = 'hidden';

    // Setup keyboard navigation
    document.addEventListener('keydown', handleKeyPress);
}

// Close Modal
function closeProjectModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
    currentProject = null;
    document.removeEventListener('keydown', handleKeyPress);
}

// Change Slide
function changeSlide(direction) {
    const slides = modal.querySelectorAll('.gallery-slide');
    const dots = modal.querySelectorAll('.gallery-dot');
    
    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');
    
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

// Go to Specific Slide
function goToSlide(index) {
    const slides = modal.querySelectorAll('.gallery-slide');
    const dots = modal.querySelectorAll('.gallery-dot');
    
    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');
    
    currentSlide = index;
    
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

// Handle Keyboard Navigation
function handleKeyPress(e) {
    switch(e.key) {
        case 'ArrowLeft':
            changeSlide(-1);
            break;
        case 'ArrowRight':
            changeSlide(1);
            break;
        case 'Escape':
            closeProjectModal();
            break;
    }
}

// Event Listeners
closeModal.addEventListener('click', closeProjectModal);

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeProjectModal();
    }
});

// Prevent modal content clicks from closing the modal
modalContent.addEventListener('click', (e) => {
    e.stopPropagation();
});

// Touch Events for Gallery
let touchStartX = 0;
let touchEndX = 0;

modal.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
});

modal.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const swipeDistance = touchEndX - touchStartX;
    
    if (Math.abs(swipeDistance) > swipeThreshold) {
        if (swipeDistance > 0) {
            changeSlide(-1); // Swipe right, go to previous
        } else {
            changeSlide(1);  // Swipe left, go to next
        }
    }
}

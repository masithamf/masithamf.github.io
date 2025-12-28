// Initialize AOS
AOS.init();

// Create stars for all sections
function createStars() {
    document.querySelectorAll('.stars').forEach(starsContainer => {
        for (let i = 0; i < 50; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            star.style.left = `${Math.random() * 100}%`;
            star.style.top = `${Math.random() * 100}%`;
            star.style.animationDelay = `${Math.random() * 3}s`;
            starsContainer.appendChild(star);
        }
    });
}

// Handle certificate card toggling
function toggleCertificate(card) {
    card.classList.toggle('active');
}

// Experience modal functionality
const experienceModal = document.getElementById('experience-modal');
const experienceTitle = document.getElementById('experience-title');
const experienceDescription = document.getElementById('experience-description');
const experienceGallery = document.querySelector('.experience-gallery');
const skillsGained = document.querySelector('.skills-gained');

const experiences = {
    1: {
        title: 'PT Nexwave',
        description: 'I conducted site surveys and inventory checks to ensure materials were ready for installation and executed on-site network module installations according to guidelines. I managed daily reporting by collecting field data, monitoring safety compliance, and maintaining attendance for employees. Additionally, I handled monthly ATP fund requests and maintained accurate clock-out records to support project reporting.',
        images: ['ptnw1.jpg', 'ptnw2.jpg', 'ptnw3.jpg'],
        skills: ['Network Module Installation', 'Report Management', 'Site Surveying']
    },
    2: {
        title: 'Bangkit Academy 2024',
        description: 'I have a strong foundation in machine learning, covering both fundamental and advanced concepts, with hands-on experience using TensorFlow for real-world applications. Skilled in data analysis, Python automation, and deploying models on the web, I enjoy building end-to-end AI solutions. One of my key projects was developing an AI-powered vehicle detection application for toll gates. I graduated with a final transcript score of 90.30, reflecting my commitment and strong academic performance.',
        images: ['bangkit1.jpg', 'bangkit2.jpg', 'bangkit3.jpg'],
        skills: ['Machine Learning & Deep Learning', 'Data Analysis', 'Python Programming']
    }
};

function showExperienceModal(id) {
    const experience = experiences[id];
    if (!experience) return;

    experienceTitle.textContent = experience.title;
    experienceDescription.textContent = experience.description;
    
    // Load images
    experienceGallery.innerHTML = experience.images
        .map(img => `<img src="assets/image/${img}" alt="Experience image">`)
        .join('');

    // Load skills
    skillsGained.innerHTML = experience.skills
        .map(skill => `<span class="skill-tag">${skill}</span>`)
        .join('');

    experienceModal.classList.add('active');
    document.body.classList.add('no-scroll');
}

function closeExperienceModal() {
    experienceModal.classList.remove('active');
    document.body.classList.remove('no-scroll');
}

// Project modal functionality
const projectModal = document.getElementById('project-modal');
const projects = {
    1: {
        title: 'Pruned SSD MobileNetV2 for Road Damage Detection System',
        description: 'Road maintenance is often hampered by the difficulty of detecting and classifying damages in real time, especially on resource-constrained edge devices. To solve this, I developed and optimized a real-time AI model for road damage detection, capable of identifying potholes, longitudinal cracks, and alligator cracks. I applied pruning as a model compression technique to significantly reduce model size, allowing faster inference on the Jetson AGX Orin. The optimized model delivered improved real-time performance, achieving lower inference time and higher FPS, making it more suitable for deployment in smart city and intelligent transportation systems.',
        images: ['prune3.jpg', 'prune2.jpg', 'prune4.png'],
        techStack: ['Computer Vision & Deep Learning', 'Model Optimization', 'Edge AI Deployment', 'PyTorch Framework', 'Performance Analysis'],
        github: 'https://github.com/masithamf/pruning-ssd-using-pytorch'
    },
    2: {
        title: 'Wheelify: AI Vehicle Detection App',
        description: 'Manual toll collection is often inefficient and time-consuming, leading to traffic congestion and higher operational costs. To address this, I developed an AI-powered vehicle detection and classification application as a prototype for an automated toll collection (ETC) system. I built the core model using TensorFlow with Transfer Learning on MobileNetV2 for efficient image feature extraction, trained on a custom dataset of 4,000 images. The final model achieved 81.05% accuracy, demonstrating the potential of AI to streamline toll operations and reduce human error.',
        images: ['caps1.jpg', 'caps2.jpg', 'caps3.jpg'],
        techStack: ['Machine Learning & Deep Learning', 'TensorFlow Framework', 'Data Preparation'],
        github: 'https://github.com/masithamf/wheelify-ml'
    },
    3: {
        title: 'Fiber to the Home (FTTH) Network Design',
        description: 'In this project, I worked on designing a Fiber-to-the-Home (FTTH) network, starting with the creation of a network layout using Google Earth to map the number of homes and required passive components. Careful planning was essential because FTTH design directly impacts cost efficiency, signal quality, and long-term scalability of the network. I conducted equipment requirement analysis and performed Power Budget calculations to ensure optimal signal distribution. Finally, I used OptiSystem software to design and simulate the network based on these parameters, successfully demonstrating a practical and efficient fiber optic solution ready for deployment.',
        images: ['ftth.jpg', 'ftth2.jpg', 'ftth3.jpg'],
        techStack: ['FTTH Network Planning', 'Power Budget Analysis', 'Optical Network Simulation', 'GIS Tools (Google Earth)'],
        github: 'https://github.com/masithamf/ftth-network-design'
    },
    4: {
        title: 'ESP32-based Room Temperature Sensor',
        description: 'For this project, I designed and developed a room temperature sensor system from scratch. Starting with PCB design in Eagle, I assembled and soldered all components onto the board before programming the system in C++ using Arduino IDE. I chose the ESP32 microcontroller because it offers higher processing power, built-in connectivity, and flexibility compared to simpler boards, making it well-suited for real-time sensor applications. The system used multi-color LEDs to indicate different temperature ranges, while an LCD provided detailed real-time readings. Specifically, when the temperature exceeded 27°C, the red LED would turn on, signaling a higher range, whereas when it dropped below 27°C, the blue LED would light up to indicate a cooler condition. This project demonstrated full-cycle development, from hardware design to embedded programming.',
        images: ['esp1.jpg', 'esp2.jpg', 'esp3.jpg'],
        techStack: ['PCB Design & Assembly', 'Embedded Systems Programming', 'Microcontroller Integration (ESP32)', 'Hardware–Software Integration'],
        github: 'https://github.com/masithamf/room-temperature-sensor'
    },
    5: {
        title: 'Op-Amp based Light Sensor using Light Dependent Resistor',
        description: 'This project was a light sensor system that I designed and assembled on a PCB to detect changes in ambient lighting. I used an operational amplifier (op-amp) as a comparator because of its reliability in distinguishing voltage levels, making it ideal for decision-making in sensor-based circuits. The system activates an LED indicator when low light is detected, providing a straightforward yet effective real-time visual output. This approach offered both simplicity and accuracy, while also showcasing practical hardware implementation on a custom PCB.',
        images: ['op1.jpg', 'op2.jpg', 'op3.jpg'],
        techStack: ['PCB Assembly', 'Sensor Integration', 'Analog Electronics', 'Hardware Debugging & Testing'],
        // github: 'https://github.com/your-username/project5'
    },
    6: {
        title: 'Website for Book Sales',
        description: 'Managing book sales manually often led to inefficiencies in tracking stock, prices, and sales reports. To address this, I developed a dual-access book sales website that enables cashiers to process purchases while allowing managers to monitor inventory, distributors, supply records, and sales reports in real time. Built with PHP and CSS for the interface and SQL for the database, the system streamlined daily transactions and reporting, making operations more efficient and organized.',
        images: ['web1.jpg', 'web2.jpg'],
        techStack: ['Web development', 'SQL', 'PhP and CSS for interface'],
        github: 'https://github.com/masithamf/book-sales-website'
    },
    7: {
        title: 'OCR Scanner Application',
        description: 'I noticed how time-consuming it can be to manually retype long texts from images or printed documents. To solve this, I developed an Android-based OCR application called “OCR Scanner”, which converts images into editable digital text. The app supports camera and gallery input, includes image cropping for precision, and leverages OCR libraries for accurate extraction. With its simple one-page UI, users can instantly convert text and copy it for further use, making the process fast, reliable, and error-free.',
        images: ['java1.jpg', 'java2.jpg', 'java3.jpg'],
        techStack: ['Java Programming', 'Android App Development'],
        github: 'https://github.com/masithamf/OCR-scanner-app'
    }
};

function showProjectModal(id) {
    const project = projects[id];
    if (!project) return;

    document.getElementById('project-title').textContent = project.title;
    document.getElementById('project-description').textContent = project.description;
    
    // Load project images
    document.querySelector('#project-modal .project-gallery').innerHTML = project.images
        .map(img => `<img src="assets/image/${img}" alt="Project image">`)
        .join('');

    // Load tech stack
    document.querySelector('#project-modal .tech-stack').innerHTML = project.techStack
        .map(tech => `<span class="tech-tag">${tech}</span>`)
        .join('');

    // Update GitHub link
    document.querySelector('#project-modal .github-link').href = project.github;

    projectModal.classList.add('active');
    document.body.classList.add('no-scroll');
    initializeLightbox();
}

function closeProjectModal() {
    projectModal.classList.remove('active');
    document.body.classList.remove('no-scroll');
}

// Initialize SimpleLightbox for project and experience galleries
function initializeLightbox() {
    // Project gallery lightbox
    document.querySelectorAll('#project-modal .project-gallery').forEach(gallery => {
        new SimpleLightbox(gallery.querySelectorAll('img'), {
            captionsData: 'alt',
            captionDelay: 250
        });
    });

    // Experience gallery lightbox
    document.querySelectorAll('.experience-gallery').forEach(gallery => {
        new SimpleLightbox(gallery.querySelectorAll('img'), {
            captionsData: 'alt',
            captionDelay: 250
        });
    });
}

// Close modals when clicking outside
window.onclick = function(event) {
    if (event.target === projectModal) {
        closeProjectModal();
    }
    if (event.target === experienceModal) {
        closeExperienceModal();
    }
};

// Close modal when clicking the close button
document.querySelectorAll('.close-modal').forEach(closeBtn => {
    closeBtn.onclick = function() {
        closeProjectModal();
        closeExperienceModal();
    };
});

// Initialize everything when the page loads
document.addEventListener('DOMContentLoaded', function() {
    createStars();
});

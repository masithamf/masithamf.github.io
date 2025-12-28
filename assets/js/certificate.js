function initCertificateZoom() {
    // Create zoom overlay if it doesn't exist
    if (!document.querySelector('.certificate-zoom-overlay')) {
        const overlay = document.createElement('div');
        overlay.className = 'certificate-zoom-overlay';
        overlay.innerHTML = `
            <div class="certificate-zoom-content">
                <img src="" alt="Zoomed Certificate">
                <button class="close-zoom">&times;</button>
            </div>
        `;
        document.body.appendChild(overlay);
    }

    const overlay = document.querySelector('.certificate-zoom-overlay');
    const zoomImage = overlay.querySelector('img');
    const closeButton = overlay.querySelector('.close-zoom');

    // Add click handlers to all certificate items
    document.querySelectorAll('.certificate-item').forEach(item => {
        item.addEventListener('click', function() {
            const imgSrc = this.querySelector('img').src;
            zoomImage.src = imgSrc;
            overlay.style.display = 'flex';
        });
    });

    // Close zoom view when clicking close button
    closeButton.addEventListener('click', () => {
        overlay.style.display = 'none';
    });

    // Close zoom view when clicking outside the image
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            overlay.style.display = 'none';
        }
    });

    // Close zoom view when pressing escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && overlay.style.display === 'flex') {
            overlay.style.display = 'none';
        }
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initCertificateZoom);


// Gallery data with ptarmigan images
const ptarmiganImages = [
    {
        src: 'ptarmigans/1.png',
        name: 'Mustard',
        title: 'Elegant Evening Cardigan',
        style: 'Classic Navy Wool Cardigan',
        description: 'This sophisticated ptarmigan sports a classic navy cardigan perfect for mountain soirées.',
        personality: 'Mustard is known for her refined taste and elegant demeanor, always ready for a sophisticated evening out.'
    },
    {
        src: 'ptarmigans/2.png',
        name: 'Hazel',
        title: 'Cozy Cable Knit',
        style: 'Intricate Cable-Knit Pattern',
        description: 'Featuring an intricate cable-knit pattern, this cardigan keeps our ptarmigan warm during chilly alpine mornings.',
        personality: 'Hazel loves the outdoors and values both comfort and craftsmanship in her knitwear choices.'
    },
    {
        src: 'ptarmigans/3.png',
        name: 'Sage',
        title: 'Rustic Autumn Style',
        style: 'Earth-Toned Seasonal Cardigan',
        description: 'A beautiful earth-toned cardigan that perfectly complements the changing seasons in the mountains.',
        personality: 'Sage has a deep connection to nature and prefers cardigans that reflect the changing seasons.'
    },
    {
        src: 'ptarmigans/4.png',
        name: 'Ruby',
        title: 'Winter Wonderland Wrap',
        style: 'Thick Woolen Winter Cardigan',
        description: 'This thick, woolen cardigan is ideal for the harshest winter conditions while maintaining peak fashion.',
        personality: 'Ruby thrives in winter weather and believes that warmth and style should never be compromised.'
    },
    {
        src: 'ptarmigans/5.png',
        name: 'Pearl',
        title: 'Spring Fresh Fashion',
        style: 'Light and Airy Spring Cardigan',
        description: 'A light and airy cardigan perfect for the mild temperatures of mountain spring weather.',
        personality: 'Pearl embodies the fresh spirit of spring and prefers lighter, breathable fabrics for the season.'
    },
    {
        src: 'ptarmigans/6.png',
        name: 'Indigo',
        title: 'Alpine Adventure Attire',
        style: 'Sporty Functional Cardigan',
        description: 'Built for the active ptarmigan, this sporty cardigan combines comfort with mountain functionality.',
        personality: 'Indigo is adventurous and athletic, always seeking cardigans that can keep up with an active lifestyle.'
    }
];

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    createGallery();
    setupSmoothScrolling();
    setupModal();
});

// Create gallery items
function createGallery() {
    const galleryGrid = document.getElementById('ptarmiganGrid');
    
    ptarmiganImages.forEach((image, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'ptarmigan-card';
        galleryItem.innerHTML = `
            <img src="${image.src}" alt="${image.title}" class="card-image" loading="lazy">
            <div class="card-content">
                <h4 class="card-title">${image.title}</h4>
                <p class="card-description">${image.description}</p>
            </div>
        `;
        
        // Add click event for modal
        galleryItem.addEventListener('click', () => openModal(image));
        
        galleryGrid.appendChild(galleryItem);
    });
}

// Smooth scrolling for navigation
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Scroll to gallery function
function scrollToGallery() {
    document.getElementById('gallery').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

// FAQ toggle functionality
function toggleFAQ(button) {
    const faqItem = button.parentElement;
    const isActive = faqItem.classList.contains('active');
    
    // Close all FAQ items
    document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // Open clicked item if it wasn't already active
    if (!isActive) {
        faqItem.classList.add('active');
    }
}

// Modal functionality
function setupModal() {
    // Use the existing modal in HTML
    const modal = document.getElementById('ptarmiganModal');
    const closeBtn = document.querySelector('.modal-close');
    const backdrop = document.querySelector('.modal-backdrop');
    
    // Close modal when clicking X or backdrop
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }
    if (backdrop) {
        backdrop.addEventListener('click', closeModal);
    }
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
}

function openModal(ptarmigan) {
    const modal = document.getElementById('ptarmiganModal');
    const modalImg = document.getElementById('modalImage');
    const modalName = document.getElementById('modalName');
    const modalStyle = document.getElementById('modalStyle');
    const modalDescription = document.getElementById('modalDescription');
    const modalPersonality = document.getElementById('modalPersonality');
    
    if (modal && modalImg) {
        modal.style.display = 'flex';
        modal.classList.add('active');
        modalImg.src = ptarmigan.src;
        modalImg.alt = ptarmigan.title;
        
        if (modalName) {
            modalName.textContent = `${ptarmigan.name} - ${ptarmigan.title}`;
        }
        if (modalStyle) {
            modalStyle.textContent = ptarmigan.style;
        }
        if (modalDescription) {
            modalDescription.textContent = ptarmigan.description;
        }
        if (modalPersonality) {
            modalPersonality.textContent = ptarmigan.personality;
        }
        
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }
}

function closeModal() {
    const modal = document.getElementById('ptarmiganModal');
    if (modal) {
        modal.style.display = 'none';
        modal.classList.remove('active');
        document.body.style.overflow = 'auto'; // Restore scrolling
    }
}

// Removed scroll effects to maintain consistent header styling across pages

// Add loading animation for images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
    });
});

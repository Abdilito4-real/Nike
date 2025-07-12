
        // Mobile Menu Toggle
        const menuToggle = document.querySelector('.menu-toggle');
        const nav = document.querySelector('nav ul');
        
        menuToggle.addEventListener('click', () => {
            nav.classList.toggle('active');
        });
        
        // Close mobile menu when clicking on a link
        const navLinks = document.querySelectorAll('nav ul li a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('active');
            });
        });
        
        // Product Modal
        function openModal(title, price, image, description) {
            const modal = document.getElementById('productModal');
            document.getElementById('modalProductTitle').textContent = title;
            document.getElementById('modalProductPrice').textContent = '$' + price;
            document.getElementById('modalProductImage').src = image;
            document.getElementById('modalProductDescription').textContent = description;
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
        
        function closeModal() {
            const modal = document.getElementById('productModal');
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
        
        // Close modal when clicking outside
        window.onclick = function(event) {
            const modal = document.getElementById('productModal');
            if (event.target == modal) {
                closeModal();
            }
        }
        
        // Size selection
        const sizeOptions = document.querySelectorAll('.size-option');
        sizeOptions.forEach(option => {
            option.addEventListener('click', () => {
                sizeOptions.forEach(opt => opt.classList.remove('selected'));
                option.classList.add('selected');
            });
        });



        // Add to script.js
// Theme Toggle
const themeToggle = document.createElement('div');
themeToggle.className = 'theme-toggle';
themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
document.body.appendChild(themeToggle);

// Check for saved theme preference
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.body.classList.add(currentTheme);
    updateThemeIcon();
}

// Theme toggle functionality
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    localStorage.setItem('theme', document.body.classList.contains('dark-theme') ? 'dark-theme' : '');
    updateThemeIcon();
});

function updateThemeIcon() {
    const icon = themeToggle.querySelector('i');
    if (document.body.classList.contains('dark-theme')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
}

// Add dark theme styles
const style = document.createElement('style');
style.textContent = `
    .dark-theme {
        background-color: #121212;
        color:rgb(168, 164, 164);
    }
    
    .dark-theme header {
        background-color: #1e1e1e;
        box-shadow: 0 2px 10px rgba(0,0,0,0.3);
    }
    
    .dark-theme nav ul li a {
        color: rgb(65, 166, 233);
    }
    
    .dark-theme .product-card {
        background-color: #1e1e1e;
        box-shadow: 0 5px 15px rgba(0,0,0,0.3);
    }
    
    .dark-theme .modal-content {
        background-color: #1e1e1e;
        color: #f5f5f5;
    }
    
    .dark-theme footer {
        background-color: #1e1e1e;
        color: #f5f5f5;
    }
    
    .theme-toggle {
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        background-color: #ff4757;
        color: white;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        box-shadow: 0 2px 10px rgba(0,0,0,0.2);
        z-index: 1000;
    }
`;
document.head.appendChild(style);
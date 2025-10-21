// Menu Data
const menuItems = [
    // Sushi Items
    {
        id: 1,
        name: "Salmon Nigiri",
        description: "Fresh Atlantic salmon (sake) hand-pressed over perfectly seasoned sushi rice. The salmon is carefully selected for its rich, buttery texture and vibrant orange color. Served with a touch of wasabi between the fish and rice, and garnished with a thin slice of pickled ginger. The rice is seasoned with premium rice vinegar, sugar, and sea salt for authentic flavor.",
        price: "৳180",
        category: "sushi",
        tags: ["Fresh", "Popular", "Raw", "Traditional"],
        ingredients: ["fish"],
        spiceLevel: 1,
        image: "images/photo-1632440722549-692fc6af969e.jpg"
    },
    {
        id: 2,
        name: "Tuna Nigiri",
        description: "Premium bluefin tuna (maguro) sourced from sustainable fisheries, hand-pressed over seasoned sushi rice. The tuna features a deep red color and firm, meaty texture. Includes a small amount of wasabi for heat and pickled ginger for palate cleansing. The rice is prepared with traditional Japanese rice vinegar, mirin, and sea salt for authentic taste.",
        price: "৳200",
        category: "sushi",
        tags: ["Fresh", "Premium", "Raw", "Traditional", "Sustainable"],
        ingredients: ["fish"],
        spiceLevel: 1,
        image: "images/photo-1629684782790-385ed5adb497.jpg"
    },
    {
        id: 3,
        name: "California Roll",
        description: "Inside-out roll featuring imitation crab meat (kani), ripe avocado, and fresh cucumber wrapped in premium sushi rice and toasted nori seaweed. The roll is coated with tobiko (flying fish roe) for added texture and visual appeal. Served with soy sauce, wasabi, and pickled ginger. The rice is seasoned with rice vinegar, sugar, and salt for perfect balance.",
        price: "৳250",
        category: "sushi",
        tags: ["Vegetarian-friendly", "Popular", "Creamy", "Mild"],
        ingredients: ["crab"],
        spiceLevel: 1,
        image: "images/photo-1617196034796-73dfa7b1fd56.jpg"
    },
    {
        id: 4,
        name: "Dragon Roll",
        description: "Premium roll featuring grilled eel (unagi) brushed with sweet teriyaki sauce, fresh avocado, and cucumber wrapped in sushi rice and nori. Topped with thinly sliced avocado arranged to resemble dragon scales, drizzled with spicy mayo (sriracha and Japanese mayonnaise) and unagi sauce. Garnished with tobiko and green onions for color and texture.",
        price: "৳320",
        category: "sushi",
        tags: ["Spicy", "Premium", "Grilled", "Rich"],
        ingredients: ["eel"],
        spiceLevel: 2,
        image: "images/photo-1614563637806-1d0e645e0940.jpg"
    },
    {
        id: 5,
        name: "Spicy Tuna Roll",
        description: "Fresh tuna mixed with spicy mayo (sriracha, Japanese mayonnaise, and sesame oil), fresh cucumber, and green onions wrapped in sushi rice and nori. The spicy mixture includes finely chopped tuna, chili sauce, and a hint of lime juice for brightness. Served with soy sauce and additional wasabi for extra heat if desired.",
        price: "৳280",
        category: "sushi",
        tags: ["Spicy", "Popular", "Raw", "Bold"],
        ingredients: ["fish"],
        spiceLevel: 3,
        image: "images/photo-1611762687807-7cdd09aef422.jpg"
    },
    {
        id: 6,
        name: "Philadelphia Roll",
        description: "Creamy roll featuring smoked salmon (lox), Philadelphia cream cheese, and fresh cucumber wrapped in sushi rice and nori. The cream cheese is softened and spread evenly for smooth texture. Topped with sesame seeds and served with soy sauce. A fusion of Japanese and American flavors, perfect for those who enjoy rich, creamy textures.",
        price: "৳300",
        category: "sushi",
        tags: ["Creamy", "Popular", "Smoked", "Fusion"],
        ingredients: ["fish"],
        spiceLevel: 1,
        image: "images/photo-1611518040286-9af8ba97ab46.jpg"
    },
    {
        id: 7,
        name: "Rainbow Roll",
        description: "California roll base (crab, avocado, cucumber) topped with an assortment of fresh fish including salmon, tuna, yellowtail (hamachi), and white fish, arranged in a colorful pattern. Each fish slice is carefully placed to create a beautiful rainbow effect. Served with soy sauce, wasabi, and pickled ginger. A feast for both the eyes and palate.",
        price: "৳350",
        category: "sushi",
        tags: ["Colorful", "Premium", "Raw", "Variety"],
        ingredients: ["fish", "crab"],
        spiceLevel: 1,
        image: "images/photo-1611143669185-af224c5e3252.jpg"
    },
    {
        id: 8,
        name: "Tempura Roll",
        description: "Crispy shrimp tempura (battered and deep-fried shrimp) with fresh avocado and cucumber wrapped in sushi rice and nori. The tempura batter is made with cold water, flour, and egg for maximum crispiness. Drizzled with spicy mayo and unagi sauce, topped with tempura flakes for extra crunch. Served with soy sauce and wasabi.",
        price: "৳320",
        category: "sushi",
        tags: ["Crispy", "Popular", "Fried", "Crunchy"],
        ingredients: ["shrimp"],
        spiceLevel: 2,
        image: "images/photo-1608060146923-7b8ab13e22bb.jpg"
    },

    // Ramen Items
    {
        id: 9,
        name: "Tonkotsu Ramen",
        description: "Rich and creamy vegetable-based broth simmered for 12+ hours with mushrooms, kombu seaweed, and collagen-rich ingredients. Served with tofu, soft-boiled egg (ajitama), bamboo shoots (menma), green onions, nori, and corn. The broth is seasoned with soy sauce, mirin, and garlic. Topped with black garlic oil and served with fresh ramen noodles.",
        price: "৳450",
        category: "ramen",
        tags: ["Signature", "Popular", "Rich", "Vegetarian", "Creamy"],
        ingredients: ["vegetables"],
        spiceLevel: 1,
        image: "images/photo-1602273660127-a0000560a4c1.jpg"
    },
    {
        id: 10,
        name: "Miso Ramen",
        description: "Savory miso-based broth made with red and white miso paste and chicken stock. Features tofu, soft-boiled egg, corn, bean sprouts, green onions, and nori. The broth includes garlic, ginger, and sesame oil for depth. Served with medium-thick ramen noodles and garnished with sesame seeds and chili oil for added flavor.",
        price: "৳420",
        category: "ramen",
        tags: ["Traditional", "Vegetarian-friendly", "Savory", "Mild"],
        ingredients: ["chicken"],
        spiceLevel: 1,
        image: "images/photo-1592466741848-20145fe5d6d7.jpg"
    },
    {
        id: 11,
        name: "Shoyu Ramen",
        description: "Clear soy sauce-based broth made with chicken stock, seasoned with soy sauce, mirin, and sake. Served with tofu, soft-boiled egg, bamboo shoots, green onions, nori, and fish cake (narutomaki). The broth is light yet flavorful, perfect for those who prefer a less heavy option. Noodles are medium-thin and springy.",
        price: "৳400",
        category: "ramen",
        tags: ["Classic", "Light", "Clear", "Traditional"],
        ingredients: ["chicken"],
        spiceLevel: 1,
        image: "images/photo-1569912815867-5580004c13a2.jpg"
    },
    {
        id: 12,
        name: "Spicy Ramen",
        description: "Bold and fiery broth made with chicken stock, chili oil, garlic, ginger, and ground chicken. Features tofu, soft-boiled egg, bean sprouts, green onions, and corn. The spiciness comes from a blend of chili peppers, garlic, and Sichuan peppercorns. Topped with fresh cilantro and served with thick ramen noodles that hold the spicy broth well.",
        price: "৳480",
        category: "ramen",
        tags: ["Spicy", "Bold", "Fiery", "Hot"],
        ingredients: ["chicken"],
        spiceLevel: 4,
        image: "images/photo-1569050467447-ce54b3bbc37d.jpg"
    },
    {
        id: 13,
        name: "Seafood Ramen",
        description: "Rich fish-based broth made with bonito flakes, kombu seaweed, and fish bones. Features fresh shrimp, mussels, fish cake, soft-boiled egg, green onions, and nori. The broth is enhanced with sake, mirin, and soy sauce. Served with thin ramen noodles and garnished with lemon zest and fresh herbs. A lighter alternative to meat-based broths.",
        price: "৳520",
        category: "ramen",
        tags: ["Seafood", "Premium", "Light", "Fresh"],
        ingredients: ["fish", "shrimp"],
        spiceLevel: 1,
        image: "images/photo-1519984388953-d2406bc725e1.jpg"
    },
    {
        id: 14,
        name: "Vegetarian Ramen",
        description: "Hearty vegetable broth made with shiitake mushrooms, kombu seaweed, and seasonal vegetables. Features tofu, shiitake mushrooms, corn, bean sprouts, green onions, and nori. The broth is seasoned with soy sauce, mirin, and sesame oil. Served with medium-thick ramen noodles and garnished with sesame seeds and chili oil. 100% plant-based and full of umami flavor.",
        price: "৳380",
        category: "ramen",
        tags: ["Vegetarian", "Healthy", "Plant-based", "Umami"],
        ingredients: ["vegetables"],
        spiceLevel: 1,
        image: "images/photo-1519077204685-ed90d0cc05b7.jpg"
    },

    // Appetizers
    {
        id: 15,
        name: "Edamame",
        description: "Fresh young soybeans steamed with sea salt and served in their pods. The beans are bright green and tender, with a slightly sweet and nutty flavor. Served warm with additional sea salt for dipping. A healthy and traditional Japanese appetizer rich in protein, fiber, and essential nutrients. Perfect for sharing and pairs well with sake or beer.",
        price: "৳120",
        category: "appetizers",
        tags: ["Healthy", "Vegetarian", "Traditional", "Protein-rich"],
        ingredients: ["vegetables"],
        spiceLevel: 1,
        image: "images/photo-1496114212242-bac8bd9de53d.jpg"
    },
    {
        id: 16,
        name: "Gyoza",
        description: "Pan-fried Japanese dumplings filled with ground chicken, cabbage, green onions, garlic, ginger, and sesame oil. The dumpling wrappers are made from wheat flour and water, creating a thin, delicate skin. Served with a dipping sauce made from soy sauce, rice vinegar, and chili oil. The dumplings are crispy on the bottom and steamed on top for perfect texture.",
        price: "৳180",
        category: "appetizers",
        tags: ["Crispy", "Popular", "Pan-fried", "Savory"],
        ingredients: ["chicken"],
        spiceLevel: 2,
        image: "images/photo-1753215102947-94ab36ac82c6.jpg"
    },

    // Drinks
    {
        id: 17,
        name: "Green Tea",
        description: "Premium Japanese sencha green tea, carefully selected from the finest tea gardens. The tea leaves are steamed and rolled to preserve their natural flavor and nutrients. Rich in antioxidants and catechins, with a fresh, grassy aroma and smooth, slightly astringent taste. Served hot in traditional Japanese tea cups. Perfect for cleansing the palate between courses.",
        price: "৳60",
        category: "drinks",
        tags: ["Traditional", "Healthy", "Antioxidant", "Hot"],
        ingredients: ["tea"],
        spiceLevel: 1,
        image: "images/photo-1632440722549-692fc6af969e.jpg"
    },
    {
        id: 18,
        name: "Sake",
        description: "Premium Junmai sake made from polished rice, water, koji mold, and yeast. This traditional Japanese rice wine features a smooth, clean taste with subtle fruity notes and a gentle finish. Served chilled in traditional sake cups. The sake is made using traditional brewing methods that have been perfected over centuries. Perfect accompaniment to sushi and sashimi.",
        price: "৳350",
        category: "drinks",
        tags: ["Alcoholic", "Premium", "Traditional", "Fermented"],
        ingredients: ["rice"],
        spiceLevel: 1,
        image: "images/photo-1629684782790-385ed5adb497.jpg"
    }
];

// DOM Elements
const menuGrid = document.getElementById('menuGrid');
const filterButtons = document.querySelectorAll('.filter-btn');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    displayMenuItems('all');
    createLucideIcons();
    setupEventListeners();
    setupSmoothScrolling();
    setupNavbarScroll();
});

// Function to create Lucide icons
function createLucideIcons() {
    if (window.lucide) {
        lucide.createIcons();
    }
}

// Display menu items based on category
function displayMenuItems(category) {
    const filteredItems = category === 'all' 
        ? menuItems 
        : menuItems.filter(item => item.category === category);

    menuGrid.innerHTML = '';

    filteredItems.forEach(item => {
        const menuItem = createMenuItem(item);
        menuGrid.appendChild(menuItem);
    });
    
    // Create Lucide icons after displaying items
    createLucideIcons();
}

// Create menu item element
function createMenuItem(item) {
    const menuItem = document.createElement('div');
    menuItem.className = 'menu-item';
    menuItem.style.animation = 'slideInUp 0.6s ease';

    // Create ingredient icons
    const ingredientIcons = item.ingredients ? item.ingredients.map(ingredient => {
        const iconName = getIngredientIcon(ingredient);
        return `<span class="ingredient-icon" data-ingredient="${ingredient}">
            <i data-lucide="${iconName}"></i>
            <span class="ingredient-label">${ingredient}</span>
        </span>`;
    }).join('') : '';

    menuItem.innerHTML = `
        <div class="menu-item-image">
            <img src="${item.image}" alt="${item.name}" class="menu-item-img">
        </div>
        <div class="menu-item-content">
            <h3 class="menu-item-title">${item.name}</h3>
            <p class="menu-item-description">${item.description}</p>
            <div class="menu-item-bottom">
                <div class="menu-item-ingredients">
                    ${ingredientIcons}
                </div>
                <div class="menu-item-price">${item.price}</div>
            </div>
        </div>
    `;

    return menuItem;
}

// Function to get appropriate Lucide icon for each ingredient
function getIngredientIcon(ingredient) {
    const iconMap = {
        'fish': 'fish',
        'chicken': 'egg',
        'beef': 'beef',
        'shrimp': 'shrimp',
        'crab': 'fish',
        'eel': 'fish',
        'mussels': 'fish',
        'octopus': 'fish',
        'vegetables': 'carrot',
        'tea': 'coffee',
        'rice': 'wheat'
    };
    return iconMap[ingredient] || 'utensils';
}

// Setup event listeners
function setupEventListeners() {
    // Filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            
            const category = button.getAttribute('data-category');
            displayMenuItems(category);
        });
    });

    // Mobile menu toggle
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Contact form submission
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }
}

// Handle contact form submission
function handleContactForm(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const name = formData.get('name') || e.target.querySelector('input[type="text"]').value;
    const email = formData.get('email') || e.target.querySelector('input[type="email"]').value;
    const message = formData.get('message') || e.target.querySelector('textarea').value;

    // Show success message
    showNotification('Thank you for your message! We\'ll get back to you soon.', 'success');
    
    // Reset form
    e.target.reset();
}

// Show notification
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    // Style the notification
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 8px;
        color: white;
        font-weight: 500;
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        background: ${type === 'success' ? '#27ae60' : '#3498db'};
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Setup smooth scrolling for navigation links
function setupSmoothScrolling() {
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}



// Setup navbar scroll effect
function setupNavbarScroll() {
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const navbar = document.querySelector('.navbar');
        
        // Add shadow when scrolled
        if (scrollTop > 50) {
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.boxShadow = 'none';
        }
        
        // Hide/show navbar on scroll (optional)
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .menu-item {
        animation: slideInUp 0.6s ease;
    }
    
    .hamburger.active .bar:nth-child(2) {
        opacity: 0;
    }
    
    .hamburger.active .bar:nth-child(1) {
        transform: translateY(8px) rotate(45deg);
    }
    
    .hamburger.active .bar:nth-child(3) {
        transform: translateY(-8px) rotate(-45deg);
    }
    
    .navbar {
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
`;
document.head.appendChild(style);

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Add intersection observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.menu-item, .about-text, .contact-item');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}); 
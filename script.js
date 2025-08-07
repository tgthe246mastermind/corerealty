// Property Search Component
function propertySearch() {
    return {
        searchType: 'buy',
        searchQuery: '',
        propertyType: '',
        priceRange: '',
        bedrooms: '',
        
        searchProperties() {
            console.log('Searching properties:', {
                type: this.searchType,
                query: this.searchQuery,
                propertyType: this.propertyType,
                priceRange: this.priceRange,
                bedrooms: this.bedrooms
            });
            
            // Simulate search - in real app, this would make API call
            alert('Search functionality will be connected to property database');
        }
    }
}

// Featured Properties Component
function featuredProperties() {
    return {
        properties: [
            {
                id: 1,
                title: "Luxury Beachfront Villa",
                price: "$2,850,000",
                location: "St. James, Barbados",
                bedrooms: 5,
                bathrooms: 4,
                sqft: "4,200",
                status: "For Sale",
                image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=400&h=300&fit=crop",
                agent: {
                    name: "Sarah Johnson",
                    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b647?w=50&h=50&fit=crop&crop=face"
                }
            },
            {
                id: 2,
                title: "Modern Penthouse Apartment",
                price: "$1,250,000",
                location: "Christ Church, Barbados",
                bedrooms: 3,
                bathrooms: 3,
                sqft: "2,800",
                status: "For Sale",
                image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop",
                agent: {
                    name: "Michael Brown",
                    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face"
                }
            },
            {
                id: 3,
                title: "Charming Coral Stone House",
                price: "$875,000",
                location: "St. Philip, Barbados",
                bedrooms: 4,
                bathrooms: 3,
                sqft: "3,100",
                status: "For Sale",
                image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=300&fit=crop",
                agent: {
                    name: "Emma Wilson",
                    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face"
                }
            },
            {
                id: 4,
                title: "Contemporary Townhouse",
                price: "$650,000",
                location: "St. Michael, Barbados",
                bedrooms: 3,
                bathrooms: 2,
                sqft: "2,400",
                status: "For Sale",
                image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400&h=300&fit=crop",
                agent: {
                    name: "James Davis",
                    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face"
                }
            },
            {
                id: 5,
                title: "Oceanview Investment Property",
                price: "$1,450,000",
                location: "St. James, Barbados",
                bedrooms: 4,
                bathrooms: 4,
                sqft: "3,600",
                status: "For Sale",
                image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=400&h=300&fit=crop",
                agent: {
                    name: "Lisa Martinez",
                    avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=50&h=50&fit=crop&crop=face"
                }
            },
            {
                id: 6,
                title: "Historic Plantation House",
                price: "$3,200,000",
                location: "St. George, Barbados",
                bedrooms: 6,
                bathrooms: 5,
                sqft: "5,400",
                status: "For Sale",
                image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=400&h=300&fit=crop",
                agent: {
                    name: "Robert Taylor",
                    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=50&h=50&fit=crop&crop=face"
                }
            }
        ],
        
        viewProperty(id) {
            console.log('Viewing property:', id);
            alert('Property details page will be implemented');
        },
        
        toggleFavorite(id) {
            console.log('Toggle favorite for property:', id);
            // In real app, this would update user's favorites
        }
    }
}

// Agents Component
function agentsData() {
    return {
        agents: [
            {
                id: 1,
                name: "Sarah Johnson",
                title: "Senior Real Estate Agent",
                photo: "https://images.unsplash.com/photo-1494790108755-2616b612b647?w=200&h=200&fit=crop&crop=face",
                rating: 5,
                reviews: 87,
                listings: 45,
                sold: 156,
                online: true,
                specialties: ["Luxury Homes", "Beachfront", "Investment"]
            },
            {
                id: 2,
                name: "Michael Brown",
                title: "Property Investment Specialist",
                photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
                rating: 5,
                reviews: 62,
                listings: 32,
                sold: 94,
                online: true,
                specialties: ["Investment", "Commercial", "Rental"]
            },
            {
                id: 3,
                name: "Emma Wilson",
                title: "Residential Sales Agent",
                photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
                rating: 4,
                reviews: 71,
                listings: 28,
                sold: 118,
                online: false,
                specialties: ["First Time Buyers", "Family Homes", "Condos"]
            },
            {
                id: 4,
                name: "James Davis",
                title: "Luxury Property Consultant",
                photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
                rating: 5,
                reviews: 103,
                listings: 18,
                sold: 67,
                online: true,
                specialties: ["Luxury", "Villas", "High-End"]
            }
        ],
        
        contactAgent(id) {
            const agent = this.agents.find(a => a.id === id);
            console.log('Contacting agent:', agent.name);
            alert(`Contact form for ${agent.name} will be implemented`);
        },
        
        viewAgentProfile(id) {
            const agent = this.agents.find(a => a.id === id);
            console.log('Viewing profile:', agent.name);
            alert(`Profile page for ${agent.name} will be implemented`);
        }
    }
}

// Contact Form Component
function contactForm() {
    return {
        form: {
            name: '',
            email: '',
            phone: '',
            interest: '',
            message: ''
        },
        submitting: false,
        
        async submitForm() {
            this.submitting = true;
            
            // Simulate form submission
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            console.log('Form submitted:', this.form);
            alert('Thank you for your message! We will contact you soon.');
            
            // Reset form
            this.form = {
                name: '',
                email: '',
                phone: '',
                interest: '',
                message: ''
            };
            
            this.submitting = false;
        }
    }
}

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 70; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
        
        lastScrollTop = scrollTop;
    });
    
    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.property-card, .agent-card, .service-card');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Mortgage Calculator (can be expanded)
function mortgageCalculator() {
    return {
        price: '',
        downPayment: '',
        interestRate: '',
        loanTerm: '',
        monthlyPayment: 0,
        
        calculate() {
            const principal = this.price - this.downPayment;
            const monthlyRate = (this.interestRate / 100) / 12;
            const numberOfPayments = this.loanTerm * 12;
            
            if (principal > 0 && monthlyRate > 0 && numberOfPayments > 0) {
                this.monthlyPayment = principal * 
                    (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / 
                    (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
            }
        }
    }
}

// Property filters and search functionality
function propertyFilters() {
    return {
        filters: {
            location: '',
            minPrice: '',
            maxPrice: '',
            bedrooms: '',
            bathrooms: '',
            propertyType: '',
            features: []
        },
        
        applyFilters() {
            console.log('Applying filters:', this.filters);
            // In real app, this would filter the properties array
        },
        
        clearFilters() {
            this.filters = {
                location: '',
                minPrice: '',
                maxPrice: '',
                bedrooms: '',
                bathrooms: '',
                propertyType: '',
                features: []
            };
        }
    }
}


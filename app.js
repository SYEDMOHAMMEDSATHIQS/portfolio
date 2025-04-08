 // Mobile Menu Toggle
 const mobileMenu = document.querySelector('.mobile-menu');
 const navLinks = document.querySelector('.nav-links');
 
 mobileMenu.addEventListener('click', () => {
     mobileMenu.classList.toggle('active');
     navLinks.classList.toggle('active');
 });
 
 // Close mobile menu when clicking a link
 document.querySelectorAll('.nav-links a').forEach(link => {
     link.addEventListener('click', () => {
         mobileMenu.classList.remove('active');
         navLinks.classList.remove('active');
     });
 });
 
 // Navbar scroll effect
 window.addEventListener('scroll', () => {
     const navbar = document.querySelector('.navbar');
     const backToTop = document.querySelector('.back-to-top');
     
     if (window.scrollY > 100) {
         navbar.classList.add('scrolled');
         backToTop.classList.add('active');
     } else {
         navbar.classList.remove('scrolled');
         backToTop.classList.remove('active');
     }
 });
 
 // Smooth scrolling for anchor links
 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
     anchor.addEventListener('click', function(e) {
         e.preventDefault();
         
         const targetId = this.getAttribute('href');
         if (targetId === '#') return;
         
         const targetElement = document.querySelector(targetId);
         if (targetElement) {
             window.scrollTo({
                 top: targetElement.offsetTop - 80,
                 behavior: 'smooth'
             });
         }
     });
 });
 
 // Back to top button
 document.querySelector('.back-to-top').addEventListener('click', () => {
     window.scrollTo({
         top: 0,
         behavior: 'smooth'
     });
 });
 
 // Project modals
 const viewProjectBtns = document.querySelectorAll('.view-project-btn');
 const closeModalBtns = document.querySelectorAll('.close-modal');
 const modals = document.querySelectorAll('.project-modal');
 
 viewProjectBtns.forEach(btn => {
     btn.addEventListener('click', () => {
         const projectId = btn.getAttribute('data-project');
         const modal = document.getElementById(`project-modal-${projectId}`);
         if (modal) {
             modal.style.display = 'block';
             document.body.style.overflow = 'hidden';
         }
     });
 });
 
 closeModalBtns.forEach(btn => {
     btn.addEventListener('click', () => {
         modals.forEach(modal => {
             modal.style.display = 'none';
             document.body.style.overflow = 'auto';
         });
     });
 });
 
 // Close modal when clicking outside
 window.addEventListener('click', (e) => {
     modals.forEach(modal => {
         if (e.target === modal) {
             modal.style.display = 'none';
             document.body.style.overflow = 'auto';
         }
     });
 });
 
 // Form submission
 const contactForm = document.getElementById('contactForm');
 const formMessage = document.getElementById('formMessage');
 
 contactForm.addEventListener('submit', (e) => {
     e.preventDefault();
     
     // Simulate form submission
     formMessage.textContent = 'Thank you for your message! I will get back to you soon.';
     formMessage.classList.add('success');
     formMessage.style.display = 'block';
     
     // Reset form
     contactForm.reset();
     
     // Hide message after 5 seconds
     setTimeout(() => {
         formMessage.style.display = 'none';
     }, 5000);
 });
 
 // Set current year in footer
 document.getElementById('year').textContent = new Date().getFullYear();
 
 // Animation on scroll
 const animateOnScroll = () => {
     const elements = document.querySelectorAll('.animate-fade-in');
     
     elements.forEach(element => {
         const elementPosition = element.getBoundingClientRect().top;
         const screenPosition = window.innerHeight / 1.2;
         
         if (elementPosition < screenPosition) {
             element.style.opacity = '1';
             element.style.transform = 'translateY(0)';
         }
     });
 };
 
 window.addEventListener('scroll', animateOnScroll);
 window.addEventListener('load', animateOnScroll);

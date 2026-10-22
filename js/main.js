/**
 * TechFix Mw – Main JavaScript
 * Handles navigation, form validation, portfolio filters, and UX enhancements
 */

document.addEventListener('DOMContentLoaded', function () {
  // ---------- Sticky navbar shadow on scroll ----------
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 40) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }

  // ---------- Active nav link based on current page ----------
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(function (link) {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // ---------- Portfolio filter ----------
  const filterBtns = document.querySelectorAll('.filter-btn');
  const portfolioItems = document.querySelectorAll('[data-category]');

  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      // Toggle active state
      filterBtns.forEach(function (b) {
        b.classList.remove('active');
      });
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      portfolioItems.forEach(function (item) {
        if (filter === 'all' || item.getAttribute('data-category') === filter) {
          item.style.display = '';
          item.classList.remove('d-none');
        } else {
          item.style.display = 'none';
          item.classList.add('d-none');
        }
      });
    });
  });

  // ---------- Contact form validation & handling ----------
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      // Clear previous errors
      contactForm.querySelectorAll('.is-invalid').forEach(function (el) {
        el.classList.remove('is-invalid');
      });
      const existingAlert = contactForm.querySelector('.form-alert');
      if (existingAlert) existingAlert.remove();

      let isValid = true;
      const name = contactForm.querySelector('#fullName');
      const email = contactForm.querySelector('#email');
      const phone = contactForm.querySelector('#phone');
      const service = contactForm.querySelector('#service');
      const subject = contactForm.querySelector('#subject');
      const message = contactForm.querySelector('#message');

      // Simple validation
      if (!name.value.trim()) {
        name.classList.add('is-invalid');
        isValid = false;
      }
      if (!email.value.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        email.classList.add('is-invalid');
        isValid = false;
      }
      if (!phone.value.trim()) {
        phone.classList.add('is-invalid');
        isValid = false;
      }
      if (!service.value) {
        service.classList.add('is-invalid');
        isValid = false;
      }
      if (!subject.value.trim()) {
        subject.classList.add('is-invalid');
        isValid = false;
      }
      if (!message.value.trim() || message.value.trim().length < 10) {
        message.classList.add('is-invalid');
        isValid = false;
      }

      if (!isValid) {
        showFormAlert(contactForm, 'Please fill in all required fields correctly.', 'danger');
        return;
      }

      // Build WhatsApp message as the primary contact method for static hosting
      const selectedService = service.options[service.selectedIndex].text;
      const whatsappText = encodeURIComponent(
        'Hello TechFix Mw,\n\n' +
        'Name: ' + name.value.trim() + '\n' +
        'Email: ' + email.value.trim() + '\n' +
        'Phone: ' + phone.value.trim() + '\n' +
        'Service: ' + selectedService + '\n' +
        'Subject: ' + subject.value.trim() + '\n\n' +
        'Message:\n' + message.value.trim()
      );

      // Open WhatsApp with pre-filled inquiry
      window.open('https://wa.me/265883924080?text=' + whatsappText, '_blank');

      showFormAlert(
        contactForm,
        'Thank you! Your inquiry has been prepared. WhatsApp will open so you can send the message. We will respond as soon as possible.',
        'success'
      );

      // Optional: also try mailto as fallback
      // window.location.href = 'mailto:techfixmw@gmail.com?subject=' + encodeURIComponent(subject.value) + '&body=' + whatsappText;

      contactForm.reset();
    });
  }

  // Pre-fill service from URL parameter (e.g. services.html?service=web-design)
  const urlParams = new URLSearchParams(window.location.search);
  const prefillService = urlParams.get('service');
  if (prefillService && contactForm) {
    const serviceSelect = contactForm.querySelector('#service');
    if (serviceSelect) {
      serviceSelect.value = prefillService;
    }
  }

  // ---------- Helper: show form alert ----------
  function showFormAlert(form, text, type) {
    const alert = document.createElement('div');
    alert.className = 'alert alert-' + type + ' form-alert mt-3';
    alert.setAttribute('role', 'alert');
    alert.textContent = text;
    form.appendChild(alert);

    if (type === 'success') {
      setTimeout(function () {
        alert.remove();
      }, 8000);
    }
  }

  // ---------- Smooth scroll for same-page anchors ----------
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId.length > 1) {
        const target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });

  // ---------- Copyright year ----------
  const yearEl = document.getElementById('currentYear');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});

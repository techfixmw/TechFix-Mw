# TechFix Mw – Professional Website

Complete static website for **TechFix Mw**, a technology and repair services company based in Chigumula, Blantyre, Malawi.

**Website Title:** TechFix Mw | Technology, Web Development & Repair Services  
**Manager:** Wilson C Gulumba  
**Email:** techfixmw@gmail.com  
**Phone / WhatsApp:** +265 883 924 080 / +265 996 942 109  
**Location:** Chigumula, Blantyre, Malawi  
**Developer Credit:** Developed by TechFix Mw

---

## Tech Stack

- HTML5 (semantic, accessible)
- CSS3 (custom red-themed design)
- Bootstrap 5.3 (responsive layout)
- Bootstrap Icons
- Vanilla JavaScript (navigation, form validation, portfolio filters)

No backend required. Suitable for **GitHub Pages**, Netlify, Vercel, or any static host.

---

## Project Structure

```
techfix-mw/
├── index.html          # Home page
├── about.html          # About Us + Manager profile
├── services.html       # All 6 services with detail sections
├── portfolio.html      # Portfolio gallery with filters
├── contact.html        # Contact info + inquiry form
├── 404.html            # Custom 404 page
├── css/
│   └── style.css       # Custom styles & branding
├── js/
│   └── main.js         # Interactivity & form handling
├── assets/
│   ├── icons/
│   │   └── favicon.svg # Brand favicon
│   └── images/         # Place manager photo & project images here
└── README.md           # This file
```

---

## Local Testing

1. Download and extract the project folder.
2. Open `index.html` directly in a modern browser **or** run a simple local server:

   ```bash
   # Python 3
   python -m http.server 8080

   # Node (if you have npx)
   npx serve .
   ```

3. Visit `http://localhost:8080` (or the port shown).

---

## Deployment

### GitHub Pages
1. Create a new repository and push the contents of `techfix-mw/`.
2. Go to **Settings → Pages**.
3. Set source to the branch containing the files (usually `main`) and folder `/` (root).
4. Save. Your site will be available at `https://<username>.github.io/<repo>/`.

### Netlify / Vercel
- Drag and drop the `techfix-mw` folder, or connect the Git repository.
- No build command needed (static site).

### Custom domain
Point your domain’s DNS to the host and configure the custom domain in the host’s dashboard.

---

## Adding the Manager Photograph

1. Save a professional portrait of Wilson C Gulumba as:
   ```
   assets/images/wilson-gulumba.jpg
   ```
   (JPG or PNG is fine. Recommended size: 400–600 px wide.)

2. That is all. The About page already contains the correct `<img>` tag.
   - The photo fills the red circle perfectly on both phones and desktops.
   - The person icon is only a fallback and is automatically hidden when the image loads.
   - If you use a different filename, update the `src` in `about.html` (search for `wilson-gulumba.jpg`).

---

## Contact Form Behaviour

Because this is a static website, the contact form does **not** send email by itself.  
On successful validation it:

1. Builds a pre-filled WhatsApp message with the user’s details.
2. Opens WhatsApp (`wa.me/265883924080`) so the visitor can send the inquiry.

This is intentional and works offline without a server.  

**Optional upgrade:** Connect the form to a free service such as [Formspree](https://formspree.io) or [Web3Forms](https://web3forms.com) if you prefer email delivery instead of (or in addition to) WhatsApp.

---

## Customisation Notes

| Item | Location |
|------|----------|
| Brand colours | `css/style.css` → `:root` variables |
| Phone / WhatsApp numbers | All HTML pages + `js/main.js` |
| Email | All HTML pages |
| Copyright year | Auto-updated via `js/main.js` (`#currentYear`) |
| Portfolio samples | Replace with real photos in `portfolio.html` and add images under `assets/images/` |
| SEO meta tags | Each HTML `<head>` |

---

## Final Testing Checklist

- [ ] All navigation links work (Home, About, Services, Portfolio, Contact)
- [ ] Mobile hamburger menu opens and closes correctly
- [ ] Sticky header appears and gains shadow on scroll
- [ ] “Get a Quote” buttons go to the contact page
- [ ] Floating WhatsApp button opens the correct chat with pre-filled text
- [ ] Phone numbers are clickable (`tel:` links)
- [ ] Email link opens the mail client (`mailto:`)
- [ ] Contact form validates required fields and opens WhatsApp with the message
- [ ] Service “Request This Service” buttons pre-select the correct service on the contact form
- [ ] Portfolio filter buttons show/hide the correct cards
- [ ] All sample portfolio items are clearly labelled “Demonstration project”
- [ ] Manager photo placeholder is present (or real photo is inserted)
- [ ] Footer copyright year is current
- [ ] “Developed by TechFix Mw” credit is visible
- [ ] 404 page loads for missing URLs (on hosts that support it)
- [ ] Site is readable and usable on phone, tablet, and desktop
- [ ] Colour contrast is sufficient for accessibility
- [ ] Keyboard navigation reaches main interactive elements

---

## Brand Colours

| Role | Hex |
|------|-----|
| Primary | `#C62828` |
| Secondary / Dark red | `#8E0000` |
| Background | `#FFFFFF` |
| Dark sections | `#171717` |
| Text | `#292929` |
| Accent / light bg | `#F3F4F6` |

---

© TechFix Mw. All Rights Reserved.  
Developed by TechFix Mw

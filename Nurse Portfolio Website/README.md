# Professional Nursing Portfolio Website

A premium, fully responsive, accessible healthcare portfolio and appointment-request
website built with **HTML5, CSS3 and vanilla JavaScript** — no build step, no framework.

---

## 1. Quick start

1. Extract the ZIP file.
2. Open the folder in **VS Code**.
3. Open `index.html` directly in a browser, **or** (recommended) install the
   *Live Server* extension → right-click `index.html` → **Open with Live Server**.

That's it. There is nothing to install and nothing to build.

---

## 2. Project structure

```
nurse-portfolio/
├── index.html                 Main one-page website
├── privacy.html               Privacy policy page
├── terms.html                 Terms of use page
├── README.md                  This file
└── assets/
    ├── css/
    │   └── styles.css         Design system + all styles
    ├── js/
    │   ├── site-config.js     ← EDIT THIS FIRST (name, phone, email, socials, stats)
    │   └── main.js            All interactions + services / testimonials / FAQ data
    ├── images/
    │   ├── hero.jpg           Hero background
    │   ├── about.jpg          Portrait for the About section
    │   ├── cta.jpg            Home-visit image for the CTA band
    │   ├── favicon.png        Favicon / logo mark
    │   └── avatar-placeholder.svg  Testimonial avatar placeholder
    └── docs/                  Put certificate PDFs here (empty by default)
```

---

## 3. What to customize (in order)

### a) `assets/js/site-config.js` — all client details
| Field | Meaning |
|---|---|
| `nurseName`, `credentials`, `tagline` | Branding / wordmark |
| `phoneDisplay`, `phoneHref` | Displayed number + `tel:` link |
| `email` | Displayed address + `mailto:` link |
| `whatsappNumber` | Digits only, country code first (e.g. `237670000000`) |
| `location`, `mapsUrl` | Contact location + Google Maps link |
| `availability` | Working days/hours |
| `social.linkedin / facebook / instagram` | Replace placeholder URLs |
| `stats[]` | The four statistics in the About section |

### b) `assets/js/main.js` — content arrays at the top of the file
* `SERVICES` — service cards, modal details **and** the booking dropdown (single source of truth).
* `TESTIMONIALS` — **replace with genuine, written-consent patient testimonials before publishing.**
* `FAQS` — questions and answers.

### c) `index.html`
* Page `<title>`, meta description, Open Graph tags and the JSON-LD block at the top.
* Experience timeline entries (search for `EXPERIENCE`).
* Qualification cards (search for `QUALIFICATIONS`).
* About Me biography text.

### d) `assets/images/`
Replace `hero.jpg`, `about.jpg`, `cta.jpg` and `favicon.png` with the client's own
photography, keeping the same filenames — no code changes needed. Recommended sizes:
hero 1920×1280, about 1024×1280, cta 1600×1000, favicon 512×512 (square).

### e) Colors & fonts — `assets/css/styles.css`
Every color, radius, shadow and font lives in the `:root` block at the top of the file
(and `[data-theme="dark"]` for dark mode). Change them there to rebrand the entire site.

---

## 4. Connecting the booking form to a real backend

The form validates fully in the browser but **does not send anything** — it clearly tells
the visitor that the request is not confirmed and not transmitted. To connect a real
service, open `assets/js/main.js`, find the comment `BACKEND INTEGRATION POINT` inside
`initBookingForm()` and replace it with one of:

* **Formspree / Getform / Basin** — `fetch("https://formspree.io/f/YOUR_ID", {...})`
* **EmailJS** — `emailjs.send(serviceId, templateId, data)`
* **Calendly / Google Calendar** — redirect to a scheduling link with prefilled data
* **Your own API** — `POST` the `data` object to your endpoint

Then update the success message so it reflects the real behaviour. Never state that an
appointment is confirmed unless the connected system actually confirms it.

## 5. Adding certificate documents

Drop PDFs into `assets/docs/`, then edit the **Verified Credentials** modal near the
bottom of `index.html` and turn the list items into links, e.g.:

```html
<li><i class="fa-solid fa-file-pdf"></i> <a href="./assets/docs/licence.pdf" target="_blank" rel="noopener">Professional nursing licence</a></li>
```

---

## 6. Features included

* Sticky, shrinking navigation with backdrop blur, scroll-spy and mobile hamburger menu
* Full-width hero with overlay, entrance animations and dual CTAs
* Trust/credentials strip, About with editable stats, 8 service cards with detail modals
* Career timeline, qualifications grid, "Why patients choose my care", CTA band
* Auto-playing testimonial carousel with arrows, dots, keyboard and swipe support
* Appointment request form with full client-side validation and clear status messages
* Prominent non-alarming medical/emergency notice
* Accordion FAQ (only one open at a time), contact cards with `tel:` / `mailto:` / WhatsApp / Maps links
* Multi-column footer, floating WhatsApp + back-to-top buttons
* Dark mode toggle persisted in `localStorage`, honouring the OS preference on first visit
* Accessibility: semantic HTML, skip link, ARIA attributes, focus trapping in modals,
  visible focus states, keyboard-navigable throughout, `prefers-reduced-motion` support
* SEO: unique title, meta description, Open Graph + Twitter cards, canonical, JSON-LD
  `MedicalBusiness` schema, descriptive alt text, semantic heading hierarchy
* Performance: lazy-loaded below-the-fold images, explicit image dimensions,
  no JS frameworks, CSS-driven animations

---

## 7. Before publishing — checklist

- [ ] Replace every value in `site-config.js` marked `REPLACE`
- [ ] Replace placeholder testimonials with real, consented ones
- [ ] Replace experience, qualifications and biography placeholder text
- [ ] Swap in the client's real photographs
- [ ] Update the page title, meta description and JSON-LD details
- [ ] Connect the booking form to a real service (or keep the "not confirmed" wording)
- [ ] Review `privacy.html` and `terms.html` with a qualified professional
- [ ] Confirm the browser console is free of errors

---

## 8. Browser support

Latest Chrome, Edge, Firefox and Safari, plus modern mobile browsers.
Tested from 320px to 1920px wide with no horizontal scrolling.

External dependencies (CDN, internet required on first load):
Google Fonts (Inter + Manrope) and Font Awesome 6.5.2. To go fully offline, download
both and reference the local copies from `assets/`.

# Ptarmigans in Cardigans

A whimsical website celebrating Arctic birds in contemporary knitwear. This is a simple, self-contained website built with HTML, CSS, and vanilla JavaScript - no complex toolchain required.

## Files Structure

```
ptarmigans-in-cardigans/
├── index.html          # Main homepage
├── about.html          # About page
├── faq.html           # FAQ page with accordion
├── styles.css         # All CSS styles
├── script.js          # JavaScript functionality
├── ptarmigans/        # Image folder
│   ├── 1.png         # Mustard the ptarmigan
│   ├── 2.png         # Hazel the ptarmigan
│   ├── 3.png         # Sage the ptarmigan
│   ├── 4.png         # Ruby the ptarmigan
│   ├── 5.png         # Pearl the ptarmigan
│   └── 6.png         # Indigo the ptarmigan
└── README.md          # This file
```

## Features

- **Responsive Design**: Works on desktop, tablet, and mobile
- **Image Gallery**: Six featured ptarmigans with modal popups
- **Smooth Navigation**: Sticky header with smooth scrolling
- **Mobile Menu**: Collapsible mobile navigation
- **FAQ Accordion**: Expandable questions and answers
- **SEO Optimized**: Proper meta tags and semantic HTML
- **No Dependencies**: Pure HTML, CSS, and JavaScript

## Setup

1. Upload all files to your web server
2. Ensure the `ptarmigans/` folder contains all 6 images
3. No additional setup required - just open `index.html`

## Hosting Requirements

- Any standard web server (Apache, Nginx, etc.)
- No database required
- No server-side language requirements
- Static file hosting (like GitHub Pages) works fine

## Browser Compatibility

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Internet Explorer 11+ (with some CSS fallbacks)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Customization

### Adding New Ptarmigans

1. Add new image to `ptarmigans/` folder
2. Edit the `ptarmigans` array in `script.js`:

```javascript
{
    id: 7,
    name: "Your Ptarmigan Name",
    cardiganColor: "color description",
    cardiganStyle: "Style description",
    shortDescription: "Brief description for card",
    fullDescription: "Detailed description for modal",
    personality: "Personality trait",
    imageUrl: "ptarmigans/7.png"
}
```

### Styling Changes

All styles are in `styles.css`. Key sections:
- Header styles: `.header` and related classes
- Hero section: `.hero`
- Gallery: `.gallery` and `.ptarmigan-card`
- Modal: `.modal` and related classes

### Content Updates

- Homepage content: Edit `index.html`
- About page: Edit `about.html`
- FAQ: Edit `faq.html` (questions are in the HTML)

## Performance Notes

- Images are optimized for web (300-700KB each)
- CSS uses efficient selectors
- JavaScript is vanilla (no framework overhead)
- Total page size is under 2MB including all images

## Credits

Original concept inspired by whimsical animal fashion photography. Images are digitally enhanced for artistic purposes.
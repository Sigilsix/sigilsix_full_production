SigilSix — Jay Portfolio (GitHub Pages + Decap CMS)
==================================================

This folder contains a production-ready portfolio site for Jay (SigilSix).
It is designed for GitHub Pages hosting with a dark, gothic / industrial aesthetic,
theme-based galleries, and a Decap (Netlify) CMS configuration for editing gallery data.

Structure
--------
- index.html               # Landing page with large theme tiles
- gallery.html             # "All works" continuous gallery
- themes/*.html            # One page per theme (Urban Ruins, Railway / Overgrowth, etc.)
- projects/*.html          # Simple single-work project pages
- data/gallery.json        # Source of truth for gallery items
- images/*                 # Portfolio images (copied from your uploads)
- assets/css/main.css      # Dark neon/gothic styling
- assets/js/main.js        # Gallery loading + lightbox
- admin/index.html         # Decap CMS admin UI
- admin/config.yml         # CMS configuration (update repo + auth if needed)
- .github/workflows/deploy.yml  # GitHub Actions workflow for Pages deployment

How to Deploy on GitHub Pages
-----------------------------
1. Create a new GitHub repository and push all of these files to the `main` branch.
2. Go to Settings → Pages for the repo.
3. Under "Build and deployment", choose "GitHub Actions".
4. The included workflow `.github/workflows/deploy.yml` will build and deploy the site.

How to Configure Decap CMS (GitHub backend)
-------------------------------------------
1. Edit admin/config.yml:
   - Replace `YOUR_GITHUB_USERNAME/YOUR_REPO_NAME` with your actual GitHub username and repo name.
2. Create a GitHub OAuth app and configure callback URLs if you want authenticated editing via the browser.
   (See Decap/Netlify CMS GitHub backend docs for details.)

Editing the Gallery
-------------------
- All gallery items live in `data/gallery.json`.
- Each entry has: `src`, `title`, `theme`, and `url`.
- Themes are currently: `urban-ruins`, `railway-overgrowth`, `classic-car-series`,
  `industrial-wasteland`, `portraits`, and `graphic-poster-works`.
- You can either edit this JSON directly or hook up Decap CMS to manage it via /admin.


# Quorix — Marketing site

Static website for **Quorix: Mind Boost**. Deployed on GitHub Pages.

**Live URL:** https://talhacosar29.github.io/quorix.app/

## Structure

```
quorix.app/          ← GitHub repo name (must match for this URL)
├── index.html       ← Landing page
├── privacy.html
├── contact.html
├── css/styles.css
├── js/main.js
├── assets/logo.png
└── .nojekyll
```

## Deploy to GitHub Pages

1. Create a repo named **`quorix.app`** under `talhacosar29` (name is important for the URL).
2. Push this folder:

   ```bash
   cd /Users/talhacosar29/Web_Projects/quorix
   git add .
   git commit -m "Add Quorix marketing site"
   git remote add origin https://github.com/talhacosar29/quorix.app.git
   git push -u origin main
   ```

3. On GitHub: **Settings → Pages**
   - Source: **Deploy from a branch**
   - Branch: **main** / **/ (root)**
   - Save

4. After 1–2 minutes, open: **https://talhacosar29.github.io/quorix.app/**

## App Store URLs

Use these in App Store Connect:

| Field | URL |
|-------|-----|
| Support URL | https://talhacosar29.github.io/quorix.app/contact.html |
| Privacy Policy URL | https://talhacosar29.github.io/quorix.app/privacy.html |
| Marketing URL | https://talhacosar29.github.io/quorix.app/ |

## Local preview

```bash
cd /Users/talhacosar29/Web_Projects/quorix
python3 -m http.server 8080
# open http://localhost:8080
```

## Customize

- Email: edit `contact@tycosoftware.com` in `privacy.html`, `contact.html`, and `js/main.js`
- Store links: update badges in `index.html` when apps are live

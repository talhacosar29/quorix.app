# Quorix — Marketing site

Static website for **Quorix**. Deployed on GitHub Pages.

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

## App highlights (marketing copy)

| Feature | Detail |
|---------|--------|
| Daily cards | **10** per day (9 topics + headlines) |
| Categories | Psychology, Finance, English, Quotes, History, Geography, Physics, Music, Headlines, Trivia |
| Content | **365** daily packs per language (EN & TR) |
| Archives | **400+** cards per category; first **15** free preview |
| Quiz | Easy (3) / Medium (5) / Hard (10) timed questions |
| Tabs | Today, Explore, News, Saved, Settings + Quiz |
| Privacy | No account; on-device progress |

## Deploy to GitHub Pages

1. Create a repo named **`quorix.app`** under `talhacosar29` (name is important for the URL).
2. Push this folder:

   ```bash
   cd /Users/talhacosar29/web_projects/quorix
   git add .
   git commit -m "Update marketing site for current app features"
   git remote add origin https://github.com/talhacosar29/quorix.app.git
   git push -u origin main
   ```

3. On GitHub: **Settings → Pages**
   - **Build and deployment → Source:** `GitHub Actions`
   - Save

4. Push again or re-run the workflow: **Actions → Deploy GitHub Pages → Re-run**

5. After 1–2 minutes, open: **https://talhacosar29.github.io/quorix.app/**

## App Store URLs

Use these in App Store Connect:

| Field | URL |
|-------|-----|
| Support URL | https://talhacosar29.github.io/quorix.app/contact.html |
| Privacy Policy URL | https://talhacosar29.github.io/quorix.app/privacy.html |
| Marketing URL | https://talhacosar29.github.io/quorix.app/ |

## Local preview

```bash
cd /Users/talhacosar29/web_projects/quorix
python3 -m http.server 8080
# open http://localhost:8080
```

## Customize

- Email: `app.quorix@gmail.com` (privacy, contact, form)
- Store links: update badges in `index.html` when apps are live on App Store / Google Play

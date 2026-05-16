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
   - **Build and deployment → Source:** `GitHub Actions` (not “Deploy from a branch”)
   - Save

4. Push again or re-run the workflow: **Actions → Deploy GitHub Pages → Re-run**

5. After 1–2 minutes, open: **https://talhacosar29.github.io/quorix.app/**

### Workflow failed with “Get Pages site failed” / “Not Found”?

Pages is not enabled yet, or Source is still “Deploy from a branch”. Fix:

1. Repo → **Settings → Pages**
2. Under **Build and deployment**, choose **GitHub Actions**
3. **Actions** tab → failed run → **Re-run all jobs**

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

- Email: `app.quorix@gmail.com` (privacy, contact, form)
- Store links: update badges in `index.html` when apps are live

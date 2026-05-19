# Quorix: Mind Boost — Marketing site

Static website for **Quorix: Mind Boost**. Deployed on GitHub Pages.

**Live URL:** https://talhacosar29.github.io/quorix.app/

## Store links

| Store | URL |
|-------|-----|
| **App Store** | https://apps.apple.com/us/app/quorix-mind-boost/id6770055395 |
| **Google Play** | https://play.google.com/store/apps/details?id=com.talhacosar.quorix |
| **Smart download** (iOS → App Store, Android → Play Store) | https://talhacosar29.github.io/quorix.app/download.html |

Use the **smart download** link in bios, QR codes, and social posts — mobile visitors are redirected automatically; desktop users see both store buttons.

## Structure

```
quorix.app/
├── index.html       ← Landing page
├── download.html    ← Smart store redirect
├── privacy.html
├── contact.html
├── css/styles.css
├── js/main.js
├── js/store.js      ← Store URLs & device detection
├── assets/logo.png
└── .nojekyll
```

## Deploy to GitHub Pages

```bash
cd /Users/talhacosar29/web_projects/quorix
git add .
git commit -m "Add live store links and smart download page"
git push
```

After push, GitHub Actions deploys to **https://talhacosar29.github.io/quorix.app/**

## App Store Connect URLs

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

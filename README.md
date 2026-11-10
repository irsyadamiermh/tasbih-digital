# Tasbih Digital 📿

A complete digital tasbih (dhikr counter) that runs in the browser. No install, no login, no ads. Everything is saved on your own device and it works offline.

## Features

**Counter**
- Big tap button with a 33-bead ring that lights up as you count
- Targets of 33, 99, 100, 1000, no limit, or any custom number, remembered per dhikr
- Round tracking, undo, and reset with confirmation
- **Focus mode**: full-screen, tap anywhere to count, screen stays on
- Keyboard shortcuts: `Space` to count, `Backspace` to undo, `Esc` to leave focus mode

**Library**
- 11 built-in dhikr with Arabic text, transliteration and meaning
- **Add your own dhikr** (name, Arabic text, meaning, target), then edit or delete it
- **Routines (wirid)**: after-prayer tasbih (33/33/34) and daily wirid built in, moving to the next step automatically
- **Build your own routine** from any dhikr, in any order
- **Asmaul Husna**: all 99 Names of Allah with meanings, one name per tap

**Stats**
- Today, day streak, best day and all-time totals
- Daily goal with a progress bar
- 7-day and 30-day activity chart
- Most-recited breakdown
- Share your progress

**Personalise**
- English and Bahasa Melayu
- Light, dark or automatic theme, with 4 colour themes
- 3 tap sounds (or off), and vibration
- Keep-screen-on option

**Data**
- Saves automatically in the browser (localStorage)
- Export and import a backup file to move to another device
- **Installable (PWA)** and works fully offline after the first visit

## Run it

There is nothing to build.

- **Quickest:** open `index.html` in any browser.
- **With offline/install support** (needs a web server):
  ```bash
  npx serve .
  # or
  python -m http.server 8000
  ```

## Deploy

**GitHub Pages**
1. Go to the repo → **Settings** → **Pages**
2. Under *Source*, choose **Deploy from a branch**, then `main` and `/ (root)`
3. Save. The site appears at `https://<username>.github.io/<repo-name>/`

**Vercel / Netlify**
Import the repo, keep the default settings (no build command, output directory = root) and deploy.

## Project structure

```
tasbih-digital/
├── index.html            # the whole app: HTML, CSS and JavaScript
├── sw.js                 # service worker for offline use
├── manifest.webmanifest  # makes the app installable
├── icon.svg, icon-192.png, icon-512.png
├── README.md
├── LICENSE
└── .gitignore
```

## Tech

Plain HTML, CSS and JavaScript. No framework and no dependencies, just Google Fonts (Amiri for Arabic, Plus Jakarta Sans for the UI).

## Ideas for later

- [ ] Prayer times and reminders
- [ ] Morning and evening adhkar with full text
- [ ] Sync between devices

## License

[MIT](LICENSE) © 2026 Irsyad

# Tasbih Digital 📿

A simple, beautiful digital tasbih (dhikr counter) that runs right in the browser. No install, no login, and your count is saved on your device.

## Features

- **Big tap button** with a 33-bead ring that lights up as you count
- **6 dhikr presets** with Arabic text, transliteration and meaning: Subhanallah, Alhamdulillah, Allahu Akbar, La ilaha illallah, Astaghfirullah, Selawat
- **Targets**: 33, 99, 100, no limit, or any custom number, with round tracking
- **After-prayer tasbih mode**: 33 Subhanallah → 33 Alhamdulillah → 34 Allahu Akbar, moving to the next automatically
- **Sound and vibration** feedback (each can be turned off)
- **Undo** a mistaken tap, and **reset** with confirmation
- **Today and all-time totals**
- **Saves automatically** in your browser (localStorage), so the count is still there after you close the tab
- **Keyboard shortcuts**: `Space` to count, `Backspace` to undo
- **Light and dark mode** that follow your device setting
- Works on phone and desktop

## Run it

It's a single file, so there is nothing to build.

- **Easiest:** open `index.html` in any browser.
- **Local server (optional):**
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
├── index.html   # the whole app: HTML, CSS and JavaScript
├── README.md
├── LICENSE
└── .gitignore
```

## Tech

Plain HTML, CSS and JavaScript. No framework and no dependencies, just Google Fonts (Amiri for Arabic, Plus Jakarta Sans for the UI).

## Ideas for later

- [ ] Installable PWA that works fully offline
- [ ] Malay / English language switch
- [ ] Daily history chart
- [ ] Add your own dhikr

## License

[MIT](LICENSE) © 2026 Irsyad

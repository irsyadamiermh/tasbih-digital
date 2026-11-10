// Copies the web app into www/ so Capacitor can package it into the Android app.
const fs = require("fs");
const path = require("path");
const root = path.join(__dirname, "..");
const out = path.join(root, "www");
const files = ["index.html", "sw.js", "manifest.webmanifest", "icon.svg", "icon-192.png", "icon-512.png"];
fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(out);
for (const f of files) fs.copyFileSync(path.join(root, f), path.join(out, f));
console.log(`Copied ${files.length} files to www/`);

<p align="center"><img src="icon-512.png" width="140" alt="Logo Zikra"></p>

<h1 align="center">Zikra <sub>ذِكْرَى</sub></h1>
<p align="center"><b>Tasbih digital untuk zikir harian.</b><br>Percuma, tanpa iklan, tanpa log masuk. Semua data disimpan dalam telefon anda sendiri dan boleh guna tanpa internet.</p>

<p align="center"><a href="https://github.com/irsyadamiermh/tasbih-digital/releases/download/latest/zikra.apk"><b>⬇ Muat turun APK Android</b></a></p>

---

Logo Zikra menggabungkan **bunga raya**, bunga kebangsaan Malaysia, dengan **bulan sabit** di tengahnya. Debunganya pula ialah butir-butir tasbih.

## Ciri-ciri

**Kiraan**
- Butang besar dengan lingkaran 33 manik yang menyala setiap kali dikira
- Sasaran 33, 99, 100, 1000, tanpa had atau nombor sendiri, diingat untuk setiap zikir
- Kiraan pusingan, butang undur dan reset dengan pengesahan
- **Mod fokus**: skrin penuh, sentuh mana-mana untuk kira, skrin sentiasa hidup

**Koleksi**
- 12 zikir dengan teks Arab, sebutan dan maksud
- **Tambah zikir sendiri** (nama, teks Arab, maksud, sasaran), kemudian edit atau padam
- **Wirid**:
  - Tasbih selepas solat **33 + 33 + 33 + 1 = 100** (Hadis riwayat Muslim, no. 597)
  - Tasbih selepas solat **33 + 33 + 34** (Hadis riwayat Muslim, no. 596)
  - Wirid harian
- **Bina wirid sendiri** daripada mana-mana zikir
- Bulatan progres untuk setiap langkah wirid, berserta nota **fadhilat** dan sumber hadisnya
- **Asmaul Husna**: 99 Nama Allah dengan maksud, satu nama setiap sentuhan

**Statistik**
- Hari ini, hari berturut-turut (streak), hari terbaik dan jumlah keseluruhan
- Sasaran harian dengan bar kemajuan
- Carta aktiviti 7 hari dan 30 hari
- Senarai zikir paling kerap dibaca
- Kongsi pencapaian

**Tetapan**
- Bahasa Melayu (utama) dan English
- Tema cerah, gelap atau auto, dengan 4 pilihan warna
- 3 bunyi sentuhan (atau senyap) dan getaran

**Data**
- Simpan automatik dalam peranti
- Eksport dan import fail sandaran
- Boleh dipasang (PWA) dan berfungsi tanpa internet

## Aplikasi Android (APK)

Setiap kali kod di-push ke `main`, GitHub Actions akan membina APK secara automatik (aplikasi dibungkus dengan [Capacitor](https://capacitorjs.com)).

- **Muat turun:** halaman **Releases**, ambil `zikra.apk` daripada keluaran *latest*.
- **Pasang:** buka fail itu di telefon Android dan benarkan "pasang aplikasi tidak diketahui" bila ditanya.
- APK baharu akan mengemas kini aplikasi sedia ada tanpa perlu nyahpasang.
- Ini binaan *debug* untuk dipasang terus. Untuk Google Play, perlu binaan *release* yang ditandatangani.

## Jalankan sendiri

Tiada proses build untuk versi web.

- **Paling mudah:** buka `index.html` dalam mana-mana pelayar.
- **Dengan sokongan luar talian / pasang** (perlukan pelayan web):
  ```bash
  npx serve .
  # atau
  python -m http.server 8000
  ```

**GitHub Pages:** repo → **Settings** → **Pages** → *Deploy from a branch* → `main`, `/ (root)` → **Save**.

## Struktur projek

```
tasbih-digital/
├── index.html            # keseluruhan aplikasi: HTML, CSS dan JavaScript
├── sw.js                 # service worker untuk guna tanpa internet
├── manifest.webmanifest  # menjadikan aplikasi boleh dipasang
├── icon.svg, icon-192.png, icon-512.png   # logo Zikra
├── package.json, capacitor.config.json, scripts/, assets/   # pembungkus Android
├── keystore/debug.keystore                                   # kunci tandatangan APK debug
├── .github/workflows/build-apk.yml                           # membina APK
├── README.md
├── LICENSE
└── .gitignore
```

## Sumber

Teks zikir, Asmaul Husna dan terjemahannya disediakan dengan teliti, tetapi sila semak dengan guru atau pihak berautoriti agama sebelum diedarkan secara meluas. Nota fadhilat merujuk kepada Sahih Muslim no. 596 dan 597.

## Lesen

[MIT](LICENSE) © 2026 Irsyad

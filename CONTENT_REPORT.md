# GymAI Club Web Sitesi Icerik Raporu

## Genel Ozet

Bu proje Astro 7 ile gelistirilmis, cok dilli bir GymAI Club landing page sitesidir. Site tek ana sayfa deneyimi uzerine kuruludur ve 4 dil destekler:

- Turkce: `/`
- English: `/en/`
- Русский: `/ru/`
- Espanol: `/es/`

Ana mesaj: GymAI Club, kamera uzerinden hareketleri gercek zamanli analiz eden, form duzelten ve kisisel antrenman planlari olusturan yapay zeka destekli fitness kocu olarak anlatiliyor.

## Teknoloji ve Yapilandirma

### `package.json`

Projenin paket ve script bilgilerini tutar.

- `astro`: site framework'u
- `tailwindcss`: stil altyapisi
- `@tailwindcss/vite`: Tailwind'in Vite entegrasyonu
- `npm run dev`: lokal gelistirme sunucusu
- `npm run build`: production build
- `npm run preview`: build onizleme

Node gereksinimi: `>=22.12.0`.

### `astro.config.mjs`

Astro ayarlarini tanimlar.

- Varsayilan dil: `tr`
- Desteklenen diller: `tr`, `en`, `ru`, `es`
- Turkce varsayilan dil oldugu icin `/tr/` yerine `/` kullaniliyor.
- Tailwind Vite plugin'i aktif.

### `tsconfig.json`

TypeScript/Astro tip ayarlari icin kullanilir.

## Sayfalar

### `src/pages/index.astro`

Turkce ana sayfadir. `HomePage` component'ini `lang="tr"` ile cagirir.

### `src/pages/en/index.astro`

Ingilizce ana sayfadir. `HomePage` component'ini `lang="en"` ile cagirir.

### `src/pages/ru/index.astro`

Rusca ana sayfadir. `HomePage` component'ini `lang="ru"` ile cagirir.

### `src/pages/es/index.astro`

Ispanyolca ana sayfadir. `HomePage` component'ini `lang="es"` ile cagirir.

## Layout

### `src/layouts/BaseLayout.astro`

Tum sayfalarin ortak HTML kabugudur.

Icerigi:

- Global CSS import eder.
- Sayfa dilini `<html lang="">` olarak ayarlar.
- SEO icin `title` ve `description` meta alanlarini dil dosyasindan alir.
- `hreflang` alternatif dil linklerini uretir.
- Favicon dosyalarini baglar.
- Google Fonts olarak `Space Grotesk` ve `Manrope` yukler.
- Sayfa govdesini `<slot />` ile component'lere birakir.

## Ana Sayfa Akisi

### `src/components/HomePage.astro`

Landing page'in bolumlerini sirasiyla birlestiren ana component'tir.

Bolum sirasi:

1. `Nav`
2. `Hero`
3. `Marquee`
4. `Features`
5. `Showcase`
6. `HowItWorks`
7. `DownloadCTA`
8. `Faq`
9. `Footer`

## Componentler

### `src/components/Nav.astro`

Ust navigasyon baridir.

Icerigi:

- GymAI Club logosu ve marka yazisi
- Sayfa ici linkler:
  - Ozellikler
  - Uygulama
  - Nasil Calisir
  - SSS
  - Iletisim
- Dil secici

### `src/components/Logo.astro`

Markanin SVG logosudur. Dumbbell/biomekanik hissi veren cizgisel bir ikon kullanir.

Props:

- `size`: logo boyutu
- `glow`: yesil glow efekti ac/kapat

### `src/components/LanguageSwitcher.astro`

Dil degistirme menusu.

Icerigi:

- Aktif dili bayrak ve kod ile gosterir.
- Turkce, Ingilizce, Rusca, Ispanyolca secenekleri vardir.
- Dil linklerini `localePath()` helper'i uzerinden uretir.
- Disari tiklandiginda menu kapanir.

### `src/components/Hero.astro`

Ilk ekran/hero bolumudur.

Icerigi:

- Badge: AI destekli fitness kocu mesaji
- Ana baslik
- Aciklama metni
- App Store ve Google Play butonlari
- Istatistikler:
  - 18+ egzersiz
  - %97 form dogrulugu
  - 4.9 kullanici puani
- Telefon mockup icinde `home.png` uygulama ekran goruntusu

Not: App Store ve Google Play butonlari simdilik `#download` alanina gidiyor; gercek store linkleri henuz bagli degil.

### `src/components/Marquee.astro`

Yatay kayan ozellik serididir.

Turkce icerik:

- GERCEK ZAMANLI FORM ANALIZI
- GEMINI & CLAUDE AI
- KISISEL PLANLAR
- SESLI KOC
- TOPLULUK & LIDERLIK
- ROZET SISTEMI

### `src/components/Features.astro`

Ozellik kartlarini gosterir.

Ana ozellikler:

- Gorunmez AI Kamera
- Otomatik tekrar sayimi
- Sesli koc
- Landscape mod
- Kisisel planlar
- Topluluk ve liderlik
- Ilerleme takibi
- AI sohbet kocu

### `src/components/Showcase.astro`

Uygulama ekran goruntulerinin slider/carousel bolumudur.

Kullanilan ekranlar:

- `home.png`: Ana sayfa
- `plans.png`: Antrenman planlari
- `library.png`: Egzersiz kutuphanesi
- `plans-tr.png`: Profil / senin planlarin
- `camera.png`: Akilli kamera

Davranis:

- Ileri/geri ok butonlari vardir.
- Nokta indikatorleri vardir.
- Secili slide degisince telefon gorseli ve aciklama metni degisir.

### `src/components/HowItWorks.astro`

"Nasil Calisir" bolumudur.

Uc adim:

1. Hedefini sec
2. Kamerayi ac
3. Ilerlemeni izle

### `src/components/DownloadCTA.astro`

Alt indirme cagrisi bolumudur.

Icerigi:

- Logo/ikon
- "AI kocun seni bekliyor." basligi
- Kisa indirme metni
- App Store ve Google Play butonlari

Not: Bu butonlar da simdilik `#top` linkine gidiyor; gercek store linkleri eklenmeli.

### `src/components/Faq.astro`

SSS accordion bolumudur.

Turkce sorular:

- AI kamera nasil calisiyor?
- Salon uyeligi veya ekipman gerekli mi?
- Verilerim guvende mi?
- Ucretsiz mi?

Davranis:

- Soruya tiklaninca cevap acilir.
- `+` isareti acik durumda `-` olur.

### `src/components/Footer.astro`

Alt bilgi bolumudur.

Icerigi:

- Logo ve marka
- Kisa marka slogani
- Urun linkleri
- Kurumsal linkler
- Copyright

Not: Kurumsal linklerde `Hakkimizda`, `Gizlilik`, `Iletisim` su anda `#` olarak duruyor; ayri sayfa veya gercek link eklenmemis.

## Cok Dilli Icerik Sistemi

### `src/i18n/utils.ts`

Dil sistemi yardimci dosyasidir.

Icerigi:

- Dil listesi: `tr`, `en`, `ru`, `es`
- Bayrak listesi
- Varsayilan dil: `tr`
- Tum JSON sozluklerini import eder.
- `t(lang, key)` fonksiyonu ile ceviri metinlerini dot-path ile ceker.
- `localePath(lang)` fonksiyonu ile dil URL'lerini uretir.

### `src/i18n/tr.json`

Turkce tum site metinleri.

Baslik: `GymAI Club — Yapay Zeka Destekli Fitness Kocu`

Hero mesaji: `Formunu yapay zeka cozumlesin.`

### `src/i18n/en.json`

Ingilizce tum site metinleri.

Baslik: `GymAI Club — AI-Powered Fitness Coach`

Hero mesaji: `Let AI read your every rep.`

### `src/i18n/ru.json`

Rusca tum site metinleri.

Baslik: `GymAI Club — Фитнес-тренер на основе ИИ`

Hero mesaji: `Пусть ИИ считывает каждый твой повтор.`

### `src/i18n/es.json`

Ispanyolca tum site metinleri.

Baslik: `GymAI Club — Entrenador de fitness con IA`

Hero mesaji: `Deja que la IA lea cada repeticion.`

## Stil Dosyalari

### `src/styles/global.css`

Tum sitenin gorsel tasarimini belirler.

Ana tasarim dili:

- Koyu arka plan
- Neon yesil ana marka rengi
- Mavi, mor, turuncu ve altin vurgu renkleri
- Telefon mockup'lari
- Glow efektleri
- Sticky navbar
- Responsive grid yapilari
- Mobil breakpoint'ler

Ana CSS bolumleri:

- Tema token'lari
- Global reset
- Animasyonlar
- Navbar
- Dil menusu
- Hero
- Marquee
- Feature kartlari
- Showcase slider
- How it works
- CTA
- FAQ
- Footer
- Responsive kurallar

## Gorseller ve Statik Dosyalar

### `public/favicon.svg`

Tarayici favicon SVG dosyasi.

### `public/favicon.ico`

32x32 PNG tabanli favicon dosyasi.

### `src/assets/screenshots/home.png`

Ana uygulama ekran goruntusu. Hero bolumunde ve showcase slider'da kullaniliyor.

Boyut: 1170 x 2532.

### `src/assets/screenshots/plans.png`

Antrenman planlari ekran goruntusu.

Boyut: 1170 x 2532.

### `src/assets/screenshots/library.png`

Egzersiz kutuphanesi ekran goruntusu.

Boyut: 1170 x 2532.

### `src/assets/screenshots/plans-tr.png`

Profil / kullanicinin planlari ekran goruntusu.

Boyut: 1170 x 2532.

### `src/assets/screenshots/camera.png`

Akilli kamera / canli AI takip ekran goruntusu.

Boyut: 1408 x 3048.

### `src/assets/screenshots/splash.png`

Splash ekran goruntusu. Mevcut kodda import edilmemis; su an kullanilmiyor gibi gorunuyor.

Boyut: 585 x 1266.

## Mevcut Icerik Mesajlari

Sitenin ana pazarlama mesajlari:

- Yapay zeka destekli fitness kocu
- Kamera ile gercek zamanli form analizi
- Form bozuldugunda sesli/gorsel uyari
- Kisisel antrenman planlari
- Topluluk, liderlik ve rozet sistemi
- Ilerleme takibi
- AI sohbet kocu
- Ekipmansiz veya salonsuz baslayabilme

## Eksik veya Tamamlanmasi Gereken Noktalar

- App Store ve Google Play butonlari gercek store URL'lerine bagli degil.
- Footer'daki `Hakkimizda`, `Gizlilik`, `Iletisim` linkleri gercek sayfalara gitmiyor.
- `splash.png` asset'i mevcut ama kullanilmiyor.
- README hala Astro starter template icerigi; projeye ozel README yazilmamis.
- Iletisim formu veya mail linki yok.
- Gizlilik politikasi sayfasi yok; kamera/veri guvenligi iddialari oldugu icin deploy oncesi eklenmesi iyi olur.

## Dosya Sayisi Ozeti

- Sayfa dosyalari: 4
- Component dosyalari: 11
- Dil JSON dosyalari: 4
- Stil dosyasi: 1
- Uygulama ekran gorselleri: 6
- Public favicon dosyalari: 2


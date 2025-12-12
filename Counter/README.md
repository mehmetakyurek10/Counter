# ⚛️ Advanced React Counter App

Bu proje, klasik bir sayaç uygulamasının modern web teknolojileri ve **React** kullanılarak geliştirilmiş, "Power User" özellikleriyle donatılmış versiyonudur. Orijinal olarak Vanilla JS ile yazılmış olup, daha iyi durum yönetimi (state management) ve performans için React'e taşınmıştır (Refactored).

## ✨ Özellikler

Bu uygulama sadece sayı saymaz, aynı zamanda kullanıcı deneyimini (UX) artıran birçok özelliğe sahiptir:

- **🔄 Kalıcı Hafıza (Local Storage):** Sayfayı yenileseniz veya tarayıcıyı kapatsanız bile kaldığınız sayıdan devam eder.
- **⛔ 7 Kuralı (The Rule of 7):** Sayaç 7'nin katlarına (7, 14, 21...) ulaştığında butonlar otomatik olarak **5 saniye boyunca kilitlenir**.
- **⏳ Geri Sayım Sayacı:** Kilitlenme durumunda kullanıcının ne kadar beklemesi gerektiğini gösteren dinamik geri sayım.
- **🔊 Ses Efektleri:** Tıklama ve uyarı durumları için özel ses geri bildirimleri (Google Actions Sounds kullanılmıştır).
- **⌨️ Klavye Kontrolü:** Mouse kullanmadan uygulamayı yönetebilme imkanı.
- **📜 İşlem Geçmişi (History Log):** Son yapılan 3 işlemin (Arttırma, Azaltma, Sıfırlama) listesini tutar.
- **🎨 Dinamik Arayüz:** Sayının durumuna (0, pozitif) ve kilit durumuna göre değişen renkler ve imleçler.

## 🎮 Kontroller (Klavye Kısayolları)

Uygulamayı klavye ile hızlıca yönetebilirsiniz:

| Tuş            | İşlev                      |
| :------------- | :------------------------- |
| **Sağ Ok (➡)** | Sayacı Arttırır            |
| **Sol Ok (⬅)** | Sayacı Azaltır             |
| **ESC**        | Sayacı ve Geçmişi Sıfırlar |

## 🛠️ Kullanılan Teknolojiler

- **React (Hooks):** `useState`, `useEffect`
- **JavaScript (ES6+):** Arrow functions, Spread operator, Array methods (`slice`, `map`)
- **CSS3:** Flexbox, Transitions, Hover effects
- **Web APIs:** LocalStorage API, Audio API, Window Event Listeners

## 🚀 Kurulum ve Çalıştırma

Projeyi bilgisayarınıza klonlayın ve çalıştırın:

```bash
# Depoyu klonlayın
git clone https://github.com/mehmetakyurek10/Counter

# Proje dizinine girin
cd REPO_ADINIZ

# Bağımlılıkları yükleyin
npm install

# Projeyi başlatın
npm run dev
# veya
npm start
```

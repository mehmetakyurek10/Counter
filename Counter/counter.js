// 1. DOM Elemanlarını Seçme
const button = document.querySelector("#arttirButonu");
const sayacElementi = document.querySelector("#sayacDegeri");
const mesajAlani = document.querySelector("#mesajAlani"); // Yeni eleman
const h1Elementi = document.querySelector("h1"); // H1'i de renklendirmek için seçiyoruz

// 2. Global Değişkenler
let sayac = 0; // Ana sayaç değeri
let intervalID = null; // setInterval döngüsünü tutacak değişken (durdurmak için gerekli)
const KILIT_DEGERI = 5;
const GECIKME_SANIYE = 3;

// 3. Olay İşleyici Fonksiyonu (Ana Fonksiyon)
function sayaciArttir() {
    // Sayacı artır ve DOM'u güncelle
    sayac++; 
    sayacElementi.textContent = sayac; 

    // Kontrol: Sayaç kilit değerine ulaştı mı?
    if (sayac >= KILIT_DEGERI) {
        // Eğer bir geri sayım zaten başlamışsa, tekrar başlatmayı engelle
        if (intervalID === null) {
            butonuKitleVeGeriSayimiBaslat();
        }
    }
}

// 4. Kilitleme ve Geri Sayımı Başlatma Fonksiyonu
function butonuKitleVeGeriSayimiBaslat() {
    // A. Buton ve Stil Ayarları
    button.disabled = true; // Butonu devre dışı bırak
    sayacElementi.classList.add('kilitli'); // Rengi kırmızı yap (CSS ile)
    h1Elementi.classList.add('kilitli'); 
    
    // B. Geri Sayımı Başlat
    let kalanSure = GECIKME_SANIYE;
    mesajAlani.textContent = `${kalanSure} saniye beklemede...`;
    
    // Her 1000 milisaniyede (1 saniyede) bir çalışacak döngüyü başlat
    intervalID = setInterval(() => {
        kalanSure--; // Süreyi azalt

        if (kalanSure > 0) {
            // Geri Sayım Devam Ediyor
            mesajAlani.textContent = `${kalanSure} saniye beklemede...`;
        } else {
            // Geri Sayım Bitti (0'a ulaştı)
            
            // C. Temizleme ve Normale Döndürme
            clearInterval(intervalID); // 1. Zamanlayıcıyı durdur
            intervalID = null; // 2. ID'yi sıfırla
            
            button.disabled = false; // 3. Butonu etkinleştir
            sayacElementi.classList.remove('kilitli'); // 4. Rengi normale döndür
            h1Elementi.classList.remove('kilitli');
            mesajAlani.textContent = "Tekrar etkinleştirildi!"; // 5. Mesajı temizle
        }
    }, 1000); // 1000 milisaniye = 1 saniye
}

// 5. Olay Dinleyicisini Ekleme
button.addEventListener("click", sayaciArttir);
// Fungsi untuk memutar musik otomatis saat halaman dibuka
function playMusic() {
    const audio = document.getElementById('backgroundMusic');
    audio.loop = true; // Mengatur musik agar berulang terus-menerus
    audio.play().catch(error => {
        console.log("Autoplay musik dicegah oleh browser. Silakan berinteraksi dengan halaman untuk memulai musik.");
    });
}

// Memastikan musik mulai diputar setelah halaman sepenuhnya dimuat
window.addEventListener('load', playMusic);

// Menambahkan deteksi interaksi pengguna jika autoplay dicegah oleh browser
document.addEventListener('click', playMusic);

// Fungsi untuk membuka modal berdasarkan ID yang diberikan
function openModal(modalId) {
    document.getElementById(modalId).style.display = 'flex';
}

// Fungsi untuk menutup modal berdasarkan ID yang diberikan
function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

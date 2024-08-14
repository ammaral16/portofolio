document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling untuk link navigasi
    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Penanganan pengiriman formulir
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Mencegah pengiriman form standar

        // Kirim formulir menggunakan fetch API
        fetch(this.action, {
            method: this.method,
            body: new FormData(this),
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                // Sembunyikan formulir dan tampilkan notifikasi sukses
                document.getElementById('contact-form').style.display = 'none';
                document.getElementById('success-message').style.display = 'block';
            } else {
                alert('Terjadi kesalahan saat mengirim pesan. Silakan coba lagi.');
            }
        }).catch(error => {
            alert('Terjadi kesalahan saat mengirim pesan. Silakan coba lagi.');
        });
    });

    // Fungsi untuk menyembunyikan notifikasi dan kembali ke menu utama
    window.hideNotification = function() {
        document.getElementById('success-message').style.display = 'none';
        document.getElementById('contact-form').style.display = 'block';
        window.scrollTo(0, 0); // Kembali ke atas halaman (menu utama)
    }
});
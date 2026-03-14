📌 Fungsi:
Menangani logika utama tiap route. Controller adalah tempat kamu menuliskan apa yang terjadi ketika suatu endpoint dipanggil.

// Dummy data
const data = {
        id: "1",
        Name: "Muhammad Bagas Wahyudi",
        NIM: "1301220296"
    }

// dari create new user (post)
console.log(req.body);

// dari update user {PUT}
console.log('idUser', idUser); // Untuk mendapatkan parameter id dari URL
// utama.js

// 1. Variabel let dan const
let nama = "Budi";
const umur = 25;
console.log(`Nama: ${nama}, Umur: ${umur}`);

// 2. Arrow Function
const hitungLuas = (panjang, lebar) => panjang * lebar;
console.log(`Luas persegi panjang: ${hitungLuas(10, 5)}`);

// 3. Template Literals
const buah = ["apel", "mangga", "pisang"];
const [buah1, buah2] = buah;
console.log(`Buah pertama: ${buah1}, Buah kedua: ${buah2}`);

// 4. Destructuring Object
const orang = { nama: "Rina", usia: 28, kota: "Bandung" };
const { nama: namaOrang, kota } = orang;
console.log(`Nama: ${namaOrang}, Kota: ${kota}`);

// 5. Spread Operator
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const gabunganArray = [...arr1, ...arr2];
console.log("Gabungan Array:", gabunganArray);

const profil = { nama: "Dewi", usia: 20 };
const tambahan = { kota: "Jakarta", hobi: "coding" };
const dataLengkap = { ...profil, ...tambahan };
console.log("Data Lengkap:", dataLengkap);

// 6. Import dari modul
import { tambah, kurang } from "./matematika.js";

console.log("Hasil Penjumlahan:", tambah(5, 3));
console.log("Hasil Pengurangan:", kurang(10, 4));

// 7. Promise dan Async/Await
const ambilData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const berhasil = true;
            if (berhasil) {
                resolve("Data berhasil diambil!");
            } else {
                reject("Gagal ambil data.");
            }
        }, 2000);
    });
};

const tampilkanData = async () => {
    try {
        const hasil = await ambilData();
        console.log(hasil);
    } catch (error) {
        console.error(error);
    }
};

tampilkanData();

// 8. Class dan Inheritance
class Hewan {
    constructor(nama, suara) {
        this.nama = nama;
        this.suara = suara;
    }

    bersuara() {
        return `${this.nama} mengatakan: ${this.suara}`;
    }
}

class Kucing extends Hewan {
    constructor(nama) {
        super(nama, "Meong");
    }

    tidur() {
        return `${this.nama} sedang tidur nyenyak...`;
    }
}

class Anjing extends Hewan {
    constructor(nama) {
        super(nama, "Guk guk");
    }

    lari() {
        return `${this.nama} sedang berlari!`;
    }
}

const kucing = new Kucing("Tom");
const anjing = new Anjing("Spike");

console.log(kucing.bersuara());
console.log(kucing.tidur());

console.log(anjing.bersuara());
console.log(anjing.lari());
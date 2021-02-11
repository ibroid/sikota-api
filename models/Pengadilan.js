const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    id: String,
    kode: String,
    nama: String,
    alamat: String,
    aktif: String,
    jenis_pengadilan: String
});

const Pengadilan_model = mongoose.model('pengadilan', schema);
module.exports = Pengadilan_model;
const mongoose = require('mongoose')
const { Schema } = mongoose

const TRschema = new Schema({
    pull_status : {
        type: Boolean,
        default: false,
    },
    id_from_client: Number,
    id_pn_asal: Number,
    id_pn_tujuan: Number,
    tgl_surat_diterima: String,
    tgl_penunjukan_jurusita: String,
    tgl_pelaksanaan: String,
    jurusita_id: Number,
    jurusita_nama: String,
    nomor_relaas: String,
    tgl_pengiriman_relaas: String,
    nomor_surat_pengantar_relaas: String,
    tgl_surat_pengantar_relaas: String,
    status_delegasi: Number,
    tgl_resi: String,
    nomor_resi: String,
    biaya: Number,
    status_pelaksanaan: String,
    catatan: String,
    diinput_oleh: String,
    diinput_tanggal: String,
    diperbaharui_oleh: String,
    diperbaharui_tanggal: String,
})
const TRmodel = mongoose.model('tabayun_response', TRschema)
module.exports = TRmodel;



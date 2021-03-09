const mongoose = require('mongoose');
const validator = require('validator');

const schema = new mongoose.Schema({
  response_status: {
    type: Boolean,
    default: false
  },
  pull_status: {
    type: Boolean,
    default: false
  },
  id_from_client: {
    type: Number,
    required: true,
  },
  perkara_id: {
    type: Number,
    required: true,
  },
  nomor_perkara: {
    type: String,
    required: true
  },
  id_pn_asal: {
    type: Number,
    required: true,
  },
  kode_satker_asal: {
    type: Number
  },
  pn_asal_text: {
    type: String,
    required: true,
  },
  id_pn_tujuan: {
    type: Number,
    required: true,
  },
  kode_satker_tujuan: {
    type: Number,
    required: true,
  },
  pn_tujuan_text: {
    type: String,
    required: true,
  },
  tgl_delegasi: {
    type: String
  },
  jenis_delegasi_text: {
    type: String
  },
  jenis_perkara_text: {
    type: String
  },
  tgl_surat: {
    type: String
  },
  tgl_pengiriman: {
    type: String
  },
  nomor_surat: {
    type: String
  },
  tgl_sidang: {
    type: String
  },
  nomor_resi: {
    type: String
  },
  pihak: {
    type: String
  },
  status_pihak: {
    type: String
  },
  agama_pihak: {
    type: String
  },
  biaya: {
    type: Number
  },
  catatan: {
    type: String
  },
  tempat_lahir_pihak: {
    type: String
  },
  tanggal_lahir_pihak: {
    type: String
  },
  pendidikan_pihak: {
    type: String
  },
  pekerjaan_pihak: {
    type: String
  },
  alamat_pihak: {
    type: String
  },
  para_pihak: {
    type: String
  },
  tgl_resi: {
    type: String
  },
  created_at: {
    type: String
  },
  updated_at: {
    type: String
  },
  created_by: {
    type: String
  },
  status_kirim: {
    type: String
  },
  amar_putusan: {
    type: String
  },
  tgl_putusan: {
    type: String
  },
  created : {
    type: Date,
    default: Date.now()
  }
})

const TRmodel = mongoose.model('tabayun_request', schema);
module.exports = TRmodel;
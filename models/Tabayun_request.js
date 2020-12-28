const mongoose = require('mongoose');
const validator = require('validator');

const schema = new mongoose.Schema({
  id_from_client : {
    type: Number,
  },
  perkara_id: {
    type: Number,
  },
  nomor_perkara: {
    type: String,
  } ,
  id_pn_asal:  {
    type: Number,
  },
  kode_satker_asal:  {
    type: Number,
  },
  pn_asal_text:  {
    type: String,
  },
  id_pn_tujuan:  {
    type: Number,
  },
  kode_satker_tujuan:  {
    type: Number,
  },
  pn_tujuan_text:  {
    type: String,
  },
  tgl_delegasi:  {
    type: Date,
  },
  id_jenis_delegasi:  {
    type: Number,
  },
  jenis_delegasi_text: {
    type: String,
  } ,
  tgl_surat: {
    type: Date,
  } ,
  tgl_pengiriman: {
    type: Date,
  } ,
  nomor_surat: {
    type: String,
  } ,
  tgl_sidang: {
    type: Date,
  } ,
  namadokumen: {
    type: String,
  } ,
  document: {
    type: String,
  } ,
  document_size: {
    type: String,
  } ,
  document_mime: {
    type: String,
  } ,
  tgl_resi: {
    type: Date,
  } ,
  nomor_resi: {
    type: String,
  } ,
  biaya: {
    type: Number,
  } ,
  pihak: {
    type: String,
  } ,
  catatan: {
    type: String,
  } ,
  status_kirim: {
    type: Boolean,
  } ,
  agama_pihak: {
    type: String,
  } ,
  tempat_lahir_pihak: {
    type: String,
  } ,
  tanggal_lahir_pihak: {
    type: Date,
  } ,
  pendidikan_pihak: {
    type: String,
  } ,
  pekerjaan_pihak: {
    type: String,
  } ,
  alamat_pihak: {
    type: String,
  } ,
  created_at: {
    type: Date,
  } ,
  updated_at:  {
    type: Date,
  },
  created_by:  {
    type: String,
  },
  response_status: {
    type: Boolean,
    default: false
  }
})

const TRmodel = mongoose.model('tabayun_request', schema);
module.exports = TRmodel;
<template>
  <div role="main" class="container-fluid">
    <div class="row">
      <div class="col-lg-12">
        <table class="table table-striped table-inverse table-responsive">
          <thead class="thead-inverse">
            <tr>
              <th>No</th>
              <th>Asal</th>
              <th>Tujuan</th>
              <th>Nomor Perkara</th>
              <th>Jenis Delegasi</th>
              <th>Tanggal di Kirim</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout(context) {
    return "transit";
  },
};
</script>

<style>
.center {
  padding: 70px 0;
  text-align: center;
}
</style>
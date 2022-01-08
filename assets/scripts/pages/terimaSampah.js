$(document).ready(function () {
  $("#btn-tambah").click(function () {
    $(
      "#card-input-data"
    ).append(`<div class="data data-input d-flex gap-3 flex-wrap mb-3">
    <div class="data-sampah">
      <div class="title d-flex gap-2 align-items-start">
        <img src="/assets/images/icons/trash.svg" alt="" />
        <p class="title-berat">Jenis Sampah</p>
      </div>
      <select
        name="sampah"
        class="
          form-select
          select-sampah
          rounded-3
          form-control
          input-sampah
        "
      >
        <option value="">Mantan</option>
        <option value="">Plastik</option>
        <option value="">Kaca</option>
        <option value="">Aluminium</option>
      </select>
    </div>
    <div class="data-berat">
      <div class="title d-flex gap-2 align-items-start">
        <img src="/assets/images/icons/timbangan.svg" alt="" />
        <p class="title-berat">Total Berat (Kg)</p>
      </div>
      <input
        type="text"
        class="form-control input-berat"
        value=""
      />
    </div>
    <div class="data-coin">
      <div class="title d-flex gap-2 align-items-start">
        <img src="/assets/images/icons/coin.svg" alt="" />
        <p class="title-coin">Total Koin</p>
      </div>
      <input
        type="text"
        class="form-control input-coin"
        value=""
        disabled
      />
    </div>
    <div>
      <button type="button" class="btn-remove" >
        <i class="icon ion-md-close"></i>
      </button>
    </div>
  </div>`);
  });
});
setInterval(removeElement, 100);

function removeElement() {
  $(".btn-remove").click(function () {
    $(this).parent().parent().remove();
  });
}

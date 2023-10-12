<template>
  <form>
    <div class="mb-3">
      <label
        for="productName"
        class="form-label"
      >
        Ürün Adı
      </label>
      <input
        type="text"
        class="form-control"
        id="productName"
        aria-describedby="productNameHelp"
      >
      <div
        id="productNameHelp"
        class="form-text"
      >
        Buraya Ürün Adını Giriniz
      </div>
    </div>

    <div class="mb-3">
      <label
        for="quantity"
        class="form-label"
      >
        Adet
      </label>
      <input
        type="text"
        class="form-control"
        id="quantity"
        aria-describedby="quantityHelp"
      >
      <div
        id="quantityHelp"
        class="form-text"
      >
        Buraya Ürün Adeti Giriniz
      </div>
    </div>

    <div class="mb-3">
      <label
        for="amount"
        class="form-label"
      >
        Fiyat
      </label>
      <input
        type="text"
        class="form-control"
        id="amount"
        aria-describedby="amountHelp"
      >
      <div
        id="amountHelp"
        class="form-text"
      >
        Buraya Ürün Fiyatını Giriniz
      </div>
    </div>

    <div class="mb-3">
      <label
        for="info"
        class="form-label"
      >
        Açıklama
      </label>
      <textarea
        class="form-control"
        id="info"
        placeholder="Ürün için bir açıklama giriniz..."
      >
      </textarea>
    </div>

    <hr>

    <button
      type="submit"
      class="btn btn-success w-100"
    >
      Kaydet
    </button>
  </form>
</template>
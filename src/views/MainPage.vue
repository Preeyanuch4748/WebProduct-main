<script setup>
import ProductDetail from './ProductDetail.vue';
</script>
<template>
   <!--Coffee Prod Header-->
   <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-body-tertiary">
      <div class="col-md-6 p-lg-5 mx-auto my-5">
        <h5 class="display-3 fw-bold"> PK's Brew House ☕️</h5>
       <h5 class="fw-normal text-muted mb-3">"เพลิดเพลินกับความหลากหลายของรสชาติ"</h5>
        <div class="d-flex gap-3 justify-content-center lead fw-normal"></div>
      </div>
      <div class="product-device shadow-sm d-none d-md-block"></div>
      <div class="product-device product-device-2 shadow-sm d-none d-md-block"></div>
    </div> 
<br>
    <ProductDetail/>
  </template>
  


<style>
.container {
  max-width: 960px;
}

.icon-link > .bi {
  width: .75em;
  height: .75em;
}


.site-header {
  background-color: #03321bf6;
  -webkit-backdrop-filter: saturate(180%) blur(20px);
  backdrop-filter: saturate(180%) blur(20px);
}
.site-header a {
  color: #033310;
  transition: color .15s ease-in-out;
}
.site-header a:hover {
  color: #032908;
  text-decoration: none;
}


.product-device {
  position: absolute;
  right: 0;
  bottom: -5%;
  width: 300px;
  height: 740px;
  background-color: #043d25;
  border-radius: 21px;

}

.product-device-2 {
  left: 0;
  background-color: #04351f;
}


.flex-equal > * {
  flex: 1;
}
@media (min-width: 768px) {
  .flex-md-equal > * {
    flex: 1;
  }
}

</style>
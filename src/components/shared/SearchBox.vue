<template>
  <div class="search">
    <div class="form-group has-search">
      <span class="fa fa-search form-control-feedback search-icon"></span>
      <input type="text" class="form-control" placeholder="Search">
    </div>
  </div>
</template>

<style scoped>
.search {
  width: 50%;
  margin: 50px auto;
}
.has-search .form-control {
  padding-left: 2.375rem !important;
}
.has-search .form-control-feedback {
  position: absolute;
  z-index: 2;
  display: block;
  width: 1.375rem;
  height: 2.375rem;
  line-height: 2.375rem;
  text-align: center;
  pointer-events: none;
  color: #aaa;
  padding-left: 8px;
}
.search-icon {
 height: 1px;
 width:  1px;
}
</style>
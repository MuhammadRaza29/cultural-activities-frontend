<template>
  <div class='row'>
    <header class='main-header'>
      <div class='logo'>
        <img alt="Cultural Activities Logo" src="@/assets/images/logo.png">
      </div>
    </header>
    <main>
      <div class='col-md-12'>
        <h4>Cultural Activites In Berlin</h4>
      </div>

      <h6>
        All Activities
        <span class="stl-text-grays-6">
          (500)
        </span>
      </h6>
      <div class='col-md-12 filters'>
        <span class="dropdown">
          <a class="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
          </a>

          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </span>
        <span class="dropdown">
          <a class="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
          </a>

          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </span>
        <span class="dropdown">
          <a class="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
          </a>

          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </span>
      </div>
      <SearchBox />
      <hr>
    </main>
  </div>
</template>

<script>
  import SearchBox from '@/components/shared/SearchBox.vue'

  export default {
    components: {
      SearchBox,
    }
  }
</script>

<style scoped>
  .main-header {
    background-color: #fff;
    margin-bottom: 1%;
  }
  .logo {
    align-items: center !important;
  }
  .logo img {
    width: 250px;
  }
  main {
    background-color: #fff;
  }
  .filters {
    background-color: #fff;
  }
</style>

<template>
  <div class='row'>
    <header class='main-header'>
      <div class='logo'>
        <img alt="Cultural Activities Logo" src="@/assets/images/logo.png">
      </div>
    </header>
    <main>
      <div class='col-md-12 heading'>
        <h4>Cultural Activites In Berlin</h4>
      </div>
      <div class="row filters">
        <div class='offset-md-1 col-md-3'>
          <select class="form-control" name="template" v-model="selected">
            <option disabled value="">Select Web Source</option>
            <option v-for="(value, key) in web_sources()" v-bind:key="key" v-bind:value="value">
               {{ key.toUpperCase() }}
            </option>
          </select>
        </div>
        <div class='col-md-3'>
          <select class="form-control" name="template" v-model="selected">
            <option disabled value="">Select Web Source</option>
            <option v-for="(value, key) in web_sources()" v-bind:key="key" v-bind:value="value">
               {{ key.toUpperCase() }}
            </option>
          </select>
        </div>
        <SearchBox />
    </div>
      <hr>
    </main>
  </div>
</template>

<script>
  import SearchBox from '@/components/shared/SearchBox.vue'
  import { ACTIVITIES_MODULE, FETCH_WEB_SOURCES } from '@/store/CulturalActivities/types'
  import { mapActions, mapState } from 'vuex'

  export default {
    components: {
      SearchBox,
    },
    mounted() {
      this.fetchWebSources()
    },
    methods: {
      ...mapActions(ACTIVITIES_MODULE, {
        fetchWebSources: FETCH_WEB_SOURCES
      }),
      ...mapState(ACTIVITIES_MODULE, ['web_sources'])
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
    margin-top: 2%;
    margin-bottom: 2%;
    margin-left: 3%;
  }
  .heading {
    margin-top: 2%;
    margin-left: 2%;
  }
</style>

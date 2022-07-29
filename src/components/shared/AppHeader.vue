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
        <div class='offset-md-1 col-md-4'>
          <div class="col-md-12 grey">
            <h6>Search by Web Source</h6>
          </div>
          <select class="form-control" name="template" v-model="webSourceSelected">
            <option disabled value="">Select Web Source</option>
            <option v-for="(value, key) in webSources()" v-bind:key="key" v-bind:value="key">
               {{ key.toUpperCase() }}
            </option>
          </select>
        </div>
        <SearchBox />
        <div class='offset-md-1 col-md-12 date'>
          <div class="col-md-12 grey">
            <h6>Search by Date</h6>
          </div>
          <datepicker
            placeholder='Select Date'
            @input="dateSelected"
          ></datepicker>
        </div>
      </div>
      <hr>
    </main>
  </div>
</template>

<script>
  import SearchBox from '@/components/shared/SearchBox.vue'
  import { ACTIVITIES_MODULE, FETCH_WEB_SOURCES, FETCH_ACTIVITIES } from '@/store/CulturalActivities/types'
  import { mapActions, mapState } from 'vuex'
  import Datepicker from 'vuejs3-datepicker'

  export default {
    components: {
      SearchBox,
      Datepicker
    },
    data() {
      return {
        webSourceSelected: ''
      }
    },
    watch: {
      webSourceSelected: function(value) {
        if(value.length > 0){
          const searchParams = {
          search: {
            web_source: value
          }
        }
        this.fetchActivities(searchParams)
        }
      }
    },
    mounted() {
      this.fetchWebSources()
    },
    computed: {
     
    },
    methods: {
      ...mapActions(ACTIVITIES_MODULE, {
        fetchWebSources: FETCH_WEB_SOURCES,
        fetchActivities: FETCH_ACTIVITIES
      }),
      ...mapState(ACTIVITIES_MODULE, ['webSources']),
      dateSelected(date) {
        const searchParams = {
          search: {
            date: date.toDateString()
          }
        }
        this.fetchActivities(searchParams)
      }
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
  .date {
    margin-top: 1%;
  }
</style>

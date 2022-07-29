<template>
  <div class="col-md-5">
    <div class="col-md-12 grey">
      <h6>Search by Title</h6>
    </div>
    <div class="form-group has-search">
      <span class="fa fa-search form-control-feedback search-icon"></span>
      <input type="text" class="form-control" placeholder="Search By Title" v-on:input="searchByTitle">
    </div>
  </div>
</template>


<script>
  import { ACTIVITIES_MODULE, FETCH_ACTIVITIES } from '@/store/CulturalActivities/types'
  import { mapActions } from 'vuex'
  export default {
    methods: {
      ...mapActions(ACTIVITIES_MODULE, {
        fetchActivities: FETCH_ACTIVITIES
      }),
      searchByTitle: function(element) {
        const title = element.target.value
        if(title.length > 0) {
          const searchParams = {
            search: {
              title: title
            }
          }
          this.fetchActivities(searchParams)
        }
      }
    }
  }
</script>

<style scoped>
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
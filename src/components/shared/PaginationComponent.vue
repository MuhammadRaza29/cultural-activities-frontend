<template>
  <div class='pagination right'>
   <Paginate
    :page-count="totalPages()"
    :click-handler="clickCallback"
    :prev-text="'Prev'"
    :next-text="'Next'"
    :container-class="'className'"
  />
  </div>
</template>

<script>
  import Paginate from "vuejs-paginate-next"
  import { ACTIVITIES_MODULE, FETCH_ACTIVITIES } from '@/store/CulturalActivities/types'
  import { mapActions, mapState } from 'vuex'
  export default {
    components: {
      Paginate
    },
    methods: {
      ...mapActions(ACTIVITIES_MODULE, {
        fetchActivities: FETCH_ACTIVITIES
      }),
      ...mapState(ACTIVITIES_MODULE, ['totalActivities', 'totalPages']),
      clickCallback(pageNum) {
        const params = {
          page: pageNum
        }
        this.fetchActivities(params)
      }
    }
  }
</script>

<style lang="css">
  @import "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
  .pagination {
    margin-top: 2%;
    margin-bottom: 1%;
    float: right;
  }
  .pagination svg {
    height: 30px
  }
  .page-item {
    display:inline-block;
    cursor: pointer;
  }
  .disabled {
    cursor: not-allowed;
  }
  .pagination ul {
    overflow:hidden;
  }
  .right {
    position: absolute;
    right: 8%;
    width: auto;
    margin-botton: 2%
  }
  .table {
    margin-top: 4%;
  }
</style>

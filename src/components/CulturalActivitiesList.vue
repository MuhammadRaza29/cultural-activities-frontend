<template>
  <div class='row list'>
    <h6>
      All Activities
      <span class="stl-text-grays-6">
        ({{totalActivities()}})
      </span>
    </h6>
    <PaginationComponent />
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Title</th>
          <th scope="col">Picture</th>
          <th scope="col">Description</th>
          <th scope="col">Event Venue</th>
          <th scope="col">Event Date</th>
          <th scope="col">Event Time</th>
          <th scope="col">Category</th>
          <th scope="col">Detail Link</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for='activity in this.activities()' :key='activity.id'>
          <td>{{ activity.title }}</td>
          <td>
            <img :src="activity.picture_url" width='200' height="150" />
          </td>
          <td>{{ activity.description }}</td>
          <td>{{ activity.venue_name }}</td>
          <td>{{ activity.date }}</td>
          <td>{{ activity.time }}</td>
          <td>{{ activity.category }}</td>
          <td>
            <a :href="activity.url" target="_blank">View More Details</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import { ACTIVITIES_MODULE, FETCH_ACTIVITIES } from '@/store/CulturalActivities/types'
  import { mapActions, mapState } from 'vuex'
  import PaginationComponent from '@/components/shared/PaginationComponent.vue'

  export default {
    components: {
      PaginationComponent
    },
    mounted() {
      this.fetchActivities(1)
    },
    methods: {
      ...mapActions(ACTIVITIES_MODULE, {
        fetchActivities: FETCH_ACTIVITIES
      }),
      ...mapState(ACTIVITIES_MODULE, ['activities', 'totalActivities', 'totalPages'])
    }
  }

</script>

<style scoped>
  .list {
    background-color: #fff;
    padding: 2%;
  }
  td img {
    border-radius: 2%;
  }
</style>

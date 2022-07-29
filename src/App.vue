<template>
  <div class='main-app'>
    <Header />
    <CulturalActivitiesList />
  </div>
</template>

<script>
import Header from '@/components/shared/AppHeader.vue'
import CulturalActivitiesList from '@/components/CulturalActivitiesList.vue'

export default {
  name: 'App',
  components: {
    Header,
    CulturalActivitiesList
  }
}
</script>

<style>
  .main-app {
    background-color: #f3f2f2 !important;
    padding-left: 5%;
    padding-right: 5%;
    color: #352e27;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-size: 0.875rem;
    min-height: 800px;
  }
  .grey {
    color: #607162;
  }
  .center {
    text-align: center;
  }
</style>

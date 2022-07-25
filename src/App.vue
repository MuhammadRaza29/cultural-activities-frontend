<template>
  <div class='grey-background'>
    <Header />
    <CulturalActivities msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import Header from './components/shared/AppHeader.vue'
import CulturalActivities from './components/CulturalActivities.vue'

export default {
  name: 'App',
  components: {
    Header,
    CulturalActivities
  }
}
</script>

<style>
.grey-background {
  background-color: #f3f2f2 !important;
}
</style>

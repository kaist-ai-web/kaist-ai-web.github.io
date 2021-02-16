<template>
  <div id="app">
      <router-view 
        text="text"
      />
  </div>
</template>

<script>
import '@/styles/default.css'

export default {
    name: 'App',
    components: {

    },
    data() {
        return {
            text: 'Text data'
        }
    }
}
</script>

<style>

</style>

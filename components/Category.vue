<template>
  <div class="row justify-content-center mb-4">
    <div class="container">
      <!-- <select name="category" id="category">
        <option v-for="category in categories" value="category">{{category}}</option>
      </select> -->
      <ul class="d-flex flex-row justify-content-around">
        <li class="list-unstyled" v-for="category in categories">
          <NuxtLink :to="`/blog/category/${category}`">
          {{category}}
          </NuxtLink>
          </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        categories: ['Aphoristic','MOD', 'Misc', 'Meditation']
      }
    },
    // props: {
    //   articles: {
    //     type: Object,
    //     required: true
    //   }
    // },

    methods: {
      formatDate(date) {
        const options = {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }
        return new Date(date).toLocaleDateString('en', options)
      }
    },
  }

</script>

<style>

</style>

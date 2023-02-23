<script setup>
const { path } = useRoute()

const { data } = await useAsyncData(`content-${path}`, () => {
  return queryContent().where({ _path: path }).findOne()
})
</script>

<template>
  <div class="art-single">
    <section class="py-0">
      <div class="container-fluid px-lg-0">
        <div class="row no-gutters justify-content-center">
          <div class="col-xl-4 py-5">
            <h1 class="text-center"> {{ data.title }} </h1>
            <div class="text-center text-small mb-4"> {{ data.date }}</div>
            <div class="row">
              <div class="col">
                <div class="container mb-5">
                  <ExpandableImage :src="data.img" :alt="data.alt" />
                </div>
                <div class="container mb-5">
                  <strong>{{ data.description }}</strong>
                </div>
              </div>
            </div>
            <div class="container text-center mb-5">
              <!-- <ContentRenderer :value="data" /> -->
            </div>
            <ArtPrevNext :prev="prev" :next="next"></ArtPrevNext>
          </div>
        </div>
        <Social :social="data.social"></Social>
      </div>
    </section>
  </div>
</template>
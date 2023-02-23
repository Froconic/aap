<script setup>
const { path } = useRoute()

const { data } = await useAsyncData(`content-${path}`, () => {
  return queryContent().where({ _path: path }).findOne()
})
</script>

<template>
  <article>
    <section class=" text-light overlay min-vh-100 d-flex flex-column justify-content-end jarallax" data-jarallax data-speed="0.5">
      <img :src="data.img" :alt="data.alt" class="jarallax-img opacity-60" />
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-10 col-xl-8">
            <div class="d-flex justify-content-between align-items-center">
              <span class="badge badge-primary ">
                <Icon class="icon" :name="data.icon" />
              </span>
            </div>
            <h1>{{ data.title }}</h1>
            <div class="d-flex align-items-center mb-3">
              <NuxtLink :to="'/about'">
                <img :src="data.avatar" :alt="data.avatarAlt" class="avatar mr-2">
              </NuxtLink>
              <div>
                <NuxtLink :to="'/about'"></NuxtLink>
                 <div class="text-small text-muted">{{ data.date }}</div>
              </div>
            </div>
            <p class="lead">{{ data.description }}</p>
          </div>
        </div>
      </div>
    </section>
    <section class="py-5 px-5" data-reading-position>
        <div class="container lh-lg">
          <div class="row justify-content-center">
            <div class="col-xl-7 col-lg-8 col-md-10">
              <ContentRenderer :value='data' />
              <Social :social="data.social"></Social>
              <!-- <Related :related="article.related" ></Related> -->
              <PrevNext :prev="prev" :next="next"></PrevNext>
            </div>
          </div>
        </div>
      </section>
  </article>
</template>

<template>
  <div>
      <section class="text-light bg-primary" data-speed="0.5" data-overlay>
        <!-- <img src="../assets/img/misc/BOG line.svg" alt="" class="jarallax-img opacity-50"> -->
        <div class="container pb-6">
          <div class="row justify-content-center text-center">
            <div class="col-xl-5 col-lg-6 col-md-8">
              <h1 class="display-3"><span>RIVRE</span><br><span>OF</span><br><span>SOMA</span></h1>
              <p class="lead ">My thoughts on <br>Magick | Mystery | Mysticism</p>
          </div>
        </div>
        </div>
        <!-- <div class="divider">
        <img src="../assets/img/dividers/divider-2.svg" alt="graphical divider" data-inject-svg />
      </div> -->
      </section>
      <section id="blog-posts" class=" blog-posts">
        <div class="container">
          <div class="row justify-content-center mb-4">
            <div class="col col-md-auto">
              <!-- <Search></Search> -->
              <!-- <category></category> -->
              <BlogPosts />
            </div>
          </div>
        </div>
      </section>
    </div>
<ul>
  <li v-for="post in posts" :key="post.id">
    <NuxtLink :to="post._path">
      {{ post.title }}
      <slot />
    </NuxtLink>
  </li>
</ul>

</template>
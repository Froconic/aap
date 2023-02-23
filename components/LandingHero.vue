<template>
  <section>
    <div class="landing-hero">
      <div class="container mt-lg-1">
        <div class="row">
          <div class="col text-center">
            <h1 class="display-1">
              <!-- <img v-if="$colorMode.preference === 'monochrome-dark'" class="w-50 hero-logo" src="/logo-white.svg" alt="Logo"> -->
              <!-- <img v-else id="hero-logo" class="w-50 hero-logo" src="/logo.svg" alt="Logo"> -->
              <img id="hero-logo" class="w-50 hero-logo" src="/logo.svg" alt="Logo" />
              <br>Akira Allen <br> Presents
            </h1>
            <div class="my-4">
              <div class="row menu-row">
                <div class="col-lg-4 col-md-4 col-sm-5">
                  <NuxtLink class="h2 landing-link accent" to="/art">Art</NuxtLink>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-5">
                  <NuxtLink class="h2 landing-link accent" to="/blog">Blog</NuxtLink>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-5">
                  <NuxtLink class="h2 landing-link accent" to="/coming-soon">Body</NuxtLink>
                </div>
                <div class="d-sm-none w-100"></div>
                <div class="col-lg-4 col-md-4 col-sm-5">
                  <NuxtLink class="h2 landing-link accent" to="/coming-soon">Code</NuxtLink>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-5">
                  <NuxtLink class="h2 landing-link accent" to="/coming-soon">Design</NuxtLink>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-5">
                  <a class="h2 landing-link accent" href="https://blancanvas.art/events">Events</a>
                </div>
                <div class="col-sm-12">
                  <NuxtLink class="h2 landing-link accent" to="/coming-soon">Readings</NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default { 
  name: 'LandingHero',
  data() {
    return {
      colors: ['normal', 'monochrome-light', 'monochrome-dark', 'light-blue', 'dark-blue', 'green', 'yellow', 'system']
    }
  },
  methods: {
    getClasses(color) {
      // Does not set classes on ssr preference is system (because we know them on client-side)
      if (this.$colorMode.unknown) {
        return {}
      }
      return {
        preferred: color === this.$colorMode.preference,
        selected: color === this.$colorMode.value
      }
    },
  },
}
</script>

<style scoped>

@media (max-width:768px) {
  .display-1 {
    font-size: 8rem;
  }
}

@media (max-width:576px) {
  .display-1 {
    font-size: 6rem;
  }
}
</style>

<style>

/* .menu-row .col {
  border-right: double 10px black;
  border-left: double 10px black;
  border-radius: 15px;
} */

  .landing-link {
    font-size: 3.5rem;
    font-style: bold;
  }

  .monochrome-dark-mode .img .hero-logo {
    opacity: 0;

  }

  .hero-logo {
    background-image: url("assets/img/logos/logo-white.svg");
  }

  @media (max-width: 768px) {
    .landing-link {
      
    }
  }


</style>
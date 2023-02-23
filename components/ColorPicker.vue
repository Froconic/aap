<template>
  <div class="color-section">
    <ColorScheme class="d-none" placeholder="..." tag="span">
      <b class="d-none">{{ $colorMode.preference }}</b>
      <span class="d-none" v-if="$colorMode.preference === 'system'">(<i>{{ $colorMode.value }}</i> mode detected)</span>
    </ColorScheme>
    <div id="color-menu" class="color-menu">
      <a class="floating-btn" onclick="document.getElementById('color-menu').classList.toggle('active');">
        <Icon class="color-icon" name="bi:sun"></Icon>
        <menu class="items-wrapper">
          <ul>
            <a v-for="color in colors" :value="color" :key="color" class="menu-item" @click="$colorMode.preference = color"></a>
          </ul>
        </menu>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    components: {},
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
    }
  }

</script>

<style>




  .color-scheme {
    display: none;
  }

  .color-menu {
    position: fixed;
    bottom: 1em;
    right: 1em;
    z-index: 1000;
  }

  .color-menu .floating-btn {
    display: block;
    width: 3.5em;
    height: 3.5em;
    border-radius: 50%;
    background-color: #fff;
    -webkit-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 1);
    -moz-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 1);
    box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 1);
    color: hsl(0, 0%, 100%);
    text-align: center;
    line-height: 3.9;
    cursor: pointer;
    outline: 0;
  }

  .color-menu:after {
    display: block;
    content: ' ';
    width: 3.5em;
    height: 3.5em;
    border-radius: 50%;
    position: absolute;
    top: 0em;
    right: 0;
    z-index: -2;
    background-color: #fff;
    transition: all .3s ease;
    border: #000000 solid 1px;
  }

  .color-menu.active:after {
    -webkit-box-shadow: 10px 10px 20px 10px rgba(0, 0, 0, 1);
    -moz-box-shadow: 10px 10px 20px 10px rgba(0, 0, 0, 1);
    box-shadow: 10px 10px 20px 10px rgba(0, 0, 0, 1);
    transition: box-shadow 1s ease;
  }

  .color-menu.active .floating-btn {
    box-shadow: inset 0 0 30px hsla(0, 0%, 0%, .3);
  }

  .color-menu .floating-btn:active {
    box-shadow: 0 4px 80px 0 hsla(0, 0%, 0%, .4);
  }

  .color-menu .floating-btn i {
    font-size: 1.3em;
    transition: transform .2s;
  }

  .color-menu.active .floating-btn i {
    transform: rotate(-45deg);
  }

  .color-menu.active:after {
    transform: scale3d(5.5, 5.5, 1);
    transition-timing-function: cubic-bezier(.68, 1.55, .265, 1);
    background-color: #fff;
  }

  .color-menu .items-wrapper {
    padding: 0;
    margin: 0;
  }

  .color-menu .menu-item {
    position: absolute;
    top: 0em;
    right: .5em;
    z-index: -1;
    display: block;
    text-decoration: none;
    color: hsl(0, 0%, 100%);
    font-size: 1em;
    width: 2em;
    height: 2em;
    border-radius: 50%;
    border: #808080 solid 1px;
    text-align: center;
    line-height: 3;
    background-color: hsla(0, 0%, 0%, .1);
    transition: transform .3s ease, background .2s ease;
  }

  .color-menu.active .menu-item {
    transition: opacity ease 1s, transform ease 1s;
  }

  .color-menu .menu-item:hover {
    background-color: hsla(0, 0%, 0%, .3);
  }

  .color-menu.active .menu-item {
    transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .color-menu .menu-item:nth-child(1) {
    top: 0em;
    right: .5em;
    background-color: #808080;

  }


  .color-menu.active .menu-item:nth-child(1) {
    transform: translate3d(1.5em, -7.5em, 0);
    background-color: #808080;
  }

  .color-menu.active .menu-item:nth-child(2) {
    background-color: #ffffff;
    transform: translate3d(-0.8em, -7.5em, 0);
  }

  .color-menu.active .menu-item:nth-child(3) {
    background-color: #000000;
    transform: translate3d(-2.9em, -7em, 0);
  }

  .color-menu.active .menu-item:nth-child(4) {
    background-color: #A2A2F5;
    transform: translate3d(-5em, -5.9em, 0);
  }

  .color-menu.active .menu-item:nth-child(5) {
    background-color: #A2A2F5;
    transform: translate3d(-6.9em, -4em, 0);
  }


  .color-menu.active .menu-item:nth-child(6) {
    background-color: #84EBB2;
    transform: translate3d(-8em, -1.4em, 0);
  }


  .color-menu.active .menu-item:nth-child(7) {
    background-color: #FFCB70;
    transform: translate3d(-8.2em, 1.5em, 0);
  }

  /* NORMAL MODE */

  .normal-mode body {
    background-color: #808080;
    color: #fff;
  }

  .normal-mode .navbar {
    background-color: #808080;
    color: #fff;
  }

  .normal-mode .navbar-dark .navbar-brand {
    color: #fff;
  }

  .normal-mode .navbar-dark .nav-item a {
    color: #fff
  }

  .normal-mode .navbar-dark .navbar-brand:hover {
    opacity: .5;
  }

  .normal-mode .navbar-dark .nav-item a:hover {
    opacity: .5;
  }

  .normal-mode .landing-link {
    color: #000;
  }

  .normal-mode .landing-link:hover {
    color: #fff;
  }

  .normal-mode #footer {
    background-color: #808080;
    color: #fff;
  }

  .normal-mode .badge {
    color: #fff;
    background-color: #000
  }


  .normal-mode h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: #fff
  }

  .normal-mode .card-body {
    background-color: #fff;
    color: #000;
    -webkit-box-shadow: 15px 15px 5px 0px rgba(0, 0, 0, 1);
    -moz-box-shadow: 15px 15px 5px 0px rgba(0, 0, 0, 1);
    box-shadow: 15px 15px 5px 0px rgba(0, 0, 0, 1);
  }

  .normal-mode .form-group label {
    color: #fff;
  }

  .normal-mode .form-group textarea {
    background-color: #fff;
    -webkit-box-shadow: 15px 15px 5px 0px rgba(0, 0, 0, 1);
    -moz-box-shadow: 15px 15px 5px 0px rgba(0, 0, 0, 1);
    box-shadow: 15px 15px 5px 0px rgba(0, 0, 0, 1);
  }

  .normal-mode .form-group input {
    background-color: #fff;
    -webkit-box-shadow: 15px 15px 5px 0px rgba(0, 0, 0, 1);
    -moz-box-shadow: 15px 15px 5px 0px rgba(0, 0, 0, 1);
    box-shadow: 15px 15px 5px 0px rgba(0, 0, 0, 1);
  }

  .normal-mode .color-menu .floating-btn,
  .color-menu:after {
    background-color: #A2A2F5;
  }

  .normal-mode .art-title {
    color: #fff;
  }

  .normal-mode .btn-primary:focus {
    background-color: #A2A2F5;
    color: #000;
  }

  .normal-mode .btn-primary-2:focus {
    color: #A2A2F5;
    background-color: #000;
  }

  .normal-mode .icon * {
    fill: #A2A2F5;
  }

  .normal-mode .contact-icon * {
    fill: #A2A2F5;
  }


  .normal-mode .color-icon * {
    fill: #fff;
  }

  .normal-mode .nav-menu {
    background: #808080;
    opacity: .8;
  }

  .normal-mode .copyright {
    color: #fff;
  }

  .normal-mode h1.card-title {
    color: #000;
  }

  /* Monochrome light MODE */

  .monochrome-light-mode body {
    background-color: transparent;
    color: #000;
  }

  .monochrome-light-mode section {
    background-color: #fff;
    color: #000;
  }

  .monochrome-light-mode footer {
    background-color: #fff;
    color: #000;
  }

  .monochrome-light-mode .text-muted {
    color: #000;
  }


  .monochrome-light-mode .navbar {
    background-color: #fff;
  }

  .monochrome-light-mode .navbar-dark .navbar-brand {
    color: #000;
  }

  .monochrome-light-mode .navbar-dark .navbar-brand:hover {
    color: #808080;
  }

  .monochrome-light-mode .navbar-dark .navbar-brand:focus {
    color: #000;
  }


  .monochrome-light-mode .navbar-dark .nav-item a {
    color: #000
  }

  .monochrome-light-mode .navbar-dark .nav-item a:hover {
    opacity: .5;
  }

  .monochrome-light-mode .navbar-nav .nav-link {
    color: #000;
  }

  .monochrome-light-mode .navbar-nav .nav-link:hover {
    color: #808080;
  }

  .monochrome-light-mode .landing-link {
    color: #000;
  }

  .monochrome-light-mode .landing-link:hover {
    color: #808080;
  }

  .monochrome-light-mode #footer {
    background-color: #fff;
    color: #000;
  }


  .monochrome-light-mode .icon {
    /* fill: #000; */
    color: #000;
  }

  .monochrome-light-mode .badge {
    color: #fff;
    background-color: #000
  }


  .monochrome-light-mode h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: #000
  }

  .monochrome-light-mode .card-body {
    background-color: #000;
    color: #fff;
    -webkit-box-shadow: 15px 15px 5px 0px rgba(0, 0, 0, 1);
    -moz-box-shadow: 15px 15px 5px 0px rgba(0, 0, 0, 1);
    box-shadow: 15px 15px 5px 0px rgba(0, 0, 0, 1);
  }

  .monochrome-light-mode .card-body h1 {
    color: #fff;
  }

  .monochrome-light-mode .form-group label {
    color: #000;
  }

  .monochrome-light-mode .form-group ::placeholder {
    color: #fff;
  }


  .monochrome-light-mode .form-group textarea {
    background-color: #000;
    -webkit-box-shadow: 15px 15px 5px 0px rgba(0, 0, 0, 1);
    -moz-box-shadow: 15px 15px 5px 0px rgba(0, 0, 0, 1);
    box-shadow: 15px 15px 5px 0px rgba(0, 0, 0, 1);
  }

  .monochrome-light-mode .form-group input {
    background-color: #000;
    -webkit-box-shadow: 15px 15px 5px 0px rgba(0, 0, 0, 1);
    -moz-box-shadow: 15px 15px 5px 0px rgba(0, 0, 0, 1);
    box-shadow: 15px 15px 5px 0px rgba(0, 0, 0, 1);
  }

  .monochrome-light-mode .btn-primary {
    background-color: #000;
    color: #fff;
    border: #000 solid 1px;
  }

  .monochrome-light-mode .btn-primary:hover {
    background-color: #fff;
    color: #000;
  }

  .monochrome-light-mode .btn-primary:focus {
    background-color: #fff;
    color: #000;
  }

.monochrome-light-mode a.btn.btn-primary.btn-lg {
  background-color: #fff;
    color: #000;
    border: #fff solid 1px;
}

.monochrome-light-mode a.btn.btn-primary.btn-lg:hover {
  background-color: #000;
  color: #fff;
}

  .monochrome-light-mode .btn-primary-2 {
    background-color: #fff;
    color: #000;
    border: #000 solid 1px;
  }

  .monochrome-light-mode .btn-primary-2:hover {
    color: #fff;
    background-color: #000;
  }

  .monochrome-light-mode .btn-primary-2:focus {
    background-color: #fff;
    color: #000;
  }



  .monochrome-light-mode #contact {
    background-color: transparent;
    color: #000;
    border: #000 solid 1px;
  }

  .monochrome-light-mode #contact:hover {
    color: #fff;
    background-color: #000;
  }

  .monochrome-light-mode a {
    color: #000;
  }

  .monochrome-light-mode li a {
    color: #000;
  }

  .monochrome-light-mode li a:hover {
    color: #808080;
  }

  .monochrome-light-mode a.category-link {
    color: #000;
  }

  .monochrome-light-mode a.category-link:hover {
    color: #808080;
  }

  .monochrome-light-mode .color-menu .floating-btn,
  .color-menu:after {
    background-color: #fff;
  }

  .monochrome-light-mode .art-title {
    color: #000;
  }

  .monochrome-light-mode .contact-icon * {
    fill: #000;
  }

  .monochrome-light-mode .icon * {
    fill: #000;
  }


  .monochrome-light-mode .color-icon * {
    fill: #fff;
  }

  .monochrome-light-mode .nav-menu {
    background: #fff;
    opacity: .8;

  }

  .monochrome-light-mode .page-link {
    color: #000;
    background: #fff;
  }

  .monochrome-light-mode .page-link:hover {
    color: #fff;
    background: #000;
  }

  /* Monochrome dark MODE */


  .monochrome-dark-mode body {
    color: #fff;
    background-color: #000;
  }

  .monochrome-dark-mode .navbar {
    background-color: #000;
  }

  .monochrome-dark-mode .navbar-dark .navbar-brand {
    color: #fff;
  }

  .monochrome-dark-mode .navbar-dark .navbar-brand:hover {
    opacity: .5;
  }

  .monochrome-dark-mode .navbar-dark .nav-item a {
    color: #fff
  }

  .monochrome-dark-mode .navbar-dark .nav-item a:hover {
    opacity: .5;
  }


  .monochrome-dark-mode .navbar-nav .nav-link {
    color: #fff;
  }

  .monochrome-dark-mode .navbar-nav .nav-link:hover {
    color: #808080;
  }

  .monochrome-dark-mode .navbar-nav .nav-link:focus {
    color: #000;
  }

  .monochrome-dark-mode #footer {
    color: #fff;
    background-color: #000;
  }


  .monochrome-dark-mode .icon {
    /* fill: #000; */
    color: #fff;
  }

  .monochrome-dark-mode .badge {
    background-color: #fff;
    color: #000
  }

  .monochrome-dark-mode h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: #fff
  }

  .monochrome-dark-mode .card-body {
    background-color: #000;
    color: #fff;
    border: #fff solid 2px;
    -webkit-box-shadow: -1px -1px 10px 5px rgb(144, 144, 144);
    -moz-box-shadow: -1px -1px 10px 5px rgb(144, 144, 144);
    box-shadow: -1px -1px 10px 5px rgb(144, 144, 144);
  }

  .monochrome-dark-mode .form-group label {
    color: #fff;
  }

  .monochrome-dark-mode .form-group ::placeholder {
    color: #fff;
  }


  .monochrome-dark-mode .form-group textarea {
    background-color: #000;
    -webkit-box-shadow: -1px -1px 10px 5px rgb(144, 144, 144);
    -moz-box-shadow: -1px -1px 10px 5px rgb(144, 144, 144);
    box-shadow: -1px -1px 10px 5px rgb(144, 144, 144);
    border: #fff solid 1px;
  }

  .monochrome-dark-mode .form-group input {
    background-color: #000;
    -webkit-box-shadow: -1px -1px 10px 5px rgb(144, 144, 144);
    -moz-box-shadow: -1px -1px 10px 5px rgb(144, 144, 144);
    box-shadow: -1px -1px 10px 5px rgb(144, 144, 144);
    border: #fff solid 1px;

  }

  .monochrome-dark-mode a {
    color: #fff
  }

  .monochrome-dark-mode a:hover {
    color: #808080
  }

  .monochrome-dark-mode a.category-link {
    color: #fff;
  }

  .monochrome-dark-mode .btn-primary-2 {
    background-color: #000;
    color: #fff;
    border: #fff solid 1px;
  }

  .monochrome-dark-mode .btn-primary-2:hover {
    background-color: #fff;
    color: #000;
  }

  .monochrome-dark-mode .btn-primary-2:focus {
    background-color: #fff;
    color: #000;
  }



  .monochrome-dark-mode .btn-primary {
    background-color: #fff;
    color: #000;
    border: #fff solid 1px;
  }

  .monochrome-dark-mode .btn-primary:hover {
    background-color: #000;
    color: #fff;
  }

  .monochrome-dark-mode .btn-primary:focus {
    background-color: #000;
    color: #fff;
    border: #fff solid 1px;
  }


  .monochrome-dark-mode #contact {
    background-color: transparent;
    color: #fff;
    border: #fff solid 1px;
  }

  .monochrome-dark-mode #contact:hover {
    background-color: #fff;
    color: #000;
  }

  .monochrome-dark-mode .color-menu .floating-btn,
  .color-menu:after {
    background-color: #fff;
  }

  .monochrome-dark-mode .color-menu.active:after {
    -webkit-box-shadow: -8px -8px 30px 0px rgba(255, 255, 255, 0.75);
    -moz-box-shadow: -8px -8px 30px 0px rgba(255, 255, 255, 0.75);
    box-shadow: -8px -8px 30px 0px rgba(255, 255, 255, 0.75);
    transition: box-shadow 1s ease;
  }

  .monochrome-dark-mode .art-title {
    color: #fff;
  }

  .monochrome-dark-mode .contact-icon * {
    fill: #fff;
  }

  .monochrome-dark-mode .btn-outline-primary:hover * {
    fill: #fff;
  }

  .monochrome-dark-mode .contact-icon:hover * {
    fill: #000;
  }


  .monochrome-dark-mode .icon * {
    fill: #fff;
  }


  .monochrome-dark-mode .color-icon * {
    fill: #000;
  }

  .monochrome-dark-mode .nav-menu {
    background: #000;
    opacity: .8;

  }

  .monochrome-dark-mode .page-link {
    color: #000;
  }

  .monochrome-dark-mode .page-link:hover {
    color: #808080;
  }


  /* Light blue MODE */


  .light-blue-mode body {
    background-color: #A2A2F5;
    color: #fff;
  }

  .light-blue-mode .navbar {
    background-color: #A2A2F5;
  }

  .light-blue-mode .navbar-dark .navbar-brand {
    color: #fff;
  }

  .light-blue-mode .navbar-dark .navbar-brand:hover {
    opacity: .5;
  }

  .light-blue-mode .navbar-dark .nav-item a {
    color: #fff
  }

  .light-blue-mode .navbar-dark .nav-item a:hover {
    opacity: .5;
  }

  .light-blue-mode li a {
    color: #fff;
  }

  .light-blue-mode li a:hover {
    color: #000;
  }

  .light-blue-mode a.category-link {
    color: #A2A2F5;
  }

  .light-blue-mode a.category-link:hover {
    color: #000;
  }

  .light-blue-mode a {
    color: #000;
  }


  .light-blue-mode .navbar-nav .nav-link {
    color: #fff;
  }

  .light-blue-mode .navbar-nav .nav-link:hover {
    color: #000;
  }

  .light-blue-mode .navbar-nav .nav-link:focus {
    color: #A2A2F5;
  }

  .light-blue-mode .landing-link {
    color: #fff
  }

  .light-blue-mode .landing-link:hover {
    color: #000
  }

  .light-blue-mode #footer {
    background-color: #A2A2F5;
  }


  .light-blue-mode .icon {
    /* fill: #000; */
    color: #fff;
  }

  .light-blue-mode .badge {
    color: #fff;
    background-color: #A2A2F5
  }


  .light-blue-mode h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: #fff
  }

  .light-blue-mode .card-body {
    background-color: #fff;
    color: #A2A2F5;
    border: #fff solid 2px;
    -webkit-box-shadow: -1px -1px 10px 5px rgba(255, 255, 255, 0.5);
    -moz-box-shadow: -1px -1px 10px 5px rgba(255, 255, 255, 0.5);
    box-shadow: -1px -1px 10px 5px rgba(255, 255, 255, 0.5);
  }

  .light-blue-mode .card-body h1 {
    color: #A2A2F5
  }

  .light-blue-mode .form-group label {
    color: #fff;
  }

  .light-blue-mode .form-group ::placeholder {
    color: #A2A2F5;
  }


  .light-blue-mode .form-group textarea {
    background-color: #fff;
    color: #A2A2F5;
    -webkit-box-shadow: -1px -1px 10px 5px rgba(255, 255, 255, 0.5);
    -moz-box-shadow: -1px -1px 10px 5px rgba(255, 255, 255, 0.5);
    box-shadow: -1px -1px 10px 5px rgba(255, 255, 255, 0.5);
    border: #fff solid 2px;
  }

  .light-blue-mode .form-group input {
    background-color: #fff;
    color: #A2A2F5;
    -webkit-box-shadow: -1px -1px 10px 5px rgba(255, 255, 255, 0.5);
    -moz-box-shadow: -1px -1px 10px 5px rgba(255, 255, 255, 0.5);
    box-shadow: -1px -1px 10px 5px rgba(255, 255, 255, 0.5);
    border: #fff solid 2px;
  }

  .light-blue-mode .btn-primary {
    background-color: #fff;
    color: #A2A2F5;
  }

  .light-blue-mode .btn-primary:hover {
    background-color: #A2A2F5;
    color: #fff;
  }

  .light-blue-mode .btn-primary:focus {
    background-color: #A2A2F5;
    color: #fff;
    border: #fff solid 1px;
  }


  .light-blue-mode .btn-primary-2 {
    color: #fff;
    background-color: #A2A2F5;
    border: #fff solid 1px;
  }

  .light-blue-mode .btn-primary-2:hover {
    color: #A2A2F5;
    background-color: #fff;
  }

  .light-blue-mode .btn-primary-2:focus {
    background-color: #A2A2F5;
    color: #fff;
    border: #fff solid 1px;
  }



  .light-blue-mode #contact {
    background-color: transparent;
    color: #fff;
    border: #fff solid 1px;
  }

  .light-blue-mode #contact:hover {
    background-color: #fff;
    color: #A2A2F5;
  }

  .light-blue-mode .color-menu .floating-btn {
    background-color: #fff;
  }

  .light-blue-mode .color-menu:after {
    background-color: #A2A2F5;
  }

  .light-blue-mode .art-title {
    color: #fff;
  }

  .light-blue-mode .contact-icon * {
    fill: #fff;
  }

  .light-blue-mode .btn-outline-primary:hover * {
    fill: #A2A2F5;
  }


  .light-blue-mode .icon * {
    fill: #fff;
  }


  .light-blue-mode .color-icon * {
    fill: #A2A2F5;
  }

  .light-blue-mode .nav-menu {
    background: #A2A2F5;
    opacity: .8;
  }

  .light-blue-mode .page-link {
    color: #A2A2F5;
  }

  .light-blue-mode .page-link:hover {
    color: #74888D;
  }

  /* Dark blue MODE */

  .dark-blue-mode body {
    background-color: #A2A2F5;
    color: #000;
  }

  .dark-blue-mode .navbar {
    background-color: #A2A2F5;
  }

  .dark-blue-mode .navbar-dark .navbar-brand {
    color: #000;
  }

  .dark-blue-mode .navbar-dark .navbar-brand:hover {
    opacity: .5s;
    ;
  }

  .dark-blue-mode .navbar-dark .nav-item a {
    color: #000;
  }

  .dark-blue-mode .navbar-dark .nav-item a:hover {
    opacity: .5s;
  }

  .dark-blue-mode li a {
    color: #000;
  }

  .dark-blue-mode li a:hover {
    color: #fff;
  }

  .dark-blue-mode a.category-link {
    color: #A2A2F5;
  }

  .dark-blue-mode a.category-link:hover {
    color: #fff;
  }

  .dark-blue-mode a {
    color: #000;
  }


  .dark-blue-mode .navbar-nav .nav-link {
    color: #000;
  }

  .dark-blue-mode .navbar-nav .nav-link:hover {
    color: #fff;
  }

  .dark-blue-mode .navbar-nav .nav-link:focus {
    color: #A2A2F5;
  }

  .dark-blue-mode .landing-link {
    color: #000
  }

  .dark-blue-mode .landing-link:hover {
    color: #fff
  }

  .dark-blue-mode #footer {
    background-color: #A2A2F5;
  }


  .dark-blue-mode .icon {
    /* fill: #000; */
    color: #000;
  }

  .dark-blue-mode .badge {
    color: #000;
    background-color: #A2A2F5
  }


  .dark-blue-mode h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: #000
  }

  .dark-blue-mode .card-body {
    background-color: #000;
    color: #A2A2F5;
    border: #fff solid 2px;
    -webkit-box-shadow: 15px 15px 5px 0px rgba(0, 0, 0, 1);
    -moz-box-shadow: 15px 15px 5px 0px rgba(0, 0, 0, 1);
    box-shadow: 15px 15px 5px 0px rgba(0, 0, 0, 1);
  }

  .dark-blue-mode .card-body h1 {
    color: #A2A2F5
  }

  .dark-blue-mode .form-group label {
    color: #000;
  }

  .dark-blue-mode .form-group ::placeholder {
    color: #A2A2F5;
  }


  .dark-blue-mode .form-group textarea {
    background-color: #000;
    color: #A2A2F5;
    -webkit-box-shadow: 15px 15px 5px 0px rgba(0, 0, 0, 1);
    -moz-box-shadow: 15px 15px 5px 0px rgba(0, 0, 0, 1);
    box-shadow: 15px 15px 5px 0px rgba(0, 0, 0, 1);
    border: #fff solid 2px;
  }

  .dark-blue-mode .form-group input {
    background-color: #000;
    color: #A2A2F5;
    -webkit-box-shadow: 15px 15px 5px 0px rgba(0, 0, 0, 1);
    -moz-box-shadow: 15px 15px 5px 0px rgba(0, 0, 0, 1);
    box-shadow: 15px 15px 5px 0px rgba(0, 0, 0, 1);
    border: #fff solid 2px;
  }

  .dark-blue-mode .btn-primary {
    background-color: #000;
    color: #A2A2F5;
  }

  .dark-blue-mode .btn-primary:hover {
    background-color: #A2A2F5;
    color: #000;
  }

  .dark-blue-mode .btn-primary:focus {
    background-color: #A2A2F5;
    color: #fff;
    border: #000 solid 1px;
  }


  .dark-blue-mode .btn-primary-2 {
    color: #000;
    background-color: #A2A2F5;
    border: #000 solid 1px;
  }

  .dark-blue-mode .btn-primary-2:hover {
    color: #A2A2F5;
    background-color: #000;
  }

  .dark-blue-mode .btn-primary-2:focus {
    background-color: #A2A2F5;
    color: #000;
    border: #000 solid 1px;
  }



  .dark-blue-mode #contact {
    background-color: transparent;
    color: #000;
    border: #000 solid 1px;
  }

  .dark-blue-mode #contact:hover {
    background-color: #000;
    color: #A2A2F5;
  }

  .dark-blue-mode .color-menu .floating-btn {
    background-color: #000;
  }

  .dark-blue-mode .color-menu:after {
    background-color: #A2A2F5;
  }

  .dark-blue-mode .art-title {
    color: #000;
  }

  .dark-blue-mode .contact-icon * {
    fill: #000;
  }

  .dark-blue-mode .btn-outline-primary:hover * {
    fill: #A2A2F5;
  }


  .dark-blue-mode .icon * {
    fill: #000;
  }


  .dark-blue-mode .color-icon * {
    fill: #A2A2F5;
  }

  .dark-blue-mode .nav-menu {
    background: #A2A2F5;
    opacity: .8;
  }

  .dark-blue-mode .page-link {
    color: #A2A2F5;
  }

  .dark-blue-mode .page-link:hover {
    color: #808080;
  }

  /* TODO Left off finishing the green and yellow modes */
  /* Green MODE */


  .green-mode body {
    background-color: #84EBB2;
    color: #000;
  }

  .green-mode .navbar {
    background-color: #84EBB2;
  }

  .green-mode .navbar-dark .navbar-brand {
    color: #000;
  }

  .green-mode .navbar-dark .navbar-brand:hover {
    opacity: .5;
    ;
  }

  .green-mode .navbar-dark .nav-item a {
    color: #000
  }

  .green-mode .navbar-dark .nav-item a:hover {
    opacity: .5;
  }

  .green-mode li a {
    color: #000;
  }

  .green-mode li a:hover {
    color: #fff;
  }

  .green-mode a.category-link {
    color: #84EBB2;
  }

  .green-mode a.category-link:hover {
    color: #fff;
  }

  .green-mode .navbar-nav .nav-link {
    color: #000;
  }

  .green-mode .navbar-nav .nav-link:hover {
    color: #74888D;
  }

  .green-mode a {
    color: #000;
  }


  .green-mode #footer {
    background-color: #84EBB2;
  }

  .green-mode .icon {
    /* fill: #000; */
    color: black;
  }

  .green-mode .badge {
    color: #000;
    background-color: #84EBB2;
  }


  .green-mode h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: #000
  }

  .green-mode .card-body {
    background-color: #000;
    color: #fff;
    border: #84EBB2 solid 2px;
    -webkit-box-shadow: 15px 15px 5px 0px rgba(0, 0, 0, 1);
    -moz-box-shadow: 15px 15px 5px 0px rgba(0, 0, 0, 1);
    box-shadow: 15px 15px 5px 0px rgba(0, 0, 0, 1);

  }

  .green-mode .form-group label {
    color: #000;
  }

  .green-mode .form-group ::placeholder {
    color: #84EBB2;
  }

  .green-mode .form-group textarea {
    background-color: #000;
    color: #84EBB2;
    -webkit-box-shadow: 15px 15px 5px 0px rgba(0, 0, 0, 1);
    -moz-box-shadow: 15px 15px 5px 0px rgba(0, 0, 0, 1);
    box-shadow: 15px 15px 5px 0px rgba(0, 0, 0, 1);

    border: #84EBB2 solid 2px;
  }

  .green-mode .form-group input {
    background-color: #000;
    color: #84EBB2;
    -webkit-box-shadow: 15px 15px 5px 0px rgba(0, 0, 0, 1);
    -moz-box-shadow: 15px 15px 5px 0px rgba(0, 0, 0, 1);
    box-shadow: 15px 15px 5px 0px rgba(0, 0, 0, 1);

    border: #84EBB2 solid 2px;
  }

  .green-mode .btn-primary {
    background-color: #000;
    color: #84EBB2;
    border: #000 solid 1px;
  }

  .green-mode .btn-primary:hover {
    background-color: #84EBB2;
    color: #000;
  }

  .green-mode .btn-primary:focus {
    background-color: #84EBB2;
    color: #000;
  }

  .green-mode .btn-primary-2 {
    background-color: #84EBB2;
    color: #000;
    border: #000 solid 1px;
  }

  .green-mode .btn-primary-2:hover {
    color: #84EBB2;
    background-color: #000;
  }

  .green-mode .btn-primary-focused {
    color: #84EBB2;
    background-color: #000;
  }


  .green-mode #contact {
    background-color: transparent;
    color: #000;
    border: #000 solid 1px;
  }

  .green-mode #contact:hover {
    background-color: #000;
    color: #84EBB2;
  }

  .green-mode .color-menu .floating-btn {
    background-color: #000;
  }

  .green-mode .color-menu:after {
    background-color: #84EBB2;
  }

  .green-mode .contact-icon * {
    fill: #000;
  }

  .green-mode .btn-outline-primary:hover * {
    fill: #84EBB2;
  }


  .green-mode .icon * {
    fill: #000;
  }


  .green-mode .color-icon * {
    fill: #84EBB2;
  }

  .green-mode .nav-menu {
    background: #84EBB2;
    opacity: .8;
  }

  .green-mode .page-link {
    color: #000;
  }


  .green-mode .page-link:hover {
    color: #74888D;
  }

  .green-mode .landing-link {
    color: #000;
  }

  .green-mode .landing-link:hover {
    color: #fff;
  }

  .green-mode h1.card-title {
    color: #84EBB2;
  }

  /* Yellow MODE */

  .yellow-mode body {
    color: #000;
    background-color: #FFCB70;
  }

  .yellow-mode .navbar {
    background-color: #FFCB70;
  }

  .yellow-mode .navbar-dark .navbar-brand {
    color: #000;
  }

  .yellow-mode .navbar-dark .navbar-brand:hover {
    opacity: .5;
  }

  .yellow-mode .navbar-dark .nav-item a {
    color: #000
  }

  .yellow-mode .navbar-dark .nav-item a:hover {
    opacity: .5;
  }

  .yellow-mode li a {
    color: #000;
  }

  .yellow-mode li a:hover {
    color: #fff;
  }

  .yellow-mode a.category-link {
    color: #FFCB70;
  }

  .yellow-mode a.category-link:hover {
    color: #fff;
  }


  .yellow-mode .navbar-nav .nav-link {
    color: #000;
  }

  .yellow-mode .navbar-nav .nav-link:hover {
    color: #808080;
  }

  .yellow-mode a {
    color: #A2A2F5;
  }


  .yellow-mode #footer {
    color: #000;
    background-color: #FFCB70;
  }


  .yellow-mode .icon {
    /* fill: #000; */
    color: black;
  }

  .yellow-mode .badge {
    background-color: #FFCB70;
    color: #000
  }


  .yellow-mode h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: #000
  }

  .yellow-mode .card-body {
    background-color: #000;
    color: #FFCB70;
    border: #FFCB70 solid 2px;
    -webkit-box-shadow: -1px -1px 5px 5px rgba(0, 0, 0, 0.5);
    -moz-box-shadow: -1px -1px 5px 5px rgba(0, 0, 0, 0.5);
    box-shadow: -1px -1px 5px 5px rgba(0, 0, 0, 0.5);
  }

  .yellow-mode .form-group label {
    color: #000;
  }

  .yellow-mode .form-group ::placeholder {
    color: #FFCB70;
  }


  .yellow-mode .form-group textarea {
    background-color: #000;
    -webkit-box-shadow: -1px -1px 5px 5px rgba(0, 0, 0, 0.5);
    -moz-box-shadow: -1px -1px 5px 5px rgba(0, 0, 0, 0.5);
    box-shadow: -1px -1px 5px 5px rgba(0, 0, 0, 0.5);
    border: #FFCB70 solid 1px;
  }

  .yellow-mode .form-group input {
    background-color: #000;
    -webkit-box-shadow: -1px -1px 5px 5px rgba(0, 0, 0, 0.5);
    -moz-box-shadow: -1px -1px 5px 5px rgba(0, 0, 0, 0.5);
    box-shadow: -1px -1px 5px 5px rgba(0, 0, 0, 0.5);
    border: #FFCB70 solid 1px;

  }

  .yellow-mode .btn-primary {
    background-color: #000;
    color: #FFCB70;
    border: #FFCB70 solid 1px;
  }

  .yellow-mode .btn-primary:hover {
    background-color: #FFCB70;
    color: #000;
  }

  .yellow-mode .btn-primary:focus {
    background-color: #FFCB70;
    color: #000;
  }

  .yellow-mode .btn-primary-2 {
    background-color: #FFCB70;
    color: #000;
    border: #000 solid 1px;
  }

  .yellow-mode .btn-primary-2:hover {
    color: #FFCB70;
    background-color: #000;
  }

  .yellow-mode .btn-primary-focused {
    color: #FFCB70;
    background-color: #000;
  }


  .yellow-mode #contact {
    background-color: transparent;
    color: #000;
    border: #000 solid 1px;
  }

  .yellow-mode #contact:hover {
    background-color: #000;
    color: #FFCB70;
  }

  .yellow-mode .color-menu .floating-btn {
    background-color: #000;
  }

  .yellow-mode .color-menu:after {
    background-color: #FFCB70;
  }

  .yellow-mode .contact-icon * {
    fill: #000;
  }

  .yellow-mode .btn-outline-primary:hover * {
    fill: #FFCB70;
  }


  .yellow-mode .icon * {
    fill: #000;
  }


  .yellow-mode .color-icon * {
    fill: #FFCB70;
  }

  .yellow-mode .nav-menu {
    background: #FFCB70;
    opacity: .8;
  }

  .yellow-mode .page-link {
    color: #000;
  }

  .yellow-mode .page-link:hover {
    color: #74888D;
  }

  .yellow-mode .landing-link {
    color: #000;
  }

  .yellow-mode .landing-link:hover {
    color: #fff;
  }

  .yellow-mode h1.card-title {
    color: #FFCB70;
  }

</style>

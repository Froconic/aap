<template>
  <!-- TODO add contact form to footer then start sectioning websites -->
  <section>
    <footer class="pb-4" id="footer">
      <div class="container">
        <div class="row mb-5">
          <div class="col-6 col-lg-3 col-xl-2">
            <span class="h4">Navigate</span>
            <div class="row">
              <div class="col">
                <ul class="nav flex-column mt-5">
                  <li class="nav-item">
                    <NuxtLink to='/page/1'>Art</NuxtLink>
                  </li>
                  <li class="nav-item">
                    <NuxtLink to='/coming-soon'>Body</NuxtLink>
                  </li>
                  <li class="nav-item">
                    <NuxtLink to='/blog/page/1'>Blog</NuxtLink>
                  </li>
                  <li class="nav-item">
                    <NuxtLink to='/coming-soon'>Code</NuxtLink>
                  </li>
                  <li class="nav-item">
                    <NuxtLink to='/coming-soon'>Design</NuxtLink>
                  </li>
                  <li class="nav-item">
                    <NuxtLink to='https://blancanvas.art/'>Events</NuxtLink>
                  </li>
                  <li class="nav-item">
                    <NuxtLink to='/coming-soon'>Readings</NuxtLink>
                  </li>
                </ul>
              </div>
              <div class="col-6 col-lg">
                <ul class="list-unstyled">
                  <li>
                    <div class="ml-3">
                      <!-- <a class="text-primary" href="#">hello@company.io</a> -->
                    </div>
                  </li>
                  <div class="col">
                    <ul class="nav flex-column mt-5">
                      <li class="nav-item">
                        <NuxtLink to='/about'>About</NuxtLink>
                      </li>
                      <li class="nav-item">
                        <NuxtLink to='/contact'>Contact</NuxtLink>
                      </li>
                      <li class="nav-item">
                        <NuxtLink to='/support'>Support</NuxtLink>
                      </li>
                    </ul>
                  </div>
                </ul>
              </div>
            </div>
            <NuxtLink to="/contact">
              <button id="contact" class="btn btn-outline-primary">
                <Icon class="contact-icon" name="bi:envelope-fill"/> Contact
              </button>
            </NuxtLink>
          </div>
          <!-- <div class="col-lg-5 col-xl-4 mt-3 mt-lg-0">
          <h5>Subscribe</h5>
          <p>Be updated when a post drops</p>
          <form action="/forms/mailchimp.php" data-form-email novalidate>
            <div class="form-row">
              <div class="col-12">
                <input type="email" class="form-control mb-2" placeholder="Email Address" name="email" required>
              </div>
              <div class="col-12">
                <div class="d-none alert alert-success" role="alert" data-success-message>
                  Thanks, a member of our team will be in touch shortly.
                </div>
                <div class="d-none alert alert-danger" role="alert" data-error-message>
                  Please fill all fields correctly.
                </div>
                <div data-recaptcha data-sitekey="INSERT_YOUR_RECAPTCHA_V2_SITEKEY_HERE" data-size="invisible" data-badge="bottomleft">
                </div>
                <button type="submit" class="btn btn-primary btn-loading btn-block" data-loading-text="Sending">
                  <img class="icon" src="../assets/img/icons/theme/code/loading.svg" alt="loading icon">
                  <span>Subscribe</span>
                </button>
              </div>
            </div>
          </form>
          <small class="text-muted form-text">We’ll never share your details. See our <a class="text-primary" href="#">Privacy Policy</a>
          </small>

        </div> -->
        </div>
        <div class="row justify-content-center mb-2">
          <div class="col-auto">
            <ul class="nav">
              <li class="nav-item">
                <a href="https://www.instagram.com/rivreofsoma/" class="nav-link">
                  <Icon scale="1.5" class="icon" name="bi:instagram" />
                </a>
              </li>
              <!-- <li class="nav-item">
              <a href="#" class="nav-link">
                <img class="icon " src="../assets/img/icons/social/youtube.svg" alt="youtube social icon">
              </a>
            </li> -->
              <li class="nav-item">
                <a href="https://www.facebook.com/RIVRE-of-SOMA-101712625674490" class="nav-link">
                  <Icon scale="1.5" class="icon" name=bi:facebook />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col col-md-auto text-center">
            <small class="copyright">©2023 All Rights Reserved. RIVRE OF SOMA® is a registered trademark</small>
          </div>
        </div>
      </div>
    </footer>
  </section>
</template>

<script>
  export default {

  }

</script>

<style>
  .copyright {
    color: #4B5158;
  }

</style>

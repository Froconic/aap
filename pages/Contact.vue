<template>
  <div class="Contact">
    <section class=" has-divider bg-dark">
      <div class="container pb-6">
        <div class="row justify-content-center text-center">
          <div class="col-xl-8 col-lg-9 col-md-10">
            <h2 class="display-3 mb-5 text-white">Get In Touch</h2>
          </div>
        </div>
      </div>
      <!-- <div class="divider">
        <img src="../assets/img/dividers/divider-2.svg" alt="graphical divider">
      </div> -->
    </section>

    <section>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-9 col-lg-8 col-xl-6">
            <div class="text-center mb-4">
              <h2 class="h1">Leave a message</h2>
              <p class="lead">
              </p>
            </div>
            <form @submit="onSubmit" id="contact-form" action="https://getform.io/f/8ae74422-8bd0-490a-b343-0b6e58164340" method="POST" data-form-email novalidate>
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <label>Your Name *</label>
                    <input name="contact-name" placeholder="First Name" type="text" class="form-control" required>
                    <div class="invalid-feedback">
                      Please type your name.
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label>Email Address *</label>
                    <input name="contact-email" type="email" placeholder="you@yoursite.com" class="form-control" required>
                  </div>
                </div>
                <div class="col-12">
                  <div class="form-group">
                    <label>Message:</label>
                    <textarea class="form-control" name="contact-message" rows="10" placeholder="How can we help?"></textarea>
                  </div>
                </div>
                <div class="col-12">
                  <div class="g-recaptcha" data-sitekey="6LfahnYdAAAAAJHPBaXjj2ICFl4IhwIqMNvuA5MX"></div>
                </div>
                <div class="col">
                  <div class="d-none alert alert-success" role="alert" data-success-message>
                    Thanks, a member of our team will be in touch shortly.
                  </div>
                  <div class="d-none alert alert-danger" role="alert" data-error-message>
                    Please fill all fields correctly.
                  </div>
                  <button data-sitekey="6Ld-b3YdAAAAALn9KbHYk2iClSX3xbiRoo2nsgJr" data-callback='onSubmit' data-action='submit' type="submit" class="btn btn-primary btn-loading g-recaptcha" data-loading-text="Sending">
                    <img class="icon" src="../assets/img/icons/theme/code/loading.svg" alt="loading icon">
                    <span>Send Message</span>
                  </button>
                  <recaptcha></recaptcha>
                </div>
              </div>
            </form>

          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    head() {
      return {
        title: 'Contact | RIVRE OF SOMA', // Other meta information
        script: [{
          hid: 'recaptcha',
          src: 'https://www.google.com/recaptcha/api.js?render=6Ld-b3YdAAAAALn9KbHYk2iClSX3xbiRoo2nsgJr',
          defer: true
        }]
      }
    },
    methods: {
      onSubmit(token) {
        document.getElementById("contact-form").submit();
      }
    }
  }

</script>

<style>

</style>

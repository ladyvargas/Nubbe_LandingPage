<template>
    <div>
      <footer class="footer">
          <div class="footerbg">
          <img src="/assets/img/footer-bg.png" alt="">
          </div>
          <div class="footer-top pt-120 pb-110">
              <div class="container">
                  <div class="row">
                      <div class="col-lg-3 col-sm-6">
                          <!-- footer widget -->
                          <div class="footer-widget">
                              <div class="footer-logo">
                                  <a href="/"><img src="/assets/img/logo.png" alt=""></a>
                              </div>
                              <p>Nubbe es una app desarrollada con el objetivo de brindar el servicio de delivery a sus usuarios de manera eficaz y confiable.</p>
                              <!-- footer social area -->
                              <div class="footer-social-area">
                                  <ul class="social-icons social-icons-light nav">
                                      <li><a href="#" target="_blank"><i class="fa fa-facebook-f"></i></a></li>
                                      <li><a href="#" target="_blank"><i class="fa fa-twitter"></i></a></li>
                                      <li><a href="#" target="_blank"><i class="fa fa-google-plus"></i></a></li>
                                      <li><a href="#" target="_blank"><i class="fa fa-linkedin"></i></a></li>
                                  </ul>
                              </div>
                              <!-- End of footer social area -->
                          </div>
                          <!--End of footer widget -->
                      </div>

                      <div class="col-lg-3 col-sm-6">
                          <div class="footer-widget">
                              <!-- widget header -->
                              <div class="widget-header">
                                  <h5>Información</h5>
                              </div>
                              <!-- widget header -->
                              <div class="widget-body">
                                  <ul class="address-list">
                                      <li>
                                          <span><i class="fa  fa-phone-square"></i></span>
                                          0969167521
                                      </li>
                                      <li>
                                          <span><i class="fa  fa-envelope"></i></span>
                                          nubbe@gmail.com
                                      </li>
                                      <li>
                                          <span><i class="fa  fa-map"></i></span>
                                          Ecuador - Quito
                                          Ecuador - Esmeraldas
                                      </li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                      <div class="col-lg-3 col-sm-6">
                          <div class="footer-widget">
                              <!-- widget header -->
                              <div class="widget-header">
                                  <h5>Entradas</h5>
                              </div>
                              <!-- widget header -->
                          </div>

                          <div class="widget-body">
                              <div class="extra-link">
                                  <div class="link-left">
                                      <ul>
                                          <li><a href="#">Información</a></li>
                                          <li><a href="#">Clientes</a></li>
                                          <li><a href="#">Descarga</a></li>
                                          <li><a href="#">App</a></li>
                                      </ul>
                                  </div>
                              </div>
                          </div>
                      </div>

                      <div class="col-lg-3 col-sm-6">
                          <div class="widget-header">
                                  <h5>Horario de atención</h5>
                              </div>
                          <div class="footer-widget">
                              <div class="widget-body">
                                  <div class="twetter-post-inner">
                                      <div class="footer-post-details">
                                           Lunes a Viernes | 8am-00:00
                                           Sábado | 8:00am-00:00
                                           Domingo | 8:00am-22:00
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div class="footer-bottom">
              <div class="footer-text text-center">
                  <p>© copyright 2020 - Nuovo</p>
              </div>
          </div>

      </footer>

      <!-- back to top -->
      <div @click="scrollTop" :class="`back-to-top ${scrollBtn ? 'show' : ''}`">
          <a href="#"><i class="fa fa-chevron-up"></i></a>
      </div>

    </div>
</template>

<script>
    export default {
      name: "Footer",
      data(){
        return {
          scrollBtn: false
        }
      },
      mounted() {
        window.addEventListener('scroll', this.handleScroll);
      },

      methods: {

        handleScroll () {

          if (window.scrollY > 70) {
            this.scrollBtn = true
          }
          else if (window.scrollY < 70) {
            this.scrollBtn = false
          }
        },

        scrollTop () {
            window.scrollTo(0, 0);
        }


      }
    }
</script>

<style scoped>

</style>

<template>
  <div>
  <section class="pb-110" id='features'>
      <div class="container">
          <div class="row justify-content-center">
              <div class="col-md-12 col-lg-8">
                  <!-- section title -->
                  <div class="section-title text-center">
                      <h2>¿Que servicio ofrecemos?</h2>
                      <p>Ahorra tiempo con nosotros, adquiere un sinnumero de servicios hasta la puerta de tu hogar.</p>
                  </div>
                  <!-- End of section title -->
              </div>
          </div>
          <div class="row justify-content-center">
              <div class="col-xl-10 col-lg-12">
                  <div class="feature-carousel owl-carousel">

                    <swiper :options="swiperOptions">

                      <swiper-slide>
                      <!-- single feature inner -->
                      <div class="single-feature-inner text-center">
                          <div class="feature-icon"><img src="/assets/img/icons/Restaurantes.png" class="svg" alt=""></div>
                          <h5>Servicio de <br>Restaurantes</h5>
                          <p>Comida de todo tipo y de diferentes lugares, variedad de sabor y gusto.</p>
                      </div>
                      <!-- End of single feature inner -->
                      </swiper-slide>

                      <swiper-slide>
                      <!-- single feature inner -->
                      <div class="single-feature-inner text-center">
                          <div class="feature-icon"><img src="/assets/img/icons/Salud.png" class="svg" alt=""></div>
                          <h5>Servicio de <br> Farmacias</h5>
                          <p>Si estas enfermo y necesitas medicamento, Nubbe te ofrece diferentes lugares de farmacias para adquerir lo que necesites.</p>
                      </div>
                      <!-- End of single feature inner -->
                      </swiper-slide>

                      <swiper-slide>
                      <!-- single feature inner -->
                      <div class="single-feature-inner text-center">
                          <div class="feature-icon"><img src="/assets/img/icons/Alcohol.png" class="svg" alt=""></div>
                          <h5>Servicio de <br> Licores</h5>
                          <p>Estas en una celebracion y se te olvidó traer algo para brindar, aquí también encontrarás distintos tipos de licores en diferentes licorerias.</p>
                      </div>
                      <!-- End of single feature inner -->
                      </swiper-slide>

                      <swiper-slide>
                      <!-- single feature inner -->
                      <div class="single-feature-inner text-center">
                          <div class="feature-icon"><img src="/assets/img/icons/Pide de todo.png" class="svg" alt=""></div>
                          <h5>Servicio de <br> Mercados</h5>
                          <p>Si necesitas realizar las compras de tu hogar de una manera facial y rápida puedes utilizar Nubbe-Mercado.</p>
                      </div><!-- End of single feature inner -->
                      </swiper-slide>
                      <div class="swiper-pagination" slot="pagination"></div>
                    </swiper>
                  </div><!--/.feature-carousel-->
              </div><!--/.col-->
          </div><!--/.row-->
      </div><!--/.container-->
  </section>
  </div>
</template>

<script>
  import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
  import 'swiper/css/swiper.css'

  export default {
    name: "Features",
    components: {
      Swiper,
      SwiperSlide
    },
    directives: {
      swiper: directive
    },
    data() {
      return {
        swiperOptions: {
          slidesPerView : 3,
          loop: true,
          speed: 1000,
          spaceBetween : 30,
          autoplay: {
              delay: 3000,
              disableOnInteraction: false
          },
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
          },

          // Responsive breakpoints
          breakpoints: {
            1024:{
                slidesPerView : 3
            },
            768:{
                slidesPerView : 2
            },
            640:{
                slidesPerView : 2
            },
            320:{
                slidesPerView : 1
            }
          }
        }
      }
    },
  }
</script>

<style scoped>

</style>

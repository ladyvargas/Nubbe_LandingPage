<template>
  <section class="pt-120 pb-120" id='clientes'>
      <div class="container">
          <div class="row">
              <div class="col">
                  <!-- partner carosel inner -->
                  <div class="partner-carousel-wrap">
                      <div class="partner-carousel owl-carousel">

                        <swiper :options="swiperOptions">

                          <swiper-slide>
                            <!-- single partner -->
                            <div class="single-partner">
                                <img src="/assets/img/locales/local_1621531111.jpeg" alt="">
                            </div>
                            <!-- End of single partner -->
                          </swiper-slide>

                          <swiper-slide>
                            <!-- single partner -->
                            <div class="single-partner">
                                <img src="/assets/img/locales/local_1621542199.jpeg" alt="">
                            </div>
                            <!-- End of single partner -->
                          </swiper-slide>

                          <swiper-slide>
                            <!-- single partner -->
                            <div class="single-partner">
                                <img src="/assets/img/locales/local_1621542835.jpeg" alt="">
                            </div>
                            <!-- End of single partner -->
                          </swiper-slide>

                          <swiper-slide>
                            <!-- single partner -->
                            <div class="single-partner">
                                <img src="/assets/img/locales/local_1621543843.jpeg" alt="">
                            </div>
                            <!-- End of single partner -->
                          </swiper-slide>
                          <swiper-slide>
                            <!-- single partner -->
                            <div class="single-partner">
                                <img src="/assets/img/locales/local_1621544738.jpeg" alt="">
                            </div>
                            <!-- End of single partner -->
                          </swiper-slide>
                          <swiper-slide>
                            <!-- single partner -->
                            <div class="single-partner">
                                <img src="/assets/img/locales/local_1621545462.jpeg" alt="">
                            </div>
                            <!-- End of single partner -->
                          </swiper-slide>
                          <swiper-slide>
                            <!-- single partner -->
                            <div class="single-partner">
                                <img src="/assets/img/locales/local_1621546323.jpeg" alt="">
                            </div>
                            <!-- End of single partner -->
                          </swiper-slide>
                          <swiper-slide>
                            <!-- single partner -->
                            <div class="single-partner">
                                <img src="/assets/img/locales/local_1621548610.jpeg" alt="">
                            </div>
                            <!-- End of single partner -->
                          </swiper-slide>
                          <swiper-slide>
                            <!-- single partner -->
                            <div class="single-partner">
                                <img src="/assets/img/locales/local_1621551613.jpeg" alt="">
                            </div>
                            <!-- End of single partner -->
                          </swiper-slide>
                          <swiper-slide>
                            <!-- single partner -->
                            <div class="single-partner">
                                <img src="/assets/img/locales/local_1621552422.jpeg" alt="">
                            </div>
                            <!-- End of single partner -->
                          </swiper-slide>
                          <swiper-slide>
                            <!-- single partner -->
                            <div class="single-partner">
                                <img src="/assets/img/locales/local_1621657409.jpeg" alt="">
                            </div>
                            <!-- End of single partner -->
                          </swiper-slide>
                          <swiper-slide>
                            <!-- single partner -->
                            <div class="single-partner">
                                <img src="/assets/img/locales/local_1621658218.jpeg" alt="">
                            </div>
                            <!-- End of single partner -->
                          </swiper-slide>
                          <swiper-slide>
                            <!-- single partner -->
                            <div class="single-partner">
                                <img src="/assets/img/locales/local_1621716691.jpg" alt="">
                            </div>
                            <!-- End of single partner -->
                          </swiper-slide>
                          <swiper-slide>
                            <!-- single partner -->
                            <div class="single-partner">
                                <img src="/assets/img/locales/local_1621748259.jpeg" alt="">
                            </div>
                            <!-- End of single partner -->
                          </swiper-slide>
                          <swiper-slide>
                            <!-- single partner -->
                            <div class="single-partner">
                                <img src="/assets/img/locales/local_1621967357.jpeg" alt="">
                            </div>
                            <!-- End of single partner -->
                          </swiper-slide>
                          <swiper-slide>
                            <!-- single partner -->
                            <div class="single-partner">
                                <img src="/assets/img/locales/local_1621969049.jpeg" alt="">
                            </div>
                            <!-- End of single partner -->
                          </swiper-slide>
                          <swiper-slide>
                            <!-- single partner -->
                            <div class="single-partner">
                                <img src="/assets/img/locales/local_1621969867.jpeg" alt="">
                            </div>
                            <!-- End of single partner -->
                          </swiper-slide>
                          <swiper-slide>
                            <!-- single partner -->
                            <div class="single-partner">
                                <img src="/assets/img/locales/local_1621981505.jpeg" alt="">
                            </div>
                            <!-- End of single partner -->
                          </swiper-slide>
                          <swiper-slide>
                            <!-- single partner -->
                            <div class="single-partner">
                                <img src="/assets/img/locales/local_1622141813.jpeg" alt="">
                            </div>
                            <!-- End of single partner -->
                          </swiper-slide>
                          <swiper-slide>
                            <!-- single partner -->
                            <div class="single-partner">
                                <img src="/assets/img/locales/local_1622146386.jpeg" alt="">
                            </div>
                            <!-- End of single partner -->
                          </swiper-slide>
                          <swiper-slide>
                            <!-- single partner -->
                            <div class="single-partner">
                                <img src="/assets/img/locales/local_1622183229.jpeg" alt="">
                            </div>
                            <!-- End of single partner -->
                          </swiper-slide>
                          <swiper-slide>
                            <!-- single partner -->
                            <div class="single-partner">
                                <img src="/assets/img/locales/local_1622183547.jpeg" alt="">
                            </div>
                            <!-- End of single partner -->
                          </swiper-slide>
                          <swiper-slide>
                            <!-- single partner -->
                            <div class="single-partner">
                                <img src="/assets/img/locales/local_1622308565.jpeg" alt="">
                            </div>
                            <!-- End of single partner -->
                          </swiper-slide>


                        </swiper>
                      </div>
                  </div>
                  <!--End of  partner carosel inner -->
              </div>
          </div>
      </div>
    </section>
</template>

<script>
  import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper';
  import 'swiper/css/swiper.css';

    export default {
      name: "ClientsLogo",
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
            slidesPerView : 5,
            loop: true,
            speed: 1000,
            spaceBetween : 30,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false
            },

            // Responsive breakpoints
            breakpoints: {
              1024:{
                  slidesPerView : 5
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

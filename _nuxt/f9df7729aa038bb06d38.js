(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{147:function(t,e,r){"use strict";var l={name:"Footer",data:function(){return{scrollBtn:!1}},mounted:function(){window.addEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){window.scrollY>70?this.scrollBtn=!0:window.scrollY<70&&(this.scrollBtn=!1)},scrollTop:function(){window.scrollTo(0,0)}}},n=r(19),component=Object(n.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[this._m(0),this._v(" "),e("div",{class:"back-to-top "+(this.scrollBtn?"show":""),on:{click:this.scrollTop}},[this._m(1)])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("footer",{staticClass:"footer"},[r("div",{staticClass:"footerbg"},[r("img",{attrs:{src:"/assets/img/footer-bg.png",alt:""}})]),t._v(" "),r("div",{staticClass:"footer-top pt-120 pb-110"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-3 col-sm-6"},[r("div",{staticClass:"footer-widget"},[r("div",{staticClass:"footer-logo"},[r("a",{attrs:{href:"/"}},[r("img",{attrs:{src:"/assets/img/logo.png",alt:""}})])]),t._v(" "),r("p",[t._v("Nubbe es una app desarrollada con el objetivo de brindar el servicio de delivery a sus usuarios de manera eficaz y confiable.")]),t._v(" "),r("div",{staticClass:"footer-social-area"},[r("ul",{staticClass:"social-icons social-icons-light nav"},[r("li",[r("a",{attrs:{href:"#",target:"_blank"}},[r("i",{staticClass:"fa fa-facebook-f"})])]),t._v(" "),r("li",[r("a",{attrs:{href:"#",target:"_blank"}},[r("i",{staticClass:"fa fa-twitter"})])]),t._v(" "),r("li",[r("a",{attrs:{href:"#",target:"_blank"}},[r("i",{staticClass:"fa fa-google-plus"})])]),t._v(" "),r("li",[r("a",{attrs:{href:"#",target:"_blank"}},[r("i",{staticClass:"fa fa-linkedin"})])])])])])]),t._v(" "),r("div",{staticClass:"col-lg-3 col-sm-6"},[r("div",{staticClass:"footer-widget"},[r("div",{staticClass:"widget-header"},[r("h5",[t._v("Información")])]),t._v(" "),r("div",{staticClass:"widget-body"},[r("ul",{staticClass:"address-list"},[r("li",[r("span",[r("i",{staticClass:"fa  fa-phone-square"})]),t._v("\n                                      0969167521\n                                  ")]),t._v(" "),r("li",[r("span",[r("i",{staticClass:"fa  fa-envelope"})]),t._v("\n                                      nubbe@gmail.com\n                                  ")]),t._v(" "),r("li",[r("span",[r("i",{staticClass:"fa  fa-map"})]),t._v("\n                                      Ecuador - Quito\n                                      Ecuador - Esmeraldas\n                                  ")])])])])]),t._v(" "),r("div",{staticClass:"col-lg-3 col-sm-6"},[r("div",{staticClass:"footer-widget"},[r("div",{staticClass:"widget-header"},[r("h5",[t._v("Entradas")])])]),t._v(" "),r("div",{staticClass:"widget-body"},[r("div",{staticClass:"extra-link"},[r("div",{staticClass:"link-left"},[r("ul",[r("li",[r("a",{attrs:{href:"#"}},[t._v("Información")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#"}},[t._v("Clientes")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#"}},[t._v("Descarga")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#"}},[t._v("App")])])])])])])]),t._v(" "),r("div",{staticClass:"col-lg-3 col-sm-6"},[r("div",{staticClass:"widget-header"},[r("h5",[t._v("Horario de atención")])]),t._v(" "),r("div",{staticClass:"footer-widget"},[r("div",{staticClass:"widget-body"},[r("div",{staticClass:"twetter-post-inner"},[r("div",{staticClass:"footer-post-details"},[t._v("\n                                       Lunes a Viernes | 8am-00:00\n                                       Sábado | 8:00am-00:00\n                                       Domingo | 8:00am-22:00\n                                  ")])])])])])])])]),t._v(" "),r("div",{staticClass:"footer-bottom"},[r("div",{staticClass:"footer-text text-center"},[r("p",[t._v("© copyright 2020 - Nuovo")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{attrs:{href:"#"}},[e("i",{staticClass:"fa fa-chevron-up"})])}],!1,null,"29a9ac5e",null);e.a=component.exports},152:function(t,e,r){"use strict";var l=r(149),n=(r(150),{name:"Features",components:{Swiper:l.Swiper,SwiperSlide:l.SwiperSlide},directives:{swiper:l.directive},data:function(){return{swiperOptions:{slidesPerView:3,loop:!0,speed:1e3,spaceBetween:30,autoplay:{delay:3e3,disableOnInteraction:!1},pagination:{el:".swiper-pagination",type:"bullets",clickable:!0},breakpoints:{1024:{slidesPerView:3},768:{slidesPerView:2},640:{slidesPerView:2},320:{slidesPerView:1}}}}}}),c=r(19),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("section",{staticClass:"pb-110",attrs:{id:"features"}},[r("div",{staticClass:"container"},[t._m(0),t._v(" "),r("div",{staticClass:"row justify-content-center"},[r("div",{staticClass:"col-xl-10 col-lg-12"},[r("div",{staticClass:"feature-carousel owl-carousel"},[r("swiper",{attrs:{options:t.swiperOptions}},[r("swiper-slide",[r("div",{staticClass:"single-feature-inner text-center"},[r("div",{staticClass:"feature-icon"},[r("img",{staticClass:"svg",attrs:{src:"/assets/img/icons/Restaurantes.png",alt:""}})]),t._v(" "),r("h5",[t._v("Servicio de "),r("br"),t._v("Restaurantes")]),t._v(" "),r("p",[t._v("Comida de todo tipo y de diferentes lugares, variedad de sabor y gusto.")])])]),t._v(" "),r("swiper-slide",[r("div",{staticClass:"single-feature-inner text-center"},[r("div",{staticClass:"feature-icon"},[r("img",{staticClass:"svg",attrs:{src:"/assets/img/icons/Salud.png",alt:""}})]),t._v(" "),r("h5",[t._v("Servicio de "),r("br"),t._v(" Farmacias")]),t._v(" "),r("p",[t._v("Si estas enfermo y necesitas medicamento, Nubbe te ofrece diferentes lugares de farmacias para adquerir lo que necesites.")])])]),t._v(" "),r("swiper-slide",[r("div",{staticClass:"single-feature-inner text-center"},[r("div",{staticClass:"feature-icon"},[r("img",{staticClass:"svg",attrs:{src:"/assets/img/icons/Alcohol.png",alt:""}})]),t._v(" "),r("h5",[t._v("Servicio de "),r("br"),t._v(" Licores")]),t._v(" "),r("p",[t._v("Estas en una celebracion y se te olvidó traer algo para brindar, aquí también encontrarás distintos tipos de licores en diferentes licorerias.")])])]),t._v(" "),r("swiper-slide",[r("div",{staticClass:"single-feature-inner text-center"},[r("div",{staticClass:"feature-icon"},[r("img",{staticClass:"svg",attrs:{src:"/assets/img/icons/Pide de todo.png",alt:""}})]),t._v(" "),r("h5",[t._v("Servicio de "),r("br"),t._v(" Mercados")]),t._v(" "),r("p",[t._v("Si necesitas realizar las compras de tu hogar de una manera facial y rápida puedes utilizar Nubbe-Mercado.")])])]),t._v(" "),r("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],1)],1)])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-md-12 col-lg-8"},[e("div",{staticClass:"section-title text-center"},[e("h2",[this._v("¿Que servicio ofrecemos?")]),this._v(" "),e("p",[this._v("Ahorra tiempo con nosotros, adquiere un sinnumero de servicios hasta la puerta de tu hogar.")])])])])}],!1,null,"1e2bd634",null);e.a=component.exports},153:function(t,e,r){"use strict";var l=r(164),n=r.n(l),c=r(165),o={name:"Counter",components:{countTo:n.a},directives:{ObserveVisibility:c.a},data:function(){return{startCounter:!1}},methods:{onVisibilityChange:function(t){t&&(this.startCounter=!0)}}},v=r(19),component=Object(v.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{directives:[{name:"observe-visibility",rawName:"v-observe-visibility",value:t.onVisibilityChange,expression:"onVisibilityChange"}],staticClass:"border-top pt-120 pb-80"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-3 col-sm-6"},[r("div",{staticClass:"single-counter text-center"},[r("span",{staticClass:"counter"},[r("countTo",{attrs:{startVal:0,endVal:t.startCounter?4789:0,duration:3e3}})],1),t._v(" "),r("p",[t._v("Descargas")])])]),t._v(" "),r("div",{staticClass:"col-md-3 col-sm-6"},[r("div",{staticClass:"single-counter text-center"},[r("span",{staticClass:"counter"},[r("countTo",{attrs:{startVal:0,endVal:t.startCounter?6389:0,duration:3e3}})],1),t._v(" "),r("p",[t._v("Pedidos")])])]),t._v(" "),r("div",{staticClass:"col-md-3 col-sm-6"},[r("div",{staticClass:"single-counter text-center"},[r("span",{staticClass:"counter"},[r("countTo",{attrs:{startVal:0,endVal:t.startCounter?900:0,duration:3e3}})],1),t._v(" "),r("p",[t._v("Locales")])])]),t._v(" "),r("div",{staticClass:"col-md-3 col-sm-6"},[r("div",{staticClass:"single-counter text-center"},[r("span",{staticClass:"counter"},[r("countTo",{attrs:{startVal:0,endVal:t.startCounter?489:0,duration:3e3}})],1),t._v(" "),r("p",[t._v("Clientes")])])])])])])}),[],!1,null,"9c3e976a",null);e.a=component.exports},154:function(t,e,r){"use strict";var l={name:"ServiceTwo"},n=r(19),component=Object(n.a)(l,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"pt-120 pb-120"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-5 col-sm-5"},[e("div",{staticClass:"user-interact-inner"},[e("div",{staticClass:"interact-icon"}),this._v(" "),e("h2",[this._v("Ofrecemos variedad de servicio")]),this._v(" "),e("p",[this._v("\n                        Sabias que al comprar por este medio apoyas a la generación de empleo y dinamizas la economía de tu localidad. Por eso no dejes pasar la oportunidad de apoyar a tu Restaurante favorito, Supermercado, Tiendas.\n                    ")]),this._v(" "),e("a",{staticClass:"btn",attrs:{href:"#"}},[this._v("Descarga Ya")])])]),this._v(" "),e("div",{staticClass:"col-lg-7 col-sm-7"},[e("div",{staticClass:"user-interact-image type2"},[e("img",{attrs:{src:"/assets/img/feature/2.png",alt:""}})])])])])])}],!1,null,"3c6e7c92",null);e.a=component.exports},155:function(t,e,r){"use strict";var l={name:"ServiceOne"},n=r(19),component=Object(n.a)(l,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"bg-2 pt-120 pb-120"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-7 col-sm-7"},[e("div",{staticClass:"user-interact-image"},[e("img",{attrs:{src:"/assets/img/feature/1.png",alt:""}})])]),this._v(" "),e("div",{staticClass:"col-lg-5 col-sm-5"},[e("div",{staticClass:"user-interact-inner"},[e("div",{staticClass:"interact-icon"}),this._v(" "),e("h2",[this._v("Todo lo que necesites te lo llevamos")]),this._v(" "),e("p",[this._v("\n                        Sabias que al comprar por este medio apoyas a la generación de empleo y dinamizas la economía de tu localidad. Por eso no dejes pasar la oportunidad de apoyar a tu Restaurante favorito, Supermercado, Tiendas.\n                    ")]),this._v(" "),e("a",{staticClass:"btn",attrs:{href:"#"}},[this._v("Descarga Ya App")])])])])])])}],!1,null,"40268538",null);e.a=component.exports},156:function(t,e,r){"use strict";var l={name:"Video",mounted:function(){MediaBox(".mediabox")}},n=r(19),component=Object(n.a)(l,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"app-video"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("div",{staticClass:"theme-video-wrap"},[e("a",{staticClass:"mediabox video-btn",attrs:{href:"https://www.youtube.com/watch?v=kzYQxZPZtNM"}},[e("i",{staticClass:"fa fa-play"})])])])])])])}],!1,null,"7748c3d3",null);e.a=component.exports},157:function(t,e,r){"use strict";var l=r(149),n=(r(150),{name:"Screenshots",components:{Swiper:l.Swiper,SwiperSlide:l.SwiperSlide},directives:{swiper:l.directive},data:function(){return{swiperOptions:{slidesPerView:5,loop:!0,speed:1e3,spaceBetween:20,autoplay:{delay:3e3,disableOnInteraction:!1},pagination:{el:".swiper-pagination",type:"bullets",clickable:!0},breakpoints:{1024:{slidesPerView:5},768:{slidesPerView:2},640:{slidesPerView:2},320:{slidesPerView:1}}}}}}),c=r(19),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"pt-120 pb-115 app-shot-one",staticStyle:{"background-color":"beige"},attrs:{id:"app"}},[r("div",{staticClass:"container-fluid"},[t._m(0),t._v(" "),r("div",{staticClass:"app-shot-one__carousel thm__owl-carousel"},[r("swiper",{attrs:{options:t.swiperOptions}},[r("swiper-slide",[r("div",{staticClass:"item"},[r("img",{attrs:{src:"/assets/img/feature/1..png",alt:""}})])]),t._v(" "),r("swiper-slide",[r("div",{staticClass:"item"},[r("img",{attrs:{src:"/assets/img/feature/2..png",alt:""}})])]),t._v(" "),r("swiper-slide",[r("div",{staticClass:"item"},[r("img",{attrs:{src:"/assets/img/feature/3.png",alt:""}})])]),t._v(" "),r("swiper-slide",[r("div",{staticClass:"item"},[r("img",{attrs:{src:"/assets/img/feature/4.png",alt:""}})])]),t._v(" "),r("swiper-slide",[r("div",{staticClass:"item"},[r("img",{attrs:{src:"/assets/img/feature/5.png",alt:""}})])])],1),t._v(" "),r("div",{staticClass:"swiper-pagination owl-dots",attrs:{slot:"pagination"},slot:"pagination"})],1)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-md-12 col-lg-8"},[e("div",{staticClass:"section-title text-center"},[e("h2",[this._v("¿Comó tener nuestro servicio?")]),this._v(" "),e("p",[this._v("Nuestra aplicación es muy facil de utilizar y comprender.")])])])])}],!1,null,"0d94c7b6",null);e.a=component.exports},158:function(t,e,r){"use strict";var l={name:"Pricing",data:function(){return{month:!0,year:!1}},methods:{handleToggle:function(){var t=this.month,e=this.year;t&&(this.year=!0,this.month=!1),e&&(this.year=!1,this.month=!0)}}},n=r(19),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"pb-90",attrs:{id:"pricing"}},[r("div",{staticClass:"container"},[t._m(0),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-12"},[r("div",{staticClass:"price-nav-wrap"},[r("div",{staticClass:"price--nav-inner"},[r("nav",[r("div",{staticClass:"nav info-tabs",on:{click:t.handleToggle}},[r("a",{class:"price--nav-item "+(t.month?"active show":""),attrs:{id:"nav-contact-tab","data-toggle":"tab",href:"#month"}},[t._v("Monthly")]),t._v(" "),r("a",{class:"price--nav-item "+(t.year?"active show":""),attrs:{href:"#year"}},[t._v("Yearly")])])])])]),t._v(" "),r("div",{staticClass:"tab-content price-content"},[r("div",{class:"tab-pane fade "+(t.month?"active show":""),attrs:{role:"tabpanel"}},[t._m(1)]),t._v(" "),r("div",{class:"tab-pane fade "+(t.year?"active show":""),attrs:{role:"tabpanel"}},[t._m(2)])])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-md-12 col-lg-8"},[e("div",{staticClass:"section-title text-center"},[e("h2",[this._v("Choose Plans & Pricing")]),this._v(" "),e("p",[this._v("Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt    mollit lorem ipsum anim id est laborum perspiciatis unde.")])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-6 col-lg-4"},[r("div",{staticClass:"single-price-plan text-center"},[r("div",{staticClass:"single-price-top"},[r("h4",[t._v("Standard")]),t._v(" "),r("span",[t._v("$20")])]),t._v(" "),r("div",{staticClass:"single-price-body"},[r("div",{staticClass:"price-list"},[r("ul",[r("li",[r("span",[r("i",{staticClass:"fa fa-check",attrs:{"aria-hidden":"true"}})]),t._v("\n                                                    10 pages\n                                                ")]),t._v(" "),r("li",[r("span",[r("i",{staticClass:"fa fa-check",attrs:{"aria-hidden":"true"}})]),t._v("\n                                                    500 gb storage\n                                                ")]),t._v(" "),r("li",[r("span",[r("i",{staticClass:"fa fa-check",attrs:{"aria-hidden":"true"}})]),t._v("\n                                                    10 sdd Database\n                                                ")]),t._v(" "),r("li",[r("span",[r("i",{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"}})]),t._v("\n                                                    Free coustom domain\n                                                ")]),t._v(" "),r("li",[r("span",[r("i",{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"}})]),t._v("\n                                                    24/7 free support\n                                                ")])])]),t._v(" "),r("a",{staticClass:"btn",attrs:{href:"#"}},[t._v("Get Started")])])])]),t._v(" "),r("div",{staticClass:"col-md-6 col-lg-4"},[r("div",{staticClass:"single-price-plan active text-center"},[r("div",{staticClass:"single-price-top"},[r("h4",[t._v("Business")]),t._v(" "),r("span",[t._v("$30")])]),t._v(" "),r("div",{staticClass:"single-price-body"},[r("div",{staticClass:"price-list"},[r("ul",[r("li",[r("span",[r("i",{staticClass:"fa fa-check",attrs:{"aria-hidden":"true"}})]),t._v("\n                                                    10 pages\n                                                ")]),t._v(" "),r("li",[r("span",[r("i",{staticClass:"fa fa-check",attrs:{"aria-hidden":"true"}})]),t._v("\n                                                    500 gb storage\n                                                ")]),t._v(" "),r("li",[r("span",[r("i",{staticClass:"fa fa-check",attrs:{"aria-hidden":"true"}})]),t._v("\n                                                    10 sdd Database\n                                                ")]),t._v(" "),r("li",[r("span",[r("i",{staticClass:"fa fa-check",attrs:{"aria-hidden":"true"}})]),t._v("\n                                                    Free coustom domain\n                                                ")]),t._v(" "),r("li",[r("span",[r("i",{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"}})]),t._v("\n                                                    24/7 free support\n                                                ")])])]),t._v(" "),r("a",{staticClass:"btn",attrs:{href:"#"}},[t._v("Get Started")])])])]),t._v(" "),r("div",{staticClass:"col-md-6 col-lg-4"},[r("div",{staticClass:"single-price-plan text-center"},[r("div",{staticClass:"single-price-top"},[r("h4",[t._v("Professional")]),t._v(" "),r("span",[t._v("$40")])]),t._v(" "),r("div",{staticClass:"single-price-body"},[r("div",{staticClass:"price-list"},[r("ul",[r("li",[r("span",[r("i",{staticClass:"fa fa-check",attrs:{"aria-hidden":"true"}})]),t._v("\n                                                    10 pages\n                                                ")]),t._v(" "),r("li",[r("span",[r("i",{staticClass:"fa fa-check",attrs:{"aria-hidden":"true"}})]),t._v("\n                                                    500 gb storage\n                                                ")]),t._v(" "),r("li",[r("span",[r("i",{staticClass:"fa fa-check",attrs:{"aria-hidden":"true"}})]),t._v("\n                                                    10 sdd Database\n                                                ")]),t._v(" "),r("li",[r("span",[r("i",{staticClass:"fa fa-check",attrs:{"aria-hidden":"true"}})]),t._v("\n                                                    Free coustom domain\n                                                ")]),t._v(" "),r("li",[r("span",[r("i",{staticClass:"fa fa-check",attrs:{"aria-hidden":"true"}})]),t._v("\n                                                    24/7 free support\n                                                ")])])]),t._v(" "),r("a",{staticClass:"btn",attrs:{href:"#"}},[t._v("Get Started")])])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-6 col-lg-4"},[r("div",{staticClass:"single-price-plan text-center"},[r("div",{staticClass:"single-price-top"},[r("h4",[t._v("Standard")]),t._v(" "),r("span",[t._v("$200")])]),t._v(" "),r("div",{staticClass:"single-price-body"},[r("div",{staticClass:"price-list"},[r("ul",[r("li",[r("span",[r("i",{staticClass:"fa fa-check",attrs:{"aria-hidden":"true"}})]),t._v("\n                                                    10 pages\n                                                ")]),t._v(" "),r("li",[r("span",[r("i",{staticClass:"fa fa-check",attrs:{"aria-hidden":"true"}})]),t._v("\n                                                    500 gb storage\n                                                ")]),t._v(" "),r("li",[r("span",[r("i",{staticClass:"fa fa-check",attrs:{"aria-hidden":"true"}})]),t._v("\n                                                    10 sdd Database\n                                                ")]),t._v(" "),r("li",[r("span",[r("i",{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"}})]),t._v("\n                                                    Free coustom domain\n                                                ")]),t._v(" "),r("li",[r("span",[r("i",{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"}})]),t._v("\n                                                    24/7 free support\n                                                ")])])]),t._v(" "),r("a",{staticClass:"btn",attrs:{href:"#"}},[t._v("Get Started")])])])]),t._v(" "),r("div",{staticClass:"col-md-6 col-lg-4"},[r("div",{staticClass:"single-price-plan active text-center"},[r("div",{staticClass:"single-price-top"},[r("h4",[t._v("Business")]),t._v(" "),r("span",[t._v("$300")])]),t._v(" "),r("div",{staticClass:"single-price-body"},[r("div",{staticClass:"price-list"},[r("ul",[r("li",[r("span",[r("i",{staticClass:"fa fa-check",attrs:{"aria-hidden":"true"}})]),t._v("\n                                                    10 pages\n                                                ")]),t._v(" "),r("li",[r("span",[r("i",{staticClass:"fa fa-check",attrs:{"aria-hidden":"true"}})]),t._v("\n                                                    500 gb storage\n                                                ")]),t._v(" "),r("li",[r("span",[r("i",{staticClass:"fa fa-check",attrs:{"aria-hidden":"true"}})]),t._v("\n                                                    10 sdd Database\n                                                ")]),t._v(" "),r("li",[r("span",[r("i",{staticClass:"fa fa-check",attrs:{"aria-hidden":"true"}})]),t._v("\n                                                    Free coustom domain\n                                                ")]),t._v(" "),r("li",[r("span",[r("i",{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"}})]),t._v("\n                                                    24/7 free support\n                                                ")])])]),t._v(" "),r("a",{staticClass:"btn",attrs:{href:"#"}},[t._v("Get Started")])])])]),t._v(" "),r("div",{staticClass:"col-md-6 col-lg-4"},[r("div",{staticClass:"single-price-plan text-center"},[r("div",{staticClass:"single-price-top"},[r("h4",[t._v("Professional")]),t._v(" "),r("span",[t._v("$400")])]),t._v(" "),r("div",{staticClass:"single-price-body"},[r("div",{staticClass:"price-list"},[r("ul",[r("li",[r("span",[r("i",{staticClass:"fa fa-check",attrs:{"aria-hidden":"true"}})]),t._v("\n                                                    10 pages\n                                                ")]),t._v(" "),r("li",[r("span",[r("i",{staticClass:"fa fa-check",attrs:{"aria-hidden":"true"}})]),t._v("\n                                                    500 gb storage\n                                                ")]),t._v(" "),r("li",[r("span",[r("i",{staticClass:"fa fa-check",attrs:{"aria-hidden":"true"}})]),t._v("\n                                                    10 sdd Database\n                                                ")]),t._v(" "),r("li",[r("span",[r("i",{staticClass:"fa fa-check",attrs:{"aria-hidden":"true"}})]),t._v("\n                                                    Free coustom domain\n                                                ")]),t._v(" "),r("li",[r("span",[r("i",{staticClass:"fa fa-check",attrs:{"aria-hidden":"true"}})]),t._v("\n                                                    24/7 free support\n                                                ")])])]),t._v(" "),r("a",{staticClass:"btn",attrs:{href:"#"}},[t._v("Get Started")])])])])])}],!1,null,"97660ca8",null);e.a=component.exports},159:function(t,e,r){"use strict";var l=r(149),n=(r(150),{name:"Testimonial",components:{Swiper:l.Swiper,SwiperSlide:l.SwiperSlide},directives:{swiper:l.directive},data:function(){return{swiperOptions:{slidesPerView:1,loop:!0,speed:1e3,spaceBetween:30,autoplay:{delay:3e3,disableOnInteraction:!1},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}}}}),c=r(19),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"pt-120 pb-110 bg-2"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row justify-content-center"},[r("div",{staticClass:"col-md-8"},[r("div",{staticClass:"testimonial-author-arousel text-center"},[r("div",{staticClass:"testimonial-author-inner"},[r("div",{staticClass:"author-carousel"},[r("swiper",{attrs:{options:t.swiperOptions}},[r("swiper-slide",[r("div",{staticClass:"single-author-imge"},[r("img",{attrs:{src:"/assets/img/feature/author1.png",alt:""}})])]),t._v(" "),r("swiper-slide",[r("div",{staticClass:"single-author-imge"},[r("img",{attrs:{src:"/assets/img/feature/author2.png",alt:""}})])]),t._v(" "),r("swiper-slide",[r("div",{staticClass:"single-author-imge"},[r("img",{attrs:{src:"/assets/img/feature/author3.png",alt:""}})])])],1)],1)])]),t._v(" "),r("div",{staticClass:"testimonial-author-comment text-center"},[r("div",{staticClass:"author-comment-carousel"},[r("swiper",{attrs:{options:t.swiperOptions}},[r("swiper-slide",[r("div",{staticClass:"single-author-comment"},[r("h4",[t._v("Me parece que Nubbe llego en buen momento, con tantas app de delivey esta la encuentro mas entendible para que cualquier usuario la pueda usar.")]),t._v(" "),r("p",[t._v("Jhonny Vera")])])]),t._v(" "),r("swiper-slide",[r("div",{staticClass:"single-author-comment"},[r("h4",[t._v("Muy buena aplicación, eficaz en su trabajo buena atención y el servicio a los clientes el mejor. La recomiendo.")]),t._v(" "),r("p",[t._v("Thais Casanova")])])]),t._v(" "),r("swiper-slide",[r("div",{staticClass:"single-author-comment"},[r("h4",[t._v("Muy buena aplicación, eficaz en su trabajo buena atención y el servicio a los clientes el mejor. La recomiendo.")]),t._v(" "),r("p",[t._v("Adonis Benitez")])])]),t._v(" "),r("div",{staticClass:"swiper-button-prev",attrs:{slot:"button-prev"},slot:"button-prev"}),t._v(" "),r("div",{staticClass:"swiper-button-next",attrs:{slot:"button-next"},slot:"button-next"})],1)],1)])])])])])}),[],!1,null,"f44644a2",null);e.a=component.exports},160:function(t,e,r){"use strict";var l=r(149),n=(r(150),{name:"ClientsLogo",components:{Swiper:l.Swiper,SwiperSlide:l.SwiperSlide},directives:{swiper:l.directive},data:function(){return{swiperOptions:{slidesPerView:5,loop:!0,speed:1e3,spaceBetween:30,autoplay:{delay:3e3,disableOnInteraction:!1},breakpoints:{1024:{slidesPerView:5},768:{slidesPerView:2},640:{slidesPerView:2},320:{slidesPerView:1}}}}}}),c=r(19),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"pt-120 pb-120",attrs:{id:"clientes"}},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col"},[r("div",{staticClass:"partner-carousel-wrap"},[r("div",{staticClass:"partner-carousel owl-carousel"},[r("swiper",{attrs:{options:t.swiperOptions}},[r("swiper-slide",[r("div",{staticClass:"single-partner"},[r("img",{attrs:{src:"/assets/img/locales/local_1621531111.jpeg",alt:""}})])]),t._v(" "),r("swiper-slide",[r("div",{staticClass:"single-partner"},[r("img",{attrs:{src:"/assets/img/locales/local_1621542199.jpeg",alt:""}})])]),t._v(" "),r("swiper-slide",[r("div",{staticClass:"single-partner"},[r("img",{attrs:{src:"/assets/img/locales/local_1621542835.jpeg",alt:""}})])]),t._v(" "),r("swiper-slide",[r("div",{staticClass:"single-partner"},[r("img",{attrs:{src:"/assets/img/locales/local_1621543843.jpeg",alt:""}})])]),t._v(" "),r("swiper-slide",[r("div",{staticClass:"single-partner"},[r("img",{attrs:{src:"/assets/img/locales/local_1621544738.jpeg",alt:""}})])]),t._v(" "),r("swiper-slide",[r("div",{staticClass:"single-partner"},[r("img",{attrs:{src:"/assets/img/locales/local_1621545462.jpeg",alt:""}})])]),t._v(" "),r("swiper-slide",[r("div",{staticClass:"single-partner"},[r("img",{attrs:{src:"/assets/img/locales/local_1621546323.jpeg",alt:""}})])]),t._v(" "),r("swiper-slide",[r("div",{staticClass:"single-partner"},[r("img",{attrs:{src:"/assets/img/locales/local_1621548610.jpeg",alt:""}})])]),t._v(" "),r("swiper-slide",[r("div",{staticClass:"single-partner"},[r("img",{attrs:{src:"/assets/img/locales/local_1621551613.jpeg",alt:""}})])]),t._v(" "),r("swiper-slide",[r("div",{staticClass:"single-partner"},[r("img",{attrs:{src:"/assets/img/locales/local_1621552422.jpeg",alt:""}})])]),t._v(" "),r("swiper-slide",[r("div",{staticClass:"single-partner"},[r("img",{attrs:{src:"/assets/img/locales/local_1621657409.jpeg",alt:""}})])]),t._v(" "),r("swiper-slide",[r("div",{staticClass:"single-partner"},[r("img",{attrs:{src:"/assets/img/locales/local_1621658218.jpeg",alt:""}})])]),t._v(" "),r("swiper-slide",[r("div",{staticClass:"single-partner"},[r("img",{attrs:{src:"/assets/img/locales/local_1621716691.jpg",alt:""}})])]),t._v(" "),r("swiper-slide",[r("div",{staticClass:"single-partner"},[r("img",{attrs:{src:"/assets/img/locales/local_1621748259.jpeg",alt:""}})])]),t._v(" "),r("swiper-slide",[r("div",{staticClass:"single-partner"},[r("img",{attrs:{src:"/assets/img/locales/local_1621967357.jpeg",alt:""}})])]),t._v(" "),r("swiper-slide",[r("div",{staticClass:"single-partner"},[r("img",{attrs:{src:"/assets/img/locales/local_1621969049.jpeg",alt:""}})])]),t._v(" "),r("swiper-slide",[r("div",{staticClass:"single-partner"},[r("img",{attrs:{src:"/assets/img/locales/local_1621969867.jpeg",alt:""}})])]),t._v(" "),r("swiper-slide",[r("div",{staticClass:"single-partner"},[r("img",{attrs:{src:"/assets/img/locales/local_1621981505.jpeg",alt:""}})])]),t._v(" "),r("swiper-slide",[r("div",{staticClass:"single-partner"},[r("img",{attrs:{src:"/assets/img/locales/local_1622141813.jpeg",alt:""}})])]),t._v(" "),r("swiper-slide",[r("div",{staticClass:"single-partner"},[r("img",{attrs:{src:"/assets/img/locales/local_1622146386.jpeg",alt:""}})])]),t._v(" "),r("swiper-slide",[r("div",{staticClass:"single-partner"},[r("img",{attrs:{src:"/assets/img/locales/local_1622183229.jpeg",alt:""}})])]),t._v(" "),r("swiper-slide",[r("div",{staticClass:"single-partner"},[r("img",{attrs:{src:"/assets/img/locales/local_1622183547.jpeg",alt:""}})])]),t._v(" "),r("swiper-slide",[r("div",{staticClass:"single-partner"},[r("img",{attrs:{src:"/assets/img/locales/local_1622308565.jpeg",alt:""}})])])],1)],1)])])])])])}),[],!1,null,"56c015d7",null);e.a=component.exports},161:function(t,e,r){"use strict";var l={name:"BlogHome"},n=r(19),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"border-top pt-115 pb-80",attrs:{id:"blog"}},[r("div",{staticClass:"container"},[t._m(0),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-4 col-md-4"},[r("div",{staticClass:"single-blog-inner"},[r("div",{staticClass:"post-image"},[r("nuxt-link",{attrs:{to:"/blog-details"}},[r("img",{attrs:{src:"/assets/img/blog/blog1.png",alt:""}})]),t._v(" "),t._m(1)],1),t._v(" "),r("div",{staticClass:"post-content"},[r("div",{staticClass:"post-details"},[t._m(2),t._v(" "),r("div",{staticClass:"post-title"},[r("h3",[r("nuxt-link",{attrs:{to:"/blog-details"}},[t._v("Pre and Post Launch Mobile App Marketing Pitfalls to Avoid")])],1)]),t._v(" "),r("p",[t._v("There are many variations of passages of available but majority have alteration in some by inject humour or random\n                                words.")]),t._v(" "),r("nuxt-link",{staticClass:"blog-btn",attrs:{to:"/blog-details"}},[t._v("Read More")])],1)])])]),t._v(" "),r("div",{staticClass:"col-lg-4 col-md-4"},[r("div",{staticClass:"single-blog-inner"},[r("div",{staticClass:"post-image"},[r("nuxt-link",{attrs:{to:"/blog-details"}},[r("img",{attrs:{src:"/assets/img/blog/blog2.png",alt:""}})]),t._v(" "),t._m(3)],1),t._v(" "),r("div",{staticClass:"post-content"},[r("div",{staticClass:"post-details"},[t._m(4),t._v(" "),r("div",{staticClass:"post-title"},[r("h3",[r("nuxt-link",{attrs:{to:"/blog-details"}},[t._v("Nascetur Etiam tempus sit amet vestibulum quis variations.")])],1)]),t._v(" "),r("p",[t._v("There are many variations of passages of available but majority have alteration in some by inject\n                                    humour or random\n                                    words.")]),t._v(" "),r("nuxt-link",{staticClass:"blog-btn",attrs:{to:"/blog-details"}},[t._v("Read More")])],1)])])]),t._v(" "),r("div",{staticClass:"col-lg-4 col-md-4"},[r("div",{staticClass:"single-blog-inner"},[r("div",{staticClass:"post-image"},[r("nuxt-link",{attrs:{to:"/blog-details"}},[r("img",{attrs:{src:"/assets/img/blog/blog3.png",alt:""}})]),t._v(" "),t._m(5)],1),t._v(" "),r("div",{staticClass:"post-content"},[r("div",{staticClass:"post-details"},[t._m(6),t._v(" "),r("div",{staticClass:"post-title"},[r("h3",[r("nuxt-link",{attrs:{to:"/blog-details"}},[t._v("It is a long established fact that and reader will be distracted.")])],1)]),t._v(" "),r("p",[t._v("There are many variations of passages of available but majority have alteration in some by inject\n                                    humour or random\n                                    words.")]),t._v(" "),r("nuxt-link",{staticClass:"blog-btn",attrs:{to:"/blog-details"}},[t._v("Read More")])],1)])])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-lg-8 col-md-12"},[e("div",{staticClass:"section-title text-center"},[e("h2",[this._v("Our News & Articles")]),this._v(" "),e("p",[this._v("Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt    mollit lorem ipsum anim id est laborum perspiciatis unde.")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"post-date"},[e("p",[e("span",[this._v("30")]),this._v("Sep")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"post-info d-flex"},[e("a",{attrs:{href:"#"}},[e("span",[this._v("By")]),this._v("Admin")]),this._v(" "),e("a",{attrs:{href:"#"}},[e("span",[this._v("1")]),this._v(" Comment")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"post-date"},[e("p",[e("span",[this._v("11")]),this._v("Sep")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"post-info d-flex"},[e("a",{attrs:{href:"#"}},[e("span",[this._v("By")]),this._v("Admin")]),this._v(" "),e("a",{attrs:{href:"#"}},[e("span",[this._v("2")]),this._v(" Comments")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"post-date"},[e("p",[e("span",[this._v("20")]),this._v("Nov")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"post-info d-flex"},[e("a",{attrs:{href:"#"}},[e("span",[this._v("By")]),this._v("Admin")]),this._v(" "),e("a",{attrs:{href:"#"}},[e("span",[this._v("5")]),this._v(" Comments")])])}],!1,null,"43055d04",null);e.a=component.exports},162:function(t,e,r){"use strict";var l={name:"DownloadApp"},n=r(19),component=Object(n.a)(l,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"border-top pt-110 pb-150"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row justify-content-center"},[r("div",{staticClass:"col-lg-10 col-md-12"},[r("div",{staticClass:"download-app-inner text-center"},[r("h2",{staticClass:"h1"},[t._v("\n                            Descarga Nuestra APP &"),r("br"),t._v("\n                            Disfruta la experiencia.\n                        ")]),t._v(" "),r("a",{staticClass:"btn",attrs:{href:"#"}},[t._v("Android")]),t._v(" "),r("a",{staticClass:"btn",attrs:{href:"#"}},[t._v("IoS")]),t._v(" "),r("a",{staticClass:"btn",attrs:{href:"#"}},[t._v("Huawai")])])])])])])}],!1,null,"921a99c2",null);e.a=component.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{147:function(t,e,l){"use strict";var r={name:"Footer",data:function(){return{scrollBtn:!1}},mounted:function(){window.addEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){window.scrollY>70?this.scrollBtn=!0:window.scrollY<70&&(this.scrollBtn=!1)},scrollTop:function(){window.scrollTo(0,0)}}},n=l(19),component=Object(n.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[this._m(0),this._v(" "),e("div",{class:"back-to-top "+(this.scrollBtn?"show":""),on:{click:this.scrollTop}},[this._m(1)])])}),[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("footer",{staticClass:"footer"},[l("div",{staticClass:"footerbg"},[l("img",{attrs:{src:"/assets/img/footer-bg.png",alt:""}})]),t._v(" "),l("div",{staticClass:"footer-top pt-120 pb-110"},[l("div",{staticClass:"container"},[l("div",{staticClass:"row"},[l("div",{staticClass:"col-lg-3 col-sm-6"},[l("div",{staticClass:"footer-widget"},[l("div",{staticClass:"footer-logo"},[l("a",{attrs:{href:"/"}},[l("img",{attrs:{src:"/assets/img/logo.png",alt:""}})])]),t._v(" "),l("p",[t._v("Nubbe es una app desarrollada con el objetivo de brindar el servicio de delivery a sus usuarios de manera eficaz y confiable.")]),t._v(" "),l("div",{staticClass:"footer-social-area"},[l("ul",{staticClass:"social-icons social-icons-light nav"},[l("li",[l("a",{attrs:{href:"#",target:"_blank"}},[l("i",{staticClass:"fa fa-facebook-f"})])]),t._v(" "),l("li",[l("a",{attrs:{href:"#",target:"_blank"}},[l("i",{staticClass:"fa fa-twitter"})])]),t._v(" "),l("li",[l("a",{attrs:{href:"#",target:"_blank"}},[l("i",{staticClass:"fa fa-google-plus"})])]),t._v(" "),l("li",[l("a",{attrs:{href:"#",target:"_blank"}},[l("i",{staticClass:"fa fa-linkedin"})])])])])])]),t._v(" "),l("div",{staticClass:"col-lg-3 col-sm-6"},[l("div",{staticClass:"footer-widget"},[l("div",{staticClass:"widget-header"},[l("h5",[t._v("Información")])]),t._v(" "),l("div",{staticClass:"widget-body"},[l("ul",{staticClass:"address-list"},[l("li",[l("span",[l("i",{staticClass:"fa  fa-phone-square"})]),t._v("\n                                      0969167521\n                                  ")]),t._v(" "),l("li",[l("span",[l("i",{staticClass:"fa  fa-envelope"})]),t._v("\n                                      nubbe@gmail.com\n                                  ")]),t._v(" "),l("li",[l("span",[l("i",{staticClass:"fa  fa-map"})]),t._v("\n                                      Ecuador - Quito\n                                      Ecuador - Esmeraldas\n                                  ")])])])])]),t._v(" "),l("div",{staticClass:"col-lg-3 col-sm-6"},[l("div",{staticClass:"footer-widget"},[l("div",{staticClass:"widget-header"},[l("h5",[t._v("Entradas")])])]),t._v(" "),l("div",{staticClass:"widget-body"},[l("div",{staticClass:"extra-link"},[l("div",{staticClass:"link-left"},[l("ul",[l("li",[l("a",{attrs:{href:"#"}},[t._v("Información")])]),t._v(" "),l("li",[l("a",{attrs:{href:"#"}},[t._v("Clientes")])]),t._v(" "),l("li",[l("a",{attrs:{href:"#"}},[t._v("Descarga")])]),t._v(" "),l("li",[l("a",{attrs:{href:"#"}},[t._v("App")])])])])])])]),t._v(" "),l("div",{staticClass:"col-lg-3 col-sm-6"},[l("div",{staticClass:"widget-header"},[l("h5",[t._v("Horario de atención")])]),t._v(" "),l("div",{staticClass:"footer-widget"},[l("div",{staticClass:"widget-body"},[l("div",{staticClass:"twetter-post-inner"},[l("div",{staticClass:"footer-post-details"},[t._v("\n                                       Lunes a Viernes | 8am-00:00\n                                       Sábado | 8:00am-00:00\n                                       Domingo | 8:00am-22:00\n                                  ")])])])])])])])]),t._v(" "),l("div",{staticClass:"footer-bottom"},[l("div",{staticClass:"footer-text text-center"},[l("p",[t._v("© copyright 2020 - Nuovo")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{attrs:{href:"#"}},[e("i",{staticClass:"fa fa-chevron-up"})])}],!1,null,"29a9ac5e",null);e.a=component.exports},148:function(t,e,l){"use strict";var r={name:"NavTwo",data:function(){return{sticky:!1}},mounted:function(){window.addEventListener("scroll",this.handleScroll),this.mobileMenu()},methods:{handleScroll:function(){window.scrollY>70?this.sticky=!0:window.scrollY<70&&(this.sticky=!1)},mobileMenu:function(){var t=document.querySelector("#menu-button"),e=document.querySelector(".main-nav");t.addEventListener("click",(function(){e.style.display="block"!=e.style.display?"block":"none"}))}}},n=l(19),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("header",{staticClass:"header"},[l("div",{class:"main-header inner-header header-2 "+(t.sticky?"sticky fadeInDown":"")},[l("div",{staticClass:"main-menu-wrap"},[l("div",{staticClass:"container"},[l("div",{staticClass:"row align-items-center"},[l("div",{staticClass:"col-xl-3 col-lg-3 col-md-4 col-6"},[l("div",{staticClass:"logo"},[l("nuxt-link",{attrs:{to:"/"}},[l("img",{staticClass:"main-logo2",attrs:{src:"/assets/img/logo2.png","data-rjs":"2",alt:"jironis"}}),t._v(" "),l("img",{staticClass:"sticky-logo",attrs:{src:"/assets/img/logo.png","data-rjs":"2",alt:"jironis"}})])],1)]),t._v(" "),l("div",{staticClass:"col-xl-6 col-lg-6 col-md-4 col-6 menu-button"},[l("div",{staticClass:"menu--inner-area clearfix"},[l("div",{staticClass:"menu-wraper"},[l("nav",[l("div",{staticClass:"header-menu dosis"},[t._m(0),t._v(" "),l("ul",{staticClass:"main-nav"},[l("li",[l("nuxt-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" "),l("ul",[l("li",[l("nuxt-link",{attrs:{to:"/"}},[t._v("Home 1")])],1),t._v(" "),l("li",{staticClass:"active"},[l("nuxt-link",{attrs:{to:"/index2"}},[t._v("Home 2")])],1)])],1),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),l("li",[l("a",{attrs:{href:"javascript:void(0)"}},[t._v("Blog")]),t._v(" "),l("ul",[l("li",[l("nuxt-link",{attrs:{to:"/blog"}},[t._v("Blog Posts")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/blog-details"}},[t._v("single Post")])],1)])])])])])])])]),t._v(" "),t._m(4)])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"menu-button"}},[e("i",{staticClass:"fa fa-bars"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("a",{attrs:{href:"#features"}},[this._v("Features")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("a",{attrs:{href:"#app"}},[this._v("App Screens")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("a",{attrs:{href:"#pricing"}},[this._v("Pricing")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-lg-3 col-md-4 col-sm-5 d-md-block d-none"},[e("div",{staticClass:"urgent-call text-right"},[e("a",{staticClass:"btn",attrs:{href:"#"}},[this._v("Get Jironis")])])])}],!1,null,"6e550d35",null);e.a=component.exports},151:function(t,e,l){"use strict";var r={name:"PageHeader",props:{title:{type:String}}},n=l(19),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"page-title-wrap",staticStyle:{background:"rgba(0, 0, 0, 0) url(/assets/img/video-bg.jpg) repeat scroll center center"}},[l("div",{staticClass:"container"},[l("div",{staticClass:"row"},[l("div",{staticClass:"col"},[l("div",{staticClass:"page-title-content text-center"},[l("ul",{staticClass:"mb-0 list-unstyle nav"},[l("li",[l("nuxt-link",{attrs:{to:"/"}},[t._v("Home")])],1),t._v(" "),l("li",[l("a",{attrs:{href:"#"}},[t._v(t._s(t.title))])])]),t._v(" "),l("h1",{staticClass:"h2"},[t._v(t._s(t.title))])])])])])])}),[],!1,null,"2800ea30",null);e.a=component.exports},169:function(t,e,l){"use strict";l.r(e);var r=l(148),n=l(151),o={name:"BlogDetails"},c=l(19),v=Object(c.a)(o,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("section",{staticClass:"pt-120 pb-150"},[l("div",{staticClass:"container"},[l("div",{staticClass:"row"},[l("div",{staticClass:"col-lg-8"},[l("div",{staticClass:"blog-details-inner"},[l("div",{staticClass:"single-blog-inner"},[l("div",{staticClass:"post-image"},[l("nuxt-link",{attrs:{to:"/blog-details"}},[l("img",{attrs:{src:"/assets/img/blog/list1.png",alt:""}})]),t._v(" "),t._m(0)],1),t._v(" "),l("div",{staticClass:"post-content"},[l("div",{staticClass:"post-details"},[t._m(1),t._v(" "),l("div",{staticClass:"post-title"},[l("h3",[l("nuxt-link",{attrs:{to:"/blog-details"}},[t._v("Pre and Post Launch Mobile App Marketing Pitfalls\n                                                to Avoid")])],1)]),t._v(" "),l("p",[t._v("There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,\n                                    by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of\n                                    Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum\n                                    generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the\n                                    Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to\n                                    generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition,\n                                    injected humour, or non-characteristic words etc.")]),t._v(" "),l("p",{staticClass:"mb-0"},[t._v("t is a long established fact that a reader will be distracted by the readable content of a page when looking at its\n                                    layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to\n                                    using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page\n                                    editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites\n                                    still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose\n                                    injected humour and the like.")])])])]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5)])]),t._v(" "),t._m(6)])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"post-date"},[e("p",[e("span",[this._v("30")]),this._v("Sep")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"post-info d-flex"},[e("a",{attrs:{href:"#"}},[e("span",[this._v("By")]),this._v("Admin")]),this._v(" "),e("a",{attrs:{href:"#"}},[e("span",[this._v("2")]),this._v(" Comeent")])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"post-tag-share d-flex align-items-center"},[l("div",{staticClass:"post-tag"},[l("h5",[t._v("Tags:")]),t._v(" "),l("a",{attrs:{href:"#"}},[t._v("Business,")]),t._v(" "),l("a",{attrs:{href:"#"}},[t._v("Agency,")]),t._v(" "),l("a",{attrs:{href:"#"}},[t._v("Technology")])]),t._v(" "),l("div",{staticClass:"post-share"},[l("ul",{staticClass:"social-list mb--0 list-unstyled"},[l("li",[l("a",{attrs:{href:"#"}},[l("i",{staticClass:"fa fa-twitter"})])]),t._v(" "),l("li",[l("a",{attrs:{href:"#"}},[l("i",{staticClass:"fa fa-facebook"})])]),t._v(" "),l("li",[l("a",{attrs:{href:"#"}},[l("i",{staticClass:"fa fa-pinterest"})])]),t._v(" "),l("li",[l("a",{attrs:{href:"#"}},[l("i",{staticClass:"fa fa-youtube"})])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"post-author-inner midea"},[e("img",{attrs:{src:"/assets/img/blog/blog-author.png",alt:""}}),this._v(" "),e("div",{staticClass:"author-details"},[e("h4",[this._v("Christine Eve")]),this._v(" "),e("p",[this._v("Lorem Ipsum is simply dummy text of the rinting and typesetting been the industry standard dummy text ever\n                                    sincer nullam condimentum purus.")]),this._v(" "),e("a",{attrs:{href:"#"}},[this._v("View All Posts")])])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"post-comment"},[l("h3",[t._v("2 Comments")]),t._v(" "),l("ul",{staticClass:"post-comments p-0 m-0 list-unstyled"},[l("li",[l("div",{staticClass:"comment-author-details media"},[l("img",{attrs:{src:"/assets/img/blog/comment-author.png",alt:""}}),t._v(" "),l("div",{staticClass:"comment-author-content"},[l("h5",[t._v("David Martin")]),t._v(" "),l("h6",[t._v("20 oct, 2018 - 4:00 pm")]),t._v(" "),l("p",[t._v("Lorem Ipsum is simply dummy text of the rinting and typesetting been the industry standard dummy\n                                                text ever sincer condimentum purus. In non ex at ligula fringilla lobortis et aliquet.")]),t._v(" "),l("a",{staticClass:"btn",attrs:{href:"#"}},[t._v("Reply")])])])]),t._v(" "),l("li",{staticClass:"d-flex"},[l("div",{staticClass:"comment-author-details media"},[l("img",{attrs:{src:"/assets/img/blog/comment-author2.png",alt:""}}),t._v(" "),l("div",{staticClass:"comment-author-content"},[l("h5",[t._v("Jasseca Brown")]),t._v(" "),l("h6",[t._v("20 oct, 2018 - 4:00 pm")]),t._v(" "),l("p",[t._v("Lorem Ipsum is simply dummy text of the rinting and typesetting been the industry standard dummy\n                                                text ever sincer condimentum purus. In non ex at ligula fringilla lobortis et aliquet.")]),t._v(" "),l("a",{staticClass:"btn",attrs:{href:"#"}},[t._v("Reply")])])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"contact-form contact-page-form parsley-validate"},[e("h3",[this._v("Leave a Comment")]),this._v(" "),e("form",{attrs:{action:"#",novalidate:""}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6"},[e("input",{staticClass:"theme-input-style",attrs:{type:"text",name:"name",placeholder:"Full Name",required:""}})]),this._v(" "),e("div",{staticClass:"col-md-6"},[e("input",{staticClass:"theme-input-style",attrs:{type:"email",name:"email",placeholder:"Email Address",required:""}})])]),this._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[e("textarea",{staticClass:"theme-input-style",attrs:{name:"message",placeholder:"Write Message"}}),this._v(" "),e("div",{staticClass:"submite-btn"},[e("button",{staticClass:"btn",attrs:{type:"submit"}},[this._v("Send Message")])])])])])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"col-lg-4"},[l("aside",[l("div",{staticClass:"single-sidebar-widget mb-30"},[l("div",{staticClass:"search-bar-widget"},[l("div",{staticClass:"search-form parsley-validate"},[l("form",{attrs:{action:"#",method:"POST",novalidate:""}},[l("input",{attrs:{type:"text",placeholder:"Search here...",required:""}})])])])]),t._v(" "),l("div",{staticClass:"single-sidebar-widget mb-30"},[l("div",{staticClass:"sidebar-title"},[l("h5",[t._v("Latest Posts")])]),t._v(" "),l("div",{staticClass:"sidebar-body latest-post"},[l("ul",[l("li",[l("div",{staticClass:"latest-post-wrap media"},[l("div",{staticClass:"latest-post-img"},[l("img",{attrs:{src:"/assets/img/blog/latest-blog1.png",alt:""}})]),t._v(" "),l("div",{staticClass:"latest-post-body media-body"},[l("p",[t._v("Basic rules of running\n                                                    web agency")])])])]),t._v(" "),l("li",[l("div",{staticClass:"latest-post-wrap media"},[l("div",{staticClass:"latest-post-img"},[l("img",{attrs:{src:"/assets/img/blog/latest-blog2.png",alt:""}})]),t._v(" "),l("div",{staticClass:"latest-post-body media-body"},[l("p",[t._v("Introducing latest app features")])])])]),t._v(" "),l("li",[l("div",{staticClass:"latest-post-wrap media"},[l("div",{staticClass:"latest-post-img"},[l("img",{attrs:{src:"/assets/img/blog/latest-blog3.png",alt:""}})]),t._v(" "),l("div",{staticClass:"latest-post-body media-body"},[l("p",[t._v("Become the best sale marketer")])])])])])])]),t._v(" "),l("div",{staticClass:"single-sidebar-widget mb-30"},[l("div",{staticClass:"sidebar-title"},[l("h5",[t._v("Categories")])]),t._v(" "),l("div",{staticClass:"sidebar-body categories-inner"},[l("ul",[l("li",[l("a",{attrs:{href:"#"}},[t._v("Business")])]),t._v(" "),l("li",[l("a",{attrs:{href:"#"}},[t._v("Introductions")])]),t._v(" "),l("li",[l("a",{attrs:{href:"#"}},[t._v("One Page Template")])]),t._v(" "),l("li",[l("a",{attrs:{href:"#"}},[t._v("Parallax Effects")])]),t._v(" "),l("li",[l("a",{attrs:{href:"#"}},[t._v("New Technologies")])]),t._v(" "),l("li",[l("a",{attrs:{href:"#"}},[t._v("Video Backgrounds")])])])])]),t._v(" "),l("div",{staticClass:"single-sidebar-widget mb-30"},[l("div",{staticClass:"sidebar-title"},[l("h5",[t._v("Tags")])]),t._v(" "),l("div",{staticClass:"sidebar-body tag-inner"},[l("a",{attrs:{href:"#"}},[t._v("Business,")]),t._v(" "),l("a",{attrs:{href:"#"}},[t._v("Agency,")]),t._v(" "),l("a",{attrs:{href:"#"}},[t._v("Technology,")]),t._v(" "),l("a",{attrs:{href:"#"}},[t._v("Parallax,")]),t._v(" "),l("a",{attrs:{href:"#"}},[t._v("nnovative,")]),t._v(" "),l("a",{attrs:{href:"#"}},[t._v("Professional,")]),t._v(" "),l("a",{attrs:{href:"#"}},[t._v("Experience,")])])])])])}],!1,null,"8189ea32",null).exports,d={components:{Footer:l(147).a,BlogDetails:v,PageHeader:n.a,NavTwo:r.a},head:function(){return{title:"Jironis | Blog Details"}}},m=Object(c.a)(d,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("NavTwo"),this._v(" "),e("PageHeader",{attrs:{title:"Blog Details"}}),this._v(" "),e("BlogDetails"),this._v(" "),e("Footer")],1)}),[],!1,null,null,null);e.default=m.exports}}]);
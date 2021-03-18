(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static-pages-scheibentoenung-schmieder-home"], {
    /***/
    "33v3":
    /*!***************************************************************************************!*\
      !*** ./libs/scheibentoenung-schmieder/home/src/lib/components/home/home.component.ts ***!
      \***************************************************************************************/

    /*! exports provided: HomeComponent */

    /***/
    function v3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
        return HomeComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function HomeComponent_ng_container_52_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var image_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", image_r1.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", image_r1.description);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](image_r1.description);
        }
      }

      function HomeComponent_ng_container_52_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_ng_container_52_ng_template_1_Template, 4, 3, "ng-template", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }
      }

      var HomeComponent = function HomeComponent() {
        _classCallCheck(this, HomeComponent);

        this.sliderImages = [{
          src: '/assets/img/home/slider/1.jpeg',
          description: 'TODO'
        }, {
          src: '/assets/img/home/slider/2.jpeg',
          description: 'TODO'
        }, {
          src: '/assets/img/home/slider/3.jpeg',
          description: 'TODO'
        }, {
          src: '/assets/img/home/slider/4.jpeg',
          description: 'TODO'
        }, {
          src: '/assets/img/home/slider/5.jpeg',
          description: 'TODO'
        }, {
          src: '/assets/img/home/slider/6.jpeg',
          description: 'TODO'
        }, {
          src: '/assets/img/home/slider/7.jpeg',
          description: 'TODO'
        }, {
          src: '/assets/img/home/slider/8.jpeg',
          description: 'TODO'
        }, {
          src: '/assets/img/home/slider/9.jpeg',
          description: 'TODO'
        }, {
          src: '/assets/img/home/slider/10.jpeg',
          description: 'TODO'
        }];
      };

      HomeComponent.ɵfac = function HomeComponent_Factory(t) {
        return new (t || HomeComponent)();
      };

      HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HomeComponent,
        selectors: [["scheibentoenung-schmieder-home"]],
        decls: 53,
        vars: 1,
        consts: [[1, "main"], [1, "text-center"], [1, "container"], [1, "row"], [1, "col-md-8", "mr-auto", "ml-auto"], [1, "title"], [1, "description"], [1, "col-md-6"], [1, "card"], ["alt", "Card image cap", "width", "100%", "height", "337px", "src", "/assets/img/home/lack.jpg", 1, "card-img-top"], [1, "card-body"], [1, "card-title"], ["routerLink", "/lackschutz", 1, "btn", "btn-link", "btn-danger"], ["alt", "Card image cap", "width", "100%", "height", "337px", "src", "/assets/img/home/rain.png", 1, "card-img-top"], ["routerLink", "/folien", 1, "btn", "btn-link", "btn-danger"], ["alt", "Card image cap", "width", "100%", "height", "337px", "src", "/assets/img/home/teilfolierung.jpg", 1, "card-img-top"], ["routerLink", "/car-wrapping", 1, "btn", "btn-link", "btn-danger"], ["alt", "Card image cap", "width", "100%", "height", "337px", "src", "/assets/img/home/questions.png", 1, "card-img-top"], ["href", "/fragen", 1, "btn", "btn-link", "btn-danger"], [1, "section"], [1, "col-md-12", "mr-auto", "ml-auto"], [1, "card", "page-carousel"], [4, "ngFor", "ngForOf"], ["ngbSlide", ""], [1, "slider-image", 3, "src", "alt"], [1, "carousel-caption"]],
        template: function HomeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Scheibent\xF6nung Schmieder");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Wir sind ein Unternehmen was sich auf Scheibent\xF6nungen und Fahrzeugfolierungen / Teilfolierungen mit h\xF6chsten Qualit\xE4tsanspr\xFCchen, spezialisiert hat. Ans\xE4ssig sind wir in Limbach-Oberfrohna, f\xFChren aber nat\xFCrlich auch alle Arbeiten unter diversen Voraussetzungen bei Ihnen vor Ort aus. Unsere Scheibent\xF6nungen und Folierungen jeglicher Art, werden selbstverst\xE4ndlich nur mit den aktuell auf dem Marktf\xFChrenden Lieferanten ausgef\xFChrt. Wir verfolgen stetig die neuesten Trends im Bereich Folien und werden diese auch anwenden k\xF6nnen. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h4", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Der perfekte Lackschutz f\xFCr ihr Fahrzeug ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Lackschutz ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h4", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Professioneller Einbau von Sonnenschutzfolie ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Scheibent\xF6nung ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "img", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h4", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Car Wrapping");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Fahrzeugfolierung / Teilfolierung ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "img", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h4", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "H\xE4ufige Fragen");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " Fragen ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "ngb-carousel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, HomeComponent_ng_container_52_Template, 2, 0, "ng-container", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.sliderImages);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCarousel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbSlide"]],
        styles: [".card[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  -o-object-fit: cover;\n     object-fit: cover;\n  height: 337px;\n}\n\n.slider-image[_ngcontent-%COMP%] {\n  -o-object-fit: cover;\n     object-fit: cover;\n  height: 400px;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0EsYUFBQTtBQUNGOztBQUNBO0VBQ0Usb0JBQUE7S0FBQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FBRUYiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkID4gaW1nIHtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIGhlaWdodDogMzM3cHg7XG59XG4uc2xpZGVyLWltYWdlIHtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIGhlaWdodDogNDAwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuIl19 */"]
      });
      /***/
    },

    /***/
    "Cesf":
    /*!****************************************************************************!*\
      !*** ./libs/scheibentoenung-schmieder/home/src/lib/home-routing.module.ts ***!
      \****************************************************************************/

    /*! exports provided: HomeRoutingModule */

    /***/
    function Cesf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function () {
        return HomeRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./components/home/home.component */
      "33v3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: '',
        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"],
        data: {
          cover: {
            src: 'home.jpg',
            teaser: 'Black Edition für ihr Fahrzeug'
          },
          fullSize: true,
          title: 'Scheibentönung Schmieder',
          description: 'Scheibentönung in Chemnitz, Limbach und Umgebung'
        }
      }];

      var HomeRoutingModule = function HomeRoutingModule() {
        _classCallCheck(this, HomeRoutingModule);
      };

      HomeRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: HomeRoutingModule
      });
      HomeRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        factory: function HomeRoutingModule_Factory(t) {
          return new (t || HomeRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](HomeRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "Luz4":
    /*!********************************************************************!*\
      !*** ./libs/scheibentoenung-schmieder/home/src/lib/home.module.ts ***!
      \********************************************************************/

    /*! exports provided: HomeModule */

    /***/
    function Luz4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeModule", function () {
        return HomeModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _static_pages_shared_ui_paper_kit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @static-pages/shared/ui-paper-kit */
      "Ivor");
      /* harmony import */


      var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./components/home/home.component */
      "33v3");
      /* harmony import */


      var _home_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./home-routing.module */
      "Cesf");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var HomeModule = function HomeModule() {
        _classCallCheck(this, HomeModule);
      };

      HomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
        type: HomeModule
      });
      HomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
        factory: function HomeModule_Factory(t) {
          return new (t || HomeModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_4__["HomeRoutingModule"], _static_pages_shared_ui_paper_kit__WEBPACK_IMPORTED_MODULE_2__["UiPaperKitModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCarouselModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](HomeModule, {
          declarations: [_components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_4__["HomeRoutingModule"], _static_pages_shared_ui_paper_kit__WEBPACK_IMPORTED_MODULE_2__["UiPaperKitModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCarouselModule"]]
        });
      })();
      /***/

    },

    /***/
    "T50Q":
    /*!**********************************************************!*\
      !*** ./libs/scheibentoenung-schmieder/home/src/index.ts ***!
      \**********************************************************/

    /*! exports provided: HomeModule */

    /***/
    function T50Q(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _lib_home_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./lib/home.module */
      "Luz4");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "HomeModule", function () {
        return _lib_home_module__WEBPACK_IMPORTED_MODULE_0__["HomeModule"];
      });
      /***/

    }
  }]);
})();
//# sourceMappingURL=static-pages-scheibentoenung-schmieder-home-es5.js.map
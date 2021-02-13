(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!**********************************************************!*\
      !*** multi ./apps/scheibentoenung-schmieder/src/main.ts ***!
      \**********************************************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /home/runner/work/scheibentoenung-schmieder/scheibentoenung-schmieder/apps/scheibentoenung-schmieder/src/main.ts */
      "pE0x");
      /***/
    },

    /***/
    "5oqi":
    /*!**********************************************************************************!*\
      !*** ./apps/scheibentoenung-schmieder/src/app/services/router-helper.service.ts ***!
      \**********************************************************************************/

    /*! exports provided: RouterHelperService */

    /***/
    function oqi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RouterHelperService", function () {
        return RouterHelperService;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var RouterHelperService = /*#__PURE__*/function () {
        function RouterHelperService(router, activatedRoute) {
          _classCallCheck(this, RouterHelperService);

          this.router = router;
          this.activatedRoute = activatedRoute;
        }

        _createClass(RouterHelperService, [{
          key: "getDeepSnapshot",
          value: function getDeepSnapshot() {
            var _this = this;

            var activatedRoute = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.activatedRoute;
            return this.onNavigationEnd().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function () {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(this.getDeepCurrentSnapshot(activatedRoute.snapshot)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function () {
              return _this.getDeepCurrentSnapshot(activatedRoute.snapshot);
            }));
          }
        }, {
          key: "onNavigationEnd",
          value: function onNavigationEnd() {
            return this.getRouterEventByType(_angular_router__WEBPACK_IMPORTED_MODULE_0__["NavigationEnd"]);
          }
        }, {
          key: "getDeepCurrentSnapshot",
          value: function getDeepCurrentSnapshot(activatedRouteSnapshot) {
            if (activatedRouteSnapshot.firstChild) {
              return this.getDeepCurrentSnapshot(activatedRouteSnapshot.firstChild);
            }

            return activatedRouteSnapshot;
          }
        }, {
          key: "getRouterEventByType",
          value: function getRouterEventByType(eventType) {
            return this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (event) {
              return event instanceof eventType;
            }));
          }
        }]);

        return RouterHelperService;
      }();

      RouterHelperService.ɵfac = function RouterHelperService_Factory(t) {
        return new (t || RouterHelperService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"]));
      };

      RouterHelperService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
        token: RouterHelperService,
        factory: RouterHelperService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "MAn7":
    /*!*********************************************!*\
      !*** ./libs/shared/ui/src/lib/Ui.module.ts ***!
      \*********************************************/

    /*! exports provided: UiModule */

    /***/
    function MAn7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UiModule", function () {
        return UiModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/list */
      "MutI");
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/sidenav */
      "XhcP");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "/t3+");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./components/footer/footer.component */
      "bZll");
      /* harmony import */


      var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./components/navbar/navbar.component */
      "utJN");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var UiModule = function UiModule() {
        _classCallCheck(this, UiModule);
      };

      UiModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
        type: UiModule
      });
      UiModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
        factory: function UiModule_Factory(t) {
          return new (t || UiModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild([]), _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatListModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](UiModule, {
          declarations: [_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"], _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatListModule"]],
          exports: [_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"], _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"]]
        });
      })();
      /***/

    },

    /***/
    "UExW":
    /*!************************************************************************!*\
      !*** ./apps/scheibentoenung-schmieder/src/environments/environment.ts ***!
      \************************************************************************/

    /*! exports provided: environment */

    /***/
    function UExW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */

      /***/
    },

    /***/
    "bZll":
    /*!**********************************************************************!*\
      !*** ./libs/shared/ui/src/lib/components/footer/footer.component.ts ***!
      \**********************************************************************/

    /*! exports provided: FooterComponent */

    /***/
    function bZll(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
        return FooterComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "/t3+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var FooterComponent = function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      };

      FooterComponent.ɵfac = function FooterComponent_Factory(t) {
        return new (t || FooterComponent)();
      };

      FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FooterComponent,
        selectors: [["static-pages-shared-ui-footer"]],
        decls: 13,
        vars: 0,
        consts: [[1, "whatsapp"], ["mat-list-ite", "", "href", "https://wa.me/0491739621191?text=Anfrage%20Folie:", 1, "icon"], [1, "icon-whatsapp"], ["color", "primary", 1, "footer"], [1, "list"], ["mat-button", "", "routerLink", "/impressum"], ["mat-button", "", "routerLink", "/kontakt"], ["mat-button", "", "routerLink", "/agb"], ["mat-button", "", "routerLink", "/datenschutz"]],
        template: function FooterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-toolbar", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Impressum");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Kontakt");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "AGB");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Datenschutz");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
        styles: [".list[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  justify-content: space-around;\n}\n.list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  flex-direction: column;\n  color: white;\n  text-decoration: none;\n}\n.footer[_ngcontent-%COMP%] {\n  background-color: black;\n  -o-object-fit: cover;\n     object-fit: cover;\n  background-size: cover;\n  transform: translate3d(0px, 0px, 0px);\n}\n.whatsapp[_ngcontent-%COMP%] {\n  position: fixed;\n  right: 10px;\n  bottom: 30%;\n  z-index: 3;\n  font-size: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7QUFBRjtBQUNFO0VBQ0Usc0JBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7QUFDSjtBQUVBO0VBQ0UsdUJBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQ0FBQTtBQUNGO0FBRUE7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQUNGIiwiZmlsZSI6ImZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5saXN0IHtcbiAgLy9wYWRkaW5nOiAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGEge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxufVxuLmZvb3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDBweCwgMHB4KTtcbn1cblxuLndoYXRzYXBwIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICByaWdodDogMTBweDtcbiAgYm90dG9tOiAzMCU7XG4gIHotaW5kZXg6IDM7XG4gIGZvbnQtc2l6ZTogNDBweDtcbn1cbiJdfQ== */"]
      });
      /***/
    },

    /***/
    "bsWm":
    /*!*************************************!*\
      !*** ./libs/shared/ui/src/index.ts ***!
      \*************************************/

    /*! exports provided: UiModule */

    /***/
    function bsWm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _lib_Ui_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./lib/Ui.module */
      "MAn7");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "UiModule", function () {
        return _lib_Ui_module__WEBPACK_IMPORTED_MODULE_0__["UiModule"];
      });
      /***/

    },

    /***/
    "pE0x":
    /*!****************************************************!*\
      !*** ./apps/scheibentoenung-schmieder/src/main.ts ***!
      \****************************************************/

    /*! no exports provided */

    /***/
    function pE0x(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "u+Jn");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "UExW");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "qEWt":
    /*!*****************************************************************!*\
      !*** ./apps/scheibentoenung-schmieder/src/app/app.component.ts ***!
      \*****************************************************************/

    /*! exports provided: AppComponent */

    /***/
    function qEWt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @scullyio/ng-lib */
      "sbAP");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _services_router_helper_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./services/router-helper.service */
      "5oqi");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _libs_shared_ui_src_lib_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../../libs/shared/ui/src/lib/components/navbar/navbar.component */
      "utJN");
      /* harmony import */


      var _libs_shared_ui_src_lib_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../../libs/shared/ui/src/lib/components/footer/footer.component */
      "bZll");
      /* harmony import */


      var angular2_cookie_law__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! angular2-cookie-law */
      "5soC");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(router, scully, routerHelperService, titleService, metaService) {
          var _this2 = this;

          _classCallCheck(this, AppComponent);

          this.router = router;
          this.scully = scully;
          this.routerHelperService = routerHelperService;
          this.titleService = titleService;
          this.metaService = metaService;
          this.data$ = this.routerHelperService.getDeepSnapshot().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (_ref) {
            var data = _ref.data;
            return data;
          }));
          this.meta$ = this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (event) {
            return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"];
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function () {
            return _this2.data$;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (data) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["iif"])(function () {
              return data.markdown;
            }, _this2.scully.getCurrent(), Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(data));
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["shareReplay"])(1));
        }

        _createClass(AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this3 = this;

            this.meta$.subscribe(function (_ref2) {
              var title = _ref2.title,
                  description = _ref2.description,
                  cover = _ref2.cover;

              _this3.titleService.setTitle(title);

              _this3.metaService.updateTag({
                name: 'description',
                content: description
              });

              _this3.metaService.updateTag({
                property: 'og:description',
                content: description
              });

              _this3.metaService.updateTag({
                property: 'og:image',
                content: '/assets/img/cover/' + cover
              });

              _this3.metaService.updateTag({
                property: 'og:title',
                content: title
              });
            });
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_2__["ScullyRoutesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_router_helper_service__WEBPACK_IMPORTED_MODULE_5__["RouterHelperService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["Meta"]));
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["scheibentoenung-schmieder-root"]],
        decls: 14,
        vars: 12,
        consts: [[1, "navbar"], [1, "cover"], [1, "container"], [1, "content"], [1, "footer"], ["routerLink", "/datenschutz"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "static-pages-shared-ui-navbar", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](6, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](9, "static-pages-shared-ui-footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "cookie-law");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, " Diese Website verwendet Cookies. Durch die Nutzung erkl\xE4rst du dich mit dem Einsatz von Cookies einverstanden.");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "Datenschutz");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var tmp_0_0 = null;
            var tmp_1_0 = null;
            var tmp_2_0 = null;

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("background-image", "url(/assets/img/cover/" + (((tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 6, ctx.meta$)) == null ? null : tmp_0_0.cover) || "home.jpg") + ")");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("full", (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 8, ctx.data$)) == null ? null : tmp_1_0.fullSize);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("fullSize", (tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](6, 10, ctx.meta$)) == null ? null : tmp_2_0.fullSize);
          }
        },
        directives: [_libs_shared_ui_src_lib_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _libs_shared_ui_src_lib_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"], angular2_cookie_law__WEBPACK_IMPORTED_MODULE_9__["CookieLawContainerComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["AsyncPipe"]],
        styles: [".navbar[_ngcontent-%COMP%] {\n  position: fixed;\n  height: 60px;\n  top: 0;\n  z-index: 4;\n  width: 100%;\n}\n\n.content[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  z-index: 3;\n  margin: -70px auto;\n  padding: 0 10% 0 10%;\n}\n\n@media only screen and (max-width: 768px) {\n  .content[_ngcontent-%COMP%] {\n    padding: 60px 0 0 0;\n    margin: -76px 2% 0 2%;\n  }\n}\n\n.fullSize[_ngcontent-%COMP%] {\n  padding: 0 2% 0 2%;\n}\n\n@media only screen and (min-width: 768px) {\n  .fullSize[_ngcontent-%COMP%] {\n    padding: 0 0 0 0;\n  }\n}\n\n.cover[_ngcontent-%COMP%] {\n  height: 60vh;\n  background-position: 50%;\n  background-size: cover;\n  transform: translate3d(0px, 0px, 0px);\n  z-index: 2;\n}\n\n.cover.full[_ngcontent-%COMP%] {\n  height: 100vh;\n}\n\n.footer[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FBRUY7O0FBREU7RUFMRjtJQU1JLG1CQUFBO0lBQ0EscUJBQUE7RUFJRjtBQUNGOztBQUZBO0VBQ0Usa0JBQUE7QUFLRjs7QUFKRTtFQUZGO0lBR0ksZ0JBQUE7RUFPRjtBQUNGOztBQUpBO0VBQ0UsWUFBQTtFQUNBLHdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQ0FBQTtFQUNBLFVBQUE7QUFPRjs7QUFMQTtFQUNFLGFBQUE7QUFRRjs7QUFMQTtFQUNFLGdCQUFBO0FBUUYiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgaGVpZ2h0OiA2MHB4O1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDQ7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmNvbnRlbnQge1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgei1pbmRleDogMztcbiAgbWFyZ2luOiAtNzBweCBhdXRvO1xuICBwYWRkaW5nOiAwIDEwJSAwIDEwJTtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIHBhZGRpbmc6IDYwcHggMCAwIDA7XG4gICAgbWFyZ2luOiAtNzZweCAyJSAwIDIlO1xuICB9XG59XG4uZnVsbFNpemUge1xuICBwYWRkaW5nOiAwIDIlIDAgMiU7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICBwYWRkaW5nOiAwIDAgMCAwO1xuICB9XG59XG5cbi5jb3ZlciB7XG4gIGhlaWdodDogNjB2aDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwgMHB4LCAwcHgpO1xuICB6LWluZGV4OiAyO1xufVxuLmNvdmVyLmZ1bGwge1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuXG4uZm9vdGVyIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbiJdfQ== */"]
      });
      /***/
    },

    /***/
    "u+Jn":
    /*!**************************************************************!*\
      !*** ./apps/scheibentoenung-schmieder/src/app/app.module.ts ***!
      \**************************************************************/

    /*! exports provided: AppModule */

    /***/
    function uJn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @scullyio/ng-lib */
      "sbAP");
      /* harmony import */


      var _static_pages_shared_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @static-pages/shared/ui */
      "bsWm");
      /* harmony import */


      var angular2_cookie_law__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! angular2-cookie-law */
      "5soC");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./app.component */
      "qEWt");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_2__["ScullyLibModule"], _static_pages_shared_ui__WEBPACK_IMPORTED_MODULE_3__["UiModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot([{
          path: 'kontakt',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | static-pages-scheibentoenung-schmieder-contact */
            [__webpack_require__.e("default~static-pages-scheibentoenung-schmieder-contact~static-pages-scheibentoenung-schmieder-folien~1a3f9446"), __webpack_require__.e("default~static-pages-scheibentoenung-schmieder-contact~static-pages-scheibentoenung-schmieder-home"), __webpack_require__.e("default~static-pages-scheibentoenung-schmieder-contact~static-pages-scheibentoenung-schmieder-folien"), __webpack_require__.e("static-pages-scheibentoenung-schmieder-contact")]).then(__webpack_require__.bind(null,
            /*! @static-pages/scheibentoenung-schmieder/contact */
            "f2wM")).then(function (m) {
              return m.ContactModule;
            });
          }
        }, {
          path: 'folien',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | static-pages-scheibentoenung-schmieder-folien */
            [__webpack_require__.e("default~static-pages-scheibentoenung-schmieder-contact~static-pages-scheibentoenung-schmieder-folien~1a3f9446"), __webpack_require__.e("default~static-pages-scheibentoenung-schmieder-contact~static-pages-scheibentoenung-schmieder-folien"), __webpack_require__.e("static-pages-scheibentoenung-schmieder-folien")]).then(__webpack_require__.bind(null,
            /*! @static-pages/scheibentoenung-schmieder/folien */
            "Sdhk")).then(function (m) {
              return m.FolienModule;
            });
          }
        }, {
          path: '',
          pathMatch: 'full',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | static-pages-scheibentoenung-schmieder-home */
            [__webpack_require__.e("default~static-pages-scheibentoenung-schmieder-contact~static-pages-scheibentoenung-schmieder-folien~1a3f9446"), __webpack_require__.e("default~static-pages-scheibentoenung-schmieder-contact~static-pages-scheibentoenung-schmieder-home"), __webpack_require__.e("static-pages-scheibentoenung-schmieder-home")]).then(__webpack_require__.bind(null,
            /*! @static-pages/scheibentoenung-schmieder/home */
            "T50Q")).then(function (m) {
              return m.HomeModule;
            });
          }
        }, {
          path: '',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | static-pages-shared-static-pages */
            [__webpack_require__.e("default~static-pages-scheibentoenung-schmieder-contact~static-pages-scheibentoenung-schmieder-folien~1a3f9446"), __webpack_require__.e("static-pages-shared-static-pages")]).then(__webpack_require__.bind(null,
            /*! @static-pages/shared/static-pages */
            "ElqU")).then(function (m) {
              return m.StaticPagesModule;
            });
          }
        }], {
          anchorScrolling: 'enabled',
          scrollPositionRestoration: 'enabled'
        }), angular2_cookie_law__WEBPACK_IMPORTED_MODULE_4__["CookieLawModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_2__["ScullyLibModule"], _static_pages_shared_ui__WEBPACK_IMPORTED_MODULE_3__["UiModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], angular2_cookie_law__WEBPACK_IMPORTED_MODULE_4__["CookieLawModule"]]
        });
      })();
      /***/

    },

    /***/
    "utJN":
    /*!**********************************************************************!*\
      !*** ./libs/shared/ui/src/lib/components/navbar/navbar.component.ts ***!
      \**********************************************************************/

    /*! exports provided: NavbarComponent */

    /***/
    function utJN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
        return NavbarComponent;
      });
      /* harmony import */


      var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/cdk/layout */
      "0MNC");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/sidenav */
      "XhcP");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "/t3+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/list */
      "MutI");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");

      function NavbarComponent_button_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarComponent_button_4_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](17);

            return _r2.toggle();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "menu");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function NavbarComponent_div_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "mail");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Preisanfrage Online");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      var NavbarComponent = /*#__PURE__*/function () {
        function NavbarComponent(eRef, changeDetectorRef, media, router) {
          _classCallCheck(this, NavbarComponent);

          this.eRef = eRef;
          this.media = media;
          this.router = router;
          this.isMobile = this.media.matchMedia('(max-width: 600px)');

          this._mobileQueryListener = function () {
            return changeDetectorRef.detectChanges();
          };

          this.isMobile.addListener(this._mobileQueryListener);
        }

        _createClass(NavbarComponent, [{
          key: "clickout",
          value: function clickout(event) {
            if (!this.eRef.nativeElement.contains(event.target)) {
              this.sidenavContainer.close();
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this4 = this;

            this.router.events.subscribe(function (event) {
              _this4.sidenavContainer.close();
            });
          }
        }]);

        return NavbarComponent;
      }();

      NavbarComponent.ɵfac = function NavbarComponent_Factory(t) {
        return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["MediaMatcher"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
      };

      NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: NavbarComponent,
        selectors: [["static-pages-shared-ui-navbar"]],
        viewQuery: function NavbarComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatSidenavContainer"], 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.sidenavContainer = _t.first);
          }
        },
        hostBindings: function NavbarComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarComponent_click_HostBindingHandler($event) {
              return ctx.clickout($event);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveDocument"]);
          }
        },
        decls: 30,
        vars: 4,
        consts: [[1, "toolbar"], ["color", "primary", 1, "toolbar"], [1, "brand"], ["mat-icon-button", "", 3, "click", 4, "ngIf"], ["routerLink", "/"], ["src", "/assets/img/logo.png", 1, "logo"], ["mat-button", "", "routerLink", "/lackschutz", 1, "links"], [1, "text"], ["mat-button", "", "routerLink", "/folien", 1, "links"], ["class", "links", 4, "ngIf"], ["color", "primary", "mode", "over", "position", "start", "fixedTopGap", "56", 3, "fixedInViewport"], ["snav", ""], [2, "width", "50vw"], ["mat-list-item", "", "routerLink", "/lackschutz"], ["mat-line", ""], ["mat-list-item", "", "routerLink", "/folien"], ["mat-list-item", "", "routerLink", "/kontakt/anfrage", 3, "disableRipple"], ["matListIcon", ""], ["mat-icon-button", "", 3, "click"], [1, "links"], ["mat-button", "", "routerLink", "/kontakt/anfrage"]],
        template: function NavbarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-toolbar", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-toolbar-row");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, NavbarComponent_button_4_Template, 3, 0, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " Scheibent\xF6nung Schmieder ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Lackschutz");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Folien");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, NavbarComponent_div_14_Template, 6, 0, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mat-sidenav-container");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-sidenav", 10, 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "mat-nav-list", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "a", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "p", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Lackschutz");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "a", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "p", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Folien");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "a", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "mat-icon", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "mail");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "p", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Termin Vereinbahren");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isMobile.matches);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isMobile.matches);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("fixedInViewport", ctx.isMobile.matches);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disableRipple", true);
          }
        },
        directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbar"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarRow"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatSidenav"], _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatNavList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListItem"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatLine"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListIconCssMatStyler"]],
        styles: [".logo[_ngcontent-%COMP%] {\n  height: 26px;\n  vertical-align: middle;\n}\n\n.links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  padding-left: 10px;\n}\n\na[_ngcontent-%COMP%] {\n  color: white;\n  text-decoration: none;\n}\n\n.toolbar[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\nmat-toolbar[_ngcontent-%COMP%]   .brand[_ngcontent-%COMP%] {\n  min-width: 60%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL25hdmJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxzQkFBQTtBQUNGOztBQUNBO0VBQ0Usa0JBQUE7QUFFRjs7QUFDQTtFQUNFLFlBQUE7RUFDQSxxQkFBQTtBQUVGOztBQUNBO0VBQ0UsWUFBQTtBQUVGOztBQUNFO0VBQ0UsY0FBQTtBQUVKIiwiZmlsZSI6Im5hdmJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dvIHtcbiAgaGVpZ2h0OiAyNnB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuLmxpbmtzIGEgLnRleHQge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbmEge1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLnRvb2xiYXIge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5tYXQtdG9vbGJhciB7XG4gIC5icmFuZCB7XG4gICAgbWluLXdpZHRoOiA2MCU7XG4gIH1cbn1cbiJdfQ== */"]
      });
      /***/
    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map
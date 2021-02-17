(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
    "0Rew":
    /*!*****************************************************!*\
      !*** ./libs/shared/util-router-helper/src/index.ts ***!
      \*****************************************************/

    /*! exports provided: UtilRouterHelperModule, RouterHelperService */

    /***/
    function Rew(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _lib_util_router_helper_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./lib/util-router-helper.module */
      "36Sy");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "UtilRouterHelperModule", function () {
        return _lib_util_router_helper_module__WEBPACK_IMPORTED_MODULE_0__["UtilRouterHelperModule"];
      });
      /* harmony import */


      var _lib_services_router_helper_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./lib/services/router-helper.service */
      "LYB7");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "RouterHelperService", function () {
        return _lib_services_router_helper_service__WEBPACK_IMPORTED_MODULE_1__["RouterHelperService"];
      });
      /***/

    },

    /***/
    "36Sy":
    /*!*****************************************************************************!*\
      !*** ./libs/shared/util-router-helper/src/lib/util-router-helper.module.ts ***!
      \*****************************************************************************/

    /*! exports provided: UtilRouterHelperModule */

    /***/
    function Sy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UtilRouterHelperModule", function () {
        return UtilRouterHelperModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @scullyio/ng-lib */
      "sbAP");
      /* harmony import */


      var _services_router_helper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./services/router-helper.service */
      "LYB7");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var UtilRouterHelperModule = function UtilRouterHelperModule() {
        _classCallCheck(this, UtilRouterHelperModule);
      };

      UtilRouterHelperModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
        type: UtilRouterHelperModule
      });
      UtilRouterHelperModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
        factory: function UtilRouterHelperModule_Factory(t) {
          return new (t || UtilRouterHelperModule)();
        },
        providers: [_services_router_helper_service__WEBPACK_IMPORTED_MODULE_3__["RouterHelperService"]],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_2__["ScullyLibModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](UtilRouterHelperModule, {
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_2__["ScullyLibModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "LYB7":
    /*!**********************************************************************************!*\
      !*** ./libs/shared/util-router-helper/src/lib/services/router-helper.service.ts ***!
      \**********************************************************************************/

    /*! exports provided: RouterHelperService */

    /***/
    function LYB7(module, __webpack_exports__, __webpack_require__) {
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


      var _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @scullyio/ng-lib */
      "sbAP");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var RouterHelperService = /*#__PURE__*/function () {
        function RouterHelperService(router, activatedRoute, scully) {
          var _this = this;

          _classCallCheck(this, RouterHelperService);

          this.router = router;
          this.activatedRoute = activatedRoute;
          this.scully = scully;
          this.data$ = this.getDeepSnapshot().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (_ref) {
            var data = _ref.data;
            return data;
          }));
          this.meta$ = this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (event) {
            return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__["NavigationEnd"];
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function () {
            return _this.data$;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (data) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["iif"])(function () {
              return data.markdown;
            }, _this.scully.getCurrent(), Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(data));
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])(1));
        }

        _createClass(RouterHelperService, [{
          key: "getDeepSnapshot",
          value: function getDeepSnapshot() {
            var _this2 = this;

            var activatedRoute = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.activatedRoute;
            return this.onNavigationEnd().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function () {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(this.getDeepCurrentSnapshot(activatedRoute.snapshot)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function () {
              return _this2.getDeepCurrentSnapshot(activatedRoute.snapshot);
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
            return this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (event) {
              return event instanceof eventType;
            }));
          }
        }]);

        return RouterHelperService;
      }();

      RouterHelperService.ɵfac = function RouterHelperService_Factory(t) {
        return new (t || RouterHelperService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_1__["ScullyRoutesService"]));
      };

      RouterHelperService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
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


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/list */
      "MutI");
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/sidenav */
      "XhcP");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "/t3+");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./components/footer/footer.component */
      "bZll");
      /* harmony import */


      var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./components/navbar/navbar.component */
      "utJN");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var UiModule = function UiModule() {
        _classCallCheck(this, UiModule);
      };

      UiModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({
        type: UiModule
      });
      UiModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({
        factory: function UiModule_Factory(t) {
          return new (t || UiModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forChild([]), _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatListModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](UiModule, {
          declarations: [_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"], _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__["NavbarComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatListModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"]],
          exports: [_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"], _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__["NavbarComponent"]]
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

      var _c0 = [[["", "links", ""]]];
      var _c1 = ["[links]"];

      var FooterComponent = function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      };

      FooterComponent.ɵfac = function FooterComponent_Factory(t) {
        return new (t || FooterComponent)();
      };

      FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FooterComponent,
        selectors: [["static-pages-shared-ui-footer"]],
        ngContentSelectors: _c1,
        decls: 6,
        vars: 0,
        consts: [[1, "whatsapp"], ["mat-list-ite", "", "href", "https://wa.me/0491739621191?text=Anfrage%20Folie:", 1, "icon"], [1, "icon-whatsapp"], ["color", "primary", 1, "footer"], [1, "list"]],
        template: function FooterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-toolbar", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"]],
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


      var _static_pages_shared_util_router_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @static-pages/shared/util-router-helper */
      "0Rew");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _libs_shared_ui_src_lib_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../libs/shared/ui/src/lib/components/navbar/navbar.component */
      "utJN");
      /* harmony import */


      var _libs_shared_ui_src_lib_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../libs/shared/ui/src/lib/components/footer/footer.component */
      "bZll");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var angular2_cookie_law__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! angular2-cookie-law */
      "5soC");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var _c0 = function _c0() {
        return {
          name: "Lackschutz",
          href: "/lackschutz"
        };
      };

      var _c1 = function _c1() {
        return {
          name: "Folien",
          href: "/folien"
        };
      };

      var _c2 = function _c2(a0, a1) {
        return [a0, a1];
      };

      var _c3 = function _c3() {
        return {
          name: "Preisanfrage Online",
          href: "/kontakt/anfrage"
        };
      };

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(router, routerHelperService, titleService, metaService) {
          _classCallCheck(this, AppComponent);

          this.router = router;
          this.routerHelperService = routerHelperService;
          this.titleService = titleService;
          this.metaService = metaService;
          this.meta$ = this.routerHelperService.meta$;
          this.data$ = this.routerHelperService.data$;
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
        return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_static_pages_shared_util_router_helper__WEBPACK_IMPORTED_MODULE_2__["RouterHelperService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["Meta"]));
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["scheibentoenung-schmieder-root"]],
        decls: 25,
        vars: 20,
        consts: [[1, "navbar", 3, "links", "contact"], ["logo", "", "src", "/assets/img/logo.png", 1, "logo"], ["header", ""], [1, "cover"], [1, "container"], [1, "content"], [1, "footer"], ["mat-button", "", "links", "", "routerLink", "/impressum"], ["mat-button", "", "links", "", "routerLink", "/kontakt"], ["mat-button", "", "links", "", "routerLink", "/agb"], ["mat-button", "", "links", "", "routerLink", "/datenschutz"], ["routerLink", "/datenschutz"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "static-pages-shared-ui-navbar", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Scheibent\xF6nung Schmieder");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](9, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "static-pages-shared-ui-footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Impressum");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Kontakt");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "AGB");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Datenschutz");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "cookie-law");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, " Diese Website verwendet Cookies. Durch die Nutzung erkl\xE4rst du dich mit dem Einsatz von Cookies einverstanden.");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Datenschutz");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var tmp_2_0 = null;
            var tmp_3_0 = null;
            var tmp_4_0 = null;

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("links", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](16, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](14, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](15, _c1)))("contact", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](19, _c3));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("background-image", "url(/assets/img/cover/" + (((tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](5, 8, ctx.meta$)) == null ? null : tmp_2_0.cover) || "home.jpg") + ")");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("full", (tmp_3_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 10, ctx.data$)) == null ? null : tmp_3_0.fullSize);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("fullSize", (tmp_4_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](9, 12, ctx.meta$)) == null ? null : tmp_4_0.fullSize);
          }
        },
        directives: [_libs_shared_ui_src_lib_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _libs_shared_ui_src_lib_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], angular2_cookie_law__WEBPACK_IMPORTED_MODULE_7__["CookieLawContainerComponent"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"]],
        styles: [".logo[_ngcontent-%COMP%] {\n  height: 26px;\n  vertical-align: middle;\n}\n\n.navbar[_ngcontent-%COMP%] {\n  position: fixed;\n  height: 60px;\n  top: 0;\n  z-index: 4;\n  width: 100%;\n}\n\n.content[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  z-index: 3;\n  margin: -70px auto;\n  padding: 0 10% 0 10%;\n}\n\n@media only screen and (max-width: 768px) {\n  .content[_ngcontent-%COMP%] {\n    padding: 60px 0 0 0;\n    margin: -76px 2% 0 2%;\n  }\n}\n\n.fullSize[_ngcontent-%COMP%] {\n  padding: 0 2% 0 2%;\n}\n\n@media only screen and (min-width: 768px) {\n  .fullSize[_ngcontent-%COMP%] {\n    padding: 0 0 0 0;\n  }\n}\n\n.cover[_ngcontent-%COMP%] {\n  height: 60vh;\n  background-position: 50%;\n  background-size: cover;\n  transform: translate3d(0px, 0px, 0px);\n  z-index: 2;\n}\n\n.cover.full[_ngcontent-%COMP%] {\n  height: 100vh;\n}\n\n.footer[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxzQkFBQTtBQUNGOztBQUNBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUFFRjs7QUFBQTtFQUNFLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUFHRjs7QUFGRTtFQUxGO0lBTUksbUJBQUE7SUFDQSxxQkFBQTtFQUtGO0FBQ0Y7O0FBSEE7RUFDRSxrQkFBQTtBQU1GOztBQUxFO0VBRkY7SUFHSSxnQkFBQTtFQVFGO0FBQ0Y7O0FBTEE7RUFDRSxZQUFBO0VBQ0Esd0JBQUE7RUFDQSxzQkFBQTtFQUNBLHFDQUFBO0VBQ0EsVUFBQTtBQVFGOztBQU5BO0VBQ0UsYUFBQTtBQVNGOztBQU5BO0VBQ0UsZ0JBQUE7QUFTRiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9nbyB7XG4gIGhlaWdodDogMjZweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbi5uYXZiYXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGhlaWdodDogNjBweDtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiA0O1xuICB3aWR0aDogMTAwJTtcbn1cbi5jb250ZW50IHtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIHotaW5kZXg6IDM7XG4gIG1hcmdpbjogLTcwcHggYXV0bztcbiAgcGFkZGluZzogMCAxMCUgMCAxMCU7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICBwYWRkaW5nOiA2MHB4IDAgMCAwO1xuICAgIG1hcmdpbjogLTc2cHggMiUgMCAyJTtcbiAgfVxufVxuLmZ1bGxTaXplIHtcbiAgcGFkZGluZzogMCAyJSAwIDIlO1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgcGFkZGluZzogMCAwIDAgMDtcbiAgfVxufVxuXG4uY292ZXIge1xuICBoZWlnaHQ6IDYwdmg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDUwJTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDBweCwgMHB4KTtcbiAgei1pbmRleDogMjtcbn1cbi5jb3Zlci5mdWxsIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuLmZvb3RlciB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4iXX0= */"]
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


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @scullyio/ng-lib */
      "sbAP");
      /* harmony import */


      var _static_pages_shared_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @static-pages/shared/ui */
      "bsWm");
      /* harmony import */


      var _static_pages_shared_util_router_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @static-pages/shared/util-router-helper */
      "0Rew");
      /* harmony import */


      var angular2_cookie_law__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! angular2-cookie-law */
      "5soC");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./app.component */
      "qEWt");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_3__["ScullyLibModule"], _static_pages_shared_ui__WEBPACK_IMPORTED_MODULE_4__["UiModule"], _static_pages_shared_util_router_helper__WEBPACK_IMPORTED_MODULE_5__["UtilRouterHelperModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot([{
          path: 'kontakt',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | static-pages-scheibentoenung-schmieder-contact */
            [__webpack_require__.e("default~static-pages-scheibentoenung-schmieder-contact~static-pages-scheibentoenung-schmieder-folien~1a3f9446"), __webpack_require__.e("default~static-pages-scheibentoenung-schmieder-contact~static-pages-scheibentoenung-schmieder-folien"), __webpack_require__.e("static-pages-scheibentoenung-schmieder-contact")]).then(__webpack_require__.bind(null,
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
            [__webpack_require__.e("default~static-pages-scheibentoenung-schmieder-contact~static-pages-scheibentoenung-schmieder-folien~1a3f9446"), __webpack_require__.e("static-pages-scheibentoenung-schmieder-home")]).then(__webpack_require__.bind(null,
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
        }), angular2_cookie_law__WEBPACK_IMPORTED_MODULE_6__["CookieLawModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_0__["MatButtonModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_3__["ScullyLibModule"], _static_pages_shared_ui__WEBPACK_IMPORTED_MODULE_4__["UiModule"], _static_pages_shared_util_router_helper__WEBPACK_IMPORTED_MODULE_5__["UtilRouterHelperModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], angular2_cookie_law__WEBPACK_IMPORTED_MODULE_6__["CookieLawModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_0__["MatButtonModule"]]
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


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");

      function NavbarComponent_button_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarComponent_button_4_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](12);

            return _r3.toggle();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "menu");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function NavbarComponent_ng_container_8_a_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var link_r9 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", link_r9.href);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", link_r9.name, " ");
        }
      }

      function NavbarComponent_ng_container_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NavbarComponent_ng_container_8_a_1_Template, 2, 2, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.links);
        }
      }

      function NavbarComponent_div_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "mail");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", ctx_r2.contact.href);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.contact.name);
        }
      }

      function NavbarComponent_a_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var link_r10 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", link_r10.href);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](link_r10.name);
        }
      }

      function NavbarComponent_a_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "mail");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", ctx_r5.contact.href)("disableRipple", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r5.contact.name);
        }
      }

      var _c0 = [[["", "logo", ""]], [["", "header", ""]]];
      var _c1 = ["[logo]", "[header]"];

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
        inputs: {
          links: "links",
          contact: "contact"
        },
        ngContentSelectors: _c1,
        decls: 16,
        vars: 6,
        consts: [[1, "toolbar"], ["color", "primary", 1, "toolbar"], [1, "brand"], ["mat-icon-button", "", 3, "click", 4, "ngIf"], ["routerLink", "/"], [4, "ngIf"], ["class", "links docs-navbar-hide-small", 4, "ngIf"], ["color", "primary", "mode", "over", "position", "start", "fixedTopGap", "56", 3, "fixedInViewport"], ["snav", ""], [2, "width", "50vw"], ["class", "links", "mat-list-item", "", 3, "routerLink", 4, "ngFor", "ngForOf"], ["mat-list-item", "", 3, "routerLink", "disableRipple", 4, "ngIf"], ["mat-icon-button", "", 3, "click"], ["class", "links docs-navbar-hide-small", "mat-button", "", 3, "routerLink", 4, "ngFor", "ngForOf"], ["mat-button", "", 1, "links", "docs-navbar-hide-small", 3, "routerLink"], [1, "links", "docs-navbar-hide-small"], ["mat-button", "", 3, "routerLink"], [1, "text"], ["mat-list-item", "", 1, "links", 3, "routerLink"], ["mat-line", ""], ["mat-list-item", "", 3, "routerLink", "disableRipple"], ["matListIcon", ""]],
        template: function NavbarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"](_c0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-toolbar", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-toolbar-row");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, NavbarComponent_button_4_Template, 3, 0, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](7, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, NavbarComponent_ng_container_8_Template, 2, 1, "ng-container", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, NavbarComponent_div_9_Template, 6, 2, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-sidenav-container");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-sidenav", 7, 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-nav-list", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, NavbarComponent_a_14_Template, 3, 2, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, NavbarComponent_a_15_Template, 5, 3, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isMobile.matches);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isMobile.matches);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isMobile.matches && ctx.contact);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("fixedInViewport", ctx.isMobile.matches);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.links);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.contact);
          }
        },
        directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbar"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarRow"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatSidenav"], _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatNavList"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatAnchor"], _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListItem"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatLine"], _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListIconCssMatStyler"]],
        styles: [".links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  padding-left: 10px;\n}\n\na[_ngcontent-%COMP%] {\n  color: white;\n  text-decoration: none;\n}\n\n.toolbar[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\nmat-toolbar[_ngcontent-%COMP%]   .brand[_ngcontent-%COMP%] {\n  min-width: 60%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL25hdmJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EscUJBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7QUFDRjs7QUFFRTtFQUNFLGNBQUE7QUFDSiIsImZpbGUiOiJuYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGlua3MgYSAudGV4dCB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuYSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4udG9vbGJhciB7XG4gIGhlaWdodDogMTAwJTtcbn1cbm1hdC10b29sYmFyIHtcbiAgLmJyYW5kIHtcbiAgICBtaW4td2lkdGg6IDYwJTtcbiAgfVxufVxuIl19 */"]
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
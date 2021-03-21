(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static-pages-shared-static-pages"], {
    /***/
    "ElqU":
    /*!***********************************************!*\
      !*** ./libs/shared/static-pages/src/index.ts ***!
      \***********************************************/

    /*! exports provided: StaticPagesModule */

    /***/
    function ElqU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _lib_static_pages_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./lib/static-pages.module */
      "uJg1");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "StaticPagesModule", function () {
        return _lib_static_pages_module__WEBPACK_IMPORTED_MODULE_0__["StaticPagesModule"];
      });
      /***/

    },

    /***/
    "N1wD":
    /*!************************************************************************!*\
      !*** ./libs/shared/static-pages/src/lib/staticpages-routing.module.ts ***!
      \************************************************************************/

    /*! exports provided: StaticpagesRoutingModule */

    /***/
    function N1wD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StaticpagesRoutingModule", function () {
        return StaticpagesRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _components_static_pages_staticpages_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./components/static-pages/staticpages.component */
      "lV9u");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: ':id',
        component: _components_static_pages_staticpages_component__WEBPACK_IMPORTED_MODULE_1__["StaticpagesComponent"],
        data: {
          markdown: true
        }
      }];

      var StaticpagesRoutingModule = function StaticpagesRoutingModule() {
        _classCallCheck(this, StaticpagesRoutingModule);
      };

      StaticpagesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: StaticpagesRoutingModule
      });
      StaticpagesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        factory: function StaticpagesRoutingModule_Factory(t) {
          return new (t || StaticpagesRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](StaticpagesRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "lV9u":
    /*!*******************************************************************************************!*\
      !*** ./libs/shared/static-pages/src/lib/components/static-pages/staticpages.component.ts ***!
      \*******************************************************************************************/

    /*! exports provided: StaticpagesComponent */

    /***/
    function lV9u(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StaticpagesComponent", function () {
        return StaticpagesComponent;
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


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var StaticpagesComponent = function StaticpagesComponent(router, scully) {
        var _this = this;

        _classCallCheck(this, StaticpagesComponent);

        this.router = router;
        this.scully = scully;
        this.current$ = this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (event) {
          return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__["NavigationEnd"];
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (_) {
          return _this.scully.getCurrent();
        }));
      };

      StaticpagesComponent.ɵfac = function StaticpagesComponent_Factory(t) {
        return new (t || StaticpagesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_1__["ScullyRoutesService"]));
      };

      StaticpagesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: StaticpagesComponent,
        selectors: [["scheibentoenung-schmieder-staticpages"]],
        decls: 19,
        vars: 3,
        consts: [[1, "section", "profile-content"], [1, "container"], [1, "row"], [1, "col-md-12", "ml-auto", "mr-auto"]],
        template: function StaticpagesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\n  ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "\n    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "\n      ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "\n        ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](10, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "\n        ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "scully-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "\n      ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "\n    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "\n  ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "\n");
          }

          if (rf & 2) {
            var tmp_0_0 = null;

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"]((tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](10, 1, ctx.current$)) == null ? null : tmp_0_0.title);
          }
        },
        directives: [_scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_1__["ScullyContentComponent"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]],
        styles: [".img-rounded[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  transition: opacity 0.5s ease 0s;\n  max-width: 100%;\n}\n.img-details[_ngcontent-%COMP%] {\n  min-height: 50px;\n  padding: 0 4px 0.5em;\n}\n.img-details[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 50px;\n}\n.img-details[_ngcontent-%COMP%]   .author[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  margin-top: -21px;\n  width: 40px;\n}\n.img-circle[_ngcontent-%COMP%] {\n  background-color: #FFFFFF;\n  margin-bottom: 10px;\n  padding: 4px;\n  border-radius: 50% !important;\n  max-width: 100%;\n}\n.img-thumbnail[_ngcontent-%COMP%], img[_ngcontent-%COMP%] {\n  border: 0 none;\n  border-radius: 12px;\n  box-shadow: 0 1px 2px rgba(164, 158, 147, 0.6);\n  margin-bottom: 10px;\n}\n.img-no-padding[_ngcontent-%COMP%] {\n  padding: 0px;\n}\n.example-page[_ngcontent-%COMP%]   .img-rounded[_ngcontent-%COMP%] {\n  margin: 50px 0 20px;\n}\n.img-shadow[_ngcontent-%COMP%] {\n  box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2);\n}\n.images-title[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  height: 50px;\n}\n.nav-link[_ngcontent-%COMP%]   .profile-photo-small[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 30px;\n  margin: -10px 0 0 -15px;\n}\n.profile-picture[_ngcontent-%COMP%] {\n  margin: 0 auto;\n}\n.profile-picture[_ngcontent-%COMP%]   .fileinput-new[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 150px;\n  border-radius: 50%;\n  margin-bottom: 10px;\n}\n.profile-picture[_ngcontent-%COMP%]   .fileinput-exists[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 150px;\n  max-height: 150px;\n  border-radius: 50%;\n  margin-bottom: 10px;\n}\nimg[_ngcontent-%COMP%] {\n  max-width: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3VpLXBhcGVyLWtpdC9zcmMvbGliL2Fzc2V0cy9zYXNzL3BhcGVyLWtpdC9fdmFyaWFibGVzLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi91aS1wYXBlci1raXQvc3JjL2xpYi9hc3NldHMvc2Fzcy9wYXBlci1raXQvX2ltYWdlcy5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3RhdGljcGFnZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0VBLHlEQUFBO0FDbEVBO0VBQ0ksbUJEb0g0QjtFQ25INUIsZ0NBQUE7RUFDQSxlQUFBO0FDRUo7QURBQTtFQUNJLGdCQUFBO0VBQ0Esb0JBQUE7QUNHSjtBREFBO0VBQ0ksV0FBQTtBQ0dKO0FEREE7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQ0lKO0FERkE7RUFDSSx5QkRYeUI7RUNZekIsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0FDS0o7QURIQTtFQUNJLGNBQUE7RUFDQSxtQkQwRjRCO0VDekY1Qiw4Q0FBQTtFQUNBLG1CQUFBO0FDTUo7QURKQTtFQUNJLFlBQUE7QUNPSjtBRExBO0VBQ0ksbUJBQUE7QUNRSjtBRE5BO0VBQ0kscUhBQUE7QUNTSjtBRExBO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0FDUUo7QUROQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7QUNTSjtBRFBBO0VBQ0ksY0FBQTtBQ1VKO0FEVEk7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNXUjtBRFRJO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNXUjtBQXZFQTtFQUVFLGdCQUFBO0FBeUVGIiwiZmlsZSI6InN0YXRpY3BhZ2VzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGZvbnQtY29sb3I6ICAgICAgICAgICAgICAgICAjNjY2MTViICFkZWZhdWx0O1xuJGZpbGwtZm9udC1jb2xvcjogICAgICAgICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4kZm9udC1mYW1pbHktc2Fucy1zZXJpZjogICAgICdNb250c2VycmF0JywgXCJIZWx2ZXRpY2FcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG5cbiRub25lOiAgICAgICAgICAgICAgICAgICAgICAgMCAgICFkZWZhdWx0O1xuJGJvcmRlci10aGluOiAgICAgICAgICAgICAgICAxcHggIWRlZmF1bHQ7XG4kYm9yZGVyLXRoaWNrOiAgICAgICAgICAgICAgIDJweCAhZGVmYXVsdDtcblxuJHdoaXRlLWNvbG9yOiAgICAgICAgICAgICAgICAjRkZGRkZGICFkZWZhdWx0O1xuJHdoaXRlLWJnOiAgICAgICAgICAgICAgICAgICAjRkZGRkZGICFkZWZhdWx0O1xuJHdoaXRlLXN0YXRlcy1jb2xvcjogICAgICAgICByZ2JhKCR3aGl0ZS1jb2xvciwgMC44KTtcblxuJHNtb2tlLWJnOiAgICAgICAgICAgICAgICAgICAjRjVGNUY1ICFkZWZhdWx0O1xuJHBhbGUtYmc6ICAgICAgICAgICAgICAgICAgICAjRkZGQ0Y1ICFkZWZhdWx0O1xuJG1lZGl1bS1wYWxlLWJnOiAgICAgICAgICAgICAjRjFFQUUwICFkZWZhdWx0O1xuXG4kdGFibGUtbGluZS1jb2xvcjogICAgICAgICAgICNjY2MgIWRlZmF1bHQ7XG4kbXV0ZWQtY29sb3I6ICAgICAgICAgICAgICAgICNhNDllOTMgIWRlZmF1bHQ7XG5cbiRibGFjay1iZzogICAgICAgICAgICAgICAgICAgcmdiYSgzMCwzMCwzMCwuOTcpICFkZWZhdWx0O1xuXG4kYmxhY2stY29sb3I6ICAgICAgICAgICAgICAgICMzMzMzMzMgIWRlZmF1bHQ7XG4kYmxhY2staHI6ICAgICAgICAgICAgICAgICAgICM0NDQ0NDQgIWRlZmF1bHQ7XG5cbiRsaWdodC1ncmF5OiAgICAgICAgICAgICAgICAgI0UzRTNFMyAhZGVmYXVsdDtcbiRtZWRpdW0tZ3JheTogICAgICAgICAgICAgICAgI0RERERERCAhZGVmYXVsdDtcbiRkYXJrLWdyYXk6ICAgICAgICAgICAgICAgICAgIzlBOUE5QSAhZGVmYXVsdDtcblxuJHBsYWNlaG9sZGVyLWdyYXk6ICAgICAgICAgICByZ2JhKDIxMCwgMjEwLCAyMTAsIDEpICAhZGVmYXVsdDtcblxuJGdyYXktaW5wdXQtYmc6ICAgICAgICAgICAgICAjZmZmY2Y1ICFkZWZhdWx0O1xuJGRhbmdlci1pbnB1dC1iZzogICAgICAgICAgICAjRkZDMEE0ICFkZWZhdWx0O1xuJHN1Y2Nlc3MtaW5wdXQtYmc6ICAgICAgICAgICAjQUJGM0NCICFkZWZhdWx0O1xuJG90aGVyLW1lZGl1bS1ncmF5OiAgICAgICAgICAjQTQ5RTkzICFkZWZhdWx0O1xuJHRyYW5zcGFyZW50LWJnOiAgICAgICAgICAgICB0cmFuc3BhcmVudCAhZGVmYXVsdDtcblxuJGRlZmF1bHQtY29sb3I6ICAgICAgICAgICAgICAjNjY2MTVCICFkZWZhdWx0O1xuJGRlZmF1bHQtYmc6ICAgICAgICAgICAgICAgICAjNjY2MTVCICFkZWZhdWx0O1xuJGRlZmF1bHQtc3RhdGVzLWNvbG9yOiAgICAgICAjNDAzRDM5ICFkZWZhdWx0O1xuXG4kcHJpbWFyeS1jb2xvcjogICAgICAgICAgICAgICM1MWNiY2UgIWRlZmF1bHQ7XG4kcHJpbWFyeS1zdGF0ZXMtY29sb3I6ICAgICAgIGRhcmtlbigkcHJpbWFyeS1jb2xvciwgMTAlKSAhZGVmYXVsdDtcblxuJHN1Y2Nlc3MtY29sb3I6ICAgICAgICAgICAgICAjNmJkMDk4ICFkZWZhdWx0O1xuJHN1Y2Nlc3Mtc3RhdGVzLWNvbG9yOiAgICAgICBkYXJrZW4oJHN1Y2Nlc3MtY29sb3IsIDEwJSkgIWRlZmF1bHQ7XG5cbiRpbmZvLWNvbG9yOiAgICAgICAgICAgICAgICAgIzUxYmNkYSAhZGVmYXVsdDtcbiRpbmZvLXN0YXRlcy1jb2xvcjogICAgICAgICAgZGFya2VuKCRpbmZvLWNvbG9yLCAxMCUpICFkZWZhdWx0O1xuXG4kd2FybmluZy1jb2xvcjogICAgICAgICAgICAgICNmYmM2NTggIWRlZmF1bHQ7XG4kd2FybmluZy1zdGF0ZXMtY29sb3I6ICAgICAgIGRhcmtlbigkd2FybmluZy1jb2xvciwgMTAlKSAhZGVmYXVsdDtcblxuJGRhbmdlci1jb2xvcjogICAgICAgICAgICAgICAjZjU1OTNkICFkZWZhdWx0O1xuJGRhbmdlci1zdGF0ZXMtY29sb3I6ICAgICAgICBkYXJrZW4oJGRhbmdlci1jb2xvciwgOCUpICFkZWZhdWx0O1xuXG4kbGluay1kaXNhYmxlZC1jb2xvcjogICAgICAgICM2NjY2NjYgIWRlZmF1bHQ7XG5cbiRwdXJwbGUtY29sb3I6ICAgICAgICAgICAgICAgI2MxNzhjMSAhZGVmYXVsdDtcbiRwdXJwbGUtc3RhdGVzLWNvbG9yOiAgICAgICAgZGFya2VuKCRwdXJwbGUtY29sb3IsIDglKSAhZGVmYXVsdDtcblxuJGJyb3duLWNvbG9yOiAgICAgICAgICAgICAgICAjZGNiMjg1ICFkZWZhdWx0O1xuJGJyb3duLXN0YXRlcy1jb2xvcjogICAgICAgICBkYXJrZW4oJGJyb3duLWNvbG9yLCA4JSkgIWRlZmF1bHQ7XG5cblxuXG5cbi8qICAgICAgbGlnaHQgY29sb3JzIC0gdXNlZCBmb3Igc2VsZWN0IGRyb3Bkb3duICAgICAgICAgKi9cblxuJGxpZ2h0LWJsdWU6ICAgICAgICAgICAgICAgICByZ2JhKCRwcmltYXJ5LWNvbG9yLCAuMik7XG4kbGlnaHQtYXp1cmU6ICAgICAgICAgICAgICAgIHJnYmEoJGluZm8tY29sb3IsIC4yKTtcbiRsaWdodC1ncmVlbjogICAgICAgICAgICAgICAgcmdiYSgkc3VjY2Vzcy1jb2xvciwgLjIpO1xuJGxpZ2h0LW9yYW5nZTogICAgICAgICAgICAgICByZ2JhKCR3YXJuaW5nLWNvbG9yLCAuMik7XG4kbGlnaHQtcmVkOiAgICAgICAgICAgICAgICAgIHJnYmEoJGRhbmdlci1jb2xvciwgLjIpO1xuXG5cbi8vPT0gQ29tcG9uZW50c1xuLy9cbiRwYWRkaW5nLWJhc2UtdmVydGljYWw6ICAgICAgICAgN3B4ICFkZWZhdWx0O1xuJHBhZGRpbmctYmFzZS1ob3Jpem9udGFsOiAgICAgICAxOHB4ICFkZWZhdWx0O1xuXG4kcGFkZGluZy1yb3VuZC12ZXJ0aWNhbDogICAgICAgIDlweCAhZGVmYXVsdDtcbiRwYWRkaW5nLXJvdW5kLWhvcml6b250YWw6ICAgICAxOHB4ICFkZWZhdWx0O1xuXG4kcGFkZGluZy1zaW1wbGUtdmVydGljYWw6ICAgICAgMTBweCAhZGVmYXVsdDtcbiRwYWRkaW5nLXNpbXBsZS1ob3Jpem9udGFsOiAgICAxOHB4ICFkZWZhdWx0O1xuXG4kcGFkZGluZy1sYXJnZS12ZXJ0aWNhbDogICAgICAgMTFweCAhZGVmYXVsdDtcbiRwYWRkaW5nLWxhcmdlLWhvcml6b250YWw6ICAgICAzMHB4ICFkZWZhdWx0O1xuXG4kcGFkZGluZy1zbWFsbC12ZXJ0aWNhbDogICAgICAgIDRweCAhZGVmYXVsdDtcbiRwYWRkaW5nLXNtYWxsLWhvcml6b250YWw6ICAgICAxMHB4ICFkZWZhdWx0O1xuXG4kcGFkZGluZy14cy12ZXJ0aWNhbDogICAgICAgICAgIDJweCAhZGVmYXVsdDtcbiRwYWRkaW5nLXhzLWhvcml6b250YWw6ICAgICAgICAgNXB4ICFkZWZhdWx0O1xuXG4kcGFkZGluZy1sYWJlbC12ZXJ0aWNhbDogICAgICAgIDJweCAhZGVmYXVsdDtcbiRwYWRkaW5nLWxhYmVsLWhvcml6b250YWw6ICAgICAxMnB4ICFkZWZhdWx0O1xuXG4vLyBwYWRkaW5nIGZvciBsaW5rcyBpbnNpZGUgZHJvcGRvd24gbWVudVxuJHBhZGRpbmctZHJvcGRvd24tdmVydGljYWw6ICAgICAxMHB4ICFkZWZhdWx0O1xuJHBhZGRpbmctZHJvcGRvd24taG9yaXpvbnRhbDogICAxNXB4ICFkZWZhdWx0O1xuXG4kbWFyZ2luLWxhcmdlLXZlcnRpY2FsOiAgICAgICAgMzBweCAhZGVmYXVsdDtcbiRtYXJnaW4tYmFzZS12ZXJ0aWNhbDogICAgICAgICAxNXB4ICFkZWZhdWx0O1xuXG4vLyBib3JkZXIgcmFkaXVzIGZvciBidXR0b25zXG4kYm9yZGVyLXJhZGl1cy1ub25lOiAgICAgICAgICAgICAwcHggIWRlZmF1bHQ7XG4kYm9yZGVyLXJhZGl1cy1idG4tc21hbGw6ICAgICAgMjZweCAhZGVmYXVsdDtcbiRib3JkZXItcmFkaXVzLWJ0bi1iYXNlOiAgICAgICAyMHB4ICFkZWZhdWx0O1xuJGJvcmRlci1yYWRpdXMtYnRuLWxhcmdlOiAgICAgIDUwcHggIWRlZmF1bHQ7XG5cblxuJG1hcmdpbi1ib3R0b206ICAgICAgICAgICAgICAgIDAgMCAxMHB4IDAgIWRlZmF1bHQ7XG4kYm9yZGVyLXJhZGl1cy1zbWFsbDogICAgICAgICAgIDNweCAhZGVmYXVsdDtcbiRib3JkZXItcmFkaXVzLWJhc2U6ICAgICAgICAgICAgNHB4ICFkZWZhdWx0O1xuJGJvcmRlci1yYWRpdXMtbGFyZ2U6ICAgICAgICAgICA2cHggIWRlZmF1bHQ7XG4kYm9yZGVyLXJhZGl1cy14LWxhcmdlOiAgICAgICAgIDhweCAhZGVmYXVsdDtcbiRib3JkZXItcmFkaXVzLWV4dHJlbWU6ICAgICAgICAgMTJweCAhZGVmYXVsdDtcblxuJGJvcmRlci1yYWRpdXMtbm9uZS10b3A6ICAgICAgJGJvcmRlci1yYWRpdXMtbm9uZSAkYm9yZGVyLXJhZGl1cy1ub25lIDAgMCAhZGVmYXVsdDtcbiRib3JkZXItcmFkaXVzLW5vbmUtYm90dG9tOiAgIDAgMCAkYm9yZGVyLXJhZGl1cy1ub25lICRib3JkZXItcmFkaXVzLW5vbmUgIWRlZmF1bHQ7XG5cbiRib3JkZXItcmFkaXVzLXNtYWxsLXRvcDogICAgICAkYm9yZGVyLXJhZGl1cy1zbWFsbCAkYm9yZGVyLXJhZGl1cy1zbWFsbCAwIDAgIWRlZmF1bHQ7XG4kYm9yZGVyLXJhZGl1cy1zbWFsbC1ib3R0b206ICAgMCAwICRib3JkZXItcmFkaXVzLXNtYWxsICRib3JkZXItcmFkaXVzLXNtYWxsICFkZWZhdWx0O1xuXG4kYm9yZGVyLXJhZGl1cy1sYXJnZS10b3A6ICAgICAgJGJvcmRlci1yYWRpdXMtbGFyZ2UgJGJvcmRlci1yYWRpdXMtbGFyZ2UgMCAwICFkZWZhdWx0O1xuJGJvcmRlci1yYWRpdXMtbGFyZ2UtYm90dG9tOiAgIDAgMCAkYm9yZGVyLXJhZGl1cy1sYXJnZSAkYm9yZGVyLXJhZGl1cy1sYXJnZSAhZGVmYXVsdDtcblxuJGJ0bi1yb3VuZC1yYWRpdXM6ICAgICAgICAgICAgIDMwcHggIWRlZmF1bHQ7XG5cbiRoZWlnaHQtYmFzZTogICAgICAgICAgICAgICAgICA0MHB4ICFkZWZhdWx0O1xuXG4kZm9udC1zaXplLWJhc2U6ICAgICAgICAgICAgICAgMTRweCAhZGVmYXVsdDtcbiRmb250LXNpemUtc21hbGw6ICAgICAgICAgICAgICAxMnB4ICFkZWZhdWx0O1xuJGZvbnQtc2l6ZS1tZWRpdW06ICAgICAgICAgICAgIDE2cHggIWRlZmF1bHQ7XG4kZm9udC1zaXplLWxhcmdlOiAgICAgICAgICAgICAgMjBweCAhZGVmYXVsdDtcbiRmb250LXNpemUtbGFyZ2UtbmF2YmFyOiAgICAgICAyMnB4ICFkZWZhdWx0O1xuXG4kZm9udC1zaXplLWgxOiAgICAgICAgICAgICAgICAgMy42ZW0gIWRlZmF1bHQ7XG4kZm9udC1zaXplLWgyOiAgICAgICAgICAgICAgICAgMi44ZW0gIWRlZmF1bHQ7XG4kZm9udC1zaXplLWgzOiAgICAgICAgICAgICAgICAgMS44MjVlbSAhZGVmYXVsdDtcbiRmb250LXNpemUtaDQ6ICAgICAgICAgICAgICAgICAxLjZlbSAhZGVmYXVsdDtcbiRmb250LXNpemUtaDU6ICAgICAgICAgICAgICAgICAxLjM1ZW0gIWRlZmF1bHQ7XG4kZm9udC1zaXplLWg2OiAgICAgICAgICAgICAgICAgMC45ZW0gIWRlZmF1bHQ7XG4kZm9udC1wYXJhZ3JhcGg6ICAgICAgICAgICAgICAgMTVweCAhZGVmYXVsdDtcbiRmb250LXNpemUtbmF2YmFyOiAgICAgICAgICAgICAxNHB4ICFkZWZhdWx0O1xuXG4kZm9udC1zaXplLWluZm8taG9yaXpvbnRhbDogICAgMi41ZW0gIWRlZmF1bHQ7XG5cbiRmb250LXdlaWdodC1saWdodDogICAgICAgICAgMzAwICFkZWZhdWx0O1xuJGZvbnQtd2VpZ2h0LW5vcm1hbDogICAgICAgICA0MDAgIWRlZmF1bHQ7XG4kZm9udC13ZWlnaHQtc2VtaTogICAgICAgICAgIDUwMCAhZGVmYXVsdDtcbiRmb250LXdlaWdodC1ib2xkOiAgICAgICAgICAgNjAwICFkZWZhdWx0O1xuXG4kbGluZS1oZWlnaHQtc21hbGw6ICAgICAgICAgICAgMjBweCAhZGVmYXVsdDtcbiRsaW5lLWhlaWdodC1nZW5lcmFsOiAgICAgICAgICAxLjVlbSAhZGVmYXVsdDtcbiRsaW5lLWhlaWdodDogICAgICAgICAgICAgICAgIDM2cHggIWRlZmF1bHQ7XG4kbGluZS1oZWlnaHQtbGc6ICAgICAgICAgICAgICA1NHB4ICFkZWZhdWx0O1xuXG5cbiRib3JkZXItcmFkaXVzLXRvcDogICAgICAgIDEwcHggMTBweCAwIDAgIWRlZmF1bHQ7XG4kYm9yZGVyLXJhZGl1cy1ib3R0b206ICAgICAwIDAgMTBweCAxMHB4ICFkZWZhdWx0O1xuJGJvcmRlci1yYWRpdXMtZHJvcGRvd246ICAgMTBweCAxMHB4ICFkZWZhdWx0O1xuXG4kZHJvcGRvd24tc2hhZG93OiAgICAgICAgICAwIDJweCByZ2JhKDE3LCAxNiwgMTUsIDAuMSksIDAgMnB4IDEwcHggcmdiYSgxNywgMTYsIDE1LCAwLjEpO1xuXG4kZ2VuZXJhbC10cmFuc2l0aW9uLXRpbWU6ICAzMDBtcyAhZGVmYXVsdDtcblxuJHNsb3ctdHJhbnNpdGlvbi10aW1lOiAgICAgICAgICAgMzAwbXMgIWRlZmF1bHQ7XG4kZHJvcGRvd24tY29vcmRpbmF0ZXM6ICAgICAgMjlweCAtNTBweCAhZGVmYXVsdDtcblxuJGZhc3QtdHJhbnNpdGlvbi10aW1lOiAgICAgICAgICAgMTUwbXMgIWRlZmF1bHQ7XG4kc2VsZWN0LWNvb3JkaW5hdGVzOiAgICAgICAgIDUwJSAtNDBweCAhZGVmYXVsdDtcblxuJHRyYW5zaXRpb24tbGluZWFyOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZWFyICFkZWZhdWx0O1xuJHRyYW5zaXRpb24tYmV6aWVyOiAgICAgICAgIGN1YmljLWJlemllcigwLjM0LCAxLjYxLCAwLjcsIDEpICFkZWZhdWx0O1xuJHRyYW5zaXRpb24tZWFzZTogICAgICAgICAgIGVhc2UgMHM7XG5cbiRuYXZiYXItcGFkZGluZy1hOiAgICAgICAgICAgICAgIDEwcHggMTVweDtcbiRuYXZiYXItbWFyZ2luLWE6ICAgICAgICAgICAgICAgIDE1cHggIDBweDtcblxuJHBhZGRpbmctc29jaWFsLWE6ICAgICAgICAgICAgICAgMTBweCAgNXB4O1xuXG4kbmF2YmFyLW1hcmdpbi1hLWJ0bjogICAgICAgICAgICAxNXB4IDNweDtcbiRuYXZiYXItbWFyZ2luLWEtYnRuLXJvdW5kOiAgICAgIDE2cHggM3B4O1xuXG4kbmF2YmFyLXBhZGRpbmctYS1pY29uczogICAgICAgICA2cHggMTVweDtcbiRuYXZiYXItbWFyZ2luLWEtaWNvbnM6ICAgICAgICAgIDZweCAgM3B4O1xuXG4kbmF2YmFyLXBhZGRpbmctYnJhbmQ6ICAgICAgICAgICAyMHB4IDE1cHg7XG4kbmF2YmFyLW1hcmdpbi1icmFuZDogICAgICAgICAgICAgNXB4ICAwcHg7XG5cbiRuYXZiYXItbWFyZ2luLWJyYW5kLWljb25zOiAgICAgIDEycHggYXV0bztcblxuJG5hdmJhci1tYXJnaW4tYnRuOiAgICAgICAgICAgICAgMTVweCAgM3B4O1xuXG4kaGVpZ2h0LWljb246XHRcdFx0XHRcdCA2NHB4ICFkZWZhdWx0O1xuJHdpZHRoLWljb246XHRcdFx0XHRcdCA2NHB4ICFkZWZhdWx0O1xuJHBhZGRpbmctaWNvbjpcdFx0XHRcdFx0IDEycHggIWRlZmF1bHQ7XG4kYm9yZGVyLXJhZGl1cy1pY29uOlx0XHQgICAgIDE1cHggIWRlZmF1bHQ7XG5cbiRzaXplLWljb246IFx0XHRcdFx0XHQgNjRweDtcbiRzaXplLWljb24tc206IFx0XHRcdFx0XHQgMzJweDtcblxuXG4kaGVpZ2h0LWljb24tc206XHRcdFx0XHQgMzJweDtcbiR3aWR0aC1pY29uLXNtOlx0XHRcdFx0XHQgMzJweDtcbiRwYWRkaW5nLWljb24tc206XHRcdFx0ICAgICA0cHg7XG4kYm9yZGVyLXJhZGl1cy1pY29uLXNtOlx0XHRcdCA3cHg7XG5cbiRoZWlnaHQtaWNvbi1tZXNzYWdlOlx0XHRcdCA0MHB4O1xuJHdpZHRoLWljb24tbWVzc2FnZTpcdFx0XHQgNDBweDtcblxuJGhlaWdodC1pY29uLW1lc3NhZ2Utc206IFx0XHQgMjBweDtcbiR3aWR0aC1pY29uLW1lc3NhZ2Utc206XHRcdFx0IDIwcHg7XG5cblxuXG4kd2hpdGUtbmF2YmFyOiAgICAgICAgICAgICAgcmdiYSgjRkZGRkZGLCAuOTYpO1xuJGJsdWUtbmF2YmFyOiAgICAgICAgICAgICAgIHJnYmEoIzM0QUNEQywgLjk4KTtcbiRhenVyZS1uYXZiYXI6ICAgICAgICAgICAgICByZ2JhKCM1QkNBRkYsIC45OCk7XG4kZ3JlZW4tbmF2YmFyOiAgICAgICAgICAgICAgcmdiYSgjNENEOTY0LCAuOTgpO1xuJG9yYW5nZS1uYXZiYXI6ICAgICAgICAgICAgIHJnYmEoI0ZGOTUwMCwgLjk4KTtcbiRyZWQtbmF2YmFyOiAgICAgICAgICAgICAgICByZ2JhKCNGRjRDNDAsIC45OCk7XG5cbiRiZy1udWRlOiAgICAgICAgICAgICAgICNGRkZDRjUgIWRlZmF1bHQ7XG4kYmctcHJpbWFyeTogICAgICAgICAgICBsaWdodGVuKCRwcmltYXJ5LWNvbG9yLCA3JSkgIWRlZmF1bHQ7XG4kYmctaW5mbzogICAgICAgICAgICAgICBsaWdodGVuKCRpbmZvLWNvbG9yLCA3JSkgIWRlZmF1bHQ7XG4kYmctc3VjY2VzczogICAgICAgICAgICBsaWdodGVuKCRzdWNjZXNzLWNvbG9yLCA3JSkgIWRlZmF1bHQ7XG4kYmctd2FybmluZzogICAgICAgICAgICBsaWdodGVuKCR3YXJuaW5nLWNvbG9yLCA3JSkgIWRlZmF1bHQ7XG4kYmctZGFuZ2VyOiAgICAgICAgICAgICBsaWdodGVuKCRkYW5nZXItY29sb3IsIDclKSAhZGVmYXVsdDtcbiRiZy1icm93bjogICAgICAgICAgICAgIGxpZ2h0ZW4oJGJyb3duLWNvbG9yLCA3JSkgIWRlZmF1bHQ7XG4kYmctcHVycGxlOiAgICAgICAgICAgICBsaWdodGVuKCRwdXJwbGUtY29sb3IsIDclKSAhZGVmYXVsdDtcblxuJHByZWxvYWRlci1jb2xvcjogICAgICAgICAgI0Q4RDFDOSAhZGVmYXVsdDtcblxuJGZpbHRlci1ibHVlOiAgICAgICAgIGRhcmtlbigkcHJpbWFyeS1jb2xvciwgMTAlKTtcbiRmaWx0ZXItYXp1cmU6ICAgICAgICBkYXJrZW4oJGluZm8tY29sb3IsIDEwJSk7XG4kZmlsdGVyLWdyZWVuOiAgICAgICAgZGFya2VuKCRzdWNjZXNzLWNvbG9yLCAxMCUpO1xuJGZpbHRlci1vcmFuZ2U6ICAgICAgIGRhcmtlbigkd2FybmluZy1jb2xvciwgMTAlKTtcbiRmaWx0ZXItcmVkOiAgICAgICAgICBkYXJrZW4oJGRhbmdlci1jb2xvciwgMTAlKTtcblxuXG4kdG9wYmFyLXg6ICAgICAgICAgICAgIHRvcGJhci14ICFkZWZhdWx0O1xuJHRvcGJhci1iYWNrOiAgICAgICAgICB0b3BiYXItYmFjayAhZGVmYXVsdDtcbiRib3R0b21iYXIteDogICAgICAgICAgYm90dG9tYmFyLXggIWRlZmF1bHQ7XG4kYm90dG9tYmFyLWJhY2s6ICAgICAgIGJvdHRvbWJhci1iYWNrICFkZWZhdWx0O1xuXG4kc29jaWFsLWZhY2Vib29rOiBcdFx0XHQjM2I1OTk4O1xuJHNvY2lhbC10d2l0dGVyOiBcdFx0XHQjNTVhY2VlO1xuJHNvY2lhbC1waW50ZXJlc3Q6IFx0XHRcdCNjYzIxMjc7XG4kc29jaWFsLWdvb2dsZTogXHRcdFx0I2RkNGIzOTtcbiRzb2NpYWwtbGlua2VkaW46IFx0XHRcdCMwOTc2YjQ7XG4kc29jaWFsLWRyaWJiYmxlOiBcdFx0XHQjZWE0Yzg5O1xuJHNvY2lhbC1naXRodWI6IFx0XHRcdCMzMzMzMzM7XG4kc29jaWFsLXlvdXR1YmU6IFx0XHRcdCNlNTJkMjc7XG4kc29jaWFsLWluc3RhZ3JhbTogXHRcdCAgICAjMTI1Njg4O1xuJHNvY2lhbC1yZWRkaXQ6IFx0XHRcdCNmZjQ1MDA7XG4kc29jaWFsLXR1bWJscjogXHRcdFx0IzM1NDY1YztcblxuJGJhY2tncm91bmQtbGlnaHQtZ3JleTogICAgICNFOEU3RTMgIWRlZmF1bHQ7XG4kYmFja2dyb3VuZC1saWdodGVyLWdyZXk6ICAgI0YwRUZFQiAhZGVmYXVsdDtcbiRmb250LWJhY2tncm91bmQtbGlnaHQtZ3JleTogIzlDOUI5OSAhZGVmYXVsdDtcbiRmb250LWhvdmVyLWJhY2tncm91bmQtbGlnaHQtZ3JleTogIzVFNUU1QyAhZGVmYXVsdDtcblxuLy8gdmFyaWFibGVzIHVzZWQgaW4gaGVhZGVyc1xuJGhlYWRlci1iYWNrZ3JvdW5kOiAgICAgICAgICNCMkFGQUIgIWRlZmF1bHQ7XG5cbiRmaWx0ZXItcHJpbWFyeTogICAgICAgICBkYXJrZW4oJHByaW1hcnktY29sb3IsIDEwJSk7XG4kZmlsdGVyLWluZm86ICAgICAgICBkYXJrZW4oJGluZm8tY29sb3IsIDEwJSk7XG4kZmlsdGVyLXN1Y2Nlc3M6ICAgICAgICBkYXJrZW4oJHN1Y2Nlc3MtY29sb3IsIDEwJSk7XG4kZmlsdGVyLXdhcm5pbmc6ICAgICAgIGRhcmtlbigkd2FybmluZy1jb2xvciwgMTAlKTtcbiRmaWx0ZXItZGFuZ2VyOiAgICAgICAgICBkYXJrZW4oJGRhbmdlci1jb2xvciwgMTAlKTtcblxuLy8gdmFyaWFibGUgdXNlZCBpbiBmb290ZXJzXG4kYmxhY2stZm9vdGVyLWJnOiAgICAgICAgICAgICMyNTI0MjIgIWRlZmF1bHQ7XG4kYnJvd24tZm9udC1jb2xvcjogICAgICAgICAgICNBNDlFOUUgIWRlZmF1bHQ7XG4kYnJvd24tZm9udC1jb2xvci1ob3ZlcjogICAgICNGMUVBRTAgIWRlZmF1bHQ7XG5cbi8vdmFyaWFibGVzIHVzZWQgaW4gY2FyZHNcbiRjYXJkLWJsYWNrLWNvbG9yOiAgICAgICAgICAgIzMzMzMzMyAhZGVmYXVsdDtcbiRjYXJkLW11dGVkLWNvbG9yOiAgICAgICAgICAgI2NjYyAhZGVmYXVsdDtcblxuJGNhcmQtYmFja2dyb3VuZC1ibHVlOiAgICAgICNiOGQ4ZDggIWRlZmF1bHQ7XG4kY2FyZC1mb250LWJsdWU6ICAgICAgICAgICAgIzUwNjU2OCAhZGVmYXVsdDtcbiRjYXJkLXN1YnRpdGxlLWJsdWU6ICAgICAgICAjN2E5ZTlmICFkZWZhdWx0O1xuXG4kY2FyZC1iYWNrZ3JvdW5kLWdyZWVuOiAgICAgICNkNWU1YTMgIWRlZmF1bHQ7XG4kY2FyZC1mb250LWdyZWVuOiAgICAgICAgICAgICM2MDc3M2QgIWRlZmF1bHQ7XG4kY2FyZC1zdWJ0aXRsZS1ncmVlbjogICAgICAgICM5MmFjNTYgIWRlZmF1bHQ7XG5cbiRjYXJkLWJhY2tncm91bmQteWVsbG93OiAgICAgICNmZmUyOGMgIWRlZmF1bHQ7XG4kY2FyZC1mb250LXllbGxvdzogICAgICAgICAgICAjYjI1ODI1ICFkZWZhdWx0O1xuJGNhcmQtc3VidGl0bGUteWVsbG93OiAgICAgICAgI2Q4ODcxNSAhZGVmYXVsdDtcblxuJGNhcmQtYmFja2dyb3VuZC1icm93bjogICAgICAjZDZjMWFiICFkZWZhdWx0O1xuJGNhcmQtZm9udC1icm93bjogICAgICAgICAgICAjNzU0NDJlICFkZWZhdWx0O1xuJGNhcmQtc3VidGl0bGUtYnJvd246ICAgICAgICAjYTQ3ZTY1ICFkZWZhdWx0O1xuXG4kY2FyZC1iYWNrZ3JvdW5kLXB1cnBsZTogICAgICAjYmFhOWJhICFkZWZhdWx0O1xuJGNhcmQtZm9udC1wdXJwbGU6ICAgICAgICAgICAgIzNhMjgzZCAhZGVmYXVsdDtcbiRjYXJkLXN1YnRpdGxlLXB1cnBsZTogICAgICAgICM1YTI4M2QgIWRlZmF1bHQ7XG5cbiRjYXJkLWJhY2tncm91bmQtb3JhbmdlOiAgICAgICNmZjhmNWUgIWRlZmF1bHQ7XG4kY2FyZC1mb250LW9yYW5nZTogICAgICAgICAgICAjNzcyNTEwICFkZWZhdWx0O1xuJGNhcmQtc3VidGl0bGUtb3JhbmdlOiAgICAgICAgI2U5NWUzNyAhZGVmYXVsdDtcblxuJGNhcmQtYmFja2dyb3VuZC1wcmltYXJ5OiAgICAgIzQyN0M4OSAhZGVmYXVsdDtcbiRjYXJkLWJvcmRlci1jb2xvcjogICAgICAgICAgICM0MjdDODkgIWRlZmF1bHQ7XG5cbiRjb2xvci1yZWQtZXJyb3I6IHJnYigxODUsIDc0LCA3MikgIWRlZmF1bHQ7XG4kY29sb3ItZ3JleS1hcnJvdzogcmdiYSgyMDQsIDIwNCwgMjA0LCAwLjIpICFkZWZhdWx0O1xuXG4kd2lkdGgtZGVmYXVsdDogMjIwcHggIWRlZmF1bHQ7IC8vIDMgOTYwcHgtZ3JpZCBjb2x1bW5zXG5cbiR6aW5kZXgtc2VsZWN0LWRyb3Bkb3duOiAxMDYwICFkZWZhdWx0OyAvLyBtdXN0IGJlIGhpZ2hlciB0aGFuIGEgbW9kYWwgYmFja2dyb3VuZCAoMTA1MClcblxuLy8qKiBQbGFjZWhvbGRlciB0ZXh0IGNvbG9yXG4kaW5wdXQtY29sb3ItcGxhY2Vob2xkZXI6ICM5OTkgIWRlZmF1bHQ7XG4iLCIuaW1nLXJvdW5kZWR7XG4gICAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMtZXh0cmVtZTtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMgZWFzZSAwcztcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG59XG4uaW1nLWRldGFpbHN7XG4gICAgbWluLWhlaWdodDogNTBweDtcbiAgICBwYWRkaW5nOiAwIDRweCAwLjVlbTtcblxufVxuLmltZy1kZXRhaWxzIGltZ3tcbiAgICB3aWR0aDogNTBweDtcbn1cbi5pbWctZGV0YWlscyAuYXV0aG9ye1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIG1hcmdpbi10b3A6IC0yMXB4O1xuICAgIHdpZHRoOiA0MHB4O1xufVxuLmltZy1jaXJjbGV7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlLWNvbG9yO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgcGFkZGluZzogNHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJSAhaW1wb3J0YW50O1xuICAgIG1heC13aWR0aDogMTAwJTtcbn1cbi5pbWctdGh1bWJuYWlse1xuICAgIGJvcmRlcjogMCBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzLWV4dHJlbWU7XG4gICAgYm94LXNoYWRvdzogMCAxcHggMnB4IHJnYmEoMTY0LCAxNTgsIDE0NywgMC42KTtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLmltZy1uby1wYWRkaW5ne1xuICAgIHBhZGRpbmc6IDBweDtcbn1cbi5leGFtcGxlLXBhZ2UgLmltZy1yb3VuZGVke1xuICAgIG1hcmdpbjogNTBweCAwIDIwcHg7XG59XG4uaW1nLXNoYWRvd3tcbiAgICBib3gtc2hhZG93OiAwIDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLFxuICAgICAgICAgICAgICAgIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMiksXG4gICAgICAgICAgICAgICAgMCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpXG59XG4uaW1hZ2VzLXRpdGxle1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xufVxuLm5hdi1saW5rIC5wcm9maWxlLXBob3RvLXNtYWxse1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBtYXJnaW46IC0xMHB4IDAgMCAtMTVweDtcbn1cbi5wcm9maWxlLXBpY3R1cmV7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgLmZpbGVpbnB1dC1uZXcgaW1ne1xuICAgICAgICB3aWR0aDogMTUwcHg7XG4gICAgICAgIGhlaWdodDogMTUwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICB9XG4gICAgLmZpbGVpbnB1dC1leGlzdHMgaW1ne1xuICAgICAgICBtYXgtd2lkdGg6IDE1MHB4O1xuICAgICAgICBtYXgtaGVpZ2h0OiAxNTBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIH1cbn1cbiIsIkBpbXBvcnQgJ3BhcGVyLWtpdC92YXJpYWJsZXMnO1xuQGltcG9ydCAncGFwZXIta2l0L2ltYWdlcyc7XG5cbmltZyB7XG4gIEBleHRlbmQgLmltZy10aHVtYm5haWw7XG4gIG1heC13aWR0aDogMjAwcHg7XG59XG4iXX0= */"]
      });
      /***/
    },

    /***/
    "uJg1":
    /*!*****************************************************************!*\
      !*** ./libs/shared/static-pages/src/lib/static-pages.module.ts ***!
      \*****************************************************************/

    /*! exports provided: StaticPagesModule */

    /***/
    function uJg1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StaticPagesModule", function () {
        return StaticPagesModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @scullyio/ng-lib */
      "sbAP");
      /* harmony import */


      var _components_static_pages_staticpages_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./components/static-pages/staticpages.component */
      "lV9u");
      /* harmony import */


      var _staticpages_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./staticpages-routing.module */
      "N1wD");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var StaticPagesModule = function StaticPagesModule() {
        _classCallCheck(this, StaticPagesModule);
      };

      StaticPagesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
        type: StaticPagesModule
      });
      StaticPagesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
        factory: function StaticPagesModule_Factory(t) {
          return new (t || StaticPagesModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _staticpages_routing_module__WEBPACK_IMPORTED_MODULE_4__["StaticpagesRoutingModule"], _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_2__["ScullyLibModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](StaticPagesModule, {
          declarations: [_components_static_pages_staticpages_component__WEBPACK_IMPORTED_MODULE_3__["StaticpagesComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _staticpages_routing_module__WEBPACK_IMPORTED_MODULE_4__["StaticpagesRoutingModule"], _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_2__["ScullyLibModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"]]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=static-pages-shared-static-pages-es5.js.map
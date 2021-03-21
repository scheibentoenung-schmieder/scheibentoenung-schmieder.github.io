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
        styles: [".img-rounded[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  transition: opacity 0.5s ease 0s;\n  max-width: 100%;\n}\n.img-details[_ngcontent-%COMP%] {\n  min-height: 50px;\n  padding: 0 4px 0.5em;\n}\n.img-details[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 50px;\n}\n.img-details[_ngcontent-%COMP%]   .author[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  margin-top: -21px;\n  width: 40px;\n}\n.img-circle[_ngcontent-%COMP%] {\n  background-color: #FFFFFF;\n  margin-bottom: 10px;\n  padding: 4px;\n  border-radius: 50% !important;\n  max-width: 100%;\n}\n.img-thumbnail[_ngcontent-%COMP%], img[_ngcontent-%COMP%] {\n  border: 0 none;\n  border-radius: 12px;\n  box-shadow: 0 1px 2px rgba(164, 158, 147, 0.6);\n  margin-bottom: 10px;\n}\n.img-no-padding[_ngcontent-%COMP%] {\n  padding: 0px;\n}\n.example-page[_ngcontent-%COMP%]   .img-rounded[_ngcontent-%COMP%] {\n  margin: 50px 0 20px;\n}\n.img-shadow[_ngcontent-%COMP%] {\n  box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2);\n}\n.images-title[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  height: 50px;\n}\n.nav-link[_ngcontent-%COMP%]   .profile-photo-small[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 30px;\n  margin: -10px 0 0 -15px;\n}\n.profile-picture[_ngcontent-%COMP%] {\n  margin: 0 auto;\n}\n.profile-picture[_ngcontent-%COMP%]   .fileinput-new[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 150px;\n  border-radius: 50%;\n  margin-bottom: 10px;\n}\n.profile-picture[_ngcontent-%COMP%]   .fileinput-exists[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 150px;\n  max-height: 150px;\n  border-radius: 50%;\n  margin-bottom: 10px;\n}\nimg[_ngcontent-%COMP%] {\n  width: 100vw;\n}\n@media (min-width: 992px) {\n  img[_ngcontent-%COMP%] {\n    width: 400px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3VpLXBhcGVyLWtpdC9zcmMvbGliL2Fzc2V0cy9zYXNzL3BhcGVyLWtpdC9fdmFyaWFibGVzLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi91aS1wYXBlci1raXQvc3JjL2xpYi9hc3NldHMvc2Fzcy9wYXBlci1raXQvX2ltYWdlcy5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3RhdGljcGFnZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0VBLHlEQUFBO0FDbEVBO0VBQ0ksbUJEb0g0QjtFQ25INUIsZ0NBQUE7RUFDQSxlQUFBO0FDRUo7QURBQTtFQUNJLGdCQUFBO0VBQ0Esb0JBQUE7QUNHSjtBREFBO0VBQ0ksV0FBQTtBQ0dKO0FEREE7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQ0lKO0FERkE7RUFDSSx5QkRYeUI7RUNZekIsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0FDS0o7QURIQTtFQUNJLGNBQUE7RUFDQSxtQkQwRjRCO0VDekY1Qiw4Q0FBQTtFQUNBLG1CQUFBO0FDTUo7QURKQTtFQUNJLFlBQUE7QUNPSjtBRExBO0VBQ0ksbUJBQUE7QUNRSjtBRE5BO0VBQ0kscUhBQUE7QUNTSjtBRExBO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0FDUUo7QUROQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7QUNTSjtBRFBBO0VBQ0ksY0FBQTtBQ1VKO0FEVEk7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNXUjtBRFRJO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNXUjtBQXhFQTtFQUVFLFlBQUE7QUEwRUY7QUF6RUU7RUFIRjtJQUlJLFlBQUE7RUE0RUY7QUFDRiIsImZpbGUiOiJzdGF0aWNwYWdlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRmb250LWNvbG9yOiAgICAgICAgICAgICAgICAgIzY2NjE1YiAhZGVmYXVsdDtcbiRmaWxsLWZvbnQtY29sb3I6ICAgICAgICAgICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuJGZvbnQtZmFtaWx5LXNhbnMtc2VyaWY6ICAgICAnTW9udHNlcnJhdCcsIFwiSGVsdmV0aWNhXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuXG4kbm9uZTogICAgICAgICAgICAgICAgICAgICAgIDAgICAhZGVmYXVsdDtcbiRib3JkZXItdGhpbjogICAgICAgICAgICAgICAgMXB4ICFkZWZhdWx0O1xuJGJvcmRlci10aGljazogICAgICAgICAgICAgICAycHggIWRlZmF1bHQ7XG5cbiR3aGl0ZS1jb2xvcjogICAgICAgICAgICAgICAgI0ZGRkZGRiAhZGVmYXVsdDtcbiR3aGl0ZS1iZzogICAgICAgICAgICAgICAgICAgI0ZGRkZGRiAhZGVmYXVsdDtcbiR3aGl0ZS1zdGF0ZXMtY29sb3I6ICAgICAgICAgcmdiYSgkd2hpdGUtY29sb3IsIDAuOCk7XG5cbiRzbW9rZS1iZzogICAgICAgICAgICAgICAgICAgI0Y1RjVGNSAhZGVmYXVsdDtcbiRwYWxlLWJnOiAgICAgICAgICAgICAgICAgICAgI0ZGRkNGNSAhZGVmYXVsdDtcbiRtZWRpdW0tcGFsZS1iZzogICAgICAgICAgICAgI0YxRUFFMCAhZGVmYXVsdDtcblxuJHRhYmxlLWxpbmUtY29sb3I6ICAgICAgICAgICAjY2NjICFkZWZhdWx0O1xuJG11dGVkLWNvbG9yOiAgICAgICAgICAgICAgICAjYTQ5ZTkzICFkZWZhdWx0O1xuXG4kYmxhY2stYmc6ICAgICAgICAgICAgICAgICAgIHJnYmEoMzAsMzAsMzAsLjk3KSAhZGVmYXVsdDtcblxuJGJsYWNrLWNvbG9yOiAgICAgICAgICAgICAgICAjMzMzMzMzICFkZWZhdWx0O1xuJGJsYWNrLWhyOiAgICAgICAgICAgICAgICAgICAjNDQ0NDQ0ICFkZWZhdWx0O1xuXG4kbGlnaHQtZ3JheTogICAgICAgICAgICAgICAgICNFM0UzRTMgIWRlZmF1bHQ7XG4kbWVkaXVtLWdyYXk6ICAgICAgICAgICAgICAgICNEREREREQgIWRlZmF1bHQ7XG4kZGFyay1ncmF5OiAgICAgICAgICAgICAgICAgICM5QTlBOUEgIWRlZmF1bHQ7XG5cbiRwbGFjZWhvbGRlci1ncmF5OiAgICAgICAgICAgcmdiYSgyMTAsIDIxMCwgMjEwLCAxKSAgIWRlZmF1bHQ7XG5cbiRncmF5LWlucHV0LWJnOiAgICAgICAgICAgICAgI2ZmZmNmNSAhZGVmYXVsdDtcbiRkYW5nZXItaW5wdXQtYmc6ICAgICAgICAgICAgI0ZGQzBBNCAhZGVmYXVsdDtcbiRzdWNjZXNzLWlucHV0LWJnOiAgICAgICAgICAgI0FCRjNDQiAhZGVmYXVsdDtcbiRvdGhlci1tZWRpdW0tZ3JheTogICAgICAgICAgI0E0OUU5MyAhZGVmYXVsdDtcbiR0cmFuc3BhcmVudC1iZzogICAgICAgICAgICAgdHJhbnNwYXJlbnQgIWRlZmF1bHQ7XG5cbiRkZWZhdWx0LWNvbG9yOiAgICAgICAgICAgICAgIzY2NjE1QiAhZGVmYXVsdDtcbiRkZWZhdWx0LWJnOiAgICAgICAgICAgICAgICAgIzY2NjE1QiAhZGVmYXVsdDtcbiRkZWZhdWx0LXN0YXRlcy1jb2xvcjogICAgICAgIzQwM0QzOSAhZGVmYXVsdDtcblxuJHByaW1hcnktY29sb3I6ICAgICAgICAgICAgICAjNTFjYmNlICFkZWZhdWx0O1xuJHByaW1hcnktc3RhdGVzLWNvbG9yOiAgICAgICBkYXJrZW4oJHByaW1hcnktY29sb3IsIDEwJSkgIWRlZmF1bHQ7XG5cbiRzdWNjZXNzLWNvbG9yOiAgICAgICAgICAgICAgIzZiZDA5OCAhZGVmYXVsdDtcbiRzdWNjZXNzLXN0YXRlcy1jb2xvcjogICAgICAgZGFya2VuKCRzdWNjZXNzLWNvbG9yLCAxMCUpICFkZWZhdWx0O1xuXG4kaW5mby1jb2xvcjogICAgICAgICAgICAgICAgICM1MWJjZGEgIWRlZmF1bHQ7XG4kaW5mby1zdGF0ZXMtY29sb3I6ICAgICAgICAgIGRhcmtlbigkaW5mby1jb2xvciwgMTAlKSAhZGVmYXVsdDtcblxuJHdhcm5pbmctY29sb3I6ICAgICAgICAgICAgICAjZmJjNjU4ICFkZWZhdWx0O1xuJHdhcm5pbmctc3RhdGVzLWNvbG9yOiAgICAgICBkYXJrZW4oJHdhcm5pbmctY29sb3IsIDEwJSkgIWRlZmF1bHQ7XG5cbiRkYW5nZXItY29sb3I6ICAgICAgICAgICAgICAgI2Y1NTkzZCAhZGVmYXVsdDtcbiRkYW5nZXItc3RhdGVzLWNvbG9yOiAgICAgICAgZGFya2VuKCRkYW5nZXItY29sb3IsIDglKSAhZGVmYXVsdDtcblxuJGxpbmstZGlzYWJsZWQtY29sb3I6ICAgICAgICAjNjY2NjY2ICFkZWZhdWx0O1xuXG4kcHVycGxlLWNvbG9yOiAgICAgICAgICAgICAgICNjMTc4YzEgIWRlZmF1bHQ7XG4kcHVycGxlLXN0YXRlcy1jb2xvcjogICAgICAgIGRhcmtlbigkcHVycGxlLWNvbG9yLCA4JSkgIWRlZmF1bHQ7XG5cbiRicm93bi1jb2xvcjogICAgICAgICAgICAgICAgI2RjYjI4NSAhZGVmYXVsdDtcbiRicm93bi1zdGF0ZXMtY29sb3I6ICAgICAgICAgZGFya2VuKCRicm93bi1jb2xvciwgOCUpICFkZWZhdWx0O1xuXG5cblxuXG4vKiAgICAgIGxpZ2h0IGNvbG9ycyAtIHVzZWQgZm9yIHNlbGVjdCBkcm9wZG93biAgICAgICAgICovXG5cbiRsaWdodC1ibHVlOiAgICAgICAgICAgICAgICAgcmdiYSgkcHJpbWFyeS1jb2xvciwgLjIpO1xuJGxpZ2h0LWF6dXJlOiAgICAgICAgICAgICAgICByZ2JhKCRpbmZvLWNvbG9yLCAuMik7XG4kbGlnaHQtZ3JlZW46ICAgICAgICAgICAgICAgIHJnYmEoJHN1Y2Nlc3MtY29sb3IsIC4yKTtcbiRsaWdodC1vcmFuZ2U6ICAgICAgICAgICAgICAgcmdiYSgkd2FybmluZy1jb2xvciwgLjIpO1xuJGxpZ2h0LXJlZDogICAgICAgICAgICAgICAgICByZ2JhKCRkYW5nZXItY29sb3IsIC4yKTtcblxuXG4vLz09IENvbXBvbmVudHNcbi8vXG4kcGFkZGluZy1iYXNlLXZlcnRpY2FsOiAgICAgICAgIDdweCAhZGVmYXVsdDtcbiRwYWRkaW5nLWJhc2UtaG9yaXpvbnRhbDogICAgICAgMThweCAhZGVmYXVsdDtcblxuJHBhZGRpbmctcm91bmQtdmVydGljYWw6ICAgICAgICA5cHggIWRlZmF1bHQ7XG4kcGFkZGluZy1yb3VuZC1ob3Jpem9udGFsOiAgICAgMThweCAhZGVmYXVsdDtcblxuJHBhZGRpbmctc2ltcGxlLXZlcnRpY2FsOiAgICAgIDEwcHggIWRlZmF1bHQ7XG4kcGFkZGluZy1zaW1wbGUtaG9yaXpvbnRhbDogICAgMThweCAhZGVmYXVsdDtcblxuJHBhZGRpbmctbGFyZ2UtdmVydGljYWw6ICAgICAgIDExcHggIWRlZmF1bHQ7XG4kcGFkZGluZy1sYXJnZS1ob3Jpem9udGFsOiAgICAgMzBweCAhZGVmYXVsdDtcblxuJHBhZGRpbmctc21hbGwtdmVydGljYWw6ICAgICAgICA0cHggIWRlZmF1bHQ7XG4kcGFkZGluZy1zbWFsbC1ob3Jpem9udGFsOiAgICAgMTBweCAhZGVmYXVsdDtcblxuJHBhZGRpbmcteHMtdmVydGljYWw6ICAgICAgICAgICAycHggIWRlZmF1bHQ7XG4kcGFkZGluZy14cy1ob3Jpem9udGFsOiAgICAgICAgIDVweCAhZGVmYXVsdDtcblxuJHBhZGRpbmctbGFiZWwtdmVydGljYWw6ICAgICAgICAycHggIWRlZmF1bHQ7XG4kcGFkZGluZy1sYWJlbC1ob3Jpem9udGFsOiAgICAgMTJweCAhZGVmYXVsdDtcblxuLy8gcGFkZGluZyBmb3IgbGlua3MgaW5zaWRlIGRyb3Bkb3duIG1lbnVcbiRwYWRkaW5nLWRyb3Bkb3duLXZlcnRpY2FsOiAgICAgMTBweCAhZGVmYXVsdDtcbiRwYWRkaW5nLWRyb3Bkb3duLWhvcml6b250YWw6ICAgMTVweCAhZGVmYXVsdDtcblxuJG1hcmdpbi1sYXJnZS12ZXJ0aWNhbDogICAgICAgIDMwcHggIWRlZmF1bHQ7XG4kbWFyZ2luLWJhc2UtdmVydGljYWw6ICAgICAgICAgMTVweCAhZGVmYXVsdDtcblxuLy8gYm9yZGVyIHJhZGl1cyBmb3IgYnV0dG9uc1xuJGJvcmRlci1yYWRpdXMtbm9uZTogICAgICAgICAgICAgMHB4ICFkZWZhdWx0O1xuJGJvcmRlci1yYWRpdXMtYnRuLXNtYWxsOiAgICAgIDI2cHggIWRlZmF1bHQ7XG4kYm9yZGVyLXJhZGl1cy1idG4tYmFzZTogICAgICAgMjBweCAhZGVmYXVsdDtcbiRib3JkZXItcmFkaXVzLWJ0bi1sYXJnZTogICAgICA1MHB4ICFkZWZhdWx0O1xuXG5cbiRtYXJnaW4tYm90dG9tOiAgICAgICAgICAgICAgICAwIDAgMTBweCAwICFkZWZhdWx0O1xuJGJvcmRlci1yYWRpdXMtc21hbGw6ICAgICAgICAgICAzcHggIWRlZmF1bHQ7XG4kYm9yZGVyLXJhZGl1cy1iYXNlOiAgICAgICAgICAgIDRweCAhZGVmYXVsdDtcbiRib3JkZXItcmFkaXVzLWxhcmdlOiAgICAgICAgICAgNnB4ICFkZWZhdWx0O1xuJGJvcmRlci1yYWRpdXMteC1sYXJnZTogICAgICAgICA4cHggIWRlZmF1bHQ7XG4kYm9yZGVyLXJhZGl1cy1leHRyZW1lOiAgICAgICAgIDEycHggIWRlZmF1bHQ7XG5cbiRib3JkZXItcmFkaXVzLW5vbmUtdG9wOiAgICAgICRib3JkZXItcmFkaXVzLW5vbmUgJGJvcmRlci1yYWRpdXMtbm9uZSAwIDAgIWRlZmF1bHQ7XG4kYm9yZGVyLXJhZGl1cy1ub25lLWJvdHRvbTogICAwIDAgJGJvcmRlci1yYWRpdXMtbm9uZSAkYm9yZGVyLXJhZGl1cy1ub25lICFkZWZhdWx0O1xuXG4kYm9yZGVyLXJhZGl1cy1zbWFsbC10b3A6ICAgICAgJGJvcmRlci1yYWRpdXMtc21hbGwgJGJvcmRlci1yYWRpdXMtc21hbGwgMCAwICFkZWZhdWx0O1xuJGJvcmRlci1yYWRpdXMtc21hbGwtYm90dG9tOiAgIDAgMCAkYm9yZGVyLXJhZGl1cy1zbWFsbCAkYm9yZGVyLXJhZGl1cy1zbWFsbCAhZGVmYXVsdDtcblxuJGJvcmRlci1yYWRpdXMtbGFyZ2UtdG9wOiAgICAgICRib3JkZXItcmFkaXVzLWxhcmdlICRib3JkZXItcmFkaXVzLWxhcmdlIDAgMCAhZGVmYXVsdDtcbiRib3JkZXItcmFkaXVzLWxhcmdlLWJvdHRvbTogICAwIDAgJGJvcmRlci1yYWRpdXMtbGFyZ2UgJGJvcmRlci1yYWRpdXMtbGFyZ2UgIWRlZmF1bHQ7XG5cbiRidG4tcm91bmQtcmFkaXVzOiAgICAgICAgICAgICAzMHB4ICFkZWZhdWx0O1xuXG4kaGVpZ2h0LWJhc2U6ICAgICAgICAgICAgICAgICAgNDBweCAhZGVmYXVsdDtcblxuJGZvbnQtc2l6ZS1iYXNlOiAgICAgICAgICAgICAgIDE0cHggIWRlZmF1bHQ7XG4kZm9udC1zaXplLXNtYWxsOiAgICAgICAgICAgICAgMTJweCAhZGVmYXVsdDtcbiRmb250LXNpemUtbWVkaXVtOiAgICAgICAgICAgICAxNnB4ICFkZWZhdWx0O1xuJGZvbnQtc2l6ZS1sYXJnZTogICAgICAgICAgICAgIDIwcHggIWRlZmF1bHQ7XG4kZm9udC1zaXplLWxhcmdlLW5hdmJhcjogICAgICAgMjJweCAhZGVmYXVsdDtcblxuJGZvbnQtc2l6ZS1oMTogICAgICAgICAgICAgICAgIDMuNmVtICFkZWZhdWx0O1xuJGZvbnQtc2l6ZS1oMjogICAgICAgICAgICAgICAgIDIuOGVtICFkZWZhdWx0O1xuJGZvbnQtc2l6ZS1oMzogICAgICAgICAgICAgICAgIDEuODI1ZW0gIWRlZmF1bHQ7XG4kZm9udC1zaXplLWg0OiAgICAgICAgICAgICAgICAgMS42ZW0gIWRlZmF1bHQ7XG4kZm9udC1zaXplLWg1OiAgICAgICAgICAgICAgICAgMS4zNWVtICFkZWZhdWx0O1xuJGZvbnQtc2l6ZS1oNjogICAgICAgICAgICAgICAgIDAuOWVtICFkZWZhdWx0O1xuJGZvbnQtcGFyYWdyYXBoOiAgICAgICAgICAgICAgIDE1cHggIWRlZmF1bHQ7XG4kZm9udC1zaXplLW5hdmJhcjogICAgICAgICAgICAgMTRweCAhZGVmYXVsdDtcblxuJGZvbnQtc2l6ZS1pbmZvLWhvcml6b250YWw6ICAgIDIuNWVtICFkZWZhdWx0O1xuXG4kZm9udC13ZWlnaHQtbGlnaHQ6ICAgICAgICAgIDMwMCAhZGVmYXVsdDtcbiRmb250LXdlaWdodC1ub3JtYWw6ICAgICAgICAgNDAwICFkZWZhdWx0O1xuJGZvbnQtd2VpZ2h0LXNlbWk6ICAgICAgICAgICA1MDAgIWRlZmF1bHQ7XG4kZm9udC13ZWlnaHQtYm9sZDogICAgICAgICAgIDYwMCAhZGVmYXVsdDtcblxuJGxpbmUtaGVpZ2h0LXNtYWxsOiAgICAgICAgICAgIDIwcHggIWRlZmF1bHQ7XG4kbGluZS1oZWlnaHQtZ2VuZXJhbDogICAgICAgICAgMS41ZW0gIWRlZmF1bHQ7XG4kbGluZS1oZWlnaHQ6ICAgICAgICAgICAgICAgICAzNnB4ICFkZWZhdWx0O1xuJGxpbmUtaGVpZ2h0LWxnOiAgICAgICAgICAgICAgNTRweCAhZGVmYXVsdDtcblxuXG4kYm9yZGVyLXJhZGl1cy10b3A6ICAgICAgICAxMHB4IDEwcHggMCAwICFkZWZhdWx0O1xuJGJvcmRlci1yYWRpdXMtYm90dG9tOiAgICAgMCAwIDEwcHggMTBweCAhZGVmYXVsdDtcbiRib3JkZXItcmFkaXVzLWRyb3Bkb3duOiAgIDEwcHggMTBweCAhZGVmYXVsdDtcblxuJGRyb3Bkb3duLXNoYWRvdzogICAgICAgICAgMCAycHggcmdiYSgxNywgMTYsIDE1LCAwLjEpLCAwIDJweCAxMHB4IHJnYmEoMTcsIDE2LCAxNSwgMC4xKTtcblxuJGdlbmVyYWwtdHJhbnNpdGlvbi10aW1lOiAgMzAwbXMgIWRlZmF1bHQ7XG5cbiRzbG93LXRyYW5zaXRpb24tdGltZTogICAgICAgICAgIDMwMG1zICFkZWZhdWx0O1xuJGRyb3Bkb3duLWNvb3JkaW5hdGVzOiAgICAgIDI5cHggLTUwcHggIWRlZmF1bHQ7XG5cbiRmYXN0LXRyYW5zaXRpb24tdGltZTogICAgICAgICAgIDE1MG1zICFkZWZhdWx0O1xuJHNlbGVjdC1jb29yZGluYXRlczogICAgICAgICA1MCUgLTQwcHggIWRlZmF1bHQ7XG5cbiR0cmFuc2l0aW9uLWxpbmVhcjogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVhciAhZGVmYXVsdDtcbiR0cmFuc2l0aW9uLWJlemllcjogICAgICAgICBjdWJpYy1iZXppZXIoMC4zNCwgMS42MSwgMC43LCAxKSAhZGVmYXVsdDtcbiR0cmFuc2l0aW9uLWVhc2U6ICAgICAgICAgICBlYXNlIDBzO1xuXG4kbmF2YmFyLXBhZGRpbmctYTogICAgICAgICAgICAgICAxMHB4IDE1cHg7XG4kbmF2YmFyLW1hcmdpbi1hOiAgICAgICAgICAgICAgICAxNXB4ICAwcHg7XG5cbiRwYWRkaW5nLXNvY2lhbC1hOiAgICAgICAgICAgICAgIDEwcHggIDVweDtcblxuJG5hdmJhci1tYXJnaW4tYS1idG46ICAgICAgICAgICAgMTVweCAzcHg7XG4kbmF2YmFyLW1hcmdpbi1hLWJ0bi1yb3VuZDogICAgICAxNnB4IDNweDtcblxuJG5hdmJhci1wYWRkaW5nLWEtaWNvbnM6ICAgICAgICAgNnB4IDE1cHg7XG4kbmF2YmFyLW1hcmdpbi1hLWljb25zOiAgICAgICAgICA2cHggIDNweDtcblxuJG5hdmJhci1wYWRkaW5nLWJyYW5kOiAgICAgICAgICAgMjBweCAxNXB4O1xuJG5hdmJhci1tYXJnaW4tYnJhbmQ6ICAgICAgICAgICAgIDVweCAgMHB4O1xuXG4kbmF2YmFyLW1hcmdpbi1icmFuZC1pY29uczogICAgICAxMnB4IGF1dG87XG5cbiRuYXZiYXItbWFyZ2luLWJ0bjogICAgICAgICAgICAgIDE1cHggIDNweDtcblxuJGhlaWdodC1pY29uOlx0XHRcdFx0XHQgNjRweCAhZGVmYXVsdDtcbiR3aWR0aC1pY29uOlx0XHRcdFx0XHQgNjRweCAhZGVmYXVsdDtcbiRwYWRkaW5nLWljb246XHRcdFx0XHRcdCAxMnB4ICFkZWZhdWx0O1xuJGJvcmRlci1yYWRpdXMtaWNvbjpcdFx0ICAgICAxNXB4ICFkZWZhdWx0O1xuXG4kc2l6ZS1pY29uOiBcdFx0XHRcdFx0IDY0cHg7XG4kc2l6ZS1pY29uLXNtOiBcdFx0XHRcdFx0IDMycHg7XG5cblxuJGhlaWdodC1pY29uLXNtOlx0XHRcdFx0IDMycHg7XG4kd2lkdGgtaWNvbi1zbTpcdFx0XHRcdFx0IDMycHg7XG4kcGFkZGluZy1pY29uLXNtOlx0XHRcdCAgICAgNHB4O1xuJGJvcmRlci1yYWRpdXMtaWNvbi1zbTpcdFx0XHQgN3B4O1xuXG4kaGVpZ2h0LWljb24tbWVzc2FnZTpcdFx0XHQgNDBweDtcbiR3aWR0aC1pY29uLW1lc3NhZ2U6XHRcdFx0IDQwcHg7XG5cbiRoZWlnaHQtaWNvbi1tZXNzYWdlLXNtOiBcdFx0IDIwcHg7XG4kd2lkdGgtaWNvbi1tZXNzYWdlLXNtOlx0XHRcdCAyMHB4O1xuXG5cblxuJHdoaXRlLW5hdmJhcjogICAgICAgICAgICAgIHJnYmEoI0ZGRkZGRiwgLjk2KTtcbiRibHVlLW5hdmJhcjogICAgICAgICAgICAgICByZ2JhKCMzNEFDREMsIC45OCk7XG4kYXp1cmUtbmF2YmFyOiAgICAgICAgICAgICAgcmdiYSgjNUJDQUZGLCAuOTgpO1xuJGdyZWVuLW5hdmJhcjogICAgICAgICAgICAgIHJnYmEoIzRDRDk2NCwgLjk4KTtcbiRvcmFuZ2UtbmF2YmFyOiAgICAgICAgICAgICByZ2JhKCNGRjk1MDAsIC45OCk7XG4kcmVkLW5hdmJhcjogICAgICAgICAgICAgICAgcmdiYSgjRkY0QzQwLCAuOTgpO1xuXG4kYmctbnVkZTogICAgICAgICAgICAgICAjRkZGQ0Y1ICFkZWZhdWx0O1xuJGJnLXByaW1hcnk6ICAgICAgICAgICAgbGlnaHRlbigkcHJpbWFyeS1jb2xvciwgNyUpICFkZWZhdWx0O1xuJGJnLWluZm86ICAgICAgICAgICAgICAgbGlnaHRlbigkaW5mby1jb2xvciwgNyUpICFkZWZhdWx0O1xuJGJnLXN1Y2Nlc3M6ICAgICAgICAgICAgbGlnaHRlbigkc3VjY2Vzcy1jb2xvciwgNyUpICFkZWZhdWx0O1xuJGJnLXdhcm5pbmc6ICAgICAgICAgICAgbGlnaHRlbigkd2FybmluZy1jb2xvciwgNyUpICFkZWZhdWx0O1xuJGJnLWRhbmdlcjogICAgICAgICAgICAgbGlnaHRlbigkZGFuZ2VyLWNvbG9yLCA3JSkgIWRlZmF1bHQ7XG4kYmctYnJvd246ICAgICAgICAgICAgICBsaWdodGVuKCRicm93bi1jb2xvciwgNyUpICFkZWZhdWx0O1xuJGJnLXB1cnBsZTogICAgICAgICAgICAgbGlnaHRlbigkcHVycGxlLWNvbG9yLCA3JSkgIWRlZmF1bHQ7XG5cbiRwcmVsb2FkZXItY29sb3I6ICAgICAgICAgICNEOEQxQzkgIWRlZmF1bHQ7XG5cbiRmaWx0ZXItYmx1ZTogICAgICAgICBkYXJrZW4oJHByaW1hcnktY29sb3IsIDEwJSk7XG4kZmlsdGVyLWF6dXJlOiAgICAgICAgZGFya2VuKCRpbmZvLWNvbG9yLCAxMCUpO1xuJGZpbHRlci1ncmVlbjogICAgICAgIGRhcmtlbigkc3VjY2Vzcy1jb2xvciwgMTAlKTtcbiRmaWx0ZXItb3JhbmdlOiAgICAgICBkYXJrZW4oJHdhcm5pbmctY29sb3IsIDEwJSk7XG4kZmlsdGVyLXJlZDogICAgICAgICAgZGFya2VuKCRkYW5nZXItY29sb3IsIDEwJSk7XG5cblxuJHRvcGJhci14OiAgICAgICAgICAgICB0b3BiYXIteCAhZGVmYXVsdDtcbiR0b3BiYXItYmFjazogICAgICAgICAgdG9wYmFyLWJhY2sgIWRlZmF1bHQ7XG4kYm90dG9tYmFyLXg6ICAgICAgICAgIGJvdHRvbWJhci14ICFkZWZhdWx0O1xuJGJvdHRvbWJhci1iYWNrOiAgICAgICBib3R0b21iYXItYmFjayAhZGVmYXVsdDtcblxuJHNvY2lhbC1mYWNlYm9vazogXHRcdFx0IzNiNTk5ODtcbiRzb2NpYWwtdHdpdHRlcjogXHRcdFx0IzU1YWNlZTtcbiRzb2NpYWwtcGludGVyZXN0OiBcdFx0XHQjY2MyMTI3O1xuJHNvY2lhbC1nb29nbGU6IFx0XHRcdCNkZDRiMzk7XG4kc29jaWFsLWxpbmtlZGluOiBcdFx0XHQjMDk3NmI0O1xuJHNvY2lhbC1kcmliYmJsZTogXHRcdFx0I2VhNGM4OTtcbiRzb2NpYWwtZ2l0aHViOiBcdFx0XHQjMzMzMzMzO1xuJHNvY2lhbC15b3V0dWJlOiBcdFx0XHQjZTUyZDI3O1xuJHNvY2lhbC1pbnN0YWdyYW06IFx0XHQgICAgIzEyNTY4ODtcbiRzb2NpYWwtcmVkZGl0OiBcdFx0XHQjZmY0NTAwO1xuJHNvY2lhbC10dW1ibHI6IFx0XHRcdCMzNTQ2NWM7XG5cbiRiYWNrZ3JvdW5kLWxpZ2h0LWdyZXk6ICAgICAjRThFN0UzICFkZWZhdWx0O1xuJGJhY2tncm91bmQtbGlnaHRlci1ncmV5OiAgICNGMEVGRUIgIWRlZmF1bHQ7XG4kZm9udC1iYWNrZ3JvdW5kLWxpZ2h0LWdyZXk6ICM5QzlCOTkgIWRlZmF1bHQ7XG4kZm9udC1ob3Zlci1iYWNrZ3JvdW5kLWxpZ2h0LWdyZXk6ICM1RTVFNUMgIWRlZmF1bHQ7XG5cbi8vIHZhcmlhYmxlcyB1c2VkIGluIGhlYWRlcnNcbiRoZWFkZXItYmFja2dyb3VuZDogICAgICAgICAjQjJBRkFCICFkZWZhdWx0O1xuXG4kZmlsdGVyLXByaW1hcnk6ICAgICAgICAgZGFya2VuKCRwcmltYXJ5LWNvbG9yLCAxMCUpO1xuJGZpbHRlci1pbmZvOiAgICAgICAgZGFya2VuKCRpbmZvLWNvbG9yLCAxMCUpO1xuJGZpbHRlci1zdWNjZXNzOiAgICAgICAgZGFya2VuKCRzdWNjZXNzLWNvbG9yLCAxMCUpO1xuJGZpbHRlci13YXJuaW5nOiAgICAgICBkYXJrZW4oJHdhcm5pbmctY29sb3IsIDEwJSk7XG4kZmlsdGVyLWRhbmdlcjogICAgICAgICAgZGFya2VuKCRkYW5nZXItY29sb3IsIDEwJSk7XG5cbi8vIHZhcmlhYmxlIHVzZWQgaW4gZm9vdGVyc1xuJGJsYWNrLWZvb3Rlci1iZzogICAgICAgICAgICAjMjUyNDIyICFkZWZhdWx0O1xuJGJyb3duLWZvbnQtY29sb3I6ICAgICAgICAgICAjQTQ5RTlFICFkZWZhdWx0O1xuJGJyb3duLWZvbnQtY29sb3ItaG92ZXI6ICAgICAjRjFFQUUwICFkZWZhdWx0O1xuXG4vL3ZhcmlhYmxlcyB1c2VkIGluIGNhcmRzXG4kY2FyZC1ibGFjay1jb2xvcjogICAgICAgICAgICMzMzMzMzMgIWRlZmF1bHQ7XG4kY2FyZC1tdXRlZC1jb2xvcjogICAgICAgICAgICNjY2MgIWRlZmF1bHQ7XG5cbiRjYXJkLWJhY2tncm91bmQtYmx1ZTogICAgICAjYjhkOGQ4ICFkZWZhdWx0O1xuJGNhcmQtZm9udC1ibHVlOiAgICAgICAgICAgICM1MDY1NjggIWRlZmF1bHQ7XG4kY2FyZC1zdWJ0aXRsZS1ibHVlOiAgICAgICAgIzdhOWU5ZiAhZGVmYXVsdDtcblxuJGNhcmQtYmFja2dyb3VuZC1ncmVlbjogICAgICAjZDVlNWEzICFkZWZhdWx0O1xuJGNhcmQtZm9udC1ncmVlbjogICAgICAgICAgICAjNjA3NzNkICFkZWZhdWx0O1xuJGNhcmQtc3VidGl0bGUtZ3JlZW46ICAgICAgICAjOTJhYzU2ICFkZWZhdWx0O1xuXG4kY2FyZC1iYWNrZ3JvdW5kLXllbGxvdzogICAgICAjZmZlMjhjICFkZWZhdWx0O1xuJGNhcmQtZm9udC15ZWxsb3c6ICAgICAgICAgICAgI2IyNTgyNSAhZGVmYXVsdDtcbiRjYXJkLXN1YnRpdGxlLXllbGxvdzogICAgICAgICNkODg3MTUgIWRlZmF1bHQ7XG5cbiRjYXJkLWJhY2tncm91bmQtYnJvd246ICAgICAgI2Q2YzFhYiAhZGVmYXVsdDtcbiRjYXJkLWZvbnQtYnJvd246ICAgICAgICAgICAgIzc1NDQyZSAhZGVmYXVsdDtcbiRjYXJkLXN1YnRpdGxlLWJyb3duOiAgICAgICAgI2E0N2U2NSAhZGVmYXVsdDtcblxuJGNhcmQtYmFja2dyb3VuZC1wdXJwbGU6ICAgICAgI2JhYTliYSAhZGVmYXVsdDtcbiRjYXJkLWZvbnQtcHVycGxlOiAgICAgICAgICAgICMzYTI4M2QgIWRlZmF1bHQ7XG4kY2FyZC1zdWJ0aXRsZS1wdXJwbGU6ICAgICAgICAjNWEyODNkICFkZWZhdWx0O1xuXG4kY2FyZC1iYWNrZ3JvdW5kLW9yYW5nZTogICAgICAjZmY4ZjVlICFkZWZhdWx0O1xuJGNhcmQtZm9udC1vcmFuZ2U6ICAgICAgICAgICAgIzc3MjUxMCAhZGVmYXVsdDtcbiRjYXJkLXN1YnRpdGxlLW9yYW5nZTogICAgICAgICNlOTVlMzcgIWRlZmF1bHQ7XG5cbiRjYXJkLWJhY2tncm91bmQtcHJpbWFyeTogICAgICM0MjdDODkgIWRlZmF1bHQ7XG4kY2FyZC1ib3JkZXItY29sb3I6ICAgICAgICAgICAjNDI3Qzg5ICFkZWZhdWx0O1xuXG4kY29sb3ItcmVkLWVycm9yOiByZ2IoMTg1LCA3NCwgNzIpICFkZWZhdWx0O1xuJGNvbG9yLWdyZXktYXJyb3c6IHJnYmEoMjA0LCAyMDQsIDIwNCwgMC4yKSAhZGVmYXVsdDtcblxuJHdpZHRoLWRlZmF1bHQ6IDIyMHB4ICFkZWZhdWx0OyAvLyAzIDk2MHB4LWdyaWQgY29sdW1uc1xuXG4kemluZGV4LXNlbGVjdC1kcm9wZG93bjogMTA2MCAhZGVmYXVsdDsgLy8gbXVzdCBiZSBoaWdoZXIgdGhhbiBhIG1vZGFsIGJhY2tncm91bmQgKDEwNTApXG5cbi8vKiogUGxhY2Vob2xkZXIgdGV4dCBjb2xvclxuJGlucHV0LWNvbG9yLXBsYWNlaG9sZGVyOiAjOTk5ICFkZWZhdWx0O1xuIiwiLmltZy1yb3VuZGVke1xuICAgIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzLWV4dHJlbWU7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzIGVhc2UgMHM7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xufVxuLmltZy1kZXRhaWxze1xuICAgIG1pbi1oZWlnaHQ6IDUwcHg7XG4gICAgcGFkZGluZzogMCA0cHggMC41ZW07XG5cbn1cbi5pbWctZGV0YWlscyBpbWd7XG4gICAgd2lkdGg6IDUwcHg7XG59XG4uaW1nLWRldGFpbHMgLmF1dGhvcntcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBtYXJnaW4tdG9wOiAtMjFweDtcbiAgICB3aWR0aDogNDBweDtcbn1cbi5pbWctY2lyY2xle1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZS1jb2xvcjtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIHBhZGRpbmc6IDRweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCUgIWltcG9ydGFudDtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG59XG4uaW1nLXRodW1ibmFpbHtcbiAgICBib3JkZXI6IDAgbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy1leHRyZW1lO1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDJweCByZ2JhKDE2NCwgMTU4LCAxNDcsIDAuNik7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5pbWctbm8tcGFkZGluZ3tcbiAgICBwYWRkaW5nOiAwcHg7XG59XG4uZXhhbXBsZS1wYWdlIC5pbWctcm91bmRlZHtcbiAgICBtYXJnaW46IDUwcHggMCAyMHB4O1xufVxuLmltZy1zaGFkb3d7XG4gICAgYm94LXNoYWRvdzogMCA4cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSxcbiAgICAgICAgICAgICAgICAwIDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpLFxuICAgICAgICAgICAgICAgIDAgNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKVxufVxuLmltYWdlcy10aXRsZXtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIGhlaWdodDogNTBweDtcbn1cbi5uYXYtbGluayAucHJvZmlsZS1waG90by1zbWFsbHtcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgbWFyZ2luOiAtMTBweCAwIDAgLTE1cHg7XG59XG4ucHJvZmlsZS1waWN0dXJle1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIC5maWxlaW5wdXQtbmV3IGltZ3tcbiAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICBoZWlnaHQ6IDE1MHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgfVxuICAgIC5maWxlaW5wdXQtZXhpc3RzIGltZ3tcbiAgICAgICAgbWF4LXdpZHRoOiAxNTBweDtcbiAgICAgICAgbWF4LWhlaWdodDogMTUwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICB9XG59XG4iLCJAaW1wb3J0ICdwYXBlci1raXQvdmFyaWFibGVzJztcbkBpbXBvcnQgJ3BhcGVyLWtpdC9pbWFnZXMnO1xuaW1nIHtcbiAgQGV4dGVuZCAuaW1nLXRodW1ibmFpbDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgICB3aWR0aDogNDAwcHg7XG4gIH1cbn1cbiJdfQ== */"]
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
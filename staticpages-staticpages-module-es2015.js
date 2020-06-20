(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["staticpages-staticpages-module"],{

/***/ "./src/app/staticpages/staticpages-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/staticpages/staticpages-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: StaticpagesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticpagesRoutingModule", function() { return StaticpagesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _staticpages_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./staticpages.component */ "./src/app/staticpages/staticpages.component.ts");





const routes = [
    {
        path: ':id',
        component: _staticpages_component__WEBPACK_IMPORTED_MODULE_2__["StaticpagesComponent"],
    },
    {
        path: '**',
        component: _staticpages_component__WEBPACK_IMPORTED_MODULE_2__["StaticpagesComponent"],
    }
];
class StaticpagesRoutingModule {
}
StaticpagesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: StaticpagesRoutingModule });
StaticpagesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function StaticpagesRoutingModule_Factory(t) { return new (t || StaticpagesRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](StaticpagesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StaticpagesRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/staticpages/staticpages.component.ts":
/*!******************************************************!*\
  !*** ./src/app/staticpages/staticpages.component.ts ***!
  \******************************************************/
/*! exports provided: StaticpagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticpagesComponent", function() { return StaticpagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @scullyio/ng-lib */ "../../node_modules/@scullyio/ng-lib/__ivy_ngcc__/fesm2015/scullyio-ng-lib.js");





class StaticpagesComponent {
    constructor(router, route) {
        this.router = router;
        this.route = route;
    }
    ngOnInit() { }
}
StaticpagesComponent.ɵfac = function StaticpagesComponent_Factory(t) { return new (t || StaticpagesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
StaticpagesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StaticpagesComponent, selectors: [["scheibentoenung-schmieder-staticpages"]], decls: 13, vars: 0, template: function StaticpagesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "ScullyIo content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "scully-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "End of content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\n");
    } }, directives: [_scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_2__["ScullyContentComponent"]], styles: ["h1[_ngcontent-%COMP%] {\r\n  color:rgb(51, 6, 37);\r\n  background-color: rgb(248, 211, 236);\r\n  padding: 5px;\r\n  border-radius: 5px;\r\n  width: -webkit-fit-content;\r\n  width: -moz-fit-content;\r\n  width: fit-content;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcHMvc2NoZWliZW50b2VudW5nL3NyYy9hcHAvc3RhdGljcGFnZXMvc3RhdGljcGFnZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFvQjtFQUNwQixvQ0FBb0M7RUFDcEMsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQiwwQkFBa0I7RUFBbEIsdUJBQWtCO0VBQWxCLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJhcHBzL3NjaGVpYmVudG9lbnVuZy9zcmMvYXBwL3N0YXRpY3BhZ2VzL3N0YXRpY3BhZ2VzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSB7XHJcbiAgY29sb3I6cmdiKDUxLCA2LCAzNyk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0OCwgMjExLCAyMzYpO1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StaticpagesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'scheibentoenung-schmieder-staticpages',
                templateUrl: './staticpages.component.html',
                styleUrls: ['./staticpages.component.css'],
                preserveWhitespaces: true,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].Emulated
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/staticpages/staticpages.module.ts":
/*!***************************************************!*\
  !*** ./src/app/staticpages/staticpages.module.ts ***!
  \***************************************************/
/*! exports provided: StaticpagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticpagesModule", function() { return StaticpagesModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @scullyio/ng-lib */ "../../node_modules/@scullyio/ng-lib/__ivy_ngcc__/fesm2015/scullyio-ng-lib.js");
/* harmony import */ var _staticpages_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./staticpages-routing.module */ "./src/app/staticpages/staticpages-routing.module.ts");
/* harmony import */ var _staticpages_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./staticpages.component */ "./src/app/staticpages/staticpages.component.ts");






class StaticpagesModule {
}
StaticpagesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: StaticpagesModule });
StaticpagesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function StaticpagesModule_Factory(t) { return new (t || StaticpagesModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _staticpages_routing_module__WEBPACK_IMPORTED_MODULE_3__["StaticpagesRoutingModule"], _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_2__["ScullyLibModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](StaticpagesModule, { declarations: [_staticpages_component__WEBPACK_IMPORTED_MODULE_4__["StaticpagesComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _staticpages_routing_module__WEBPACK_IMPORTED_MODULE_3__["StaticpagesRoutingModule"], _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_2__["ScullyLibModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](StaticpagesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_staticpages_component__WEBPACK_IMPORTED_MODULE_4__["StaticpagesComponent"]],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _staticpages_routing_module__WEBPACK_IMPORTED_MODULE_3__["StaticpagesRoutingModule"], _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_2__["ScullyLibModule"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=staticpages-staticpages-module-es2015.js.map
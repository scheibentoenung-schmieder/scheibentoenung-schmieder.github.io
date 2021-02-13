(function () {
  function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

  function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["scheibentoenung-schmieder-home"], {
    /***/
    "0X/+":
    /*!*************************************************************!*\
      !*** ./libs/home/src/lib/components/home/home.component.ts ***!
      \*************************************************************/

    /*! exports provided: HomeComponent */

    /***/
    function X(module, __webpack_exports__, __webpack_require__) {
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


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _thisissoon_angular_inviewport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @thisissoon/angular-inviewport */
      "WihE");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var HomeComponent = function HomeComponent() {
        _classCallCheck(this, HomeComponent);
      };

      HomeComponent.ɵfac = function HomeComponent_Factory(t) {
        return new (t || HomeComponent)();
      };

      HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HomeComponent,
        selectors: [["scheibentoenung-schmieder-home"]],
        decls: 50,
        vars: 0,
        consts: [["snInViewport", "", 1, "left-card"], [1, "content"], ["mat-card-image", "", "src", "https://www.proteomics.uni-freiburg.de/images/team/portrait-dummy.png/image", "alt", "Photo of a Shiba Inu"], [1, "list"], ["routerLink", "/lackschutz", "color", "primary", 1, "text-link"], ["routerLink", "/folien", "color", "primary", 1, "text-link"], ["mat-card-image", "", "src", "https://img.webme.com/pic/s/scheibentoenung-schmieder/20200305_173405.jpg", "alt", "Photo of a Shiba Inu"], ["mat-card-image", "", "src", "https://img.webme.com/pic/s/scheibentoenung-schmieder/kind.jpg", "alt", "Photo of a Shiba Inu"], ["mat-card-image", "", "src", "https://img.webme.com/pic/s/scheibentoenung-schmieder/buissnes.jpg", "alt", "Photo of a Shiba Inu"]],
        template: function HomeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-content", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Scheibent\xF6nung Schmieder ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-subtitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Wir sind ein Unternehmen was sich auf Scheibent\xF6nungen und Fahrzeugfolierungen / Teilfolierungen mit h\xF6chsten Qualit\xE4tsanspr\xFCchen, spezialisiert haben. Ans\xE4ssig sind wir in Limbach-Oberfrohna, f\xFChren aber nat\xFCrlich auch alle Arbeiten unter diversen Voraussetzungen bei Ihnen vor Ort aus. Unsere Scheibent\xF6nungen und Folierungen jeglicher Art, werden selbstverst\xE4ndlich nur mit den aktuell auf dem Marktf\xFChrenden Lieferanten ausgef\xFChrt. Wir verfolgen stetig die neuesten Trends im Bereich Folien und werden diese auch anwenden k\xF6nnen. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-card", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-card-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Ab sofort haben wir die Regular Titan ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-card-subtitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Scheibent\xF6nungsfolie mit 35% Lichtdurchl\xE4ssigkeit ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Hier k\xF6nnen Sie alles \xFCber unsere Folien und deren verschiedenen Eigenschaften erfahren. Scheibent\xF6nung / ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Lackschutz");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " / ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Fahrzeugfolierung");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " vielleicht so untereinander auff\xFChren wo man dann mit einem klick auf die jeweilige Rubrik kommt ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-card", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-card-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Professioneller Einbau von Sonnenschutzfolie ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-card-subtitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " zum kleinen Preis! ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Hier k\xF6nnen Sie alles \xFCber unsere Folien und deren verschiedenen Eigenschaften erfahren. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "weiterlesen");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-card", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-card-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "H\xE4ufige Fragen ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-card-subtitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " rund ums Thema Folien ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Wie lang dauer eine T\xF6nung ? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "weiterlesen");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "img", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _thisissoon_angular_inviewport__WEBPACK_IMPORTED_MODULE_2__["InViewportDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardSubtitle"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]],
        styles: [".mat-card-header[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n\n.mat-card-content[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  overflow: auto;\n}\n\n.intro[_ngcontent-%COMP%] {\n  margin-top: 200px;\n  padding: 20px;\n  width: 100%;\n  height: 50vh;\n}\n\n.left-card[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  margin-left: 40px;\n  margin-right: 40px;\n  transition: opacity 2s;\n  opacity: 0;\n}\n\n.left-card.sn-viewport--out[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n\n.left-card.sn-viewport--in[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n.left-card[_ngcontent-%COMP%]   a.text-link[_ngcontent-%COMP%] {\n  color: inherit;\n}\n\n@media only screen and (min-width: 768px) {\n  .left-card[_ngcontent-%COMP%] {\n    border-radius: 4px;\n    max-height: 1000px;\n    padding: 0;\n  }\n  .left-card[_ngcontent-%COMP%]   .mat-card-image[_ngcontent-%COMP%] {\n    margin: 0;\n    height: 100%;\n  }\n  .left-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: space-between;\n    padding: 50px;\n  }\n  .left-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex: auto;\n    max-width: 50%;\n  }\n  .left-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:first-child {\n    border-top-left-radius: 4px;\n    border-bottom-left-radius: 4px;\n  }\n  .left-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:last-child {\n    flex-direction: column;\n    align-items: start;\n    padding: 8px;\n  }\n}\n\n.list[_ngcontent-%COMP%] {\n  margin-bottom: 150px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUNBO0VBQ0UsaUJBQUE7RUFDQSxhQUFBO0VBRUEsV0FBQTtFQUNBLFlBQUE7QUFDRjs7QUFDQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtBQUVGOztBQURFO0VBQ0UsVUFBQTtBQUdKOztBQUFFO0VBQ0UsVUFBQTtBQUVKOztBQUFFO0VBQ0UsY0FBQTtBQUVKOztBQUNBO0VBQ0U7SUFDRSxrQkFBQTtJQUNBLGtCQUFBO0lBRUEsVUFBQTtFQUNGO0VBQ0U7SUFDRSxTQUFBO0lBQ0EsWUFBQTtFQUNKO0VBRUU7SUFDRSxhQUFBO0lBQ0EsOEJBQUE7SUFDQSxhQUFBO0VBQUo7RUFFSTtJQUNFLGFBQUE7SUFDQSx1QkFBQTtJQUNBLG1CQUFBO0lBQ0EsVUFBQTtJQUNBLGNBQUE7RUFBTjtFQUVNO0lBQ0UsMkJBQUE7SUFDQSw4QkFBQTtFQUFSO0VBR007SUFDRSxzQkFBQTtJQUNBLGtCQUFBO0lBQ0EsWUFBQTtFQURSO0FBQ0Y7O0FBTUE7RUFDRSxvQkFBQTtBQUpGIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWNhcmQtaGVhZGVyIHtcbiAgZmxleC1zaHJpbms6IDA7XG59XG5cbi5tYXQtY2FyZC1jb250ZW50IHtcbiAgZmxleC1ncm93OiAxO1xuICBvdmVyZmxvdzogYXV0bztcbn1cbi5pbnRybyB7XG4gIG1hcmdpbi10b3A6IDIwMHB4O1xuICBwYWRkaW5nOiAyMHB4O1xuXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwdmg7XG59XG4ubGVmdC1jYXJkIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbWFyZ2luLWxlZnQ6IDQwcHg7XG4gIG1hcmdpbi1yaWdodDogNDBweDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAycztcbiAgb3BhY2l0eTogMDtcbiAgJi5zbi12aWV3cG9ydC0tb3V0IHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG5cbiAgJi5zbi12aWV3cG9ydC0taW4ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgYS50ZXh0LWxpbmsge1xuICAgIGNvbG9yOiBpbmhlcml0O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5sZWZ0LWNhcmQge1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBtYXgtaGVpZ2h0OiAxMDAwcHg7XG5cbiAgICBwYWRkaW5nOiAwO1xuXG4gICAgLm1hdC1jYXJkLWltYWdlIHtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICB9XG5cbiAgICBtYXQtY2FyZC1jb250ZW50IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBwYWRkaW5nOiA1MHB4O1xuXG4gICAgICAmID4gKiB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBmbGV4OiBhdXRvO1xuICAgICAgICBtYXgtd2lkdGg6IDUwJTtcblxuICAgICAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA0cHg7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcbiAgICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbi5saXN0IHtcbiAgbWFyZ2luLWJvdHRvbTogMTUwcHg7XG59XG4iXX0= */"]
      });
      /***/
    },

    /***/
    "GXy1":
    /*!********************************!*\
      !*** ./libs/home/src/index.ts ***!
      \********************************/

    /*! exports provided: HomeModule */

    /***/
    function GXy1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _lib_home_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./lib/home.module */
      "QpK0");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "HomeModule", function () {
        return _lib_home_module__WEBPACK_IMPORTED_MODULE_0__["HomeModule"];
      });
      /***/

    },

    /***/
    "QpK0":
    /*!******************************************!*\
      !*** ./libs/home/src/lib/home.module.ts ***!
      \******************************************/

    /*! exports provided: HomeModule */

    /***/
    function QpK0(module, __webpack_exports__, __webpack_require__) {
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


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/grid-list */
      "zkoq");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _thisissoon_angular_inviewport__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @thisissoon/angular-inviewport */
      "WihE");
      /* harmony import */


      var _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./components/home/home.component */
      "0X/+");
      /* harmony import */


      var _home_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./home-routing.module */
      "ieui");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var HomeModule = function HomeModule() {
        _classCallCheck(this, HomeModule);
      };

      HomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
        type: HomeModule
      });
      HomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
        factory: function HomeModule_Factory(t) {
          return new (t || HomeModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_7__["HomeRoutingModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"], _thisissoon_angular_inviewport__WEBPACK_IMPORTED_MODULE_5__["InViewportModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](HomeModule, {
          declarations: [_components_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_7__["HomeRoutingModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"], _thisissoon_angular_inviewport__WEBPACK_IMPORTED_MODULE_5__["InViewportModule"]]
        });
      })();
      /***/

    },

    /***/
    "WihE":
    /*!************************************************************************************************************!*\
      !*** ./node_modules/@thisissoon/angular-inviewport/__ivy_ngcc__/fesm2015/thisissoon-angular-inviewport.js ***!
      \************************************************************************************************************/

    /*! exports provided: InViewportModule, InViewportDirective, WINDOW_MOCK, WINDOW */

    /***/
    function WihE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InViewportModule", function () {
        return InViewportModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InViewportDirective", function () {
        return InViewportDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WINDOW_MOCK", function () {
        return WINDOW_MOCK;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WINDOW", function () {
        return WINDOW;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /** @type {?} */


      var WINDOW = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('WINDOW', {
        providedIn: 'root',
        factory:
        /**
        * @return {?}
        */
        function factory() {
          return window;
        }
      });
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * A simple lightweight library for Angular with that detects when an
       * element is within the browsers viewport and adds a `in-viewport` or
       * `not-in-viewport` class to the element.
       *
       * \@example
       * ```html
       * <p
       *  class="foo"
       *  snInViewport
       *  (inViewportChange)="myEventHandler($event)">
       *  Amet tempor excepteur occaecat nulla.
       * </p>
       * ```
       */
      // @dynamic

      var InViewportDirective = /*#__PURE__*/function () {
        /**
         * @param {?} el
         * @param {?} window
         */
        function InViewportDirective(el, window) {
          _classCallCheck(this, InViewportDirective);

          this.el = el;
          this.window = window;
          this.inViewportChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.hasIntersectionObserver = this.intersectionObserverFeatureDetection();
        }
        /**
         * @return {?}
         */


        _createClass(InViewportDirective, [{
          key: "isInViewport",
          get: function get() {
            return this.inViewport;
          }
          /**
           * @return {?}
           */

        }, {
          key: "isNotInViewport",
          get: function get() {
            return !this.inViewport;
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            if (!this.hasIntersectionObserver) {
              this.inViewport = true;
              this.inViewportChange.emit(this.inViewport);
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            if (this.hasIntersectionObserver) {
              /** @type {?} */
              var IntersectionObserver = this.window['IntersectionObserver'];
              this.observer = new IntersectionObserver(this.intersectionObserverCallback.bind(this), this.inViewportOptions);
              this.observer.observe(this.el.nativeElement);
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.observer) {
              this.observer.unobserve(this.el.nativeElement);
            }
          }
          /**
           * @param {?} entries
           * @return {?}
           */

        }, {
          key: "intersectionObserverCallback",
          value: function intersectionObserverCallback(entries) {
            var _this = this;

            entries.forEach(
            /**
            * @param {?} entry
            * @return {?}
            */
            function (entry) {
              if (_this.inViewport === entry.isIntersecting) return;
              _this.inViewport = entry.isIntersecting;

              _this.inViewportChange.emit(_this.inViewport);
            });
          }
          /**
           * @private
           * @return {?}
           */

        }, {
          key: "intersectionObserverFeatureDetection",
          value: function intersectionObserverFeatureDetection() {
            // Exits early if all IntersectionObserver and IntersectionObserverEntry
            // features are natively supported.
            if ('IntersectionObserver' in this.window && 'IntersectionObserverEntry' in this.window) {
              // Minimal polyfill for Edge 15's lack of `isIntersecting`
              // See: https://github.com/w3c/IntersectionObserver/issues/211
              if (!('isIntersecting' in this.window['IntersectionObserverEntry']['prototype'])) {
                Object.defineProperty(this.window['IntersectionObserverEntry']['prototype'], 'isIntersecting', {
                  get:
                  /**
                  * @return {?}
                  */
                  function get() {
                    return this.intersectionRatio > 0;
                  }
                });
              }

              return true;
            }

            return false;
          }
        }]);

        return InViewportDirective;
      }();

      InViewportDirective.ɵfac = function InViewportDirective_Factory(t) {
        return new (t || InViewportDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](WINDOW));
      };

      InViewportDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: InViewportDirective,
        selectors: [["", "snInViewport", ""]],
        hostVars: 4,
        hostBindings: function InViewportDirective_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("sn-viewport--in", ctx.isInViewport)("sn-viewport--out", ctx.isNotInViewport);
          }
        },
        inputs: {
          inViewportOptions: "inViewportOptions"
        },
        outputs: {
          inViewportChange: "inViewportChange"
        },
        exportAs: ["snInViewport"]
      });
      /** @nocollapse */

      InViewportDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: Window,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [WINDOW]
          }]
        }];
      };

      InViewportDirective.propDecorators = {
        inViewportOptions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        inViewportChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        isInViewport: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['class.sn-viewport--in']
        }],
        isNotInViewport: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['class.sn-viewport--out']
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InViewportDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[snInViewport]',
            exportAs: 'snInViewport'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: Window,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [WINDOW]
            }]
          }];
        }, {
          inViewportChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          isInViewport: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.sn-viewport--in']
          }],
          isNotInViewport: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.sn-viewport--out']
          }],
          inViewportOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /** @type {?} */


      var WINDOW_MOCK_WITHOUT_INTERSECTION_OBSERVER = {
        closed: null,
        defaultStatus: null,
        document: null,
        frameElement: null,
        frames: null,
        history: null,
        innerHeight: null,
        innerWidth: null,
        length: null,
        localStorage: null,
        location: null,
        name: null,
        navigator: null,
        opener: null,
        outerHeight: null,
        outerWidth: null,
        pageXOffset: null,
        pageYOffset: null,
        parent: null,
        screen: null,
        screenLeft: null,
        screenTop: null,
        screenX: null,
        screenY: null,
        sessionStorage: null,
        scrollX: null,
        scrollY: null,
        self: null,
        status: null,
        top: null,
        addEventListener:
        /**
        * @param {...?} args
        * @return {?}
        */
        function addEventListener() {
          return null;
        },
        alert:
        /**
        * @param {...?} args
        * @return {?}
        */
        function alert() {
          return null;
        },
        atob:
        /**
        * @param {...?} args
        * @return {?}
        */
        function atob() {
          return null;
        },
        blur:
        /**
        * @param {...?} args
        * @return {?}
        */
        function blur() {
          return null;
        },
        btoa:
        /**
        * @param {...?} args
        * @return {?}
        */
        function btoa() {
          return null;
        },
        clearInterval:
        /**
        * @param {...?} args
        * @return {?}
        */
        function clearInterval() {
          return null;
        },
        clearTimeout:
        /**
        * @param {...?} args
        * @return {?}
        */
        function clearTimeout() {
          return null;
        },
        close:
        /**
        * @param {...?} args
        * @return {?}
        */
        function close() {
          return null;
        },
        confirm:
        /**
        * @param {...?} args
        * @return {?}
        */
        function confirm() {
          return null;
        },
        focus:
        /**
        * @param {...?} args
        * @return {?}
        */
        function focus() {
          return null;
        },
        getComputedStyle:
        /**
        * @param {...?} args
        * @return {?}
        */
        function getComputedStyle() {
          return null;
        },
        getSelection:
        /**
        * @param {...?} args
        * @return {?}
        */
        function getSelection() {
          return null;
        },
        matchMedia:
        /**
        * @param {...?} args
        * @return {?}
        */
        function matchMedia() {
          return null;
        },
        moveBy:
        /**
        * @param {...?} args
        * @return {?}
        */
        function moveBy() {
          return null;
        },
        moveTo:
        /**
        * @param {...?} args
        * @return {?}
        */
        function moveTo() {
          return null;
        },
        open:
        /**
        * @param {...?} args
        * @return {?}
        */
        function open() {
          return null;
        },
        print:
        /**
        * @param {...?} args
        * @return {?}
        */
        function print() {
          return null;
        },
        prompt:
        /**
        * @param {...?} args
        * @return {?}
        */
        function prompt() {
          return null;
        },
        resizeBy:
        /**
        * @param {...?} args
        * @return {?}
        */
        function resizeBy() {
          return null;
        },
        resizeTo:
        /**
        * @param {...?} args
        * @return {?}
        */
        function resizeTo() {
          return null;
        },
        removeEventListener:
        /**
        * @param {...?} args
        * @return {?}
        */
        function removeEventListener() {
          return null;
        },
        scroll:
        /**
        * @param {...?} args
        * @return {?}
        */
        function scroll() {
          return null;
        },
        scrollBy:
        /**
        * @param {...?} args
        * @return {?}
        */
        function scrollBy() {
          return null;
        },
        scrollTo:
        /**
        * @param {...?} args
        * @return {?}
        */
        function scrollTo() {
          return null;
        },
        setInterval:
        /**
        * @param {...?} args
        * @return {?}
        */
        function setInterval() {
          return null;
        },
        setTimeout:
        /**
        * @param {...?} args
        * @return {?}
        */
        function setTimeout() {
          return null;
        },
        stop:
        /**
        * @param {...?} args
        * @return {?}
        */
        function stop() {
          return null;
        }
      };
      /** @type {?} */

      var WINDOW_MOCK = Object.assign({}, WINDOW_MOCK_WITHOUT_INTERSECTION_OBSERVER, {
        IntersectionObserver:
        /**
        * @param {...?} args
        * @return {?}
        */
        function IntersectionObserver() {
          this.observe =
          /**
          * @return {?}
          */
          function () {
            return null;
          };

          this.unobserve =
          /**
          * @return {?}
          */
          function () {
            return null;
          };
        },
        IntersectionObserverEntry: function IntersectionObserverEntryMock() {
          _classCallCheck(this, IntersectionObserverEntryMock);
        }
      });
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * A simple lightweight library for Angular with other dependencies
       * that detects when an element is within the browsers viewport and adds a
       * sn-viewport--in or sn-viewport--out class to the element.
       */

      var InViewportModule = /*#__PURE__*/function () {
        function InViewportModule() {
          _classCallCheck(this, InViewportModule);
        }

        _createClass(InViewportModule, null, [{
          key: "forServer",
          value:
          /**
           * @return {?}
           */
          function forServer() {
            return {
              ngModule: InViewportModule,
              providers: [{
                provide: WINDOW,
                useValue: WINDOW_MOCK
              }]
            };
          }
        }]);

        return InViewportModule;
      }();

      InViewportModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: InViewportModule
      });
      InViewportModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function InViewportModule_Factory(t) {
          return new (t || InViewportModule)();
        }
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](InViewportModule, {
          declarations: [InViewportDirective],
          exports: [InViewportDirective]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InViewportModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [InViewportDirective],
            exports: [InViewportDirective]
          }]
        }], null, null);
      })();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */
      //# sourceMappingURL=thisissoon-angular-inviewport.js.map

      /***/

    },

    /***/
    "ieui":
    /*!**************************************************!*\
      !*** ./libs/home/src/lib/home-routing.module.ts ***!
      \**************************************************/

    /*! exports provided: HomeRoutingModule */

    /***/
    function ieui(module, __webpack_exports__, __webpack_require__) {
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
      "0X/+");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: '',
        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"],
        data: {
          cover: 'home.jpg',
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
    "zkoq":
    /*!***************************************************************************!*\
      !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js ***!
      \***************************************************************************/

    /*! exports provided: MatGridAvatarCssMatStyler, MatGridList, MatGridListModule, MatGridTile, MatGridTileFooterCssMatStyler, MatGridTileHeaderCssMatStyler, MatGridTileText, ɵTileCoordinator, ɵangular_material_src_material_grid_list_grid_list_a */

    /***/
    function zkoq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatGridAvatarCssMatStyler", function () {
        return MatGridAvatarCssMatStyler;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatGridList", function () {
        return MatGridList;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatGridListModule", function () {
        return MatGridListModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatGridTile", function () {
        return MatGridTile;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatGridTileFooterCssMatStyler", function () {
        return MatGridTileFooterCssMatStyler;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatGridTileHeaderCssMatStyler", function () {
        return MatGridTileHeaderCssMatStyler;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatGridTileText", function () {
        return MatGridTileText;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵTileCoordinator", function () {
        return ɵTileCoordinator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_material_grid_list_grid_list_a", function () {
        return MAT_GRID_LIST;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      "8LU1");
      /* harmony import */


      var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/cdk/bidi */
      "cH1L");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Class for determining, from a list of tiles, the (row, col) position of each of those tiles
       * in the grid. This is necessary (rather than just rendering the tiles in normal document flow)
       * because the tiles can have a rowspan.
       *
       * The positioning algorithm greedily places each tile as soon as it encounters a gap in the grid
       * large enough to accommodate it so that the tiles still render in the same order in which they
       * are given.
       *
       * The basis of the algorithm is the use of an array to track the already placed tiles. Each
       * element of the array corresponds to a column, and the value indicates how many cells in that
       * column are already occupied; zero indicates an empty cell. Moving "down" to the next row
       * decrements each value in the tracking array (indicating that the column is one cell closer to
       * being free).
       *
       * @docs-private
       */


      var _c0 = ["*"];
      var _c1 = [[["", "mat-grid-avatar", ""], ["", "matGridAvatar", ""]], [["", "mat-line", ""], ["", "matLine", ""]], "*"];
      var _c2 = ["[mat-grid-avatar], [matGridAvatar]", "[mat-line], [matLine]", "*"];
      var _c3 = ".mat-grid-list{display:block;position:relative}.mat-grid-tile{display:block;position:absolute;overflow:hidden}.mat-grid-tile .mat-figure{top:0;left:0;right:0;bottom:0;position:absolute;display:flex;align-items:center;justify-content:center;height:100%;padding:0;margin:0}.mat-grid-tile .mat-grid-tile-header,.mat-grid-tile .mat-grid-tile-footer{display:flex;align-items:center;height:48px;color:#fff;background:rgba(0,0,0,.38);overflow:hidden;padding:0 16px;position:absolute;left:0;right:0}.mat-grid-tile .mat-grid-tile-header>*,.mat-grid-tile .mat-grid-tile-footer>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-tile-header.mat-2-line,.mat-grid-tile .mat-grid-tile-footer.mat-2-line{height:68px}.mat-grid-tile .mat-grid-list-text{display:flex;flex-direction:column;flex:auto;box-sizing:border-box;overflow:hidden}.mat-grid-tile .mat-grid-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-list-text:empty{display:none}.mat-grid-tile .mat-grid-tile-header{top:0}.mat-grid-tile .mat-grid-tile-footer{bottom:0}.mat-grid-tile .mat-grid-avatar{padding-right:16px}[dir=rtl] .mat-grid-tile .mat-grid-avatar{padding-right:0;padding-left:16px}.mat-grid-tile .mat-grid-avatar:empty{display:none}\n";

      var TileCoordinator = /*#__PURE__*/function () {
        function TileCoordinator() {
          _classCallCheck(this, TileCoordinator);

          /** Index at which the search for the next gap will start. */
          this.columnIndex = 0;
          /** The current row index. */

          this.rowIndex = 0;
        }
        /** Gets the total number of rows occupied by tiles */


        _createClass(TileCoordinator, [{
          key: "rowCount",
          get: function get() {
            return this.rowIndex + 1;
          }
          /**
           * Gets the total span of rows occupied by tiles.
           * Ex: A list with 1 row that contains a tile with rowspan 2 will have a total rowspan of 2.
           */

        }, {
          key: "rowspan",
          get: function get() {
            var lastRowMax = Math.max.apply(Math, _toConsumableArray(this.tracker)); // if any of the tiles has a rowspan that pushes it beyond the total row count,
            // add the difference to the rowcount

            return lastRowMax > 1 ? this.rowCount + lastRowMax - 1 : this.rowCount;
          }
          /**
           * Updates the tile positions.
           * @param numColumns Amount of columns in the grid.
           * @param tiles Tiles to be positioned.
           */

        }, {
          key: "update",
          value: function update(numColumns, tiles) {
            var _this2 = this;

            this.columnIndex = 0;
            this.rowIndex = 0;
            this.tracker = new Array(numColumns);
            this.tracker.fill(0, 0, this.tracker.length);
            this.positions = tiles.map(function (tile) {
              return _this2._trackTile(tile);
            });
          }
          /** Calculates the row and col position of a tile. */

        }, {
          key: "_trackTile",
          value: function _trackTile(tile) {
            // Find a gap large enough for this tile.
            var gapStartIndex = this._findMatchingGap(tile.colspan); // Place tile in the resulting gap.


            this._markTilePosition(gapStartIndex, tile); // The next time we look for a gap, the search will start at columnIndex, which should be
            // immediately after the tile that has just been placed.


            this.columnIndex = gapStartIndex + tile.colspan;
            return new TilePosition(this.rowIndex, gapStartIndex);
          }
          /** Finds the next available space large enough to fit the tile. */

        }, {
          key: "_findMatchingGap",
          value: function _findMatchingGap(tileCols) {
            if (tileCols > this.tracker.length && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              throw Error("mat-grid-list: tile with colspan ".concat(tileCols, " is wider than ") + "grid with cols=\"".concat(this.tracker.length, "\"."));
            } // Start index is inclusive, end index is exclusive.


            var gapStartIndex = -1;
            var gapEndIndex = -1; // Look for a gap large enough to fit the given tile. Empty spaces are marked with a zero.

            do {
              // If we've reached the end of the row, go to the next row.
              if (this.columnIndex + tileCols > this.tracker.length) {
                this._nextRow();

                gapStartIndex = this.tracker.indexOf(0, this.columnIndex);
                gapEndIndex = this._findGapEndIndex(gapStartIndex);
                continue;
              }

              gapStartIndex = this.tracker.indexOf(0, this.columnIndex); // If there are no more empty spaces in this row at all, move on to the next row.

              if (gapStartIndex == -1) {
                this._nextRow();

                gapStartIndex = this.tracker.indexOf(0, this.columnIndex);
                gapEndIndex = this._findGapEndIndex(gapStartIndex);
                continue;
              }

              gapEndIndex = this._findGapEndIndex(gapStartIndex); // If a gap large enough isn't found, we want to start looking immediately after the current
              // gap on the next iteration.

              this.columnIndex = gapStartIndex + 1; // Continue iterating until we find a gap wide enough for this tile. Since gapEndIndex is
              // exclusive, gapEndIndex is 0 means we didn't find a gap and should continue.
            } while (gapEndIndex - gapStartIndex < tileCols || gapEndIndex == 0); // If we still didn't manage to find a gap, ensure that the index is
            // at least zero so the tile doesn't get pulled out of the grid.


            return Math.max(gapStartIndex, 0);
          }
          /** Move "down" to the next row. */

        }, {
          key: "_nextRow",
          value: function _nextRow() {
            this.columnIndex = 0;
            this.rowIndex++; // Decrement all spaces by one to reflect moving down one row.

            for (var i = 0; i < this.tracker.length; i++) {
              this.tracker[i] = Math.max(0, this.tracker[i] - 1);
            }
          }
          /**
           * Finds the end index (exclusive) of a gap given the index from which to start looking.
           * The gap ends when a non-zero value is found.
           */

        }, {
          key: "_findGapEndIndex",
          value: function _findGapEndIndex(gapStartIndex) {
            for (var i = gapStartIndex + 1; i < this.tracker.length; i++) {
              if (this.tracker[i] != 0) {
                return i;
              }
            } // The gap ends with the end of the row.


            return this.tracker.length;
          }
          /** Update the tile tracker to account for the given tile in the given space. */

        }, {
          key: "_markTilePosition",
          value: function _markTilePosition(start, tile) {
            for (var i = 0; i < tile.colspan; i++) {
              this.tracker[start + i] = tile.rowspan;
            }
          }
        }]);

        return TileCoordinator;
      }();
      /**
       * Simple data structure for tile position (row, col).
       * @docs-private
       */


      var TilePosition = function TilePosition(row, col) {
        _classCallCheck(this, TilePosition);

        this.row = row;
        this.col = col;
      };
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Injection token used to provide a grid list to a tile and to avoid circular imports.
       * @docs-private
       */


      var MAT_GRID_LIST = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('MAT_GRID_LIST');
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      var MatGridTile = /*#__PURE__*/function () {
        function MatGridTile(_element, _gridList) {
          _classCallCheck(this, MatGridTile);

          this._element = _element;
          this._gridList = _gridList;
          this._rowspan = 1;
          this._colspan = 1;
        }
        /** Amount of rows that the grid tile takes up. */


        _createClass(MatGridTile, [{
          key: "rowspan",
          get: function get() {
            return this._rowspan;
          },
          set: function set(value) {
            this._rowspan = Math.round(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceNumberProperty"])(value));
          }
          /** Amount of columns that the grid tile takes up. */

        }, {
          key: "colspan",
          get: function get() {
            return this._colspan;
          },
          set: function set(value) {
            this._colspan = Math.round(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceNumberProperty"])(value));
          }
          /**
           * Sets the style of the grid-tile element.  Needs to be set manually to avoid
           * "Changed after checked" errors that would occur with HostBinding.
           */

        }, {
          key: "_setStyle",
          value: function _setStyle(property, value) {
            this._element.nativeElement.style[property] = value;
          }
        }]);

        return MatGridTile;
      }();

      MatGridTile.ɵfac = function MatGridTile_Factory(t) {
        return new (t || MatGridTile)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_GRID_LIST, 8));
      };

      MatGridTile.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MatGridTile,
        selectors: [["mat-grid-tile"]],
        hostAttrs: [1, "mat-grid-tile"],
        hostVars: 2,
        hostBindings: function MatGridTile_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("rowspan", ctx.rowspan)("colspan", ctx.colspan);
          }
        },
        inputs: {
          rowspan: "rowspan",
          colspan: "colspan"
        },
        exportAs: ["matGridTile"],
        ngContentSelectors: _c0,
        decls: 2,
        vars: 0,
        consts: [[1, "mat-figure"]],
        template: function MatGridTile_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "figure", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: [_c3],
        encapsulation: 2,
        changeDetection: 0
      });

      MatGridTile.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [MAT_GRID_LIST]
          }]
        }];
      };

      MatGridTile.propDecorators = {
        rowspan: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        colspan: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatGridTile, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'mat-grid-tile',
            exportAs: 'matGridTile',
            host: {
              'class': 'mat-grid-tile',
              // Ensures that the "rowspan" and "colspan" input value is reflected in
              // the DOM. This is needed for the grid-tile harness.
              '[attr.rowspan]': 'rowspan',
              '[attr.colspan]': 'colspan'
            },
            template: "<!-- TODO(kara): Revisit why this is a figure.-->\n<figure class=\"mat-figure\">\n  <ng-content></ng-content>\n</figure>",
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            styles: [".mat-grid-list{display:block;position:relative}.mat-grid-tile{display:block;position:absolute;overflow:hidden}.mat-grid-tile .mat-figure{top:0;left:0;right:0;bottom:0;position:absolute;display:flex;align-items:center;justify-content:center;height:100%;padding:0;margin:0}.mat-grid-tile .mat-grid-tile-header,.mat-grid-tile .mat-grid-tile-footer{display:flex;align-items:center;height:48px;color:#fff;background:rgba(0,0,0,.38);overflow:hidden;padding:0 16px;position:absolute;left:0;right:0}.mat-grid-tile .mat-grid-tile-header>*,.mat-grid-tile .mat-grid-tile-footer>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-tile-header.mat-2-line,.mat-grid-tile .mat-grid-tile-footer.mat-2-line{height:68px}.mat-grid-tile .mat-grid-list-text{display:flex;flex-direction:column;flex:auto;box-sizing:border-box;overflow:hidden}.mat-grid-tile .mat-grid-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-list-text:empty{display:none}.mat-grid-tile .mat-grid-tile-header{top:0}.mat-grid-tile .mat-grid-tile-footer{bottom:0}.mat-grid-tile .mat-grid-avatar{padding-right:16px}[dir=rtl] .mat-grid-tile .mat-grid-avatar{padding-right:0;padding-left:16px}.mat-grid-tile .mat-grid-avatar:empty{display:none}\n"]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [MAT_GRID_LIST]
            }]
          }];
        }, {
          rowspan: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          colspan: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();

      var MatGridTileText = /*#__PURE__*/function () {
        function MatGridTileText(_element) {
          _classCallCheck(this, MatGridTileText);

          this._element = _element;
        }

        _createClass(MatGridTileText, [{
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["setLines"])(this._lines, this._element);
          }
        }]);

        return MatGridTileText;
      }();

      MatGridTileText.ɵfac = function MatGridTileText_Factory(t) {
        return new (t || MatGridTileText)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
      };

      MatGridTileText.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MatGridTileText,
        selectors: [["mat-grid-tile-header"], ["mat-grid-tile-footer"]],
        contentQueries: function MatGridTileText_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatLine"], 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._lines = _t);
          }
        },
        ngContentSelectors: _c2,
        decls: 4,
        vars: 0,
        consts: [[1, "mat-grid-list-text"]],
        template: function MatGridTileText_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3, 2);
          }
        },
        encapsulation: 2,
        changeDetection: 0
      });

      MatGridTileText.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      };

      MatGridTileText.propDecorators = {
        _lines: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
          args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatLine"], {
            descendants: true
          }]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatGridTileText, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'mat-grid-tile-header, mat-grid-tile-footer',
            template: "<ng-content select=\"[mat-grid-avatar], [matGridAvatar]\"></ng-content>\n<div class=\"mat-grid-list-text\"><ng-content select=\"[mat-line], [matLine]\"></ng-content></div>\n<ng-content></ng-content>\n",
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }];
        }, {
          _lines: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
            args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatLine"], {
              descendants: true
            }]
          }]
        });
      })();
      /**
       * Directive whose purpose is to add the mat- CSS styling to this selector.
       * @docs-private
       */


      var MatGridAvatarCssMatStyler = function MatGridAvatarCssMatStyler() {
        _classCallCheck(this, MatGridAvatarCssMatStyler);
      };

      MatGridAvatarCssMatStyler.ɵfac = function MatGridAvatarCssMatStyler_Factory(t) {
        return new (t || MatGridAvatarCssMatStyler)();
      };

      MatGridAvatarCssMatStyler.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatGridAvatarCssMatStyler,
        selectors: [["", "mat-grid-avatar", ""], ["", "matGridAvatar", ""]],
        hostAttrs: [1, "mat-grid-avatar"]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatGridAvatarCssMatStyler, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[mat-grid-avatar], [matGridAvatar]',
            host: {
              'class': 'mat-grid-avatar'
            }
          }]
        }], null, null);
      })();
      /**
       * Directive whose purpose is to add the mat- CSS styling to this selector.
       * @docs-private
       */


      var MatGridTileHeaderCssMatStyler = function MatGridTileHeaderCssMatStyler() {
        _classCallCheck(this, MatGridTileHeaderCssMatStyler);
      };

      MatGridTileHeaderCssMatStyler.ɵfac = function MatGridTileHeaderCssMatStyler_Factory(t) {
        return new (t || MatGridTileHeaderCssMatStyler)();
      };

      MatGridTileHeaderCssMatStyler.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatGridTileHeaderCssMatStyler,
        selectors: [["mat-grid-tile-header"]],
        hostAttrs: [1, "mat-grid-tile-header"]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatGridTileHeaderCssMatStyler, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: 'mat-grid-tile-header',
            host: {
              'class': 'mat-grid-tile-header'
            }
          }]
        }], null, null);
      })();
      /**
       * Directive whose purpose is to add the mat- CSS styling to this selector.
       * @docs-private
       */


      var MatGridTileFooterCssMatStyler = function MatGridTileFooterCssMatStyler() {
        _classCallCheck(this, MatGridTileFooterCssMatStyler);
      };

      MatGridTileFooterCssMatStyler.ɵfac = function MatGridTileFooterCssMatStyler_Factory(t) {
        return new (t || MatGridTileFooterCssMatStyler)();
      };

      MatGridTileFooterCssMatStyler.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatGridTileFooterCssMatStyler,
        selectors: [["mat-grid-tile-footer"]],
        hostAttrs: [1, "mat-grid-tile-footer"]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatGridTileFooterCssMatStyler, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: 'mat-grid-tile-footer',
            host: {
              'class': 'mat-grid-tile-footer'
            }
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * RegExp that can be used to check whether a value will
       * be allowed inside a CSS `calc()` expression.
       */


      var cssCalcAllowedValue = /^-?\d+((\.\d+)?[A-Za-z%$]?)+$/;
      /**
       * Sets the style properties for an individual tile, given the position calculated by the
       * Tile Coordinator.
       * @docs-private
       */

      var TileStyler = /*#__PURE__*/function () {
        function TileStyler() {
          _classCallCheck(this, TileStyler);

          this._rows = 0;
          this._rowspan = 0;
        }
        /**
         * Adds grid-list layout info once it is available. Cannot be processed in the constructor
         * because these properties haven't been calculated by that point.
         *
         * @param gutterSize Size of the grid's gutter.
         * @param tracker Instance of the TileCoordinator.
         * @param cols Amount of columns in the grid.
         * @param direction Layout direction of the grid.
         */


        _createClass(TileStyler, [{
          key: "init",
          value: function init(gutterSize, tracker, cols, direction) {
            this._gutterSize = normalizeUnits(gutterSize);
            this._rows = tracker.rowCount;
            this._rowspan = tracker.rowspan;
            this._cols = cols;
            this._direction = direction;
          }
          /**
           * Computes the amount of space a single 1x1 tile would take up (width or height).
           * Used as a basis for other calculations.
           * @param sizePercent Percent of the total grid-list space that one 1x1 tile would take up.
           * @param gutterFraction Fraction of the gutter size taken up by one 1x1 tile.
           * @return The size of a 1x1 tile as an expression that can be evaluated via CSS calc().
           */

        }, {
          key: "getBaseTileSize",
          value: function getBaseTileSize(sizePercent, gutterFraction) {
            // Take the base size percent (as would be if evenly dividing the size between cells),
            // and then subtracting the size of one gutter. However, since there are no gutters on the
            // edges, each tile only uses a fraction (gutterShare = numGutters / numCells) of the gutter
            // size. (Imagine having one gutter per tile, and then breaking up the extra gutter on the
            // edge evenly among the cells).
            return "(".concat(sizePercent, "% - (").concat(this._gutterSize, " * ").concat(gutterFraction, "))");
          }
          /**
           * Gets The horizontal or vertical position of a tile, e.g., the 'top' or 'left' property value.
           * @param offset Number of tiles that have already been rendered in the row/column.
           * @param baseSize Base size of a 1x1 tile (as computed in getBaseTileSize).
           * @return Position of the tile as a CSS calc() expression.
           */

        }, {
          key: "getTilePosition",
          value: function getTilePosition(baseSize, offset) {
            // The position comes the size of a 1x1 tile plus gutter for each previous tile in the
            // row/column (offset).
            return offset === 0 ? '0' : calc("(".concat(baseSize, " + ").concat(this._gutterSize, ") * ").concat(offset));
          }
          /**
           * Gets the actual size of a tile, e.g., width or height, taking rowspan or colspan into account.
           * @param baseSize Base size of a 1x1 tile (as computed in getBaseTileSize).
           * @param span The tile's rowspan or colspan.
           * @return Size of the tile as a CSS calc() expression.
           */

        }, {
          key: "getTileSize",
          value: function getTileSize(baseSize, span) {
            return "(".concat(baseSize, " * ").concat(span, ") + (").concat(span - 1, " * ").concat(this._gutterSize, ")");
          }
          /**
           * Sets the style properties to be applied to a tile for the given row and column index.
           * @param tile Tile to which to apply the styling.
           * @param rowIndex Index of the tile's row.
           * @param colIndex Index of the tile's column.
           */

        }, {
          key: "setStyle",
          value: function setStyle(tile, rowIndex, colIndex) {
            // Percent of the available horizontal space that one column takes up.
            var percentWidthPerTile = 100 / this._cols; // Fraction of the vertical gutter size that each column takes up.
            // For example, if there are 5 columns, each column uses 4/5 = 0.8 times the gutter width.

            var gutterWidthFractionPerTile = (this._cols - 1) / this._cols;
            this.setColStyles(tile, colIndex, percentWidthPerTile, gutterWidthFractionPerTile);
            this.setRowStyles(tile, rowIndex, percentWidthPerTile, gutterWidthFractionPerTile);
          }
          /** Sets the horizontal placement of the tile in the list. */

        }, {
          key: "setColStyles",
          value: function setColStyles(tile, colIndex, percentWidth, gutterWidth) {
            // Base horizontal size of a column.
            var baseTileWidth = this.getBaseTileSize(percentWidth, gutterWidth); // The width and horizontal position of each tile is always calculated the same way, but the
            // height and vertical position depends on the rowMode.

            var side = this._direction === 'rtl' ? 'right' : 'left';

            tile._setStyle(side, this.getTilePosition(baseTileWidth, colIndex));

            tile._setStyle('width', calc(this.getTileSize(baseTileWidth, tile.colspan)));
          }
          /**
           * Calculates the total size taken up by gutters across one axis of a list.
           */

        }, {
          key: "getGutterSpan",
          value: function getGutterSpan() {
            return "".concat(this._gutterSize, " * (").concat(this._rowspan, " - 1)");
          }
          /**
           * Calculates the total size taken up by tiles across one axis of a list.
           * @param tileHeight Height of the tile.
           */

        }, {
          key: "getTileSpan",
          value: function getTileSpan(tileHeight) {
            return "".concat(this._rowspan, " * ").concat(this.getTileSize(tileHeight, 1));
          }
          /**
           * Calculates the computed height and returns the correct style property to set.
           * This method can be implemented by each type of TileStyler.
           * @docs-private
           */

        }, {
          key: "getComputedHeight",
          value: function getComputedHeight() {
            return null;
          }
        }]);

        return TileStyler;
      }();
      /**
       * This type of styler is instantiated when the user passes in a fixed row height.
       * Example `<mat-grid-list cols="3" rowHeight="100px">`
       * @docs-private
       */


      var FixedTileStyler = /*#__PURE__*/function (_TileStyler) {
        _inherits(FixedTileStyler, _TileStyler);

        var _super = _createSuper(FixedTileStyler);

        function FixedTileStyler(fixedRowHeight) {
          var _this3;

          _classCallCheck(this, FixedTileStyler);

          _this3 = _super.call(this);
          _this3.fixedRowHeight = fixedRowHeight;
          return _this3;
        }

        _createClass(FixedTileStyler, [{
          key: "init",
          value: function init(gutterSize, tracker, cols, direction) {
            _get(_getPrototypeOf(FixedTileStyler.prototype), "init", this).call(this, gutterSize, tracker, cols, direction);

            this.fixedRowHeight = normalizeUnits(this.fixedRowHeight);

            if (!cssCalcAllowedValue.test(this.fixedRowHeight) && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              throw Error("Invalid value \"".concat(this.fixedRowHeight, "\" set as rowHeight."));
            }
          }
        }, {
          key: "setRowStyles",
          value: function setRowStyles(tile, rowIndex) {
            tile._setStyle('top', this.getTilePosition(this.fixedRowHeight, rowIndex));

            tile._setStyle('height', calc(this.getTileSize(this.fixedRowHeight, tile.rowspan)));
          }
        }, {
          key: "getComputedHeight",
          value: function getComputedHeight() {
            return ['height', calc("".concat(this.getTileSpan(this.fixedRowHeight), " + ").concat(this.getGutterSpan()))];
          }
        }, {
          key: "reset",
          value: function reset(list) {
            list._setListStyle(['height', null]);

            if (list._tiles) {
              list._tiles.forEach(function (tile) {
                tile._setStyle('top', null);

                tile._setStyle('height', null);
              });
            }
          }
        }]);

        return FixedTileStyler;
      }(TileStyler);
      /**
       * This type of styler is instantiated when the user passes in a width:height ratio
       * for the row height.  Example `<mat-grid-list cols="3" rowHeight="3:1">`
       * @docs-private
       */


      var RatioTileStyler = /*#__PURE__*/function (_TileStyler2) {
        _inherits(RatioTileStyler, _TileStyler2);

        var _super2 = _createSuper(RatioTileStyler);

        function RatioTileStyler(value) {
          var _this4;

          _classCallCheck(this, RatioTileStyler);

          _this4 = _super2.call(this);

          _this4._parseRatio(value);

          return _this4;
        }

        _createClass(RatioTileStyler, [{
          key: "setRowStyles",
          value: function setRowStyles(tile, rowIndex, percentWidth, gutterWidth) {
            var percentHeightPerTile = percentWidth / this.rowHeightRatio;
            this.baseTileHeight = this.getBaseTileSize(percentHeightPerTile, gutterWidth); // Use padding-top and margin-top to maintain the given aspect ratio, as
            // a percentage-based value for these properties is applied versus the *width* of the
            // containing block. See http://www.w3.org/TR/CSS2/box.html#margin-properties

            tile._setStyle('marginTop', this.getTilePosition(this.baseTileHeight, rowIndex));

            tile._setStyle('paddingTop', calc(this.getTileSize(this.baseTileHeight, tile.rowspan)));
          }
        }, {
          key: "getComputedHeight",
          value: function getComputedHeight() {
            return ['paddingBottom', calc("".concat(this.getTileSpan(this.baseTileHeight), " + ").concat(this.getGutterSpan()))];
          }
        }, {
          key: "reset",
          value: function reset(list) {
            list._setListStyle(['paddingBottom', null]);

            list._tiles.forEach(function (tile) {
              tile._setStyle('marginTop', null);

              tile._setStyle('paddingTop', null);
            });
          }
        }, {
          key: "_parseRatio",
          value: function _parseRatio(value) {
            var ratioParts = value.split(':');

            if (ratioParts.length !== 2 && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              throw Error("mat-grid-list: invalid ratio given for row-height: \"".concat(value, "\""));
            }

            this.rowHeightRatio = parseFloat(ratioParts[0]) / parseFloat(ratioParts[1]);
          }
        }]);

        return RatioTileStyler;
      }(TileStyler);
      /**
       * This type of styler is instantiated when the user selects a "fit" row height mode.
       * In other words, the row height will reflect the total height of the container divided
       * by the number of rows.  Example `<mat-grid-list cols="3" rowHeight="fit">`
       *
       * @docs-private
       */


      var FitTileStyler = /*#__PURE__*/function (_TileStyler3) {
        _inherits(FitTileStyler, _TileStyler3);

        var _super3 = _createSuper(FitTileStyler);

        function FitTileStyler() {
          _classCallCheck(this, FitTileStyler);

          return _super3.apply(this, arguments);
        }

        _createClass(FitTileStyler, [{
          key: "setRowStyles",
          value: function setRowStyles(tile, rowIndex) {
            // Percent of the available vertical space that one row takes up.
            var percentHeightPerTile = 100 / this._rowspan; // Fraction of the horizontal gutter size that each column takes up.

            var gutterHeightPerTile = (this._rows - 1) / this._rows; // Base vertical size of a column.

            var baseTileHeight = this.getBaseTileSize(percentHeightPerTile, gutterHeightPerTile);

            tile._setStyle('top', this.getTilePosition(baseTileHeight, rowIndex));

            tile._setStyle('height', calc(this.getTileSize(baseTileHeight, tile.rowspan)));
          }
        }, {
          key: "reset",
          value: function reset(list) {
            if (list._tiles) {
              list._tiles.forEach(function (tile) {
                tile._setStyle('top', null);

                tile._setStyle('height', null);
              });
            }
          }
        }]);

        return FitTileStyler;
      }(TileStyler);
      /** Wraps a CSS string in a calc function */


      function calc(exp) {
        return "calc(".concat(exp, ")");
      }
      /** Appends pixels to a CSS string if no units are given. */


      function normalizeUnits(value) {
        return value.match(/([A-Za-z%]+)$/) ? value : "".concat(value, "px");
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
      // TODO(kara): Conditional (responsive) column count / row size.
      // TODO(kara): Re-layout on window resize / media change (debounced).
      // TODO(kara): gridTileHeader and gridTileFooter.


      var MAT_FIT_MODE = 'fit';

      var MatGridList = /*#__PURE__*/function () {
        function MatGridList(_element, _dir) {
          _classCallCheck(this, MatGridList);

          this._element = _element;
          this._dir = _dir;
          /** The amount of space between tiles. This will be something like '5px' or '2em'. */

          this._gutter = '1px';
        }
        /** Amount of columns in the grid list. */


        _createClass(MatGridList, [{
          key: "cols",
          get: function get() {
            return this._cols;
          },
          set: function set(value) {
            this._cols = Math.max(1, Math.round(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceNumberProperty"])(value)));
          }
          /** Size of the grid list's gutter in pixels. */

        }, {
          key: "gutterSize",
          get: function get() {
            return this._gutter;
          },
          set: function set(value) {
            this._gutter = "".concat(value == null ? '' : value);
          }
          /** Set internal representation of row height from the user-provided value. */

        }, {
          key: "rowHeight",
          get: function get() {
            return this._rowHeight;
          },
          set: function set(value) {
            var newValue = "".concat(value == null ? '' : value);

            if (newValue !== this._rowHeight) {
              this._rowHeight = newValue;

              this._setTileStyler(this._rowHeight);
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this._checkCols();

            this._checkRowHeight();
          }
          /**
           * The layout calculation is fairly cheap if nothing changes, so there's little cost
           * to run it frequently.
           */

        }, {
          key: "ngAfterContentChecked",
          value: function ngAfterContentChecked() {
            this._layoutTiles();
          }
          /** Throw a friendly error if cols property is missing */

        }, {
          key: "_checkCols",
          value: function _checkCols() {
            if (!this.cols && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              throw Error("mat-grid-list: must pass in number of columns. " + "Example: <mat-grid-list cols=\"3\">");
            }
          }
          /** Default to equal width:height if rowHeight property is missing */

        }, {
          key: "_checkRowHeight",
          value: function _checkRowHeight() {
            if (!this._rowHeight) {
              this._setTileStyler('1:1');
            }
          }
          /** Creates correct Tile Styler subtype based on rowHeight passed in by user */

        }, {
          key: "_setTileStyler",
          value: function _setTileStyler(rowHeight) {
            if (this._tileStyler) {
              this._tileStyler.reset(this);
            }

            if (rowHeight === MAT_FIT_MODE) {
              this._tileStyler = new FitTileStyler();
            } else if (rowHeight && rowHeight.indexOf(':') > -1) {
              this._tileStyler = new RatioTileStyler(rowHeight);
            } else {
              this._tileStyler = new FixedTileStyler(rowHeight);
            }
          }
          /** Computes and applies the size and position for all children grid tiles. */

        }, {
          key: "_layoutTiles",
          value: function _layoutTiles() {
            var _this5 = this;

            if (!this._tileCoordinator) {
              this._tileCoordinator = new TileCoordinator();
            }

            var tracker = this._tileCoordinator;

            var tiles = this._tiles.filter(function (tile) {
              return !tile._gridList || tile._gridList === _this5;
            });

            var direction = this._dir ? this._dir.value : 'ltr';

            this._tileCoordinator.update(this.cols, tiles);

            this._tileStyler.init(this.gutterSize, tracker, this.cols, direction);

            tiles.forEach(function (tile, index) {
              var pos = tracker.positions[index];

              _this5._tileStyler.setStyle(tile, pos.row, pos.col);
            });

            this._setListStyle(this._tileStyler.getComputedHeight());
          }
          /** Sets style on the main grid-list element, given the style name and value. */

        }, {
          key: "_setListStyle",
          value: function _setListStyle(style) {
            if (style) {
              this._element.nativeElement.style[style[0]] = style[1];
            }
          }
        }]);

        return MatGridList;
      }();

      MatGridList.ɵfac = function MatGridList_Factory(t) {
        return new (t || MatGridList)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Directionality"], 8));
      };

      MatGridList.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MatGridList,
        selectors: [["mat-grid-list"]],
        contentQueries: function MatGridList_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatGridTile, 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._tiles = _t);
          }
        },
        hostAttrs: [1, "mat-grid-list"],
        hostVars: 1,
        hostBindings: function MatGridList_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("cols", ctx.cols);
          }
        },
        inputs: {
          cols: "cols",
          gutterSize: "gutterSize",
          rowHeight: "rowHeight"
        },
        exportAs: ["matGridList"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: MAT_GRID_LIST,
          useExisting: MatGridList
        }])],
        ngContentSelectors: _c0,
        decls: 2,
        vars: 0,
        template: function MatGridList_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: [_c3],
        encapsulation: 2,
        changeDetection: 0
      });

      MatGridList.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }]
        }];
      };

      MatGridList.propDecorators = {
        _tiles: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
          args: [MatGridTile, {
            descendants: true
          }]
        }],
        cols: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        gutterSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        rowHeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatGridList, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'mat-grid-list',
            exportAs: 'matGridList',
            template: "<div>\n  <ng-content></ng-content>\n</div>",
            host: {
              'class': 'mat-grid-list',
              // Ensures that the "cols" input value is reflected in the DOM. This is
              // needed for the grid-list harness.
              '[attr.cols]': 'cols'
            },
            providers: [{
              provide: MAT_GRID_LIST,
              useExisting: MatGridList
            }],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            styles: [".mat-grid-list{display:block;position:relative}.mat-grid-tile{display:block;position:absolute;overflow:hidden}.mat-grid-tile .mat-figure{top:0;left:0;right:0;bottom:0;position:absolute;display:flex;align-items:center;justify-content:center;height:100%;padding:0;margin:0}.mat-grid-tile .mat-grid-tile-header,.mat-grid-tile .mat-grid-tile-footer{display:flex;align-items:center;height:48px;color:#fff;background:rgba(0,0,0,.38);overflow:hidden;padding:0 16px;position:absolute;left:0;right:0}.mat-grid-tile .mat-grid-tile-header>*,.mat-grid-tile .mat-grid-tile-footer>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-tile-header.mat-2-line,.mat-grid-tile .mat-grid-tile-footer.mat-2-line{height:68px}.mat-grid-tile .mat-grid-list-text{display:flex;flex-direction:column;flex:auto;box-sizing:border-box;overflow:hidden}.mat-grid-tile .mat-grid-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-list-text:empty{display:none}.mat-grid-tile .mat-grid-tile-header{top:0}.mat-grid-tile .mat-grid-tile-footer{bottom:0}.mat-grid-tile .mat-grid-avatar{padding-right:16px}[dir=rtl] .mat-grid-tile .mat-grid-avatar{padding-right:0;padding-left:16px}.mat-grid-tile .mat-grid-avatar:empty{display:none}\n"]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Directionality"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }]
          }];
        }, {
          cols: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          gutterSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          rowHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          _tiles: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
            args: [MatGridTile, {
              descendants: true
            }]
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var MatGridListModule = function MatGridListModule() {
        _classCallCheck(this, MatGridListModule);
      };

      MatGridListModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: MatGridListModule
      });
      MatGridListModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function MatGridListModule_Factory(t) {
          return new (t || MatGridListModule)();
        },
        imports: [[_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatLineModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatLineModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatGridListModule, {
          declarations: function declarations() {
            return [MatGridList, MatGridTile, MatGridTileText, MatGridTileHeaderCssMatStyler, MatGridTileFooterCssMatStyler, MatGridAvatarCssMatStyler];
          },
          imports: function imports() {
            return [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatLineModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]];
          },
          exports: function exports() {
            return [MatGridList, MatGridTile, MatGridTileText, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatLineModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"], MatGridTileHeaderCssMatStyler, MatGridTileFooterCssMatStyler, MatGridAvatarCssMatStyler];
          }
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatGridListModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatLineModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]],
            exports: [MatGridList, MatGridTile, MatGridTileText, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatLineModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"], MatGridTileHeaderCssMatStyler, MatGridTileFooterCssMatStyler, MatGridAvatarCssMatStyler],
            declarations: [MatGridList, MatGridTile, MatGridTileText, MatGridTileHeaderCssMatStyler, MatGridTileFooterCssMatStyler, MatGridAvatarCssMatStyler]
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
      // Privately exported for the grid-list harness.


      var ɵTileCoordinator = TileCoordinator;
      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=grid-list.js.map

      /***/
    }
  }]);
})();
//# sourceMappingURL=scheibentoenung-schmieder-home-es5.js.map
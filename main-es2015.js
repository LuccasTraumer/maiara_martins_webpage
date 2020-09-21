(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _components_apresentation_component_apresentation_component_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/apresentation-component/apresentation-component.component */ "./src/app/components/apresentation-component/apresentation-component.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_data_client_data_client_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/data-client/data-client.component */ "./src/app/components/data-client/data-client.component.ts");
/* harmony import */ var _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/not-found/not-found.component */ "./src/app/components/not-found/not-found.component.ts");







const routes = [
    {
        path: '',
        component: _components_apresentation_component_apresentation_component_component__WEBPACK_IMPORTED_MODULE_0__["ApresentationComponentComponent"],
        pathMatch: 'full',
    },
    {
        path: 'home',
        component: _components_apresentation_component_apresentation_component_component__WEBPACK_IMPORTED_MODULE_0__["ApresentationComponentComponent"]
    },
    {
        path: 'info',
        component: _components_data_client_data_client_component__WEBPACK_IMPORTED_MODULE_3__["DataClientComponent"]
    },
    {
        path: '**',
        component: _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__["NotFoundComponent"]
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'maiara-web-site';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [".container-fluid[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n@media only screen and (max-width:700px) {\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7QUFDQTs7QUFFQSIsImZpbGUiOiJhcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWZsdWlkIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjcwMHB4KSB7XHJcblxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_head_head_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/head/head.component */ "./src/app/components/head/head.component.ts");
/* harmony import */ var _components_feed_feed_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/feed/feed.component */ "./src/app/components/feed/feed.component.ts");
/* harmony import */ var _components_apresentation_component_apresentation_component_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/apresentation-component/apresentation-component.component */ "./src/app/components/apresentation-component/apresentation-component.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_data_client_data_client_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/data-client/data-client.component */ "./src/app/components/data-client/data-client.component.ts");










class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _components_head_head_component__WEBPACK_IMPORTED_MODULE_4__["HeadComponent"],
        _components_feed_feed_component__WEBPACK_IMPORTED_MODULE_5__["FeedComponent"],
        _components_apresentation_component_apresentation_component_component__WEBPACK_IMPORTED_MODULE_6__["ApresentationComponentComponent"],
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
        _components_data_client_data_client_component__WEBPACK_IMPORTED_MODULE_8__["DataClientComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _components_head_head_component__WEBPACK_IMPORTED_MODULE_4__["HeadComponent"],
                    _components_feed_feed_component__WEBPACK_IMPORTED_MODULE_5__["FeedComponent"],
                    _components_apresentation_component_apresentation_component_component__WEBPACK_IMPORTED_MODULE_6__["ApresentationComponentComponent"],
                    _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
                    _components_data_client_data_client_component__WEBPACK_IMPORTED_MODULE_8__["DataClientComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/apresentation-component/apresentation-component.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/apresentation-component/apresentation-component.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: ApresentationComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApresentationComponentComponent", function() { return ApresentationComponentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _head_head_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../head/head.component */ "./src/app/components/head/head.component.ts");
/* harmony import */ var _feed_feed_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../feed/feed.component */ "./src/app/components/feed/feed.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../footer/footer.component */ "./src/app/components/footer/footer.component.ts");





class ApresentationComponentComponent {
    constructor() { }
    ngOnInit() {
    }
}
ApresentationComponentComponent.ɵfac = function ApresentationComponentComponent_Factory(t) { return new (t || ApresentationComponentComponent)(); };
ApresentationComponentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ApresentationComponentComponent, selectors: [["app-apresentation-component"]], decls: 7, vars: 0, consts: [[1, "container-fluid", "w-100"], [1, "header"], [1, "feed"], [1, "footer"]], template: function ApresentationComponentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-feed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_head_head_component__WEBPACK_IMPORTED_MODULE_1__["HeadComponent"], _feed_feed_component__WEBPACK_IMPORTED_MODULE_2__["FeedComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: [".container-fluid[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    padding: 0;\r\n    overflow: hidden;\r\n}\r\n\r\n.feed[_ngcontent-%COMP%] {\r\n    padding-top: 15vh;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2FwcmVzZW50YXRpb24tY29tcG9uZW50L2FwcmVzZW50YXRpb24tY29tcG9uZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJhcHAvY29tcG9uZW50cy9hcHJlc2VudGF0aW9uLWNvbXBvbmVudC9hcHJlc2VudGF0aW9uLWNvbXBvbmVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1mbHVpZCB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmZlZWQge1xyXG4gICAgcGFkZGluZy10b3A6IDE1dmg7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApresentationComponentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-apresentation-component',
                templateUrl: './apresentation-component.component.html',
                styleUrls: ['./apresentation-component.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/data-client/data-client.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/data-client/data-client.component.ts ***!
  \*****************************************************************/
/*! exports provided: DataClientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataClientComponent", function() { return DataClientComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _head_head_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../head/head.component */ "./src/app/components/head/head.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../footer/footer.component */ "./src/app/components/footer/footer.component.ts");




class DataClientComponent {
    constructor() { }
    ngOnInit() {
    }
}
DataClientComponent.ɵfac = function DataClientComponent_Factory(t) { return new (t || DataClientComponent)(); };
DataClientComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DataClientComponent, selectors: [["app-data-client"]], decls: 44, vars: 0, consts: [[1, "container-fluid"], [1, "container", "img"], ["src", "https://raw.githubusercontent.com/LuccasTraumer/maiara_martins_webpage/master/src/assets/photograpys/29.jpg", "alt", "", "srcset", ""], [1, "data"], [1, "bio"], [1, "title", "font-size-1d4rem", "font-weight700"], [1, "infos"], [1, "font-weight700"]], template: function DataClientComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Bio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Dave is a director/photographer living in Los Angeles. He got his start shooting album covers for 50 Cent, Chris Brown, Three 6 Mafia, Soulja Boy, etc. This led to shooting national ad campaigns over the past decade.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Recently, Dave has been collaborating with the top agencies and brands, directing TVC\u2019s across the globe that combine his love of adventure, people, fashion, and cars. With a background in skating and snowboarding, he strives to tell stories that are fast-paced and energetic, always keeping the camera moving.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Dave wrote/directed his first narrative feature film, FLYING CARS, which premiered at the 2019 Dances with Films Festival in Los Angeles. It\u2019s available worldwide on Apple TV, Amazon, and Google Play.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Recent clients: Share Now, VW, Mercedes, Renault, Dodge, FIAT, Chrysler, Jeep, Alfa Romeo, Ford");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Born in 1979 - Grew up in Carlsbad, CA - UCLA 2001");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Represented by:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " FOX CREATIVE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " LA - 818.558.1225 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " NY - 212.375.0450 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " info@foxcreative.net ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " FRANCE: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " WANDA ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " T. +33 (0)1 49 46 14 00 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " M. +33(0)6 74 73 54 13 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " carole.mielelechelle@wanda.fr ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "INSTAGRAM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "app-footer");
    } }, directives: [_head_head_component__WEBPACK_IMPORTED_MODULE_1__["HeadComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]], styles: [".container-fluid[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    padding: 4%;\r\n}\r\n\r\n.img[_ngcontent-%COMP%] {\r\n    size: 20vh;\r\n    float: left;\r\n    display: contents;\r\n    padding: 4%;\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n    height: 70vh;\r\n    margin-top: 15%;\r\n    padding-left: 4%;\r\n    margin-bottom: 6%;\r\n}\r\n\r\n.data[_ngcontent-%COMP%] {\r\n    display: flex;\r\n}\r\n\r\n.bio[_ngcontent-%COMP%] {\r\n    float: left;\r\n    padding-right: 5%;\r\n    flex-basis: 50%;\r\n}\r\n\r\n.infos[_ngcontent-%COMP%] {\r\n    padding-left: 15%;\r\n}\r\n\r\n@media only screen and (max-width: 450px) {\r\n    img[_ngcontent-%COMP%] {\r\n        margin-top: 40%;\r\n        padding-left: 0;\r\n    }\r\n    .bio[_ngcontent-%COMP%] {\r\n        float: left;\r\n        padding-right: 5%;\r\n        flex-basis: 40%;\r\n    }\r\n    .data[_ngcontent-%COMP%] {\r\n        display: inline-block;\r\n    }\r\n    .infos[_ngcontent-%COMP%] {\r\n        padding-left: 0%;\r\n        padding-top: 5%;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2RhdGEtY2xpZW50L2RhdGEtY2xpZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxTQUFTO0lBQ1QsV0FBVztBQUNmOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsV0FBVztBQUNmOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUNBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJO1FBQ0ksZUFBZTtRQUNmLGVBQWU7SUFDbkI7SUFDQTtRQUNJLFdBQVc7UUFDWCxpQkFBaUI7UUFDakIsZUFBZTtJQUNuQjtJQUNBO1FBQ0kscUJBQXFCO0lBQ3pCO0lBQ0E7UUFDSSxnQkFBZ0I7UUFDaEIsZUFBZTtJQUNuQjtBQUNKIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL2RhdGEtY2xpZW50L2RhdGEtY2xpZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWZsdWlkIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDQlO1xyXG59XHJcblxyXG4uaW1nIHtcclxuICAgIHNpemU6IDIwdmg7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGRpc3BsYXk6IGNvbnRlbnRzO1xyXG4gICAgcGFkZGluZzogNCU7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgICBoZWlnaHQ6IDcwdmg7XHJcbiAgICBtYXJnaW4tdG9wOiAxNSU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDQlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNiU7XHJcbn1cclxuLmRhdGEge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLmJpbyB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDUlO1xyXG4gICAgZmxleC1iYXNpczogNTAlO1xyXG59XHJcblxyXG4uaW5mb3Mge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNSU7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDUwcHgpIHtcclxuICAgIGltZyB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNDAlO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgIH1cclxuICAgIC5iaW8ge1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDUlO1xyXG4gICAgICAgIGZsZXgtYmFzaXM6IDQwJTtcclxuICAgIH1cclxuICAgIC5kYXRhIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB9XHJcbiAgICAuaW5mb3Mge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMCU7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDUlO1xyXG4gICAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataClientComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-data-client',
                templateUrl: './data-client.component.html',
                styleUrls: ['./data-client.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/feed/feed.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/feed/feed.component.ts ***!
  \***************************************************/
/*! exports provided: FeedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedComponent", function() { return FeedComponent; });
/* harmony import */ var _utils_PostTO__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../utils/PostTO */ "./src/app/components/utils/PostTO.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function FeedComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "label", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const post_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", post_r1.src, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
class FeedComponent {
    constructor() {
        this.numeroPosts = 29;
        this.posts = [];
    }
    ngOnInit() {
        this.populateArray();
    }
    populateArray() {
        for (let i = 0; i <= this.numeroPosts; i++) {
            const obj = new _utils_PostTO__WEBPACK_IMPORTED_MODULE_0__["PostTO"]();
            obj.src = FeedComponent.pathImgs + i + '.jpg';
            obj.id = i;
            this.posts.push(obj);
        }
    }
}
FeedComponent.pathImgs = 'https://raw.githubusercontent.com/LuccasTraumer/maiara_martins_webpage/master/src/assets/photograpys/';
FeedComponent.ɵfac = function FeedComponent_Factory(t) { return new (t || FeedComponent)(); };
FeedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FeedComponent, selectors: [["app-feed"]], decls: 3, vars: 1, consts: [[1, "container-fluid", "my-4"], [1, "row"], ["class", "col-lg-4 col-md-12 mb-4", 4, "ngFor", "ngForOf"], [1, "col-lg-4", "col-md-12", "mb-4"], ["data-wow-delay", "0.3s", 1, "img-fluid", "mb-4", 3, "src"], ["hidden", "", 1, "font-weight900", "font-family-Merriweather"], ["hidden", "", 1, "text-color-grey", "font-family-Merriweather", "font-weight600"]], template: function FeedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, FeedComponent_div_2_Template, 8, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.posts);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".container-fluid[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n.img-fluid[_ngcontent-%COMP%] {\r\n    max-width: 100%;\r\n    padding-bottom: 0%;\r\n}\r\n\r\n.col-lg-4[_ngcontent-%COMP%] {\r\n    padding-left: 0%;\r\n    max-width: 100%;\r\n}\r\n\r\nlabel[_ngcontent-%COMP%] {\r\n    margin-bottom: 0;\r\n    padding-left: 5%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2ZlZWQvZmVlZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEIiLCJmaWxlIjoiYXBwL2NvbXBvbmVudHMvZmVlZC9mZWVkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWZsdWlkIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5pbWctZmx1aWQge1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDAlO1xyXG59XHJcblxyXG4uY29sLWxnLTQge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwJTtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxufVxyXG5cclxubGFiZWwge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIHBhZGRpbmctbGVmdDogNSU7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FeedComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-feed',
                templateUrl: './feed.component.html',
                styleUrls: ['./feed.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 10, vars: 0, consts: [[1, "container-fluid", "container"], [1, "copy"], [1, "font-weight500", "text-color-white", "font-size-1rem", "copy"], ["href", "http://github.com/luccastraumer", "target", "_blank", "rel", "noopener noreferrer"], [1, "created"], [1, "font-weight400", "text-color-white", "font-size-1rem"], ["href", "http://linkedin.com/in/luccastraumer", "target", "_blank", "rel", "noopener noreferrer"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " \u00A9 Copyright Lucas Jesus ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Create by: Lucas Jesus ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["footer[_ngcontent-%COMP%] {\r\n    padding: 0;\r\n    margin: 0;\r\n    background-color: #000;\r\n    height: 8vh;\r\n    display: block;\r\n    overflow: hidden;\r\n\r\n}\r\n\r\n.container[_ngcontent-%COMP%], .container-fluid[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n    text-decoration: none;\r\n    color: #fff;\r\n}\r\n\r\n.copy[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n}\r\n\r\n.copy[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n    padding-top: 0.7%;\r\n}\r\n\r\n.created[_ngcontent-%COMP%] {\r\n    padding-left: 85%;\r\n}\r\n\r\n@media only screen and (max-width: 450px) {\r\n    footer[_ngcontent-%COMP%] {\r\n        display: inline-block;\r\n        width: 100%;\r\n    }\r\n\r\n    .created[_ngcontent-%COMP%] {\r\n        float: left;\r\n        text-align: center;\r\n        width: 100%;\r\n        padding-left: 0;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 1024px) {\r\n    .created[_ngcontent-%COMP%] {\r\n        text-align: center;\r\n        padding-left: 30vw;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVixTQUFTO0lBQ1Qsc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxjQUFjO0lBQ2QsZ0JBQWdCOztBQUVwQjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsV0FBVztBQUNmOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0k7UUFDSSxxQkFBcUI7UUFDckIsV0FBVztJQUNmOztJQUVBO1FBQ0ksV0FBVztRQUNYLGtCQUFrQjtRQUNsQixXQUFXO1FBQ1gsZUFBZTtJQUNuQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxrQkFBa0I7UUFDbEIsa0JBQWtCO0lBQ3RCO0FBQ0oiLCJmaWxlIjoiYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9vdGVyIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xyXG4gICAgaGVpZ2h0OiA4dmg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG59XHJcblxyXG4uY29udGFpbmVyLCAuY29udGFpbmVyLWZsdWlkIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbmEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5jb3B5IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmNvcHkgbGFiZWwge1xyXG4gICAgcGFkZGluZy10b3A6IDAuNyU7XHJcbn1cclxuXHJcbi5jcmVhdGVkIHtcclxuICAgIHBhZGRpbmctbGVmdDogODUlO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSB7XHJcbiAgICBmb290ZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICAuY3JlYXRlZCB7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcclxuICAgIC5jcmVhdGVkIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAzMHZ3O1xyXG4gICAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/head/head.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/head/head.component.ts ***!
  \***************************************************/
/*! exports provided: HeadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeadComponent", function() { return HeadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class HeadComponent {
    constructor() { }
    ngOnInit() {
        window.onscroll = function () { scrollFunction(); };
        function scrollFunction() {
            if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
                document.getElementById('header').style.fontSize = '1.1rem';
                document.getElementById('title').style.fontSize = '1.4rem';
                document.getElementById('container-fluid').style.height = '16vh';
            }
            else {
                document.getElementById('header').style.fontSize = '1.3rem';
                document.getElementById('title').style.fontSize = '2rem';
            }
        }
    }
}
HeadComponent.ɵfac = function HeadComponent_Factory(t) { return new (t || HeadComponent)(); };
HeadComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeadComponent, selectors: [["app-head"]], decls: 21, vars: 0, consts: [["id", "header", 1, "fixed-top"], ["id", "container-fluid", 1, "container-fluid", "content"], [1, "header", "container-fluid"], [1, "rigth-side"], [1, "font-size-2rem", "font-weight900", "letter-spacing1"], ["id", "title", "routerLink", "/", "rel", "noopener noreferrer"], [1, "left-side"], [1, "nav"], [1, "nav-item"], ["href", "https://www.instagram.com/2m_fotografia/", "target", "_blank", 1, "nav-link", "active", "font-weight800", "font-size-1rem", "letter-spacing1", "font-family-Merriweather"], ["routerLink", "/", 1, "nav-link", "font-weight800", "font-size-1rem", "letter-spacing1", "font-family-Merriweather"], ["routerLink", "info", 1, "nav-link", "font-weight800", "font-size-1rem", "letter-spacing1", "font-family-Merriweather"], ["routerLink", "/", 1, "nav-link", "disabled", "font-weight800", "font-size-1rem", "letter-spacing1", "font-family-Merriweather"]], template: function HeadComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Maiara Martins ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Work");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Films");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".header[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  place-content: space-between;\r\n  padding: 5vh;\r\n  text-transform: uppercase;\r\n  transition: 0.2s; \r\n}\r\n\r\n.left-side[_ngcontent-%COMP%] {\r\n  padding-top: 3.5vh;\r\n  float: right;\r\n  color: black;\r\n}\r\n\r\n.rigth-side[_ngcontent-%COMP%] {\r\n  padding-top: 3vw;\r\n  padding-left: 5vw;\r\n}\r\n\r\n.rigth-side[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  display: table-caption;\r\n  line-height: 100%;\r\n}\r\n\r\n.container-fluid[_ngcontent-%COMP%] {\r\n  background-color: #fff;\r\n  margin: 0;\r\n  padding: 0;\r\n  margin-bottom: 5%;\r\n\r\n}\r\n\r\n.container-fluid[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  text-decoration: none;\r\n  color: #000;\r\n  letter-spacing: 0.1rem;\r\n  padding-right: 0.5vw;\r\n  padding-left: 0.5vw;\r\n  margin-right: 1vh;\r\n  text-align: center;\r\n}\r\n\r\n.left-side[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\r\n  border-bottom: 1px solid #000;\r\n  padding-bottom: 1px;\r\n  margin-right: 1vh;\r\n}\r\n\r\n.container-fluid[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n  border-bottom: 1px solid #000;\r\n  padding-bottom: 1px;\r\n}\r\n\r\n@media only screen and (max-width: 700px) {\r\n  .header[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    padding: 3vh;\r\n    font-size: 1rem;\r\n  }\r\n\r\n  .container-fluid[_ngcontent-%COMP%] {\r\n    height: 25vh;\r\n  }\r\n\r\n  .left-side[_ngcontent-%COMP%] {\r\n    padding-top: 0.5vh;\r\n    padding-left: 1vh;\r\n    transition: transform .3s ease 0s;\r\n  }\r\n\r\n  .rigth-side[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n    padding-left: 3vh;\r\n    margin-bottom: 0;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2hlYWQvaGVhZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLDRCQUE0QjtFQUM1QixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsU0FBUztFQUNULFVBQVU7RUFDVixpQkFBaUI7O0FBRW5COztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUdBO0VBQ0UsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0U7SUFDRSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGlDQUFpQztFQUNuQzs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixnQkFBZ0I7RUFDbEI7QUFDRiIsImZpbGUiOiJhcHAvY29tcG9uZW50cy9oZWFkL2hlYWQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcGxhY2UtY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBwYWRkaW5nOiA1dmg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICB0cmFuc2l0aW9uOiAwLjJzOyBcclxufVxyXG5cclxuLmxlZnQtc2lkZSB7XHJcbiAgcGFkZGluZy10b3A6IDMuNXZoO1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5yaWd0aC1zaWRlIHtcclxuICBwYWRkaW5nLXRvcDogM3Z3O1xyXG4gIHBhZGRpbmctbGVmdDogNXZ3O1xyXG59XHJcblxyXG4ucmlndGgtc2lkZSBhIHtcclxuICBkaXNwbGF5OiB0YWJsZS1jYXB0aW9uO1xyXG4gIGxpbmUtaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uY29udGFpbmVyLWZsdWlkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDUlO1xyXG5cclxufVxyXG5cclxuLmNvbnRhaW5lci1mbHVpZCBhIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6ICMwMDA7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMXJlbTtcclxuICBwYWRkaW5nLXJpZ2h0OiAwLjV2dztcclxuICBwYWRkaW5nLWxlZnQ6IDAuNXZ3O1xyXG4gIG1hcmdpbi1yaWdodDogMXZoO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuXHJcbi5sZWZ0LXNpZGUgbGkgLmFjdGl2ZSB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDA7XHJcbiAgcGFkZGluZy1ib3R0b206IDFweDtcclxuICBtYXJnaW4tcmlnaHQ6IDF2aDtcclxufVxyXG5cclxuLmNvbnRhaW5lci1mbHVpZCBsaSBhOmhvdmVyIHtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwMDtcclxuICBwYWRkaW5nLWJvdHRvbTogMXB4O1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XHJcbiAgLmhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgcGFkZGluZzogM3ZoO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRhaW5lci1mbHVpZCB7XHJcbiAgICBoZWlnaHQ6IDI1dmg7XHJcbiAgfVxyXG5cclxuICAubGVmdC1zaWRlIHtcclxuICAgIHBhZGRpbmctdG9wOiAwLjV2aDtcclxuICAgIHBhZGRpbmctbGVmdDogMXZoO1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4zcyBlYXNlIDBzO1xyXG4gIH1cclxuXHJcbiAgLnJpZ3RoLXNpZGUgbGFiZWwge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzdmg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeadComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-head',
                templateUrl: './head.component.html',
                styleUrls: ['./head.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/not-found/not-found.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/not-found/not-found.component.ts ***!
  \*************************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class NotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
}
NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) { return new (t || NotFoundComponent)(); };
NotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotFoundComponent, selectors: [["app-not-found"]], decls: 5, vars: 0, consts: [[1, "container-fluid"], [1, "font-weight800", "font-size-2rem"], [1, "font-weight500", "font-size-1d4rem"]], template: function NotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "404");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Page not found");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".container-fluid[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n}\r\n\r\ndiv[_ngcontent-%COMP%] {\r\n    padding-top: 20%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJhcHAvY29tcG9uZW50cy9ub3QtZm91bmQvbm90LWZvdW5kLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWZsdWlkIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuZGl2IHtcclxuICAgIHBhZGRpbmctdG9wOiAyMCU7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-not-found',
                templateUrl: './not-found.component.html',
                styleUrls: ['./not-found.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/utils/PostTO.ts":
/*!********************************************!*\
  !*** ./src/app/components/utils/PostTO.ts ***!
  \********************************************/
/*! exports provided: PostTO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostTO", function() { return PostTO; });
class PostTO {
}


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Lucas\Documents\Github\Angular\maiarao\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
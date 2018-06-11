webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/apoio/apoio.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/apoio/apoio.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Apoio:</h3>\r\n<br>\r\n  <img  src=\"../../assets/images/logo_ifrs.png\" width=\"300\" height=\"100\" alt=\"Card image cap\">\r\n\r\n  <img src=\"../../assets/images/logo_ufrgs.png\" width=\"400\" height=\"180\" alt=\"Card image cap\">\r\n"

/***/ }),

/***/ "./src/app/apoio/apoio.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApoioComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ApoioComponent = /** @class */ (function () {
    function ApoioComponent() {
    }
    ApoioComponent.prototype.ngOnInit = function () {
    };
    ApoioComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-apoio',
            template: __webpack_require__("./src/app/apoio/apoio.component.html"),
            styles: [__webpack_require__("./src/app/apoio/apoio.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ApoioComponent);
    return ApoioComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".modal-dialog{\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.contrast div _ngcontent-c2{\r\n  background: black !important;\r\n  color: yellow !important;\r\n}\r\n\r\n.contentImage {\r\n  background: url('ifrs-google-maps.bc788e24f1c85a4402bb.PNG') center center no-repeat fixed;\r\n\r\n}\r\n\r\n.contrast,\r\n.contrast list-class,\r\n.contrast router-outlet,\r\n.contrast nav,\r\n.contrast div,\r\n.contrast li,\r\n.contrast ol,\r\n.contrast header,\r\n.contrast footer,\r\n.contrast section,\r\n.contrast ul,\r\n.contrast main,\r\n.contrast aside,\r\n.contrast article {\r\n    background: black !important;\r\n    color: white !important;\r\n}\r\n\r\n.contrast h1,\r\n.contrast h2,\r\n.contrast h3,\r\n.contrast h4,\r\n.contrast h5,\r\n.contrast h6,\r\n.contrast p,\r\n.contrast label,\r\n.contrast strong,\r\n.contrast em,\r\n.contrast cite,\r\n.contrast q,\r\n.contrast i,\r\n.contrast b,\r\n.contrast u,\r\n.contrast span {\r\n  background: black !important;\r\n  color: white !important;\r\n}\r\n\r\n.contrast a{\r\n  color: yellow !important;\r\n}\r\n\r\n.contrast button,\r\n.contrast input[type=button],\r\n.contrast input[type=reset],\r\n.contrast input[type=submit] {\r\n  background: black !important;\r\n  color: yellow !important;\r\n  border: none !important;\r\n}\r\n\r\n.contrast img.on-contrast-force-gray {\r\n  -webkit-filter: grayscale(100%) contrast(120%);\r\n          filter: grayscale(100%) contrast(120%);\r\n}\r\n\r\n.contrast img.on-contrast-force-white {\r\n  -webkit-filter: brightness(0) invert(1);\r\n          filter: brightness(0) invert(1);\r\n}\r\n\r\n.contrast input[type=text],\r\n.contrast input[type=password],\r\n.contrast input[type=url],\r\n.contrast input[type=search],\r\n.contrast input[type=email],\r\n.contrast input[type=tel],\r\n.contrast input[type=date],\r\n.contrast input[type=month],\r\n.contrast input[type=week],\r\n.contrast input[type=datetime],\r\n.contrast input[type=datetime-local],\r\n.contrast textarea,\r\n.contrast input[type=number] {\r\n    background: black !important;\r\n    border: 1px solid white !important;\r\n    color: white !important;\r\n}\r\n\r\n#footer-brasil {\r\n  padding: 1em 0px;\r\n  max-width: 100%;\r\n}\r\n\r\n.inputs{\r\n  position: relative;\r\n  top: 20px;\r\n  left: 10px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div id=\"barra-brasil\" style=\"background:#7F7F7F; height: 20px; padding:0 0 0 10px;display:block;\">\r\n  <ul id=\"menu-barra-temp\" style=\"list-style:none;\">\r\n    <li style=\"display:inline; float:left;padding-right:10px; margin-right:10px; border-right:1px solid #EDEDED\">\r\n      <a href=\"http://brasil.gov.br\" style=\"font-family:sans,sans-serif; text-decoration:none; color:white;\">Portal do Governo Brasileiro</a>\r\n    </li>\r\n    <li>\r\n      <a style=\"font-family:sans,sans-serif; text-decoration:none; color:white;\" href=\"http://epwg.governoeletronico.gov.br/barra/atualize.html\">Atualize sua Barra de Governo</a>\r\n    </li>\r\n  </ul>\r\n</div>\r\n\r\n<div class=\"{{estilo}}\" id=\"acessibility\">\r\n  <app-carousel></app-carousel>\r\n  <nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\r\n      <a class=\"navbar-brand\" routerLink=\"projeto\">Atlas Ambiental</a>\r\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavDropdown\" aria-controls=\"navbarNavDropdown\"\r\n        aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n      </button>\r\n      <div class=\"collapse navbar-collapse\" id=\"navbarNavDropdown\">\r\n        <ul class=\"navbar-nav\">\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" routerLink=\"metodologia\">Metodologia</a>\r\n          </li>\r\n\r\n          <li class=\"nav-item dropdown\">\r\n            <a class=\"nav-link dropdown-toggle\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"\r\n              style=\" cursor:pointer;\">\r\n              Mapas Tematicos\r\n            </a>\r\n\r\n            <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownMenuLink\">\r\n\r\n              <li>\r\n                <a class=\"dropdown-item\" routerLink=\"regiao/1\" style=\" cursor:pointer;\">Demografia</a>\r\n              </li>\r\n              <li>\r\n                <a class=\"dropdown-item\" routerLink=\"regiao/2\" style=\" cursor:pointer;\">Administrativos</a>\r\n              </li>\r\n              <li>\r\n                <a class=\"dropdown-item\" routerLink=\"regiao/3\" style=\" cursor:pointer;\">Violência</a>\r\n              </li>\r\n              <li>\r\n                <a class=\"dropdown-item\" routerLink=\"regiao/4\" style=\" cursor:pointer;\">Mortalidade</a>\r\n              </li>\r\n              <li>\r\n                <a class=\"dropdown-item\" routerLink=\"regiao/5\" style=\" cursor:pointer;\">Saude Ambiental</a>\r\n              </li>\r\n\r\n            </div>\r\n          </li>\r\n\r\n          <li class=\"nav-item dropdown\">\r\n            <a class=\"nav-link dropdown-toggle\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"\r\n              style=\" cursor:pointer;\">\r\n              Textos de Apoio\r\n            </a>\r\n            <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownMenuLink\">\r\n\r\n\r\n              <li>\r\n                <a href=\"#\" class=\"dropdown-item\" routerLink=\"material/1\" style=\" cursor:pointer;\">Textos de Apoio</a>\r\n              </li>\r\n              <li>\r\n                <a href=\"#\" class=\"dropdown-item\" routerLink=\"material/2\" style=\" cursor:pointer;\">Numeros Temáticos</a>\r\n              </li>\r\n              <li>\r\n                <a href=\"#\" class=\"dropdown-item\" routerLink=\"material/3\" style=\" cursor:pointer;\">Notas Infromativas</a>\r\n              </li>\r\n\r\n\r\n            </div>\r\n          </li>\r\n\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" routerLink=\"equipe\" href=\"#\">Equipe</a>\r\n          </li>\r\n\r\n\r\n        </ul>\r\n      </div>\r\n    </nav>\r\n\r\n  <input type=\"button\" id=\"btnAumentar\" class=\"btn bg-dark inputs\" value=\" A + \" style=\"color: #EDEDED; font-size: 15px; width: 90px; height: 35px;\"\r\n    onclick=\"obterTamanhoFonte()\">\r\n  <input type=\"button\" id=\"btnDiminuir\" class=\"btn bg-dark inputs\" value=\" A - \" style=\"color: #EDEDED; font-size: 15px; width: 90px; height: 35px;\"\r\n    onclick=\"obterTamanhoFonte()\">\r\n  <a class=\"btn bg-dark inputs\" style=\"color: #EDEDED; font-size: 15px; height: 35px;\" (click)=\"onclickEvent('contrast')\">Alto Contraste</a>\r\n  <a class=\"btn bg-dark inputs\" style=\"color: #EDEDED; font-size: 15px; height: 35px;\" routerLink=\"mapa\">Mapa do Site</a>\r\n  <br>\r\n  <br>\r\n\r\n  <div class=\"container\" style=\"position: relative; height: 500px; max-height: 1000px\">\r\n\r\n\r\n\r\n  </div>\r\n\r\n<router-outlet></router-outlet>\r\n</div>\r\n\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n\r\n  <app-footer-app></app-footer-app>\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export contraste */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__regiao_regiao_service__ = __webpack_require__("./src/app/regiao/regiao.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var contraste;
var AppComponent = /** @class */ (function () {
    function AppComponent(_RegiaoService) {
        //   _RegiaoService.getStatusService(contraste);
        this._RegiaoService = _RegiaoService;
        this.title = 'app';
        this.ifrsRestinga01 = '../assets/images/ifrs-google-maps.PNG';
        this.ifrsRestinga02 = '../assets/images/IFRSRESTINGA.PNG';
        this.famed = '../assets/images/famed.PNG';
        this.vale = '../assets/images/vale.PNG';
        this.ifrsPOA = '../assets/images/ifrs-porto-alegre.PNG';
        this.RS = '../assets/images/rs.PNG';
        this.estilo = '';
    }
    AppComponent.prototype.onclickEvent = function (contrast) {
        if (this.estilo === 'contrast') {
            this.estilo = '';
        }
        else if (this.estilo === '') {
            this.estilo = contrast;
        }
        contrast = this.estilo;
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__regiao_regiao_service__["a" /* RegiaoService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__footer_app_footer_app_component__ = __webpack_require__("./src/app/footer-app/footer-app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__regiao_iframe_safe_pipe__ = __webpack_require__("./src/app/regiao/iframe-safe.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__projeto_projeto_component__ = __webpack_require__("./src/app/projeto/projeto.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__regiao_regiao_component__ = __webpack_require__("./src/app/regiao/regiao.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__equipe_equipe_component__ = __webpack_require__("./src/app/equipe/equipe.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_material_component__ = __webpack_require__("./src/app/material/material.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__metodologia_metodologia_component__ = __webpack_require__("./src/app/metodologia/metodologia.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_routing_module__ = __webpack_require__("./src/app/app.routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__skip_import_skip_import_component__ = __webpack_require__("./src/app/skip-import/skip-import.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__regiao_regiao_service__ = __webpack_require__("./src/app/regiao/regiao.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__iframe_safe_pipe02__ = __webpack_require__("./src/app/iframe-safe.pipe02.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__apoio_apoio_component__ = __webpack_require__("./src/app/apoio/apoio.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__map_site_map_site_component__ = __webpack_require__("./src/app/map-site/map-site.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__carousel_carousel_component__ = __webpack_require__("./src/app/carousel/carousel.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__projeto_projeto_component__["a" /* ProjetoComponent */],
                __WEBPACK_IMPORTED_MODULE_6__regiao_regiao_component__["a" /* RegiaoComponent */],
                __WEBPACK_IMPORTED_MODULE_7__equipe_equipe_component__["a" /* EquipeComponent */],
                __WEBPACK_IMPORTED_MODULE_8__material_material_component__["a" /* MaterialComponent */],
                __WEBPACK_IMPORTED_MODULE_9__metodologia_metodologia_component__["a" /* MetodologiaComponent */],
                __WEBPACK_IMPORTED_MODULE_1__regiao_iframe_safe_pipe__["a" /* IframeSafePipe */],
                __WEBPACK_IMPORTED_MODULE_13__iframe_safe_pipe02__["a" /* IframeSafePipe02 */],
                __WEBPACK_IMPORTED_MODULE_11__skip_import_skip_import_component__["a" /* SkipImportComponent */],
                __WEBPACK_IMPORTED_MODULE_0__footer_app_footer_app_component__["a" /* FooterAppComponent */],
                __WEBPACK_IMPORTED_MODULE_14__apoio_apoio_component__["a" /* ApoioComponent */],
                __WEBPACK_IMPORTED_MODULE_15__map_site_map_site_component__["a" /* MapSiteComponent */],
                __WEBPACK_IMPORTED_MODULE_16__carousel_carousel_component__["a" /* CarouselComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_10__app_routing_module__["a" /* AppRoutingModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_12__regiao_regiao_service__["a" /* RegiaoService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export appRoutes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__map_site_map_site_component__ = __webpack_require__("./src/app/map-site/map-site.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__projeto_projeto_component__ = __webpack_require__("./src/app/projeto/projeto.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_material_component__ = __webpack_require__("./src/app/material/material.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__equipe_equipe_component__ = __webpack_require__("./src/app/equipe/equipe.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__metodologia_metodologia_component__ = __webpack_require__("./src/app/metodologia/metodologia.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__regiao_regiao_component__ = __webpack_require__("./src/app/regiao/regiao.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var appRoutes = [
    { path: '', redirectTo: '/projeto', pathMatch: 'full' },
    { path: 'projeto', component: __WEBPACK_IMPORTED_MODULE_3__projeto_projeto_component__["a" /* ProjetoComponent */] },
    { path: 'mapa/projeto', component: __WEBPACK_IMPORTED_MODULE_3__projeto_projeto_component__["a" /* ProjetoComponent */] },
    { path: 'material', component: __WEBPACK_IMPORTED_MODULE_4__material_material_component__["a" /* MaterialComponent */] },
    { path: 'mapa/material', component: __WEBPACK_IMPORTED_MODULE_4__material_material_component__["a" /* MaterialComponent */] },
    { path: 'equipe', component: __WEBPACK_IMPORTED_MODULE_5__equipe_equipe_component__["a" /* EquipeComponent */] },
    { path: 'mapa/equipe', component: __WEBPACK_IMPORTED_MODULE_5__equipe_equipe_component__["a" /* EquipeComponent */] },
    { path: 'metodologia', component: __WEBPACK_IMPORTED_MODULE_6__metodologia_metodologia_component__["a" /* MetodologiaComponent */] },
    { path: 'mapa/metodologia', component: __WEBPACK_IMPORTED_MODULE_6__metodologia_metodologia_component__["a" /* MetodologiaComponent */] },
    { path: 'mapa', component: __WEBPACK_IMPORTED_MODULE_0__map_site_map_site_component__["a" /* MapSiteComponent */] },
    { path: 'mapa/regiao', component: __WEBPACK_IMPORTED_MODULE_7__regiao_regiao_component__["a" /* RegiaoComponent */] },
    { path: 'regiao', component: __WEBPACK_IMPORTED_MODULE_7__regiao_regiao_component__["a" /* RegiaoComponent */] },
    { path: 'mapa/regiao/:id', component: __WEBPACK_IMPORTED_MODULE_7__regiao_regiao_component__["a" /* RegiaoComponent */] },
    { path: 'regiao/:id', component: __WEBPACK_IMPORTED_MODULE_7__regiao_regiao_component__["a" /* RegiaoComponent */] },
    { path: 'mapa/material/:id', component: __WEBPACK_IMPORTED_MODULE_4__material_material_component__["a" /* MaterialComponent */] },
    { path: 'material/:id', component: __WEBPACK_IMPORTED_MODULE_4__material_material_component__["a" /* MaterialComponent */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */]],
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forRoot(appRoutes)],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/carousel/carousel.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/carousel/carousel.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"carouselExampleIndicators\" class=\"carousel slide\" data-ride=\"carousel\">\r\n    <ol class=\"carousel-indicators\">\r\n      <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"0\" class=\"active\"></li>\r\n      <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"1\"></li>\r\n      <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"2\"></li>\r\n      <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"3\"></li>\r\n      <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"4\"></li>\r\n\r\n    </ol>\r\n    <div class=\"carousel-inner\">\r\n        <div class=\"carousel-item active\">\r\n            <img [(src)]=\"ifrsPOA \" class=\"img-responsive\"  height=\"500\" width=\"1500\" />\r\n        </div>\r\n\r\n          <div class=\"carousel-item\" style=\"max-width: 900px;max-height: 900px;\">\r\n              <img [(src)]=\"famed\" class=\"img-responsive\" height=\"500\" width=\"1500\" />\r\n          </div>\r\n          <div class=\"carousel-item\" style=\"max-width: 900px;max-height: 900px;\">\r\n              <img [(src)]=\"RS\" class=\"img-responsive\"  height=\"500\" width=\"1500\"/>\r\n          </div>\r\n            <div class=\"carousel-item\" style=\"max-width: 900px;max-height: 900px;\">\r\n              <img [(src)]=\"ifrsRestinga02\" class=\"img-responsive\" height=\"500\" width=\"1500\" />\r\n            </div>\r\n            <div class=\"carousel-item\" style=\"max-width: 900px;max-height: 900px;\">\r\n              <img [(src)]=\"vale\" class=\"img-responsive\" height=\"500\" width=\"1500\" />\r\n            </div>\r\n    <a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\">\r\n      <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\r\n      <span class=\"sr-only\">Previous</span>\r\n    </a>\r\n    <a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\">\r\n      <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\r\n      <span class=\"sr-only\" style=\"position: relative; right: 300px !important;\">Next</span>\r\n    </a>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/carousel/carousel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarouselComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CarouselComponent = /** @class */ (function () {
    function CarouselComponent() {
        this.ifrsPOA = '../../assets/images/ifrs-google-maps.PNG';
        this.famed = '../../assets/images/famed.PNG';
        this.RS = '../../assets/images/rs.PNG';
        this.ifrsRestinga02 = '../../assets/images/ifrs-porto-alegre.PNG';
        this.vale = '../../assets/images/vale.PNG';
    }
    CarouselComponent.prototype.ngOnInit = function () {
    };
    CarouselComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-carousel',
            template: __webpack_require__("./src/app/carousel/carousel.component.html"),
            styles: [__webpack_require__("./src/app/carousel/carousel.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CarouselComponent);
    return CarouselComponent;
}());



/***/ }),

/***/ "./src/app/equipe/equipe.component.css":
/***/ (function(module, exports) {

module.exports = "a{\r\n  font-weight:bold;\r\n  color: royalblue !important;\r\n}\r\ni{\r\n  font-size:20px;\r\n  font-weight:bold;\r\n}\r\n.div-posicao{\r\n  position: relative;\r\n  top: -400px;\r\n  left: 25%;\r\n  width: 60%;\r\n  text-align: justify;\r\n}\r\n"

/***/ }),

/***/ "./src/app/equipe/equipe.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"div-posicao\">\r\n  <p>\r\n   <i >Sobre os(as) autores(as):</i>\r\n   ​</p>\r\n\r\n   <p>\r\n   <a>Daniel Canavese:</a> Sanitarista, Mestre em Saúde Coletiva (IESC-UFRJ) e Doutor em Ciências da Saúde (USP).\r\n   Atua na graduação e pós-graduação em Saúde Coletiva da Universidade Federal do Rio Grande do Sul (UFRGS).\r\n   </p>\r\n\r\n   <p>\r\n   <a>Maurício Polidoro:</a> Geógrafo, mestre em Planejamento Urbano (UFSCAR) e Doutor em Geografia (UFPR).\r\n   Professor do ensino básico, técnico e tecnológico do Instituto Federal de Educação, Ciência e Tecnologia\r\n   do Rio Grande do Sul (IFRS - Campus Restinga, Porto Alegre).\r\n   </p>\r\n\r\n   <p>\r\n   <a>Gabriela Pôrto Marques:</a> Bióloga e formação técnica em Meio Ambiente, pelo Instituto Federal de Educação,\r\n   Ciência e Tecnologia do Rio Grande do Sul (IFRS - Campus Porto Alegre). Atualmente realiza o Mestrado em\r\n   Desenvolvimento Rural no Programa de pós-graduação em Desenvolvimento Rural (PGDR) da Universidade Federal\r\n   do Rio Grande do Sul (UFRGS).\r\n\r\n   </p>\r\n\r\n   <br>\r\n   <br>\r\n\r\n     <i> + informações:</i>\r\n     <br>\r\n   ​\r\n     <a link href=\"http://www.sad.eco.br/\" style=\"color:grey;\">http://www.sad.eco.br/</a>\r\n     <app-apoio></app-apoio>\r\n   ​\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/equipe/equipe.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EquipeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EquipeComponent = /** @class */ (function () {
    function EquipeComponent() {
    }
    EquipeComponent.prototype.ngOnInit = function () {
    };
    EquipeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-equipe',
            template: __webpack_require__("./src/app/equipe/equipe.component.html"),
            styles: [__webpack_require__("./src/app/equipe/equipe.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EquipeComponent);
    return EquipeComponent;
}());



/***/ }),

/***/ "./src/app/footer-app/footer-app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/footer-app/footer-app.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n    <div class=\"navbar navbar-expand-lg navbar-dark bg-dark\" style=\"color: whitesmoke;\">\r\n\r\n  <pre style=\"color: whitesmoke; position: relative; top: +20px;left: 350px;\">\r\n      Instituto Federal do Rio Grande do Sul – Campus Restinga\r\n      Rua Alberto Hoffmann, 285 | Bairro Restinga | CEP: 91791-508 | Porto Alegre/RS\r\n      Telefone: (51) 3247-8400\r\n  </pre>\r\n</div>\r\n\r\n    <div style=\"color:whitesmoke\" class=\"bg-dark\" id=\"footer-brasil\" style=\"position: relative\">\r\n\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/footer-app/footer-app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterAppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterAppComponent = /** @class */ (function () {
    function FooterAppComponent() {
        this.arovore = '../../assets/images/img.png';
    }
    FooterAppComponent.prototype.ngOnInit = function () {
    };
    FooterAppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer-app',
            template: __webpack_require__("./src/app/footer-app/footer-app.component.html"),
            styles: [__webpack_require__("./src/app/footer-app/footer-app.component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], FooterAppComponent);
    return FooterAppComponent;
}());



/***/ }),

/***/ "./src/app/iframe-safe.pipe02.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IframeSafePipe02; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IframeSafePipe02 = /** @class */ (function () {
    function IframeSafePipe02(_sanitizer) {
        this._sanitizer = _sanitizer;
    }
    IframeSafePipe02.prototype.transform = function (url) {
        return this._sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    IframeSafePipe02 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'safe02'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */]])
    ], IframeSafePipe02);
    return IframeSafePipe02;
}());



/***/ }),

/***/ "./src/app/map-site/map-site.component.css":
/***/ (function(module, exports) {

module.exports = ".div-posicao{\r\n\r\n  position: relative;\r\n  top: -400px;\r\n  left: 25%;\r\n  width: 60%;\r\n  text-align: justify;\r\n  }\r\n"

/***/ }),

/***/ "./src/app/map-site/map-site.component.html":
/***/ (function(module, exports) {

module.exports = "<div  class=\"div-posicao\">\r\n    <h3><strong>MAPA DO SITE</strong></h3>\r\n    <ul class=\"list-group\" style=\"font-size: 18pt; list-style-type: none\">\r\n        <li  routerLink=\"projeto\" style=\" cursor: pointer\">Projeto</li>\r\n      <li routerLink=\"metodologia\" style=\" cursor: pointer\">Metodologia</li>\r\n        <li\r\n      routerLink=\"regioes\" style=\" cursor: pointer\">Mapas temáticos\r\n        </li>\r\n        <li>\r\n          <ul style=\"list-style-type: none\">\r\n            <li routerLink=\"regiao/1\" style=\" cursor: pointer\">Demografia\r\n            </li>\r\n            <li routerLink=\"regiao/2\" style=\" cursor: pointer\">Administrativos\r\n            </li>\r\n            <li routerLink=\"regiao/3\" style=\" cursor: pointer\">Violência\r\n            </li>\r\n            <li routerLink=\"regiao/4\" style=\" cursor: pointer\">Mortalidade\r\n            </li>\r\n            <li routerLink=\"regiao/5\" style=\" cursor: pointer\">Saúde Ambiental\r\n            </li>\r\n          </ul>\r\n\r\n        </li>\r\n        <li >\r\n        Textos de Apoio\r\n\r\n        </li>\r\n        <li>\r\n          <ul style=\"list-style-type: none\">\r\n              <li routerLink=\"material/1\" style=\" cursor: pointer\">Textos de Apoio</li>\r\n              <li routerLink=\"material/2\" style=\" cursor: pointer\">Textos de Apoio</li>\r\n              <li routerLink=\"material/3\" style=\" cursor: pointer\">Textos de Apoio </li>\r\n          </ul>\r\n        </li>\r\n        <li  routerLink=\"equipe\" style=\" cursor: pointer\">Equipe\r\n\r\n        </li>\r\n      </ul>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/map-site/map-site.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapSiteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MapSiteComponent = /** @class */ (function () {
    function MapSiteComponent() {
    }
    MapSiteComponent.prototype.ngOnInit = function () {
    };
    MapSiteComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-map-site',
            template: __webpack_require__("./src/app/map-site/map-site.component.html"),
            styles: [__webpack_require__("./src/app/map-site/map-site.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MapSiteComponent);
    return MapSiteComponent;
}());



/***/ }),

/***/ "./src/app/material/material.component.css":
/***/ (function(module, exports) {

module.exports = ".posicao-material {\r\n  position: relative;\r\n  text-align: justify;\r\n  top: 0px;\r\n  left: 0PX;\r\n  max-width: 1000PX;\r\n}\r\n.div-posicao{\r\n\r\n  position: relative;\r\n  top: -400px;\r\n  left: 25%;\r\n  width: 60%;\r\n  text-align: justify;\r\n  }\r\n\r\n"

/***/ }),

/***/ "./src/app/material/material.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"div-posicao\">\r\n\r\n  Os textos a seguir são produções intelectuais que visam dar suporte ao entendimento de conceitos\r\n  discutidos na área de Geoprocessamento. São documentos, livros, notas técnicas que têm por finalidade\r\n  ser um meio de entender a proposta deste Atlas e como as informações foram tratadas e dispostas neste\r\n  sistema.\r\n<br>\r\n<br>\r\n\r\n\r\n<div class=\"posicao-material\">\r\n  <div *ngFor=\"let a of curso.ob.router;let i = index\" class=\"d-inline-block \" >\r\n\r\n\r\n\r\n    <div class=\"\" style=\"width: 18rem;\" style=\"overflow-y: scroll; width: 270px; height: 400px\" >\r\n\r\n      <div class=\"card-body\">\r\n        <h5 class=\"card-title\"> {{a.nome}}</h5>\r\n        <p class=\"card-text\">{{a.resumo}}</p>\r\n        <a href=\"{{a.link}}\" class=\"btn btn-primary\" target=\"_blank\">Baixar</a>\r\n      </div>\r\n\r\n\r\n    </div>\r\n    <br>\r\n    <br>\r\n  </div>\r\n\r\n\r\n</div>\r\n<app-apoio></app-apoio>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/material/material.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_service__ = __webpack_require__("./src/app/material/material.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MaterialComponent = /** @class */ (function () {
    function MaterialComponent(_materialService, _ActivatedRoute) {
        this._materialService = _materialService;
        this._ActivatedRoute = _ActivatedRoute;
    }
    MaterialComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this._ActivatedRoute);
        this._ActivatedRoute.params.subscribe(function (data) {
            console.log('Router value => ', data);
            var routerId = Number(data.id);
            _this._get(routerId);
            // tslint:disable-next-line:no-debugger
        });
    };
    MaterialComponent.prototype._get = function (routerId) {
        this.curso = this._materialService.getCurso(routerId);
    };
    MaterialComponent.prototype.scrollToBottom = function (id) {
        var div = document.getElementById(id);
        div.scrollTop = div.scrollHeight - div.clientHeight;
    };
    MaterialComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: 'app-material',
            template: __webpack_require__("./src/app/material/material.component.html"),
            styles: [__webpack_require__("./src/app/material/material.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__material_service__["a" /* MaterialService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__material_service__["a" /* MaterialService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* ActivatedRoute */]])
    ], MaterialComponent);
    return MaterialComponent;
}());



/***/ }),

/***/ "./src/app/material/material.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router__ = __webpack_require__("./src/app/material/router.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MaterialService = /** @class */ (function () {
    function MaterialService() {
        this.cursos = [];
        this.cursos =
            [
                { id: 1, ob: { id: '1', router: __WEBPACK_IMPORTED_MODULE_1__router__["a" /* router01 */] } },
                { id: 2, ob: { id: '2', router: __WEBPACK_IMPORTED_MODULE_1__router__["b" /* router02 */] } },
                { id: 3, ob: { id: '3', router: __WEBPACK_IMPORTED_MODULE_1__router__["c" /* router03 */] } }
            ];
    }
    MaterialService.prototype.getCursos = function () { return this.cursos; };
    MaterialService.prototype.getCurso = function (id) { return this.cursos.find(function (curso) { return id === curso.id; }); };
    MaterialService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], MaterialService);
    return MaterialService;
}());



/***/ }),

/***/ "./src/app/material/router.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return router01; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return router02; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return router03; });
// tslint:disable:eofline
// tslint:disable:max-line-length
var router01 = [
    {
        nome: "A Sa\u00FAde e o Paradigma da Complexidade*",
        link: "https://drive.google.com/file/d/1ridGK6P53MOeGUXfY1a9eGGgdiAcahis/view?usp=sharing",
        resumo: "Este texto est\u00E1 estruturado da seguinte forma:\n    primeiro, proponho discutir resumidamente o paradigma\n    da complexidade, onde se insere a obra de\n    Morin; em seguida, abordo alguns temas estruturantes\n    desse paradigma, convergindo para uma introdu\u00E7\u00E3o\n    \u00E0 teoria das redes; finalmente, proponho\n    uma r\u00E1pida avalia\u00E7\u00E3o do potencial de uso e das\n    aplica\u00E7\u00F5es, ainda incipientes, deste marco te\u00F3rico\n    nas ci\u00EAncias da sa\u00FAde na contemporaneidade."
    },
    {
        nome: "Introdu\u00E7\u00E3o ao\n    pensamento complexo",
        link: "https://drive.google.com/file/d/1tJKxZn8O7TMjoWliP73lNW_PnmSX4iVK/view?usp=sharing",
        resumo: "Pedimos legitimamente ao pensamento que dissipe as brumas\n    e as trevas, que ponha ordem e clareza no real, que revele as leis\n    que o governam. A palavra complexidade s\u00F3 pode exprimir nosso\n    inc\u00F4modo, nossa confus\u00E3o, nossa incapacidade para definir de modo\n    simples, para nomear de modo claro, para ordenar nossas ideias."
    },
    {
        nome: "Carta para as futuras gera\u00E7\u00F5es",
        link: "https://drive.google.com/file/d/1rj3cVrNG6uvPW2yHzH7K27s3vEMljCWj/view?usp=sharing",
        resumo: "Escrevo esta carta na mais completa humildade. Meu trabalho \u00E9 no dom\u00EDnio da ci\u00EAncia. N\u00E3o me d\u00E1\n    qualquer qualifica\u00E7\u00E3o especial para falar sobre o futuro da humanidade. As mol\u00E9culas obedecem a\n    \"leis\". As decis\u00F5es humanas dependem das lembran\u00E7as do passado e das expectativas para o futuro.\n    A perspectiva sob a qual vejo o problema da transi\u00E7\u00E3o da cultura da guerra para uma cultura de paz\n    \u2013 para usar a express\u00E3o de Federico Mayor \u2013 se obscureceu nos \u00FAltimos anos, mas continuo\n    otimista."
    }
];
var router02 = [
    {
        nome: "Sa\u00FAde e ambiente no processo de desenvolvimento",
        link: "https://drive.google.com/file/d/1Vm0J1pZ_POkhWl55ufCRFioqpmuBdFun/view?usp=sharing",
        resumo: 'No ano de 2002 perdemos nosso grande companheiro Milton Santos, intelectual brilhante, cuja obra seminal ultrapassou as fronteiras muitas gerações, na forma de pensar a geografia e a sociedade. A presença de Milton...'
    },
    {
        nome: "Sa\u00FAde P\u00FAblica e Meio Ambiente: evolu\u00E7\u00E3o do\n    conhecimento e da pr\u00E1tica, alguns aspectos\n    \u00E9ticos",
        link: "https://drive.google.com/file/d/1mDVFC4iPHMFZQQZKgRdx12pCiSZcleys/view?usp=sharing",
        resumo: "O artigo enfoca a rela\u00E7\u00E3o sa\u00FAde-meio ambiente e a \u00E1rea\n      de Sa\u00FAde Ambiental. Apresenta as defini\u00E7\u00F5es adotadas\n      pela Organiza\u00E7\u00E3o Mundial da Sa\u00FAde para a Sa\u00FAde\n      Ambiental, destacando sua preocupa\u00E7\u00E3o tanto com\n      estudos para verificar as poss\u00EDveis rela\u00E7\u00F5es entre os ..."
    },
    {
        nome: "Ecologia pol\u00EDtica, economia ecol\u00F3gica e sa\u00FAde\n  coletiva: interfaces para a sustentabilidade do\n  desenvolvimento e para a promo\u00E7\u00E3o da sa\u00FAde",
        link: "https://drive.google.com/file/d/1Siqu0ehdl-lIZhRc-8XI6I5w1SXcmfsN/view?usp=sharing",
        resumo: "Este artigo apresenta as contribui\u00E7\u00F5es fornecidas\n  pela economia ecol\u00F3gica e pela ecologia pol\u00EDtica\n  para entendermos a rela\u00E7\u00E3o entre desenvolvi-\n  mento econ\u00F4mico, a degrada\u00E7\u00E3o s\u00F3cio-ambien-\n  tal e o papel da sa\u00FAde coletiva. Isso se torna ainda\n  mais ..."
    },
    {
        nome: "Sa\u00FAde, ambiente e desenvolvimento: reflex\u00F5es\n    sobre a experi\u00EAncia da COPASAD \u2013 Confer\u00EAncia\n    Pan-Americana de Sa\u00FAde e Ambiente no Contexto\n    do Desenvolvimento Sustent\u00E1vel",
        link: "https://drive.google.com/file/d/17MduNs48MEBwaFslwFcS66KZgDpWb79u/view?usp=sharing",
        resumo: "Este artigo apresenta uma reflex\u00E3o\n    sobre a rela\u00E7\u00E3o sa\u00FAde, ambiente e desenvolvi-\n    mento no contexto da Sa\u00FAde P\u00FAblica. Aborda a\n    possibilidade de implementa\u00E7\u00E3o de pol\u00EDticas\n    p\u00FAblicas no pa\u00EDs concernentes a esta vasta te-\n    m\u00E1tica, tendo por refer\u00EAncia uma avalia\u00E7\u00E3o cr\u00ED-\n    tica da experi\u00EAncia brasileira frente \u00E0 Confe-\n    r\u00EAncia Pan-americana de Sa\u00FAde e Ambiente\n    no Contexto do Desenvolvimento Sustent\u00E1vel\n    \u2013 COPASAD."
    },
    {
        nome: "Sistemas de indicadores\n    de sa\u00FAde e ambiente em institui\u00E7\u00F5es de sa\u00FAde",
        link: "https://drive.google.com/file/d/1DON1NlPtheHpd7dvIcEjIVx9fjkSj8lv/view?usp=sharing",
        resumo: "Neste artigo, \u00E9 realizada uma revis\u00E3o\n    te\u00F3rica sobre aspectos conceituais e metodol\u00F3gicos\n    da constru\u00E7\u00E3o de um sistema de indicadores, vi-\n    sando a gest\u00E3o integrada em sa\u00FAde e ambiente nas\n    institui\u00E7\u00F5es de pesquisa, ensino e presta\u00E7\u00E3o de ser-\n    vi\u00E7os em sa\u00FAde, que articule tamb\u00E9m a Biossegu-\n    ran\u00E7a. Partiu-se do estudo de mosdelos internacio-\n    nais de indicadores, destacando-se o modelo da\n    Organiza\u00E7\u00E3o Mundial de Sa\u00FAde, mais apropria-\n    do para este trabalho, a partir do qual foi feito o\n    processo de coleta, organiza\u00E7\u00E3o e s\u00EDntese de infor-\n    ma\u00E7\u00F5es. Visa-se criar um instrumental de moni-\n    toramento e avalia\u00E7\u00E3o destas a\u00E7\u00F5es, a fim de apoiar ..."
    },
    {
        nome: "Rela\u00E7\u00E3o entre sa\u00FAde e saneamento\n    na perspectiva do desenvolvimento",
        link: "https://drive.google.com/file/d/1FrnK7B1tcm4kcAeeQn3cA7swMrkcD3v1/view?usp=sharing",
        resumo: "Discute-se a rela\u00E7\u00E3o entre sa\u00FAde e sa-\n    neamento, situando-a no contexto do processo\n    de desenvolvimento social. \u00C9 defendida inicial-\n    mente a inser\u00E7\u00E3o dessa rela\u00E7\u00E3o no atual enfo-\n    que sa\u00FAde e ambiente, reconhecendo que esta\n    nova \u00E1rea n\u00E3o elimina a pertin\u00EAncia da abor-\n    dagem sa\u00FAde-saneamento, na verdade sua pre-\n    cursora. Apresenta-se a conceitua\u00E7\u00E3o de sanea-\n    mento e sua atual situa\u00E7\u00E3o no pa\u00EDs, al\u00E9m dos\n    marcos conceituais da rela\u00E7\u00E3o sa\u00FAde-sanea-\n    mento."
    }
];
var router03 = [
    {
        nome: "Atualiza\u00E7\u00E3o da lista de causas de mortes evit\u00E1veis (5 a 74 anos de idade) por interven\u00E7\u00F5es do Sistema \u00DAnico de Sa\u00FAde do Brasil",
        link: "https://drive.google.com/file/d/1Pf85WrFf3iJh2JXih5gjxMO0USKrKTox/view?usp=sharing",
        resumo: 'As causas de mortes evitáveis ou reduzíveis são definidas como aquelas preveníveis, total ou parcialmente, por ações efetivas dos serviços de saúde que estejam acessíveis em um determinado local e época. Essas causas devem ser revisadas à luz da evolução do conhecimento e tecnologia para ...'
    },
    {
        nome: "Notas sobre Mapas",
        link: "https://drive.google.com/file/d/1Sr7veSRWSZAcRkUwchaDzKkuQFDN09UR/view?usp=sharing",
        resumo: "<br>Consultas de dados nos sistemas de informa\u00E7\u00E3o, principalmente o Sistema de Informa\u00E7\u00E3o sobre Mortalidade \u2013 SIM e o Sistema de Informa\u00E7\u00E3o sobre Nascidos Vivos \u2013 SINASC, dispon\u00EDveis a partir das bases p\u00FAblicas no s\u00EDtio do Departamento de Inform\u00E1tica do SUS \u2013 Datasus, durante o per\u00EDodo de execu\u00E7\u00E3o do edital SEAD 23 (fevereiro de 2016 at\u00E9 fevereiro de 2017). Os dados est\u00E3o sujeitos a revis\u00E3o."
    }
];


/***/ }),

/***/ "./src/app/metodologia/metodologia.component.css":
/***/ (function(module, exports) {

module.exports = ".div-posicao{\r\n\r\n  position: relative;\r\n  top: -400px;\r\n  left: 25%;\r\n  width: 60%;\r\n  text-align: justify;\r\n  }\r\n"

/***/ }),

/***/ "./src/app/metodologia/metodologia.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"div-posicao\">\r\n      <p>\r\n      A concepção desse projeto e dos elementos que o compõem, deu-se partindo de um levantamento prévio de\r\n      dados secundários em multifontes (dados anteriormente coletados e que estão disponíveis para consulta em\r\n      bases de acesso público) e da reunião dos mesmos a fim de gerar os mapas temáticos. Além disso um\r\n      material complementar, tais como os mapas descritivos e textos analíticos de apoio às reflexões acerca\r\n      da relação entre as temáticas saúde, ambiente e desenvolvimento que aqui se apresentam.\r\n      </p>\r\n      <p>\r\n      Por meio do levantamentos desses dados secundários, disponibilizados pelo Instituto Brasileiro de\r\n      Geografia e Estatística (IBGE), Ministério da Saúde, Ministério do Planejamento, Orçamento e Gestão,\r\n      Fundação de Economia e Estatística do Rio Grande do Sul (FEE), Atlas Brasil de Desenvolvimento Humano\r\n      e o Sistema Nacional de Informações sobre Saneamento (SNIS), entre outros, foram elaboradas planilhas\r\n      de banco de dados, em cujos mesmos foram organizados, sistematizados e padronizados a fim de servirem\r\n      de base para a elaboração dos mapas.\r\n      </p>\r\n      <p>\r\n      Os dados foram levantados em escala temporal e são relacionados aos aspectos de saúde, sócio­demográficos,\r\n      ecnômicos, habitacionais e ambientais do Rio Grande do Sul e seus municípios. Ainda, alguns dados serviram\r\n      de fonte para a construção de indicadores e índices através de cálculos e modelos, tais como o Índice de\r\n      Carência Habitacional (ICH) e o Índice de Desenvolvimento Humano Municipal (IDHM)  que refletem,\r\n      respectivamente, a oferta de serviços elementares de saneamento básico e as dimensões do desenvolvimento\r\n      humano em uma determinada localidade e em certas esferas.\r\n      </p>\r\n      <p>\r\n      Os mapas estáticos foram confeccionados no software ArcGIS 9.3 após a elaboração do banco de dados que\r\n      reuniu, de forma padronizada, as variáveis selecionadas a partir das fontes supramencionadas.\r\n      </p>\r\n      <app-apoio></app-apoio>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/metodologia/metodologia.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MetodologiaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MetodologiaComponent = /** @class */ (function () {
    function MetodologiaComponent() {
    }
    MetodologiaComponent.prototype.ngOnInit = function () {
    };
    MetodologiaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-metodologia',
            template: __webpack_require__("./src/app/metodologia/metodologia.component.html"),
            styles: [__webpack_require__("./src/app/metodologia/metodologia.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MetodologiaComponent);
    return MetodologiaComponent;
}());



/***/ }),

/***/ "./src/app/projeto/projeto.component.css":
/***/ (function(module, exports) {

module.exports = ".div-posicao{\r\n\r\n  position: relative;\r\n  top: -400px;\r\n  left: 25%;\r\n  width: 60%;\r\n  text-align: justify;\r\n  }\r\n\r\n"

/***/ }),

/***/ "./src/app/projeto/projeto.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"div-posicao\">\r\n\r\n\r\n  <p>\r\n  O presente trabalho foi financiado pela Universidade Federal do Rio Grande do Sul (UFRGS) por\r\n   meio do edital número 23/2016 da Secretaria de Educação à Distância (SEAD). Contou com uma parceria\r\n   com pesquisadores(as) da UFRGS e do Instituto Federal do Rio Grande do Sul (IFRS) participantes do\r\n    grupo do CNPq denominado Saúde, Ambiente e Desenvolvimento (grupo SAD).\r\n  </p>\r\n  <p>\r\n  O Atlas consiste em um objeto de aprendizagem com vistas a interação com os temas saúde,\r\n   ambiente e desenvolvimento, transversais e afetos ao contexto do ensino-pesquisa-extensão.\r\n   O material aqui selecionado permite que sejam consultadas informações pertinentes a tríade\r\n   saúde-ambiente-desenvolvimento do estado do Rio Grande do Sul, no formato de mapas temáticos.\r\n   Ainda, a plataforma também conta com textos analíticos de apoio.\r\n  ​</p>\r\n  <p>\r\n  Os pressupostos desse recurso digital de suporte ao ensino são a interdisciplinaridade,\r\n  com vistas à apropriação por diferentes interesses; a multiplicidade temática e a interatividade\r\n  dialógica, permitindo que os saberes possam ser ampliados e rearranjados. No processo\r\n  ensino-aprendizagem é possível vislumbrar tal ferramenta como apoio, possibilitando exemplos ou\r\n  caracterizações; como disparadora de debates e reflexões ou como suporte para ações de pesquisa e\r\n  extensão, por exemplo.\r\n  </p>\r\n  <app-apoio></app-apoio>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/projeto/projeto.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjetoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProjetoComponent = /** @class */ (function () {
    function ProjetoComponent() {
    }
    ProjetoComponent.prototype.ngOnInit = function () {
    };
    ProjetoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-projeto',
            template: __webpack_require__("./src/app/projeto/projeto.component.html"),
            styles: [__webpack_require__("./src/app/projeto/projeto.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProjetoComponent);
    return ProjetoComponent;
}());



/***/ }),

/***/ "./src/app/regiao/iframe-safe.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IframeSafePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IframeSafePipe = /** @class */ (function () {
    function IframeSafePipe(_sanitizer) {
        this._sanitizer = _sanitizer;
    }
    IframeSafePipe.prototype.transform = function (url) {
        return this._sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    IframeSafePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'safe'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */]])
    ], IframeSafePipe);
    return IframeSafePipe;
}());



/***/ }),

/***/ "./src/app/regiao/mapas.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return mapasAdministrativos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return mapasDemografia; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return descricao; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return mapasMortalidade; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return mapasSaudeAmbiental; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return mapasViolencia; });
// tslint:disable:eofline
// tslint:disable:max-line-length
var mapasAdministrativos = [
    {
        titulo: 'Regiões de Saúde',
        nome: 'Regiões de Saúde',
        link: 'https://fusiontables.google.com/embedviz?q=select+col26+from+1ZAxGejRZuKEiVSf5McmWMdPtlqceQmNGIviUHDHb&viz=MAP&h=false&lat=-30.67934390062796&lng=-52.59588756250001&t=1&z=6&l=col26&y=10&tmplt=11&hml=KML',
        Ltitulo: [
            'Verdes Campos',
            'Entre Rios',
            'Fronteira Oeste',
            'Belas Praias',
            'Bons Ventos',
            'Verdes Campos',
            'Vaxle dos Sinos',
            'Vale Cai/Metropolitana',
            'Carbonifera/Costa Doce',
            'Capital/Vale Gravatai',
            'Sete Povos missões',
            'Portal das Missões',
            'Diversidade',
            'Fronteira Noroeste',
            'Caminho das Águas',
            'Alto Uruguai Gaúcho',
            'Planalto',
            'Araucárias',
            'Botucari',
            // ' XXX',
            'Sul',
            'Pampa',
            'Caxias e Hortensias',
            'Campos de Cima da Serra',
            'Vinhedos e Basalto',
            'Uva Vale',
            'Jacui Centro',
            'Vinte e Oito',
            'Vales e Montanhas',
            'Vale da Luz'
        ],
        leg: ['leg66 ', 'leg67', 'leg68', 'leg69', 'leg70', 'leg71', 'leg72', 'leg73', 'leg74', 'leg75', 'leg76', 'leg77', 'leg78', 'leg79', 'leg80', 'leg81', 'leg82', 'leg83', 'leg84', 'leg85', 'leg86 ', 'leg87', 'leg88', 'leg89', 'leg90', 'leg91', 'leg92', 'leg93', 'leg94', 'leg95', 'leg96', 'leg97']
    },
];
var mapasDemografia = [
    {
        titulo: 'Densidade Demográfica do Rio Grande do Sul, 2010 (hab/km2).',
        nome: 'Densidade Demográfica do Rio Grande do Sul, 2010',
        link: 'https://fusiontables.google.com/embedviz?q=select+col69+from+1IvIn4sTOdstDETt4cW3AQAE0SM1xpje7iRDh9snR&viz=MAP&h=false&lat=-30.457045950899513&lng=-50.41510142968751&t=1&z=6&l=col69&y=2&tmplt=2&hml=KML',
        Ltitulo: ['0,0 - 2,2', '2,2 - 140,2', '140,3 - 533,1', '533,2 - 1166,4', '1166,5 - 2.918,9'],
        leg: ['leg1 ', 'leg2', 'leg3', 'leg4', 'leg5'],
    },
    {
        titulo: 'Taxa de População Raça/Cor - Branca',
        nome: 'Taxa Pop. Branca 2010',
        link: 'https://fusiontables.google.com/embedviz?q=select+col75+from+1uiEJp2KXWckyDPSxltk98wABquJ5cad-vgdgzZUL&viz=MAP&h=false&lat=-30.38599268750699&lng=-53.90326060937501&t=1&z=6&l=col75&y=2&tmplt=2&hml=KML',
        Ltitulo: ['45,5 - 68,5', '68,6 - 81,9,', '82 - 99,1', '99,2 - 100'],
        leg: [
            'leg6', 'leg7', 'leg8', 'leg9'
        ],
    },
    {
        titulo: 'Taxa de População Raça/Cor - Preta',
        nome: 'Taxa Pop. Preta 2010',
        link: 'https://fusiontables.google.com/embedviz?q=select+col75+from+1uiEJp2KXWckyDPSxltk98wABquJ5cad-vgdgzZUL&viz=MAP&h=false&lat=-30.499653060795847&lng=-53.628602406250025&t=1&z=6&l=col75&y=3&tmplt=3&hml=KML',
        Ltitulo: ['0 - 5,067', '5,068 - 10,132', '10,133 - 15,2'],
        leg: ['leg10', 'leg11', 'leg12']
    },
    {
        titulo: 'Taxa de População Raça/Cor - Parda',
        nome: 'Taxa Pop. Parda 2010',
        link: 'https://fusiontables.google.com/embedviz?q=select+col75+from+1uiEJp2KXWckyDPSxltk98wABquJ5cad-vgdgzZUL&viz=MAP&h=false&lat=-30.528047437821645&lng=-53.936219593750025&t=1&z=6&l=col75&y=4&tmplt=5&hml=KML',
        Ltitulo: ['0,288 - 11,186', '11,187 - 22,085', '22,086 - 22,985'],
        leg: ['leg10', 'leg11', 'leg12']
    },
    {
        titulo: 'Taxa de População Raça/Cor - Negra',
        nome: 'Taxa Pop. Negra 2010',
        link: 'https://fusiontables.google.com/embedviz?q=select+col75+from+1uiEJp2KXWckyDPSxltk98wABquJ5cad-vgdgzZUL&viz=MAP&h=false&lat=-30.20575984359871&lng=-54.946961781250025&t=1&z=6&l=col75&y=8&tmplt=9&hml=KML',
        Ltitulo: ['0 - 12,69', '12,70 - 25,381', '25,382 - 38,071'],
        leg: ['leg10', 'leg11', 'leg12']
    },
    {
        titulo: 'Taxa de População Raça/Cor - Indígena',
        nome: 'Taxa Pop. Indígena 2010',
        link: 'https://fusiontables.google.com/embedviz?q=select+col75+from+1uiEJp2KXWckyDPSxltk98wABquJ5cad-vgdgzZUL&viz=MAP&h=false&lat=-30.300660527325608&lng=-54.661317250000025&t=1&z=6&l=col75&y=6&tmplt=7&hml=KML',
        Ltitulo: ['0 - 14,662 ', '14,663 - 29,322', '29,323 - 43,985'],
        leg: ['leg10', 'leg11', 'leg12']
    },
    {
        titulo: 'Taxa de População Raça/Cor - Amarela',
        nome: 'Taxa Pop. Amarela 2010',
        link: 'https://fusiontables.google.com/embedviz?q=select+col75+from+1uiEJp2KXWckyDPSxltk98wABquJ5cad-vgdgzZUL&viz=MAP&h=false&lat=-30.272199949858095&lng=-54.683289906250025&t=1&z=6&l=col75&y=7&tmplt=8&hml=KML',
        Ltitulo: ['0 - 1,757', '1,758 - 3,514', '3,515 - 5,271'],
        leg: ['leg10', 'leg11', 'leg12']
    }
];
var descricao = [
    'Descricao 0',
    'Descricao 1',
    'Descricao 2',
    'Descricao 3',
    'Descricao 4'
];
var mapasMortalidade = [
    {
        titulo: 'Óbitos Infantis - RS',
        nome: 'Óbitos Infantis - RS ',
        link: 'https://fusiontables.google.com/embedviz?q=select+col26+from+1ZAxGejRZuKEiVSf5McmWMdPtlqceQmNGIviUHDHb&viz=MAP&h=false&lat=-30.515719959044603&lng=-56.542036706117074&t=1&z=6&l=col26&y=2&tmplt=3&hml=KML',
        Ltitulo: ['0,0 -  27.429', ' 27.430 - 54.857', '54.858 - 82.287', '82.288 -  109.714', ' 109.715 - 137.143', '137.144 - 192.0', '192.1 - 193.0'],
        leg: ['leg14', 'leg15', 'leg16', 'leg17', 'leg18', 'leg19', 'leg20']
    },
    {
        titulo: 'Óbitos Infantis - Indígena',
        nome: 'Óbitos Infantis - Indígena',
        link: 'https://fusiontables.google.com/embedviz?q=select+col26+from+1ZAxGejRZuKEiVSf5McmWMdPtlqceQmNGIviUHDHb&viz=MAP&h=false&lat=-29.901462995701408&lng=-53.211121937500025&t=1&z=6&l=col26&y=3&tmplt=4&hml=KML',
        Ltitulo: ['0 - 0,9', '1 - 1,9', '2 - 3', '', ''],
        leg: ['leg21', 'leg22', 'leg23']
    },
    {
        titulo: 'Óbitos Infantis - Pop. Preta',
        nome: 'Taxa de Óbitos Infantis - Pop. Preta',
        link: 'https://fusiontables.google.com/embedviz?q=select+col26+from+1ZAxGejRZuKEiVSf5McmWMdPtlqceQmNGIviUHDHb&viz=MAP&h=false&lat=-29.663082158777538&lng=-52.892518421875025&t=1&z=6&l=col26&y=5&tmplt=6&hml=KML',
        Ltitulo: ['0,0 - 4,4', '4,5 - 8,8', '8,9 - 13,2', '13,3 - 17,6', '17,7- 21,0'],
        leg: ['leg24', 'leg25', 'leg26', 'leg27', 'leg28']
    },
    {
        titulo: 'Óbitos Infantis - Pop. Branca',
        nome: 'Óbitos Infantis - Pop. Branca',
        link: 'https://fusiontables.google.com/embedviz?q=select+col26+from+1ZAxGejRZuKEiVSf5McmWMdPtlqceQmNGIviUHDHb&viz=MAP&h=false&lat=-29.117461214902278&lng=-53.782411000000025&t=1&z=6&l=col26&y=8&tmplt=9&hml=KML',
        Ltitulo: ['0,0 - 20.857', '20.858 - 41.714', '41.715 - 62.571', '62.572 - 83.429', '83.430 - 104.286', '104.287 - 125.143', '125.144 - 146.0'],
        leg: [
            'leg14',
            'leg15',
            'leg16',
            'leg17',
            'leg18',
            'leg19',
            'leg20'
        ]
    },
    {
        titulo: 'Óbitos Infantis Pop. Parda',
        nome: 'Taxa de Óbitos Infantis Pop. Parda',
        link: 'https://fusiontables.google.com/embedviz?q=select+col26+from+1ZAxGejRZuKEiVSf5McmWMdPtlqceQmNGIviUHDHb&viz=MAP&h=false&lat=-29.9776248272372&lng=-52.37616100000001&t=1&z=6&l=col26&y=6&tmplt=7&hml=KML',
        Ltitulo: ['0,0 - 3,9', '4,0 - 8,0', '8,1 - 12,0', '12,1 - 16,0'],
        leg: [
            'leg24',
            'leg25',
            'leg26',
            'leg27'
        ],
    },
    {
        titulo: 'Óbitos Infantis - Infantis Ignorados',
        nome: 'Óbitos Infantis - Infantis Ignorados',
        link: 'https://fusiontables.google.com/embedviz?q=select+col26+from+1ZAxGejRZuKEiVSf5McmWMdPtlqceQmNGIviUHDHb&viz=MAP&h=false&lat=-29.117461214902278&lng=-53.782411000000025&t=1&z=6&l=col26&y=7&tmplt=8&hml=KML',
        Ltitulo: ['0,0 - 4,0', '4,1 - 8,0', '8,1 - 12,0'],
        leg: [
            'leg24',
            'leg26',
            'leg28',
        ],
    },
    {
        titulo: 'Doenças Feco-Oral - Óbitos por Residência',
        nome: 'Doenças Feco-Oral - Óbitos por Residência',
        link: 'https://fusiontables.google.com/embedviz?q=select+col26+from+1ZAxGejRZuKEiVSf5McmWMdPtlqceQmNGIviUHDHb&viz=MAP&h=false&lat=-30.50911877459428&lng=-55.781922718750025&t=1&z=6&l=col26&y=11&tmplt=12&hml=KML',
        Ltitulo: ['0,0 - 6,143', '6.144 - 12.286', '12.287 - 18.429', '18.430 -   24.571', '  24.572 - 30.714', '30.715 - 36.857', '36.858 - 43.0'],
        leg: [
            'leg14',
            'leg15',
            'leg16',
            'leg17',
            'leg18',
            'leg19',
            'leg20'
        ]
    }
];
var mapasSaudeAmbiental = [
    {
        titulo: 'Biomas do Rio Grande do Sul',
        nome: 'Biomas',
        link: 'https://fusiontables.google.com/embedviz?q=select+col13+from+19qswfScrqONnn5_27CYEMRzLBiZFDSRp0MOjQJ1h&viz=MAP&h=false&lat=-30.262711256177276&lng=-50.925965687500025&t=1&z=6&l=col13&y=3&tmplt=4&hml=KML',
        Ltitulo: ['Mata Atlântica', 'Mata Atlântica e Pampa', 'Pampa'],
        leg: [
            'leg52',
            'leg51',
            'leg50'
        ],
    }
];
var mapasViolencia = [
    {
        titulo: 'Violência Psicológica e Moral',
        nome: 'Violência Psicológica e Moral',
        link: 'https://fusiontables.google.com/embedviz?q=select+col22+from+1ZVoyM6Ap4Bshx0XTf9vDr8YOghk6Eanl-ZyvtrN0&viz=MAP&h=false&lat=-30.5185835669924&lng=-52.376161000000025&t=1&z=6&l=col22&y=2&tmplt=2&hml=KML',
        Ltitulo: ['0,0 - 10', '11 - 20', '21 - 30', '31 - 40', '41 - 50', '51 - 60', '61 - 70', '71 - 80', '81 - 90', '91 - 100'],
        leg: [
            'leg31',
            'leg32',
            'leg33',
            'leg34',
            'leg35',
            'leg36',
            'leg37',
            'leg38',
            'leg39',
            'leg40'
        ],
    },
    {
        titulo: 'Quantidade de Casos de Violência Feminina',
        nome: 'Quantidade de Casos de Violência Feminina',
        link: 'https://fusiontables.google.com/embedviz?q=select+col22+from+1ZVoyM6Ap4Bshx0XTf9vDr8YOghk6Eanl-ZyvtrN0&viz=MAP&h=false&lat=-30.603725207787026&lng=-52.529969593750025&t=1&z=6&l=col22&y=3&tmplt=3&hml=KML',
        Ltitulo: ['0,0 - 129,8', '129,9 - 259,6', '259,7 - 389,4', '389,5 - 519,2', '519,1 - 649', '649,1 - 778,8', '778,9 - 908,6', '908,7 - 1.038,4', '1.038,5 - 1.168,2', '1.168,3 - 1.298,0'],
        leg: [
            'leg31',
            'leg32',
            'leg33',
            'leg34',
            'leg35',
            'leg36',
            'leg37',
            'leg38',
            'leg39',
            'leg40'
        ],
    },
    {
        titulo: 'Taxa de Casos de Tortura',
        nome: 'Taxa de Quantidade dos Casos de Tortura',
        link: 'https://fusiontables.google.com/embedviz?q=select+col22+from+1ZVoyM6Ap4Bshx0XTf9vDr8YOghk6Eanl-ZyvtrN0&viz=MAP&h=false&lat=-29.117461214902278&lng=-53.782411000000025&t=1&z=6&l=col22&y=5&tmplt=5&hml=KML',
        Ltitulo: ['0 - 2', '2,1 - 4', '4,1 - 6', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
        leg: [
            'leg10',
            'leg11',
            'leg12'
        ]
    },
    {
        titulo: 'Taxa de Casos de Trabalho Infantil',
        nome: 'Taxa de Quantidade de Casos de Trabalho Infantil',
        link: 'https://fusiontables.google.com/embedviz?q=select+col22+from+1ZVoyM6Ap4Bshx0XTf9vDr8YOghk6Eanl-ZyvtrN0&viz=MAP&h=false&lat=-30.764344208014546&lng=-54.71624889062501&t=1&z=6&l=col22&y=6&tmplt=6&hml=KML',
        Ltitulo: ['0 - 1,667', '1,667 - 3,334', '3,335 - 5', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
        leg: [
            'leg10',
            'leg11',
            'leg12'
        ]
    },
    {
        titulo: 'Taxa de Casos de Violência Sexual',
        nome: 'Taxa de Quantidade de Violência Sexual',
        link: 'https://fusiontables.google.com/embedviz?q=select+col22+from+1ZVoyM6Ap4Bshx0XTf9vDr8YOghk6Eanl-ZyvtrN0&viz=MAP&h=false&lat=-30.234239673962357&lng=-53.760438343750025&t=1&z=6&l=col22&y=7&tmplt=7&hml=KML',
        Ltitulo: ['0 - 9,143', '9,144 - 18,286', '18,287 - 27,429', '27,430 - 36,571', '36,572 - 45,714', '45,715 - 54,857', '54,857 - 64,0'],
        leg: [
            'leg41',
            'leg42',
            'leg43',
            'leg44',
            'leg45',
            'leg46',
            'leg47'
        ]
    },
    {
        titulo: 'Taxa de Casos de Violência Econômica',
        nome: 'Taxa de Quantidade de Violência Econômica',
        link: 'https://fusiontables.google.com/embedviz?q=select+col22+from+1ZVoyM6Ap4Bshx0XTf9vDr8YOghk6Eanl-ZyvtrN0&viz=MAP&h=false&lat=-28.9733917786964&lng=-52.222352406250025&t=1&z=6&l=col22&y=9&tmplt=9&hml=KML',
        Ltitulo: ['0 - 9,143', '9,144 - 18,286', '18,287 - 27,429', '27,430 - 36,571', '36,572 - 45,714', '45,715 - 54,857', '54,857 - 64,0'],
        leg: [
            'leg41',
            'leg42',
            'leg43',
            'leg44',
            'leg45',
            'leg46',
            'leg47'
        ]
    },
    {
        titulo: 'Casos de Negligencia e Abandono',
        nome: 'Casos de Negligencia e Abandono',
        link: 'https://fusiontables.google.com/embedviz?q=select+col22+from+1ZVoyM6Ap4Bshx0XTf9vDr8YOghk6Eanl-ZyvtrN0&viz=MAP&h=false&lat=-30.63208914530543&lng=-55.628114125000025&t=1&z=6&l=col22&y=11&tmplt=11&hml=KML',
        Ltitulo: ['0 - 37.714', '37.715 - 75.429', '75.430 - 113.143', '113.144 - 150.857', '150.858 - 188.571', '188.572 - 226.286', '226.287 - 264.0', '264.1 - 301.714', '301.715- 339.429', '339.430 - 377.143', '377.143 - 414.857', '414.858 - 452.571', '452.572 - 490.286', '490.287 - 528.0'],
        leg: [
            'leg49 ',
            'leg50',
            'leg51',
            'leg52',
            'leg53',
            'leg54',
            'leg55',
            'leg56',
            'leg57',
            'leg58',
            'leg59',
            'leg60',
            'leg61',
            'leg62'
        ]
    },
    {
        titulo: 'Casos de Lesão Autoprovocada',
        nome: 'Casos de Lesão Autoprovocada',
        link: 'https://fusiontables.google.com/embedviz?q=select+col22+from+1ZVoyM6Ap4Bshx0XTf9vDr8YOghk6Eanl-ZyvtrN0&viz=MAP&h=false&lat=-30.442839438052953&lng=-54.37567271875001&t=1&z=6&l=col22&y=12&tmplt=12&hml=KML',
        Ltitulo: ['0 - 37.714', '37.715 - 75.429', '75.430 - 113.143', '113.144 - 150.857', '150.858 - 188.571', '188.572 - 226.286', '226.287 - 264.0', '264.1 - 301.714', '301.715- 339.429', '339.430 - 377.143', '377.143 - 414.857', '414.858 - 452.571', '452.572 - 490.286', '490.287 - 528.0'],
        leg: [
            'leg49',
            'leg50',
            'leg51',
            'leg52',
            'leg53',
            'leg54',
            'leg55',
            'leg56',
            'leg57',
            'leg58',
            'leg59',
            'leg60',
            'leg61',
            'leg62'
        ],
    },
    {
        titulo: 'Casos de Tráfico de Seres Humanos',
        nome: 'Casos de Tráfico de Seres Humanos',
        link: 'https://fusiontables.google.com/embedviz?q=select+col22+from+1ZVoyM6Ap4Bshx0XTf9vDr8YOghk6Eanl-ZyvtrN0&viz=MAP&h=false&lat=-30.428630854717973&lng=-54.84808482812501&t=1&z=6&l=col22&y=13&tmplt=13&hml=KML',
        Ltitulo: ['0', '1'],
        leg: [
            'leg63',
            'leg64'
        ],
    }
];



/***/ }),

/***/ "./src/app/regiao/regiao.component.css":
/***/ (function(module, exports) {

module.exports = ".box-conteudo{\r\n  position: relative;\r\n  top: -400px;\r\n  left: 300px;\r\n}\r\n\r\n\r\n.menu-lateral{\r\n  position: absolute;\r\n  font-size: 16px;\r\n  top:700px;\r\n  max-width: 700px;\r\n  width: 700px;\r\n  height: 200;\r\n\r\n }\r\n\r\n\r\n.titulo{\r\n }\r\n\r\n\r\n.box-texto{\r\n\r\n}\r\n\r\n\r\n.map-frame {\r\n  position: relative;\r\n  top: -500px;\r\n  left: 300px;\r\n\r\n }\r\n\r\n\r\n.box-titulo{\r\n }\r\n\r\n\r\n.legenda{\r\n  position: relative;\r\n  top: -1000px  ;\r\n  left: 600px;\r\n\r\n}\r\n\r\n\r\n.branco{\r\n  margin: 10px;\r\n  max-width: 20px;\r\n  max-height: 20px;\r\n  width: 20px;\r\n  height: 20px;\r\n  background-color:white;\r\n\r\n}\r\n\r\n\r\n.conteudo{\r\n  max-width: 1200px;\r\n  max-height: 700px;\r\n}\r\n\r\n\r\n/*\r\nDensidade Demográfica do Rio Grande do Sul, 2010 (hab/km2)\r\n*/\r\n\r\n\r\n.leg1{\r\n  margin: 10px;\r\n  width: 20px;\r\n  height: 20px;\r\n  border: 1px solid;\r\n  border-color: grey;\r\n  background-color:#ffffff;\r\n  max-width: 20px;\r\n  max-height: 20px;\r\n\r\n\r\n}\r\n\r\n\r\n.leg2{\r\n  margin: 10px;\r\n  width: 20px;\r\n  height: 20px;\r\n  background-color: #ffe599;\r\n  max-width: 20px;\r\n  max-height: 20px;\r\n\r\n}\r\n\r\n\r\n.leg3{\r\n  margin: 10px;\r\n  width: 20px;\r\n  height: 20px;\r\n  background-color: #ffd966;\r\n  max-width: 100px;\r\n  max-height: 100px;\r\n\r\n}\r\n\r\n\r\n.leg4{\r\n  margin: 10px;\r\n  width: 20px;\r\n  height: 20px;\r\n  background-color:#f1C232;\r\n  max-width: 100px;\r\n  max-height: 100px;\r\n\r\n}\r\n\r\n\r\n.leg5{\r\n  margin: 10px;\r\n  width: 20px;\r\n  height: 20px;\r\n  background-color: #7f6000;\r\n  max-width: 100px;\r\n  max-height: 100px;\r\n\r\n}\r\n\r\n\r\n/*\r\nTaxa de População Raça/Cor - Branca\r\n*/\r\n\r\n\r\n.leg6{\r\n  margin: 10px;\r\n  width: 20px;\r\n  height: 20px;\r\n  background-color: #d9ead3;\r\n  max-width: 100px;\r\n  max-height: 100px;\r\n\r\n}\r\n\r\n\r\n.leg7{\r\n  margin: 10px;\r\n  width: 20px;\r\n  height: 20px;\r\n  background-color: #93c47d;\r\n  max-width: 100px;\r\n  max-height: 100px;\r\n\r\n}\r\n\r\n\r\n.leg8{\r\n  margin: 10px;\r\n  width: 20px;\r\n  height: 20px;\r\n  background-color: #38761d;\r\n  max-width: 100px;\r\n  max-height: 100px;\r\n\r\n}\r\n\r\n\r\n.leg9{\r\n  margin: 10px;\r\n  width: 20px;\r\n  height: 20px;\r\n  background-color:#274e13;\r\n  max-width: 100px;\r\n  max-height: 100px;\r\n\r\n}\r\n\r\n\r\n/*\r\nTaxa de População Raça/Cor - preta\r\nTaxa de População Raça/Cor - Parda\r\nTaxa de População Raça/Cor - Indigena\r\nTaxa de População Raça/Cor - Amarela\r\n*/\r\n\r\n\r\n.leg10{\r\n  margin: 10px;\r\n  width: 20px;\r\n  height: 20px;\r\n  background-color:#cccccc;\r\n}\r\n\r\n\r\n.leg11{\r\n  margin: 10px;\r\n  width: 20px;\r\n  height: 20px;\r\n  background-color: #ffd966;\r\n}\r\n\r\n\r\n.leg12{\r\n  margin: 10px;\r\n  width: 20px;\r\n  height: 20px;\r\n  background-color: #bf9000;\r\n}\r\n\r\n\r\n.leg13{\r\n  margin: 10px;\r\n  width: 20px;\r\n  height: 20px;\r\n  background-color:yellow;\r\n}\r\n\r\n\r\n/*\r\nObitos Infantis Rio Grande do Sul\r\nObitos Infantis Branca\r\n*/\r\n\r\n\r\n.leg14{\r\n  margin: 10px;\r\n  width: 20px;\r\n  height: 20px;\r\n  background-color: #ff9900;\r\n}\r\n\r\n\r\n.leg15{\r\n  margin: 10px;\r\n  width: 20px;\r\n  height: 20px;\r\n  background-color: #fff000;\r\n}\r\n\r\n\r\n.leg16{\r\n  margin: 10px;\r\n  width: 20px;\r\n  height: 20px;\r\n  background-color: #00ffff;\r\n}\r\n\r\n\r\n.leg17{\r\n  margin: 10px;\r\n  width: 20px;\r\n  height: 20px;\r\n  background-color: #0000ff;\r\n}\r\n\r\n\r\n.leg18{\r\n  margin: 10px;\r\n  width: 20px;\r\n  height: 20px;\r\n  background-color: #9900ff;\r\n}\r\n\r\n\r\n.leg19{\r\n  margin: 10px;\r\n  width: 20px;\r\n  height: 20px;\r\n  background-color: #ff00ff;\r\n}\r\n\r\n\r\n.leg20{\r\n  margin: 10px;\r\n  width: 20px;\r\n  height: 20px;\r\n  background-color: #ff0000;\r\n}\r\n\r\n\r\n/*\r\nObitos Infantis Indigenas\r\n*/\r\n\r\n\r\n.leg21{\r\n  margin: 10px;\r\n  width: 20px;\r\n  height: 20px;\r\n  background-color: #fce5cd;\r\n}\r\n\r\n\r\n.leg22{\r\n  margin: 10px;\r\n  width: 20px;\r\n  height: 20px;\r\n  background-color:#f9cb9c;\r\n}\r\n\r\n\r\n.leg23{\r\n  margin: 10px;\r\n  width: 20px;\r\n  height: 20px;\r\n  background-color: #783f04;\r\n}\r\n\r\n\r\n/*\r\nObitos infantis Preta\r\nObitos infantis Parda\r\n*/\r\n\r\n\r\n.leg24{\r\n  margin: 10px;\r\n  width: 20px;\r\n  height: 20px;\r\n  background-color: #fce5cd;\r\n\r\n}\r\n\r\n\r\n.leg25{\r\n  margin: 10px;\r\n  width: 20px;\r\n  height: 20px;\r\n  background-color: #f9cb9c;\r\n\r\n}\r\n\r\n\r\n.leg26{\r\n  margin: 10px;\r\n  width: 20px;\r\n  height: 20px;\r\n  background-color: #f6b26b;\r\n\r\n}\r\n\r\n\r\n.leg27{\r\n  margin: 10px;\r\n  width: 20px;\r\n  height: 20px;\r\n  background-color: #e69138;\r\n}\r\n\r\n\r\n.leg28{\r\n  margin: 10px;\r\n  width: 20px;\r\n  height: 20px;\r\n  background-color:#b45f06;\r\n}\r\n\r\n\r\n.leg29{\r\n  margin: 10px;\r\n  width: 20px;\r\n  height: 20px;\r\n  background-color: #783f04;\r\n}\r\n\r\n\r\n/*\r\nViolência Psicológica e Moral\r\nQuantidade de Casos de Violência Feminina\r\n*/\r\n\r\n\r\n.leg30{\r\n  margin: 10px;\r\n  width: 20px;\r\n  height: 20px;\r\n  background-color: #f4cccc;\r\n}\r\n\r\n\r\n.leg31{\r\n  margin: 10px;\r\n  width: 20px;\r\n  height: 20px;\r\n  background-color: #cccccc;\r\n}\r\n\r\n\r\n.leg32{\r\n  margin: 10px;\r\n  width: 20px;\r\n  height: 20px;\r\n  background-color: #ff9900;\r\n}\r\n\r\n\r\n.leg33{\r\n  margin: 10px;\r\n  width: 20px;\r\n  height: 20px;\r\n  background-color:#ffff00;\r\n}\r\n\r\n\r\n.leg34{\r\n  margin: 10px;\r\n  width: 20px;\r\n  height: 20px;\r\n  background-color:#9900ff;\r\n}\r\n\r\n\r\n.leg35{\r\n  margin: 10px;\r\n  width: 20px;\r\n  height: 20px;\r\n  background-color: #ff00ff;\r\n}\r\n\r\n\r\n.leg36{\r\n  margin: 10px;\r\n  width: 20px;\r\n  height: 20px;\r\n  background-color: #e06666;\r\n}\r\n\r\n\r\n.leg37{\r\n  margin: 10px;\r\n  width: 20px;\r\n  height: 20px;\r\n  background-color:#f6b26b;\r\n}\r\n\r\n\r\n.leg38{\r\n  margin: 10px;\r\n  width: 20px;\r\n  height: 20px;\r\n  background-color: #ffd966;\r\n}\r\n\r\n\r\n.leg39{\r\n  margin: 10px;\r\n  width: 20px;\r\n  height: 20px;\r\n  background-color:#00ff00;\r\n}\r\n\r\n\r\n.leg40{\r\n  margin: 10px;\r\n  width: 20px;\r\n  height: 20px;\r\n  background-color:#274e13;\r\n}\r\n\r\n\r\n/*\r\nCasos de Trabalho Infantil\r\nCasos de Tortura\r\nleg: ['leg10 ','leg11','leg12','branco','branco'],\r\n*/\r\n\r\n\r\n/*\r\nViolencia sexual\r\nTaxa de Casos de Violência Econômica\r\nQuantidade de Casos de Violência Física Masculina\r\n*/\r\n\r\n\r\n.leg41{\r\n  margin: 10px;\r\n  width: 20px;\r\n  height: 20px;\r\n  background-color: #cccccc;\r\n}\r\n\r\n\r\n.leg42{\r\n  margin: 10px;\r\n  width: 20px;\r\n  height: 20px;\r\n  background-color: #f6b26b;\r\n}\r\n\r\n\r\n.leg43{\r\n  margin: 10px;\r\n  width: 20px;\r\n  height: 20px;\r\n  background-color:#bf9000;\r\n}\r\n\r\n\r\n.leg44{\r\n  margin: 10px;\r\n  width: 20px;\r\n  height: 20px;\r\n  background-color: #9900ff;\r\n}\r\n\r\n\r\n.leg45{\r\n  margin: 10px;\r\n  width: 20px;\r\n  height: 20px;\r\n  background-color: #a64d79;\r\n}\r\n\r\n\r\n.leg46{\r\n  margin: 10px;\r\n  width: 20px;\r\n  height: 20px;\r\n  background-color:#ff00ff;\r\n}\r\n\r\n\r\n.leg47{\r\n  margin: 10px;\r\n  width: 20px;\r\n  height: 20px;\r\n  background-color:#ea9999;\r\n}\r\n\r\n\r\n/*\r\nViolência Negligência Abandono\r\nLesão Auto-Provocada\r\n*/\r\n\r\n\r\n.leg49{\r\n  margin: 10px;\r\n  width: 20px;\r\n  height: 20px;\r\n  background-color: #cccccc;\r\n}\r\n\r\n\r\n.leg50{\r\n  margin: 10px;\r\n  width: 20px;\r\n  height: 20px;\r\n  background-color: #ff9900;\r\n}\r\n\r\n\r\n.leg51{\r\n  margin: 10px;\r\n  width: 20px;\r\n  height: 20px;\r\n  background-color:#ffff00;\r\n}\r\n\r\n\r\n.leg52{\r\n  margin: 10px;\r\n  width: 20px;\r\n  height: 20px;\r\n  background-color:#00ff00;\r\n}\r\n\r\n\r\n.leg53{\r\n  margin: 10px;\r\n  width: 20px;\r\n  height: 20px;\r\n  background-color:#9900ff;\r\n}\r\n\r\n\r\n.leg54{\r\n  margin: 10px;\r\n  width: 20px;\r\n  height: 20px;\r\n  background-color:#c27ba0;\r\n}\r\n\r\n\r\n.leg55{\r\n  margin: 10px;\r\n  width: 20px;\r\n  height: 20px;\r\n  background-color:#674ea7;\r\n}\r\n\r\n\r\n.leg56{\r\n  margin: 10px;\r\n  width: 20px;\r\n  height: 20px;\r\n  background-color:#6aa84f;\r\n}\r\n\r\n\r\n.leg57{\r\n  margin: 10px;\r\n  width: 20px;\r\n  height: 20px;\r\n  background-color:#f1c232;\r\n}\r\n\r\n\r\n.leg58{\r\n  margin: 10px;\r\n  width: 20px;\r\n  height: 20px;\r\n  background-color:#e69138;\r\n}\r\n\r\n\r\n.leg59{\r\n  margin: 10px;\r\n  width: 20px;\r\n  height: 20px;\r\n  background-color:#cc0000;\r\n}\r\n\r\n\r\n.leg60{\r\n  margin: 10px;\r\n  width: 20px;\r\n  height: 20px;\r\n  background-color:#660000;\r\n}\r\n\r\n\r\n.leg61{\r\n  margin: 10px;\r\n  width: 20px;\r\n  height: 20px;\r\n  background-color:#783f04;\r\n}\r\n\r\n\r\n.leg62{\r\n  margin: 10px;\r\n  width: 20px;\r\n  height: 20px;\r\n  background-color:#7f6000;\r\n}\r\n\r\n\r\n/*\r\ntráfico de seres humanos\r\n*/\r\n\r\n\r\n.leg63{\r\n  margin: 10px;\r\n  width: 20px;\r\n  height: 20px;\r\n  background-color:#e0ffd4;\r\n}\r\n\r\n\r\n.leg64{\r\n  margin: 10px;\r\n  width: 20px;\r\n  height: 20px;\r\n  background-color:#267114;\r\n}\r\n\r\n\r\n.leg65{\r\n  margin: 10px;\r\n  width: 20px;\r\n  height: 20px;\r\n  background-color:#267114;\r\n}\r\n\r\n\r\n/*\r\nSaúde Ambiental\r\nBiomas\r\n*/\r\n\r\n\r\n.leg52{\r\n  margin: 10px;\r\n  width: 20px;\r\n  height: 20px;\r\n  background-color:#00ff00;\r\n}\r\n\r\n\r\n.leg50{\r\n  margin: 10px;\r\n  width: 20px;\r\n  height: 20px;\r\n  background-color: #ff9900;\r\n}\r\n\r\n\r\n.leg51{\r\n  margin: 10px;\r\n  width: 20px;\r\n  height: 20px;\r\n  background-color:#ffff00;\r\n}\r\n\r\n\r\n/*\r\nAdministrativos\r\n\r\n*/\r\n\r\n\r\n/*\r\n1\r\n*/\r\n\r\n\r\n.leg66{\r\n  margin: 10px;\r\n  width: 20px;\r\n  height: 20px;\r\n  background-color:#ff0000;\r\n}\r\n\r\n\r\n/*2*/\r\n\r\n\r\n.leg67{\r\n  margin: 10px;\r\n  width: 20px;\r\n  height: 20px;\r\n  background-color: #ff9900;\r\n}\r\n\r\n\r\n/*3*/\r\n\r\n\r\n.leg68{\r\n  margin: 10px;\r\n  width: 20px;\r\n  height: 20px;\r\n  background-color:#ffff00;\r\n}\r\n\r\n\r\n/*4*/\r\n\r\n\r\n.leg69{\r\n  margin: 10px;\r\n  width: 20px;\r\n  height: 20px;\r\n  background-color:#00ff00;\r\n}\r\n\r\n\r\n/*5*/\r\n\r\n\r\n.leg70{\r\n  margin: 10px;\r\n  width: 20px;\r\n  height: 20px;\r\n  background-color:#ff00ff;\r\n}\r\n\r\n\r\n/*6*/\r\n\r\n\r\n.leg71{\r\n  margin: 10px;\r\n  width: 20px;\r\n  height: 20px;\r\n  background-color: #f4cccc;\r\n}\r\n\r\n\r\n/*7*/\r\n\r\n\r\n.leg72{\r\n  margin: 10px;\r\n  width: 20px;\r\n  height: 20px;\r\n  background-color:#444444;\r\n}\r\n\r\n\r\n/*8*/\r\n\r\n\r\n.leg73{\r\n  margin: 10px;\r\n  width: 20px;\r\n  height: 20px;\r\n  background-color:#ffe599;\r\n}\r\n\r\n\r\n/*9*/\r\n\r\n\r\n.leg74{\r\n  margin: 10px;\r\n  width: 20px;\r\n  height: 20px;\r\n  background-color:#b6d7a8;\r\n}\r\n\r\n\r\n/*10*/\r\n\r\n\r\n.leg75{\r\n  margin: 10px;\r\n  width: 20px;\r\n  height: 20px;\r\n  background-color:#b4a7d6;\r\n}\r\n\r\n\r\n/*11*/\r\n\r\n\r\n.leg76{\r\n  margin: 10px;\r\n  width: 20px;\r\n  height: 20px;\r\n  background-color: #d5a6bd;\r\n}\r\n\r\n\r\n/*12*/\r\n\r\n\r\n.leg77{\r\n  margin: 10px;\r\n  width: 20px;\r\n  height: 20px;\r\n  background-color:#e06666;\r\n}\r\n\r\n\r\n/*13*/\r\n\r\n\r\n.leg78{\r\n  margin: 10px;\r\n  width: 20px;\r\n  height: 20px;\r\n  background-color:#f6b26b;\r\n}\r\n\r\n\r\n/*14*/\r\n\r\n\r\n.leg79{\r\n  margin: 10px;\r\n  width: 20px;\r\n  height: 20px;\r\n  background-color:#ffd966;\r\n}\r\n\r\n\r\n/*15*/\r\n\r\n\r\n.leg80{\r\n  margin: 10px;\r\n  width: 20px;\r\n  height: 20px;\r\n  background-color:#6aa84f;\r\n}\r\n\r\n\r\n/*16*/\r\n\r\n\r\n.leg81{\r\n  margin: 10px;\r\n  width: 20px;\r\n  height: 20px;\r\n  background-color: #76a5af;;\r\n}\r\n\r\n\r\n/*17*/\r\n\r\n\r\n.leg82{\r\n  margin: 10px;\r\n  width: 20px;\r\n  height: 20px;\r\n  background-color:#a64d79;\r\n}\r\n\r\n\r\n/*18*/\r\n\r\n\r\n.leg83{\r\n  margin: 10px;\r\n  width: 20px;\r\n  height: 20px;\r\n  background-color:#990000;\r\n}\r\n\r\n\r\n/*19*/\r\n\r\n\r\n.leg84{\r\n  margin: 10px;\r\n  width: 20px;\r\n  height: 20px;\r\n  background-color:#b45706;\r\n}\r\n\r\n\r\n/*20*/\r\n\r\n\r\n/*\r\n.leg85{\r\n  margin: 10px;\r\n  width: 20px;\r\n  height: 20px;\r\n  background-color:#bf9000;\r\n}\r\n*/\r\n\r\n\r\n/*21*/\r\n\r\n\r\n.leg86{\r\n  margin: 10px;\r\n  width: 20px;\r\n  height: 20px;\r\n  background-color:#38761d;\r\n}\r\n\r\n\r\n/*22*/\r\n\r\n\r\n.leg87{\r\n  margin: 10px;\r\n  width: 20px;\r\n  height: 20px;\r\n  background-color:#351c75;\r\n}\r\n\r\n\r\n/*23*/\r\n\r\n\r\n.leg88{\r\n  margin: 10px;\r\n  width: 20px;\r\n  height: 20px;\r\n  background-color:#741b47;\r\n}\r\n\r\n\r\n/*24*/\r\n\r\n\r\n.leg89{\r\n  margin: 10px;\r\n  width: 20px;\r\n  height: 20px;\r\n  background-color:#660000;\r\n}\r\n\r\n\r\n/*25*/\r\n\r\n\r\n.leg90{\r\n  margin: 10px;\r\n  width: 20px;\r\n  height: 20px;\r\n  background-color:#8e7cc3;\r\n}\r\n\r\n\r\n/*26*/\r\n\r\n\r\n.leg91{\r\n  margin: 10px;\r\n  width: 20px;\r\n  height: 20px;\r\n  background-color:#783f04;\r\n}\r\n\r\n\r\n/*27*/\r\n\r\n\r\n.leg92{\r\n  margin: 10px;\r\n  width: 20px;\r\n  height: 20px;\r\n  background-color:#274e13;\r\n}\r\n\r\n\r\n/*28*/\r\n\r\n\r\n.leg93{\r\n  margin: 10px;\r\n  width: 20px;\r\n  height: 20px;\r\n  background-color:#4c1130;\r\n}\r\n\r\n\r\n/*29*/\r\n\r\n\r\n.leg94{\r\n  margin: 10px;\r\n  width: 20px;\r\n  height: 20px;\r\n  background-color:#666666;\r\n}\r\n\r\n\r\n/*30*/\r\n\r\n\r\n.leg95{\r\n  margin: 10px;\r\n  width: 20px;\r\n  height: 20px;\r\n  background-color:#cccccc;\r\n}\r\n"

/***/ }),

/***/ "./src/app/regiao/regiao.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"height: 10px;\">\r\n  <div class=\"menu-lateral\" *ngIf=\"regiao\">\r\n    <div class=\"\">\r\n      <div class=\"\">\r\n        <div class=\"\">\r\n          <br>\r\n          <br>\r\n          <div class=\"\" style=\"font-size: 12px;\">\r\n            <ul style=\"list-style-type: none; list-style-position:inside;\r\n            width: 35%; text-align: justify; \">\r\n              <hr>\r\n\r\n              <li *ngFor=\"let map of regiao.maps; let i = index\" (click)=\"showMap(map.link, map.titulo, map.Ltitulo, map.leg)\" style=\"cursor: pointer; margin-bottom: 1px; color: steelblue; margin: 10px;\"\r\n                class=\"list-class\">\r\n\r\n                {{ map.nome }}\r\n\r\n              </li>\r\n              <hr>\r\n\r\n            </ul>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <br>\r\n  </div>\r\n\r\n\r\n  <article class=\"conteudo\">\r\n\r\n    <div *ngIf=\"showConteudo\" class=\"box-conteudo\" style=\"max-width: 600px;\">\r\n\r\n      <div class=\"titulo\">\r\n        <h3>{{ regiao.regiao }}</h3>\r\n      </div>\r\n\r\n      <div class=\"box-texto\">\r\n        <p>\r\n\r\n        </p>\r\n      </div>\r\n\r\n    </div>\r\n\r\n\r\n    <div *ngIf=\"!showConteudo\" class=\"box-conteudo\" style=\"max-width: 700px;\">\r\n\r\n      <br>\r\n      <br>\r\n      <br>\r\n      <h5 style=\"position: relative; left: 100px;\"> {{ titulo }} </h5>\r\n\r\n\r\n      <iframe width=\"700\" height=\"500\" scrolling=\"no\" frameborder=\"no\" [src]=\" this.mapUrl | safe \"></iframe>\r\n\r\n\r\n    </div>\r\n\r\n\r\n    <div class=\"container col-4 legenda\" *ngIf=\"!showConteudo\" style=\"max-width: 298px;\">\r\n      <h5>Legenda </h5>\r\n      <div class=\"row\">\r\n        <article style=\"position: relative;top: 2px\" class=\"col-xs-3\">\r\n          <div *ngFor=\"let legenda of this.legendasP; let i = index\">\r\n\r\n            <div class=\"{{legenda.leg}}\"></div>\r\n          </div>\r\n        </article>\r\n\r\n        <article class=\"col-xs-3\">\r\n          <div *ngFor=\"let legenda of this.legendasP; let i = index\" style=\"margin: 7px; font-size: 15.9px\">\r\n            {{legenda.tit}}\r\n          </div>\r\n\r\n        </article>\r\n\r\n      </div>\r\n\r\n\r\n    </div>\r\n\r\n  </article>\r\n\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/regiao/regiao.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegiaoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__regiao_service__ = __webpack_require__("./src/app/regiao/regiao.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegiaoComponent = /** @class */ (function () {
    function RegiaoComponent(_RegioesService, _activatedRoute, _appComponent) {
        this._RegioesService = _RegioesService;
        this._activatedRoute = _activatedRoute;
        this._appComponent = _appComponent;
        this.showConteudo = true;
        this.regiao = null;
        this.mapUrl = null;
        this.titulo = null;
        this.Ltitulo = null;
        this.leg = null;
        // tslint:disable-next-line:member-ordering
        // tslint:disable-next-line:use-life-cycle-interface
        /*  ngOnChange() {
        
            console.log('this flagui ==>>', this._RegioesService.flagStatus);
        
          }*/
        // tslint:disable-next-line:member-ordering
        this.legenda = null;
        // tslint:disable-next-line:member-ordering
        this.legendasP = [];
    }
    RegiaoComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this._activatedRoute);
        this._activatedRoute.params.subscribe(function (data) {
            console.log('Router value => ', data);
            var routerId = Number(data.id);
            _this._get(routerId);
            // console.log('this status ===>>>', this.getStatus());
            // this.ngOnChange();
        });
    };
    RegiaoComponent.prototype.showMap = function (link, titulo, ltitulo, leg) {
        this.legendasP = [];
        this.showConteudo = false;
        this.titulo = titulo;
        this.mapUrl = link;
        this.Ltitulo = ltitulo;
        this.leg = leg;
        for (var i = 0; i < leg.length; i++) {
            this.legendasP.push({ leg: this.leg[i], tit: this.Ltitulo[i] });
        }
        console.log(this.legendasP);
    };
    RegiaoComponent.prototype._get = function (routerId) {
        this.regiao = this._RegioesService.getRegiao(routerId);
        if (this.regiao) {
            this.showConteudo = true;
        }
    };
    RegiaoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-regioes',
            template: __webpack_require__("./src/app/regiao/regiao.component.html"),
            styles: [__webpack_require__("./src/app/regiao/regiao.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__regiao_service__["a" /* RegiaoService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__regiao_service__["a" /* RegiaoService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]])
    ], RegiaoComponent);
    return RegiaoComponent;
}());

/*ng config -g cli.warnings.versionMismatch false*/


/***/ }),

/***/ "./src/app/regiao/regiao.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegiaoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mapas__ = __webpack_require__("./src/app/regiao/mapas.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// tslint:disable:eofline
// tslint:disable:max-line-length


var RegiaoService = /** @class */ (function () {
    function RegiaoService() {
        this.tipoMapa = [__WEBPACK_IMPORTED_MODULE_1__mapas__["d" /* mapasMortalidade */], __WEBPACK_IMPORTED_MODULE_1__mapas__["c" /* mapasDemografia */], __WEBPACK_IMPORTED_MODULE_1__mapas__["b" /* mapasAdministrativos */], __WEBPACK_IMPORTED_MODULE_1__mapas__["e" /* mapasSaudeAmbiental */], __WEBPACK_IMPORTED_MODULE_1__mapas__["f" /* mapasViolencia */]];
        this.descricao = __WEBPACK_IMPORTED_MODULE_1__mapas__["a" /* descricao */];
        this.flagStatus = false;
        this._regioes = [
            { id: 1,
                regiao: 'Demografia',
                desc: this.descricao[0],
                maps: this.tipoMapa[1],
            },
            { id: 2,
                regiao: 'Administrativos',
                desc: this.descricao[1],
                maps: this.tipoMapa[2],
            },
            { id: 3,
                regiao: 'Violência',
                desc: this.descricao[2],
                maps: this.tipoMapa[4],
            },
            { id: 4,
                regiao: 'Mortalidade',
                desc: this.descricao[3],
                maps: this.tipoMapa[0],
            },
            { id: 5,
                regiao: 'Saúde Ambiental',
                desc: this.descricao[4],
                maps: this.tipoMapa[3],
            }
        ];
        // tslint:disable-next-line:member-ordering
        // tslint:disable-next-line:no-shadowed-variable
        /* getStatusService(contraste) {
          if (contraste === 'contrast') {
            alert('contraste!');
            this.flagStatus = true;
     
          } else {
            alert('nao contraste');
            this.flagStatus = false;
          }
          console.log(this.flagStatus, '<==== contraste');
          return this.flagStatus;
     
        }*/
    }
    RegiaoService.prototype.ngOnChanges = function (changes) {
        // this._RegiaoComponent.flagui = this.getStatusService(contraste);
        //  console.log('on Change', this.getStatusService(contraste));
        throw new Error('Method not implemented.');
    };
    RegiaoService.prototype.getRegioes = function () { return this._regioes; };
    RegiaoService.prototype.getRegiao = function (regiaoId) {
        return this._regioes.find(function (regiao) { return regiaoId === regiao.id; });
    };
    RegiaoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], RegiaoService);
    return RegiaoService;
}());



/***/ }),

/***/ "./src/app/skip-import/skip-import.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/skip-import/skip-import.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<img src=\"{{ src }}\" height=\"100%\" width=\"100%\" style=\"position: relative;\"/>\r\n<div style=\"background-color: sienna; opacity: 0.5; width: 100%;height: 500px; position: relative; top :-500px;\">\r\n\r\n</div>\r\n<a class=\"btn btn-dark\" href=\"/projeto#myDiv\" role=\"button\" style=\"background-color: sienna; position: relative; top :-600px;left:50%\">Link</a>\r\n"

/***/ }),

/***/ "./src/app/skip-import/skip-import.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SkipImportComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SkipImportComponent = /** @class */ (function () {
    function SkipImportComponent() {
        this.src = '../../assets/images/ifrs-google-maps.PNG';
    }
    SkipImportComponent.prototype.ngOnInit = function () {
    };
    SkipImportComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-skip-import',
            template: __webpack_require__("./src/app/skip-import/skip-import.component.html"),
            styles: [__webpack_require__("./src/app/skip-import/skip-import.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SkipImportComponent);
    return SkipImportComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
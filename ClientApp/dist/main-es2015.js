(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<body>\r\n  <app-nav-menu></app-nav-menu>\r\n  <div class=\"container\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</body>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/counter/counter.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/counter/counter.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Counter</h1>\r\n\r\n<p>This is a simple example of an Angular component.</p>\r\n\r\n<p aria-live=\"polite\">Current count: <strong>{{ currentCount }}</strong></p>\r\n\r\n<button class=\"btn btn-primary\" (click)=\"incrementCounter()\">Increment</button>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/fetch-data/fetch-data.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/fetch-data/fetch-data.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 id=\"tableLabel\">Weather forecast</h1>\r\n\r\n<p>This component demonstrates fetching data from the server.</p>\r\n\r\n<p *ngIf=\"!forecasts\"><em>Loading...</em></p>\r\n\r\n<table class='table table-striped' aria-labelledby=\"tableLabel\" *ngIf=\"forecasts\">\r\n  <thead>\r\n    <tr>\r\n      <th>Date</th>\r\n      <th>Temp. (C)</th>\r\n      <th>Temp. (F)</th>\r\n      <th>Summary</th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr *ngFor=\"let forecast of forecasts\">\r\n      <td>{{ forecast.date }}</td>\r\n      <td>{{ forecast.temperatureC }}</td>\r\n      <td>{{ forecast.temperatureF }}</td>\r\n      <td>{{ forecast.summary }}</td>\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Hello, world!</h1>\r\n<p>Welcome to your new single-page application, built with:</p>\r\n<ul>\r\n  <li><a href='https://get.asp.net/'>ASP.NET Core</a> and <a href='https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx'>C#</a> for cross-platform server-side code</li>\r\n  <li><a href='https://angular.io/'>Angular</a> and <a href='http://www.typescriptlang.org/'>TypeScript</a> for client-side code</li>\r\n  <li><a href='http://getbootstrap.com/'>Bootstrap</a> for layout and styling</li>\r\n</ul>\r\n<p>To help you get started, we've also set up:</p>\r\n<ul>\r\n  <li><strong>Client-side navigation</strong>. For example, click <em>Counter</em> then <em>Back</em> to return here.</li>\r\n  <li><strong>Angular CLI integration</strong>. In development mode, there's no need to run <code>ng serve</code>. It runs in the background automatically, so your client-side resources are dynamically built on demand and the page refreshes when you modify any file.</li>\r\n  <li><strong>Efficient production builds</strong>. In production mode, development-time features are disabled, and your <code>dotnet publish</code> configuration automatically invokes <code>ng build</code> to produce minified, ahead-of-time compiled JavaScript files.</li>\r\n</ul>\r\n<p>The <code>ClientApp</code> subdirectory is a standard Angular CLI application. If you open a command prompt in that directory, you can run any <code>ng</code> command (e.g., <code>ng test</code>), or use <code>npm</code> to install extra packages into it.</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/nav-menu/nav-menu.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/nav-menu/nav-menu.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header>\r\n  <nav\r\n    class=\"navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3\"\r\n  >\r\n    <div class=\"container\">\r\n      <a class=\"navbar-brand\" [routerLink]=\"['/search-candidate']\">RecruitmentPortal</a>\r\n      <button\r\n        class=\"navbar-toggler\"\r\n        type=\"button\"\r\n        data-toggle=\"collapse\"\r\n        data-target=\".navbar-collapse\"\r\n        aria-label=\"Toggle navigation\"\r\n        [attr.aria-expanded]=\"isExpanded\"\r\n        (click)=\"toggle()\"\r\n      >\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n      </button>\r\n      <div\r\n        class=\"navbar-collapse collapse d-sm-inline-flex flex-sm-row-reverse\"\r\n        [ngClass]=\"{ show: isExpanded }\"\r\n      >\r\n          <ul class=\"navbar-nav flex-grow\">\r\n              <li class=\"nav-item\"\r\n                  [routerLinkActive]=\"['link-active']\"\r\n                  [routerLinkActiveOptions]=\"{ exact: true }\">\r\n                  <a class=\"nav-link text-dark\" [routerLink]=\"['/search-candidate']\">Search Candidate</a>\r\n              </li>\r\n              <li class=\"nav-item\" [routerLinkActive]=\"['link-active']\">\r\n                  <a class=\"nav-link text-dark\" [routerLink]=\"['/counter']\">Counter</a>\r\n              </li>\r\n              <li class=\"nav-item\" [routerLinkActive]=\"['link-active']\">\r\n                  <a class=\"nav-link text-dark\" [routerLink]=\"['/fetch-data']\">Fetch data</a>\r\n              </li>\r\n              <li class=\"nav-item\" [routerLinkActive]=\"['link-active']\">\r\n                  <a class=\"nav-link text-dark\" [routerLink]=\"['/']\">Home</a>\r\n              </li>\r\n          </ul>\r\n      </div>\r\n    </div>\r\n  </n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/search-candidate/search-candidate.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/search-candidate/search-candidate.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Israeli Mosad</h1>\r\n<p>Welcome to your search Candidate Portal</p>\r\n<div class=\"row\">\r\n    <div class=\"col-sm-4\">\r\n        <label>Technology</label>\r\n    </div>\r\n    <div class=\"col-sm-4\">\r\n        <input type=\"text\" class=\"form-control\" list=\"Techs\" [(ngModel)]=\"techName\" (change)=\"BindCandidate($event)\">\r\n    </div>\r\n    <div class=\"col-sm-4\">\r\n        <datalist id=\"Techs\">\r\n            <option class=\"form-control\" *ngFor=\"let c of TechnologiesList\" [value]=\"c.name\">{{c.name}}</option>\r\n        </datalist>\r\n    </div>\r\n    <div class=\"col-sm-4\">\r\n        <label>Experience</label>\r\n    </div>\r\n    <div class=\"col-sm-4\">\r\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"exp\" (change)=\"BindCandidate($event)\">\r\n    </div>\r\n</div>\r\n<div class=\"col-sm-12 \">\r\n    <div *ngFor=\"let candidate of CandidateList2; \">\r\n        <div class=\"col-sm-6 list-group\">\r\n            <div style=\"display:none\"> {{candidate.candidateId}}</div>\r\n            <h4 class=\"list-group-item\">{{candidate.fullName}}</h4>\r\n            <div class=\"list-group-item\"> <img src=\"{{candidate.profilePicture}}\" />\"</div>\r\n            <div class=\"list-group-item\"> {{candidate.email}}</div>\r\n            <div class=\"list-group-item\"> {{candidate.barcode}} </div>\r\n            <!--<div *ngFor=\"let exp of candidate.experience; \">\r\n        <div class=\"list-group-item\">{{exp.technologyId}}</div>\r\n        <div class=\"list-group-item\">{{exp.yearsOfExperience}}</div>\r\n    </div>-->\r\n            <div>\r\n                <button type=\"button\" (click)=\"delete(candidate.candidateId);\">Delete</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n");

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let AppComponent = class AppComponent {
    constructor() {
        this.title = 'app';
    }
};
AppComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-root',
        template: __importDefault(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nav-menu/nav-menu.component */ "./src/app/nav-menu/nav-menu.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _counter_counter_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./counter/counter.component */ "./src/app/counter/counter.component.ts");
/* harmony import */ var _fetch_data_fetch_data_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./fetch-data/fetch-data.component */ "./src/app/fetch-data/fetch-data.component.ts");
/* harmony import */ var _search_candidate_search_candidate_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./search-candidate/search-candidate.component */ "./src/app/search-candidate/search-candidate.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};











let AppModule = class AppModule {
};
AppModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_6__["NavMenuComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
            _counter_counter_component__WEBPACK_IMPORTED_MODULE_8__["CounterComponent"],
            _fetch_data_fetch_data_component__WEBPACK_IMPORTED_MODULE_9__["FetchDataComponent"],
            _search_candidate_search_candidate_component__WEBPACK_IMPORTED_MODULE_10__["SearchCandidateComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"].withServerTransition({ appId: 'ng-cli-universal' }),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot([
                { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"], pathMatch: 'full' },
                { path: 'counter', component: _counter_counter_component__WEBPACK_IMPORTED_MODULE_8__["CounterComponent"] },
                { path: 'fetch-data', component: _fetch_data_fetch_data_component__WEBPACK_IMPORTED_MODULE_9__["FetchDataComponent"] },
                { path: 'search-candidate', component: _search_candidate_search_candidate_component__WEBPACK_IMPORTED_MODULE_10__["SearchCandidateComponent"] },
            ])
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/asset/candidatedata.json":
/*!******************************************!*\
  !*** ./src/app/asset/candidatedata.json ***!
  \******************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"candidateId\":\"4bab0644-60b5-48f5-8eed-1ebde29429f9\",\"fullName\":\"Juan Lockman\",\"firstName\":\"Juan\",\"lastName\":\"Lockman\",\"gender\":0,\"profilePicture\":\"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/634.jpg\",\"email\":\"Juan_Lockman@yahoo.com\",\"favoriteMusicGenre\":\"Rap\",\"dad\":\"Kim McCullough\",\"mom\":\"Jeanne Wuckert\",\"canSwim\":true,\"barcode\":\"4982818924951\",\"experience\":[{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA13\",\"yearsOfExperience\":1},{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA16\",\"yearsOfExperience\":10},{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA17\",\"yearsOfExperience\":1},{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA06\",\"yearsOfExperience\":4}]},{\"candidateId\":\"cfe4de49-6ce7-4a7d-bf0d-e05f4c701710\",\"fullName\":\"Leland Mosciski\",\"firstName\":\"Leland\",\"lastName\":\"Mosciski\",\"gender\":0,\"profilePicture\":\"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/536.jpg\",\"email\":\"Leland_Mosciski@hotmail.com\",\"favoriteMusicGenre\":\"Funk\",\"dad\":\"Jeffery Baumbach\",\"mom\":\"Lorraine Lind\",\"canSwim\":true,\"barcode\":\"7712623006507\",\"experience\":[{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA18\",\"yearsOfExperience\":7},{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA07\",\"yearsOfExperience\":5}]},{\"candidateId\":\"83da95aa-79dd-4e92-9708-7dd61e7d3f08\",\"fullName\":\"Geoffrey Jacobs\",\"firstName\":\"Geoffrey\",\"lastName\":\"Jacobs\",\"gender\":0,\"profilePicture\":\"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1014.jpg\",\"email\":\"Geoffrey23@gmail.com\",\"favoriteMusicGenre\":\"Stage And Screen\",\"dad\":\"Paul Kirlin\",\"mom\":\"Sarah Rowe\",\"canSwim\":false,\"barcode\":\"9745836718835\",\"experience\":[{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA06\",\"yearsOfExperience\":1}]},{\"candidateId\":\"8e226c35-57ce-41c2-83fb-b0ea4f8846c6\",\"fullName\":\"Leon Koelpin\",\"firstName\":\"Leon\",\"lastName\":\"Koelpin\",\"gender\":0,\"profilePicture\":\"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/230.jpg\",\"email\":\"Leon.Koelpin49@gmail.com\",\"favoriteMusicGenre\":\"Classical\",\"dad\":\"Dwayne Willms\",\"mom\":\"Felicia Jerde\",\"canSwim\":true,\"barcode\":\"6435178580360\",\"experience\":[{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA04\",\"yearsOfExperience\":10},{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA12\",\"yearsOfExperience\":5},{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA07\",\"yearsOfExperience\":1}]},{\"candidateId\":\"da960adf-0799-4861-a3bd-a13957041fe0\",\"fullName\":\"Derrick Reilly\",\"firstName\":\"Derrick\",\"lastName\":\"Reilly\",\"gender\":0,\"profilePicture\":\"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/376.jpg\",\"email\":\"Derrick1@hotmail.com\",\"favoriteMusicGenre\":\"Soul\",\"dad\":\"James Koch\",\"mom\":\"Ethel Schultz\",\"canSwim\":false,\"barcode\":\"6343579328446\",\"experience\":[{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA14\",\"yearsOfExperience\":3},{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA09\",\"yearsOfExperience\":6},{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA05\",\"yearsOfExperience\":2},{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA07\",\"yearsOfExperience\":5}]},{\"candidateId\":\"cd80e71f-3dfd-4f2d-8458-6cce5bee972a\",\"fullName\":\"Pamela Walter\",\"firstName\":\"Pamela\",\"lastName\":\"Walter\",\"gender\":1,\"profilePicture\":\"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/230.jpg\",\"email\":\"Pamela.Walter@yahoo.com\",\"favoriteMusicGenre\":\"Folk\",\"dad\":\"Rogelio Miller\",\"mom\":\"Sonia Reynolds\",\"canSwim\":true,\"barcode\":\"9255962694281\",\"experience\":[{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA12\",\"yearsOfExperience\":8},{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA06\",\"yearsOfExperience\":7},{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA15\",\"yearsOfExperience\":9},{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA07\",\"yearsOfExperience\":4}]},{\"candidateId\":\"2db4b4f7-e769-4726-9e00-f2c5b9c8f167\",\"fullName\":\"Debbie Little\",\"firstName\":\"Debbie\",\"lastName\":\"Little\",\"gender\":1,\"profilePicture\":\"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/177.jpg\",\"email\":\"Debbie_Little@gmail.com\",\"favoriteMusicGenre\":\"Pop\",\"dad\":\"Bob Schmitt\",\"mom\":\"Maggie Conroy\",\"canSwim\":true,\"barcode\":\"6079149885629\",\"experience\":[{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA17\",\"yearsOfExperience\":4},{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA04\",\"yearsOfExperience\":9}]},{\"candidateId\":\"5eb1a9f9-39f4-491d-a44d-26b7ff0cd54a\",\"fullName\":\"John Hermiston\",\"firstName\":\"John\",\"lastName\":\"Hermiston\",\"gender\":0,\"profilePicture\":\"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/145.jpg\",\"email\":\"John.Hermiston45@gmail.com\",\"favoriteMusicGenre\":\"Non Music\",\"dad\":\"Cody Gislason\",\"mom\":\"Ethel Harvey\",\"canSwim\":true,\"barcode\":\"7068646642506\",\"experience\":[{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA18\",\"yearsOfExperience\":9},{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA13\",\"yearsOfExperience\":6},{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA12\",\"yearsOfExperience\":2}]},{\"candidateId\":\"a22b8070-55f3-4e93-b781-2bd5d0f00294\",\"fullName\":\"Ashley Legros\",\"firstName\":\"Ashley\",\"lastName\":\"Legros\",\"gender\":1,\"profilePicture\":\"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/558.jpg\",\"email\":\"Ashley.Legros@gmail.com\",\"favoriteMusicGenre\":\"Reggae\",\"dad\":\"Johnny O'Kon\",\"mom\":\"Patsy DuBuque\",\"canSwim\":true,\"barcode\":\"5281896614518\",\"experience\":[{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA05\",\"yearsOfExperience\":3},{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA05\",\"yearsOfExperience\":6},{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA08\",\"yearsOfExperience\":7}]},{\"candidateId\":\"006d10b8-9048-4f8f-af0d-b71caf89221c\",\"fullName\":\"Melanie Kuhic\",\"firstName\":\"Melanie\",\"lastName\":\"Kuhic\",\"gender\":1,\"profilePicture\":\"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/262.jpg\",\"email\":\"Melanie.Kuhic@gmail.com\",\"favoriteMusicGenre\":\"World\",\"dad\":\"Phillip Jacobs\",\"mom\":\"Sandy O'Connell\",\"canSwim\":true,\"barcode\":\"5244067684574\",\"experience\":[{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA09\",\"yearsOfExperience\":8},{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA11\",\"yearsOfExperience\":8},{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA14\",\"yearsOfExperience\":10},{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA18\",\"yearsOfExperience\":6}]},{\"candidateId\":\"4e869f11-321c-4168-9689-e4f4507a930a\",\"fullName\":\"May Bradtke\",\"firstName\":\"May\",\"lastName\":\"Bradtke\",\"gender\":1,\"profilePicture\":\"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/62.jpg\",\"email\":\"May_Bradtke@yahoo.com\",\"favoriteMusicGenre\":\"Classical\",\"dad\":\"Mark Anderson\",\"mom\":\"Sharon Ziemann\",\"canSwim\":true,\"barcode\":\"5368095098940\",\"experience\":[{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA08\",\"yearsOfExperience\":7},{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA17\",\"yearsOfExperience\":9}]},{\"candidateId\":\"6faddeaa-1a77-4ff1-bb94-b9b1feced08c\",\"fullName\":\"Sheila Kuhic\",\"firstName\":\"Sheila\",\"lastName\":\"Kuhic\",\"gender\":1,\"profilePicture\":\"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/900.jpg\",\"email\":\"Sheila32@hotmail.com\",\"favoriteMusicGenre\":\"Country\",\"dad\":\"Mike Zieme\",\"mom\":\"Jessie Christiansen\",\"canSwim\":false,\"barcode\":\"4576837859358\",\"experience\":[{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA04\",\"yearsOfExperience\":2},{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA12\",\"yearsOfExperience\":4},{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA07\",\"yearsOfExperience\":9},{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA16\",\"yearsOfExperience\":2}]},{\"candidateId\":\"6c241606-e46b-4d91-b07a-c697a505c55d\",\"fullName\":\"Angelica Leffler\",\"firstName\":\"Angelica\",\"lastName\":\"Leffler\",\"gender\":1,\"profilePicture\":\"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/721.jpg\",\"email\":\"Angelica36@hotmail.com\",\"favoriteMusicGenre\":\"Funk\",\"dad\":\"Jorge Armstrong\",\"mom\":\"Hattie Schmidt\",\"canSwim\":true,\"barcode\":\"4375420042111\",\"experience\":[{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA08\",\"yearsOfExperience\":2},{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA17\",\"yearsOfExperience\":1},{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA18\",\"yearsOfExperience\":4},{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA07\",\"yearsOfExperience\":7}]},{\"candidateId\":\"3c9c441f-2af8-418e-ae1d-cfb3f5d2bc0e\",\"fullName\":\"Garrett Dare\",\"firstName\":\"Garrett\",\"lastName\":\"Dare\",\"gender\":0,\"profilePicture\":\"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/122.jpg\",\"email\":\"Garrett.Dare@gmail.com\",\"favoriteMusicGenre\":\"Country\",\"dad\":\"William Lakin\",\"mom\":\"Dixie Dietrich\",\"canSwim\":false,\"barcode\":\"6877767155434\",\"experience\":[{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA16\",\"yearsOfExperience\":3},{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA14\",\"yearsOfExperience\":6},{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA18\",\"yearsOfExperience\":1},{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA17\",\"yearsOfExperience\":6}]},{\"candidateId\":\"43f8289d-12f3-4187-853f-e10b8e4b6e6a\",\"fullName\":\"Kristina Morar\",\"firstName\":\"Kristina\",\"lastName\":\"Morar\",\"gender\":1,\"profilePicture\":\"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/619.jpg\",\"email\":\"Kristina_Morar65@yahoo.com\",\"favoriteMusicGenre\":\"Funk\",\"dad\":\"Kerry Glover\",\"mom\":\"Cynthia Buckridge\",\"canSwim\":false,\"barcode\":\"2031745827728\",\"experience\":[{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA06\",\"yearsOfExperience\":7},{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA10\",\"yearsOfExperience\":3},{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA19\",\"yearsOfExperience\":7}]},{\"candidateId\":\"95f4736b-acab-40aa-a090-17b6155f73a0\",\"fullName\":\"Kerry Gislason\",\"firstName\":\"Kerry\",\"lastName\":\"Gislason\",\"gender\":0,\"profilePicture\":\"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/186.jpg\",\"email\":\"Kerry_Gislason@gmail.com\",\"favoriteMusicGenre\":\"Rock\",\"dad\":\"Javier Graham\",\"mom\":\"Georgia Connelly\",\"canSwim\":false,\"barcode\":\"5196273300383\",\"experience\":[{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA05\",\"yearsOfExperience\":3},{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA12\",\"yearsOfExperience\":10},{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA04\",\"yearsOfExperience\":8},{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA05\",\"yearsOfExperience\":1}]},{\"candidateId\":\"7ab23534-78fc-4248-9f54-07669f36abaf\",\"fullName\":\"Moses Aufderhar\",\"firstName\":\"Moses\",\"lastName\":\"Aufderhar\",\"gender\":0,\"profilePicture\":\"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1136.jpg\",\"email\":\"Moses_Aufderhar42@gmail.com\",\"favoriteMusicGenre\":\"Metal\",\"dad\":\"Cody Barrows\",\"mom\":\"Lynne Rutherford\",\"canSwim\":false,\"barcode\":\"5201563069342\",\"experience\":[{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA12\",\"yearsOfExperience\":6},{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA12\",\"yearsOfExperience\":1}]},{\"candidateId\":\"eda80602-6805-4418-bad9-8256192763ca\",\"fullName\":\"Andrea Pollich\",\"firstName\":\"Andrea\",\"lastName\":\"Pollich\",\"gender\":1,\"profilePicture\":\"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/476.jpg\",\"email\":\"Andrea_Pollich19@gmail.com\",\"favoriteMusicGenre\":\"Metal\",\"dad\":\"Darin Graham\",\"mom\":\"Dana Volkman\",\"canSwim\":false,\"barcode\":\"3737288246024\",\"experience\":[{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA13\",\"yearsOfExperience\":6}]},{\"candidateId\":\"c68b3a87-fd1f-4cc6-8f0c-7a767121d510\",\"fullName\":\"Gabriel Swaniawski\",\"firstName\":\"Gabriel\",\"lastName\":\"Swaniawski\",\"gender\":0,\"profilePicture\":\"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/709.jpg\",\"email\":\"Gabriel33@yahoo.com\",\"favoriteMusicGenre\":\"Country\",\"dad\":\"Barry Hills\",\"mom\":\"Bernice Hauck\",\"canSwim\":false,\"barcode\":\"4341339797268\",\"experience\":[{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA11\",\"yearsOfExperience\":8}]},{\"candidateId\":\"7c44d534-2d5c-4042-bb15-484aa661ff39\",\"fullName\":\"Clifford Torp\",\"firstName\":\"Clifford\",\"lastName\":\"Torp\",\"gender\":0,\"profilePicture\":\"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1056.jpg\",\"email\":\"Clifford_Torp@gmail.com\",\"favoriteMusicGenre\":\"Non Music\",\"dad\":\"Donnie Kunze\",\"mom\":\"Sarah Hilpert\",\"canSwim\":true,\"barcode\":\"4030598129971\",\"experience\":[{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA17\",\"yearsOfExperience\":5},{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA14\",\"yearsOfExperience\":7},{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA19\",\"yearsOfExperience\":5}]},{\"candidateId\":\"27b4eb32-26d0-4951-a096-6fd113c18175\",\"fullName\":\"Sheryl Gusikowski\",\"firstName\":\"Sheryl\",\"lastName\":\"Gusikowski\",\"gender\":1,\"profilePicture\":\"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/57.jpg\",\"email\":\"Sheryl.Gusikowski@yahoo.com\",\"favoriteMusicGenre\":\"Country\",\"dad\":\"Ramon Satterfield\",\"mom\":\"Lynne Jaskolski\",\"canSwim\":false,\"barcode\":\"8939421365837\",\"experience\":[{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA06\",\"yearsOfExperience\":5},{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA16\",\"yearsOfExperience\":3},{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA08\",\"yearsOfExperience\":5},{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA10\",\"yearsOfExperience\":2}]},{\"candidateId\":\"9717f39a-0311-495a-b064-6e1c40db9138\",\"fullName\":\"Vicki Bruen\",\"firstName\":\"Vicki\",\"lastName\":\"Bruen\",\"gender\":1,\"profilePicture\":\"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1212.jpg\",\"email\":\"Vicki.Bruen@hotmail.com\",\"favoriteMusicGenre\":\"Hip Hop\",\"dad\":\"Woodrow Crist\",\"mom\":\"Melissa Ratke\",\"canSwim\":true,\"barcode\":\"8654238190464\",\"experience\":[{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA08\",\"yearsOfExperience\":8},{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA12\",\"yearsOfExperience\":5}]},{\"candidateId\":\"69c7b43f-5a67-4c78-9dd7-9e732a704ac6\",\"fullName\":\"Tommie Heidenreich\",\"firstName\":\"Tommie\",\"lastName\":\"Heidenreich\",\"gender\":0,\"profilePicture\":\"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/684.jpg\",\"email\":\"Tommie.Heidenreich@hotmail.com\",\"favoriteMusicGenre\":\"Rap\",\"dad\":\"Ervin Rippin\",\"mom\":\"Nellie Parisian\",\"canSwim\":false,\"barcode\":\"8027283800600\",\"experience\":[{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA10\",\"yearsOfExperience\":7},{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA08\",\"yearsOfExperience\":5},{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA08\",\"yearsOfExperience\":5},{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA04\",\"yearsOfExperience\":6}]},{\"candidateId\":\"d5c172af-4932-4a49-9bde-e5d7bc7eaf52\",\"fullName\":\"Lynette Schowalter\",\"firstName\":\"Lynette\",\"lastName\":\"Schowalter\",\"gender\":1,\"profilePicture\":\"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/803.jpg\",\"email\":\"Lynette29@hotmail.com\",\"favoriteMusicGenre\":\"Funk\",\"dad\":\"Randal Huels\",\"mom\":\"Erma Osinski\",\"canSwim\":true,\"barcode\":\"1447092618741\",\"experience\":[{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA06\",\"yearsOfExperience\":6}]},{\"candidateId\":\"1b54ff41-bb26-464b-bf50-b1d79937b52e\",\"fullName\":\"Ruth Jaskolski\",\"firstName\":\"Ruth\",\"lastName\":\"Jaskolski\",\"gender\":1,\"profilePicture\":\"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/481.jpg\",\"email\":\"Ruth30@hotmail.com\",\"favoriteMusicGenre\":\"Pop\",\"dad\":\"Gabriel Ortiz\",\"mom\":\"Vicki Casper\",\"canSwim\":true,\"barcode\":\"3246652187257\",\"experience\":[{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA18\",\"yearsOfExperience\":5},{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA04\",\"yearsOfExperience\":1},{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA06\",\"yearsOfExperience\":8},{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA19\",\"yearsOfExperience\":8}]},{\"candidateId\":\"adf86181-28fc-4178-b102-8977d51fc6eb\",\"fullName\":\"Jeannette Gislason\",\"firstName\":\"Jeannette\",\"lastName\":\"Gislason\",\"gender\":1,\"profilePicture\":\"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/709.jpg\",\"email\":\"Jeannette_Gislason@hotmail.com\",\"favoriteMusicGenre\":\"World\",\"dad\":\"Perry Gutmann\",\"mom\":\"Kathleen Mitchell\",\"canSwim\":true,\"barcode\":\"3840859383186\",\"experience\":[{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA06\",\"yearsOfExperience\":9},{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA06\",\"yearsOfExperience\":4},{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA19\",\"yearsOfExperience\":7},{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA15\",\"yearsOfExperience\":3}]},{\"candidateId\":\"2dc8a178-58ae-4454-8971-6fc985483a9f\",\"fullName\":\"Cassandra Corwin\",\"firstName\":\"Cassandra\",\"lastName\":\"Corwin\",\"gender\":1,\"profilePicture\":\"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/117.jpg\",\"email\":\"Cassandra42@hotmail.com\",\"favoriteMusicGenre\":\"Blues\",\"dad\":\"Grant Doyle\",\"mom\":\"Patty Breitenberg\",\"canSwim\":false,\"barcode\":\"5650320393167\",\"experience\":[{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA07\",\"yearsOfExperience\":10},{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA07\",\"yearsOfExperience\":8},{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA14\",\"yearsOfExperience\":10},{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA13\",\"yearsOfExperience\":10}]},{\"candidateId\":\"975f8c83-732a-4b76-b54f-9eaa4c8a5fdf\",\"fullName\":\"Bertha Gutkowski\",\"firstName\":\"Bertha\",\"lastName\":\"Gutkowski\",\"gender\":1,\"profilePicture\":\"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1221.jpg\",\"email\":\"Bertha.Gutkowski@hotmail.com\",\"favoriteMusicGenre\":\"Soul\",\"dad\":\"Darryl Osinski\",\"mom\":\"Janice Ernser\",\"canSwim\":true,\"barcode\":\"6253636961045\",\"experience\":[{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA18\",\"yearsOfExperience\":5}]},{\"candidateId\":\"b009429d-4537-4749-a784-15af77c60660\",\"fullName\":\"Mary Krajcik\",\"firstName\":\"Mary\",\"lastName\":\"Krajcik\",\"gender\":1,\"profilePicture\":\"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/955.jpg\",\"email\":\"Mary_Krajcik@yahoo.com\",\"favoriteMusicGenre\":\"World\",\"dad\":\"Clinton VonRueden\",\"mom\":\"Shannon Balistreri\",\"canSwim\":false,\"barcode\":\"7716046764952\",\"experience\":[{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA19\",\"yearsOfExperience\":3},{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA06\",\"yearsOfExperience\":3},{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA13\",\"yearsOfExperience\":7},{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA10\",\"yearsOfExperience\":1}]},{\"candidateId\":\"c22ff89c-7375-4d0d-90f8-81f1a6947016\",\"fullName\":\"Rose Rogahn\",\"firstName\":\"Rose\",\"lastName\":\"Rogahn\",\"gender\":1,\"profilePicture\":\"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/874.jpg\",\"email\":\"Rose_Rogahn91@gmail.com\",\"favoriteMusicGenre\":\"Country\",\"dad\":\"Jessie Bogan\",\"mom\":\"Valerie Cummerata\",\"canSwim\":true,\"barcode\":\"8933736054264\",\"experience\":[{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA10\",\"yearsOfExperience\":2},{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA19\",\"yearsOfExperience\":5},{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA16\",\"yearsOfExperience\":6}]},{\"candidateId\":\"a3144c07-14cc-41e2-8a20-68f2f210039b\",\"fullName\":\"Lynette O'Keefe\",\"firstName\":\"Lynette\",\"lastName\":\"O'Keefe\",\"gender\":1,\"profilePicture\":\"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/541.jpg\",\"email\":\"Lynette_OKeefe66@hotmail.com\",\"favoriteMusicGenre\":\"Blues\",\"dad\":\"Sammy Berge\",\"mom\":\"Pauline Casper\",\"canSwim\":false,\"barcode\":\"7428190385241\",\"experience\":[{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA04\",\"yearsOfExperience\":6},{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA16\",\"yearsOfExperience\":4}]},{\"candidateId\":\"94ed3967-366c-43af-b3ab-e73d9ad9f35a\",\"fullName\":\"Ana Willms\",\"firstName\":\"Ana\",\"lastName\":\"Willms\",\"gender\":1,\"profilePicture\":\"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/706.jpg\",\"email\":\"Ana52@gmail.com\",\"favoriteMusicGenre\":\"Jazz\",\"dad\":\"Gerard Stark\",\"mom\":\"Agnes Upton\",\"canSwim\":false,\"barcode\":\"4617899028419\",\"experience\":[{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA05\",\"yearsOfExperience\":2},{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA11\",\"yearsOfExperience\":6},{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA16\",\"yearsOfExperience\":2},{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA04\",\"yearsOfExperience\":10}]},{\"candidateId\":\"51689911-27b2-41f1-8b0e-a27e05dc01bd\",\"fullName\":\"Jamie Brakus\",\"firstName\":\"Jamie\",\"lastName\":\"Brakus\",\"gender\":0,\"profilePicture\":\"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/376.jpg\",\"email\":\"Jamie69@yahoo.com\",\"favoriteMusicGenre\":\"Funk\",\"dad\":\"Cory Labadie\",\"mom\":\"Marianne Becker\",\"canSwim\":true,\"barcode\":\"0626158255545\",\"experience\":[{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA04\",\"yearsOfExperience\":4},{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA19\",\"yearsOfExperience\":9}]},{\"candidateId\":\"403203c2-e029-40d7-829a-1823683b9c44\",\"fullName\":\"Hugh Schmeler\",\"firstName\":\"Hugh\",\"lastName\":\"Schmeler\",\"gender\":0,\"profilePicture\":\"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1087.jpg\",\"email\":\"Hugh6@gmail.com\",\"favoriteMusicGenre\":\"Funk\",\"dad\":\"Norman Oberbrunner\",\"mom\":\"Vanessa Rodriguez\",\"canSwim\":false,\"barcode\":\"7968051965163\",\"experience\":[{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA19\",\"yearsOfExperience\":6},{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA18\",\"yearsOfExperience\":2},{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA07\",\"yearsOfExperience\":4}]},{\"candidateId\":\"59960962-79c1-4914-ac3e-446ac4f6954e\",\"fullName\":\"Christie Weissnat\",\"firstName\":\"Christie\",\"lastName\":\"Weissnat\",\"gender\":1,\"profilePicture\":\"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1187.jpg\",\"email\":\"Christie91@hotmail.com\",\"favoriteMusicGenre\":\"Jazz\",\"dad\":\"Bennie Schiller\",\"mom\":\"Edith Corkery\",\"canSwim\":false,\"barcode\":\"6076740779494\",\"experience\":[{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA07\",\"yearsOfExperience\":5},{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA07\",\"yearsOfExperience\":6},{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA13\",\"yearsOfExperience\":3}]},{\"candidateId\":\"49e01501-c19b-4098-8637-4bed2bc522ce\",\"fullName\":\"Gretchen Considine\",\"firstName\":\"Gretchen\",\"lastName\":\"Considine\",\"gender\":1,\"profilePicture\":\"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/801.jpg\",\"email\":\"Gretchen95@hotmail.com\",\"favoriteMusicGenre\":\"Latin\",\"dad\":\"Randal Rowe\",\"mom\":\"Diane Corwin\",\"canSwim\":false,\"barcode\":\"8506291715781\",\"experience\":[{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA04\",\"yearsOfExperience\":1},{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA19\",\"yearsOfExperience\":5}]},{\"candidateId\":\"b716f7e7-df00-42eb-a710-f35fc8edeebe\",\"fullName\":\"Rudy MacGyver\",\"firstName\":\"Rudy\",\"lastName\":\"MacGyver\",\"gender\":0,\"profilePicture\":\"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/656.jpg\",\"email\":\"Rudy.MacGyver44@gmail.com\",\"favoriteMusicGenre\":\"Blues\",\"dad\":\"Ed White\",\"mom\":\"Claire Schamberger\",\"canSwim\":false,\"barcode\":\"8251028054441\",\"experience\":[{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA10\",\"yearsOfExperience\":8},{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA09\",\"yearsOfExperience\":10}]},{\"candidateId\":\"aa2b9a29-35da-413d-8ce9-49719400bddb\",\"fullName\":\"Sonya Ortiz\",\"firstName\":\"Sonya\",\"lastName\":\"Ortiz\",\"gender\":1,\"profilePicture\":\"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1228.jpg\",\"email\":\"Sonya39@gmail.com\",\"favoriteMusicGenre\":\"Hip Hop\",\"dad\":\"Ernest Hansen\",\"mom\":\"Brooke Lehner\",\"canSwim\":true,\"barcode\":\"3019969907517\",\"experience\":[{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA06\",\"yearsOfExperience\":1}]},{\"candidateId\":\"5ee1e726-fce4-4f3f-941d-20a89fdf35ff\",\"fullName\":\"Gertrude Blanda\",\"firstName\":\"Gertrude\",\"lastName\":\"Blanda\",\"gender\":1,\"profilePicture\":\"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/837.jpg\",\"email\":\"Gertrude_Blanda@yahoo.com\",\"favoriteMusicGenre\":\"Metal\",\"dad\":\"Perry Barton\",\"mom\":\"Eva O'Kon\",\"canSwim\":true,\"barcode\":\"5267720424416\",\"experience\":[{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA04\",\"yearsOfExperience\":9},{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA18\",\"yearsOfExperience\":2}]},{\"candidateId\":\"029bf20b-900d-4f4f-bcce-b5616bb4827b\",\"fullName\":\"Christine Beier\",\"firstName\":\"Christine\",\"lastName\":\"Beier\",\"gender\":1,\"profilePicture\":\"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/415.jpg\",\"email\":\"Christine.Beier@hotmail.com\",\"favoriteMusicGenre\":\"Soul\",\"dad\":\"Brad Welch\",\"mom\":\"Rosalie Ratke\",\"canSwim\":false,\"barcode\":\"2368470849061\",\"experience\":[{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA19\",\"yearsOfExperience\":7},{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA12\",\"yearsOfExperience\":2},{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA13\",\"yearsOfExperience\":2}]},{\"candidateId\":\"6847c8c4-3746-4ddf-b60c-5abdae4d1fed\",\"fullName\":\"Bobby Schroeder\",\"firstName\":\"Bobby\",\"lastName\":\"Schroeder\",\"gender\":0,\"profilePicture\":\"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/608.jpg\",\"email\":\"Bobby_Schroeder88@hotmail.com\",\"favoriteMusicGenre\":\"Folk\",\"dad\":\"Nelson Mosciski\",\"mom\":\"Robin Von\",\"canSwim\":false,\"barcode\":\"2115560824190\",\"experience\":[{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA05\",\"yearsOfExperience\":5},{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA17\",\"yearsOfExperience\":10},{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA14\",\"yearsOfExperience\":1}]},{\"candidateId\":\"b80dd403-b524-451b-ae65-ff33ad9d54e8\",\"fullName\":\"Wilson Rolfson\",\"firstName\":\"Wilson\",\"lastName\":\"Rolfson\",\"gender\":0,\"profilePicture\":\"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/547.jpg\",\"email\":\"Wilson.Rolfson@hotmail.com\",\"favoriteMusicGenre\":\"Hip Hop\",\"dad\":\"Matt Larkin\",\"mom\":\"Leigh Schuppe\",\"canSwim\":true,\"barcode\":\"4137406903935\",\"experience\":[{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA19\",\"yearsOfExperience\":1},{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA15\",\"yearsOfExperience\":5}]},{\"candidateId\":\"688aa9e4-2eba-4c06-85d5-2b41b4192712\",\"fullName\":\"Travis Greenfelder\",\"firstName\":\"Travis\",\"lastName\":\"Greenfelder\",\"gender\":0,\"profilePicture\":\"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/503.jpg\",\"email\":\"Travis_Greenfelder74@gmail.com\",\"favoriteMusicGenre\":\"Folk\",\"dad\":\"Thomas Davis\",\"mom\":\"Henrietta Koss\",\"canSwim\":true,\"barcode\":\"5975576399122\",\"experience\":[{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA17\",\"yearsOfExperience\":1},{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA12\",\"yearsOfExperience\":7}]},{\"candidateId\":\"b7e664f8-0be2-4b3a-9b62-8aab59cbf5c8\",\"fullName\":\"Kerry Huel\",\"firstName\":\"Kerry\",\"lastName\":\"Huel\",\"gender\":1,\"profilePicture\":\"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/536.jpg\",\"email\":\"Kerry3@yahoo.com\",\"favoriteMusicGenre\":\"Electronic\",\"dad\":\"Jason Fisher\",\"mom\":\"Eileen Schiller\",\"canSwim\":true,\"barcode\":\"1982346449806\",\"experience\":[{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA08\",\"yearsOfExperience\":4},{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA04\",\"yearsOfExperience\":3}]},{\"candidateId\":\"babfd67e-3757-4888-868a-5d20752bc93e\",\"fullName\":\"Olivia Rath\",\"firstName\":\"Olivia\",\"lastName\":\"Rath\",\"gender\":1,\"profilePicture\":\"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/320.jpg\",\"email\":\"Olivia78@yahoo.com\",\"favoriteMusicGenre\":\"Hip Hop\",\"dad\":\"Omar Heller\",\"mom\":\"Ruby Pagac\",\"canSwim\":true,\"barcode\":\"9518813255919\",\"experience\":[{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA19\",\"yearsOfExperience\":6},{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA10\",\"yearsOfExperience\":2}]},{\"candidateId\":\"76861e70-b5f7-47a9-8797-c82ef9a7065b\",\"fullName\":\"Kelli Considine\",\"firstName\":\"Kelli\",\"lastName\":\"Considine\",\"gender\":1,\"profilePicture\":\"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/221.jpg\",\"email\":\"Kelli_Considine@gmail.com\",\"favoriteMusicGenre\":\"Blues\",\"dad\":\"Patrick Parisian\",\"mom\":\"Sonya Stoltenberg\",\"canSwim\":true,\"barcode\":\"8913938441604\",\"experience\":[{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA06\",\"yearsOfExperience\":9}]},{\"candidateId\":\"6239a01a-fd19-4e62-8138-30a93320a533\",\"fullName\":\"James Cole\",\"firstName\":\"James\",\"lastName\":\"Cole\",\"gender\":0,\"profilePicture\":\"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/338.jpg\",\"email\":\"James75@gmail.com\",\"favoriteMusicGenre\":\"Rap\",\"dad\":\"Darrel Ernser\",\"mom\":\"Gladys Abernathy\",\"canSwim\":false,\"barcode\":\"9123547901027\",\"experience\":[{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA14\",\"yearsOfExperience\":5},{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA12\",\"yearsOfExperience\":6},{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA06\",\"yearsOfExperience\":10}]},{\"candidateId\":\"42d61a71-0baa-48a2-8b79-ebd1fe199a27\",\"fullName\":\"Marco Runte\",\"firstName\":\"Marco\",\"lastName\":\"Runte\",\"gender\":0,\"profilePicture\":\"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/844.jpg\",\"email\":\"Marco.Runte8@hotmail.com\",\"favoriteMusicGenre\":\"Metal\",\"dad\":\"Calvin Baumbach\",\"mom\":\"Winifred Walker\",\"canSwim\":true,\"barcode\":\"2439357480803\",\"experience\":[{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA14\",\"yearsOfExperience\":4}]},{\"candidateId\":\"852e88ee-95ef-4e54-89c2-9af426dd40a9\",\"fullName\":\"Charlie Parker\",\"firstName\":\"Charlie\",\"lastName\":\"Parker\",\"gender\":0,\"profilePicture\":\"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1072.jpg\",\"email\":\"Charlie87@hotmail.com\",\"favoriteMusicGenre\":\"Electronic\",\"dad\":\"Guy Barton\",\"mom\":\"Marcia Lesch\",\"canSwim\":true,\"barcode\":\"6918012116265\",\"experience\":[{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA16\",\"yearsOfExperience\":9}]},{\"candidateId\":\"0e714fa1-36ce-4c35-a304-f3e3a57e24e9\",\"fullName\":\"Desiree Oberbrunner\",\"firstName\":\"Desiree\",\"lastName\":\"Oberbrunner\",\"gender\":1,\"profilePicture\":\"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/935.jpg\",\"email\":\"Desiree_Oberbrunner60@hotmail.com\",\"favoriteMusicGenre\":\"Folk\",\"dad\":\"Jeffrey Jaskolski\",\"mom\":\"Colleen Blick\",\"canSwim\":true,\"barcode\":\"8384478990943\",\"experience\":[{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA06\",\"yearsOfExperience\":8}]},{\"candidateId\":\"582fe143-784b-42b7-ac7c-3be1017b44da\",\"fullName\":\"Curtis Schmitt\",\"firstName\":\"Curtis\",\"lastName\":\"Schmitt\",\"gender\":0,\"profilePicture\":\"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/330.jpg\",\"email\":\"Curtis_Schmitt@hotmail.com\",\"favoriteMusicGenre\":\"Blues\",\"dad\":\"Evan Turcotte\",\"mom\":\"Vicky Erdman\",\"canSwim\":true,\"barcode\":\"8490882241707\",\"experience\":[{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA16\",\"yearsOfExperience\":9}]},{\"candidateId\":\"892c3c09-9437-4c00-ae0c-4a1407b1c90e\",\"fullName\":\"Jody Hoeger\",\"firstName\":\"Jody\",\"lastName\":\"Hoeger\",\"gender\":1,\"profilePicture\":\"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/604.jpg\",\"email\":\"Jody_Hoeger22@yahoo.com\",\"favoriteMusicGenre\":\"Folk\",\"dad\":\"Carroll Feest\",\"mom\":\"Brooke Johnson\",\"canSwim\":true,\"barcode\":\"0288505186393\",\"experience\":[{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA04\",\"yearsOfExperience\":1},{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA05\",\"yearsOfExperience\":3}]},{\"candidateId\":\"8237780a-04a9-4141-9b04-ae9e71ce2054\",\"fullName\":\"Kelli Rice\",\"firstName\":\"Kelli\",\"lastName\":\"Rice\",\"gender\":1,\"profilePicture\":\"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/395.jpg\",\"email\":\"Kelli.Rice31@hotmail.com\",\"favoriteMusicGenre\":\"Soul\",\"dad\":\"Matt Gleason\",\"mom\":\"Alice Denesik\",\"canSwim\":true,\"barcode\":\"0073981563499\",\"experience\":[{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA06\",\"yearsOfExperience\":7},{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA09\",\"yearsOfExperience\":8},{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA06\",\"yearsOfExperience\":2},{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA12\",\"yearsOfExperience\":5}]},{\"candidateId\":\"89e3a45b-ed05-403e-86db-f0216c6417fd\",\"fullName\":\"Allan Daugherty\",\"firstName\":\"Allan\",\"lastName\":\"Daugherty\",\"gender\":0,\"profilePicture\":\"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/123.jpg\",\"email\":\"Allan_Daugherty99@yahoo.com\",\"favoriteMusicGenre\":\"Rap\",\"dad\":\"Evan Donnelly\",\"mom\":\"Renee Kuhn\",\"canSwim\":true,\"barcode\":\"8761104038000\",\"experience\":[{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA14\",\"yearsOfExperience\":2}]},{\"candidateId\":\"8f2a58c3-ba97-4124-96ef-327aa007eabf\",\"fullName\":\"Thomas Konopelski\",\"firstName\":\"Thomas\",\"lastName\":\"Konopelski\",\"gender\":0,\"profilePicture\":\"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/903.jpg\",\"email\":\"Thomas_Konopelski58@hotmail.com\",\"favoriteMusicGenre\":\"Folk\",\"dad\":\"Wendell Larkin\",\"mom\":\"Viola Erdman\",\"canSwim\":false,\"barcode\":\"9925886000498\",\"experience\":[{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA05\",\"yearsOfExperience\":3}]},{\"candidateId\":\"13ae9887-4001-46eb-9af2-05c23013a0ab\",\"fullName\":\"Dean Pacocha\",\"firstName\":\"Dean\",\"lastName\":\"Pacocha\",\"gender\":0,\"profilePicture\":\"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1142.jpg\",\"email\":\"Dean.Pacocha@hotmail.com\",\"favoriteMusicGenre\":\"Rock\",\"dad\":\"Wesley Harber\",\"mom\":\"Gwen Feest\",\"canSwim\":true,\"barcode\":\"4694934974184\",\"experience\":[{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA09\",\"yearsOfExperience\":1},{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA11\",\"yearsOfExperience\":3},{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA19\",\"yearsOfExperience\":10}]},{\"candidateId\":\"d9d35334-f0ff-4c40-ab2f-4838d338d9a8\",\"fullName\":\"Theodore Donnelly\",\"firstName\":\"Theodore\",\"lastName\":\"Donnelly\",\"gender\":0,\"profilePicture\":\"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/176.jpg\",\"email\":\"Theodore_Donnelly11@yahoo.com\",\"favoriteMusicGenre\":\"Classical\",\"dad\":\"Alvin Kuhn\",\"mom\":\"Olive Huel\",\"canSwim\":true,\"barcode\":\"4530906633843\",\"experience\":[{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA08\",\"yearsOfExperience\":3}]},{\"candidateId\":\"022926b1-fd08-4600-be89-d5fad50b3999\",\"fullName\":\"Ross Murazik\",\"firstName\":\"Ross\",\"lastName\":\"Murazik\",\"gender\":0,\"profilePicture\":\"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/313.jpg\",\"email\":\"Ross_Murazik23@yahoo.com\",\"favoriteMusicGenre\":\"Soul\",\"dad\":\"Ray Fay\",\"mom\":\"Tonya Runolfsson\",\"canSwim\":false,\"barcode\":\"0316307642929\",\"experience\":[{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA19\",\"yearsOfExperience\":9},{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA08\",\"yearsOfExperience\":1},{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA13\",\"yearsOfExperience\":5}]},{\"candidateId\":\"e42bf969-df3b-4298-834f-fd8ca10874e6\",\"fullName\":\"Michele Heidenreich\",\"firstName\":\"Michele\",\"lastName\":\"Heidenreich\",\"gender\":1,\"profilePicture\":\"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/954.jpg\",\"email\":\"Michele59@gmail.com\",\"favoriteMusicGenre\":\"Hip Hop\",\"dad\":\"Dana Effertz\",\"mom\":\"Beatrice Schiller\",\"canSwim\":false,\"barcode\":\"4929687146138\",\"experience\":[{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA06\",\"yearsOfExperience\":2},{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA18\",\"yearsOfExperience\":4}]},{\"candidateId\":\"391ab2c1-4098-4afd-9cb9-3fd7a0eff337\",\"fullName\":\"Herman Cummerata\",\"firstName\":\"Herman\",\"lastName\":\"Cummerata\",\"gender\":0,\"profilePicture\":\"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1074.jpg\",\"email\":\"Herman_Cummerata@yahoo.com\",\"favoriteMusicGenre\":\"Hip Hop\",\"dad\":\"Pete Kulas\",\"mom\":\"Pamela Morar\",\"canSwim\":true,\"barcode\":\"8701786962828\",\"experience\":[{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA14\",\"yearsOfExperience\":3},{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA10\",\"yearsOfExperience\":8}]},{\"candidateId\":\"14fb07aa-53ea-4570-8bb2-576637f2cced\",\"fullName\":\"Charlene Quigley\",\"firstName\":\"Charlene\",\"lastName\":\"Quigley\",\"gender\":1,\"profilePicture\":\"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1227.jpg\",\"email\":\"Charlene4@yahoo.com\",\"favoriteMusicGenre\":\"Non Music\",\"dad\":\"Kent Hilpert\",\"mom\":\"Joan Keeling\",\"canSwim\":false,\"barcode\":\"1069732143248\",\"experience\":[{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA05\",\"yearsOfExperience\":4},{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA14\",\"yearsOfExperience\":9},{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA16\",\"yearsOfExperience\":5}]},{\"candidateId\":\"b106ba30-b0f0-4497-ac5f-a12b0cb889d7\",\"fullName\":\"Leroy Raynor\",\"firstName\":\"Leroy\",\"lastName\":\"Raynor\",\"gender\":0,\"profilePicture\":\"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/362.jpg\",\"email\":\"Leroy.Raynor@hotmail.com\",\"favoriteMusicGenre\":\"Soul\",\"dad\":\"Angelo Jast\",\"mom\":\"Carol Glover\",\"canSwim\":true,\"barcode\":\"5907549816411\",\"experience\":[{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA12\",\"yearsOfExperience\":10},{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA06\",\"yearsOfExperience\":7},{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA08\",\"yearsOfExperience\":3}]},{\"candidateId\":\"8a95212a-16f9-4623-bc9f-e7cd75490e22\",\"fullName\":\"Marie Ebert\",\"firstName\":\"Marie\",\"lastName\":\"Ebert\",\"gender\":1,\"profilePicture\":\"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/405.jpg\",\"email\":\"Marie_Ebert51@yahoo.com\",\"favoriteMusicGenre\":\"Country\",\"dad\":\"Clint Romaguera\",\"mom\":\"Angelina Emmerich\",\"canSwim\":false,\"barcode\":\"1860513869629\",\"experience\":[{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA08\",\"yearsOfExperience\":10}]},{\"candidateId\":\"ed08c022-30e3-430f-b2bb-65b56a3fffb8\",\"fullName\":\"Lester Hauck\",\"firstName\":\"Lester\",\"lastName\":\"Hauck\",\"gender\":0,\"profilePicture\":\"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/6.jpg\",\"email\":\"Lester.Hauck34@yahoo.com\",\"favoriteMusicGenre\":\"Latin\",\"dad\":\"Austin Wisoky\",\"mom\":\"Toni Zieme\",\"canSwim\":false,\"barcode\":\"0987236201183\",\"experience\":[{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA10\",\"yearsOfExperience\":3},{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA15\",\"yearsOfExperience\":3},{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA13\",\"yearsOfExperience\":7},{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA13\",\"yearsOfExperience\":10}]},{\"candidateId\":\"0fcd38dd-ae8b-47f0-a701-9f21b7e83a83\",\"fullName\":\"Caleb Stamm\",\"firstName\":\"Caleb\",\"lastName\":\"Stamm\",\"gender\":0,\"profilePicture\":\"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/437.jpg\",\"email\":\"Caleb54@gmail.com\",\"favoriteMusicGenre\":\"Rap\",\"dad\":\"Ken Keeling\",\"mom\":\"Heidi McLaughlin\",\"canSwim\":true,\"barcode\":\"6084982132854\",\"experience\":[{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA13\",\"yearsOfExperience\":2}]},{\"candidateId\":\"d45e6c46-7ec5-4cec-a09d-2997edfb916f\",\"fullName\":\"Lynn Jacobi\",\"firstName\":\"Lynn\",\"lastName\":\"Jacobi\",\"gender\":1,\"profilePicture\":\"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1209.jpg\",\"email\":\"Lynn_Jacobi@yahoo.com\",\"favoriteMusicGenre\":\"Metal\",\"dad\":\"Ryan Gutkowski\",\"mom\":\"Lela Hudson\",\"canSwim\":true,\"barcode\":\"3556447287674\",\"experience\":[{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA17\",\"yearsOfExperience\":2},{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA14\",\"yearsOfExperience\":10}]},{\"candidateId\":\"ea3eb4f6-a38d-4d99-bae5-753027424c69\",\"fullName\":\"Ann Larkin\",\"firstName\":\"Ann\",\"lastName\":\"Larkin\",\"gender\":1,\"profilePicture\":\"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/538.jpg\",\"email\":\"Ann19@hotmail.com\",\"favoriteMusicGenre\":\"Hip Hop\",\"dad\":\"Larry Welch\",\"mom\":\"Cynthia Reilly\",\"canSwim\":false,\"barcode\":\"0851877215796\",\"experience\":[{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA13\",\"yearsOfExperience\":8}]},{\"candidateId\":\"c3a1ceb2-7297-448e-9347-bead1deb7f48\",\"fullName\":\"Kevin Satterfield\",\"firstName\":\"Kevin\",\"lastName\":\"Satterfield\",\"gender\":0,\"profilePicture\":\"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/558.jpg\",\"email\":\"Kevin_Satterfield0@yahoo.com\",\"favoriteMusicGenre\":\"Stage And Screen\",\"dad\":\"Arnold Hansen\",\"mom\":\"Fannie Hartmann\",\"canSwim\":true,\"barcode\":\"3772068119495\",\"experience\":[{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA14\",\"yearsOfExperience\":6},{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA15\",\"yearsOfExperience\":6},{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA18\",\"yearsOfExperience\":6}]},{\"candidateId\":\"79f718e6-06e8-4128-831e-9b56457db35a\",\"fullName\":\"Tim Altenwerth\",\"firstName\":\"Tim\",\"lastName\":\"Altenwerth\",\"gender\":0,\"profilePicture\":\"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1181.jpg\",\"email\":\"Tim_Altenwerth@yahoo.com\",\"favoriteMusicGenre\":\"Funk\",\"dad\":\"Karl Kuhlman\",\"mom\":\"Angel Schmitt\",\"canSwim\":true,\"barcode\":\"3278060890870\",\"experience\":[{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA11\",\"yearsOfExperience\":3}]},{\"candidateId\":\"436d558f-49d6-489f-99d1-a8ec0e99498c\",\"fullName\":\"Courtney Bechtelar\",\"firstName\":\"Courtney\",\"lastName\":\"Bechtelar\",\"gender\":1,\"profilePicture\":\"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/207.jpg\",\"email\":\"Courtney_Bechtelar70@yahoo.com\",\"favoriteMusicGenre\":\"Country\",\"dad\":\"Ed Durgan\",\"mom\":\"Pat Christiansen\",\"canSwim\":true,\"barcode\":\"9375154866880\",\"experience\":[{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA12\",\"yearsOfExperience\":3},{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA06\",\"yearsOfExperience\":2},{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA13\",\"yearsOfExperience\":1}]},{\"candidateId\":\"667880af-5415-48b4-92cc-683f2a719e69\",\"fullName\":\"Leona Herzog\",\"firstName\":\"Leona\",\"lastName\":\"Herzog\",\"gender\":1,\"profilePicture\":\"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/938.jpg\",\"email\":\"Leona39@gmail.com\",\"favoriteMusicGenre\":\"Funk\",\"dad\":\"Arthur Upton\",\"mom\":\"Marsha Johnston\",\"canSwim\":false,\"barcode\":\"8797128970835\",\"experience\":[{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA12\",\"yearsOfExperience\":2},{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA10\",\"yearsOfExperience\":5}]},{\"candidateId\":\"9aeedd76-ed55-4be0-b723-01dfe44160ec\",\"fullName\":\"Nick Little\",\"firstName\":\"Nick\",\"lastName\":\"Little\",\"gender\":0,\"profilePicture\":\"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/898.jpg\",\"email\":\"Nick_Little@yahoo.com\",\"favoriteMusicGenre\":\"Hip Hop\",\"dad\":\"Earnest Berge\",\"mom\":\"Delores Kertzmann\",\"canSwim\":false,\"barcode\":\"4579095508716\",\"experience\":[{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA12\",\"yearsOfExperience\":6},{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA10\",\"yearsOfExperience\":10},{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA12\",\"yearsOfExperience\":3},{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA05\",\"yearsOfExperience\":1}]},{\"candidateId\":\"8714fbb1-d83b-4082-b424-9f6a360a25c0\",\"fullName\":\"Ted Hettinger\",\"firstName\":\"Ted\",\"lastName\":\"Hettinger\",\"gender\":0,\"profilePicture\":\"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/233.jpg\",\"email\":\"Ted39@gmail.com\",\"favoriteMusicGenre\":\"Metal\",\"dad\":\"Jonathan Stracke\",\"mom\":\"Lee Sporer\",\"canSwim\":false,\"barcode\":\"5253428817865\",\"experience\":[{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA05\",\"yearsOfExperience\":1},{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA07\",\"yearsOfExperience\":5},{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA18\",\"yearsOfExperience\":6},{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA19\",\"yearsOfExperience\":9}]},{\"candidateId\":\"22356963-9dcd-4c23-b12e-69d511cb0d85\",\"fullName\":\"Raymond Kautzer\",\"firstName\":\"Raymond\",\"lastName\":\"Kautzer\",\"gender\":0,\"profilePicture\":\"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/971.jpg\",\"email\":\"Raymond.Kautzer46@hotmail.com\",\"favoriteMusicGenre\":\"Country\",\"dad\":\"Jeff Wuckert\",\"mom\":\"Helen Mohr\",\"canSwim\":false,\"barcode\":\"2860022075534\",\"experience\":[{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA08\",\"yearsOfExperience\":9},{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA07\",\"yearsOfExperience\":10},{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA13\",\"yearsOfExperience\":10},{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA18\",\"yearsOfExperience\":4}]},{\"candidateId\":\"d00eb06c-a684-4b13-9caa-63a6d5eec6c8\",\"fullName\":\"Harry Lynch\",\"firstName\":\"Harry\",\"lastName\":\"Lynch\",\"gender\":0,\"profilePicture\":\"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/679.jpg\",\"email\":\"Harry.Lynch82@yahoo.com\",\"favoriteMusicGenre\":\"Latin\",\"dad\":\"Ignacio Dibbert\",\"mom\":\"Tiffany Hodkiewicz\",\"canSwim\":false,\"barcode\":\"3785662382585\",\"experience\":[{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA13\",\"yearsOfExperience\":2},{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA05\",\"yearsOfExperience\":1},{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA09\",\"yearsOfExperience\":1},{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA13\",\"yearsOfExperience\":10}]},{\"candidateId\":\"5f085980-6341-4fa3-8f7e-0a558f4b1307\",\"fullName\":\"Julie Lowe\",\"firstName\":\"Julie\",\"lastName\":\"Lowe\",\"gender\":1,\"profilePicture\":\"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/854.jpg\",\"email\":\"Julie.Lowe2@yahoo.com\",\"favoriteMusicGenre\":\"World\",\"dad\":\"Irving Kessler\",\"mom\":\"Annie Kessler\",\"canSwim\":false,\"barcode\":\"4102218239497\",\"experience\":[{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA15\",\"yearsOfExperience\":7},{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA07\",\"yearsOfExperience\":1},{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA16\",\"yearsOfExperience\":7},{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA17\",\"yearsOfExperience\":7}]},{\"candidateId\":\"261a01da-83cb-4c94-8cc6-e18beaae7376\",\"fullName\":\"Charlotte Shanahan\",\"firstName\":\"Charlotte\",\"lastName\":\"Shanahan\",\"gender\":1,\"profilePicture\":\"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/224.jpg\",\"email\":\"Charlotte.Shanahan57@hotmail.com\",\"favoriteMusicGenre\":\"Rock\",\"dad\":\"Ricardo Bergstrom\",\"mom\":\"Tammy Bechtelar\",\"canSwim\":false,\"barcode\":\"9908414752502\",\"experience\":[{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA10\",\"yearsOfExperience\":2},{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA06\",\"yearsOfExperience\":7}]},{\"candidateId\":\"ad976dc8-e416-45ba-9305-496a8d8f57da\",\"fullName\":\"Andy Senger\",\"firstName\":\"Andy\",\"lastName\":\"Senger\",\"gender\":0,\"profilePicture\":\"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/937.jpg\",\"email\":\"Andy5@hotmail.com\",\"favoriteMusicGenre\":\"Country\",\"dad\":\"Cameron Harvey\",\"mom\":\"Nicole McGlynn\",\"canSwim\":false,\"barcode\":\"4570629917295\",\"experience\":[{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA13\",\"yearsOfExperience\":6},{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA17\",\"yearsOfExperience\":5},{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA18\",\"yearsOfExperience\":5}]},{\"candidateId\":\"26ecca4a-4766-4a5d-bad3-1cecce988551\",\"fullName\":\"Marsha Sporer\",\"firstName\":\"Marsha\",\"lastName\":\"Sporer\",\"gender\":1,\"profilePicture\":\"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1017.jpg\",\"email\":\"Marsha.Sporer72@gmail.com\",\"favoriteMusicGenre\":\"Rock\",\"dad\":\"Felix Russel\",\"mom\":\"Georgia Halvorson\",\"canSwim\":true,\"barcode\":\"7702479160751\",\"experience\":[{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA07\",\"yearsOfExperience\":7},{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA11\",\"yearsOfExperience\":6},{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA14\",\"yearsOfExperience\":7},{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA07\",\"yearsOfExperience\":5}]},{\"candidateId\":\"c41e1ea8-2289-489a-b5a9-01c9d1676b28\",\"fullName\":\"Kirk Renner\",\"firstName\":\"Kirk\",\"lastName\":\"Renner\",\"gender\":0,\"profilePicture\":\"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/624.jpg\",\"email\":\"Kirk.Renner@gmail.com\",\"favoriteMusicGenre\":\"Non Music\",\"dad\":\"Alfred Krajcik\",\"mom\":\"Caroline Smitham\",\"canSwim\":false,\"barcode\":\"8855025787069\",\"experience\":[{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA17\",\"yearsOfExperience\":2}]},{\"candidateId\":\"7d9bb228-8038-4f1c-800f-a3cde9bf3afc\",\"fullName\":\"Kerry Parisian\",\"firstName\":\"Kerry\",\"lastName\":\"Parisian\",\"gender\":1,\"profilePicture\":\"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1045.jpg\",\"email\":\"Kerry.Parisian21@yahoo.com\",\"favoriteMusicGenre\":\"World\",\"dad\":\"Raymond Jakubowski\",\"mom\":\"Krista Herman\",\"canSwim\":true,\"barcode\":\"1251237906460\",\"experience\":[{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA11\",\"yearsOfExperience\":8},{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA15\",\"yearsOfExperience\":9},{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA19\",\"yearsOfExperience\":8}]},{\"candidateId\":\"0accb03e-9ad6-4151-b675-f7403d377925\",\"fullName\":\"Zachary Medhurst\",\"firstName\":\"Zachary\",\"lastName\":\"Medhurst\",\"gender\":0,\"profilePicture\":\"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/197.jpg\",\"email\":\"Zachary_Medhurst38@yahoo.com\",\"favoriteMusicGenre\":\"Hip Hop\",\"dad\":\"Blake Christiansen\",\"mom\":\"Shannon Sanford\",\"canSwim\":true,\"barcode\":\"4654584368030\",\"experience\":[{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA07\",\"yearsOfExperience\":1},{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA10\",\"yearsOfExperience\":6},{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA19\",\"yearsOfExperience\":4},{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA08\",\"yearsOfExperience\":1}]},{\"candidateId\":\"048b625c-4a46-4c35-b16c-1a5fbef94b59\",\"fullName\":\"Sherri Beer\",\"firstName\":\"Sherri\",\"lastName\":\"Beer\",\"gender\":1,\"profilePicture\":\"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg\",\"email\":\"Sherri_Beer18@gmail.com\",\"favoriteMusicGenre\":\"Classical\",\"dad\":\"Dustin Lesch\",\"mom\":\"Victoria VonRueden\",\"canSwim\":true,\"barcode\":\"8222130660004\",\"experience\":[{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA09\",\"yearsOfExperience\":2},{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA14\",\"yearsOfExperience\":9}]},{\"candidateId\":\"a923ed89-7354-4009-ac3d-1a7c53dd348a\",\"fullName\":\"Ismael Cole\",\"firstName\":\"Ismael\",\"lastName\":\"Cole\",\"gender\":0,\"profilePicture\":\"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/796.jpg\",\"email\":\"Ismael.Cole@gmail.com\",\"favoriteMusicGenre\":\"Jazz\",\"dad\":\"Terry Auer\",\"mom\":\"Debra Leuschke\",\"canSwim\":false,\"barcode\":\"1039223619910\",\"experience\":[{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA19\",\"yearsOfExperience\":1},{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA05\",\"yearsOfExperience\":5},{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA13\",\"yearsOfExperience\":1},{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA04\",\"yearsOfExperience\":4}]},{\"candidateId\":\"0a280916-59f0-48ee-9adf-9ee33051659d\",\"fullName\":\"Stella Jacobson\",\"firstName\":\"Stella\",\"lastName\":\"Jacobson\",\"gender\":1,\"profilePicture\":\"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/753.jpg\",\"email\":\"Stella_Jacobson87@hotmail.com\",\"favoriteMusicGenre\":\"Metal\",\"dad\":\"Carlton Bashirian\",\"mom\":\"Erma Wuckert\",\"canSwim\":false,\"barcode\":\"0731931182410\",\"experience\":[{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA08\",\"yearsOfExperience\":3},{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA14\",\"yearsOfExperience\":10},{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA05\",\"yearsOfExperience\":1}]},{\"candidateId\":\"d27f3b9c-14ec-4c1a-a3d1-585e659b78d1\",\"fullName\":\"Andy Langosh\",\"firstName\":\"Andy\",\"lastName\":\"Langosh\",\"gender\":0,\"profilePicture\":\"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1170.jpg\",\"email\":\"Andy_Langosh@yahoo.com\",\"favoriteMusicGenre\":\"Jazz\",\"dad\":\"Tony Watsica\",\"mom\":\"Nichole Bins\",\"canSwim\":false,\"barcode\":\"8004040624617\",\"experience\":[{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA13\",\"yearsOfExperience\":2}]},{\"candidateId\":\"74350b51-8bbb-455e-8b5f-8cda9f2908f5\",\"fullName\":\"Katrina Kerluke\",\"firstName\":\"Katrina\",\"lastName\":\"Kerluke\",\"gender\":1,\"profilePicture\":\"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1048.jpg\",\"email\":\"Katrina_Kerluke@hotmail.com\",\"favoriteMusicGenre\":\"Country\",\"dad\":\"Van Parker\",\"mom\":\"Kay Satterfield\",\"canSwim\":true,\"barcode\":\"8306292428648\",\"experience\":[{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA09\",\"yearsOfExperience\":1}]},{\"candidateId\":\"14a3edff-78c7-4a27-90af-e9945e354875\",\"fullName\":\"Bert Rolfson\",\"firstName\":\"Bert\",\"lastName\":\"Rolfson\",\"gender\":0,\"profilePicture\":\"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/301.jpg\",\"email\":\"Bert_Rolfson@hotmail.com\",\"favoriteMusicGenre\":\"Electronic\",\"dad\":\"Larry Stehr\",\"mom\":\"Kristi Hilll\",\"canSwim\":true,\"barcode\":\"7460768839817\",\"experience\":[{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA14\",\"yearsOfExperience\":5},{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA15\",\"yearsOfExperience\":9}]},{\"candidateId\":\"41e8d9e2-9237-4ade-8176-9c0f30d402b1\",\"fullName\":\"Marcos Harris\",\"firstName\":\"Marcos\",\"lastName\":\"Harris\",\"gender\":0,\"profilePicture\":\"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/942.jpg\",\"email\":\"Marcos.Harris@gmail.com\",\"favoriteMusicGenre\":\"Reggae\",\"dad\":\"Wayne Collier\",\"mom\":\"Lora Aufderhar\",\"canSwim\":true,\"barcode\":\"3212772563516\",\"experience\":[{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA19\",\"yearsOfExperience\":9},{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA04\",\"yearsOfExperience\":6},{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA15\",\"yearsOfExperience\":4},{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA11\",\"yearsOfExperience\":9}]},{\"candidateId\":\"c3adf95b-b2cd-4561-9b47-59f7bf0f34ce\",\"fullName\":\"Rosa Lebsack\",\"firstName\":\"Rosa\",\"lastName\":\"Lebsack\",\"gender\":1,\"profilePicture\":\"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/412.jpg\",\"email\":\"Rosa_Lebsack36@yahoo.com\",\"favoriteMusicGenre\":\"Rap\",\"dad\":\"Benny VonRueden\",\"mom\":\"Marguerite Okuneva\",\"canSwim\":false,\"barcode\":\"6008643748642\",\"experience\":[{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA06\",\"yearsOfExperience\":7},{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA08\",\"yearsOfExperience\":3},{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA17\",\"yearsOfExperience\":7}]},{\"candidateId\":\"c002956b-69bc-4f34-b8eb-1e03c750ad58\",\"fullName\":\"Dolores Abshire\",\"firstName\":\"Dolores\",\"lastName\":\"Abshire\",\"gender\":1,\"profilePicture\":\"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/728.jpg\",\"email\":\"Dolores90@hotmail.com\",\"favoriteMusicGenre\":\"Classical\",\"dad\":\"Myron Stoltenberg\",\"mom\":\"Jane Pollich\",\"canSwim\":true,\"barcode\":\"8319486952775\",\"experience\":[{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA04\",\"yearsOfExperience\":2},{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA10\",\"yearsOfExperience\":7},{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA14\",\"yearsOfExperience\":4}]},{\"candidateId\":\"e44f5ca6-7354-4940-a763-417fa62f7f4b\",\"fullName\":\"Doris Greenholt\",\"firstName\":\"Doris\",\"lastName\":\"Greenholt\",\"gender\":1,\"profilePicture\":\"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/332.jpg\",\"email\":\"Doris.Greenholt@hotmail.com\",\"favoriteMusicGenre\":\"Hip Hop\",\"dad\":\"Aaron Bechtelar\",\"mom\":\"Sadie Spinka\",\"canSwim\":false,\"barcode\":\"9262968426112\",\"experience\":[{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA17\",\"yearsOfExperience\":2}]},{\"candidateId\":\"7cfb61a1-d23a-4ee7-baef-ca3be253cff0\",\"fullName\":\"Kelvin Ernser\",\"firstName\":\"Kelvin\",\"lastName\":\"Ernser\",\"gender\":0,\"profilePicture\":\"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/568.jpg\",\"email\":\"Kelvin.Ernser@gmail.com\",\"favoriteMusicGenre\":\"Folk\",\"dad\":\"Dwight Kuhlman\",\"mom\":\"Billie Breitenberg\",\"canSwim\":true,\"barcode\":\"2813117449406\",\"experience\":[{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA18\",\"yearsOfExperience\":6},{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA11\",\"yearsOfExperience\":2},{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA06\",\"yearsOfExperience\":5},{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA13\",\"yearsOfExperience\":1}]},{\"candidateId\":\"0be55189-0758-4b95-a932-e64cdd81d37d\",\"fullName\":\"Patrick Mueller\",\"firstName\":\"Patrick\",\"lastName\":\"Mueller\",\"gender\":0,\"profilePicture\":\"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/871.jpg\",\"email\":\"Patrick90@gmail.com\",\"favoriteMusicGenre\":\"Rock\",\"dad\":\"Tyrone Donnelly\",\"mom\":\"Cynthia Daniel\",\"canSwim\":false,\"barcode\":\"1457901788749\",\"experience\":[{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA12\",\"yearsOfExperience\":5}]},{\"candidateId\":\"b3ff09c0-e5ff-4f8f-9378-abd12dde62e2\",\"fullName\":\"Laurie Wiegand\",\"firstName\":\"Laurie\",\"lastName\":\"Wiegand\",\"gender\":1,\"profilePicture\":\"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/78.jpg\",\"email\":\"Laurie95@hotmail.com\",\"favoriteMusicGenre\":\"Reggae\",\"dad\":\"Victor Trantow\",\"mom\":\"Gwendolyn Okuneva\",\"canSwim\":false,\"barcode\":\"4379817194230\",\"experience\":[{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA08\",\"yearsOfExperience\":5},{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA08\",\"yearsOfExperience\":9},{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA08\",\"yearsOfExperience\":8}]},{\"candidateId\":\"cfc7637f-2b03-469f-9c8f-08609390d6ee\",\"fullName\":\"Arlene Emard\",\"firstName\":\"Arlene\",\"lastName\":\"Emard\",\"gender\":1,\"profilePicture\":\"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/839.jpg\",\"email\":\"Arlene.Emard@gmail.com\",\"favoriteMusicGenre\":\"Jazz\",\"dad\":\"Domingo Breitenberg\",\"mom\":\"Grace Purdy\",\"canSwim\":false,\"barcode\":\"2235086083892\",\"experience\":[{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA15\",\"yearsOfExperience\":4},{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA19\",\"yearsOfExperience\":6},{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA11\",\"yearsOfExperience\":7}]},{\"candidateId\":\"bcf91882-392d-46fb-9984-d2e52edaca41\",\"fullName\":\"Gilbert Durgan\",\"firstName\":\"Gilbert\",\"lastName\":\"Durgan\",\"gender\":0,\"profilePicture\":\"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/502.jpg\",\"email\":\"Gilbert_Durgan52@gmail.com\",\"favoriteMusicGenre\":\"Funk\",\"dad\":\"Harvey White\",\"mom\":\"Karla Kub\",\"canSwim\":true,\"barcode\":\"4129919668135\",\"experience\":[{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA12\",\"yearsOfExperience\":8},{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA19\",\"yearsOfExperience\":5},{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA15\",\"yearsOfExperience\":3}]},{\"candidateId\":\"00b6d35a-7448-4fbd-acbc-791d170174b0\",\"fullName\":\"Cesar Hettinger\",\"firstName\":\"Cesar\",\"lastName\":\"Hettinger\",\"gender\":0,\"profilePicture\":\"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1239.jpg\",\"email\":\"Cesar82@hotmail.com\",\"favoriteMusicGenre\":\"Hip Hop\",\"dad\":\"Greg Herman\",\"mom\":\"Geraldine Conn\",\"canSwim\":false,\"barcode\":\"9625105277730\",\"experience\":[{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA17\",\"yearsOfExperience\":10},{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA04\",\"yearsOfExperience\":9}]},{\"candidateId\":\"8e816cfd-2321-482f-8161-7adccf70341f\",\"fullName\":\"Hazel Runte\",\"firstName\":\"Hazel\",\"lastName\":\"Runte\",\"gender\":1,\"profilePicture\":\"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/244.jpg\",\"email\":\"Hazel.Runte@yahoo.com\",\"favoriteMusicGenre\":\"Pop\",\"dad\":\"Justin Muller\",\"mom\":\"Jeanette Rogahn\",\"canSwim\":false,\"barcode\":\"4342402184107\",\"experience\":[{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA18\",\"yearsOfExperience\":7},{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA14\",\"yearsOfExperience\":7},{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA08\",\"yearsOfExperience\":9}]},{\"candidateId\":\"9e55ee65-1572-41d6-a09d-1b2bdbccf86f\",\"fullName\":\"Maxine Muller\",\"firstName\":\"Maxine\",\"lastName\":\"Muller\",\"gender\":1,\"profilePicture\":\"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/92.jpg\",\"email\":\"Maxine.Muller@yahoo.com\",\"favoriteMusicGenre\":\"Metal\",\"dad\":\"Geoffrey Gulgowski\",\"mom\":\"Christina Huel\",\"canSwim\":true,\"barcode\":\"6023894976682\",\"experience\":[{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA07\",\"yearsOfExperience\":1},{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA14\",\"yearsOfExperience\":5},{\"technologyId\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA12\",\"yearsOfExperience\":8}]}]");

/***/ }),

/***/ "./src/app/asset/technology.json":
/*!***************************************!*\
  !*** ./src/app/asset/technology.json ***!
  \***************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"name\":\"Rust\",\"guid\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA04\"},{\"name\":\"TypeScript\",\"guid\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA05\"},{\"name\":\"Python\",\"guid\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA06\"},{\"name\":\"Kotlin\",\"guid\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA07\"},{\"name\":\"Go\",\"guid\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA08\"},{\"name\":\"Julia\",\"guid\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA09\"},{\"name\":\"Dart\",\"guid\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA10\"},{\"name\":\"C#\",\"guid\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA11\"},{\"name\":\"Swift\",\"guid\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA12\"},{\"name\":\"JavaScript\",\"guid\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA13\"},{\"name\":\"SQL\",\"guid\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA14\"},{\"name\":\"Scala\",\"guid\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA15\"},{\"name\":\"Haskell\",\"guid\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA16\"},{\"name\":\"R\",\"guid\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA17\"},{\"name\":\"Java\",\"guid\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA18\"},{\"name\":\"C++\",\"guid\":\"3B85BE83-9B4E-4B15-9EB2-68363936CA19\"}]");

/***/ }),

/***/ "./src/app/counter/counter.component.ts":
/*!**********************************************!*\
  !*** ./src/app/counter/counter.component.ts ***!
  \**********************************************/
/*! exports provided: CounterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounterComponent", function() { return CounterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let CounterComponent = class CounterComponent {
    constructor() {
        this.currentCount = 0;
    }
    incrementCounter() {
        this.currentCount++;
    }
};
CounterComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-counter-component',
        template: __importDefault(__webpack_require__(/*! raw-loader!./counter.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/counter/counter.component.html")).default
    })
], CounterComponent);



/***/ }),

/***/ "./src/app/fetch-data/fetch-data.component.ts":
/*!****************************************************!*\
  !*** ./src/app/fetch-data/fetch-data.component.ts ***!
  \****************************************************/
/*! exports provided: FetchDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchDataComponent", function() { return FetchDataComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


let FetchDataComponent = class FetchDataComponent {
    constructor(http, baseUrl) {
        http.get(baseUrl + 'weatherforecast').subscribe(result => {
            this.forecasts = result;
        }, error => console.error(error));
    }
};
FetchDataComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: ['BASE_URL',] }] }
];
FetchDataComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-fetch-data',
        template: __importDefault(__webpack_require__(/*! raw-loader!./fetch-data.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/fetch-data/fetch-data.component.html")).default
    }),
    __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('BASE_URL')),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], String])
], FetchDataComponent);



/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let HomeComponent = class HomeComponent {
};
HomeComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-home',
        template: __importDefault(__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/nav-menu/nav-menu.component.css":
/*!*************************************************!*\
  !*** ./src/app/nav-menu/nav-menu.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("a.navbar-brand {\r\n  white-space: normal;\r\n  text-align: center;\r\n  word-break: break-all;\r\n}\r\n\r\nhtml {\r\n  font-size: 14px;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  html {\r\n    font-size: 16px;\r\n  }\r\n}\r\n\r\n.box-shadow {\r\n  box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .05);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2LW1lbnUvbmF2LW1lbnUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFDQTtFQUNFO0lBQ0UsZUFBZTtFQUNqQjtBQUNGOztBQUVBO0VBQ0UsOENBQThDO0FBQ2hEIiwiZmlsZSI6InNyYy9hcHAvbmF2LW1lbnUvbmF2LW1lbnUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImEubmF2YmFyLWJyYW5kIHtcclxuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XHJcbn1cclxuXHJcbmh0bWwge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICBodG1sIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICB9XHJcbn1cclxuXHJcbi5ib3gtc2hhZG93IHtcclxuICBib3gtc2hhZG93OiAwIC4yNXJlbSAuNzVyZW0gcmdiYSgwLCAwLCAwLCAuMDUpO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/nav-menu/nav-menu.component.ts":
/*!************************************************!*\
  !*** ./src/app/nav-menu/nav-menu.component.ts ***!
  \************************************************/
/*! exports provided: NavMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavMenuComponent", function() { return NavMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let NavMenuComponent = class NavMenuComponent {
    constructor() {
        this.isExpanded = false;
    }
    collapse() {
        this.isExpanded = false;
    }
    toggle() {
        this.isExpanded = !this.isExpanded;
    }
};
NavMenuComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-nav-menu',
        template: __importDefault(__webpack_require__(/*! raw-loader!./nav-menu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/nav-menu/nav-menu.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./nav-menu.component.css */ "./src/app/nav-menu/nav-menu.component.css")).default]
    })
], NavMenuComponent);



/***/ }),

/***/ "./src/app/search-candidate/search-candidate.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/search-candidate/search-candidate.component.ts ***!
  \****************************************************************/
/*! exports provided: SearchCandidateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchCandidateComponent", function() { return SearchCandidateComponent; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _asset_candidatedata_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../asset/candidatedata.json */ "./src/app/asset/candidatedata.json");
var _asset_candidatedata_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../asset/candidatedata.json */ "./src/app/asset/candidatedata.json", 1);
/* harmony import */ var _asset_technology_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../asset/technology.json */ "./src/app/asset/technology.json");
var _asset_technology_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../asset/technology.json */ "./src/app/asset/technology.json", 1);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




let SearchCandidateComponent = class SearchCandidateComponent {
    constructor(http) {
        this.http = http;
        this.lastkeydown1 = 0;
        this.CandidateList = [];
        this.TechnologiesList = [];
        this.TechnologiesList1 = [];
        this.CandidateList1 = [];
        this.CandidateList2 = [];
    }
    ngOnInit() {
        this.CandidateList = _asset_candidatedata_json__WEBPACK_IMPORTED_MODULE_2__;
        this.TechnologiesList = _asset_technology_json__WEBPACK_IMPORTED_MODULE_3__;
    }
    BindCandidate($event) {
        this.CandidateList1 = [];
        this.CandidateList2 = [];
        let techid = this.TechnologiesList.find(item => item.name === this.techName).guid;
        this.getCandidatefromTech(techid);
    }
    getCandidatefromTech(techid) {
        for (let i = 0; i < this.CandidateList.length; i++) {
            for (let j = 0; j < this.CandidateList[i].experience.length; j++) {
                if (this.CandidateList[i].experience[j].technologyId === techid) {
                    this.CandidateList1.push(this.CandidateList[i]);
                }
            }
        }
        if (this.exp != undefined) {
            if (this.exp.length > 0) {
                for (let i = 0; i < this.CandidateList1.length; i++) {
                    for (let j = 0; j < this.CandidateList1[i].experience.length; j++) {
                        if (this.CandidateList1[i].experience[j].technologyId == techid && this.CandidateList1[i].experience[j].yearsOfExperience == this.exp) {
                            this.CandidateList2.push(this.CandidateList1[i]);
                        }
                    }
                }
            }
            else {
                this.CandidateList2 = this.CandidateList1;
            }
        }
        else {
            this.CandidateList2 = this.CandidateList1;
        }
    }
    searchFromEmp(arr, regex) {
        let matches = [], i;
        for (i = 0; i > arr.length; i++) {
            if (String(arr[i].experience.technologyId).match(regex)) {
                matches.push(arr[i]);
            }
        }
    }
    delete(candidateId) {
        delete this.CandidateList.candidateId;
    }
};
SearchCandidateComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }
];
SearchCandidateComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-search-candidate',
        template: __importDefault(__webpack_require__(/*! raw-loader!./search-candidate.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/search-candidate/search-candidate.component.html")).default,
    }),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
], SearchCandidateComponent);



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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
const environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! exports provided: getBaseUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBaseUrl", function() { return getBaseUrl; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




function getBaseUrl() {
    return document.getElementsByTagName('base')[0].href;
}
const providers = [
    { provide: 'BASE_URL', useFactory: getBaseUrl, deps: [] }
];
if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])(providers).bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\POC\RecruitmentPortal\ClientApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
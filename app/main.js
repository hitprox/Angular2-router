"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var router_1 = require("@angular/router");
var platform_browser_1 = require('@angular/platform-browser');
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var child_component_1 = require('./child.component');
/*First section*/
var AppComponent = (function () {
    function AppComponent() {
        this.heading = "Ultra Racing Schedule";
        this.race = {
            "id": 1,
            "name": "Daytona Thunderdome",
            "date": new Date('2512-01-04T14:00:00'),
            "about": "Race through the ruins of an ancient Florida battle arena.",
            "entryFee": 3200
        };
    }
    AppComponent.prototype.OnClicked = function (nam) {
        console.log(nam);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "<div>\n  <button (click)=\"OnClicked(race.name)\">\n    {{race.name}}</button>\n  <a routerLink=\"home\">Home</a>\n  <router-outlet></router-outlet>\n  </div>\n  <div>\n  dhg;fsdlg;lsdfngl;sdfng\n  </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
/*End First section*/
/*----------------------------*/
/*Two section*/
var AppComponents = (function () {
    function AppComponents() {
        this.heading = "Ultra Racing Schedule";
        this.race = {
            "id": 1,
            "name": "Daytona Thunderdome",
            "date": new Date('2512-01-04T14:00:00'),
            "about": "Race through the ruins of an ancient Florida battle arena.",
            "entryFee": 3200
        };
    }
    AppComponents.prototype.OnClicked = function (nam) {
        console.log(nam);
    };
    AppComponents = __decorate([
        core_1.Component({
            selector: 'my-appp',
            templateUrl: '/app/new.html'
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponents);
    return AppComponents;
}());
exports.AppComponents = AppComponents;
/*End Two section*/
/*----------------------------*/
exports.routeConfig = [{
        path: 'home',
        component: child_component_1.ChildComponent
    }];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, router_1.RouterModule, router_1.RouterModule.forRoot(exports.routeConfig)],
            providers: [{ provide: common_1.APP_BASE_HREF, useValue: '/' }],
            declarations: [child_component_1.ChildComponent, AppComponent, AppComponents],
            bootstrap: [AppComponent, AppComponents]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
var RouteExampleAppComponent = (function () {
    function RouteExampleAppComponent() {
    }
    return RouteExampleAppComponent;
}());
exports.RouteExampleAppComponent = RouteExampleAppComponent;
core_1.enableProdMode();
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(AppModule);
//# sourceMappingURL=main.js.map
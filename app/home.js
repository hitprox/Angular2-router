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
/**
 * Created by Tareq Boulakjar. from angulartypescript.com
 */
var core_1 = require('@angular/core');
var Home = (function () {
    function Home() {
    }
    Home = __decorate([
        core_1.Component({
            selector: 'angular-2-contact',
            template: "\n    <h5 class=\"title\">Angular 2 Contact Component</h5>\n    <div>\n        <label>Your Email :</label>\n        <input type=\"text\" placeholder=\"enter your email\">\n    </div>\n\n  ",
        }), 
        __metadata('design:paramtypes', [])
    ], Home);
    return Home;
}());
exports.Home = Home;
/*
Copyright 2016 angulartypescript.com. All Rights Reserved.
Everyone can use this source code; don’t forget to indicate the source please:
http://www.angulartypescript.com/
*/ 
//# sourceMappingURL=home.js.map
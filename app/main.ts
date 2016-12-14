import { NgModule, Component,HostListener,enableProdMode } from '@angular/core';
import {APP_BASE_HREF} from '@angular/common';
import {RouterModule} from "@angular/router";
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ChildComponent }   from './child.component';

/*First section*/

@Component({
  selector: 'my-app',
    template: `<div>
  <button (click)="OnClicked(race.name)">
    {{race.name}}</button>
  <a routerLink="home">Home</a>
  <router-outlet></router-outlet>
  </div>
  <div>
  dhg;fsdlg;lsdfngl;sdfng
  </div>
    `
})
export class AppComponent {
  heading = "Ultra Racing Schedule";
  race = {
    "id": 1,
    "name": "Daytona Thunderdome",
    "date": new Date('2512-01-04T14:00:00'),
    "about": "Race through the ruins of an ancient Florida battle arena.",
    "entryFee": 3200
  };
  OnClicked(nam: string){
  console.log(nam);
  }
}
/*End First section*/

/*----------------------------*/

/*Two section*/

@Component({
  selector: 'my-appp',
  templateUrl: '/app/new.html'
})
export class AppComponents {
  heading = "Ultra Racing Schedule";
  race = {
    "id": 1,
    "name": "Daytona Thunderdome",
    "date": new Date('2512-01-04T14:00:00'),
    "about": "Race through the ruins of an ancient Florida battle arena.",
    "entryFee": 3200
  };
  OnClicked(nam: string){
  console.log(nam);
  }
}
/*End Two section*/

/*----------------------------*/

export const routeConfig = [{
        path: 'home',
        component: ChildComponent
    }];

@NgModule({
  imports: [ BrowserModule,  RouterModule, RouterModule.forRoot(routeConfig)],
  providers: [{provide: APP_BASE_HREF, useValue : '/' }],
  declarations: [ ChildComponent,AppComponent,AppComponents ],
  bootstrap: [ AppComponent,AppComponents ]
})

class AppModule {}

export class RouteExampleAppComponent { }
enableProdMode();
platformBrowserDynamic().bootstrapModule(AppModule);
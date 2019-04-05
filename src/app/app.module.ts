import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { RecommnendedComponent } from './recommnended/recommnended.component';
import { BoseHomeComponent } from './bose-home/bose-home.component';
import { FramesComponent } from './frames/frames.component';
import { SosialComponent } from './sosial/sosial.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroSectionComponent,
    RecommnendedComponent,
    BoseHomeComponent,
    FramesComponent,
    SosialComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

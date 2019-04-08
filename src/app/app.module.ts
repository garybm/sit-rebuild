import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { RecommnendedComponent } from './recommnended/recommnended.component';
import { BoseHomeComponent } from './bose-home/bose-home.component';
import { FramesComponent } from './frames/frames.component';
import { SocialComponent } from './social/social.component';
// import { AngularFireModule } from 'angularfire2';
// import { AngularFireDatabaseModule } from 'angularfire2/database';
// import { AngularFirestoreModule } from '@angular/fire/firestore';
// import { AngularFireStorageModule } from '@angular/fire/storage';
// import { AngularFireAuthModule } from '@angular/fire/auth';
import { masterFirebaseConfig } from './api-keys';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroSectionComponent,
    RecommnendedComponent,
    BoseHomeComponent,
    FramesComponent,
    SocialComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
    // AngularFireModule.initializeApp(masterFirebaseConfig.firebase),
    // AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    // AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    // AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

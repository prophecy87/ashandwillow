import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgbModule, NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

// Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from '../environments/environment';

//Componets
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { MatCarouselModule } from '@ngbmodule/material-carousel';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'ashandwillow'),
    AngularFirestoreModule, // Only required for database features
    AngularFireStorageModule, 
    BrowserAnimationsModule,
    MatCarouselModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

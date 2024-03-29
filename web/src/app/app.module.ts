import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAnalytics, getAnalytics, ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { NavComponent } from './components/generalComponents/nav/nav.component';
import { PublicComponent } from './components/public/public.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/public/home/home.component';
import { HeaderComponent } from './components/public/home/header/header.component';
import { MaterialModule } from './modules/material/material.module';
import { FeaturesComponent } from './components/public/home/features/features.component';
import { HomeTitlesComponent } from './components/public/home/home-titles/home-titles.component';
import { ExperienceComponent } from './components/public/home/experience/experience.component';
import { FooterComponent } from './components/generalComponents/footer/footer.component';
import { PortfolioComponent } from './components/public/home/portfolio/portfolio.component';
import { ContactComponent } from './components/public/contact/contact.component';
import { HeaderSectionComponent } from './components/generalComponents/header-section/header-section.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GeneralSnackbarComponent } from './components/generalComponents/general-snackbar/general-snackbar.component';
import { OkDialogComponent } from './components/generalComponents/ok-dialog/ok-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    PublicComponent,
    HomeComponent,
    HeaderComponent,
    FeaturesComponent,
    HomeTitlesComponent,
    ExperienceComponent,
    FooterComponent,
    PortfolioComponent,
    ContactComponent,
    HeaderSectionComponent,
    GeneralSnackbarComponent,
    OkDialogComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAnalytics(() => getAnalytics()),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [
    ScreenTrackingService, UserTrackingService
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class AppModule { }

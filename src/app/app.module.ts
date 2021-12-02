import { LOCALE_ID,NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { ChatsComponent } from './pages/chats/chats.component';
import { CreateEventsComponent } from './pages/create-events/create-events.component';
import { FaqsComponent } from './pages/faqs/faqs.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { MapsComponent } from './pages/maps/maps.component';
import { MyCreatedEventsComponent } from './pages/my-created-events/my-created-events.component';
import { MySaveEventsComponent } from './pages/my-save-events/my-save-events.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { OnboardingComponent } from './pages/onboarding/onboarding.component';
import { PastEventsComponent } from './pages/past-events/past-events.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RecoverPasswordComponent } from './pages/recover-password/recover-password.component';
import { RegisterComponent } from './pages/register/register.component';
import { TechSupportComponent } from './pages/tech-support/tech-support.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { EventDetailsComponent } from './pages/event-details/event-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import localeEs from '@angular/common/locales/es'
import { registerLocaleData } from '@angular/common';
import { Onboarding1Component } from './pages/onboarding/onboarding1/onboarding1.component';
import { Onboarding2Component } from './pages/onboarding/onboarding2/onboarding2.component';
import { Onboarding3Component } from './pages/onboarding/onboarding3/onboarding3.component';
import { Onboarding4Component } from './pages/onboarding/onboarding4/onboarding4.component';
import { Onboarding5Component } from './pages/onboarding/onboarding5/onboarding5.component';
import { Onboarding6Component } from './pages/onboarding/onboarding6/onboarding6.component';

registerLocaleData(localeEs, 'es')
import { FormsModule } from '@angular/forms';
// import { } from '@angular/material'
@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    CalendarComponent,
    ChatsComponent,
    EventDetailsComponent,
    CreateEventsComponent,
    FaqsComponent,
    HomeComponent,
    LoginComponent,
    MapsComponent,
    MyCreatedEventsComponent,
    MySaveEventsComponent,
    NotFoundComponent,
    OnboardingComponent,
    PastEventsComponent,
    ProfileComponent,
    RecoverPasswordComponent,
    RegisterComponent,
    TechSupportComponent,
    FooterComponent,
    HeaderComponent,
    Onboarding1Component,
    Onboarding2Component,
    Onboarding3Component,
    Onboarding4Component,
    Onboarding5Component,
    Onboarding6Component,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'es'}],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
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
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

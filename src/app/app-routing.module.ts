import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { ChatsComponent } from './pages/chats/chats.component';
import { CreateEventsComponent } from './pages/create-events/create-events.component';
import { EventDetailsComponent } from './pages/event-details/event-details.component';
import { FaqsComponent } from './pages/faqs/faqs.component';
import { LoginComponent } from './pages/login/login.component';
import { MapsComponent } from './pages/maps/maps.component';
import { MyCreatedEventsComponent } from './pages/my-created-events/my-created-events.component';
import { MySaveEventsComponent } from './pages/my-save-events/my-save-events.component';
import { OnboardingComponent } from './pages/onboarding/onboarding.component';
import { PastEventsComponent } from './pages/past-events/past-events.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RecoverPasswordComponent } from './pages/recover-password/recover-password.component';
import { RegisterComponent } from './pages/register/register.component';
import { TechSupportComponent } from './pages/tech-support/tech-support.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "about-us", component: AboutUsComponent},
  {path: "calendar", component: CalendarComponent},
  {path: "chats", component: ChatsComponent},
  {path: "create-event", component: CreateEventsComponent},
  {path: "event-details", component: EventDetailsComponent},
  {path: "faqs", component: FaqsComponent},
  {path: "login", component: LoginComponent},
  {path: "maps", component: MapsComponent},
  {path: "my-save-events", component: MySaveEventsComponent},
  {path: "my-created-events", component: MyCreatedEventsComponent},
  {path: "onboarding", component: OnboardingComponent},
  {path: "past-events", component: PastEventsComponent},
  {path: "profile", component: ProfileComponent},
  {path: "recover-password", component: RecoverPasswordComponent},
  {path: "register", component: RegisterComponent},
  {path: "tech-support", component: TechSupportComponent},
  {path: "", redirectTo: "/home", pathMatch: 'full'},
  {path: "404", component: NotFoundComponent},
  {path: "**", redirectTo: "/404"},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

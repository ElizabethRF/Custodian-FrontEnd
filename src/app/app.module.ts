import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer.component';
import { ListsComponent } from './lists/lists.component';
import { LoginComponent } from './login/login.component';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { AddProfileComponent } from './add-profile/add-profile.component';
import { MatTableModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

const appRoutes = [
  { path: '', component: LoginComponent },
  { path: 'notifications', component: NotificationsComponent },
  { path: 'lists', component: ListsComponent },
  { path: 'people', component: AddProfileComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ListsComponent,
    LoginComponent,
    NavBarComponent,
    NotificationsComponent,
    AddProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    RouterModule.forRoot(
      appRoutes
    ),
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

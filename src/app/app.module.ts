import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThemeListComponent } from './themes/theme-list/theme-list.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { CoreModule } from './core/core.module';
import { ClientService } from './clientService';
import { AsideComponent } from './themes/aside/aside.component';
import { ThemesComponent } from './themes/themes.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { UserService } from './user/userService';
import { ProfileComponent } from './user/profile/profile.component';
import { AuthActivate } from './core/guards/auth_activate';
import { AddThemeComponent } from './add-theme/add-theme.component';
import { ThemePageComponent } from './theme-page/theme-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ThemeListComponent,
    HeaderComponent,
    FooterComponent,
    AsideComponent,
    ThemesComponent,
    HomeComponent,
    NotFoundComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    AddThemeComponent,
    ThemePageComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    ClientService,
    UserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

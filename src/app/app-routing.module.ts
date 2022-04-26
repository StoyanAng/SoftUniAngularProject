import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './user/login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegisterComponent } from './user/register/register.component';
import { ThemesComponent } from './themes/themes.component';
import { ProfileComponent } from './user/profile/profile.component';
import { AddThemeComponent } from './add-theme/add-theme.component';
import { AuthActivate } from './core/guards/auth_activate';
import { ThemePageComponent } from './theme-page/theme-page.component';

const routes: Routes = [
  {
    path: ``,
    pathMatch: `full`,
    redirectTo: `themes`,
  },
  {
    path: `themes`,
    component: ThemesComponent
  },
  {
    path: `add-theme`,
    component: AddThemeComponent,
    canActivate: [AuthActivate],
    data: {
      authRequired: true,
      authFailRedirectUrl: `/login`
    }
  },
  {
    path: `home`,
    component: HomeComponent
  },
  {
    path: `login`,
    component: LoginComponent,
    canActivate: [AuthActivate],
    data: {
      authRequired: false,
      authFailRedirectUrl: `/`
    }
  },
  {
    path: `register`,
    component: RegisterComponent
  },
  {
    path: `profile`,
    component: ProfileComponent,
    canActivate: [AuthActivate],
    data: {
      authRequired: true,
      authFailRedirectUrl: `/login`
    }
  },
  {
    path: `theme/:id`,
    component: ThemePageComponent,
    data: {
      theme: {}
    }
  },
  {
    path: `**`,
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

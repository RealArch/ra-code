import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicComponent } from './components/public/public.component';
import { HomeComponent } from './components/public/home/home.component';
import { ContactComponent } from './components/public/contact/contact.component';

const routes: Routes = [
  {
    path: '',
    component: PublicComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking',
    scrollPositionRestoration: "enabled",
    anchorScrolling: 'enabled',

  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

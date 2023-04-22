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

  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

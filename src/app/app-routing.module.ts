import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicComponent } from './components/public/public.component';
import { HomeComponent } from './components/public/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: PublicComponent,
    children:[
      {
        path:'',
        component:HomeComponent
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

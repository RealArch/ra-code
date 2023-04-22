import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {
  private publicSideNav: MatSidenav;
  constructor() { }


  public toggle(): void {
    console.log(this.publicSideNav)
    this.publicSideNav.toggle();
   }
   public setPublicSideNav(sidenav: MatSidenav) {
    this.publicSideNav = sidenav;
}

}

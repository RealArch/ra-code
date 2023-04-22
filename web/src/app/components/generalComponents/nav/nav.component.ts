import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { SidenavService } from 'src/app/services/sidenav/sidenav.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  private sidenav: MatSidenav;

  constructor( public sidenavService:SidenavService){

  }
  toggle() {
    this.sidenavService.toggle()
  }

}

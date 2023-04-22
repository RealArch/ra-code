import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { SidenavService } from './services/sidenav/sidenav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private sidenavService: SidenavService) {
  }
  @ViewChild('publicSideNav') public publicSideNav: MatSidenav;
  title = 'web';

  ngAfterViewInit(): void {
    this.sidenavService.setPublicSideNav(this.publicSideNav);
  }
}

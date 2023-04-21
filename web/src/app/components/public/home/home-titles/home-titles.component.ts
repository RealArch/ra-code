import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home-titles',
  templateUrl: './home-titles.component.html',
  styleUrls: ['./home-titles.component.scss']
})
export class HomeTitlesComponent {
  @Input() title: string | undefined;
  @Input() description: string | undefined;
  @Input() theme: string | undefined;

  ngOnInit() {
    if (this.theme == undefined) {
      this.theme = 'light'
    }
  }
}

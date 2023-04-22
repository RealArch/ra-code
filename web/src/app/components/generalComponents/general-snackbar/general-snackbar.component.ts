import { Component, inject } from '@angular/core';
import { MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
  selector: 'app-general-snackbar',
  templateUrl: './general-snackbar.component.html',
  styleUrls: ['./general-snackbar.component.scss']
})
export class GeneralSnackbarComponent {
  snackBarRef = inject(MatSnackBarRef);

}

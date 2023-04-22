import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GeneralSnackbarComponent } from 'src/app/components/generalComponents/general-snackbar/general-snackbar.component';
import { OkDialogComponent } from 'src/app/components/generalComponents/ok-dialog/ok-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class PopupsService {

  constructor(
    private _snackBar: MatSnackBar,
    private _dialog: MatDialog
  ) { }

  showSnackBar(css: string, msg: string) {
    this._snackBar.open(msg, 'Ok', {  
      duration: 10000,
      panelClass: css,
      data: {
        msg: msg
      }
    });
  }
  okDialog(title: string, msg: string) {
    this._dialog.open(OkDialogComponent, {
      data: {
        title: title,
        msg: msg
      }
    })
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule, MatIconModule,
    MatInputModule, MatSnackBarModule,
    MatProgressSpinnerModule, MatDialogModule,
    MatSidenavModule, MatMenuModule,
    MatListModule
  ],
  exports: [
    MatButtonModule, MatIconModule,
    MatInputModule, MatSnackBarModule,
    MatProgressSpinnerModule, MatDialogModule,
    MatSidenavModule, MatMenuModule,
    MatListModule
  ]
})
export class MaterialModule { }

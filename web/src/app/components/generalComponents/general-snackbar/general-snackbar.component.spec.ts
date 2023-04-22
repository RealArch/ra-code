import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralSnackbarComponent } from './general-snackbar.component';

describe('GeneralSnackbarComponent', () => {
  let component: GeneralSnackbarComponent;
  let fixture: ComponentFixture<GeneralSnackbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralSnackbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneralSnackbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTitlesComponent } from './home-titles.component';

describe('HomeTitlesComponent', () => {
  let component: HomeTitlesComponent;
  let fixture: ComponentFixture<HomeTitlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeTitlesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeTitlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

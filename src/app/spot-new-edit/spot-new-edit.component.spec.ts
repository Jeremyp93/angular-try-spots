import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotNewEditComponent } from './spot-new-edit.component';

describe('SpotNewEditComponent', () => {
  let component: SpotNewEditComponent;
  let fixture: ComponentFixture<SpotNewEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpotNewEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpotNewEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

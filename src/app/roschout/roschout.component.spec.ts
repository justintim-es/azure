import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoschoutComponent } from './roschout.component';

describe('RoschoutComponent', () => {
  let component: RoschoutComponent;
  let fixture: ComponentFixture<RoschoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoschoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoschoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

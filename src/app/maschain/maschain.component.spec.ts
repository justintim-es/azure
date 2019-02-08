import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaschainComponent } from './maschain.component';

describe('MaschainComponent', () => {
  let component: MaschainComponent;
  let fixture: ComponentFixture<MaschainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaschainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaschainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DvtoolComponent } from './dvtool.component';

describe('DvtoolComponent', () => {
  let component: DvtoolComponent;
  let fixture: ComponentFixture<DvtoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DvtoolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DvtoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

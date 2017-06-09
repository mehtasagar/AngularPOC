import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleDowCallComponent } from './sample-dow-call.component';

describe('SampleDowCallComponent', () => {
  let component: SampleDowCallComponent;
  let fixture: ComponentFixture<SampleDowCallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleDowCallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleDowCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

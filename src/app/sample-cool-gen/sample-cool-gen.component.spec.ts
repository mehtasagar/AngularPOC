import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleCoolGenComponent } from './sample-cool-gen.component';

describe('SampleCoolGenComponent', () => {
  let component: SampleCoolGenComponent;
  let fixture: ComponentFixture<SampleCoolGenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleCoolGenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleCoolGenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

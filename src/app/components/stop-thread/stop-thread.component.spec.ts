import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StopThreadComponent } from './stop-thread.component';

describe('StopThreadComponent', () => {
  let component: StopThreadComponent;
  let fixture: ComponentFixture<StopThreadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StopThreadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StopThreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

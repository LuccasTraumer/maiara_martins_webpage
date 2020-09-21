import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApresentationComponentComponent } from './apresentation-component.component';

describe('ApresentationComponentComponent', () => {
  let component: ApresentationComponentComponent;
  let fixture: ComponentFixture<ApresentationComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApresentationComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApresentationComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

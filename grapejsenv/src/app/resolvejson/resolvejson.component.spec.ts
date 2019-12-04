import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResolvejsonComponent } from './resolvejson.component';

describe('ResolvejsonComponent', () => {
  let component: ResolvejsonComponent;
  let fixture: ComponentFixture<ResolvejsonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResolvejsonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResolvejsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

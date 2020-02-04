import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityChildComponent } from './city-child.component';

describe('CityChildComponent', () => {
  let component: CityChildComponent;
  let fixture: ComponentFixture<CityChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

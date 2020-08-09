import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceRoadMapComponent } from './device-road-map.component';

describe('DeviceRoadMapComponent', () => {
  let component: DeviceRoadMapComponent;
  let fixture: ComponentFixture<DeviceRoadMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceRoadMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceRoadMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

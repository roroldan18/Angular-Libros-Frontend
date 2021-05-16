import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerPersonComponent } from './container-person.component';

describe('ContainerPersonComponent', () => {
  let component: ContainerPersonComponent;
  let fixture: ComponentFixture<ContainerPersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerPersonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

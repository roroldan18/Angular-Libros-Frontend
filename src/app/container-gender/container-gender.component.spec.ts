import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerGenderComponent } from './container-gender.component';

describe('ContainerGenderComponent', () => {
  let component: ContainerGenderComponent;
  let fixture: ComponentFixture<ContainerGenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerGenderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerGenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

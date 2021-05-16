import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerBookComponent } from './container-book.component';

describe('ContainerBookComponent', () => {
  let component: ContainerBookComponent;
  let fixture: ComponentFixture<ContainerBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerBookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

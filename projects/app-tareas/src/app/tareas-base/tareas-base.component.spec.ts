import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TareasBaseComponent } from './tareas-base.component';

describe('TareasBaseComponent', () => {
  let component: TareasBaseComponent;
  let fixture: ComponentFixture<TareasBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TareasBaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TareasBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

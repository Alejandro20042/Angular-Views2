import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarCamaraComponent } from './actualizar-camara.component';

describe('ActualizarCamaraComponent', () => {
  let component: ActualizarCamaraComponent;
  let fixture: ComponentFixture<ActualizarCamaraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActualizarCamaraComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActualizarCamaraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

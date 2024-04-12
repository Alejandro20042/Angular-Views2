import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresarCorreoComponent } from './ingresar-correo.component';

describe('IngresarCorreoComponent', () => {
  let component: IngresarCorreoComponent;
  let fixture: ComponentFixture<IngresarCorreoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IngresarCorreoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IngresarCorreoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarCamaraComponent } from './agregar-camara.component';

describe('AgregarCamaraComponent', () => {
  let component: AgregarCamaraComponent;
  let fixture: ComponentFixture<AgregarCamaraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AgregarCamaraComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgregarCamaraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

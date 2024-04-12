import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CamaraViewComponent } from './camara-view.component';

describe('CamaraViewComponent', () => {
  let component: CamaraViewComponent;
  let fixture: ComponentFixture<CamaraViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CamaraViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CamaraViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

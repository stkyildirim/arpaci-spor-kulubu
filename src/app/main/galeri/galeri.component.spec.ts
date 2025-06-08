import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaleriComponent } from './galeri.component';

describe('GaleriComponent', () => {
  let component: GaleriComponent;
  let fixture: ComponentFixture<GaleriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GaleriComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GaleriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

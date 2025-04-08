import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenentsComponent } from './tenents.component';

describe('TenentsComponent', () => {
  let component: TenentsComponent;
  let fixture: ComponentFixture<TenentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TenentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TenentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

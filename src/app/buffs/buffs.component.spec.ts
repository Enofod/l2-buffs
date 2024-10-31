import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuffsComponent } from './buffs.component';

describe('BuffsComponent', () => {
  let component: BuffsComponent;
  let fixture: ComponentFixture<BuffsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuffsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuffsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

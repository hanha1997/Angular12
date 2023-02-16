import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChillComponent } from './chill.component';

describe('ChillComponent', () => {
  let component: ChillComponent;
  let fixture: ComponentFixture<ChillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

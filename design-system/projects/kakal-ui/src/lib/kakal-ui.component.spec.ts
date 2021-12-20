import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KakalUiComponent } from './kakal-ui.component';

describe('KakalUiComponent', () => {
  let component: KakalUiComponent;
  let fixture: ComponentFixture<KakalUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KakalUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KakalUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

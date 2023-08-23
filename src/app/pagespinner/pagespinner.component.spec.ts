import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagespinnerComponent } from './pagespinner.component';

describe('PagespinnerComponent', () => {
  let component: PagespinnerComponent;
  let fixture: ComponentFixture<PagespinnerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagespinnerComponent]
    });
    fixture = TestBed.createComponent(PagespinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

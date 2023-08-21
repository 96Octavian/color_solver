import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddbottleComponent } from './addbottle.component';

describe('AddbottleComponent', () => {
  let component: AddbottleComponent;
  let fixture: ComponentFixture<AddbottleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddbottleComponent]
    });
    fixture = TestBed.createComponent(AddbottleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
